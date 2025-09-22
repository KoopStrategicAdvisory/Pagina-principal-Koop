import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../api/axios';

export default function SpotifyWidget() {
  const { user } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [currentPlayback, setCurrentPlayback] = useState(null);
  const [position, setPosition] = useState({ x: window.innerWidth - 80, y: window.innerHeight - 80 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [isMinimized, setIsMinimized] = useState(false);
  const widgetRef = useRef(null);

  // Solo mostrar para administradores
  const isAdmin = user?.roles?.some(role =>
    String(role || '').toLowerCase() === 'admin'
  );

  if (!isAdmin) return null;

  // Verificar autenticación al cargar y cuando el usuario regresa de Spotify
  useEffect(() => {
    if (isAdmin) {
      // Verificar si estamos en la página del dashboard
      if (window.location.pathname === '/dashboard') {
        // Verificar si hay un parámetro de código en la URL (viene de Spotify)
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('code')) {
          console.log('🔄 Detectado código de Spotify, esperando intercambio...');
          // Esperar un poco para que se complete el intercambio
          setTimeout(() => {
            console.log('🔄 Verificando autenticación después del intercambio...');
            checkAuthentication();
          }, 3000);
        } else {
          // Si no hay código, esperar un poco por si acaso viene de una redirección
          console.log('🔄 Verificando autenticación con delay...');
          setTimeout(() => {
            checkAuthentication();
          }, 5000);
        }
      } else {
        // Si no estamos en dashboard, verificar inmediatamente
        checkAuthentication();
      }

      // Verificar cuando el foco regresa a la ventana
      const handleFocus = () => {
        if (window.location.pathname === '/dashboard') {
          console.log('🔄 Verificando autenticación al regresar el foco...');
          checkAuthentication();
        }
      };

      window.addEventListener('focus', handleFocus);
      
      return () => {
        window.removeEventListener('focus', handleFocus);
      };
    }
  }, [isAdmin]);

  // Función para determinar la dirección de apertura y ajustar posición
  const getOpenDirection = () => {
    const centerX = window.innerWidth / 2;
    return position.x > centerX ? 'left' : 'right';
  };

  // Función para ajustar la posición del widget expandido
  const getAdjustedPosition = () => {
    const widgetSize = 320;
    const buttonSize = 60;
    const openDirection = getOpenDirection();
    const margin = 10; // Margen de seguridad
    
    let adjustedX = position.x;
    let adjustedY = position.y;
    
    // Ajustar posición horizontal
    if (openDirection === 'left') {
      // Se abre hacia la izquierda
      adjustedX = position.x - widgetSize;
      // Si se sale por la izquierda, ajustar
      if (adjustedX < margin) {
        adjustedX = margin;
      }
    } else {
      // Se abre hacia la derecha
      adjustedX = position.x;
      // Si se sale por la derecha, ajustar
      if (adjustedX + widgetSize > window.innerWidth - margin) {
        adjustedX = window.innerWidth - widgetSize - margin;
      }
    }
    
    // Ajustar posición vertical - más estricto
    if (adjustedY + widgetSize > window.innerHeight - margin) {
      adjustedY = window.innerHeight - widgetSize - margin;
    }
    if (adjustedY < margin) {
      adjustedY = margin;
    }
    
    // Verificación adicional: si el botón está muy abajo, mover el widget hacia arriba
    if (position.y > window.innerHeight - buttonSize - margin) {
      adjustedY = Math.max(margin, position.y - widgetSize + buttonSize);
    }
    
    return { x: adjustedX, y: adjustedY };
  };

  // Funciones de arrastre
  const handleStart = (e) => {
    setIsDragging(true);
    setHasMoved(false);
    const rect = widgetRef.current.getBoundingClientRect();
    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;
    setStartPosition({ x: clientX, y: clientY });
    setDragOffset({
      x: clientX - rect.left,
      y: clientY - rect.top
    });
  };

  const handleMove = (e) => {
    if (isDragging) {
      const clientX = e.clientX || e.touches[0].clientX;
      const clientY = e.clientY || e.touches[0].clientY;
      
      // Detectar si se ha movido significativamente (más de 5px)
      const deltaX = Math.abs(clientX - startPosition.x);
      const deltaY = Math.abs(clientY - startPosition.y);
      if (deltaX > 5 || deltaY > 5) {
        setHasMoved(true);
      }
      
      const newX = clientX - dragOffset.x;
      const newY = clientY - dragOffset.y;
      
      // Limitar a los bordes de la pantalla con margen de seguridad
      const margin = 10;
      const buttonSize = 60;
      const widgetSize = isExpanded ? 320 : 60;
      const maxX = window.innerWidth - widgetSize - margin;
      const maxY = window.innerHeight - widgetSize - margin;
      
      setPosition({
        x: Math.max(margin, Math.min(newX, maxX)),
        y: Math.max(margin, Math.min(newY, maxY))
      });
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    // Resetear hasMoved después de un pequeño delay para permitir clicks futuros
    setTimeout(() => {
      setHasMoved(false);
    }, 100);
  };

  // Event listeners para el arrastre
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleMove, { passive: false });
      document.addEventListener('touchend', handleEnd);
      return () => {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleEnd);
        document.removeEventListener('touchmove', handleMove);
        document.removeEventListener('touchend', handleEnd);
      };
    }
  }, [isDragging, dragOffset]);

  // Ajustar posición cuando se redimensiona la ventana
  useEffect(() => {
    const handleResize = () => {
      const margin = 10;
      const buttonSize = 60;
      const maxX = window.innerWidth - buttonSize - margin;
      const maxY = window.innerHeight - buttonSize - margin;
      setPosition(prev => ({
        x: Math.max(margin, Math.min(prev.x, maxX)),
        y: Math.max(margin, Math.min(prev.y, maxY))
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Minimizar cuando se hace click fuera del widget
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isExpanded && widgetRef.current && !widgetRef.current.contains(e.target)) {
        setIsExpanded(false);
        setIsMinimized(true);
        // Ajustar posición del botón si se sale de la pantalla al minimizar
        const margin = 10;
        const buttonSize = 60;
        const maxX = window.innerWidth - buttonSize - margin;
        const maxY = window.innerHeight - buttonSize - margin;
        setPosition(prev => ({
          x: Math.max(margin, Math.min(prev.x, maxX)),
          y: Math.max(margin, Math.min(prev.y, maxY))
        }));
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isExpanded]);

  const checkAuthentication = async () => {
    try {
      // Verificar si hay tokens de Spotify en localStorage
      const spotifyToken = localStorage.getItem('spotifyAccessToken');
      const tokenExpiry = localStorage.getItem('spotifyTokenExpiry');
      
      if (spotifyToken && tokenExpiry && Date.now() < parseInt(tokenExpiry)) {
        console.log('🎵 Usando tokens de Spotify del localStorage');
        // Usar el token directamente para hacer la petición a Spotify
        const response = await fetch('https://api.spotify.com/v1/me', {
          headers: {
            'Authorization': `Bearer ${spotifyToken}`
          }
        });
        
        if (response.ok) {
          const userData = await response.json();
          setUserProfile(userData);
          setIsAuthenticated(true);
          console.log('✅ Usuario de Spotify autenticado:', userData.display_name);
          
          // Cargar playlists y estado de reproducción
          await loadPlaylists(spotifyToken);
          await loadCurrentPlayback(spotifyToken);
        } else {
          throw new Error('Token de Spotify inválido');
        }
      } else {
        // Si no hay tokens válidos, intentar con el backend
        const response = await api.get('/spotify/me');
        setUserProfile(response.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log('No hay sesión de Spotify activa');
      setIsAuthenticated(false);
      setUserProfile(null);
    }
  };

  const loadPlaylists = async (token) => {
    try {
      const response = await fetch('https://api.spotify.com/v1/me/playlists?limit=10', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setPlaylists(data.items);
        console.log('📋 Playlists cargadas:', data.items.length);
      }
    } catch (error) {
      console.error('Error cargando playlists:', error);
    }
  };

  const loadCurrentPlayback = async (token) => {
    try {
      const response = await fetch('https://api.spotify.com/v1/me/player', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setCurrentPlayback(data);
        console.log('🎵 Estado de reproducción:', data?.is_playing ? 'Reproduciendo' : 'Pausado');
      }
    } catch (error) {
      console.error('Error cargando estado de reproducción:', error);
    }
  };

  const controlPlayback = async (action) => {
    try {
      const spotifyToken = localStorage.getItem('spotifyAccessToken');
      const response = await fetch(`https://api.spotify.com/v1/me/player/${action}`, {
        method: action === 'play' || action === 'pause' ? 'PUT' : 'POST',
        headers: {
          'Authorization': `Bearer ${spotifyToken}`
        }
      });
      
      if (response.ok) {
        console.log(`🎵 ${action} ejecutado`);
        // Recargar estado de reproducción
        await loadCurrentPlayback(spotifyToken);
      }
    } catch (error) {
      console.error(`Error ejecutando ${action}:`, error);
    }
  };

  const authenticateWithSpotify = async () => {
    try {
      const response = await api.get('/spotify/auth/url');
      window.location.href = response.data.authUrl;
    } catch (error) {
      console.error('Error getting auth URL:', error);
    }
  };

  const adjustedPosition = getAdjustedPosition();
  const widgetStyle = {
    position: 'fixed',
    left: isExpanded ? `${adjustedPosition.x}px` : `${position.x}px`,
    top: isExpanded ? `${adjustedPosition.y}px` : `${position.y}px`,
    width: isExpanded ? '320px' : '60px',
    height: isExpanded ? '320px' : '60px',
    backgroundColor: 'rgba(15, 23, 42, 0.95)',
    backdropFilter: 'blur(15px)',
    borderRadius: isExpanded ? '12px' : '50%',
    border: '1px solid rgba(148, 163, 184, 0.3)',
    padding: isExpanded ? '16px' : '0',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.8)',
    zIndex: 1000,
    transition: isDragging ? 'none' : 'all 0.3s ease',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    cursor: isDragging ? 'grabbing' : (isExpanded ? 'default' : 'grab'),
    touchAction: 'none'
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.2); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
      <div 
        ref={widgetRef} 
        style={widgetStyle}
        onMouseDown={isExpanded ? handleStart : undefined}
        onTouchStart={isExpanded ? handleStart : undefined}
      >
      {/* Botón de corchea (contraído) */}
      {!isExpanded && (
        <div
          style={{
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'grab',
            transition: 'all 0.2s ease',
            userSelect: 'none',
            position: 'relative'
          }}
          onMouseDown={handleStart}
          onTouchStart={handleStart}
          onClick={(e) => {
            // Solo expandir si no se ha movido significativamente
            if (!hasMoved) {
              setIsExpanded(true);
              setIsMinimized(false); // Ya no está minimizado
            }
          }}
          onMouseEnter={(e) => {
            if (!isDragging) {
              e.target.style.transform = 'scale(1.1)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isDragging) {
              e.target.style.transform = 'scale(1)';
            }
          }}
        >
          <span style={{ 
            fontSize: '24px', 
            color: isMinimized && isAuthenticated ? '#1db954' : '#fc771c', // Verde si está minimizado y conectado
            fontWeight: 'bold'
          }}>
            ♪
          </span>
          {/* Indicador de música en reproducción */}
          {isMinimized && isAuthenticated && (
            <div style={{
              position: 'absolute',
              top: '5px',
              right: '5px',
              width: '8px',
              height: '8px',
              backgroundColor: '#1db954',
              borderRadius: '50%',
              animation: 'pulse 2s infinite'
            }} />
          )}
        </div>
      )}

      {/* Contenido expandido */}
      {isExpanded && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between'
        }}>
          {/* Header compacto */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#fc771c',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                color: '#fff'
              }}>
                ♪
              </div>
              <div>
                <h4 style={{
                  color: '#e2e8f0',
                  margin: 0,
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}>
                  Spotify
                </h4>
                {isAuthenticated && (
                  <p style={{
                    color: '#94a3b8',
                    margin: 0,
                    fontSize: '12px'
                  }}>
                    {userProfile?.display_name}
                  </p>
                )}
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {!isAuthenticated && (
                <button
                  onClick={authenticateWithSpotify}
                  style={{
                    background: '#fc771c',
                    border: 'none',
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#f97316';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#fc771c';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  Conectar
                </button>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Evitar que se active el arrastre
                  setIsExpanded(false);
                  setIsMinimized(true); // Marcar como minimizado
                  // Ajustar posición del botón si se sale de la pantalla al minimizar
                  const margin = 10;
                  const buttonSize = 60;
                  const maxX = window.innerWidth - buttonSize - margin;
                  const maxY = window.innerHeight - buttonSize - margin;
                  setPosition(prev => ({
                    x: Math.max(margin, Math.min(prev.x, maxX)),
                    y: Math.max(margin, Math.min(prev.y, maxY))
                  }));
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#94a3b8',
                  fontSize: '18px',
                  cursor: 'pointer',
                  padding: '6px',
                  borderRadius: '6px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#e2e8f0';
                  e.target.style.backgroundColor = 'rgba(148, 163, 184, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#94a3b8';
                  e.target.style.backgroundColor = 'transparent';
                }}
                title="Minimizar (la música continúa)"
              >
                −
              </button>
            </div>
          </div>

          {/* Contenido compacto */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            flex: 1,
            justifyContent: 'center'
          }}>
            {isAuthenticated ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px',
                backgroundColor: 'rgba(252, 119, 28, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(252, 119, 28, 0.3)'
              }}>
                <div style={{ color: '#fc771c', fontSize: '20px' }}>✅</div>
                <span style={{ color: '#fc771c', fontSize: '14px', fontWeight: 'bold' }}>
                  Conectado
                </span>
              </div>
              
              <div style={{
                display: 'flex',
                gap: '6px'
              }}>
                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    background: '#fc771c',
                    border: 'none',
                    color: '#fff',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#f97316';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#fc771c';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  Abrir
                </a>
                <button
                  onClick={async () => {
                    try {
                      await api.post('/spotify/logout');
                      setIsAuthenticated(false);
                      setUserProfile(null);
                    } catch (error) {
                      console.error('Error logging out:', error);
                    }
                  }}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: '1px solid #fc771c',
                    color: '#fc771c',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#fc771c';
                    e.target.style.color = '#fff';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#fc771c';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  Salir
                </button>
              </div>
              </div>
            ) : (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                padding: '20px',
                backgroundColor: 'rgba(148, 163, 184, 0.05)',
                borderRadius: '12px',
                border: '1px dashed rgba(148, 163, 184, 0.3)',
                flex: 1,
                justifyContent: 'center'
              }}>
                <div style={{ fontSize: '48px', opacity: 0.5, color: '#fc771c' }}>🎵</div>
                <p style={{
                  color: '#94a3b8',
                  margin: 0,
                  fontSize: '14px',
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}>
                  Conecta tu Spotify
                </p>
              </div>
            )}
          </div>
        </div>
        )}
      </div>
    </>
  );
}
