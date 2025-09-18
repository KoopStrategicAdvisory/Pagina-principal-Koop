import api from './axios';

export async function listUsers() {
  const { data } = await api.get('/admin/users');
  return data;
}

export async function setUserActive(id, active) {
  const { data } = await api.patch(`/admin/users/${id}/active`, { active });
  return data;
}

export async function grantAdminRole(id) {
  const { data } = await api.post(`/admin/users/${id}/grant-admin`);
  return data;
}

export async function revokeAdminRole(id) {
  const { data } = await api.post(`/admin/users/${id}/revoke-admin`);
  return data;
}

export async function deleteUser(id) {
  const { data } = await api.delete(`/admin/users/${id}`);
  return data;
}
