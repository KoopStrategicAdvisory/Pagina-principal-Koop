import api from './axios';

// Funciones de la API para tareas
export async function listTasks(params = {}) {
  try {
    const response = await api.get('/tasks', { params });
    return response.data;
  } catch (error) {
    console.error('Error listing tasks:', error);
    throw error;
  }
}

export async function getTask(id) {
  try {
    const response = await api.get(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error getting task:', error);
    throw error;
  }
}

export async function createTask(taskData) {
  try {
    const response = await api.post('/tasks', taskData);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
}

export async function updateTask(id, taskData) {
  try {
    const response = await api.put(`/tasks/${id}`, taskData);
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
}

export async function deleteTask(id) {
  try {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
}

export async function addTaskComment(id, text) {
  try {
    const response = await api.post(`/tasks/${id}/comments`, { text });
    return response.data;
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
}

export async function getDashboardStats() {
  try {
    const response = await api.get('/tasks/stats/dashboard');
    return response.data;
  } catch (error) {
    console.error('Error getting dashboard stats:', error);
    throw error;
  }
}

// Funciones de utilidad para formateo
export function formatTaskStatus(status) {
  const statusMap = {
    'pendiente': 'Pendiente',
    'en-curso': 'En Curso',
    'completada': 'Completada',
    'cancelada': 'Cancelada'
  };
  return statusMap[status] || status;
}

export function formatTaskPriority(priority) {
  const priorityMap = {
    'baja': 'Baja',
    'media': 'Media',
    'alta': 'Alta',
    'urgente': 'Urgente'
  };
  return priorityMap[priority] || priority;
}

export function getTaskPriorityColor(priority) {
  const colorMap = {
    'baja': '#10b981',      // Verde
    'media': '#3b82f6',     // Azul
    'alta': '#f59e0b',      // Amarillo
    'urgente': '#ef4444'    // Rojo
  };
  return colorMap[priority] || '#6b7280';
}

export function getTaskStatusColor(status) {
  const colorMap = {
    'pendiente': '#6b7280',   // Gris
    'en-curso': '#3b82f6',    // Azul
    'completada': '#10b981',  // Verde
    'cancelada': '#ef4444'    // Rojo
  };
  return colorMap[status] || '#6b7280';
}

export function isTaskOverdue(dueDate, status) {
  if (!dueDate || status === 'completada') return false;
  return new Date(dueDate) < new Date();
}

export function formatDueDate(dueDate) {
  if (!dueDate) return 'Sin fecha';
  
  const date = new Date(dueDate);
  const now = new Date();
  const diffTime = date - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) {
    return `Vencida hace ${Math.abs(diffDays)} día${Math.abs(diffDays) !== 1 ? 's' : ''}`;
  } else if (diffDays === 0) {
    return 'Vence hoy';
  } else if (diffDays === 1) {
    return 'Vence mañana';
  } else if (diffDays <= 7) {
    return `Vence en ${diffDays} días`;
  } else {
    return date.toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
}

export function getTaskCategoryColor(category) {
  const colorMap = {
    'laboral': '#8b5cf6',      // Púrpura
    'civil': '#06b6d4',        // Cian
    'penal': '#ef4444',        // Rojo
    'administrativo': '#f59e0b', // Amarillo
    'tributario': '#10b981',   // Verde
    'comercial': '#3b82f6',    // Azul
    'familia': '#ec4899',      // Rosa
    'otro': '#6b7280'          // Gris
  };
  return colorMap[category] || '#6b7280';
}

export function formatTaskCategory(category) {
  const categoryMap = {
    'laboral': 'Laboral',
    'civil': 'Civil',
    'penal': 'Penal',
    'administrativo': 'Administrativo',
    'tributario': 'Tributario',
    'comercial': 'Comercial',
    'familia': 'Familia',
    'otro': 'Otro'
  };
  return categoryMap[category] || 'Otro';
}

// Función para obtener el color del avatar basado en el nombre
export function getAvatarColor(name) {
  if (!name) return '#6b7280';
  
  const colors = [
    '#ef4444', '#f97316', '#f59e0b', '#eab308',
    '#84cc16', '#22c55e', '#10b981', '#14b8a6',
    '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1',
    '#8b5cf6', '#a855f7', '#d946ef', '#ec4899'
  ];
  
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  return colors[Math.abs(hash) % colors.length];
}

// Función para obtener iniciales de un nombre
export function getInitials(name) {
  if (!name) return '?';
  
  const words = name.trim().split(' ');
  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  }
  
  return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
}

// Función para calcular el progreso de una tarea
export function calculateTaskProgress(task) {
  if (task.status === 'completada') return 100;
  if (task.status === 'cancelada') return 0;
  if (task.status === 'en-curso') return 50;
  return 0;
}

// Función para obtener el tiempo transcurrido desde la creación
export function getTimeSinceCreation(createdAt) {
  if (!createdAt) return '';
  
  const now = new Date();
  const created = new Date(createdAt);
  const diffTime = now - created;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Hoy';
  if (diffDays === 1) return 'Ayer';
  if (diffDays < 7) return `Hace ${diffDays} días`;
  if (diffDays < 30) return `Hace ${Math.floor(diffDays / 7)} semana${Math.floor(diffDays / 7) !== 1 ? 's' : ''}`;
  if (diffDays < 365) return `Hace ${Math.floor(diffDays / 30)} mes${Math.floor(diffDays / 30) !== 1 ? 'es' : ''}`;
  
  return `Hace ${Math.floor(diffDays / 365)} año${Math.floor(diffDays / 365) !== 1 ? 's' : ''}`;
}


