import api from './axios';

export async function listConsultationLogs(date) {
  const query = date ? `?date=${encodeURIComponent(date)}` : '';
  const { data } = await api.get(`/admin/consultas${query}`);
  return data;
}

export async function createConsultationLog(payload) {
  const { data } = await api.post('/admin/consultas', payload);
  return data;
}

export async function downloadConsultationPdf(date) {
  const { data } = await api.get(`/admin/consultas/pdf${date ? `?date=${encodeURIComponent(date)}` : ''}`, {
    responseType: 'blob',
  });
  return data;
}

export async function listAllRadicados() {
  const { data } = await api.get('/admin/consultas/radicados');
  return data;
}
