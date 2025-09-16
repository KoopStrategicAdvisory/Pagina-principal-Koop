import api from './axios';

const DEFAULT_FOLDER = 'documentos_iniciales';

// Lista documentos recientes desde S3 a través del backend.
export async function listRecentDocs({ limit = 10, subfolder = null } = {}) {
  const params = { limit };
  if (subfolder) params.subfolder = subfolder;
  const { data } = await api.get('/docs/recent', { params });
  return data;
}

// Sube un archivo (multipart/form-data). Devuelve el objeto de archivo con enlaces.
export async function uploadDoc(file, { subfolder = DEFAULT_FOLDER } = {}) {
  const form = new FormData();
  form.append('file', file);
  form.append('subfolder', subfolder);
  const { data } = await api.post('/docs/upload', form, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data; // { file: {...} }
}

// Obtiene una URL firmada temporal para descargar un objeto por key.
export async function getDownloadUrl(key, expires = 600) {
  const { data } = await api.get('/docs/download-url', { params: { key, expires } });
  return data; // { url, expiresIn, key }
}
