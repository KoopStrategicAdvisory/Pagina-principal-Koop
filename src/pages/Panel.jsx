import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function Panel() {
  const { user, logout } = useAuth();
  return (
    <div style={{ padding: 24 }}>
      <h1>Panel Privado</h1>
      {user ? (
        <>
          <p>Bienvenido: {user.email}</p>
          <p>Roles: {Array.isArray(user.roles) ? user.roles.join(', ') : 'N/A'}</p>
          <button onClick={logout}>Cerrar sesión</button>
        </>
      ) : (
        <p>No hay usuario.</p>
      )}
    </div>
  );
}

