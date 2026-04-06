import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { listUsers } from '../api/adminUsers';

const DEFAULT_TASK_FORM = {
  title: '',
  client: '',
  description: '',
  priority: 'media',
  due: '',
  assignee: '',
  tags: '',
  radicado: ''
};

const ALLOWED_ROLES = ['admin', 'user'];
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

function loadTasks(admins = []) {
  const saved = localStorage.getItem('koop_tasks');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return [];
    }
  }

  if (admins.length === 0) {
    return [];
  }

  return [
    {
      id: 'T-901',
      title: 'Radicar tutela por vacaciones compensadas',
      client: 'AGG MRO',
      status: 'en-curso',
      priority: 'alta',
      due: '2025-01-22',
      assignee: admins[0]?.id || '',
      tags: ['Laboral', 'Audiencia'],
      radicado: '11001-31-05-2025-00123',
      description: 'Preparar y radicar tutela por violación al derecho al descanso y vacaciones compensadas',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'T-902',
      title: 'Revisión contrato Promesa de Compraventa (Apto 501)',
      client: 'Ramírez – Mendoza',
      status: 'pendiente',
      priority: 'media',
      due: '2025-01-20',
      assignee: admins[1]?.id || admins[0]?.id || '',
      tags: ['Civil', 'Notaría 27'],
      radicado: null,
      description: 'Revisar cláusulas del contrato de promesa de compraventa del apartamento 501',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'T-903',
      title: 'Concepto: Nota crédito RADIAN ya aceptada',
      client: 'Tus-Cuentas',
      status: 'pendiente',
      priority: 'alta',
      due: '2025-01-19',
      assignee: admins[1]?.id || admins[0]?.id || '',
      tags: ['Tributario', 'DIAN'],
      radicado: null,
      description: 'Elaborar concepto jurídico sobre la nota crédito de RADIAN que ya fue aceptada',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'T-904',
      title: 'Solicitud CHIP y verificación Folio',
      client: 'Inmobiliario',
      status: 'hecho',
      priority: 'baja',
      due: '2025-01-15',
      assignee: admins[2]?.id || admins[0]?.id || '',
      tags: ['PH', 'Certificados'],
      radicado: '50C-2024-009988',
      description: 'Solicitar CHIP y verificar folio de matrícula inmobiliaria',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'T-905',
      title: 'Memorial de sustitución de comprador (Otrosí)',
      client: 'Villa Carolina',
      status: 'en-curso',
      priority: 'media',
      due: '2025-01-23',
      assignee: admins[0]?.id || '',
      tags: ['Civil', 'Minuta'],
      radicado: null,
      description: 'Elaborar memorial para sustitución de comprador mediante Otrosí',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];
}

function saveTasks(tasks) {
  localStorage.setItem('koop_tasks', JSON.stringify(tasks));
}

