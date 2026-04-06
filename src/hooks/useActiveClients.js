import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { listActiveClients, updateClient, assignClientAdmin, deleteClient } from '../api/clients';
import { listUsers as listAllUsers } from '../api/adminUsers';
import { listRecentDocs } from '../api/docs';
import { normalizeRoles } from './useAdminUsers';

export function useActiveClients() {
  const { user } = useAuth();
  const isAdmin = normalizeRoles(user?.roles).includes('admin');

  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(null);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState('');
  const [expandedClient, setExpandedClient] = useState(null);
  const [assignOpen, setAssignOpen] = useState(false);
  const [assignClient, setAssignClient] = useState(null);
  const [admins, setAdmins] = useState([]);
  const [adminsLoading, setAdminsLoading] = useState(false);
  const [adminsError, setAdminsError] = useState(null);
  const [selectedAdminId, setSelectedAdminId] = useState('');
  const [filesOpen, setFilesOpen] = useState(false);
  const [filesClient, setFilesClient] = useState(null);
  const [clientFiles, setClientFiles] = useState({});
  const [loadingFiles, setLoadingFiles] = useState({});
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [confirmDeleteClient, setConfirmDeleteClient] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(null);
  const [deletePass, setDeletePass] = useState('');
  const [notice, setNotice] = useState(null);
  const [noticeKind, setNoticeKind] = useState('success');
  const noticeTimerRef = useRef(null);

  const showNotice = useCallback((msg, kind = 'success') => {
    setNotice(String(msg || ''));
    setNoticeKind(kind);
    if (noticeTimerRef.current) {
      clearTimeout(noticeTimerRef.current);
    }
    noticeTimerRef.current = setTimeout(() => setNotice(null), 3500);
  }, []);

  useEffect(() => {
    return () => {
      if (noticeTimerRef.current) {
        clearTimeout(noticeTimerRef.current);
      }
    };
  }, []);

  const fetchClients = useCallback(async () => {
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
  }, [isAdmin]);

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  const filtered = useMemo(() => {
    const q = String(search || '').trim().toLowerCase();
    if (!q) return clients;
    return clients.filter((c) =>
      [c.name, c.email, c.documentNumber, c.phone, c.id]
        .map((v) => String(v || '').toLowerCase())
        .some((v) => v.includes(q))
    );
  }, [clients, search]);

  const getAssignedFor = useCallback((clientId) => {
    const found = clients.find((c) => c.id === clientId);
    return found?.assignedAdmin || null;
  }, [clients]);

  const openAssignModal = useCallback(async (client) => {
    setAssignClient(client);
    setAssignOpen(true);
    setAdminsError(null);
    setAdminsLoading(true);
    try {
      const data = await listAllUsers();
      const items = Array.isArray(data?.items) ? data.items : [];
      const adminUsers = items.filter((u) =>
        (Array.isArray(u.roles) ? u.roles : [u.roles]).map((r) => String(r || '').toLowerCase()).includes('admin')
      );
      setAdmins(adminUsers.map((u) => ({ id: u.id, name: u.name || u.email || u.id, email: u.email })));
      const current = getAssignedFor(client.id);
      setSelectedAdminId(current?.id || '');
    } catch (e) {
      setAdminsError(e?.response?.data?.message || e?.message || 'No se pudo cargar administradores');
    } finally {
      setAdminsLoading(false);
    }
  }, [getAssignedFor]);

  const onSaveAssignment = useCallback(async () => {
    if (!assignClient) return;
    try {
      const payloadId = selectedAdminId || '';
      await assignClientAdmin(assignClient.id, payloadId);
      await fetchClients();
      setAssignOpen(false);
      setAssignClient(null);
    } catch (e) {
      setAdminsError(e?.response?.data?.message || e?.message || 'No se pudo asignar');
    }
  }, [assignClient, selectedAdminId, fetchClients]);

  const onEdit = useCallback((client) => {
    setEditing({
      id: client.id,
      name: client.name || '',
      email: client.email || '',
      documentNumber: client.documentNumber || '',
      phone: client.phone || '',
    });
  }, []);

  const onSave = useCallback(async () => {
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
  }, [editing]);

  const onAskDelete = useCallback((client) => {
    setConfirmDeleteClient(client);
    setConfirmDeleteOpen(true);
    setDeleteError(null);
    setDeletePass('');
  }, []);

  const onConfirmDelete = useCallback(async () => {
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
  }, [confirmDeleteClient, deletePass, fetchClients, showNotice]);

  const openFilesModal = useCallback((client) => {
    setFilesClient(client);
    setFilesOpen(true);
  }, []);

  const folderForClient = useCallback((c) => {
    const idPart = String(c?.documentNumber || c?.id || '').trim();
    return idPart ? `clientes/${idPart}/` : 'clientes/sin-id/';
  }, []);

  const loadClientFiles = useCallback(async (client) => {
    const clientId = client.id;
    const folder = folderForClient(client);
    setLoadingFiles((prev) => ({ ...prev, [clientId]: true }));
    try {
      const subfolder = folder.startsWith('clientes/') ? folder.replace(/\/$/, '') : folder;
      const data = await listRecentDocs({ limit: 50, subfolder });
      const files = Array.isArray(data?.items) ? data.items : [];
      setClientFiles((prev) => ({ ...prev, [clientId]: files }));
    } catch (e) {
      console.error('Error al cargar archivos:', e);
      setClientFiles((prev) => ({ ...prev, [clientId]: [] }));
    } finally {
      setLoadingFiles((prev) => ({ ...prev, [clientId]: false }));
    }
  }, [folderForClient]);

  const toggleClientExpansion = useCallback(async (client) => {
    const clientId = client.id;
    if (expandedClient === clientId) {
      setExpandedClient(null);
      return;
    }
    setExpandedClient(clientId);
    if (!clientFiles[clientId]) {
      await loadClientFiles(client);
    }
  }, [expandedClient, clientFiles, loadClientFiles]);

  const collapseClient = useCallback(() => setExpandedClient(null), []);
  const closeAssignModal = useCallback(() => {
    setAssignOpen(false);
    setAssignClient(null);
  }, []);
  const closeFilesModal = useCallback(() => {
    setFilesOpen(false);
    setFilesClient(null);
  }, []);
  const closeDeleteModal = useCallback(() => {
    setConfirmDeleteOpen(false);
    setConfirmDeleteClient(null);
  }, []);

  return {
    isAdmin,
    clients,
    loading,
    error,
    editing,
    setEditing,
    saving,
    search,
    setSearch,
    expandedClient,
    collapseClient,
    assignOpen,
    assignClient,
    admins,
    adminsLoading,
    adminsError,
    selectedAdminId,
    setSelectedAdminId,
    filesOpen,
    filesClient,
    clientFiles,
    loadingFiles,
    confirmDeleteOpen,
    confirmDeleteClient,
    deleting,
    deleteError,
    deletePass,
    setDeletePass,
    notice,
    noticeKind,
    fetchClients,
    filtered,
    getAssignedFor,
    openAssignModal,
    onSaveAssignment,
    onEdit,
    onSave,
    onAskDelete,
    onConfirmDelete,
    openFilesModal,
    folderForClient,
    loadClientFiles,
    toggleClientExpansion,
    closeAssignModal,
    closeFilesModal,
    closeDeleteModal,
    showNotice,
  };
}
