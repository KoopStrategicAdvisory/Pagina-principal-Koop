import { useCallback, useEffect, useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { listUsers, setUserActive, deleteUser, setUserRole } from '../api/adminUsers';
import { createClientFromUser } from '../api/clients';

const ALLOWED_ROLES = ['admin', 'lawyer', 'client', 'user'];
export const ROLE_OPTIONS = [
  { id: 'admin', label: 'Administrador' },
  { id: 'lawyer', label: 'Abogado' },
  { id: 'client', label: 'Cliente' },
  { id: 'user', label: 'Usuario' },
];

export function normalizeRoles(value, { defaultRole = 'user' } = {}) {
  const normalizedDefault = String(defaultRole || 'user').trim().toLowerCase();
  const safeDefault = ALLOWED_ROLES.includes(normalizedDefault) ? normalizedDefault : 'user';
  const roles = Array.isArray(value) ? value : [value];
  const normalized = roles
    .map((role) => String(role || '').trim().toLowerCase())
    .filter((role) => ALLOWED_ROLES.includes(role));
  if (normalized.includes('admin')) return ['admin'];
  if (normalized.includes('lawyer')) return ['lawyer'];
  if (normalized.includes('client')) return ['client'];
  if (normalized.includes('user')) return ['user'];
  return [safeDefault];
}

export function useAdminUsers() {
  const { user } = useAuth();
  const isAdmin = normalizeRoles(user?.roles).includes('admin');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [updating, setUpdating] = useState(null);
  const [roleUpdating, setRoleUpdating] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [clientModal, setClientModal] = useState(null);
  const [clientSaving, setClientSaving] = useState(false);
  const [clientError, setClientError] = useState(null);
  const [notice, setNotice] = useState(null);
  const saveClientTimeoutRef = useRef(null);

  const fetchUsers = useCallback(async () => {
    if (!isAdmin) return;
    setLoading(true);
    setError(null);

    try {
      const data = await listUsers();
      setUsers(
        Array.isArray(data?.items)
          ? data.items.map((item) => ({ ...item, roles: normalizeRoles(item.roles) }))
          : []
      );
    } catch (e) {
      setError(e?.response?.data?.message || e?.message || 'No se pudo cargar la lista');
    } finally {
      setLoading(false);
    }
  }, [isAdmin]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const toggleActive = useCallback(
    async (id, active) => {
      try {
        setUpdating(id);
        await setUserActive(id, active);
        setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, active } : u)));
      } catch (e) {
        setError(e?.response?.data?.message || e?.message || 'No se pudo actualizar el usuario');
      } finally {
        setUpdating(null);
      }
    },
    []
  );

  const changeRole = useCallback(async (id, role) => {
    const normalizedRole = String(role || '').trim().toLowerCase();
    if (!normalizedRole) return;

    const roleLabels = {
      admin: 'administrador',
      lawyer: 'abogado',
      client: 'cliente',
      user: 'usuario',
    };
    const isDemote = normalizedRole === 'user';
    const message = isDemote
      ? `Deseas degradar este usuario al rol ${roleLabels[normalizedRole] || normalizedRole}?`
      : `Deseas asignar el rol ${roleLabels[normalizedRole] || normalizedRole} a este usuario?`;
    const confirmed = window.confirm(message);
    if (!confirmed) return;

    try {
      setError(null);
      setRoleUpdating({ id, role: normalizedRole });
      const data = await setUserRole(id, normalizedRole);
      if (data?.user) {
        setUsers((prev) =>
          prev.map((u) =>
            u.id === id ? { ...u, ...data.user, roles: normalizeRoles(data.user.roles) } : u
          )
        );
      }
    } catch (e) {
      setError(e?.response?.data?.message || e?.message || 'No se pudo actualizar los roles');
    } finally {
      setRoleUpdating(null);
    }
  }, []);

  const removeUser = useCallback(async (id) => {
    const confirmed = window.confirm('Deseas eliminar este usuario? Esta accion es permanente.');
    if (!confirmed) return;
    try {
      setDeleting(id);
      await deleteUser(id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (e) {
      setError(e?.response?.data?.message || e?.message || 'No se pudo eliminar el usuario');
    } finally {
      setDeleting(null);
    }
  }, []);

  const openClientModal = useCallback((u) => {
    setClientError(null);
    const normRoles = normalizeRoles(u.roles);
    const role = normRoles.includes('admin')
      ? 'admin'
      : normRoles.includes('lawyer')
      ? 'lawyer'
      : normRoles.includes('client')
      ? 'client'
      : 'client';
    setClientModal({
      userId: u.id,
      fullName: u.name || '',
      documentType: '',
      documentNumber: '',
      birthDate: '',
      phone: '',
      email: u.email || '',
      address: '',
      contactInfo: '',
      role,
    });
  }, []);

  const saveClient = useCallback(async () => {
    if (!clientModal?.userId) return;
    setClientError(null);
    try {
      setClientSaving(true);
      const payload = {
        fullName: String(clientModal.fullName || '').trim(),
        documentType: String(clientModal.documentType || '').trim(),
        documentNumber: String(clientModal.documentNumber || '').trim(),
        birthDate: clientModal.birthDate ? new Date(clientModal.birthDate).toISOString() : undefined,
        phone: String(clientModal.phone || '').trim(),
        email: String(clientModal.email || '').trim(),
        address: String(clientModal.address || '').trim(),
        contactInfo: String(clientModal.contactInfo || '').trim(),
      };

      if (!payload.fullName) {
        setClientError('El nombre completo es requerido');
        setClientSaving(false);
        return;
      }

      await createClientFromUser(clientModal.userId, payload);
      setClientModal(null);
      if (saveClientTimeoutRef.current) {
        clearTimeout(saveClientTimeoutRef.current);
        saveClientTimeoutRef.current = null;
      }
      setNotice('Cliente creado y carpeta asignada');
      saveClientTimeoutRef.current = setTimeout(() => setNotice(null), 3500);
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch {}
    } catch (e) {
      setClientError(e?.response?.data?.message || e?.message || 'No se pudo crear el cliente');
    } finally {
      setClientSaving(false);
    }
  }, [clientModal]);

  useEffect(() => {
    return () => {
      if (saveClientTimeoutRef.current) {
        clearTimeout(saveClientTimeoutRef.current);
      }
    };
  }, []);

  return {
    user,
    isAdmin,
    users,
    loading,
    error,
    updating,
    roleUpdating,
    deleting,
    clientModal,
    clientSaving,
    clientError,
    notice,
    fetchUsers,
    toggleActive,
    changeRole,
    removeUser,
    openClientModal,
    saveClient,
    setClientModal,
    setClientError,
    setNotice,
  };
}
