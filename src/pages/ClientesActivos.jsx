import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { listActiveClients, updateClient } from '../api/clients';
import '../styles/dashboard.css';

const ALLOWED_ROLES = ['admin', 'user'];

function normalizeRoles(value, { defaultRole = 'user' } = {}) {
  const normalizedDefault = String(defaultRole || 'user').trim().toLowerCase();
  const safeDefault = ALLOWED_ROLES.includes(normalizedDefault) ? normalizedDefault : 'user';
  const roles = Array.isArray(value) ? value : [value];
  const normalized = roles
    .map((role) => String(role || '').trim().toLowerCase())
    .filter((role) => ALLOWED_ROLES.includes(role));
  if (normalized.includes('admin')) return ['admin'];
  if (normalized.includes('user')) return ['user'];
  return [safeDefault];
}

function useIsAdmin(user) {
  const roles = normalizeRoles(user?.roles);
  return roles.includes('admin');
}

export default function ClientesActivos() {
  const { user } = useAuth();
  const isAdmin = useIsAdmin(user);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(null); // { id, name, email, documentNumber, phone }
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  const fetchClients = async () => {
    if (!isAdmin) return;
    setLoading(true);
    setError(null);
    try {
      const data = await listActiveClients();
      const items = Array.isArray(data?.items) ? data.items : [];
      setClients(items);
    } catch (e) {
      setError(e?.response?.data?.message || e?.message || 'No se pudo cargar la lista de clientes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin]);

  const filtered = useMemo(() => {
    const q = String(search || '').trim().toLowerCase();
    if (!q) return clients;
    return clients.filter((c) =>
      [c.name, c.email, c.documentNumber, c.phone, c.id]
        .map((v) => String(v || '').toLowerCase())
        .some((v) => v.includes(q))
    );
  }, [clients, search]);

  const onEdit = (client) => {
    setEditing({
      id: client.id,
      name: client.name || '',
      email: client.email || '',
      documentNumber: client.documentNumber || '',
      phone: client.phone || '',
    });
  };

  const onSave = async () => {
    if (!editing) return;
    const payload = {
      name: String(editing.name || '').trim(),
      documentNumber: String(editing.documentNumber || '').trim(),
      phone: String(editing.phone || '').trim(),
    };
    try {
      setSaving(true);
      setError(null);
      const resp = await updateClient(editing.id, payload);
      const updated = resp?.client || null;
      if (updated) {
        setClients((prev) => prev.map((c) => (c.id === updated.id ? { ...c, ...updated } : c)));
      }
      setEditing(null);
    } catch (e) {
      setError(e?.response?.data?.message || e?.message || 'No se pudo guardar la informacion');
    } finally {
      setSaving(false);
    }
  };

  if (!isAdmin) {
    return (
      <div className="dash-page" style={{ padding: 40 }}>
        <div className="dash-card" style={{ maxWidth: 560 }}>
          <h2 className="dash-title">Acceso restringido</h2>
          <p style={{ marginTop: 12 }}>
            Esta seccion esta disponible solo para administradores.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="dash-page"
      style={{
        backgroundImage:
          "linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        padding: 32,
      }}
    >
      <div className="dash-card" style={{ width: '100%', maxWidth: 1200 }}>
        <style>{`
          .only-mobile { display: block; }
          .only-desktop { display: none; }
          @media (min-width: 768px) {
            .only-mobile { display: none; }
            .only-desktop { display: block; }
          }
          @media (max-width: 767px) {
            .mobile-list { display: grid; gap: 10px; }
          }
          /* Header layout */
          .clients-header { display: grid; gap: 10px; align-items: center; }
          .clients-actions { display: grid; grid-template-columns: 1fr auto; gap: 8px; }
          @media (min-width: 768px) {
            .clients-header { grid-template-columns: 1fr auto; }
          }
          @media (max-width: 767px) {
            .clients-actions { grid-template-columns: 1fr; }
            .clients-actions .btn { width: 100%; }
          }
          .mobile-item { border: 1px solid rgba(148,163,184,0.35); border-radius: 10px; overflow: hidden; background: #1b263b; }
          .mobile-item-header { display: flex; align-items: center; justify-content: space-between; padding: 0; cursor: pointer; height: 44px; }
          .mobile-item .btn { border-radius: 10px; width: 100%; }
          .mobile-item-title { flex: 1; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: left; padding: 0 12px; }
          .mobile-item-details { padding: 10px 12px; border-top: 1px solid rgba(148,163,184,0.25); }
          .kv { display: grid; grid-template-columns: 120px 1fr; gap: 8px; font-size: 14px; }
          .kv span { opacity: 0.9; }
          @media (max-width: 480px) {
            .kv { grid-template-columns: 1fr; }
            .kv span { font-size: 12px; opacity: 0.8; }
          }
        `}</style>
        <div className="dash-header clients-header" style={{ marginBottom: 16 }}>
          <div className="dash-title">Clientes activos</div>
          <div className="clients-actions">
            <input
              type="search"
              placeholder="Buscar por nombre, email, cedula o celular"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                background: '#1b263b',
                color: '#e2e8f0',
                border: '1px solid rgba(148,163,184,0.35)',
                borderRadius: 8,
                padding: '6px 10px',
              }}
            />
            <button className="btn btn-secondary" onClick={fetchClients} disabled={loading}>
              {loading ? 'Actualizando...' : 'Refrescar'}
            </button>
          </div>
        </div>

        {error && (
          <div style={{ background: '#7f1d1d', color: '#fecaca', padding: 12, borderRadius: 8, marginBottom: 16 }}>
            {error}
          </div>
        )}

        {/* Desktop table */}
        <div className="dash-item only-desktop" style={{ overflowX: 'auto' }}>
          <table className="me-table" style={{ minWidth: 820 }}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Cedula</th>
                <th>Celular</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center', padding: 16 }}>
                    {loading ? 'Cargando...' : 'No hay clientes activos para mostrar'}
                  </td>
                </tr>
              )}
              {filtered.map((c) => (
                <tr key={c.id}>
                  <td>{c.name || '-'}</td>
                  <td>{c.email || '-'}</td>
                  <td>{c.documentNumber || '-'}</td>
                  <td>{c.phone || '-'}</td>
                  <td>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      <button className="btn btn-primary btn-sm" onClick={() => onEdit(c)}>Editar</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile list with expandable details */}
        <div className="dash-item only-mobile mobile-list">
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: 8 }}>
              {loading ? 'Cargando...' : 'No hay clientes activos para mostrar'}
            </div>
          )}
          {filtered.map((c) => {
            const isOpen = expandedId === c.id;
            return (
              <div key={c.id} className="mobile-item">
                <button
                  type="button"
                  className="btn btn-primary btn-sm mobile-item-header"
                  onClick={() => setExpandedId((prev) => (prev === c.id ? null : c.id))}
                  aria-expanded={isOpen}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <div className="mobile-item-title">{c.name || '-'}</div>
                  <div style={{ opacity: 0.9, fontSize: 12, paddingRight: 10 }}>{isOpen ? '▲' : '▼'}</div>
                </button>
                {isOpen && (
                  <div className="mobile-item-details">
                    <div className="kv"><span>Email</span><div>{c.email || '-'}</div></div>
                    <div className="kv" style={{ marginTop: 6 }}><span>Cédula</span><div>{c.documentNumber || '-'}</div></div>
                    <div className="kv" style={{ marginTop: 6 }}><span>Celular</span><div>{c.phone || '-'}</div></div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
                      <button className="btn btn-primary btn-sm" onClick={() => onEdit(c)}>Editar</button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {editing && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50,
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setEditing(null); }}
        >
          <div className="dash-card" style={{ width: '100%', maxWidth: 560, padding: 16 }}>
            <div className="dash-header" style={{ marginBottom: 12 }}>
              <div className="dash-title">Editar cliente</div>
            </div>
            <div className="dash-item" style={{ display: 'grid', gap: 12 }}>
              <label style={{ display: 'grid', gap: 6 }}>
                <span>Nombre</span>
                <input
                  value={editing.name}
                  onChange={(e) => setEditing((prev) => ({ ...prev, name: e.target.value }))}
                  style={{
                    background: '#1b263b', color: '#e2e8f0', border: '1px solid rgba(148,163,184,0.35)', borderRadius: 8, padding: '8px 10px',
                  }}
                />
              </label>
              <label style={{ display: 'grid', gap: 6 }}>
                <span>Email</span>
                <input
                  type="email"
                  value={editing.email}
                  readOnly
                  style={{
                    background: '#1b263b', color: '#e2e8f0', border: '1px solid rgba(148,163,184,0.35)', borderRadius: 8, padding: '8px 10px',
                  }}
                />
              </label>
              <label style={{ display: 'grid', gap: 6 }}>
                <span>Cedula</span>
                <input
                  value={editing.documentNumber}
                  onChange={(e) => setEditing((prev) => ({ ...prev, documentNumber: e.target.value }))}
                  style={{
                    background: '#1b263b', color: '#e2e8f0', border: '1px solid rgba(148,163,184,0.35)', borderRadius: 8, padding: '8px 10px',
                  }}
                />
              </label>
              <label style={{ display: 'grid', gap: 6 }}>
                <span>Celular</span>
                <input
                  value={editing.phone}
                  onChange={(e) => setEditing((prev) => ({ ...prev, phone: e.target.value }))}
                  style={{
                    background: '#1b263b', color: '#e2e8f0', border: '1px solid rgba(148,163,184,0.35)', borderRadius: 8, padding: '8px 10px',
                  }}
                />
              </label>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12 }}>
              <button className="btn btn-secondary" onClick={() => setEditing(null)} disabled={saving}>
                Cancelar
              </button>
              <button className="btn btn-primary" onClick={onSave} disabled={saving}>
                {saving ? 'Guardando...' : 'Guardar cambios'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
