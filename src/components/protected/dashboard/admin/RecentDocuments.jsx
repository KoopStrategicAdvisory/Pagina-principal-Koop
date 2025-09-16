// RecentDocuments — Lista accesos a carpetas de Drive del cliente.
// Si no hay carpetas asignadas en el token, usa valores por defecto
// de VITE_DEFAULT_DRIVE_FOLDER_URL y VITE_DEFAULT_DRIVE_FOLDER_NAME.
import { useMemo } from 'react';
import { useAuth } from '../../../../context/AuthContext.jsx';

export default function RecentDocuments({ refreshKey = 0 }) {
  const { user } = useAuth();
  const folders = useMemo(() => {
    const arr = Array.isArray(user?.driveFolders) ? user.driveFolders.filter(f => f && f.url) : [];
    const defUrl = import.meta?.env?.VITE_DEFAULT_DRIVE_FOLDER_URL;
    const defName = import.meta?.env?.VITE_DEFAULT_DRIVE_FOLDER_NAME || 'Carpeta KOOP';
    if ((!arr || arr.length === 0) && defUrl) {
      return [{ name: defName, url: defUrl }];
    }
    return arr;
  }, [user, refreshKey]);

  return (
    <div className="dash-item">
      <div className="font-semibold mb-2" style={{ fontWeight: 600, marginBottom: 8 }}>
        Documentos recientes
      </div>

      {folders.length === 0 && (
        <div className="text-sm opacity-60" style={{ fontSize: 14, opacity: 0.8 }}>Sin carpetas asignadas.</div>
      )}

      {folders.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {folders.map((f, idx) => (
            <li key={(f.url || '') + idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {f.name || 'Carpeta de Drive'}
                </div>
                <div className="muted" style={{ fontSize: 12, opacity: 0.8 }}>{f.url}</div>
              </div>
              <a className="btn btn-primary" href={f.url} target="_blank" rel="noreferrer" data-drive-folder-url={f.url}>Abrir carpeta</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

