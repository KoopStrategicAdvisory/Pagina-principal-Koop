import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { listActiveClients, updateClient, assignClientAdmin, deleteClient } from '../api/clients';
import { listUsers as listAllUsers } from '../api/adminUsers';
import { listRecentDocs, uploadDoc, getDownloadUrl, createFolder } from '../api/docs';
import api from '../api/axios';
import '../styles/dashboard.css';
import { SuccessNotice, DangerNotice } from '../components/common/Notice';
import { EditForm, EditField, EditRow } from '../components/common/EditFormKit';

const ALLOWED_ROLES = ['admin', 'user'];

// Prefijos predeterminados para carpetas
const FOLDER_PREFIXES = [
  { id: 'laboral', label: '1. Proceso Laboral' },
  { id: 'penal', label: '2. Proceso Penal' },
  { id: 'administrativo', label: '3. Proceso Administrativo' },
  { id: 'civil-declarativo', label: '4. Proceso Civil Declarativo' },
  { id: 'ejecutivo', label: '5. Proceso Ejecutivo' },
  { id: 'familia', label: '6. Proceso de Familia' },
  { id: 'arbitral', label: '7. Proceso Arbitral' },
  { id: 'notarial', label: '8. Trámite Notarial' },
  { id: 'varios', label: '9. Trámites Varios' },
  { id: 'otros', label: '10. Otros' }
];

function normalizeRoles(value, { defaultRole = 'user' } = {}) {
  const normalizedDefault = String(defaultRole || 'user').trim().toLowerCase();
  const safeDefault = ALLOWED_ROLES.includes(normalizedDefault) ? normalizedDefault : 'user';
  const roles = Array.isArray(value) ? value : [value];
  const normalized = roles
    .map((role) => String(role || '').trim().toLowerCase())
    .filter((role) => ALLOWED_ROLES.includes(role));
  if (normalized.includes('admin')) return ['admin'];
  if (normalized.includes('user')) return ['user'];
  return [safeDefault];
}

function useIsAdmin(user) {
  const roles = normalizeRoles(user?.roles);
  return roles.includes('admin');
}

