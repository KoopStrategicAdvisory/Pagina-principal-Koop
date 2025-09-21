import React, { useEffect, useRef, useState } from 'react';
import '../styles/dashboard.css';
import '../styles/mi-expediente.css';
import { useAuth } from '../context/AuthContext';
import { normalizeUpperAscii } from '../utils/strings.js';
import { listRecentDocs, uploadDoc, getDownloadUrl, getClientDocumentHistory } from '../api/docs';
import { listActiveClients } from '../api/clients';

export default function MiExpediente() {
  const [activeTab, setActiveTab] = useState('docs');
  const { user } = useAuth();
  const displayName = normalizeUpperAscii(user?.name || '');
  const DEFAULT_FOLDER = 'clientes';
  const roles = Array.isArray(user?.roles) ? user.roles : (user?.roles ? [user?.roles] : []);
  const isAdmin = roles.map((r)=>String(r||'').trim().toLowerCase()).includes('admin');
  // Clientes asignados (solo admin)
  const [assignedClients, setAssignedClients] = useState([]);
  const [assignedLoading, setAssignedLoading] = useState(false);
  const [assignedError, setAssignedError] = useState(null);

  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [warning, setWarning] = useState(null);
  const fileInputRef = useRef(null);

  // Estados para gestión de carpetas de clientes
  const [selectedClient, setSelectedClient] = useState(null);
  const [clientFolders, setClientFolders] = useState({});
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [loadingFolders, setLoadingFolders] = useState(false);

  const loadDocs = async () => {
    setLoading(true);
    setError(null);
    setWarning(null);
    try {
      const data = await listRecentDocs({ limit: 20, subfolder: DEFAULT_FOLDER });
      setDocs(Array.isArray(data?.items) ? data.items : []);
      if (data?.warning) setWarning(data.warning);
    } catch (e) {
      setError(e?.message || 'Error cargando documentos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'docs') loadDocs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  // Cargar clientes asignados al admin actual
  useEffect(() => {
    if (!isAdmin) return;
    let ignore = false;
    (async () => {
      try {
        setAssignedLoading(true);
        setAssignedError(null);
        const data = await listActiveClients();
        if (ignore) return;
        const items = Array.isArray(data?.items) ? data.items : [];
        const myId = String(user?.id || user?.sub || '').trim();
        setAssignedClients(items.filter((c) => String(c?.assignedAdmin?.id || '').trim() === myId));
      } catch (e) {
        if (!ignore) setAssignedError(e?.response?.data?.message || e?.message || 'No se pudo cargar clientes asignados');
      } finally {
        if (!ignore) setAssignedLoading(false);
      }
    })();
    return () => { ignore = true; };
  }, [isAdmin, user]);

  const onClickUpload = () => fileInputRef.current?.click();

  const onFileChange = async (e) => {
    const f = e.target?.files?.[0];
    if (!f) return;
    try {
      setLoading(true);
      setError(null);
      const res = await uploadDoc(f, { subfolder: DEFAULT_FOLDER });
      // Mostrar inmediatamente el recin subido
      if (res?.file) setDocs((prev) => [res.file, ...prev]);
      // Actualizar lista desde el backend (si hay permisos de ListBucket)
      await loadDocs();
    } catch (e2) {
      setError(e2?.message || 'Error subiendo documento');
    } finally {
      setLoading(false);
      try { e.target.value = null; } catch {}
    }
  };

  const onDownload = async (key, fallbackUrl) => {
    try {
      const { url } = await getDownloadUrl(key, 600);
      window.open(url || fallbackUrl, '_blank');
    } catch (e) {
      if (fallbackUrl) window.open(fallbackUrl, '_blank');
    }
  };

  // Función para cargar carpetas de un cliente
  const loadClientFolders = async (client) => {
    if (!client?.documentNumber) return;
    
    setLoadingFolders(true);
    try {
      // Usar el endpoint /recent para listar objetos de S3 directamente
      const data = await listRecentDocs({ 
        limit: 100,
        subfolder: `clientes/${client.documentNumber}`
      });
      
      // Agrupar documentos por carpeta
      const folders = {};
      if (Array.isArray(data?.items)) {
        data.items.forEach(item => {
          if (item.isFolder) {
            // Es una carpeta
            const folderPath = item.key?.replace(/\/$/, ''); // Remover trailing slash
            const folderName = item.name || folderPath?.split('/').pop() || 'Carpeta';
            folders[folderPath] = {
              name: folderName,
              path: folderPath,
              documents: [],
              isFolder: true
            };
          } else {
            // Es un archivo
            const folderPath = item.key?.split('/').slice(0, -1).join('/') || 'root';
            if (!folders[folderPath]) {
              folders[folderPath] = {
                name: folderPath === 'root' ? 'Documentos principales' : folderPath.split('/').pop(),
                path: folderPath,
                documents: [],
                isFolder: false
              };
            }
            folders[folderPath].documents.push(item);
          }
        });
      }
      
      // Si no hay carpetas encontradas, crear la carpeta principal del cliente
      if (Object.keys(folders).length === 0) {
        const clientFolderPath = `clientes/${client.documentNumber}`;
        folders[clientFolderPath] = {
          name: 'Documentos del cliente',
          path: clientFolderPath,
          documents: [],
          isFolder: true
        };
      }
      
      setClientFolders(prev => ({
        ...prev,
        [client.id]: folders
      }));
    } catch (e) {
      console.error('Error cargando carpetas del cliente:', e);
      // En caso de error, crear la carpeta principal del cliente
      const clientFolderPath = `clientes/${client.documentNumber}`;
      const folders = {
        [clientFolderPath]: {
          name: 'Documentos del cliente',
          path: clientFolderPath,
          documents: [],
          isFolder: true
        }
      };
      
      setClientFolders(prev => ({
        ...prev,
        [client.id]: folders
      }));
    } finally {
      setLoadingFolders(false);
    }
  };

  // Función para manejar clic en cliente
  const onClientClick = async (client) => {
    setSelectedClient(client);
    setSelectedFolder(null);
    
    // Si ya tenemos las carpetas cargadas, no las volvemos a cargar
    if (!clientFolders[client.id]) {
      await loadClientFolders(client);
    }
  };

  // Función para manejar clic en carpeta
  const onFolderClick = async (folder) => {
    setSelectedFolder(folder);
    
    // Si la carpeta ya tiene documentos cargados, los mostramos
    if (folder.documents && folder.documents.length > 0) {
      setDocs(folder.documents);
    } else {
      // Si no tiene documentos, intentamos cargar desde la API
      setLoading(true);
      try {
        const data = await listRecentDocs({ 
          limit: 100,
          subfolder: folder.path
        });
        const documents = Array.isArray(data?.items) ? data.items.filter(item => !item.isFolder) : [];
        setDocs(documents);
        
        // Actualizar la carpeta con los documentos cargados
        setClientFolders(prev => ({
          ...prev,
          [selectedClient.id]: {
            ...prev[selectedClient.id],
            [folder.path]: {
              ...folder,
              documents: documents
            }
          }
        }));
      } catch (e) {
        console.error('Error cargando documentos de la carpeta:', e);
        setDocs([]);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div
      className="dash-page"
      style={{
        backgroundImage:
          "linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      <div className="dash-card" style={{ width: '100%', maxWidth: 1320 }}>
        <div className="dash-header">
          <div className="dash-title">{isAdmin ? 'Mis expedientes' : 'Mi expediente'}</div>
        </div>

        {/* Barra de acciones / b�squeda */}
        <div className="dash-item me-subbar">
          <div className="me-hello">Bienvenido: {displayName}</div>
          <select className="me-select" aria-label="Tipo de b�squeda">
            <option>Procesos judiciales</option>
            <option>Demandas</option>
            <option>Audiencias</option>
          </select>
          <input className="me-input" placeholder="Buscar..." />
          <div className="me-actions">
            <input ref={fileInputRef} type="file" style={{ display: 'none' }} onChange={onFileChange} />
            <button className="btn btn-primary" onClick={onClickUpload} disabled={loading}>
              {loading ? 'Subiendo...' : 'Radicar documento'}
            </button>
            <button className="btn btn-secondary">Ver informaci�n</button>
          </div>
        </div>

        {/* Layout 3 columnas */}
        <div className="me-layout">
          {/* Izquierda: Clientes asignados al admin (o mensaje) */}
          <aside className="me-left dash-item">
            <div className="me-head">CLIENTE</div>
            <div className="me-tree">
              {!isAdmin && (
                <div className="me-leaf" style={{ opacity: .8 }}>
                  <div>No aplica para tu perfil.</div>
                </div>
              )}
              {isAdmin && assignedError && (
                <div className="me-leaf" style={{ color: '#fecaca' }}>{assignedError}</div>
              )}
              {isAdmin && !assignedError && assignedLoading && (
                <div className="me-leaf" style={{ opacity: .8 }}>Cargando clientes…</div>
              )}
              {isAdmin && !assignedLoading && assignedClients.length === 0 && (
                <div className="me-leaf" style={{ opacity: .8 }}>No tienes clientes asignados</div>
              )}
              {isAdmin && assignedClients.length > 0 && (
                <>
                  {assignedClients.map((c) => (
                    <details key={c.id} open>
                      <summary onClick={() => onClientClick(c)}>
                        <span className="me-chev">&gt;</span>
                        <span style={{ 
                          cursor: 'pointer',
                          color: selectedClient?.id === c.id ? '#4fd1c5' : '#e5edf7'
                        }}>
                          {c.name}
                        </span>
                      </summary>
                      <div className="me-leaf">
                        {/* Mostrar carpetas del cliente si está seleccionado, sino mostrar info básica */}
                        {selectedClient?.id === c.id ? (
                          <div>
                            {loadingFolders ? (
                              <div style={{ color: '#9fb3cc', fontSize: '12px' }}>
                                Cargando carpetas...
                              </div>
                            ) : (
                              <div>
                                {Object.values(clientFolders[c.id] || {}).map((folder, index) => (
                                  <div 
                                    key={index}
                                    className="me-leaf"
                                    style={{ 
                                      cursor: 'pointer',
                                      backgroundColor: selectedFolder?.path === folder.path ? '#2a3a51' : 'transparent',
                                      borderRadius: '4px',
                                      margin: '2px 0',
                                      padding: '4px 8px'
                                    }}
                                    onClick={() => onFolderClick(folder)}
                                  >
                                    <div style={{ 
                                      color: selectedFolder?.path === folder.path ? '#4fd1c5' : '#e5edf7',
                                      fontSize: '13px'
                                    }}>
                                      📁 {folder.name}
                                    </div>
                                    <div className="me-tag" style={{ fontSize: '10px' }}>
                                      {folder.documents?.length || 0} docs
                                    </div>
                                  </div>
                                ))}
                                {Object.keys(clientFolders[c.id] || {}).length === 0 && !loadingFolders && (
                                  <div style={{ color: '#9fb3cc', fontSize: '12px' }}>
                                    No hay carpetas disponibles
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        ) : (
                          <div>
                            <div>{c.documentNumber || c.email || c.id}</div>
                            <div className="me-tag">Asignado</div>
                          </div>
                        )}
                      </div>
                    </details>
                  ))}
                </>
              )}
            </div>
          </aside>
          {/* Centro: Tabs + Tabla */}
          <main className="me-center dash-item">
            <div className="me-tabs">
              <div
                className={`me-tab ${activeTab === 'docs' ? 'active' : ''}`}
                onClick={() => setActiveTab('docs')}
                role="button"
                tabIndex={0}
              >
                Documentos del Proceso
              </div>
              <div
                className={`me-tab ${activeTab === 'aud' ? 'active' : ''}`}
                onClick={() => setActiveTab('aud')}
                role="button"
                tabIndex={0}
              >
                Audiencias
              </div>
            </div>

            {activeTab === 'docs' && (
              <div className="me-table-wrap">
                {/* Información de contexto */}
                {selectedClient && selectedFolder && (
                  <div style={{ 
                    background: '#1e2a3a', 
                    padding: '12px 16px', 
                    borderBottom: '1px solid #34465a',
                    color: '#e2e8f0',
                    fontSize: '14px'
                  }}>
                    <strong>Cliente:</strong> {selectedClient.name} | 
                    <strong> Carpeta:</strong> {selectedFolder.name} 
                    <span style={{ color: '#9fb3cc', marginLeft: '8px' }}>
                      ({selectedFolder.documents?.length || 0} documentos)
                    </span>
                  </div>
                )}
                {selectedClient && !selectedFolder && (
                  <div style={{ 
                    background: '#1e2a3a', 
                    padding: '12px 16px', 
                    borderBottom: '1px solid #34465a',
                    color: '#e2e8f0',
                    fontSize: '14px'
                  }}>
                    <strong>Cliente seleccionado:</strong> {selectedClient.name} - 
                    <span style={{ color: '#9fb3cc' }}> Selecciona una carpeta para ver sus documentos</span>
                  </div>
                )}
                {!selectedClient && (
                  <div style={{ 
                    background: '#1e2a3a', 
                    padding: '12px 16px', 
                    borderBottom: '1px solid #34465a',
                    color: '#9fb3cc',
                    fontSize: '14px'
                  }}>
                    Selecciona un cliente para ver sus carpetas y documentos
                  </div>
                )}

                {error && (
                  <div style={{ color: '#ef4444', padding: '8px 12px' }}>{String(error)}</div>
                )}
                {warning && (
                  <div style={{ color: '#f59e0b', padding: '8px 12px' }}>
                    Aviso: {String(warning) === 'S3_LIST_FORBIDDEN' ? 'No hay permisos para listar el bucket. Tus documentos siguen disponibles si conservas el enlace.' : String(warning)}
                  </div>
                )}
                <table className="me-table">
                  <thead>
                    <tr>
                      <th style={{ width: 42 }}>
                        <input type="checkbox" />
                      </th>
                      <th>Fecha de registro</th>
                      <th>Documento</th>
                      <th>Tipo</th>
                      <th>Tama�o</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {docs.length === 0 && (
                      <tr>
                        <td colSpan={6} style={{ color: '#9fb3cc', textAlign: 'center', padding: '20px' }}>
                          {loading ? 'Cargando...' : 
                           selectedClient && selectedFolder ? 
                           `No hay documentos en la carpeta "${selectedFolder.name}"` :
                           selectedClient ? 
                           'Selecciona una carpeta para ver sus documentos' :
                           'Selecciona un cliente para ver sus documentos'
                          }
                        </td>
                      </tr>
                    )}
                    {docs.map((d) => {
                      const dt = d.lastModified ? new Date(d.lastModified) : (d.createdTime ? new Date(d.createdTime) : null);
                      const name = d.name || (d.key || '').split('/').pop();
                      const sizeKb = typeof d.size === 'number' ? Math.max(1, Math.round(d.size / 1024)) : null;
                      const mime = d.mimeType || (name && name.toLowerCase().endsWith('.pdf') ? 'application/pdf' : undefined);
                      return (
                        <tr key={d.key || d.id}>
                          <td><input type="checkbox" /></td>
                          <td>{dt ? dt.toLocaleString() : '-'}</td>
                          <td title={name}>{name}</td>
                          <td>{mime ? (mime.split('/')[1] || mime) : '-'}</td>
                          <td>{sizeKb ? `${sizeKb} KB` : '-'}</td>
                          <td>
                            <button
                              className="btn btn-secondary btn-sm"
                              onClick={() => onDownload(d.key, d.downloadURL || d.downloadUrl || d.webContentLink || d.webViewLink)}
                            >
                              Descargar
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'aud' && (
              <div className="me-table-wrap">
                <table className="me-table">
                  <thead>
                    <tr>
                      <th>Fecha</th>
                      <th>Actuaci�n</th>
                      <th>Juzgado</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2025-09-03 08:00</td>
                      <td>Audiencia inicial</td>
                      <td>JDO 003 Laboral</td>
                      <td><span className="me-badge me-badge-success">Agendada</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </main>

          {/* Derecha: Datos del Proceso */}
          <aside className="me-right dash-item">
            <div className="me-head">Datos del Proceso Judicial</div>
            <div className="me-right-content">
              <div className="me-proc-grid">
                <div className="me-tag">Radicado</div><div>110014105009-20250011400</div>
                <div className="me-tag">Clase</div><div>Laboral � Ordinario</div>
                <div className="me-tag">Demandante</div><div>Juan P�rez</div>
                <div className="me-tag">Demandado</div><div>Acme S.A.S.</div>
                <div className="me-tag">Juzgado</div><div>JDO 009 MPC</div>
                <div className="me-tag">Estado</div><div>En tr�mite</div>
              </div>
              <hr className="me-hr" />
              <button className="btn btn-primary" style={{ width: '100%' }}>Descargar expediente</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}




