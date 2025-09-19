import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { listUsers, setUserActive, grantAdminRole, revokeAdminRole, deleteUser } from "../api/adminUsers";
import { createClientFromUser } from "../api/clients";
import "../styles/dashboard.css";

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
  return normalizeRoles(user?.roles).includes('admin');
}

export default function AdminUsuarios() {
  const { user } = useAuth();
  const isAdmin = useIsAdmin(user);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [updating, setUpdating] = useState(null);
  const [roleUpdating, setRoleUpdating] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [clientModal, setClientModal] = useState(null);
  const [clientSaving, setClientSaving] = useState(false);
  const [clientError, setClientError] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  const currentUserId = user?.id;

  const fetchUsers = async () => {
    if (!isAdmin) return;
    setLoading(true);
    setError(null);
    try {
      const data = await listUsers();
      setUsers(
        Array.isArray(data?.items)
          ? data.items.map((item) => ({ ...item, roles: normalizeRoles(item.roles) }))
          : []
      );
    } catch (e) {
      setError(e?.response?.data?.message || e?.message || 'No se pudo cargar la lista');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin]);

  const toggleActive = async (id, active) => {
    try {
      setUpdating(id);
      await setUserActive(id, active);
      setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, active } : u)));
    } catch (e) {
      setError(e?.response?.data?.message || e?.message || 'No se pudo actualizar el usuario');
    } finally {
      setUpdating(null);
    }
  };

  const makeAdmin = async (id) => {
    const confirmed = window.confirm('Deseas otorgar rol de administrador a este usuario?');
    if (!confirmed) return;
    try {
      setError(null);
      setRoleUpdating(id);
      const data = await grantAdminRole(id);
      if (data?.user) {
        setUsers((prev) =>
          prev.map((u) => (u.id === id ? { ...u, ...data.user, roles: normalizeRoles(data.user.roles) } : u))
        );
      }
    } catch (e) {
      setError(e?.response?.data?.message || e?.message || 'No se pudo actualizar los roles');
    } finally {
      setRoleUpdating(null);
    }
  };

  const revokeAdmin = async (id) => {
    const confirmed = window.confirm('Deseas quitar el rol de administrador a este usuario?');
    if (!confirmed) return;
    try {
      setError(null);
      setRoleUpdating(id);
      const data = await revokeAdminRole(id);
      if (data?.user) {
        setUsers((prev) =>
          prev.map((u) => (u.id === id ? { ...u, ...data.user, roles: normalizeRoles(data.user.roles) } : u))
        );
      }
    } catch (e) {
      setError(e?.response?.data?.message || e?.message || 'No se pudo actualizar los roles');
    } finally {
      setRoleUpdating(null);
    }
  };

  const removeUser = async (id) => {
    const confirmed = window.confirm('Deseas eliminar este usuario? Esta accion es permanente.');
    if (!confirmed) return;
    try {
      setDeleting(id);
      await deleteUser(id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (e) {
      setError(e?.response?.data?.message || e?.message || 'No se pudo eliminar el usuario');
    } finally {
      setDeleting(null);
    }
  };

  const openClientModal = (u) => {
    setClientError(null);
    setClientModal({
      userId: u.id,
      fullName: u.name || "",
      documentType: "",
      documentNumber: "",
      birthDate: "",
      phone: "",
      email: u.email || "",
      address: "",
      contactInfo: "",
    });
  };

  const saveClient = async () => {
    if (!clientModal?.userId) return;
    setClientError(null);
    try {
      setClientSaving(true);
      const payload = {
        fullName: String(clientModal.fullName || "").trim(),
        documentType: String(clientModal.documentType || "").trim(),
        documentNumber: String(clientModal.documentNumber || "").trim(),
        birthDate: clientModal.birthDate ? new Date(clientModal.birthDate).toISOString() : undefined,
        phone: String(clientModal.phone || "").trim(),
        email: String(clientModal.email || "").trim(),
        address: String(clientModal.address || "").trim(),
        contactInfo: String(clientModal.contactInfo || "").trim(),
      };
      if (!payload.fullName) {
        setClientError('El nombre completo es requerido');
        setClientSaving(false);
        return;
      }
      await createClientFromUser(clientModal.userId, payload);
      setClientModal(null);
    } catch (e) {
      setClientError(e?.response?.data?.message || e?.message || 'No se pudo crear el cliente');
    } finally {
      setClientSaving(false);
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
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
      }}
    >
      <div className="dash-card" style={{ width: "100%", maxWidth: 1200 }}>
        <style>{`
          .only-mobile { display: block; }
          .only-desktop { display: none; }
          @media (min-width: 768px) {
            .only-mobile { display: none; }
            .only-desktop { display: block; }
          }
          .mobile-list { display: grid; gap: 10px; }
          .mobile-item { border: 1px solid rgba(148,163,184,0.35); border-radius: 10px; overflow: hidden; background: #0f172a; }
          .mobile-item-header { border-radius: 0; padding: 10px 12px; background: linear-gradient(135deg, #38b2ac, #0ea5e9); color: #0f172a; font-weight: 700; }
          .mobile-item-title { text-align: left; }
          .mobile-item-details { padding: 10px 12px; }
          .kv { display: grid; grid-template-columns: 110px 1fr; gap: 8px; align-items: center; }
          @media (max-width: 360px) {
            .kv { grid-template-columns: 1fr; }
            .kv span { font-size: 12px; opacity: 0.8; }
          }
        `}</style>

        <div className="dash-header" style={{ marginBottom: 16 }}>
          <div className="dash-title">Administrar usuarios</div>
          <button className="btn btn-secondary" onClick={fetchUsers} disabled={loading}>
            {loading ? "Actualizando..." : "Refrescar"}
          </button>
        </div>
        {error && (
          <div style={{ background: "#7f1d1d", color: "#fecaca", padding: 12, borderRadius: 8, marginBottom: 16 }}>
            {error}
          </div>
        )}

        {/* Desktop table */}
        <div className="dash-item only-desktop" style={{ overflowX: "auto" }}>
          <table className="me-table" style={{ minWidth: 720 }}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Roles</th>
                <th>Activo</th>
                <th>Creado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", padding: 16 }}>
                    {loading ? "Cargando..." : "No hay usuarios para mostrar"}
                  </td>
                </tr>
              )}
              {users.map((u) => {
                const created = u.createdAt ? new Date(u.createdAt) : null;
                const roles = normalizeRoles(u.roles);
                const hasAdminRole = roles.includes('admin');
                const isActive = u.active !== false && u.isActive !== false;
                const isSelf = currentUserId === u.id;
                const rolesLabel = roles.length > 0 ? roles.join(', ') : '-';
                return (
                  <tr key={u.id}>
                    <td>{u.name || '-'}</td>
                    <td>{u.email}</td>
                    <td>{rolesLabel}</td>
                    <td>
                      <span className={`me-badge ${isActive ? 'me-badge-success' : 'me-badge-error'}`}>
                        {isActive ? 'Activo' : 'Inactivo'}
                      </span>
                    </td>
                    <td>{created ? created.toLocaleString() : '-'}</td>
                    <td>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => toggleActive(u.id, !isActive)}
                          disabled={updating === u.id}
                        >
                          {updating === u.id ? 'Guardando...' : isActive ? 'Desactivar' : 'Activar'}
                        </button>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => openClientModal(u)}
                        >
                          Convertir a cliente
                        </button>
                        {!hasAdminRole ? (
                          <button
                            className="btn btn-secondary btn-sm"
                            onClick={() => makeAdmin(u.id)}
                            disabled={roleUpdating === u.id}
                          >
                            {roleUpdating === u.id ? 'Asignando...' : 'Hacer admin'}
                          </button>
                        ) : (
                          <button
                            className="btn btn-secondary btn-sm"
                            onClick={() => revokeAdmin(u.id)}
                            disabled={roleUpdating === u.id || isSelf}
                            title={isSelf ? 'No puedes modificar tu propio rol' : 'Quitar rol admin'}
                          >
                            {roleUpdating === u.id ? 'Quitando...' : 'Quitar admin'}
                          </button>
                        )}
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeUser(u.id)}
                          disabled={deleting === u.id || isSelf}
                          title={isSelf ? 'No puedes eliminar tu propio usuario' : 'Eliminar usuario'}
                        >
                          {deleting === u.id ? 'Eliminando...' : 'Eliminar'}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile list with expandable details */}
        <div className="dash-item only-mobile mobile-list">
          {users.length === 0 && (
            <div style={{ textAlign: 'center', padding: 8 }}>
              {loading ? 'Cargando...' : 'No hay usuarios para mostrar'}
            </div>
          )}
          {users.map((u) => {
            const created = u.createdAt ? new Date(u.createdAt) : null;
            const roles = normalizeRoles(u.roles);
            const hasAdminRole = roles.includes('admin');
            const isActive = u.active !== false && u.isActive !== false;
            const isSelf = currentUserId === u.id;
            const isOpen = expandedId === u.id;
            const rolesLabel = roles.length > 0 ? roles.join(', ') : '-';
            return (
              <div key={u.id} className="mobile-item">
                <button
                  type="button"
                  className="btn btn-primary btn-sm mobile-item-header"
                  onClick={() => setExpandedId((prev) => (prev === u.id ? null : u.id))}
                  aria-expanded={isOpen}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <div className="mobile-item-title">{u.name || '-'}</div>
                  <div style={{ opacity: 0.9, fontSize: 12, paddingRight: 10 }}>{isOpen ? '−' : '+'}</div>
                </button>
                {isOpen && (
                  <div className="mobile-item-details">
                    <div className="kv"><span>Email</span><div>{u.email || '-'}</div></div>
                    <div className="kv" style={{ marginTop: 6 }}><span>Roles</span><div>{rolesLabel}</div></div>
                    <div className="kv" style={{ marginTop: 6 }}><span>Estado</span><div>
                      <span className={`me-badge ${isActive ? 'me-badge-success' : 'me-badge-error'}`}>{isActive ? 'Activo' : 'Inactivo'}</span>
                    </div></div>
                    <div className="kv" style={{ marginTop: 6 }}><span>Creado</span><div>{created ? created.toLocaleString() : '-'}</div></div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10, justifyContent: 'flex-end' }}>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => toggleActive(u.id, !isActive)}
                        disabled={updating === u.id}
                      >
                        {updating === u.id ? 'Guardando...' : isActive ? 'Desactivar' : 'Activar'}
                      </button>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => openClientModal(u)}
                      >
                        Convertir a cliente
                      </button>
                      {!hasAdminRole ? (
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => makeAdmin(u.id)}
                          disabled={roleUpdating === u.id}
                        >
                          {roleUpdating === u.id ? 'Asignando...' : 'Hacer admin'}
                        </button>
                      ) : (
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => revokeAdmin(u.id)}
                          disabled={roleUpdating === u.id || isSelf}
                          title={isSelf ? 'No puedes modificar tu propio rol' : 'Quitar rol admin'}
                        >
                          {roleUpdating === u.id ? 'Quitando...' : 'Quitar admin'}
                        </button>
                      )}
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeUser(u.id)}
                        disabled={deleting === u.id || isSelf}
                        title={isSelf ? 'No puedes eliminar tu propio usuario' : 'Eliminar usuario'}
                      >
                        {deleting === u.id ? 'Eliminando...' : 'Eliminar'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {clientModal && (
        <div
          role="dialog"
          aria-modal="true"
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}
          onClick={(e) => { if (e.target === e.currentTarget) setClientModal(null); }}
        >
          <div className="dash-card" style={{ width: '100%', maxWidth: 680, padding: 16 }}>
            <div className="dash-header" style={{ marginBottom: 12 }}>
              <div className="dash-title">Convertir usuario en cliente</div>
            </div>
            {clientError && (
              <div style={{ background: '#7f1d1d', color: '#fecaca', padding: 10, borderRadius: 8, marginBottom: 12 }}>
                {clientError}
              </div>
            )}
            <div className="dash-item" style={{ display: 'grid', gap: 12 }}>
              <label style={{ display: 'grid', gap: 6 }}>
                <span>Nombre completo</span>
                <input
                  value={clientModal.fullName}
                  onChange={(e) => setClientModal((prev) => ({ ...prev, fullName: e.target.value }))}
                  style={{ background: '#1b263b', color: '#e2e8f0', border: '1px solid rgba(148,163,184,0.35)', borderRadius: 8, padding: '8px 10px' }}
                />
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 12 }}>
                <label style={{ display: 'grid', gap: 6 }}>
                  <span>Tipo de documento</span>
                  <input
                    placeholder="CC / CE / NIT / PAS"
                    value={clientModal.documentType}
                    onChange={(e) => setClientModal((prev) => ({ ...prev, documentType: e.target.value }))}
                    style={{ background: '#1b263b', color: '#e2e8f0', border: '1px solid rgba(148,163,184,0.35)', borderRadius: 8, padding: '8px 10px' }}
                  />
                </label>
                <label style={{ display: 'grid', gap: 6 }}>
                  <span>Número de documento</span>
                  <input
                    value={clientModal.documentNumber}
                    onChange={(e) => setClientModal((prev) => ({ ...prev, documentNumber: e.target.value }))}
                    style={{ background: '#1b263b', color: '#e2e8f0', border: '1px solid rgba(148,163,184,0.35)', borderRadius: 8, padding: '8px 10px' }}
                  />
                </label>
              </div>
              <label style={{ display: 'grid', gap: 6 }}>
                <span>Fecha de nacimiento</span>
                <input
                  type="date"
                  value={clientModal.birthDate}
                  onChange={(e) => setClientModal((prev) => ({ ...prev, birthDate: e.target.value }))}
                  style={{ background: '#1b263b', color: '#e2e8f0', border: '1px solid rgba(148,163,184,0.35)', borderRadius: 8, padding: '8px 10px' }}
                />
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <label style={{ display: 'grid', gap: 6 }}>
                  <span>Teléfono fijo / celular</span>
                  <input
                    value={clientModal.phone}
                    onChange={(e) => setClientModal((prev) => ({ ...prev, phone: e.target.value }))}
                    style={{ background: '#1b263b', color: '#e2e8f0', border: '1px solid rgba(148,163,184,0.35)', borderRadius: 8, padding: '8px 10px' }}
                  />
                </label>
                <label style={{ display: 'grid', gap: 6 }}>
                  <span>Correo electrónico</span>
                  <input
                    type="email"
                    value={clientModal.email}
                    onChange={(e) => setClientModal((prev) => ({ ...prev, email: e.target.value }))}
                    style={{ background: '#1b263b', color: '#e2e8f0', border: '1px solid rgba(148,163,184,0.35)', borderRadius: 8, padding: '8px 10px' }}
                  />
                </label>
              </div>
              <label style={{ display: 'grid', gap: 6 }}>
                <span>Dirección física</span>
                <input
                  value={clientModal.address}
                  onChange={(e) => setClientModal((prev) => ({ ...prev, address: e.target.value }))}
                  style={{ background: '#1b263b', color: '#e2e8f0', border: '1px solid rgba(148,163,184,0.35)', borderRadius: 8, padding: '8px 10px' }}
                />
              </label>
              <label style={{ display: 'grid', gap: 6 }}>
                <span>Información de contacto (opcional)</span>
                <textarea
                  rows={3}
                  value={clientModal.contactInfo}
                  onChange={(e) => setClientModal((prev) => ({ ...prev, contactInfo: e.target.value }))}
                  style={{ background: '#1b263b', color: '#e2e8f0', border: '1px solid rgba(148,163,184,0.35)', borderRadius: 8, padding: '8px 10px', resize: 'vertical' }}
                />
              </label>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12 }}>
              <button className="btn btn-secondary" onClick={() => setClientModal(null)} disabled={clientSaving}>
                Cancelar
              </button>
              <button className="btn btn-primary" onClick={saveClient} disabled={clientSaving}>
                {clientSaving ? 'Guardando...' : 'Crear cliente'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
