import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { listUsers, setUserActive, grantAdminRole, revokeAdminRole, deleteUser } from "../api/adminUsers";
import { createClientFromUser } from "../api/clients";
import "../styles/dashboard.css";
import { SuccessNotice, DangerNotice } from '../components/common/Notice';
import { EditForm, EditRow, EditField, EditTextArea } from '../components/common/EditFormKit';

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
  const [showPending, setShowPending] = useState(true);
  const [showActive, setShowActive] = useState(false);
  const [search, setSearch] = useState("");
  const [notice, setNotice] = useState(null);

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
      try { clearTimeout(saveClient._t); } catch {}
      setNotice('Cliente creado y carpeta asignada');
      saveClient._t = setTimeout(() => setNotice(null), 3500);
      try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch {}
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

        <div className="dash-header" style={{ marginBottom: 16, gap: 12 }}>
          <div className="dash-title">Administrar usuarios</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              className="input"
              placeholder="Buscar por nombre, cÃ©dula o correo"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: 260 }}
            />
            {search && (
              <button className="btn btn-secondary btn-sm" onClick={() => setSearch("")}>Limpiar</button>
            )}
            <button className="btn btn-secondary" onClick={fetchUsers} disabled={loading}>
              {loading ? "Actualizando..." : "Refrescar"}
            </button>
          </div>
        </div>
        {notice && (<SuccessNotice autoHideMs={3500}>{notice}</SuccessNotice>)}
        {error && (<DangerNotice>{error}</DangerNotice>)}

        {/* Desktop: secciones colapsables */}
        {(() => {
          const norm = (v) => String(v || "").toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          const q = norm(search);
          const matches = (u) => {
            if (!q) return true;
            const docs = [u.document, u.documentNumber, u.cedula, u.dni, u.idNumber, u.numeroDocumento];
            const values = [u.name, u.email, ...docs];
            return values.some((val) => norm(val).includes(q));
          };
          const filtered = users.filter(matches);
          const byCreatedAtDesc = (a, b) => {
            const atA = a?.createdAt ? new Date(a.createdAt).getTime() : 0;
            const atB = b?.createdAt ? new Date(b.createdAt).getTime() : 0;
            return atB - atA;
          };
          const isInactive = (u) => u?.active === false || u?.isActive === false;
          const pending = filtered.filter(isInactive).sort(byCreatedAtDesc);
          const actives = filtered.filter((u) => !isInactive(u)).sort(byCreatedAtDesc);

          const renderRow = (u) => {
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
          };

          return (
            <>
              <div className="dash-item only-desktop" style={{ marginBottom: 16 }}>
                <div className="dash-header" style={{ marginBottom: 8 }}>
                  <h4 style={{ margin: 0 }}>
                    Usuarios creados (no activados){pending.length ? ` Â· ${pending.length}` : ''}
                  </h4>
                  <button className="btn btn-secondary btn-sm" onClick={() => setShowPending((v) => !v)}>
                    {showPending ? 'Ocultar' : 'Mostrar'}
                  </button>
                </div>
                {showPending && (
                  <div style={{ overflowX: 'auto' }}>
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
                        {pending.length === 0 && (
                          <tr>
                            <td colSpan={6} style={{ textAlign: 'center', padding: 16 }}>
                              {loading ? 'Cargando...' : 'No hay usuarios no activados'}
                            </td>
                          </tr>
                        )}
                        {pending.map(renderRow)}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              <div className="dash-item only-desktop">
                <div className="dash-header" style={{ marginBottom: 8 }}>
                  <h4 style={{ margin: 0 }}>
                    Usuarios activados{actives.length ? ` Â· ${actives.length}` : ''}
                  </h4>
                  <button className="btn btn-secondary btn-sm" onClick={() => setShowActive((v) => !v)}>
                    {showActive ? 'Ocultar' : 'Mostrar'}
                  </button>
                </div>
                {showActive && (
                  <div style={{ overflowX: 'auto' }}>
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
                        {actives.length === 0 && (
                          <tr>
                            <td colSpan={6} style={{ textAlign: 'center', padding: 16 }}>
                              {loading ? 'Cargando...' : 'No hay usuarios activados'}
                            </td>
                          </tr>
                        )}
                        {actives.map(renderRow)}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </>
          );
        })()}

        {/* Mobile: secciones colapsables con detalles expandibles por item */}
        {(() => {
          const norm = (v) => String(v || "").toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          const q = norm(search);
          const matches = (u) => {
            if (!q) return true;
            const docs = [u.document, u.documentNumber, u.cedula, u.dni, u.idNumber, u.numeroDocumento];
            const values = [u.name, u.email, ...docs];
            return values.some((val) => norm(val).includes(q));
          };
          const filtered = users.filter(matches);
          const byCreatedAtDesc = (a, b) => {
            const atA = a?.createdAt ? new Date(a.createdAt).getTime() : 0;
            const atB = b?.createdAt ? new Date(b.createdAt).getTime() : 0;
            return atB - atA;
          };
          const isInactive = (u) => u?.active === false || u?.isActive === false;
          const pending = filtered.filter(isInactive).sort(byCreatedAtDesc);
          const actives = filtered.filter((u) => !isInactive(u)).sort(byCreatedAtDesc);

          const MobileItem = (u) => {
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
                  <div style={{ opacity: 0.9, fontSize: 12, paddingRight: 10 }}>{isOpen ? 'âˆ’' : '+'}</div>
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
          };

          return (
            <>
              <div className="dash-item only-mobile" style={{ marginBottom: 16 }}>
                <div className="dash-header" style={{ marginBottom: 8 }}>
                  <h4 style={{ margin: 0 }}>
                    Usuarios creados (no activados){pending.length ? ` Â· ${pending.length}` : ''}
                  </h4>
                  <button className="btn btn-secondary btn-sm" onClick={() => setShowPending((v) => !v)}>
                    {showPending ? 'Ocultar' : 'Mostrar'}
                  </button>
                </div>
                {showPending && (
                  <div className="mobile-list">
                    {pending.length === 0 && (
                      <div style={{ textAlign: 'center', padding: 8 }}>
                        {loading ? 'Cargando...' : 'No hay usuarios no activados'}
                      </div>
                    )}
                    {pending.map(MobileItem)}
                  </div>
                )}
              </div>

              <div className="dash-item only-mobile">
                <div className="dash-header" style={{ marginBottom: 8 }}>
                  <h4 style={{ margin: 0 }}>
                    Usuarios activados{actives.length ? ` Â· ${actives.length}` : ''}
                  </h4>
                  <button className="btn btn-secondary btn-sm" onClick={() => setShowActive((v) => !v)}>
                    {showActive ? 'Ocultar' : 'Mostrar'}
                  </button>
                </div>
                {showActive && (
                  <div className="mobile-list">
                    {actives.length === 0 && (
                      <div style={{ textAlign: 'center', padding: 8 }}>
                        {loading ? 'Cargando...' : 'No hay usuarios activados'}
                      </div>
                    )}
                    {actives.map(MobileItem)}
                  </div>
                )}
              </div>
            </>
          );
        })()}
      </div>

      {clientModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="modal-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setClientModal(null); }}
        >
          <div className="modal-card" role="document">
            <div className="modal-header">
              <div className="dash-title">Convertir usuario en cliente</div>
              <button type="button" className="btn btn-secondary btn-sm" onClick={() => setClientModal(null)} aria-label="Cerrar">
                Cerrar
              </button>
            </div>
          {clientError && (<DangerNotice onClose={() => setClientError(null)}>{clientError}</DangerNotice>)}
          <style>{`
            .cu-form { display: grid; gap: 12px; }
            .cu-row { display: grid; gap: 12px; }
            @media (min-width: 480px) { .cu-row.two { grid-template-columns: 1fr 1fr; } }
            .cu-field > span { font-size: 12px; letter-spacing: .02em; opacity: .85; margin-bottom: 6px; }
            .cu-input, .cu-textarea { background: #1b263b; color: #e2e8f0; border: 1px solid rgba(148,163,184,0.35); border-radius: 10px; padding: 10px 12px; }
            .cu-input::placeholder, .cu-textarea::placeholder { color: #9fb3cc; opacity: .75; }
            .cu-input:focus, .cu-textarea:focus { outline: none; border-color: #38bdf8; box-shadow: 0 0 0 2px rgba(56,189,248,.25); }
          `}</style>
                      <EditForm>
            <EditField
              label="Nombre completo"
              value={clientModal.fullName}
              onChange={(e) => setClientModal((prev) => ({ ...prev, fullName: e.target.value }))}
              placeholder="Nombre y apellidos"
            />
            <EditRow cols={2}>
              <EditField
                label="Tipo de documento"
                value={clientModal.documentType}
                onChange={(e) => setClientModal((prev) => ({ ...prev, documentType: e.target.value }))}
                placeholder="CC / CE / NIT / PAS"
              />
              <EditField
                label="Número de documento"
                value={clientModal.documentNumber}
                onChange={(e) => setClientModal((prev) => ({ ...prev, documentNumber: e.target.value }))}
                placeholder="Ej: 80761460"
              />
            </EditRow>
            <EditField
              label="Fecha de nacimiento"
              type="date"
              value={clientModal.birthDate}
              onChange={(e) => setClientModal((prev) => ({ ...prev, birthDate: e.target.value }))}
            />
            <EditRow cols={2}>
              <EditField
                label="Teléfono fijo / celular"
                value={clientModal.phone}
                onChange={(e) => setClientModal((prev) => ({ ...prev, phone: e.target.value }))}
                placeholder="Ej: 300 123 4567"
              />
              <EditField
                label="Correo electrónico"
                type="email"
                value={clientModal.email}
                onChange={(e) => setClientModal((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="nombre@dominio.com"
              />
            </EditRow>
            <EditField
              label="Dirección física"
              value={clientModal.address}
              onChange={(e) => setClientModal((prev) => ({ ...prev, address: e.target.value }))}
              placeholder="Calle 123 #45-67, Ciudad"
            />
            <EditTextArea
              label="Información de contacto (opcional)"
              value={clientModal.contactInfo}
              onChange={(e) => setClientModal((prev) => ({ ...prev, contactInfo: e.target.value }))}
              placeholder="Notas internas, referencias, etc."
            />
          </EditForm><div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12 }}>
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





