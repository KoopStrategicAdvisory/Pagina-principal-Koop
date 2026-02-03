import { useState, useMemo } from 'react';

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

export default function UsuariosPendientesActivar({
  users = [],
  loading = false,
  currentUserId,
  updating,
  roleUpdating,
  deleting,
  onToggleActive,
  onOpenClientModal,
  onMakeAdmin,
  onRevokeAdmin,
  onRemoveUser,
  initialOpen = true,
}) {
  const [open, setOpen] = useState(Boolean(initialOpen));

  const pending = useMemo(() => {
    const isInactive = (u) => u?.active === false || u?.isActive === false;
    const byCreatedAtDesc = (a, b) => {
      const atA = a?.createdAt ? new Date(a.createdAt).getTime() : 0;
      const atB = b?.createdAt ? new Date(b.createdAt).getTime() : 0;
      return atB - atA;
    };
    return (users || []).filter(isInactive).sort(byCreatedAtDesc);
  }, [users]);

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
              onClick={() => onToggleActive?.(u.id, !isActive)}
              disabled={updating === u.id}
            >
              {updating === u.id ? 'Guardando...' : isActive ? 'Desactivar' : 'Activar'}
            </button>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => onOpenClientModal?.(u)}
            >
              Convertir a cliente
            </button>
            {!hasAdminRole ? (
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => onMakeAdmin?.(u.id)}
                disabled={roleUpdating === u.id}
              >
                {roleUpdating === u.id ? 'Asignando...' : 'Hacer admin'}
              </button>
            ) : (
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => onRevokeAdmin?.(u.id)}
                disabled={roleUpdating === u.id || isSelf}
                title={isSelf ? 'No puedes modificar tu propio rol' : 'Quitar rol admin'}
              >
                {roleUpdating === u.id ? 'Quitando...' : 'Quitar admin'}
              </button>
            )}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onRemoveUser?.(u.id)}
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
    <div className="dash-item" style={{ marginBottom: 16 }}>
      <div className="dash-header" style={{ marginBottom: 8 }}>
        <h4 style={{ margin: 0 }}>
          Usuarios creados (no activados)
          {pending.length > 0 ? ` · ${pending.length}` : ''}
        </h4>
        <button className="btn btn-secondary btn-sm" onClick={() => setOpen((v) => !v)}>
          {open ? 'Ocultar' : 'Mostrar'}
        </button>
      </div>
      {open && (
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
  );
}



