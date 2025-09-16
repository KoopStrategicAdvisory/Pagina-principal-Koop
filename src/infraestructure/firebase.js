import { initializeApp, getApps } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Bucket URL provided by you
const DEFAULT_BUCKET_URL = 'gs://koop-project-b3b82.firebasestorage.app';

// Read config from Vite env (set in front/.env)
const cfg = {
  apiKey: import.meta?.env?.VITE_FIREBASE_API_KEY,
  authDomain: import.meta?.env?.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta?.env?.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta?.env?.VITE_FIREBASE_APP_ID,
  storageBucket: import.meta?.env?.VITE_FIREBASE_STORAGE_BUCKET,
};

let app = null;
try {
  if (!getApps().length) {
    if (cfg.apiKey && (cfg.projectId || cfg.authDomain || cfg.appId || cfg.storageBucket)) {
      app = initializeApp(cfg);
    } else {
      console.warn('[Firebase] Config incompleta. Define variables VITE_FIREBASE_* para habilitar Storage.');
    }
  } else {
    app = getApps()[0];
  }
} catch (e) {
  console.warn('[Firebase] No se pudo inicializar la app:', e?.message || e);
}

// Prefer env var, fallback to the provided bucket URL
export const BUCKET_URL = import.meta?.env?.VITE_FIREBASE_STORAGE_URL || DEFAULT_BUCKET_URL;

export function getStorageSafe() {
  try {
    // If app is null, this will throw; we catch and return null
    return getStorage(app || undefined, BUCKET_URL);
  } catch (e) {
    console.warn('[Firebase] Storage no disponible. Revisa la configuración.', e?.message || e);
    return null;
  }
}

export default app;

