import api from './axios';

export async function listRecentDocs({ limit, subfolder } = {}) {
  const params = {};
  if (typeof limit === 'number') params.limit = limit;
  if (subfolder) params.subfolder = subfolder;
  const { data } = await api.get('/docs/recent', { params });
  return data;
}

export async function uploadDoc(file, { subfolder } = {}) {
  if (!file) {
    throw new Error('Archivo requerido');
  }
  const formData = new FormData();
  formData.append('file', file);
  if (subfolder) {
    formData.append('subfolder', subfolder);
  }
  const { data } = await api.post('/docs/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
}

export async function uploadDocument({ file, subfolder }) {
  return uploadDoc(file, { subfolder });
}

export async function getDownloadUrl(key, expiresIn = 600) {
  if (!key) {
    throw new Error('Key requerida');
  }
  const params = { key, expires: expiresIn };
  const { data } = await api.get('/docs/download-url', { params });
  return data;
}

export async function createFolder(subfolder) {
  const payload = typeof subfolder === 'string' ? { subfolder } : (subfolder || {});
  const { data } = await api.post('/docs/folder', payload);
  return data;
}
