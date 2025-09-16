import api from './axios';

export async function listUsers() {
  const { data } = await api.get('/admin/users');
  return data;
}

export async function setUserActive(id, active) {
  const { data } = await api.patch(`/admin/users/${id}/active`, { active });
  return data;
}
