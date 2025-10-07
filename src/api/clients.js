import api from './axios';

export async function listActiveClients() {
  const { data } = await api.get('/admin/clients/active');
  return data;
}

export async function updateClient(id, payload) {
  const { data } = await api.patch(`/admin/clients/${id}`, payload);
  return data;
}

export async function assignClientAdmin(id, adminUserId) {
  const { data } = await api.patch(`/admin/clients/${id}/assign`, { adminUserId });
  return data;
}

export async function createClientFromUser(id, payload) {
  const { data } = await api.post(`/admin/clients/from-user/${id}`, payload);
  return data;
}

export async function deleteClient(id, adminDeletePass) {
  const headers = {};
  if (adminDeletePass) headers['x-delete-pass'] = adminDeletePass;
  const { data } = await api.delete(`/admin/clients/${id}`, { headers });
  return data;
}
