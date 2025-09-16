// AuthContext — Maneja la sesión del usuario (JWT) en el frontend.
// - Guarda el accessToken en localStorage
// - Expone login, register, logout y refresh
// - Integra con Axios para autorizar llamadas y refrescar tokens
import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { loginApi, registerApi, logoutApi, refreshApi } from '../api/auth';
import api, { setupAxiosInterceptors } from '../api/axios';

const AuthContext = createContext(null);

function decodeJwt(token) {
  try {
    const payload = token.split('.')[1];
    const json = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(() => localStorage.getItem('accessToken') || null);
  const [user, setUser] = useState(() => {
    const t = localStorage.getItem('accessToken');
    if (!t) return null;
    const payload = decodeJwt(t);
    return payload ? { id: payload.sub, name: payload.name, email: payload.email, roles: payload.roles || [], driveFolders: payload.driveFolders || [] } : null;
  });
  const [loading, setLoading] = useState(false);
  const isAuthenticated = !!accessToken;

  useEffect(() => {
    if (!accessToken) {
      localStorage.removeItem('accessToken');
      setUser(null);
    } else {
      localStorage.setItem('accessToken', accessToken);
      const payload = decodeJwt(accessToken);
      if (payload) setUser({ id: payload.sub, name: payload.name, email: payload.email, roles: payload.roles || [], driveFolders: payload.driveFolders || [] });
    }
  }, [accessToken]);

  const login = async (email, password) => {
    console.log('Login!');
    setLoading(true);
    try {
      const { accessToken: token, user: u } = await loginApi({ email, password });
      setAccessToken(token);
      // Preferir datos del token por coherencia
      const payload = decodeJwt(token);
      setUser(payload ? { id: payload.sub, name: payload.name, email: payload.email, roles: payload.roles || [], driveFolders: payload.driveFolders || [] } : u || null);
      return { ok: true };
    } catch (err) {
      return { ok: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password, roles) => {
    setLoading(true);
    console.log('Login!');
    try {
      const data = await registerApi({ name, email, password, roles });
      if (data?.accessToken) {
        setAccessToken(data.accessToken);
        const payload = decodeJwt(data.accessToken);
        setUser(payload ? { id: payload.sub, name: payload.name, email: payload.email, roles: payload.roles || [], driveFolders: payload.driveFolders || [] } : data.user || null);
      }
      return { ok: true, data };
    } catch (err) {
      return { ok: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await logoutApi();
    } catch (_) {
      // Ignorar error del servidor para no bloquear el cierre local
    } finally {
      setAccessToken(null);
      setUser(null);
    }
  };

  const value = useMemo(
    () => ({ accessToken, user, isAuthenticated, loading, login, register, logout, refresh: refreshApi }),
    [accessToken, user, isAuthenticated, loading]
  );

  // Setup Axios interceptors once
  const onceRef = useRef(false);
  useEffect(() => {
    if (onceRef.current) return;
    setupAxiosInterceptors({
      getAccessToken: () => accessToken,
      setAccessToken: (t) => setAccessToken(t),
      onLogout: () => logout(),
    });
    onceRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth debe usarse dentro de AuthProvider');
  return ctx;
}
