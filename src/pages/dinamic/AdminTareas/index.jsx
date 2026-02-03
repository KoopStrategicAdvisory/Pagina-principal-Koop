import React, { useMemo, useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import '../../../styles/dashboard.css';
import '../../../styles/mi-expediente.css';
import { SuccessNotice, DangerNotice } from '../../../components/common/Notice';
import { listUsers } from '../../../api/adminUsers';

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

function useIsAdmin(user) {
  const roles = normalizeRoles(user?.roles);
  return roles.includes('admin');
}

// Función para obtener información del usuario asignado
const getUserInfo = (userId, admins) => {
  const admin = admins.find(admin => admin.id === userId);
  if (admin) {
    const name = admin.name || admin.email || 'Usuario';
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    const colors = ['#0ea5e9', '#22d3ee', '#a78bfa', '#f59e0b', '#10b981', '#ef4444'];
    const colorIndex = admins.indexOf(admin) % colors.length;
    return { name, initials, color: colors[colorIndex] };
  }
  return { name: 'Usuario', initials: 'U', color: '#6b7280' };
};

// Funciones para manejar tareas en localStorage
const saveTasks = (tasks) => {
  localStorage.setItem('koop_tasks', JSON.stringify(tasks));
};

const loadTasks = (admins = []) => {
  const saved = localStorage.getItem('koop_tasks');
  if (saved) {
    return JSON.parse(saved);
  }
  
  // Si no hay administradores cargados, retornar array vacío
  if (admins.length === 0) {
    return [];
  }
  
  // Tareas de ejemplo si no hay datos guardados
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
      updatedAt: new Date().toISOString()
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
      updatedAt: new Date().toISOString()
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
      updatedAt: new Date().toISOString()
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
      updatedAt: new Date().toISOString()
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
      updatedAt: new Date().toISOString()
    }
  ];
};

function fmtDate(iso) {
  try { return new Date(iso + 'T00:00:00').toLocaleDateString('es-CO', { year:'numeric', month:'short', day:'2-digit' }); } catch { return iso; }
}

function isOverdue(iso) {
  try { return new Date(iso) < new Date(new Date().toDateString()); } catch { return false; }
}

