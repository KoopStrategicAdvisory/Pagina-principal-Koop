import React, { useMemo, useState } from 'react';
import { useAuth } from '../context/AuthContext';
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

export default function Dashboard() {
  const { user, accessToken, logout } = useAuth();
  const [copied, setCopied] = useState(false);

  const payload = useMemo(() => (accessToken ? decodeJwt(accessToken) : null), [accessToken]);
  const expMs = payload?.exp ? payload.exp * 1000 : null;
  const now = Date.now();
  const remainingSec = expMs ? (expMs - now) / 1000 : 0;

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
          <button className="btn btn-secondary" onClick={logout}>Cerrar sesión</button>
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
    </div>
  );
}
