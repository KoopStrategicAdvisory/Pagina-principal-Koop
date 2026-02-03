import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

function useIsAdmin(user) {
  if (!user?.roles) return false;
  return (Array.isArray(user.roles) ? user.roles : [user.roles])
    .map((r) => String(r || '').toLowerCase())
    .includes('admin');
}

export default function Panel() {
  const { user, logout } = useAuth();
  const isAdmin = useIsAdmin(user);

  if (!user) {
    return (
      <div style={{ padding: 24 }}>
        <h1>Panel Privado</h1>
        <p>No hay usuario.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <h1>Panel Privado</h1>
      <div>
        <p>Bienvenido: {user.email}</p>
        <p>Roles: {Array.isArray(user.roles) ? user.roles.join(', ') : 'N/A'}</p>
        <p>Estado: {user.active === false ? 'Inactivo' : 'Activo'}</p>
      </div>
      {isAdmin && (
        <div style={{ display: 'flex', gap: 12 }}>
          <Link className="btn btn-primary" to="/admin/usuarios">
            Gestionar usuarios
          </Link>
        </div>
      )}
      <div>
        <button className="btn btn-secondary" onClick={logout}>Cerrar sesion</button>
      </div>
    </div>
  );
}
