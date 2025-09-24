import api from './axios';


export async function listRecentDocs({ limit, subfolder } = {}) {
  const params = {};
  if (typeof limit === 'number') params.limit = limit;
  if (subfolder) params.subfolder = subfolder;
  const { data } = await api.get('/docs/recent', { params });
  return data;
}

// Función de corrección agresiva para nombres de archivo
const aggressiveUTF8Fix = (str) => {
  if (!str) return str;
  return str
    .replace(/TrÃ¡mite/g, 'Trámite')
    .replace(/TÃºtela/g, 'Tútela')
    .replace(/trÃ¡mite/g, 'trámite')
    .replace(/tÃºtela/g, 'tútela')
    .replace(/ConstituciÃ³n/g, 'Constitución')
    .replace(/PolÃ­tica/g, 'Política')
    .replace(/constituciÃ³n/g, 'constitución')
    .replace(/polÃ­tica/g, 'política')
    .replace(/Ã¡/g, 'á')
    .replace(/Ã©/g, 'é')
    .replace(/Ã­/g, 'í')
    .replace(/Ã³/g, 'ó')
    .replace(/Ãº/g, 'ú')
    .replace(/Ã/g, 'Á')
    .replace(/Ã‰/g, 'É')
    .replace(/Ã/g, 'Í')
    .replace(/Ã"/g, 'Ó')
    .replace(/Ãš/g, 'Ú')
    .replace(/Ã±/g, 'ñ')
    .replace(/Ã'/g, 'Ñ');
};

export async function uploadDoc(file, { subfolder, useExactName } = {}) {
  if (!file) {
    throw new Error('Archivo requerido');
  }
  
  // CORRECCIÓN AGRESIVA DEL NOMBRE DEL ARCHIVO
  let correctedFile = file;
  if (useExactName && file.name) {
    const originalName = file.name;
    const correctedName = aggressiveUTF8Fix(originalName);
    
    if (correctedName !== originalName) {
      console.log('🔧 API: Corrigiendo nombre de archivo:', originalName, '->', correctedName);
      
      // Crear un nuevo archivo con el nombre corregido
      correctedFile = new File([file], correctedName, {
        type: file.type,
        lastModified: file.lastModified
      });
    }
  }
  
  const formData = new FormData();
  formData.append('file', correctedFile);
  if (subfolder) {
    formData.append('subfolder', subfolder);
  }
  if (useExactName) {
    console.log('🔧 Agregando useExactName al FormData');
    formData.append('useExactName', 'true');
  } else {
    console.log('🔧 useExactName es false, no se agrega al FormData');
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

export async function createFolder({ subfolder } = {}) {
  const payload = { subfolder };
  const { data } = await api.post('/docs/folder', payload);
  return data;
}

export async function getDiagnostics({ subfolder } = {}) {
  const params = {};
  if (subfolder) params.subfolder = subfolder;
  const { data } = await api.get('/docs/diag', { params });
  return data;
}

export async function getClientDocumentHistory({ documentNumber, limit = 50, offset = 0, folder } = {}) {
  const params = { limit, offset };
  if (folder) params.folder = folder;
  const { data } = await api.get(`/docs/client/${documentNumber}/history`, { params });
  return data;
}

export async function updateDownloadStats(documentId) {
  const { data } = await api.post(`/docs/document/${documentId}/download`);
  return data;
}

export async function deleteDocument(key) {
  if (!key) {
    throw new Error('Key requerida');
  }
  const { data } = await api.delete('/docs/object', { 
    data: { key } 
  });
  return data;
}