export default function ClientesActivos() {
  const { user } = useAuth();
  const isAdmin = useIsAdmin(user);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(null); // { id, name, email, documentNumber, phone }
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  // Asignaci�n de admins (UI local)
  const [assignOpen, setAssignOpen] = useState(false);
  const [assignClient, setAssignClient] = useState(null);
  const [admins, setAdmins] = useState([]);
  const [adminsLoading, setAdminsLoading] = useState(false);
  const [adminsError, setAdminsError] = useState(null);
  const [selectedAdminId, setSelectedAdminId] = useState('');

  // Archivos por cliente (S3)
  const [filesOpen, setFilesOpen] = useState(false);
  const [filesClient, setFilesClient] = useState(null);
  const [filesFolder, setFilesFolder] = useState('');
  const [files, setFiles] = useState([]);
  const [filesLoading, setFilesLoading] = useState(false);
  const [filesError, setFilesError] = useState(null);
  const [filesWarning, setFilesWarning] = useState(null);
  const [uploading, setUploading] = useState(false);
  
  // Sistema de carpetas con prefijos
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [selectedFolderPrefix, setSelectedFolderPrefix] = useState('');
  const [creatingFolder, setCreatingFolder] = useState(false);
  const [currentSubfolder, setCurrentSubfolder] = useState('');
  const [deletingFile, setDeletingFile] = useState(null);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [confirmDeleteClient, setConfirmDeleteClient] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(null);
  const [deletePass, setDeletePass] = useState('');
  const [notice, setNotice] = useState(null);
  const [noticeKind, setNoticeKind] = useState('success');

  const showNotice = (msg, kind = 'success') => {
    setNotice(String(msg || ''));
    setNoticeKind(kind);
    try { clearTimeout(showNotice._t); } catch {}
    showNotice._t = setTimeout(() => setNotice(null), 3500);
  };

  const fetchClients = async () => {
    if (!isAdmin) return;
    setLoading(true);
    setError(null);
    try {
      const data = await listActiveClients();
      const items = Array.isArray(data?.items) ? data.items : [];
      setClients(items);
    } catch (e) {
      setError(e?.response?.data?.message || e?.message || 'No se pudo cargar la lista de clientes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin]);

  const filtered = useMemo(() => {
    const q = String(search || '').trim().toLowerCase();
    if (!q) return clients;
    return clients.filter((c) =>
      [c.name, c.email, c.documentNumber, c.phone, c.id]
        .map((v) => String(v || '').toLowerCase())
        .some((v) => v.includes(q))
    );
  }, [clients, search]);

  // Helpers de asignaci�n (persistencia en backend)
  const getAssignedFor = (clientId) => {
    const found = clients.find(c=>c.id===clientId);
    return found?.assignedAdmin || null;
  };

  const openAssignModal = async (client) => {
    setAssignClient(client);
    setAssignOpen(true);
    setAdminsError(null);
    setAdminsLoading(true);
    try {
      const data = await listAllUsers();
      const items = Array.isArray(data?.items) ? data.items : [];
      const adminUsers = items.filter((u) => (Array.isArray(u.roles) ? u.roles : [u.roles]).map(r=>String(r||'').toLowerCase()).includes('admin'));
      setAdmins(adminUsers.map(u=>({ id:u.id, name:u.name||u.email||u.id, email:u.email })));
      const current = getAssignedFor(client.id);
      setSelectedAdminId(current?.id || '');
    } catch (e) {
      setAdminsError(e?.response?.data?.message || e?.message || 'No se pudo cargar administradores');
    } finally {
      setAdminsLoading(false);
    }
  };

  const onSaveAssignment = async () => {
    try {
      const payloadId = selectedAdminId || '';
      await assignClientAdmin(assignClient.id, payloadId);
      // Refrescar lista en memoria para reflejar assignedAdmin
      await fetchClients();
      setAssignOpen(false);
      setAssignClient(null);
    } catch (e) {
      setAdminsError(e?.response?.data?.message || e?.message || 'No se pudo asignar');
    }
  };

  const onEdit = (client) => {
    setEditing({
      id: client.id,
      name: client.name || '',
      email: client.email || '',
      documentNumber: client.documentNumber || '',
      phone: client.phone || '',
    });
  };

  const onSave = async () => {
    if (!editing) return;
    const payload = {
      name: String(editing.name || '').trim(),
      documentNumber: String(editing.documentNumber || '').trim(),
      phone: String(editing.phone || '').trim(),
    };
    try {
      setSaving(true);
      setError(null);
      const resp = await updateClient(editing.id, payload);
      const updated = resp?.client || null;
      if (updated) {
        setClients((prev) => prev.map((c) => (c.id === updated.id ? { ...c, ...updated } : c)));
      }
      setEditing(null);
    } catch (e) {
      setError(e?.response?.data?.message || e?.message || 'No se pudo guardar la informacion');
    } finally {
      setSaving(false);
    }
  };

  const onAskDelete = (client) => {
    setConfirmDeleteClient(client);
    setConfirmDeleteOpen(true);
    setDeleteError(null);
    setDeletePass('');
  };

  const onConfirmDelete = async () => {
    if (!confirmDeleteClient) return;
    try {
      setDeleting(true);
      setDeleteError(null);
      const res = await deleteClient(confirmDeleteClient.id, deletePass);
      await fetchClients();
      setConfirmDeleteOpen(false);
      setConfirmDeleteClient(null);
      const deleted = res?.s3?.deleted;
      if (typeof deleted === 'number') {
        showNotice(`Cliente eliminado. Archivos S3 eliminados: ${deleted}`, 'danger');
      } else {
        showNotice('Cliente eliminado correctamente', 'danger');
      }
    } catch (e) {
      setDeleteError(e?.response?.data?.message || e?.message || 'No se pudo eliminar el cliente');
    } finally {
      setDeleting(false);
    }
  };

  const folderForClient = (c) => {
    const idPart = String(c?.documentNumber || c?.id || '').trim();
    return idPart ? `clientes/${idPart}` : 'clientes/sin-id';
  };

  const loadClientFiles = async (folder) => {
    setFilesLoading(true);
    setFilesError(null);
    setFilesWarning(null);
    try {
      const data = await listRecentDocs({ limit: 50, subfolder: folder });
      setFiles(Array.isArray(data?.items) ? data.items : []);
      if (data?.warning) setFilesWarning(data.warning);
    } catch (e) {
      setFilesError(e?.response?.data?.message || e?.message || 'No se pudieron cargar archivos');
    } finally {
      setFilesLoading(false);
    }
  };

  const openFilesModal = async (client) => {
    const folder = folderForClient(client);
    setFilesClient(client);
    setFilesFolder(folder);
    setCurrentSubfolder(folder);
    setFilesOpen(true);
    setShowCreateFolder(false);
    setNewFolderName('');
    setSelectedFolderPrefix('');
    await loadClientFiles(folder);
  };

  const ensureFolderAndOpen = async (client) => {
    const folder = folderForClient(client);
    try {
      await createFolder({ subfolder: folder });
    } catch (_) { /* idempotente si ya existe */ }
    await openFilesModal(client);
  };

  const uploadToClient = async (file) => {
    if (!file || !filesFolder) return;
    try {
      setUploading(true);
      setFilesError(null);
      await uploadDoc(file, { subfolder: filesFolder });
      await loadClientFiles(filesFolder);
    } catch (e) {
      setFilesError(e?.response?.data?.message || e?.message || 'No se pudo subir el archivo');
    } finally {
      setUploading(false);
    }
  };

  // Removed explicit folder creation; uploading un archivo crea el registro necesario.

  const onDownload = async (key, fallbackUrl) => {
    try {
      const { url } = await getDownloadUrl(key, 600);
      window.open(url || fallbackUrl, '_blank');
    } catch (e) {
      if (fallbackUrl) window.open(fallbackUrl, '_blank');
    }
  };

  // Funciones para el sistema de carpetas
  const onCreateFolder = async () => {
    if (!selectedFolderPrefix || !newFolderName.trim()) return;
    
    try {
      setCreatingFolder(true);
      setFilesError(null);
      
      const folderPath = `${filesFolder}${selectedFolderPrefix}/${newFolderName.trim()}/`;
      await createFolder({ subfolder: folderPath });
      
      setShowCreateFolder(false);
      setNewFolderName('');
      setSelectedFolderPrefix('');
      showNotice('Carpeta creada exitosamente');
      
      // Recargar archivos para mostrar la nueva carpeta
      await loadClientFiles(filesFolder);
    } catch (e) {
      setFilesError(e?.response?.data?.message || e?.message || 'No se pudo crear la carpeta');
    } finally {
      setCreatingFolder(false);
    }
  };

  const onDeleteFile = async (file) => {
    if (!file?.key) return;
    
    try {
      setDeletingFile(file.key);
      setFilesError(null);
      
      // Llamar a la API para eliminar el archivo
      await api.delete('/docs/object', { data: { key: file.key } });
      
      showNotice('Archivo eliminado exitosamente');
      await loadClientFiles(filesFolder);
    } catch (e) {
      setFilesError(e?.response?.data?.message || e?.message || 'No se pudo eliminar el archivo');
    } finally {
      setDeletingFile(null);
    }
  };

  const onNavigateToSubfolder = async (subfolder) => {
    setCurrentSubfolder(subfolder);
    await loadClientFiles(subfolder);
  };

  const onNavigateBack = async () => {
    if (currentSubfolder) {
      const parentFolder = currentSubfolder.split('/').slice(0, -2).join('/') + '/';
      setCurrentSubfolder(parentFolder);
      await loadClientFiles(parentFolder);
    }
  };

  if (!isAdmin) {
    return (
      <div className="dash-page" style={{ padding: 40 }}>
        <div className="dash-card" style={{ maxWidth: 560 }}>
          <h2 className="dash-title">Acceso restringido</h2>
          <p style={{ marginTop: 12 }}>
            Esta seccion esta disponible solo para administradores.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="dash-page"
      style={{
        backgroundImage:
          "linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        // respetar el padding-top del .dash-page (deja espacio para navbar fijo)
      }}
    >
      <div className="dash-card" style={{ width: '100%', maxWidth: 1200 }}>
        <style>{`
          .only-mobile { display: block; }
          .only-desktop { display: none; }
          @media (min-width: 768px) {
            .only-mobile { display: none; }
            .only-desktop { display: block; }
          }
          @media (max-width: 767px) {
            .mobile-list { display: grid; gap: 10px; }
          }
          /* Header layout */
          .clients-header { display: grid; gap: 10px; align-items: center; }
          .clients-actions { display: grid; grid-template-columns: 1fr auto; gap: 8px; }
          @media (min-width: 768px) {
            .clients-header { grid-template-columns: 1fr auto; }
          }
          @media (max-width: 767px) {
            .clients-actions { grid-template-columns: 1fr; }
            .clients-actions .btn { width: 100%; }
          }
          .mobile-item { border: 1px solid rgba(148,163,184,0.35); border-radius: 10px; overflow: hidden; background: #1b263b; }
          .mobile-item-header { display: flex; align-items: center; justify-content: space-between; padding: 0; cursor: pointer; height: 44px; }
          .mobile-item .btn { border-radius: 10px; width: 100%; }
          .mobile-item-title { flex: 1; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: left; padding: 0 12px; }
          .mobile-item-details { padding: 10px 12px; border-top: 1px solid rgba(148,163,184,0.25); }
          .kv { display: grid; grid-template-columns: 120px 1fr; gap: 8px; font-size: 14px; }
          .kv span { opacity: 0.9; }
          @media (max-width: 480px) {
            .kv { grid-template-columns: 1fr; }
            .kv span { font-size: 12px; opacity: 0.8; }
          }
        `}</style>
        <div className="dash-header clients-header" style={{ marginBottom: 16 }}>
          <div className="dash-title">Clientes activos</div>
          <div className="clients-actions">
            <input
              type="search"
              name="q"
              autoComplete="off"
              placeholder="Buscar por nombre, email, cedula o celular"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                background: '#1b263b',
                color: '#e2e8f0',
                border: '1px solid rgba(148,163,184,0.35)',
                borderRadius: 8,
                padding: '6px 10px',
              }}
            />
            <button className="btn btn-secondary" onClick={fetchClients} disabled={loading}>
              {loading ? 'Actualizando...' : 'Refrescar'}
            </button>
          </div>
        </div>

        {notice && (noticeKind === 'danger' ? (
          <DangerNotice autoHideMs={3500}>{notice}</DangerNotice>
        ) : (
          <SuccessNotice autoHideMs={3500}>{notice}</SuccessNotice>
        ))}
        {error && (<DangerNotice>{error}</DangerNotice>)}

        {/* Desktop table */}
        <div className="dash-item only-desktop" style={{ overflowX: 'auto' }}>
          <table className="me-table" style={{ minWidth: 820 }}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Cedula</th>
                <th>Celular</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center', padding: 16 }}>
                    {loading ? 'Cargando...' : 'No hay clientes activos para mostrar'}
                  </td>
                </tr>
              )}
              {filtered.map((c) => (
                <tr key={c.id}>
                  <td>
                    <div>{c.name || '-'}</div>
                    <div style={{ fontSize: 12, opacity: 0.75 }}>Admin asignado: {c.assignedAdmin?.name || '�'}</div>
                  </td>
                  <td>{c.email || '-'}</td>
                  <td>{c.documentNumber || '-'}</td>
                  <td>{c.phone || '-'}</td>
                  <td>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => openAssignModal(c)}
                        title={getAssignedFor(c.id) ? `Asignado a ${getAssignedFor(c.id)?.name || ''}` : 'Asignar administrador'}
                      >
                        {getAssignedFor(c.id) ? 'Asignado' : 'Asignar'}
                      </button>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => ensureFolderAndOpen(c)}
                      >
                        Archivos
                      </button>
                      <button className="btn btn-primary btn-sm" onClick={() => onEdit(c)}>Editar</button>
                      <button className="btn btn-secondary btn-sm" onClick={() => onAskDelete(c)}>Eliminar</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile list with expandable details */}
        <div className="dash-item only-mobile mobile-list">
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: 8 }}>
              {loading ? 'Cargando...' : 'No hay clientes activos para mostrar'}
            </div>
          )}
          {filtered.map((c) => {
            const isOpen = expandedId === c.id;
            return (
              <div key={c.id} className="mobile-item">
                <button
                  type="button"
                  className="btn btn-primary btn-sm mobile-item-header"
                  onClick={() => setExpandedId((prev) => (prev === c.id ? null : c.id))}
                  aria-expanded={isOpen}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <div className="mobile-item-title">{c.name || '-'}</div>
                  <div style={{ opacity: 0.9, fontSize: 12, paddingRight: 10 }}>{isOpen ? '?' : '?'}</div>
                </button>
                {isOpen && (
                  <div className="mobile-item-details">
                    <div className="kv"><span>Email</span><div>{c.email || '-'}</div></div>
                    <div className="kv" style={{ marginTop: 6 }}><span>C�dula</span><div>{c.documentNumber || '-'}</div></div>
                    <div className="kv" style={{ marginTop: 6 }}><span>Celular</span><div>{c.phone || '-'}</div></div>
                    <div className="kv" style={{ marginTop: 6 }}><span>Admin asignado</span><div>{c.assignedAdmin?.name || '�'}</div></div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => openAssignModal(c)}
                        style={{ marginRight: 8 }}
                        title={getAssignedFor(c.id) ? `Asignado a ${getAssignedFor(c.id)?.name || ''}` : 'Asignar administrador'}
                      >
                        {getAssignedFor(c.id) ? 'Asignado' : 'Asignar'}
                      </button>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => ensureFolderAndOpen(c)}
                        style={{ marginRight: 8 }}
                      >
                        Archivos
                      </button>
                      <button className="btn btn-primary btn-sm" onClick={() => onEdit(c)} style={{ marginRight: 8 }}>Editar</button>
                      <button className="btn btn-secondary btn-sm" onClick={() => onAskDelete(c)}>Eliminar</button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {editing && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50,
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setEditing(null); }}
        >
          <div className="dash-card" style={{ width: '100%', maxWidth: 560, padding: 16 }}>
            <div className="dash-header" style={{ marginBottom: 12 }}>
              <div className="dash-title">Editar cliente</div>
            </div>
            <div className="dash-item">
              <EditForm>
                <EditField
                  label="Nombre"
                  value={editing.name}
                  onChange={(e) => setEditing((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Nombre y apellidos"
                />
                <EditField
                  label="Email"
                  type="email"
                  value={editing.email}
                  onChange={() => {}}
                  inputProps={{ readOnly: true }}
                />
                <EditRow cols={2}>
                  <EditField
                    label="Cédula"
                    value={editing.documentNumber}
                    onChange={(e) => setEditing((prev) => ({ ...prev, documentNumber: e.target.value }))}
                    placeholder="Ej: 80153356"
                  />
                  <EditField
                    label="Celular"
                    value={editing.phone}
                    onChange={(e) => setEditing((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="Ej: 300 123 4567"
                  />
                </EditRow>
              </EditForm>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12 }}>
              <button className="btn btn-secondary" onClick={() => setEditing(null)} disabled={saving}>
                Cancelar
              </button>
              <button className="btn btn-primary" onClick={onSave} disabled={saving}>
                {saving ? 'Guardando...' : 'Guardar cambios'}
              </button>
            </div>
          </div>
        </div>
      )}

      {filesOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 55, padding: 16,
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setFilesOpen(false); }}
        >
          <div className="dash-card" style={{ width: '100%', maxWidth: 900 }}>
            <div className="dash-header" style={{ marginBottom: 8 }}>
              <div className="dash-title">Archivos � {filesClient?.name || filesClient?.email || filesClient?.id}</div>
              <button className="btn btn-secondary btn-sm" onClick={() => setFilesOpen(false)}>Cerrar</button>
            </div>
            <div className="dash-item" style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 13, opacity: 0.85 }}>Carpeta S3: <code>{filesFolder}</code></div>
              <div style={{ marginTop: 8, display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                <input type="file" onChange={(e) => uploadToClient(e.target.files?.[0])} disabled={uploading} />
                <span style={{ fontSize: 13, opacity: 0.8 }}>{uploading ? 'Subiendo...' : 'Selecciona un archivo para agregarlo al expediente'}</span>
              </div>
              {filesError && (
                <div style={{ background: '#7f1d1d', color: '#fecaca', padding: 8, borderRadius: 6, marginTop: 8 }}>{filesError}</div>
              )}
              {filesWarning && (
                <div style={{ background: '#78350f', color: '#fde68a', padding: 8, borderRadius: 6, marginTop: 8 }}>
                  Aviso: {String(filesWarning) === 'S3_LIST_FORBIDDEN' ? 'No hay permisos para listar el bucket. Puedes descargar si conservas el enlace.' : String(filesWarning)}
                </div>
              )}
            </div>

            <div className="dash-item" style={{ overflowX: 'auto' }}>
              <table className="me-table" style={{ minWidth: 680 }}>
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Tama?o</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {files.length === 0 && (
                    <tr>
                      <td colSpan={5} style={{ textAlign: 'center', padding: 10 }}>
                        {filesLoading ? 'Cargando...' : 'No hay archivos para mostrar'}
                      </td>
                    </tr>
                  )}
                  {files.map((f) => {
                    const dt = f.lastModified ? new Date(f.lastModified) : (f.createdTime ? new Date(f.createdTime) : null);
                    const name = f.name || (f.key || '').split('/').pop();
                    const sizeKb = typeof f.size === 'number' ? Math.max(1, Math.round(f.size / 1024)) : null;
                    const mime = f.mimeType || (name && name.toLowerCase().endsWith('.pdf') ? 'application/pdf' : undefined);
                    return (
                      <tr key={f.key || f.id}>
                        <td>{dt ? dt.toLocaleString() : '-'}</td>
                        <td title={name}>{name}</td>
                        <td>{mime ? (mime.split('/')[1] || mime) : '-'}</td>
                        <td>{sizeKb ? `${sizeKb} KB` : '-'}</td>
                        <td>
                          <button className="btn btn-secondary btn-sm" onClick={() => onDownload(f.key, f.downloadURL || f.downloadUrl || f.webContentLink || f.webViewLink)}>
                            Descargar
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {assignOpen && assignClient && (
        <div
          role="dialog"
          aria-modal="true"
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 60, padding: 16 }}
          onClick={(e) => { if (e.target === e.currentTarget) { setAssignOpen(false); setAssignClient(null); } }}
        >
          <div className="dash-card" style={{ width: '100%', maxWidth: 560 }}>
            <div className="dash-header" style={{ marginBottom: 8 }}>
              <div className="dash-title">Asignar administrador</div>
            </div>
            <div className="dash-item" style={{ display: 'grid', gap: 10 }}>
              <div style={{ fontSize: 14, opacity: 0.85 }}>Cliente: <strong>{assignClient.name}</strong> <span style={{ opacity: 0.7 }}>({assignClient.id})</span></div>
              {adminsError && (
                <div style={{ background: '#7f1d1d', color: '#fecaca', padding: 8, borderRadius: 6 }}>{adminsError}</div>
              )}
              <label style={{ display: 'grid', gap: 6 }}>
                <span>Selecciona un admin</span>
                <select
                  value={selectedAdminId}
                  onChange={(e)=>setSelectedAdminId(e.target.value)}
                  disabled={adminsLoading}
                  style={{ background: '#1b263b', color: '#e2e8f0', border: '1px solid rgba(148,163,184,0.35)', borderRadius: 8, padding: '8px 10px' }}
                >
                  <option value="">� Sin asignar �</option>
                  {admins.map((a)=> (
                    <option key={a.id} value={a.id}>{a.name} � {a.email}</option>
                  ))}
                </select>
              </label>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12 }}>
              <button className="btn btn-secondary" onClick={()=>{ setAssignOpen(false); setAssignClient(null); }} disabled={adminsLoading}>Cancelar</button>
              <button className="btn btn-primary" onClick={onSaveAssignment} disabled={adminsLoading}>Guardar</button>
            </div>
          </div>
        </div>
      )}

      {confirmDeleteOpen && confirmDeleteClient && (
        <div
          role="dialog"
          aria-modal="true"
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 65, padding: 16 }}
          onClick={(e) => { if (e.target === e.currentTarget) { setConfirmDeleteOpen(false); setConfirmDeleteClient(null); } }}
        >
          <div className="dash-card" style={{ width: '100%', maxWidth: 520 }}>
            <div className="dash-header" style={{ marginBottom: 8 }}>
              <div className="dash-title">Confirmar eliminaci�n</div>
            </div>
              <div className="dash-item" style={{ display: 'grid', gap: 10 }}>
                <div>
                  �Eliminar al cliente <strong>{confirmDeleteClient.name || confirmDeleteClient.email || confirmDeleteClient.id}</strong>?
                </div>
                <div style={{ fontSize: 13, opacity: 0.85 }}>
                  Esta acci�n eliminar� el contenedor del cliente y su carpeta S3 asociada (clientes/{String(confirmDeleteClient.documentNumber || '').trim()}).
                </div>
                {/* Hidden username trap to discourage browser autofill on page search */}
                <input
                  type="text"
                  autoComplete="username"
                  value=" "
                  readOnly
                  aria-hidden="true"
                  style={{ position: 'absolute', opacity: 0, height: 0, width: 0, pointerEvents: 'none' }}
                />
                <label style={{ display: 'grid', gap: 6 }}>
                  <span>Contrase�a de eliminaci�n</span>
                  <input
                    type="password"
                    name="delete-confirm"
                    autoComplete="new-password"
                    data-lpignore="true"
                    data-1p-ignore="true"
                    value={deletePass}
                    onChange={(e)=>setDeletePass(e.target.value)}
                    placeholder="eliminarclientekoop"
                    style={{ background: '#1b263b', color: '#e2e8f0', border: '1px solid rgba(148,163,184,0.35)', borderRadius: 8, padding: '8px 10px' }}
                  />
                </label>
                {deleteError && (
                  <div style={{ background: '#7f1d1d', color: '#fecaca', padding: 8, borderRadius: 6 }}>{deleteError}</div>
                )}
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12 }}>
                <button className="btn btn-secondary" onClick={() => { setConfirmDeleteOpen(false); setConfirmDeleteClient(null); }} disabled={deleting}>Cancelar</button>
                <button className="btn btn-primary" onClick={onConfirmDelete} disabled={deleting || !deletePass}>{deleting ? 'Eliminando...' : 'Eliminar'}</button>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}



