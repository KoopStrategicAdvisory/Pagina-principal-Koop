import React, { useEffect, useRef, useState } from 'react';
import '../styles/dashboard.css';
import '../styles/mi-expediente.css';
import { useAuth } from '../context/AuthContext';
import { normalizeUpperAscii } from '../utils/strings.js';
import { listRecentDocs, uploadDoc, getDownloadUrl } from '../api/docs';
import { listActiveClients } from '../api/clients';

export default function MiExpediente() {
  const [activeTab, setActiveTab] = useState('docs');
  const { user } = useAuth();
  const displayName = normalizeUpperAscii(user?.name || '');
  const DEFAULT_FOLDER = 'documentos_iniciales';
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
                      <summary>
                        <span className="me-chev">&gt;</span>
                        <span>{c.name}</span>
                      </summary>
                      <div className="me-leaf">
                        <div>{c.documentNumber || c.email || c.id}</div>
                        <div className="me-tag">Asignado</div>
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
                        <td colSpan={6} style={{ color: '#9fb3cc' }}>
                          {loading ? 'Cargando...' : 'No hay documentos para mostrar'}
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




