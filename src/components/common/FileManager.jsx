import { useState, useEffect } from 'react';
import { listRecentDocs, uploadDoc, getDownloadUrl, createFolder, updateDownloadStats } from '../../api/docs';
import api from '../../api/axios';

const FOLDER_PREFIXES = [
  { id: 'Proceso Laboral', name: '1. Proceso Laboral' },
  { id: 'Proceso Penal', name: '2. Proceso Penal' },
  { id: 'Proceso Administrativo', name: '3. Proceso Administrativo' },
  { id: 'Proceso Civil Declarativo', name: '4. Proceso Civil Declarativo' },
  { id: 'Proceso Ejecutivo', name: '5. Proceso Ejecutivo' },
  { id: 'Proceso de Familia', name: '6. Proceso de Familia' },
  { id: 'Proceso Arbitral', name: '7. Proceso Arbitral' },
  { id: 'Trámite Notarial', name: '8. Trámite Notarial' },
  { id: 'Trámites Varios', name: '9. Trámites Varios' },
  { id: 'Otros', name: '10. Otros' }
];

export default function FileManager({ 
  client, 
  isOpen, 
  onClose, 
  showNotice 
}) {
  // Estados para el modal
  const [filesOpen, setFilesOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [filesLoading, setFilesLoading] = useState(false);
  const [filesError, setFilesError] = useState(null);
  const [filesWarning, setFilesWarning] = useState(null);
  const [filesClient, setFilesClient] = useState(null);
  const [filesFolder, setFilesFolder] = useState('');
  const [currentSubfolder, setCurrentSubfolder] = useState('');
  const [uploadingFile, setUploadingFile] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Estados para crear carpeta
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [selectedFolderPrefix, setSelectedFolderPrefix] = useState('');
  const [creatingFolder, setCreatingFolder] = useState(false);

  // Estados para eliminar archivos
  const [deletingFile, setDeletingFile] = useState(null);

  // Función para obtener la carpeta del cliente
  const folderForClient = (c) => {
    const idPart = String(c?.documentNumber || c?.id || '').trim();
    return idPart ? `clientes/${idPart}/` : 'clientes/sin-id/';
  };

  // Función para cargar archivos
  const loadClientFiles = async (folder) => {
    setFilesLoading(true);
    setFilesError(null);
    setFilesWarning(null);
    try {
      // El backend espera 'clientes' o 'clientes/cedula' como subfolder
      const subfolder = folder.startsWith('clientes/') ? folder.replace(/\/$/, '') : folder;
      
      const data = await listRecentDocs({ limit: 50, subfolder });
      setFiles(Array.isArray(data?.items) ? data.items : []);
      if (data?.warning) setFilesWarning(data.warning);
    } catch (e) {
      console.error('Error al cargar archivos:', e);
      setFilesError(e?.response?.data?.message || e?.message || 'No se pudieron cargar archivos');
    } finally {
      setFilesLoading(false);
    }
  };

  // Función para abrir el modal de archivos
  const openFilesModal = async (client) => {
    const folder = folderForClient(client);
    setFilesClient(client);
    setFilesFolder(folder);
    setCurrentSubfolder(folder);
    setFilesOpen(true);
    setShowCreateFolder(false);
    setNewFolderName('');
    setSelectedFolderPrefix('');
    
    await loadClientFiles(folder);
  };

  // Función para crear carpeta
  const onCreateFolder = async () => {
    if (!selectedFolderPrefix || !newFolderName.trim()) {
      showNotice('Por favor selecciona un tipo de carpeta y escribe un nombre', 'danger');
      return;
    }

    try {
      setCreatingFolder(true);
      setFilesError(null);

      const selectedPrefix = FOLDER_PREFIXES.find(p => p.id === selectedFolderPrefix);
      const folderName = `${selectedPrefix.id} ${newFolderName.trim()}`;
      const subfolder = `${currentSubfolder}${folderName}/`;

      await createFolder({ subfolder });
      showNotice('Carpeta creada exitosamente');
      setShowCreateFolder(false);
      setNewFolderName('');
      setSelectedFolderPrefix('');
      await loadClientFiles(currentSubfolder);
    } catch (e) {
      setFilesError(e?.response?.data?.message || e?.message || 'No se pudo crear la carpeta');
    } finally {
      setCreatingFolder(false);
    }
  };

  // Función para subir archivo
  const onUploadFile = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploadingFile(true);
      setUploadProgress(0);
      setFilesError(null);

      // Simular progreso de subida
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 10, 90));
      }, 200);

      const result = await uploadDoc(file, { subfolder: currentSubfolder });
      
      clearInterval(progressInterval);
      setUploadProgress(100);
      
      showNotice('Archivo subido exitosamente');
      await loadClientFiles(currentSubfolder);
      
      // Limpiar el input
      event.target.value = '';
    } catch (e) {
      setFilesError(e?.response?.data?.message || e?.message || 'No se pudo subir el archivo');
    } finally {
      setUploadingFile(false);
      setUploadProgress(0);
    }
  };

  // Función para descargar archivo
  const onDownloadFile = async (file) => {
    try {
      const { url } = await getDownloadUrl(file.key);
      window.open(url, '_blank');
      
      // Actualizar estadísticas si hay documentId
      if (file.documentId) {
        try {
          await updateDownloadStats(file.documentId);
        } catch (e) {
          console.warn('No se pudieron actualizar las estadísticas:', e);
        }
      }
    } catch (e) {
      showNotice('No se pudo descargar el archivo', 'danger');
    }
  };

  // Función para eliminar archivo
  const onDeleteFile = async (file) => {
    if (!file?.key) return;
    
    try {
      setDeletingFile(file.key);
      setFilesError(null);
      
      await api.delete('/docs/object', { data: { key: file.key } });
      
      showNotice('Archivo eliminado exitosamente');
      await loadClientFiles(currentSubfolder);
    } catch (e) {
      setFilesError(e?.response?.data?.message || e?.message || 'No se pudo eliminar el archivo');
    } finally {
      setDeletingFile(null);
    }
  };

  // Función para eliminar carpeta
  const onDeleteFolder = async (folder) => {
    if (!folder?.key) return;
    
    try {
      setDeletingFile(folder.key);
      setFilesError(null);
      
      await api.delete('/docs/object', { data: { key: folder.key } });
      
      showNotice('Carpeta eliminada exitosamente');
      await loadClientFiles(currentSubfolder);
    } catch (e) {
      setFilesError(e?.response?.data?.message || e?.message || 'No se pudo eliminar la carpeta');
    } finally {
      setDeletingFile(null);
    }
  };

  // Función para navegar a subcarpeta
  const onNavigateToSubfolder = async (subfolder) => {
    const normalizedSubfolder = subfolder.endsWith('/') ? subfolder : `${subfolder}/`;
    setCurrentSubfolder(normalizedSubfolder);
    await loadClientFiles(normalizedSubfolder);
  };

  // Función para navegar hacia atrás
  const onNavigateBack = async () => {
    if (currentSubfolder === filesFolder) return;
    
    const parts = currentSubfolder.split('/').filter(Boolean);
    if (parts.length <= 2) {
      setCurrentSubfolder(filesFolder);
      await loadClientFiles(filesFolder);
    } else {
      const newPath = parts.slice(0, -1).join('/') + '/';
      setCurrentSubfolder(newPath);
      await loadClientFiles(newPath);
    }
  };

  // Efecto para abrir el modal cuando se pasa la prop isOpen
  useEffect(() => {
    if (isOpen && client) {
      openFilesModal(client);
    }
  }, [isOpen, client]);

  // Función para cerrar el modal
  const handleClose = () => {
    setFilesOpen(false);
    setFiles([]);
    setFilesError(null);
    setFilesWarning(null);
    setShowCreateFolder(false);
    setNewFolderName('');
    setSelectedFolderPrefix('');
    onClose();
  };

  return (
    <>
      {/* Modal de Gestión de Archivos */}
      {filesOpen && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '90vh', width: '1200px' }}>
            <div className="modal-header">
              <h3>Gestión de Archivos - {filesClient?.fullName}</h3>
              <button className="btn btn-secondary" onClick={handleClose}>✕</button>
            </div>
            
            <div style={{ padding: '20px' }}>
              {/* Navegación y ubicación actual */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  {currentSubfolder !== filesFolder && (
                    <button 
                      className="btn btn-secondary" 
                      onClick={onNavigateBack}
                      style={{ padding: '8px 12px' }}
                    >
                      ← Volver
                    </button>
                  )}
                  <span className="muted">Ubicación actual:</span>
                  <code style={{ 
                    background: '#0c1530', 
                    color: '#e5e7eb',
                    padding: '6px 12px', 
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontFamily: 'monospace'
                  }}>
                    {(() => {
                      const currentPath = currentSubfolder || filesFolder;
                      const clientPrefix = filesFolder;
                      if (currentPath === clientPrefix) {
                        return 'Carpeta principal';
                      }
                      const subfolder = currentPath.replace(clientPrefix, '').replace(/\/$/, '');
                      return subfolder || 'Carpeta principal';
                    })()}
                  </code>
                </div>
              </div>

              {/* Errores y advertencias */}
              {filesError && (
                <div className="alert alert-error" style={{ marginBottom: '16px' }}>
                  {filesError}
                </div>
              )}
              {filesWarning && (
                <div className="alert" style={{ marginBottom: '16px', background: '#fef3c7', color: '#92400e' }}>
                  {filesWarning}
                </div>
              )}

              {/* Acciones */}
              <div className="dash-actions" style={{ marginBottom: '20px' }}>
                <button 
                  className="btn btn-primary" 
                  onClick={() => setShowCreateFolder(true)}
                  disabled={creatingFolder}
                >
                  {creatingFolder ? 'Creando...' : '+ Crear Carpeta'}
                </button>
                
                <label className="btn btn-secondary" style={{ margin: 0, cursor: 'pointer' }}>
                  {uploadingFile ? `Subiendo... ${uploadProgress}%` : '📁 Subir Archivo'}
                  <input 
                    type="file" 
                    style={{ display: 'none' }} 
                    onChange={onUploadFile}
                    disabled={uploadingFile}
                  />
                </label>
              </div>

              {/* Lista de archivos */}
              <div style={{ 
                border: '1px solid #394b61', 
                borderRadius: '12px', 
                overflow: 'hidden',
                background: '#1b263b'
              }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead style={{ background: '#0c1530' }}>
                    <tr>
                      <th style={{ padding: '12px 16px', fontWeight: '600' }}>Nombre</th>
                      <th style={{ padding: '12px 16px', fontWeight: '600' }}>Tipo</th>
                      <th style={{ padding: '12px 16px', fontWeight: '600' }}>Fecha</th>
                      <th style={{ padding: '12px 16px', fontWeight: '600' }}>Tamaño</th>
                      <th style={{ padding: '12px 16px', fontWeight: '600' }}>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {files.filter((f) => {
                      const key = f.key || '';
                      const isRootClientFolder = key === filesFolder && f.isFolder;
                      return !isRootClientFolder;
                    }).length === 0 && (
                      <tr>
                        <td colSpan={5} style={{ 
                          textAlign: 'center', 
                          padding: '40px',
                          color: '#cbd5e1'
                        }}>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                            <div>No hay archivos o carpetas para mostrar</div>
                            <div className="muted">
                              Crea una carpeta o sube un archivo para comenzar
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                    {files.filter((f) => {
                      const key = f.key || '';
                      const isRootClientFolder = key === filesFolder && f.isFolder;
                      return !isRootClientFolder;
                    }).map((f) => {
                      const dt = f.lastModified ? new Date(f.lastModified) : (f.createdTime ? new Date(f.createdTime) : null);
                      const isFolder = f.isFolder || f.key?.endsWith('/') || f.name?.endsWith('/');
                      
                      // Extraer solo el nombre de la carpeta/archivo, sin la ruta completa
                      let name = f.name || (f.key || '').split('/').pop();
                      // Si es una carpeta y el nombre contiene la ruta del cliente, extraer solo la parte final
                      if (isFolder && name && filesFolder) {
                        const clientPrefix = filesFolder.replace(/\/$/, ''); // Remover trailing slash
                        if (f.key && f.key.startsWith(clientPrefix)) {
                          // Extraer solo la parte después del prefijo del cliente
                          const relativePath = f.key.replace(clientPrefix + '/', '');
                          name = relativePath.replace(/\/$/, ''); // Remover trailing slash si existe
                        }
                      }
                      
                      const sizeKb = typeof f.size === 'number' ? Math.max(1, Math.round(f.size / 1024)) : null;
                      const mime = f.mimeType || (name && name.toLowerCase().endsWith('.pdf') ? 'application/pdf' : undefined);
                      
                      return (
                        <tr key={f.key || f.id} style={{ 
                          borderBottom: '1px solid #394b61'
                        }}>
                          <td style={{ padding: '12px 16px' }} title={name}>
                            {isFolder ? (
                              <button 
                                className="btn btn-link" 
                                onClick={() => onNavigateToSubfolder(f.key)}
                                style={{ 
                                  textAlign: 'left', 
                                  padding: 0, 
                                  color: '#fc771c',
                                  fontWeight: '500',
                                  textDecoration: 'none',
                                  fontSize: '16px'
                                }}
                                onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                                onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                              >
                                {name}
                              </button>
                            ) : (
                              <span style={{ 
                                color: '#e2e8f0',
                                fontWeight: '500'
                              }}>
                                {name}
                              </span>
                            )}
                          </td>
                          <td style={{ padding: '12px 16px' }}>
                            {isFolder ? (
                              <span style={{ 
                                color: '#fc771c',
                                fontWeight: '500'
                              }}>
                                Carpeta
                              </span>
                            ) : (
                              <span style={{ 
                                color: '#4fd1c5',
                                fontWeight: '500'
                              }}>
                                Archivo
                              </span>
                            )}
                          </td>
                          <td style={{ padding: '12px 16px', color: '#cbd5e1' }}>
                            {dt ? dt.toLocaleDateString('es-CO') : '-'}
                          </td>
                          <td style={{ padding: '12px 16px', color: '#cbd5e1' }}>
                            {sizeKb ? `${sizeKb} KB` : '-'}
                          </td>
                          <td style={{ padding: '12px 16px' }}>
                            <div style={{ display: 'flex', gap: '8px' }}>
                              {!isFolder && (
                                <button 
                                  className="btn btn-secondary" 
                                  onClick={() => onDownloadFile(f)}
                                  style={{ padding: '6px 12px', fontSize: '14px' }}
                                >
                                  📥
                                </button>
                              )}
                              <button 
                                className="btn btn-danger" 
                                onClick={() => isFolder ? onDeleteFolder(f) : onDeleteFile(f)}
                                disabled={deletingFile === f.key}
                                style={{ padding: '6px 12px', fontSize: '14px' }}
                              >
                                {deletingFile === f.key ? (
                                  <span style={{ 
                                    display: 'inline-block',
                                    width: '12px',
                                    height: '12px',
                                    border: '2px solid #fff',
                                    borderTop: '2px solid transparent',
                                    borderRadius: '50%',
                                    animation: 'spin 1s linear infinite'
                                  }}></span>
                                ) : (
                                  '🗑️'
                                )}
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal para crear carpeta */}
      {showCreateFolder && (
        <div className="modal-overlay" onClick={() => setShowCreateFolder(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '500px' }}>
            <div className="modal-header">
              <h3>Crear Nueva Carpeta</h3>
              <button className="btn btn-secondary" onClick={() => setShowCreateFolder(false)}>✕</button>
            </div>
            
            <div style={{ padding: '20px' }}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                  Tipo de Carpeta:
                </label>
                <select 
                  className="select" 
                  value={selectedFolderPrefix} 
                  onChange={(e) => setSelectedFolderPrefix(e.target.value)}
                  style={{ width: '100%' }}
                >
                  <option value="">Selecciona un tipo...</option>
                  {FOLDER_PREFIXES.map((prefix) => (
                    <option key={prefix.id} value={prefix.id}>
                      {prefix.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                  Nombre de la Carpeta:
                </label>
                <input 
                  type="text" 
                  className="input" 
                  value={newFolderName} 
                  onChange={(e) => setNewFolderName(e.target.value)}
                  placeholder="Ej: Demanda por despido injustificado"
                  style={{ width: '100%' }}
                />
              </div>
              
              <div className="dash-actions">
                <button 
                  className="btn btn-primary" 
                  onClick={onCreateFolder}
                  disabled={creatingFolder || !selectedFolderPrefix || !newFolderName.trim()}
                >
                  {creatingFolder ? 'Creando...' : 'Crear Carpeta'}
                </button>
                <button 
                  className="btn btn-secondary" 
                  onClick={() => setShowCreateFolder(false)}
                  disabled={creatingFolder}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Estilos CSS */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
