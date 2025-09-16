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

export async function uploadDocument(file, onProgress) {
  const storage = getStorageSafe();
  if (!storage) throw new Error('Firebase Storage no configurado');
  if (!file) throw new Error('Archivo requerido');

  const name = `${Date.now()}_${slugName(file.name) || 'archivo'}`;
  const objectPath = `uploads/${name}`;
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
          name,
          size: meta.size,
          contentType: meta.contentType,
          updated: meta.updated,
          timeCreated: meta.timeCreated,
          downloadURL: url,
        });
      } catch (e) {
        // Even if metadata fails, return minimal info
        resolve({ path: objectPath, name, downloadURL: null });
      }
    });
  });
}

export async function listRecentDocuments(limit = 5) {
  const storage = getStorageSafe();
  if (!storage) throw new Error('Firebase Storage no configurado');
  const rootRef = ref(storage, 'uploads');
  const { items } = await listAll(rootRef);
  // Fetch metadata in parallel (but not too many)
  const metas = await Promise.all(items.map(async (itemRef) => {
    try {
      const meta = await getMetadata(itemRef);
      let updated = Date.parse(meta.updated || meta.timeCreated || 0) || 0;
      const url = await getDownloadURL(itemRef).catch(() => null);
      return {
        name: meta.name,
        path: itemRef.fullPath,
        size: meta.size,
        contentType: meta.contentType,
        updated,
        updatedISO: meta.updated,
        timeCreated: meta.timeCreated,
        downloadURL: url,
      };
    } catch (_) {
      return { name: itemRef.name, path: itemRef.fullPath, updated: 0, downloadURL: null };
    }
  }));
  metas.sort((a, b) => b.updated - a.updated);
  return metas.slice(0, limit);
}

