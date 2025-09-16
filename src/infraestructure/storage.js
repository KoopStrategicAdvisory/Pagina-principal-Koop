import { ref, uploadBytesResumable, getDownloadURL, listAll, getMetadata } from 'firebase/storage';
import { getStorageSafe } from './firebase';

function slugName(name) {
  return String(name || '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9._-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$|^\.+/g, '')
    .slice(0, 120);
}

function sanitizeSegment(segment, fallback) {
  const value = String(segment || '').trim();
  if (!value) return fallback;
  const cleaned = value
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9._-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$|^\.+/g, '');
  return cleaned || fallback;
}

export async function uploadDocument({ file, userId, subfolder = 'documentos_iniciales' }, onProgress) {
  const storage = getStorageSafe();
  if (!storage) throw new Error('Firebase Storage no configurado');
  if (!file) throw new Error('Archivo requerido');
  const userSegment = String(userId || '').trim();
  if (!userSegment) throw new Error('ID de usuario requerido');

  const name = `${Date.now()}_${slugName(file.name) || 'archivo'}`;
  const safeFolder = sanitizeSegment(subfolder, 'documentos_iniciales');
  const basePath = `archivos/${userSegment}/${safeFolder}`;
  const objectPath = `${basePath}/${name}`;
  const storageRef = ref(storage, objectPath);
  const metadata = { contentType: file.type || 'application/octet-stream' };

  return new Promise((resolve, reject) => {
    const task = uploadBytesResumable(storageRef, file, metadata);
    task.on('state_changed', (snapshot) => {
      if (onProgress) {
        const pct = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        onProgress(pct);
      }
    }, (err) => {
      reject(err);
    }, async () => {
      try {
        const url = await getDownloadURL(task.snapshot.ref);
        const meta = await getMetadata(task.snapshot.ref);
        resolve({
          path: objectPath,
          basePath,
          name,
          folder: safeFolder,
          size: meta.size,
          contentType: meta.contentType,
          updated: meta.updated,
          timeCreated: meta.timeCreated,
          downloadURL: url,
        });
      } catch (e) {
        resolve({ path: objectPath, basePath, name, folder: safeFolder, downloadURL: null });
      }
    });
  });
}

async function collectAllItems(reference, recursive) {
  const { items, prefixes } = await listAll(reference);
  if (!recursive || prefixes.length === 0) {
    return items;
  }
  const nested = await Promise.all(prefixes.map((folderRef) => collectAllItems(folderRef, recursive)));
  return items.concat(...nested);
}

export async function listRecentDocuments({ userId, subfolder = null, limit = 5 } = {}) {
  const storage = getStorageSafe();
  if (!storage) throw new Error('Firebase Storage no configurado');
  const userSegment = String(userId || '').trim();
  if (!userSegment) throw new Error('ID de usuario requerido');

  const safeFolder = subfolder ? sanitizeSegment(subfolder, 'documentos_iniciales') : null;
  const basePath = safeFolder
    ? `archivos/${userSegment}/${safeFolder}`
    : `archivos/${userSegment}`;
  const targetRef = ref(storage, basePath);

  const itemRefs = await collectAllItems(targetRef, !safeFolder);

  const metas = await Promise.all(itemRefs.map(async (itemRef) => {
    try {
      const meta = await getMetadata(itemRef);
      const updated = Date.parse(meta.updated || meta.timeCreated || 0) || 0;
      const url = await getDownloadURL(itemRef).catch(() => null);
      return {
        name: meta.name,
        path: itemRef.fullPath,
        basePath,
        size: meta.size,
        contentType: meta.contentType,
        updated,
        updatedISO: meta.updated,
        timeCreated: meta.timeCreated,
        downloadURL: url,
      };
    } catch (_) {
      return { name: itemRef.name, path: itemRef.fullPath, basePath, updated: 0, downloadURL: null };
    }
  }));

  metas.sort((a, b) => b.updated - a.updated);
  return metas.slice(0, limit);
}
