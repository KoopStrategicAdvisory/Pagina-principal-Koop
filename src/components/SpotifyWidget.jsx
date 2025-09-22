import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../api/axios';

export default function SpotifyWidget() {
  const { user } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [showPlaylists, setShowPlaylists] = useState(false);
  const [position, setPosition] = useState({ x: window.innerWidth - 80, y: window.innerHeight - 80 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [isMinimized, setIsMinimized] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const widgetRef = useRef(null);

  const isAdmin = user?.roles?.includes('admin');

  // Cargar posición guardada
  useEffect(() => {
    const savedPosition = localStorage.getItem('spotifyWidgetPosition');
    if (savedPosition) {
      setPosition(JSON.parse(savedPosition));
    }
    
    const savedExpanded = localStorage.getItem('spotifyWidgetExpanded');
    if (savedExpanded) {
      setIsExpanded(JSON.parse(savedExpanded));
    }

    const savedMinimized = localStorage.getItem('spotifyWidgetMinimized');
    if (savedMinimized) {
      setIsMinimized(JSON.parse(savedMinimized));
    }
  }, []);

  // Guardar posición y estado
  useEffect(() => {
    localStorage.setItem('spotifyWidgetPosition', JSON.stringify(position));
  }, [position]);

  useEffect(() => {
    localStorage.setItem('spotifyWidgetExpanded', JSON.stringify(isExpanded));
  }, [isExpanded]);

  useEffect(() => {
    localStorage.setItem('spotifyWidgetMinimized', JSON.stringify(isMinimized));
  }, [isMinimized]);

  // Verificar autenticación - ahora en todas las páginas
  useEffect(() => {
    if (isAdmin) {
      // Verificar autenticación inmediatamente en cualquier página
      checkAuthentication();
      
      // Verificar cuando el foco regresa a la ventana
      const handleFocus = () => {
        checkAuthentication();
      };

      window.addEventListener('focus', handleFocus);
      
      return () => {
        window.removeEventListener('focus', handleFocus);
      };
    }
  }, [isAdmin]);

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
          
          // Cargar playlists
          await loadPlaylists(spotifyToken);
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
      const response = await fetch('https://api.spotify.com/v1/me/playlists?limit=20', {
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

  const authenticateWithSpotify = async () => {
    try {
      const response = await api.get('/spotify/auth/url');
      window.location.href = response.data.authUrl;
    } catch (error) {
      console.error('Error getting auth URL:', error);
    }
  };

  // Funciones de arrastre
  const handleStart = (e) => {
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
    
    setIsDragging(true);
    setHasMoved(false);
    setStartPosition({ x: clientX, y: clientY });
    setDragOffset({
      x: clientX - position.x,
      y: clientY - position.y
    });
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;
    
    const newX = clientX - dragOffset.x;
    const newY = clientY - dragOffset.y;
    
    // Verificar si se movió lo suficiente para considerarlo un arrastre
    const deltaX = Math.abs(clientX - startPosition.x);
    const deltaY = Math.abs(clientY - startPosition.y);
    if (deltaX > 5 || deltaY > 5) {
      setHasMoved(true);
    }
    
    // Asegurar que el widget no se salga de la pantalla
    const margin = 10;
    const maxX = window.innerWidth - (isExpanded ? 350 : 60) - margin;
    const maxY = window.innerHeight - (isExpanded ? 400 : 60) - margin;
    
    setPosition({
      x: Math.max(margin, Math.min(newX, maxX)),
      y: Math.max(margin, Math.min(newY, maxY))
    });
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  // Event listeners para arrastre
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleMove);
      document.addEventListener('touchend', handleEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, dragOffset, startPosition]);

  // Función para manejar clics fuera del widget - solo minimizar, no cerrar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        if (isExpanded) {
          setIsExpanded(false);
          setIsMinimized(true);
          // NO parar la música - solo minimizar
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isExpanded]);

  // Detectar cuando se inicia la reproducción
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin === 'https://open.spotify.com') {
        if (event.data && event.data.type === 'playback_started') {
          setIsPlaying(true);
        } else if (event.data && event.data.type === 'playback_paused') {
          setIsPlaying(false);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  if (!isAdmin) {
    return null;
  }

  const getOpenDirection = () => {
    const rightSpace = window.innerWidth - position.x;
    const bottomSpace = window.innerHeight - position.y;
    
    if (rightSpace < 350 && bottomSpace < 400) {
      return 'top-left';
    } else if (rightSpace < 350) {
      return 'left';
    } else if (bottomSpace < 400) {
      return 'top';
    }
    return 'default';
  };

  const getAdjustedPosition = () => {
    const direction = getOpenDirection();
    const margin = 10;
    
    switch (direction) {
      case 'top-left':
        return {
          x: Math.max(margin, position.x - 290),
          y: Math.max(margin, position.y - 340)
        };
      case 'left':
        return {
          x: Math.max(margin, position.x - 290),
          y: position.y
        };
      case 'top':
        return {
          x: position.x,
          y: Math.max(margin, position.y - 340)
        };
      default:
        return position;
    }
  };

  const adjustedPosition = isExpanded ? getAdjustedPosition() : position;

  return (
    <div
      ref={widgetRef}
      style={{
        position: 'fixed',
        left: adjustedPosition.x,
        top: adjustedPosition.y,
        zIndex: 1000,
        width: isExpanded ? '350px' : '60px',
        height: isExpanded ? '400px' : '60px',
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(148, 163, 184, 0.2)',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
        transition: isDragging ? 'none' : 'all 0.3s ease',
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'none',
        userSelect: 'none'
      }}
      onMouseDown={handleStart}
      onTouchStart={handleStart}
    >
      {/* Botón minimizado */}
      {!isExpanded && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            if (!hasMoved) {
              setIsExpanded(true);
              setIsMinimized(false);
            }
          }}
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
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
            color: isMinimized && isAuthenticated ? '#1db954' : '#fc771c',
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
              backgroundColor: isPlaying ? '#1db954' : '#ff6b6b',
              borderRadius: '50%',
              animation: isPlaying ? 'pulse 2s infinite' : 'none'
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
              <h4 style={{
                color: '#1db954',
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
            
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {isAuthenticated && (
                <button
                  onClick={() => setShowPlaylists(!showPlaylists)}
                  style={{
                    background: showPlaylists ? '#1db954' : 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    padding: '6px 12px',
                    borderRadius: '15px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  📋
                </button>
              )}
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
                  e.stopPropagation();
                  setIsExpanded(false);
                  setIsMinimized(true);
                  // NO parar la música - solo minimizar
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
              >
                ×
              </button>
            </div>
          </div>
          
          {/* Contenido principal */}
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
                gap: '12px',
                height: '100%'
              }}>
                {showPlaylists ? (
                  /* Lista de playlists */
                  <div style={{
                    height: '100%',
                    overflowY: 'auto',
                    padding: '8px',
                    backgroundColor: 'rgba(40, 40, 40, 0.8)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <h4 style={{ color: '#1db954', margin: '0 0 12px 0', fontSize: '14px' }}>
                      Tus Playlists
                    </h4>
                    {playlists.map((playlist) => (
                      <div
                        key={playlist.id}
                        onClick={() => {
                          // Cambiar el iframe a la playlist seleccionada
                          const iframe = document.querySelector('iframe[src*="open.spotify.com"]');
                          if (iframe) {
                            iframe.src = `https://open.spotify.com/embed/playlist/${playlist.id}?utm_source=generator&theme=0`;
                          }
                          setShowPlaylists(false);
                        }}
                        style={{
                          padding: '8px',
                          backgroundColor: 'rgba(0, 0, 0, 0.3)',
                          marginBottom: '6px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = 'rgba(29, 185, 84, 0.2)';
                          e.target.style.transform = 'scale(1.02)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                          e.target.style.transform = 'scale(1)';
                        }}
                      >
                        <img
                          src={playlist.images[0]?.url || '/img/default-playlist.png'}
                          alt="Playlist"
                          style={{ width: '40px', height: '40px', borderRadius: '4px' }}
                        />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ color: 'white', margin: '0', fontSize: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {playlist.name}
                          </p>
                          <p style={{ color: '#b3b3b3', margin: '0', fontSize: '10px' }}>
                            {playlist.tracks.total} canciones
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Reproductor de Spotify embebido */
                  <div style={{
                    width: '100%',
                    height: '250px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    backgroundColor: 'rgba(40, 40, 40, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <iframe
                      src="https://open.spotify.com/embed/playlist/1Zf1rz0XX6fyNxKOq4XvgN?utm_source=generator&theme=0"
                      width="100%"
                      height="250"
                      frameBorder="0"
                      allowtransparency="true"
                      allow="encrypted-media"
                      style={{
                        borderRadius: '8px',
                        border: 'none'
                      }}
                    />
                  </div>
                )}
                
                {/* Botones de acción */}
                <div style={{
                  display: 'flex',
                  gap: '6px',
                  paddingTop: '8px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <a
                    href={userProfile?.external_urls?.spotify || "https://open.spotify.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      background: '#1db954',
                      border: 'none',
                      color: '#fff',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      textAlign: 'center',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Abrir
                  </a>
                  <button
                    onClick={() => {
                      localStorage.removeItem('spotifyAccessToken');
                      localStorage.removeItem('spotifyRefreshToken');
                      localStorage.removeItem('spotifyTokenExpiry');
                      setIsAuthenticated(false);
                      setUserProfile(null);
                      setPlaylists([]);
                    }}
                    style={{
                      flex: 1,
                      background: '#ff4444',
                      border: 'none',
                      color: '#fff',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      transition: 'all 0.2s ease'
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
                padding: '20px 0'
              }}>
                <div style={{
                  fontSize: '48px',
                  color: '#1db954'
                }}>
                  ♪
                </div>
                <h3 style={{
                  color: '#1db954',
                  margin: 0,
                  fontSize: '18px',
                  textAlign: 'center'
                }}>
                  Reproductor de Spotify
                </h3>
                <p style={{
                  color: '#94a3b8',
                  margin: 0,
                  fontSize: '14px',
                  textAlign: 'center',
                  lineHeight: '1.5'
                }}>
                  Conecta tu cuenta de Spotify para disfrutar de tu música favorita
                </p>
                <button
                  onClick={authenticateWithSpotify}
                  style={{
                    background: '#1db954',
                    border: 'none',
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    padding: '12px 24px',
                    borderRadius: '25px',
                    transition: 'all 0.2s ease',
                    marginTop: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#1ed760';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#1db954';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  Conectar con Spotify
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Animación de pulso para el indicador */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}