export function useAdminTasks() {
  const { user } = useAuth();
  const isAdmin = normalizeRoles(user?.roles).includes('admin');
  const [tasks, setTasks] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [q, setQ] = useState('');
  const [me, setMe] = useState('');
  const [status, setStatus] = useState('all');
  const [viewMine, setViewMine] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [formData, setFormData] = useState(DEFAULT_TASK_FORM);
  const [showSuccessNotice, setShowSuccessNotice] = useState(false);
  const [showErrorNotice, setShowErrorNotice] = useState(false);
  const [noticeMessage, setNoticeMessage] = useState('');

  const loadAdmins = useCallback(async () => {
    if (!isAdmin) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await listUsers();
      const adminUsers = Array.isArray(response?.items)
        ? response.items.filter((userItem) => Array.isArray(userItem.roles)
            ? userItem.roles.map((role) => String(role || '').toLowerCase()).includes('admin')
            : String(userItem.roles || '').toLowerCase() === 'admin')
        : [];

      setAdmins(adminUsers);
      if (adminUsers.length > 0) {
        setMe(adminUsers[0].id);
        setTasks(loadTasks(adminUsers));
      } else {
        setNoticeMessage('No se encontraron administradores en el sistema');
        setShowErrorNotice(true);
      }
    } catch (loadError) {
      setNoticeMessage('Error al cargar la lista de administradores: ' + (loadError.message || '')); 
      setShowErrorNotice(true);
      setError(loadError);
    } finally {
      setLoading(false);
    }
  }, [isAdmin]);

  useEffect(() => {
    loadAdmins();
  }, [loadAdmins]);

  useEffect(() => {
    if (tasks.length > 0) {
      saveTasks(tasks);
    }
  }, [tasks]);

  useEffect(() => {
    if (showSuccessNotice) {
      const timer = setTimeout(() => setShowSuccessNotice(false), 5000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [showSuccessNotice]);

  useEffect(() => {
    if (showErrorNotice) {
      const timer = setTimeout(() => setShowErrorNotice(false), 7000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [showErrorNotice]);

  const resetForm = useCallback(() => {
    setFormData({
      ...DEFAULT_TASK_FORM,
      assignee: admins.length > 0 ? admins[0].id : '',
    });
  }, [admins]);

  const openCreateModal = useCallback(() => {
    resetForm();
    setSelectedTask(null);
    setShowCreateModal(true);
  }, [resetForm]);

  const openEditModal = useCallback((task) => {
    setSelectedTask(task);
    setFormData({
      title: task.title,
      client: task.client,
      description: task.description || '',
      priority: task.priority,
      due: task.due,
      assignee: task.assignee,
      tags: (task.tags || []).join(', '),
      radicado: task.radicado || '',
    });
    setShowEditModal(true);
  }, []);

  const openDeleteModal = useCallback((task) => {
    setSelectedTask(task);
    setShowDeleteModal(true);
  }, []);

  const closeCreateModal = useCallback(() => {
    setShowCreateModal(false);
    setSelectedTask(null);
  }, []);
  const closeEditModal = useCallback(() => {
    setShowEditModal(false);
    setSelectedTask(null);
  }, []);
  const closeDeleteModal = useCallback(() => {
    setShowDeleteModal(false);
    setSelectedTask(null);
  }, []);

  const notifySuccess = useCallback((message) => {
    setNoticeMessage(message);
    setShowSuccessNotice(true);
  }, []);

  const notifyError = useCallback((message) => {
    setNoticeMessage(message);
    setShowErrorNotice(true);
  }, []);

  const generateTaskId = useCallback(() => {
    const maxId = Math.max(...tasks.map((t) => parseInt(String(t.id).split('-')[1], 10) || 0));
    return `T-${String(maxId + 1).padStart(3, '0')}`;
  }, [tasks]);

  const handleCreateTask = useCallback(() => {
    if (!formData.title.trim() || !formData.client.trim()) {
      notifyError('El título y cliente son obligatorios');
      return;
    }

    if (!formData.assignee) {
      notifyError('Debe seleccionar un administrador para asignar la tarea');
      return;
    }

    const newTask = {
      id: generateTaskId(),
      title: formData.title.trim(),
      client: formData.client.trim(),
      description: formData.description.trim(),
      priority: formData.priority,
      due: formData.due,
      assignee: formData.assignee,
      tags: formData.tags.split(',').map((tag) => tag.trim()).filter(Boolean),
      radicado: formData.radicado.trim() || null,
      status: 'pendiente',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setTasks((prev) => [...prev, newTask]);
    closeCreateModal();
    resetForm();
    notifySuccess('Tarea creada exitosamente');
  }, [formData, generateTaskId, notifyError, notifySuccess, closeCreateModal, resetForm]);

  const handleEditTask = useCallback(() => {
    if (!formData.title.trim() || !formData.client.trim()) {
      notifyError('El título y cliente son obligatorios');
      return;
    }

    setTasks((prev) => prev.map((task) =>
      task.id === selectedTask?.id
        ? {
            ...task,
            title: formData.title.trim(),
            client: formData.client.trim(),
            description: formData.description.trim(),
            priority: formData.priority,
            due: formData.due,
            assignee: formData.assignee,
            tags: formData.tags.split(',').map((tag) => tag.trim()).filter(Boolean),
            radicado: formData.radicado.trim() || null,
            updatedAt: new Date().toISOString(),
          }
        : task
    ));
    setShowEditModal(false);
    setSelectedTask(null);
    resetForm();
    notifySuccess('Tarea actualizada exitosamente');
  }, [formData, notifyError, notifySuccess, selectedTask, resetForm]);

  const handleDeleteTask = useCallback(() => {
    setTasks((prev) => prev.filter((task) => task.id !== selectedTask?.id));
    setShowDeleteModal(false);
    setSelectedTask(null);
    notifySuccess('Tarea eliminada exitosamente');
  }, [selectedTask, notifySuccess]);

  const handleStatusChange = useCallback((taskId, newStatus) => {
    setTasks((prev) => prev.map((task) =>
      task.id === taskId
        ? { ...task, status: newStatus, updatedAt: new Date().toISOString() }
        : task
    ));
    notifySuccess('Estado de tarea actualizado');
  }, [notifySuccess]);

  const filteredTasks = useMemo(() => {
    let data = tasks.slice();
    if (viewMine) data = data.filter((task) => task.assignee === me);
    if (status !== 'all') data = data.filter((task) => task.status === status);
    const needle = q.trim().toLowerCase();
    if (needle) {
      data = data.filter((task) => [task.title, task.client, task.radicado, (task.tags || []).join(' ')].filter(Boolean).join(' ').toLowerCase().includes(needle));
    }
    return data;
  }, [tasks, viewMine, me, status, q]);

  const countLabel = `${filteredTasks.length} resultado${filteredTasks.length === 1 ? '' : 's'}`;

  return {
    user,
    isAdmin,
    admins,
    tasks,
    loading,
    error,
    q,
    setQ,
    me,
    setMe,
    status,
    setStatus,
    viewMine,
    setViewMine,
    showCreateModal,
    showEditModal,
    showDeleteModal,
    selectedTask,
    formData,
    setFormData,
    showSuccessNotice,
    showErrorNotice,
    noticeMessage,
    countLabel,
    filteredTasks,
    loadAdmins,
    openCreateModal,
    openEditModal,
    openDeleteModal,
    closeCreateModal,
    closeEditModal,
    closeDeleteModal,
    handleCreateTask,
    handleEditTask,
    handleDeleteTask,
    handleStatusChange,
    resetForm,
    setError,
    setNoticeMessage,
    notifyError,
    notifySuccess,
  };
}