export default function AdminTareas() {
  const { user } = useAuth();
  const isAdmin = useIsAdmin(user);

  // Estados principales
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [admins, setAdmins] = useState([]);
  
  // Estados de filtros
  const [q, setQ] = useState('');
  const [me, setMe] = useState('derly');
  const [status, setStatus] = useState('all');
  const [viewMine, setViewMine] = useState(true);
  
  // Estados de modales
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  
  // Estados de formulario
  const [formData, setFormData] = useState({
    title: '',
    client: '',
    description: '',
    priority: 'media',
    due: '',
    assignee: '',
    tags: '',
    radicado: ''
  });
  
  // Estados de notificaciones
  const [showSuccessNotice, setShowSuccessNotice] = useState(false);
  const [showErrorNotice, setShowErrorNotice] = useState(false);
  const [noticeMessage, setNoticeMessage] = useState('');

  // Cargar administradores al montar el componente
  useEffect(() => {
    loadAdmins();
  }, []);

  // Auto-hide para notificaciones
  useEffect(() => {
    if (showSuccessNotice) {
      const timer = setTimeout(() => {
        setShowSuccessNotice(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessNotice]);

  useEffect(() => {
    if (showErrorNotice) {
      const timer = setTimeout(() => {
        setShowErrorNotice(false);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [showErrorNotice]);

  // Resetear formulario cuando se abra el modal de crear
  useEffect(() => {
    if (showCreateModal) {
      resetForm();
    }
  }, [showCreateModal, admins]);

  // Función para cargar administradores
  const loadAdmins = async () => {
    try {
      setLoading(true);
      console.log('Cargando usuarios...');
      const response = await listUsers();
      console.log('Respuesta de listUsers:', response);
      
      if (response && response.items) {
        console.log('Usuarios encontrados:', response.items);
        // Filtrar solo los administradores
        const adminUsers = response.items.filter(user => {
          console.log('Usuario:', user.name || user.email, 'Roles:', user.roles);
          return user.roles && user.roles.includes('admin');
        });
        console.log('Administradores filtrados:', adminUsers);
        setAdmins(adminUsers);
        
        // Si hay administradores, establecer el primero como usuario por defecto
        if (adminUsers.length > 0) {
          setMe(adminUsers[0].id);
          // Cargar tareas con los administradores
          setTasks(loadTasks(adminUsers));
        } else {
          console.log('No se encontraron administradores');
          setNoticeMessage('No se encontraron administradores en el sistema');
          setShowErrorNotice(true);
        }
      } else {
        console.log('No se recibieron usuarios en la respuesta');
        setNoticeMessage('No se pudieron cargar los usuarios');
        setShowErrorNotice(true);
      }
    } catch (error) {
      console.error('Error cargando administradores:', error);
      setNoticeMessage('Error al cargar la lista de administradores: ' + error.message);
      setShowErrorNotice(true);
    } finally {
      setLoading(false);
    }
  };

  // Guardar tareas cuando cambien
  useEffect(() => {
    if (tasks.length > 0) {
      saveTasks(tasks);
    }
  }, [tasks]);

  // Funciones CRUD
  const generateTaskId = () => {
    const maxId = Math.max(...tasks.map(t => parseInt(t.id.split('-')[1]) || 0));
    return `T-${String(maxId + 1).padStart(3, '0')}`;
  };

  const handleCreateTask = () => {
    console.log('Intentando crear tarea con datos:', formData);
    
    if (!formData.title.trim() || !formData.client.trim()) {
      console.log('Validación fallida: título o cliente vacío');
      setNoticeMessage('El título y cliente son obligatorios');
      setShowErrorNotice(true);
      return;
    }

    if (!formData.assignee) {
      console.log('Validación fallida: no hay asignado');
      setNoticeMessage('Debe seleccionar un administrador para asignar la tarea');
      setShowErrorNotice(true);
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
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
      radicado: formData.radicado.trim() || null,
      status: 'pendiente',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    console.log('Nueva tarea creada:', newTask);
    setTasks(prev => {
      const updated = [...prev, newTask];
      console.log('Tareas actualizadas:', updated);
      return updated;
    });
    
    setShowCreateModal(false);
    resetForm();
    setNoticeMessage('Tarea creada exitosamente');
    setShowSuccessNotice(true);
    console.log('Notificación de éxito configurada');
  };

  const handleEditTask = () => {
    if (!formData.title.trim() || !formData.client.trim()) {
      setNoticeMessage('El título y cliente son obligatorios');
      setShowErrorNotice(true);
      return;
    }

    setTasks(prev => prev.map(task => 
      task.id === selectedTask.id 
        ? {
            ...task,
            title: formData.title.trim(),
            client: formData.client.trim(),
            description: formData.description.trim(),
            priority: formData.priority,
            due: formData.due,
            assignee: formData.assignee,
            tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
            radicado: formData.radicado.trim() || null,
            updatedAt: new Date().toISOString()
          }
        : task
    ));

    setShowEditModal(false);
    setSelectedTask(null);
    resetForm();
    setNoticeMessage('Tarea actualizada exitosamente');
    setShowSuccessNotice(true);
  };

  const handleDeleteTask = () => {
    setTasks(prev => prev.filter(task => task.id !== selectedTask.id));
    setShowDeleteModal(false);
    setSelectedTask(null);
    setNoticeMessage('Tarea eliminada exitosamente');
    setShowSuccessNotice(true);
  };

  const handleStatusChange = (taskId, newStatus) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId 
        ? { ...task, status: newStatus, updatedAt: new Date().toISOString() }
        : task
    ));
    setNoticeMessage('Estado de tarea actualizado');
    setShowSuccessNotice(true);
  };

  const openEditModal = (task) => {
    setSelectedTask(task);
    setFormData({
      title: task.title,
      client: task.client,
      description: task.description || '',
      priority: task.priority,
      due: task.due,
      assignee: task.assignee || (admins.length > 0 ? admins[0].id : ''),
      tags: task.tags.join(', '),
      radicado: task.radicado || ''
    });
    setShowEditModal(true);
  };

  const openDeleteModal = (task) => {
    setSelectedTask(task);
    setShowDeleteModal(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      client: '',
      description: '',
      priority: 'media',
      due: '',
      assignee: admins.length > 0 ? admins[0].id : '',
      tags: '',
      radicado: ''
    });
  };

  const filtered = useMemo(() => {
    let data = tasks.slice();
    if (viewMine) data = data.filter((t) => t.assignee === me);
    if (status !== 'all') data = data.filter((t) => t.status === status);
    const needle = q.trim().toLowerCase();
    if (needle) {
      data = data.filter((t) => [t.title, t.client, t.radicado, (t.tags || []).join(' ')].filter(Boolean).join(' ').toLowerCase().includes(needle));
    }
    return data;
  }, [tasks, viewMine, me, status, q]);

  const countLabel = `${filtered.length} resultado${filtered.length === 1 ? '' : 's'}`;

  if (!isAdmin) {
    return (
      <div className="dash-page" style={{ padding: 40 }}>
        <div className="dash-card" style={{ maxWidth: 560 }}>
          <h2 className="dash-title">Acceso restringido</h2>
          <p style={{ marginTop: 12 }}>Esta sección está disponible solo para administradores.</p>
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
        minHeight: '100vh',
        padding: '20px'
      }}
    >
      <div className="dash-card" style={{ width: '100%', maxWidth: 1400, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          marginBottom: '24px',
          paddingBottom: '16px',
          borderBottom: '1px solid #394b61'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #4fd1c5, #fc771c)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(79, 209, 197, 0.3)'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            <div>
              <h1 style={{ 
                margin: 0, 
                fontSize: '24px', 
                fontWeight: '700', 
                color: '#e2e8f0',
                letterSpacing: '0.5px'
              }}>
                Tablero de Tareas
              </h1>
              <p style={{ 
                margin: '4px 0 0 0', 
                fontSize: '14px', 
                color: '#9fb3cc' 
              }}>
                Gestión y seguimiento de tareas del equipo
              </p>
            </div>
              </div>
          
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ 
              fontSize: '12px', 
              color: '#9fb3cc',
              padding: '4px 8px',
              background: '#1e2a3a',
              borderRadius: '6px',
              border: '1px solid #394b61'
            }}>
              {loading ? 'Cargando...' : `${admins.length} admin${admins.length !== 1 ? 's' : ''}`}
              </div>
            <button 
              className="btn btn-primary"
              onClick={() => setShowCreateModal(true)}
              style={{ fontSize: '14px', padding: '10px 16px' }}
              disabled={loading || admins.length === 0}
            >
              ➕ Nueva Tarea
            </button>
          </div>
        </div>

        {/* Filtros */}
        <div style={{ 
          display: 'flex', 
          gap: '16px', 
          marginBottom: '24px',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <input
              type="search"
              placeholder="Buscar por asunto, cliente o radicado..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: '#1e2a3a',
                border: '1px solid #394b61',
                borderRadius: '8px',
                color: '#e2e8f0',
                fontSize: '14px'
              }}
            />
              </div>
          
            <select
              value={me}
              onChange={(e) => setMe(e.target.value)}
              style={{
                padding: '12px 16px',
                background: '#1e2a3a',
                border: '1px solid #394b61',
                borderRadius: '8px',
                color: '#e2e8f0',
                fontSize: '14px',
                minWidth: '200px'
              }}
            >
              {admins.map(admin => (
                <option key={admin.id} value={admin.id}>
                  {admin.name || admin.email} (Admin)
                </option>
              ))}
                </select>
          
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={{
              padding: '12px 16px',
              background: '#1e2a3a',
              border: '1px solid #394b61',
              borderRadius: '8px',
              color: '#e2e8f0',
              fontSize: '14px',
              minWidth: '150px'
            }}
          >
                  <option value="all">Todos los estados</option>
                  <option value="pendiente">Pendiente</option>
                  <option value="en-curso">En curso</option>
                  <option value="hecho">Hecho</option>
                </select>
          </div>

        {/* Vista rápida */}
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          marginBottom: '24px',
          flexWrap: 'wrap'
        }}>
          <button 
            className={`btn ${viewMine ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setViewMine(true)}
            style={{ fontSize: '12px', padding: '8px 16px' }}
          >
            Mis tareas
          </button>
          <button 
            className={`btn ${!viewMine ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setViewMine(false)}
            style={{ fontSize: '12px', padding: '8px 16px' }}
          >
            Todas las tareas
          </button>
              </div>

        {/* Contenido principal */}
        <div style={{ 
          background: '#1e2a3a',
          borderRadius: '12px',
          border: '1px solid #394b61',
          overflow: 'hidden'
        }}>
          <div style={{ 
            padding: '20px',
            borderBottom: '1px solid #394b61',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <h3 style={{ 
              margin: 0, 
              fontSize: '18px', 
              fontWeight: '600', 
              color: '#e2e8f0' 
            }}>
              {viewMine ? 'Mis tareas' : 'Todas las tareas'}
            </h3>
            <span style={{ 
              fontSize: '14px', 
              color: '#9fb3cc',
              background: '#2a3a51',
              padding: '4px 12px',
              borderRadius: '20px'
            }}>
              {countLabel}
            </span>
              </div>

          <div style={{ padding: '20px' }}>
              {filtered.length === 0 ? (
              <div style={{ 
                textAlign: 'center', 
                padding: '60px 20px',
                color: '#9fb3cc'
              }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  margin: '0 auto 20px',
                  background: 'linear-gradient(135deg, #4fd1c5, #fc771c)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  </div>
                <h4 style={{ 
                  margin: '0 0 8px 0', 
                  fontSize: '18px', 
                  fontWeight: '600',
                  color: '#e2e8f0'
                }}>
                  No hay tareas asignadas
                </h4>
                <p style={{ 
                  margin: 0, 
                  fontSize: '14px',
                  color: '#9fb3cc'
                }}>
                  Cuando te asignen una tarea aparecerá aquí
                </p>
                </div>
              ) : (
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: '20px'
              }}>
                  {filtered.map((t) => {
                    const u = getUserInfo(t.assignee, admins);
                    const statusTxt = t.status === 'en-curso' ? 'En curso' : t.status === 'hecho' ? 'Hecho' : 'Pendiente';
                  
                    return (
                    <div 
                      key={t.id}
                      style={{
                        background: 'linear-gradient(135deg, #2a3a51, #1e2a3a)',
                        border: '1px solid #394b61',
                        borderRadius: '12px',
                        padding: '20px',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = '#4fd1c5';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 8px 25px rgba(79, 209, 197, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = '#394b61';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ 
                          margin: '0 0 8px 0', 
                          fontSize: '16px', 
                          fontWeight: '600',
                          color: '#e2e8f0',
                          lineHeight: '1.4'
                        }}>
                          {t.title}
                        </h4>
                        <p style={{ 
                          margin: 0, 
                          fontSize: '14px', 
                          color: '#9fb3cc' 
                        }}>
                          Cliente: <strong style={{ color: '#4fd1c5' }}>{t.client}</strong>
                        </p>
                        </div>

                      <div style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: '8px',
                        marginBottom: '16px'
                      }}>
                        <span style={{
                          fontSize: '11px',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          background: t.priority === 'alta' ? 'rgba(239, 68, 68, 0.15)' : 
                                     t.priority === 'media' ? 'rgba(245, 158, 11, 0.15)' : 
                                     'rgba(34, 197, 94, 0.15)',
                          color: t.priority === 'alta' ? '#fecaca' : 
                                 t.priority === 'media' ? '#fde68a' : 
                                 '#bbf7d0',
                          border: `1px solid ${t.priority === 'alta' ? 'rgba(239, 68, 68, 0.3)' : 
                                           t.priority === 'media' ? 'rgba(245, 158, 11, 0.3)' : 
                                           'rgba(34, 197, 94, 0.3)'}`
                        }}>
                          {t.priority.toUpperCase()}
                        </span>
                        
                        <span style={{
                          fontSize: '11px',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          background: t.status === 'hecho' ? 'rgba(34, 197, 94, 0.15)' :
                                     t.status === 'en-curso' ? 'rgba(59, 130, 246, 0.15)' :
                                     'rgba(156, 163, 175, 0.15)',
                          color: t.status === 'hecho' ? '#bbf7d0' :
                                 t.status === 'en-curso' ? '#93c5fd' :
                                 '#d1d5db',
                          border: `1px solid ${t.status === 'hecho' ? 'rgba(34, 197, 94, 0.3)' :
                                           t.status === 'en-curso' ? 'rgba(59, 130, 246, 0.3)' :
                                           'rgba(156, 163, 175, 0.3)'}`
                        }}>
                          {statusTxt}
                        </span>

                        <span style={{
                          fontSize: '11px',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          background: isOverdue(t.due) ? 'rgba(239, 68, 68, 0.15)' : 'rgba(79, 209, 197, 0.15)',
                          color: isOverdue(t.due) ? '#fecaca' : '#67e8f9',
                          border: `1px solid ${isOverdue(t.due) ? 'rgba(239, 68, 68, 0.3)' : 'rgba(79, 209, 197, 0.3)'}`
                        }}>
                          {isOverdue(t.due) ? 'VENCIDA' : 'VENCE'}: {fmtDate(t.due)}
                        </span>

                        {t.radicado && (
                          <span style={{
                            fontSize: '11px',
                            padding: '4px 8px',
                            borderRadius: '12px',
                            background: 'rgba(79, 209, 197, 0.15)',
                            color: '#67e8f9',
                            border: '1px solid rgba(79, 209, 197, 0.3)'
                          }}>
                            {t.radicado}
                          </span>
                        )}
                        </div>

                      {(t.tags || []).length > 0 && (
                        <div style={{ 
                          display: 'flex', 
                          flexWrap: 'wrap', 
                          gap: '6px',
                          marginBottom: '16px'
                        }}>
                          {(t.tags || []).map((tag) => (
                            <span 
                              key={tag}
                              style={{
                                fontSize: '10px',
                                padding: '3px 6px',
                                borderRadius: '8px',
                                background: 'rgba(156, 163, 175, 0.1)',
                                color: '#9fb3cc',
                                border: '1px solid rgba(156, 163, 175, 0.2)'
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        paddingTop: '12px',
                        borderTop: '1px solid #394b61'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            background: u.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '12px',
                            fontWeight: '700',
                            color: 'white'
                          }}>
                            {u.initials}
                          </div>
                          <div>
                            <p style={{ 
                              margin: 0, 
                              fontSize: '12px', 
                              color: '#9fb3cc' 
                            }}>
                              Asignada a
                            </p>
                            <p style={{ 
                              margin: 0, 
                              fontSize: '14px', 
                              fontWeight: '600',
                              color: '#e2e8f0' 
                            }}>
                              {u.name}
                            </p>
                          </div>
                        </div>
                        
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <select
                            value={t.status}
                            onChange={(e) => handleStatusChange(t.id, e.target.value)}
                            style={{
                              fontSize: '11px',
                              padding: '4px 8px',
                              background: '#1e2a3a',
                              border: '1px solid #394b61',
                              borderRadius: '6px',
                              color: '#e2e8f0'
                            }}
                          >
                            <option value="pendiente">Pendiente</option>
                            <option value="en-curso">En curso</option>
                            <option value="hecho">Hecho</option>
                          </select>
                          
                          <button
                            onClick={() => openEditModal(t)}
                            style={{
                              padding: '4px 8px',
                              background: '#4fd1c5',
                              border: 'none',
                              borderRadius: '6px',
                              color: 'white',
                              fontSize: '11px',
                              cursor: 'pointer'
                            }}
                            title="Editar tarea"
                          >
                            ✏️
                          </button>
                          
                          <button
                            onClick={() => openDeleteModal(t)}
                            style={{
                              padding: '4px 8px',
                              background: '#ef4444',
                              border: 'none',
                              borderRadius: '6px',
                              color: 'white',
                              fontSize: '11px',
                              cursor: 'pointer'
                            }}
                            title="Eliminar tarea"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    </div>
                    );
                  })}
                </div>
              )}
              </div>
        </div>
      </div>

      {/* Notificaciones */}
      {showSuccessNotice && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: '#064e3b',
          color: '#a7f3d0',
          padding: '16px',
          borderRadius: '8px',
          border: '1px solid rgba(16,185,129,0.35)',
          boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
          zIndex: 10001,
          maxWidth: '400px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>✅ {noticeMessage}</span>
            <button
              onClick={() => setShowSuccessNotice(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#a7f3d0',
                fontSize: '18px',
                cursor: 'pointer',
                marginLeft: '10px'
              }}
            >
              ×
            </button>
              </div>
        </div>
      )}
      {showErrorNotice && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: '#7f1d1d',
          color: '#fecaca',
          padding: '16px',
          borderRadius: '8px',
          border: '1px solid rgba(248,113,113,0.35)',
          boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
          zIndex: 10001,
          maxWidth: '400px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>❌ {noticeMessage}</span>
            <button
              onClick={() => setShowErrorNotice(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fecaca',
                fontSize: '18px',
                cursor: 'pointer',
                marginLeft: '10px'
              }}
            >
              ×
            </button>
      </div>
        </div>
      )}

      {/* Modal para crear tarea */}
      {showCreateModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000
        }}>
          <div style={{
            background: '#1e2a3a',
            borderRadius: '12px',
            padding: '24px',
            maxWidth: '500px',
            width: '90%',
            border: '1px solid #394b61',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ 
              margin: '0 0 20px 0', 
              fontSize: '18px', 
              fontWeight: '600',
              color: '#e2e8f0'
            }}>
              ➕ Nueva Tarea
            </h3>
            
            {/* Debug info - temporal */}
            <div style={{ 
              fontSize: '10px', 
              color: '#9fb3cc', 
              marginBottom: '10px',
              padding: '8px',
              background: '#2a3a51',
              borderRadius: '4px'
            }}>
              Debug: Admins: {admins.length}, Assignee: {formData.assignee || 'ninguno'}
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#9fb3cc', fontSize: '14px' }}>
                  Título *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#2a3a51',
                    border: '1px solid #394b61',
                    borderRadius: '8px',
                    color: '#e2e8f0',
                    fontSize: '14px'
                  }}
                  placeholder="Título de la tarea"
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#9fb3cc', fontSize: '14px' }}>
                  Cliente *
                </label>
                <input
                  type="text"
                  value={formData.client}
                  onChange={(e) => setFormData(prev => ({ ...prev, client: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#2a3a51',
                    border: '1px solid #394b61',
                    borderRadius: '8px',
                    color: '#e2e8f0',
                    fontSize: '14px'
                  }}
                  placeholder="Nombre del cliente"
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#9fb3cc', fontSize: '14px' }}>
                  Descripción
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#2a3a51',
                    border: '1px solid #394b61',
                    borderRadius: '8px',
                    color: '#e2e8f0',
                    fontSize: '14px',
                    minHeight: '80px',
                    resize: 'vertical'
                  }}
                  placeholder="Descripción detallada de la tarea"
                />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#9fb3cc', fontSize: '14px' }}>
                    Prioridad
                  </label>
                  <select
                    value={formData.priority}
                    onChange={(e) => setFormData(prev => ({ ...prev, priority: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: '#2a3a51',
                      border: '1px solid #394b61',
                      borderRadius: '8px',
                      color: '#e2e8f0',
                      fontSize: '14px'
                    }}
                  >
                    <option value="baja">Baja</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                  </select>
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#9fb3cc', fontSize: '14px' }}>
                    Fecha límite
                  </label>
                  <input
                    type="date"
                    value={formData.due}
                    onChange={(e) => setFormData(prev => ({ ...prev, due: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: '#2a3a51',
                      border: '1px solid #394b61',
                      borderRadius: '8px',
                      color: '#e2e8f0',
                      fontSize: '14px'
                    }}
                  />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#9fb3cc', fontSize: '14px' }}>
                  Asignar a
                </label>
                <select
                  value={formData.assignee}
                  onChange={(e) => setFormData(prev => ({ ...prev, assignee: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#2a3a51',
                    border: '1px solid #394b61',
                    borderRadius: '8px',
                    color: '#e2e8f0',
                    fontSize: '14px'
                  }}
                >
                  {admins.map(admin => (
                    <option key={admin.id} value={admin.id}>
                      {admin.name || admin.email} (Admin)
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#9fb3cc', fontSize: '14px' }}>
                  Tags (separados por comas)
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#2a3a51',
                    border: '1px solid #394b61',
                    borderRadius: '8px',
                    color: '#e2e8f0',
                    fontSize: '14px'
                  }}
                  placeholder="Laboral, Audiencia, Civil"
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#9fb3cc', fontSize: '14px' }}>
                  Radicado
                </label>
                <input
                  type="text"
                  value={formData.radicado}
                  onChange={(e) => setFormData(prev => ({ ...prev, radicado: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#2a3a51',
                    border: '1px solid #394b61',
                    borderRadius: '8px',
                    color: '#e2e8f0',
                    fontSize: '14px'
                  }}
                  placeholder="Número de radicado (opcional)"
                />
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              gap: '12px', 
              justifyContent: 'flex-end',
              marginTop: '24px'
            }}>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setShowCreateModal(false);
                  resetForm();
                }}
                style={{ padding: '10px 20px' }}
              >
                Cancelar
              </button>
              <button
                className="btn btn-primary"
                onClick={handleCreateTask}
                style={{ padding: '10px 20px' }}
              >
                Crear Tarea
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal para editar tarea */}
      {showEditModal && selectedTask && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000
        }}>
          <div style={{
            background: '#1e2a3a',
            borderRadius: '12px',
            padding: '24px',
            maxWidth: '500px',
            width: '90%',
            border: '1px solid #394b61',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ 
              margin: '0 0 20px 0', 
              fontSize: '18px', 
              fontWeight: '600',
              color: '#e2e8f0'
            }}>
              ✏️ Editar Tarea
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#9fb3cc', fontSize: '14px' }}>
                  Título *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#2a3a51',
                    border: '1px solid #394b61',
                    borderRadius: '8px',
                    color: '#e2e8f0',
                    fontSize: '14px'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#9fb3cc', fontSize: '14px' }}>
                  Cliente *
                </label>
                <input
                  type="text"
                  value={formData.client}
                  onChange={(e) => setFormData(prev => ({ ...prev, client: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#2a3a51',
                    border: '1px solid #394b61',
                    borderRadius: '8px',
                    color: '#e2e8f0',
                    fontSize: '14px'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#9fb3cc', fontSize: '14px' }}>
                  Descripción
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#2a3a51',
                    border: '1px solid #394b61',
                    borderRadius: '8px',
                    color: '#e2e8f0',
                    fontSize: '14px',
                    minHeight: '80px',
                    resize: 'vertical'
                  }}
                />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#9fb3cc', fontSize: '14px' }}>
                    Prioridad
                  </label>
                  <select
                    value={formData.priority}
                    onChange={(e) => setFormData(prev => ({ ...prev, priority: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: '#2a3a51',
                      border: '1px solid #394b61',
                      borderRadius: '8px',
                      color: '#e2e8f0',
                      fontSize: '14px'
                    }}
                  >
                    <option value="baja">Baja</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                  </select>
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#9fb3cc', fontSize: '14px' }}>
                    Fecha límite
                  </label>
                  <input
                    type="date"
                    value={formData.due}
                    onChange={(e) => setFormData(prev => ({ ...prev, due: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: '#2a3a51',
                      border: '1px solid #394b61',
                      borderRadius: '8px',
                      color: '#e2e8f0',
                      fontSize: '14px'
                    }}
                  />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#9fb3cc', fontSize: '14px' }}>
                  Asignar a
                </label>
                <select
                  value={formData.assignee}
                  onChange={(e) => setFormData(prev => ({ ...prev, assignee: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#2a3a51',
                    border: '1px solid #394b61',
                    borderRadius: '8px',
                    color: '#e2e8f0',
                    fontSize: '14px'
                  }}
                >
                  {admins.map(admin => (
                    <option key={admin.id} value={admin.id}>
                      {admin.name || admin.email} (Admin)
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#9fb3cc', fontSize: '14px' }}>
                  Tags (separados por comas)
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#2a3a51',
                    border: '1px solid #394b61',
                    borderRadius: '8px',
                    color: '#e2e8f0',
                    fontSize: '14px'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#9fb3cc', fontSize: '14px' }}>
                  Radicado
                </label>
                <input
                  type="text"
                  value={formData.radicado}
                  onChange={(e) => setFormData(prev => ({ ...prev, radicado: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#2a3a51',
                    border: '1px solid #394b61',
                    borderRadius: '8px',
                    color: '#e2e8f0',
                    fontSize: '14px'
                  }}
                />
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              gap: '12px', 
              justifyContent: 'flex-end',
              marginTop: '24px'
            }}>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setShowEditModal(false);
                  setSelectedTask(null);
                  resetForm();
                }}
                style={{ padding: '10px 20px' }}
              >
                Cancelar
              </button>
              <button
                className="btn btn-primary"
                onClick={handleEditTask}
                style={{ padding: '10px 20px' }}
              >
                Actualizar Tarea
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal para eliminar tarea */}
      {showDeleteModal && selectedTask && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000
        }}>
          <div style={{
            background: '#1e2a3a',
            borderRadius: '12px',
            padding: '24px',
            maxWidth: '400px',
            width: '90%',
            border: '1px solid #394b61',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ 
              margin: '0 0 16px 0', 
              fontSize: '18px', 
              fontWeight: '600',
              color: '#e2e8f0'
            }}>
              🗑️ Eliminar Tarea
            </h3>
            
            <p style={{ 
              margin: '0 0 20px 0', 
              color: '#9fb3cc', 
              fontSize: '14px',
              lineHeight: '1.5'
            }}>
              ¿Estás seguro de que quieres eliminar la tarea <strong style={{ color: '#fc771c' }}>"{selectedTask.title}"</strong>?
            </p>
            
            <p style={{ 
              margin: '0 0 20px 0', 
              color: '#ef4444', 
              fontSize: '12px',
              fontWeight: '500'
            }}>
              ⚠️ Esta acción no se puede deshacer
            </p>
            
            <div style={{ 
              display: 'flex', 
              gap: '12px', 
              justifyContent: 'flex-end'
            }}>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setShowDeleteModal(false);
                  setSelectedTask(null);
                }}
                style={{ padding: '10px 20px' }}
              >
                Cancelar
              </button>
              <button
                className="btn btn-danger"
                onClick={handleDeleteTask}
                style={{ padding: '10px 20px' }}
              >
                Eliminar Tarea
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

