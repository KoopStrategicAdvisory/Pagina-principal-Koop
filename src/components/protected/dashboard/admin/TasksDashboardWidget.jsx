import React, { useState, useEffect } from 'react';
import { useTasks } from '../../../../hooks/useTasks';
import { 
  formatDueDate, 
  isTaskOverdue, 
  getTaskPriorityColor, 
  formatTaskPriority,
  formatTaskStatus,
  getTaskStatusColor,
  getAvatarColor,
  getInitials
} from '../../../../api/tasks';
import { Link } from 'react-router-dom';

export default function TasksDashboardWidget() {
  const { 
    recentTasks, 
    loading, 
    error, 
    stats, 
    refresh,
    changeTaskStatus 
  } = useTasks();

  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    refresh(); // Cargar datos al montar el componente
  }, [refresh]);

  const handleStatusChange = async (taskId, currentStatus) => {
    try {
      const newStatus = currentStatus === 'completada' ? 'pendiente' : 'completada';
      await changeTaskStatus(taskId, newStatus);
    } catch (error) {
      console.error('Error changing task status:', error);
    }
  };

  const displayTasks = showAll ? recentTasks : recentTasks.slice(0, 3);

  return (
    <div className="dash-item" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '12px',
      minHeight: '300px'
    }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        paddingBottom: '8px',
        borderBottom: '1px solid rgba(148, 163, 184, 0.2)'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px' 
        }}>
          <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '6px',
            background: 'linear-gradient(135deg, #22d3ee 0%, #0ea5e9 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0c1530',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            📋
          </div>
          <div style={{ fontWeight: 600, color: '#e2e8f0' }}>
            Mis Tareas Pendientes
          </div>
        </div>
        <Link 
          to="/admin/tareas" 
          className="btn btn-secondary btn-sm"
          style={{
            fontSize: '12px',
            padding: '4px 8px',
            textDecoration: 'none'
          }}
        >
          Ver todas
        </Link>
      </div>

      {/* Estadísticas rápidas */}
      {stats && (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', 
          gap: '8px',
          marginBottom: '8px'
        }}>
          <div style={{
            background: 'rgba(34, 211, 238, 0.1)',
            border: '1px solid rgba(34, 211, 238, 0.3)',
            borderRadius: '8px',
            padding: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#22d3ee' }}>
              {stats.myTasks || 0}
            </div>
            <div style={{ fontSize: '10px', color: '#9fb3cc' }}>Total</div>
          </div>
          <div style={{
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '8px',
            padding: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#3b82f6' }}>
              {stats.pending || 0}
            </div>
            <div style={{ fontSize: '10px', color: '#9fb3cc' }}>Pendientes</div>
          </div>
          <div style={{
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '8px',
            padding: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#ef4444' }}>
              {stats.overdue || 0}
            </div>
            <div style={{ fontSize: '10px', color: '#9fb3cc' }}>Vencidas</div>
          </div>
        </div>
      )}

      {/* Estado de carga */}
      {loading && (
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '20px',
          color: '#9fb3cc'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px' 
          }}>
            <div style={{
              width: '16px',
              height: '16px',
              border: '2px solid #22d3ee',
              borderTop: '2px solid transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
            Cargando tareas...
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div style={{ 
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '8px',
          padding: '12px',
          color: '#fecaca',
          fontSize: '12px'
        }}>
          ⚠️ Error: {error}
        </div>
      )}

      {/* Lista de tareas */}
      {!loading && !error && (
        <div style={{
          background: '#0f172a',
          border: '1px solid rgba(148, 163, 184, 0.25)',
          borderRadius: '12px',
          padding: '12px',
          minHeight: '200px',
          maxHeight: '400px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          {displayTasks.length === 0 ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 20px',
              textAlign: 'center',
              color: '#9fb3cc'
            }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>📋</div>
              <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                No hay tareas pendientes
              </div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>
                Las tareas asignadas aparecerán aquí
              </div>
            </div>
          ) : (
            displayTasks.map((task) => {
              const isOverdue = isTaskOverdue(task.dueDate, task.status);
              const priorityColor = getTaskPriorityColor(task.priority);
              const statusColor = getTaskStatusColor(task.status);
              const avatarColor = getAvatarColor(task.assignedTo?.name);
              const initials = getInitials(task.assignedTo?.name);

              return (
                <div
                  key={task.id}
                  style={{
                    background: isOverdue 
                      ? 'rgba(239, 68, 68, 0.08)' 
                      : 'rgba(34, 211, 238, 0.08)',
                    border: `1px solid ${isOverdue 
                      ? 'rgba(239, 68, 68, 0.2)' 
                      : 'rgba(148, 163, 184, 0.2)'}`,
                    borderRadius: '10px',
                    padding: '12px',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = isOverdue 
                      ? 'rgba(239, 68, 68, 0.12)' 
                      : 'rgba(34, 211, 238, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = isOverdue 
                      ? 'rgba(239, 68, 68, 0.08)' 
                      : 'rgba(34, 211, 238, 0.08)';
                  }}
                >
                  {/* Header de la tarea */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '10px',
                    marginBottom: '8px'
                  }}>
                    <input
                      type="checkbox"
                      checked={task.status === 'completada'}
                      onChange={() => handleStatusChange(task.id, task.status)}
                      style={{ 
                        marginTop: '2px',
                        accentColor: '#22d3ee',
                        cursor: 'pointer'
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ 
                        fontWeight: 'bold', 
                        color: '#e2e8f0',
                        fontSize: '13px',
                        lineHeight: '1.4',
                        marginBottom: '4px'
                      }}>
                        {task.title}
                      </div>
                      {task.client && (
                        <div style={{ 
                          fontSize: '11px', 
                          color: '#9fb3cc',
                          marginBottom: '4px'
                        }}>
                          👤 {task.client}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Badges de información */}
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '6px',
                    marginBottom: '8px'
                  }}>
                    <span style={{
                      background: `${priorityColor}15`,
                      color: priorityColor,
                      border: `1px solid ${priorityColor}30`,
                      borderRadius: '6px',
                      padding: '2px 6px',
                      fontSize: '10px',
                      fontWeight: 'bold'
                    }}>
                      ⚡ {formatTaskPriority(task.priority)}
                    </span>
                    
                    <span style={{
                      background: isOverdue 
                        ? 'rgba(239, 68, 68, 0.15)' 
                        : 'rgba(34, 211, 238, 0.15)',
                      color: isOverdue ? '#ef4444' : '#22d3ee',
                      border: `1px solid ${isOverdue 
                        ? 'rgba(239, 68, 68, 0.3)' 
                        : 'rgba(34, 211, 238, 0.3)'}`,
                      borderRadius: '6px',
                      padding: '2px 6px',
                      fontSize: '10px',
                      fontWeight: 'bold'
                    }}>
                      📅 {formatDueDate(task.dueDate)}
                    </span>
                    
                    <span style={{
                      background: `${statusColor}15`,
                      color: statusColor,
                      border: `1px solid ${statusColor}30`,
                      borderRadius: '6px',
                      padding: '2px 6px',
                      fontSize: '10px',
                      fontWeight: 'bold'
                    }}>
                      📋 {formatTaskStatus(task.status)}
                    </span>
                  </div>

                  {/* Footer con asignado */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    fontSize: '11px',
                    color: '#9fb3cc'
                  }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: avatarColor,
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '10px',
                      fontWeight: 'bold'
                    }}>
                      {initials}
                    </div>
                    <span>
                      Asignada a <strong style={{ color: '#e2e8f0' }}>
                        {task.assignedTo?.name || 'Usuario no encontrado'}
                      </strong>
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {/* Botón para mostrar más/menos */}
      {recentTasks.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          style={{
            background: 'none',
            border: '1px solid rgba(148, 163, 184, 0.3)',
            borderRadius: '6px',
            padding: '6px 12px',
            color: '#9fb3cc',
            fontSize: '11px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            alignSelf: 'center'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(148, 163, 184, 0.1)';
            e.target.style.color = '#e2e8f0';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'none';
            e.target.style.color = '#9fb3cc';
          }}
        >
          {showAll ? 'Mostrar menos' : `Ver ${recentTasks.length - 3} más`}
        </button>
      )}

      {/* Formulario rápido para nueva tarea */}
      <div style={{ 
        borderTop: '1px solid rgba(148, 163, 184, 0.2)',
        paddingTop: '12px'
      }}>
        <div style={{ 
          display: 'flex', 
          gap: '8px',
          alignItems: 'flex-end'
        }}>
          <input
            type="text"
            placeholder="Agregar nueva tarea rápida..."
            style={{
              flex: 1,
              background: '#1e293b',
              border: '1px solid rgba(148, 163, 184, 0.3)',
              borderRadius: '6px',
              padding: '8px 12px',
              color: '#e2e8f0',
              fontSize: '12px',
              outline: 'none'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#22d3ee';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(148, 163, 184, 0.3)';
            }}
          />
          <button
            type="button"
            style={{
              background: 'linear-gradient(135deg, #22d3ee 0%, #0ea5e9 100%)',
              border: 'none',
              borderRadius: '6px',
              padding: '8px 16px',
              color: '#0c1530',
              fontSize: '12px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 4px 12px rgba(34, 211, 238, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            + Agregar
          </button>
        </div>
      </div>

      {/* Estilos para animación de carga */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}


