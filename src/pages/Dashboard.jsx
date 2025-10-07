import React, { useMemo, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { uploadDoc } from '../api/docs';
import '../styles/dashboard.css';

function decodeJwt(token) {
  try {
    const payload = token.split('.')[1];
    const json = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
    return JSON.parse(json);
  } catch {
    return null;
  }
}

function formatDate(ts) {
  try {
    return new Date(ts).toLocaleString();
  } catch {
    return String(ts);
  }
}

function formatRemaining(seconds) {
  if (seconds <= 0) return 'expirado';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  if (m > 60) {
    const h = Math.floor(m / 60);
    const rm = m % 60;
    return `${h}h ${rm}m`;
  }
  return `${m}m ${s}s`;
}

const DEFAULT_UPLOAD_FOLDER = 'documentos_iniciales';

export default function Dashboard() {
  const { user, accessToken, logout } = useAuth();
  const [copied, setCopied] = useState(false);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [uploadFile, setUploadFile] = useState(null);
  const [uploadFolder, setUploadFolder] = useState(DEFAULT_UPLOAD_FOLDER);
  const [uploadInputKey, setUploadInputKey] = useState(() => Date.now());
  const [uploadError, setUploadError] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [uploadingFile, setUploadingFile] = useState(false);

  const payload = useMemo(() => (accessToken ? decodeJwt(accessToken) : null), [accessToken]);
  const expMs = payload?.exp ? payload.exp * 1000 : null;
  const now = Date.now();
  const remainingSec = expMs ? (expMs - now) / 1000 : 0;

  const resetUploadState = () => {
    setUploadFile(null);
    setUploadFolder(DEFAULT_UPLOAD_FOLDER);
    setUploadInputKey(Date.now());
    setUploadError(null);
    setUploadStatus(null);
    setUploadingFile(false);
  };

  const openUploadModal = () => {
    resetUploadState();
    setUploadOpen(true);
  };

  const closeUploadModal = () => {
    setUploadOpen(false);
    resetUploadState();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0] || null;
    setUploadFile(file);
    setUploadError(null);
    if (file) {
      setUploadStatus(null);
    }
  };

  const handleUploadSubmit = async (event) => {
    event.preventDefault();
    if (!uploadFile) {
      setUploadError('Selecciona un archivo');
      return;
    }
    try {
      setUploadingFile(true);
      setUploadError(null);
      const response = await uploadDoc(uploadFile, {
        subfolder: uploadFolder || undefined,
      });
      setUploadStatus(
        response?.file?.key ? 'Archivo subido correctamente' : 'Archivo subido'
      );
      setUploadFile(null);
      setUploadInputKey(Date.now());
    } catch (error) {
      setUploadError(
        error?.response?.data?.message || error?.message || 'No se pudo subir el archivo'
      );
    } finally {
      setUploadingFile(false);
    }
  };

  const copyToken = async () => {
    try {
      await navigator.clipboard.writeText(accessToken || '');
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (_) {}
  };

  return (
    <div className="dash-page">
      <div className="dash-card">
        <div className="dash-header">
          <div className="dash-title">Dashboard</div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button type="button" className="btn btn-primary" onClick={openUploadModal}>
              Subir documento
            </button>
            <button className="btn btn-secondary" onClick={logout}>Cerrar sesión</button>
          </div>
        </div>

        <div className="dash-grid">
          <div className="dash-item">
            <h4>Usuario</h4>
            <div className="muted">ID</div>
            <div>{user?.id || payload?.sub || 'N/D'}</div>
            <div className="muted" style={{ marginTop: 8 }}>Nombre</div>
            <div>{user?.name || payload?.name || 'N/D'}</div>
            <div className="muted" style={{ marginTop: 8 }}>Email</div>
            <div>{user?.email || 'N/D'}</div>
            <div className="muted" style={{ marginTop: 8 }}>Roles</div>
            <div>{Array.isArray(user?.roles) ? user.roles.join(', ') : 'N/D'}</div>
          </div>

          <div className="dash-item">
            <h4>Token</h4>
            <div className="muted">Expira</div>
            <div>{expMs ? formatDate(expMs) : 'N/D'}</div>
            <div className="muted" style={{ marginTop: 8 }}>Tiempo restante</div>
            <div>{expMs ? formatRemaining(remainingSec) : 'N/D'}</div>
            <div className="dash-actions" style={{ marginTop: 12 }}>
              <button className="btn btn-primary" onClick={copyToken}>{copied ? 'Copiado' : 'Copiar accessToken'}</button>
            </div>
          </div>

          <div className="dash-item">
            <h4>Detalles (JWT)</h4>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontSize: 12 }}>
              {payload ? JSON.stringify(payload, null, 2) : 'N/D'}
            </pre>
          </div>
        </div>
      </div>
      {uploadOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: 16,
          }}
        >
          <div
            className="dash-card"
            style={{ width: '100%', maxWidth: 480, position: 'relative' }}
          >
            <button
              type="button"
              onClick={closeUploadModal}
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                background: 'transparent',
                border: 'none',
                color: '#334155',
                fontSize: 20,
                cursor: 'pointer',
              }}
              aria-label="Cerrar"
            >
              X
            </button>
            <h3 className="dash-title" style={{ marginBottom: 16 }}>
              Subir documento
            </h3>
            <form onSubmit={handleUploadSubmit}>
              <div style={{ marginBottom: 12 }}>
                <label style={{ display: 'block', marginBottom: 6, fontWeight: 600 }}>
                  Archivo
                </label>
                <input
                  key={uploadInputKey}
                  type="file"
                  onChange={handleFileChange}
                  disabled={uploadingFile}
                  required
                  style={{ width: '100%' }}
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', marginBottom: 6, fontWeight: 600 }}>
                  Subcarpeta (opcional)
                </label>
                <input
                  type="text"
                  placeholder={DEFAULT_UPLOAD_FOLDER}
                  value={uploadFolder}
                  onChange={(event) => setUploadFolder(event.target.value)}
                  disabled={uploadingFile}
                  style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid #cbd5f5' }}
                />
              </div>
              {uploadError && (
                <div style={{ background: '#7f1d1d', color: '#fecaca', padding: 8, borderRadius: 6, marginBottom: 12 }}>
                  {uploadError}
                </div>
              )}
              {uploadStatus && (
                <div style={{ background: '#14532d', color: '#bbf7d0', padding: 8, borderRadius: 6, marginBottom: 12 }}>
                  {uploadStatus}
                </div>
              )}
              <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeUploadModal}
                  disabled={uploadingFile}
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary" disabled={uploadingFile || !uploadFile}>
                  {uploadingFile ? 'Subiendo...' : 'Subir'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
