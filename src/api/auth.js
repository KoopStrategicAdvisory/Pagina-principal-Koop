// En dev usamos "/api" para pasar por el proxy de Vite; en prod puedes definir VITE_API_BASE
const API_BASE = import.meta.env.VITE_API_BASE || '/api';

export async function registerApi({ name, email, password, roles }) {
  console.log(`API BASE: ${API_BASE}/auth/register`);
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ name, email, password, roles }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.message || 'Error en registro');
  return data;
}

export async function refreshApi() {
  const res = await fetch(`${API_BASE}/auth/refresh`, {
    method: 'POST',
    credentials: 'include',
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.message || 'No se pudo refrescar sesión');
  return data;
}

export async function loginApi({ email, password }) {
  console.log(`API BASE: ${API_BASE}/auth/login`);
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });
  console.log(res);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.message || 'Credenciales inválidas');
  return data;
}

export async function logoutApi() {
  const res = await fetch(`${API_BASE}/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });
  // Puede no haber body, así que no forzamos json
  if (!res.ok) {
    let msg = 'Error al cerrar sesión';
    try {
      const data = await res.json();
      msg = data?.message || msg;
    } catch (_) {}
    throw new Error(msg);
  }
  return true;
}
