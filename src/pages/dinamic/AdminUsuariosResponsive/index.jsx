import { useState } from "react";
import { useAdminUsers, normalizeRoles, ROLE_OPTIONS } from "../../../hooks/useAdminUsers";
import "../../../styles/dashboard.css";
import { SuccessNotice, DangerNotice } from '../../../components/common/Notice';
import { EditForm, EditRow, EditField, EditTextArea } from '../../../components/common/EditFormKit';
import UsuariosPendientesActivar from './components/UsuariosPendientesActivar';
import UsuariosActivos from './components/UsuariosActivos';
import ConvertirUsuarioModal from './components/ConvertirUsuarioModal';

export default function AdminUsuarios() {
  const {
    user,
    isAdmin,
    users,
    loading,
    error,
    updating,
    roleUpdating,
    deleting,
    clientModal,
    clientSaving,
    clientError,
    notice,
    fetchUsers,
    toggleActive,
    changeRole,
    removeUser,
    openClientModal,
    saveClient,
    setClientModal,
    setClientError,
  } = useAdminUsers();

  const [expandedId, setExpandedId] = useState(null);
  const [mobileRolePanel, setMobileRolePanel] = useState(null);
  const [showPending, setShowPending] = useState(true);
  const [showActive, setShowActive] = useState(false);
  const [search, setSearch] = useState("");
  const toggleMobileRolePanel = (id) => {
    setMobileRolePanel((prev) => (prev === id ? null : id));
  };

  const currentUserId = user?.id;

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
              placeholder="Buscar por nombre, cédula o correo"
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

          return (
            <>
              <UsuariosPendientesActivar
                users={filtered}
                loading={loading}
                currentUserId={currentUserId}
                updating={updating}
                roleUpdating={roleUpdating}
                deleting={deleting}
                onToggleActive={toggleActive}
                onOpenClientModal={openClientModal}
                onChangeRole={changeRole}
                onRemoveUser={removeUser}
                initialOpen={showPending}
              />

              <UsuariosActivos
                users={filtered}
                loading={loading}
                currentUserId={currentUserId}
                updating={updating}
                roleUpdating={roleUpdating}
                deleting={deleting}
                onToggleActive={toggleActive}
                onOpenClientModal={openClientModal}
                onChangeRole={changeRole}
                onRemoveUser={removeUser}
                initialOpen={showActive}
              />
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
            const isLawyer = roles.includes('lawyer');
            const isClient = roles.includes('client');
            const roleIsUser = roles.includes('user');
            const isActive = u.active !== false && u.isActive !== false;
            const isSelf = currentUserId === u.id;
            const isOpen = expandedId === u.id;
            const rolePanelOpen = mobileRolePanel === u.id;
            const roleUpdatingCurrent = roleUpdating?.id === u.id;
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
                        onClick={() => toggleMobileRolePanel(u.id)}
                      >
                        {rolePanelOpen ? 'Cerrar roles' : 'Administrar roles'}
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeUser(u.id)}
                        disabled={deleting === u.id || isSelf}
                        title={isSelf ? 'No puedes eliminar tu propio usuario' : 'Eliminar usuario'}
                      >
                        {deleting === u.id ? 'Eliminando...' : 'Eliminar'}
                      </button>
                    </div>
                    {rolePanelOpen && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10, padding: 10, borderRadius: 8, background: '#0f172a', border: '1px solid rgba(148,163,184,0.35)' }}>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => {
                            openClientModal(u);
                            toggleMobileRolePanel(u.id);
                          }}
                        >
                          Convertir a cliente
                        </button>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => changeRole(u.id, 'admin')}
                          disabled={roleUpdatingCurrent || hasAdminRole}
                        >
                          {roleUpdatingCurrent && !hasAdminRole ? 'Guardando...' : 'Hacer admin'}
                        </button>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => changeRole(u.id, 'lawyer')}
                          disabled={roleUpdatingCurrent || isLawyer}
                        >
                          {roleUpdatingCurrent && !isLawyer ? 'Guardando...' : 'Convertir a abogado'}
                        </button>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => changeRole(u.id, 'client')}
                          disabled={roleUpdatingCurrent || isClient}
                        >
                          {roleUpdatingCurrent && !isClient ? 'Guardando...' : 'Asignar rol cliente'}
                        </button>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => changeRole(u.id, 'user')}
                          disabled={roleUpdatingCurrent || roleIsUser || isSelf}
                          title={isSelf ? 'No puedes degradarte a ti mismo' : undefined}
                        >
                          {roleUpdatingCurrent && !roleIsUser ? 'Guardando...' : 'Degradar a usuario'}
                        </button>
                      </div>
                    )}
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
                    Usuarios creados (no activados){pending.length ? ` · ${pending.length}` : ''}
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
                    Usuarios activados{actives.length ? ` · ${actives.length}` : ''}
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

      <ConvertirUsuarioModal
        clientModal={clientModal}
        clientError={clientError}
        clientSaving={clientSaving}
        onClose={() => setClientModal(null)}
        onClearError={() => setClientError(null)}
        onSave={saveClient}
        onChange={(patch) => setClientModal((prev) => ({ ...prev, ...patch }))}
        rolesOptions={ROLE_OPTIONS}
      />
    </div>
  );
}





