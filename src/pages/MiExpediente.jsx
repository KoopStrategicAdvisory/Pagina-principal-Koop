import React, { useEffect, useRef, useState } from 'react';
import '../styles/dashboard.css';
import '../styles/mi-expediente.css';
import { useAuth } from '../context/AuthContext';
import { normalizeUpperAscii } from '../utils/strings.js';
import { listRecentDocs, uploadDoc, getDownloadUrl } from '../api/docs';

export default function MiExpediente() {
  const [activeTab, setActiveTab] = useState('docs');
  const { user } = useAuth();
  const displayName = normalizeUpperAscii(user?.name || '');

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
      const data = await listRecentDocs(20);
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

  const onClickUpload = () => fileInputRef.current?.click();

  const onFileChange = async (e) => {
    const f = e.target?.files?.[0];
    if (!f) return;
    try {
      setLoading(true);
      setError(null);
      const res = await uploadDoc(f);
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
          <div className="dash-title">Mi expediente</div>
        </div>

        {/* Barra de acciones / búsqueda */}
        <div className="dash-item me-subbar">
          <div className="me-hello">Bienvenido: {displayName}</div>
          <select className="me-select" aria-label="Tipo de búsqueda">
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
            <button className="btn btn-secondary">Ver información</button>
          </div>
        </div>

        {/* Layout 3 columnas */}
        <div className="me-layout">
          {/* Izquierda: Árbol (mock) */}
          <aside className="me-left dash-item">
            <div className="me-head">ESPECIALIDAD: LABORAL</div>
            <div className="me-tree">
              <details open>
                <summary>
                  <span className="me-chev">›</span>
                  <span>JUZGADO 009 MUNICIPAL DE PEQUEÑAS CAUSAS</span>
                </summary>
                <div className="me-leaf">
                  <div>110014105009-20250011400</div>
                  <div className="me-tag">Cuadernos</div>
                </div>
              </details>
              <details open>
                <summary>
                  <span className="me-chev">›</span>
                  <span>JUZGADO 003 LABORAL DEL CIRCUITO</span>
                </summary>
                <div className="me-leaf">
                  <div>110014105009-2025011401</div>
                  <div className="me-tag">Cuadernos</div>
                </div>
              </details>
              <details>
                <summary>
                  <span className="me-chev">›</span>
                  <span>JUZGADO 015 MUNICIPAL DE PEQUEÑAS CAUSAS</span>
                </summary>
                <div className="me-leaf">
                  <div>110014105015-20240208700</div>
                  <div className="me-tag">Cuadernos</div>
                </div>
              </details>
              <details>
                <summary>
                  <span className="me-chev">›</span>
                  <span>JUZGADO 048 LABORAL DEL CIRCUITO</span>
                </summary>
                <div className="me-leaf">
                  <div>110013105048-2024090000</div>
                  <div className="me-tag">Cuadernos</div>
                </div>
              </details>
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
                      <th>Tamaño</th>
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
                      const dt = d.createdTime ? new Date(d.createdTime) : null;
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
                              onClick={() => onDownload(d.key, d.downloadUrl || d.webContentLink || d.webViewLink)}
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
                      <th>Actuación</th>
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
                <div className="me-tag">Clase</div><div>Laboral – Ordinario</div>
                <div className="me-tag">Demandante</div><div>Juan Pérez</div>
                <div className="me-tag">Demandado</div><div>Acme S.A.S.</div>
                <div className="me-tag">Juzgado</div><div>JDO 009 MPC</div>
                <div className="me-tag">Estado</div><div>En trámite</div>
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
