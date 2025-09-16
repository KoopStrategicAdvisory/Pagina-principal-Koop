import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { listUsers, setUserActive } from "../api/adminUsers";
import "../styles/dashboard.css";

function useIsAdmin(user) {
  if (!user?.roles) return false;
  return (Array.isArray(user.roles) ? user.roles : [user.roles])
    .map((r) => String(r || '').toLowerCase())
    .includes('admin');
}

export default function AdminUsuarios() {
  const { user } = useAuth();
  const isAdmin = useIsAdmin(user);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [updating, setUpdating] = useState(null);

  const fetchUsers = async () => {
    if (!isAdmin) return;
    setLoading(true);
    setError(null);
    try {
      const data = await listUsers();
      setUsers(Array.isArray(data?.items) ? data.items : []);
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
        padding: 32,
      }}
    >
      <div className="dash-card" style={{ width: "100%", maxWidth: 1200 }}>
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

        <div className="dash-item" style={{ overflowX: "auto" }}>
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
                const isActive = u.active !== false;
                return (
                  <tr key={u.id}>
                    <td>{u.name || '-'}</td>
                    <td>{u.email}</td>
                    <td>{Array.isArray(u.roles) ? u.roles.join(', ') : '-'}</td>
                    <td>
                      <span className={`me-badge ${isActive ? 'me-badge-success' : 'me-badge-error'}`}>
                        {isActive ? 'Activo' : 'Inactivo'}
                      </span>
                    </td>
                    <td>{created ? created.toLocaleString() : '-'}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => toggleActive(u.id, !isActive)}
                        disabled={updating === u.id}
                      >
                        {updating === u.id ? 'Guardando...' : isActive ? 'Desactivar' : 'Activar'}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
