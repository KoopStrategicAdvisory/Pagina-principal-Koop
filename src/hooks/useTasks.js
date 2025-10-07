import { useState, useEffect, useCallback } from 'react';
import {
  listTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  addTaskComment,
  getDashboardStats
} from '../api/tasks';

export function useTasks(initialFilters = {}) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 20,
    pages: 0
  });
  const [filters, setFilters] = useState(initialFilters);
  const [stats, setStats] = useState(null);
  const [recentTasks, setRecentTasks] = useState([]);

  // Función para cargar tareas
  const fetchTasks = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await listTasks({
        ...filters,
        page: pagination.page,
        limit: pagination.limit
      });
      
      setTasks(data.tasks || []);
      setPagination(data.pagination || pagination);
      setStats(data.stats || null);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Error al cargar tareas');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  }, [filters, pagination.page, pagination.limit]);

  // Función para cargar estadísticas del dashboard
  const fetchDashboardStats = useCallback(async () => {
    try {
      const data = await getDashboardStats();
      setStats(data.stats);
      setRecentTasks(data.recentTasks || []);
    } catch (err) {
      console.error('Error fetching dashboard stats:', err);
    }
  }, []);

  // Cargar tareas cuando cambien los filtros o paginación
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  // Función para crear una nueva tarea
  const createNewTask = useCallback(async (taskData) => {
    setLoading(true);
    setError(null);
    
    try {
      const newTask = await createTask(taskData);
      await fetchTasks(); // Recargar la lista
      return newTask;
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Error al crear tarea');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [fetchTasks]);

  // Función para actualizar una tarea
  const updateExistingTask = useCallback(async (id, taskData) => {
    setLoading(true);
    setError(null);
    
    try {
      const updatedTask = await updateTask(id, taskData);
      await fetchTasks(); // Recargar la lista
      return updatedTask;
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Error al actualizar tarea');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [fetchTasks]);

  // Función para eliminar una tarea
  const deleteExistingTask = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    
    try {
      await deleteTask(id);
      await fetchTasks(); // Recargar la lista
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Error al eliminar tarea');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [fetchTasks]);

  // Función para agregar un comentario
  const addComment = useCallback(async (id, text) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await addTaskComment(id, text);
      await fetchTasks(); // Recargar la lista
      return result;
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Error al agregar comentario');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [fetchTasks]);

  // Función para cambiar el estado de una tarea
  const changeTaskStatus = useCallback(async (id, newStatus) => {
    return updateExistingTask(id, { status: newStatus });
  }, [updateExistingTask]);

  // Función para actualizar filtros
  const updateFilters = useCallback((newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    setPagination(prev => ({ ...prev, page: 1 })); // Reset a página 1
  }, []);

  // Función para cambiar de página
  const changePage = useCallback((newPage) => {
    setPagination(prev => ({ ...prev, page: newPage }));
  }, []);

  // Función para limpiar errores
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Función para refrescar datos
  const refresh = useCallback(() => {
    fetchTasks();
    fetchDashboardStats();
  }, [fetchTasks, fetchDashboardStats]);

  // Función para obtener una tarea específica
  const getTaskById = useCallback(async (id) => {
    try {
      const data = await getTask(id);
      return data.task;
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Error al obtener tarea');
      throw err;
    }
  }, []);

  // Función para aplicar filtros rápidos
  const applyQuickFilter = useCallback((filterType) => {
    const quickFilters = {
      'overdue': { overdue: 'true' },
      'upcoming': { upcoming: 'true' },
      'high-priority': { priority: 'alta' },
      'urgent': { priority: 'urgente' },
      'my-tasks': { mine: 'true' },
      'all-tasks': { mine: 'false' }
    };
    
    const filter = quickFilters[filterType];
    if (filter) {
      updateFilters(filter);
    }
  }, [updateFilters]);

  // Función para buscar tareas
  const searchTasks = useCallback((query) => {
    updateFilters({ search: query });
  }, [updateFilters]);

  // Función para filtrar por estado
  const filterByStatus = useCallback((status) => {
    updateFilters({ status: status === 'all' ? undefined : status });
  }, [updateFilters]);

  // Función para filtrar por prioridad
  const filterByPriority = useCallback((priority) => {
    updateFilters({ priority: priority === 'all' ? undefined : priority });
  }, [updateFilters]);

  // Función para filtrar por cliente
  const filterByClient = useCallback((clientId) => {
    updateFilters({ client: clientId || undefined });
  }, [updateFilters]);

  // Función para filtrar por usuario asignado
  const filterByAssignedTo = useCallback((userId) => {
    updateFilters({ assignedTo: userId || undefined });
  }, [updateFilters]);

  // Función para resetear filtros
  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
    setPagination(prev => ({ ...prev, page: 1 }));
  }, [initialFilters]);

  // Función para obtener estadísticas específicas
  const getTaskStats = useCallback(() => {
    if (!tasks.length) return null;
    
    const stats = {
      total: tasks.length,
      pending: tasks.filter(t => t.status === 'pendiente').length,
      inProgress: tasks.filter(t => t.status === 'en-curso').length,
      completed: tasks.filter(t => t.status === 'completada').length,
      overdue: tasks.filter(t => {
        if (!t.dueDate || t.status === 'completada') return false;
        return new Date(t.dueDate) < new Date();
      }).length
    };
    
    return stats;
  }, [tasks]);

  // Función para obtener tareas próximas a vencer
  const getUpcomingTasks = useCallback(() => {
    const now = new Date();
    const threeDaysFromNow = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
    
    return tasks.filter(task => {
      if (!task.dueDate || task.status === 'completada') return false;
      const dueDate = new Date(task.dueDate);
      return dueDate >= now && dueDate <= threeDaysFromNow;
    });
  }, [tasks]);

  // Función para obtener tareas vencidas
  const getOverdueTasks = useCallback(() => {
    const now = new Date();
    
    return tasks.filter(task => {
      if (!task.dueDate || task.status === 'completada') return false;
      return new Date(task.dueDate) < now;
    });
  }, [tasks]);

  return {
    // Estado
    tasks,
    loading,
    error,
    pagination,
    filters,
    stats,
    recentTasks,
    
    // Acciones
    createTask: createNewTask,
    updateTask: updateExistingTask,
    deleteTask: deleteExistingTask,
    addComment,
    changeTaskStatus,
    getTask: getTaskById,
    
    // Filtros y búsqueda
    updateFilters,
    changePage,
    applyQuickFilter,
    searchTasks,
    filterByStatus,
    filterByPriority,
    filterByClient,
    filterByAssignedTo,
    resetFilters,
    
    // Utilidades
    clearError,
    refresh,
    getTaskStats,
    getUpcomingTasks,
    getOverdueTasks,
    
    // Funciones de carga
    fetchTasks,
    fetchDashboardStats
  };
}


