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
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [volume, setVolume] = useState(50);
  const [devices, setDevices] = useState([]);
  const [activeDevice, setActiveDevice] = useState(null);
  const [playbackError, setPlaybackError] = useState(null);
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
          
          // Cargar playlists, estado de reproducción y dispositivos
          await loadPlaylists(spotifyToken);
          await loadCurrentPlayback(spotifyToken);
          await loadDevices();
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
      setPlaybackError(null);
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
      } else if (response.status === 404) {
        setPlaybackError('No hay dispositivos activos. Abre Spotify en algún dispositivo.');
        console.log('❌ No hay dispositivos activos');
      } else {
        const errorData = await response.json();
        setPlaybackError(`Error: ${errorData.error?.message || 'Error desconocido'}`);
        console.error(`Error ejecutando ${action}:`, errorData);
      }
    } catch (error) {
      setPlaybackError('Error de conexión. Verifica tu conexión a internet.');
      console.error(`Error ejecutando ${action}:`, error);
    }
  };

  const playPlaylist = async (playlistId) => {
    try {
      const spotifyToken = localStorage.getItem('spotifyAccessToken');
      const response = await fetch('https://api.spotify.com/v1/me/player/play', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${spotifyToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          context_uri: `spotify:playlist:${playlistId}`
        })
      });
      
      if (response.ok) {
        console.log(`🎵 Reproduciendo playlist: ${playlistId}`);
        // Recargar estado de reproducción
        await loadCurrentPlayback(spotifyToken);
      }
    } catch (error) {
      console.error('Error reproduciendo playlist:', error);
    }
  };

  const startPlayback = async () => {
    try {
      const spotifyToken = localStorage.getItem('spotifyAccessToken');
      const response = await fetch('https://api.spotify.com/v1/me/player/play', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${spotifyToken}`
        }
      });
      
      if (response.ok) {
        console.log('🎵 Iniciando reproducción');
        // Recargar estado de reproducción
        await loadCurrentPlayback(spotifyToken);
      }
    } catch (error) {
      console.error('Error iniciando reproducción:', error);
    }
  };

  const searchTracks = async (query) => {
    if (!query.trim()) return;
    
    try {
      const spotifyToken = localStorage.getItem('spotifyAccessToken');
      const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`, {
        headers: {
          'Authorization': `Bearer ${spotifyToken}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.tracks.items);
        console.log('🔍 Resultados de búsqueda:', data.tracks.items.length);
      }
    } catch (error) {
      console.error('Error buscando canciones:', error);
    }
  };

  const playTrack = async (trackUri) => {
    try {
      const spotifyToken = localStorage.getItem('spotifyAccessToken');
      const response = await fetch('https://api.spotify.com/v1/me/player/play', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${spotifyToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          uris: [trackUri]
        })
      });
      
      if (response.ok) {
        console.log('🎵 Reproduciendo canción:', trackUri);
        await loadCurrentPlayback(spotifyToken);
      }
    } catch (error) {
      console.error('Error reproduciendo canción:', error);
    }
  };

  const loadPlaylistTracks = async (playlistId) => {
    try {
      const spotifyToken = localStorage.getItem('spotifyAccessToken');
      const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        headers: {
          'Authorization': `Bearer ${spotifyToken}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setPlaylistTracks(data.items);
        console.log('📋 Canciones de playlist cargadas:', data.items.length);
      }
    } catch (error) {
      console.error('Error cargando canciones de playlist:', error);
    }
  };

  const setVolumeLevel = async (newVolume) => {
    try {
      const spotifyToken = localStorage.getItem('spotifyAccessToken');
      const response = await fetch(`https://api.spotify.com/v1/me/player/volume?volume_percent=${newVolume}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${spotifyToken}`
        }
      });
      
      if (response.ok) {
        setVolume(newVolume);
        console.log('🔊 Volumen ajustado a:', newVolume);
      }
    } catch (error) {
      console.error('Error ajustando volumen:', error);
    }
  };

  const loadDevices = async () => {
    try {
      const spotifyToken = localStorage.getItem('spotifyAccessToken');
      const response = await fetch('https://api.spotify.com/v1/me/player/devices', {
        headers: {
          'Authorization': `Bearer ${spotifyToken}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setDevices(data.devices);
        const active = data.devices.find(device => device.is_active);
        setActiveDevice(active);
        console.log('📱 Dispositivos cargados:', data.devices.length, 'Activo:', active?.name);
      }
    } catch (error) {
      console.error('Error cargando dispositivos:', error);
    }
  };

  const transferPlayback = async (deviceId) => {
    try {
      const spotifyToken = localStorage.getItem('spotifyAccessToken');
      const response = await fetch('https://api.spotify.com/v1/me/player', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${spotifyToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          device_ids: [deviceId]
        })
      });
      
      if (response.ok) {
        console.log('🔄 Reproducción transferida a dispositivo:', deviceId);
        await loadDevices();
      }
    } catch (error) {
      console.error('Error transfiriendo reproducción:', error);
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
                gap: '12px',
                height: '100%'
              }}>
                {/* Header con navegación */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <div style={{ color: '#1db954', fontSize: '16px' }}>✅</div>
                    <span style={{ color: '#1db954', fontSize: '12px', fontWeight: 'bold' }}>
                      {userProfile?.display_name}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <button
                      onClick={() => setShowSearch(!showSearch)}
                      style={{
                        padding: '4px 8px',
                        backgroundColor: showSearch ? '#1db954' : 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '10px'
                      }}
                    >
                      🔍
                    </button>
                    <button
                      onClick={() => setShowPlaylist(!showPlaylist)}
                      style={{
                        padding: '4px 8px',
                        backgroundColor: showPlaylist ? '#1db954' : 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '10px'
                      }}
                    >
                      📋
                    </button>
                    <button
                      onClick={loadDevices}
                      style={{
                        padding: '4px 8px',
                        backgroundColor: devices.length > 0 ? '#1db954' : 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '10px'
                      }}
                    >
                      📱
                    </button>
                  </div>
                </div>

                {/* Mensaje de error */}
                {playbackError && (
                  <div style={{
                    padding: '8px',
                    backgroundColor: 'rgba(255, 68, 68, 0.2)',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 68, 68, 0.3)',
                    marginBottom: '8px'
                  }}>
                    <p style={{ color: '#ff4444', margin: '0', fontSize: '11px' }}>
                      {playbackError}
                    </p>
                  </div>
                )}

                {/* Dispositivos disponibles */}
                {devices.length > 0 && (
                  <div style={{
                    padding: '8px',
                    backgroundColor: 'rgba(40, 40, 40, 0.8)',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    marginBottom: '8px'
                  }}>
                    <h4 style={{ color: '#1db954', margin: '0 0 6px 0', fontSize: '11px' }}>
                      Dispositivos ({devices.length})
                    </h4>
                    {devices.map((device) => (
                      <div
                        key={device.id}
                        onClick={() => transferPlayback(device.id)}
                        style={{
                          padding: '4px 6px',
                          backgroundColor: device.is_active ? 'rgba(29, 185, 84, 0.2)' : 'rgba(0, 0, 0, 0.3)',
                          marginBottom: '2px',
                          borderRadius: '3px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <span style={{ color: device.is_active ? '#1db954' : '#b3b3b3', fontSize: '10px' }}>
                          {device.is_active ? '🔊' : '🔇'}
                        </span>
                        <span style={{ color: 'white', fontSize: '10px', flex: 1 }}>
                          {device.name}
                        </span>
                        <span style={{ color: '#b3b3b3', fontSize: '8px' }}>
                          {device.type}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Búsqueda */}
                {showSearch && (
                  <div style={{
                    padding: '8px',
                    backgroundColor: 'rgba(40, 40, 40, 0.8)',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <input
                      type="text"
                      placeholder="Buscar canciones..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && searchTracks(searchQuery)}
                      style={{
                        width: '100%',
                        padding: '6px',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '4px',
                        color: 'white',
                        fontSize: '11px',
                        marginBottom: '8px'
                      }}
                    />
                    {searchResults.length > 0 && (
                      <div style={{ maxHeight: '100px', overflowY: 'auto' }}>
                        {searchResults.map((track) => (
                          <div
                            key={track.id}
                            onClick={() => playTrack(track.uri)}
                            style={{
                              padding: '4px',
                              backgroundColor: 'rgba(0, 0, 0, 0.3)',
                              marginBottom: '2px',
                              borderRadius: '3px',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px'
                            }}
                          >
                            <img
                              src={track.album.images[2]?.url || '/img/default-album.png'}
                              alt="Album"
                              style={{ width: '20px', height: '20px', borderRadius: '2px' }}
                            />
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <p style={{ color: 'white', margin: '0', fontSize: '9px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {track.name}
                              </p>
                              <p style={{ color: '#b3b3b3', margin: '0', fontSize: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {track.artists[0]?.name}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Reproductor principal */}
                <div style={{
                  padding: '12px',
                  backgroundColor: 'rgba(40, 40, 40, 0.8)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  flex: 1
                }}>
                  {currentPlayback ? (
                    <div>
                      {/* Información de la canción */}
                      <div style={{ marginBottom: '12px', textAlign: 'center' }}>
                        <img 
                          src={currentPlayback.item?.album?.images?.[0]?.url || '/img/default-album.png'} 
                          alt="Album" 
                          style={{ 
                            width: '60px', 
                            height: '60px', 
                            borderRadius: '6px',
                            marginBottom: '8px'
                          }} 
                        />
                        <h4 style={{ color: 'white', margin: '0 0 4px 0', fontSize: '13px' }}>
                          {currentPlayback.item?.name || 'Sin canción'}
                        </h4>
                        <p style={{ color: '#b3b3b3', margin: '0', fontSize: '11px' }}>
                          {currentPlayback.item?.artists?.[0]?.name || 'Artista desconocido'}
                        </p>
                      </div>
                      
                      {/* Barra de progreso */}
                      <div style={{ marginBottom: '12px' }}>
                        <div style={{
                          width: '100%',
                          height: '4px',
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          borderRadius: '2px',
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            width: `${(currentPlayback.progress_ms / currentPlayback.item?.duration_ms) * 100}%`,
                            height: '100%',
                            backgroundColor: '#1db954',
                            transition: 'width 0.1s ease'
                          }} />
                        </div>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginTop: '4px',
                          fontSize: '9px',
                          color: '#b3b3b3'
                        }}>
                          <span>{Math.floor(currentPlayback.progress_ms / 1000 / 60)}:{(Math.floor(currentPlayback.progress_ms / 1000) % 60).toString().padStart(2, '0')}</span>
                          <span>{Math.floor(currentPlayback.item?.duration_ms / 1000 / 60)}:{(Math.floor(currentPlayback.item?.duration_ms / 1000) % 60).toString().padStart(2, '0')}</span>
                        </div>
                      </div>
                      
                      {/* Controles principales */}
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                        <button
                          onClick={() => controlPlayback('previous')}
                          style={{
                            padding: '8px',
                            backgroundColor: 'rgba(29, 185, 84, 0.2)',
                            color: '#1db954',
                            border: '1px solid #1db954',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            fontSize: '14px'
                          }}
                        >
                          ⏮️
                        </button>
                        <button
                          onClick={() => controlPlayback(currentPlayback.is_playing ? 'pause' : 'play')}
                          style={{
                            padding: '12px',
                            backgroundColor: '#1db954',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            fontSize: '16px'
                          }}
                        >
                          {currentPlayback.is_playing ? '⏸️' : '▶️'}
                        </button>
                        <button
                          onClick={() => controlPlayback('next')}
                          style={{
                            padding: '8px',
                            backgroundColor: 'rgba(29, 185, 84, 0.2)',
                            color: '#1db954',
                            border: '1px solid #1db954',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            fontSize: '14px'
                          }}
                        >
                          ⏭️
                        </button>
                      </div>
                      
                      {/* Control de volumen */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: '#b3b3b3', fontSize: '10px' }}>🔊</span>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={volume}
                          onChange={(e) => setVolumeLevel(parseInt(e.target.value))}
                          style={{
                            flex: 1,
                            height: '4px',
                            background: 'rgba(255, 255, 255, 0.2)',
                            outline: 'none',
                            borderRadius: '2px'
                          }}
                        />
                        <span style={{ color: '#b3b3b3', fontSize: '10px' }}>{volume}%</span>
                      </div>
                    </div>
                  ) : (
                    <div style={{ textAlign: 'center', padding: '20px 0' }}>
                      <p style={{ color: '#b3b3b3', margin: '0 0 12px 0', fontSize: '12px' }}>
                        No hay música reproduciéndose
                      </p>
                      <button
                        onClick={startPlayback}
                        style={{
                          padding: '10px 20px',
                          backgroundColor: '#1db954',
                          color: 'white',
                          border: 'none',
                          borderRadius: '20px',
                          cursor: 'pointer',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }}
                      >
                        ▶️ Iniciar Reproducción
                      </button>
                    </div>
                  )}
                </div>

                {/* Playlists */}
                {!showPlaylist && playlists.length > 0 && (
                  <div style={{ maxHeight: '100px', overflowY: 'auto' }}>
                    <h4 style={{ color: '#1db954', margin: '0 0 8px 0', fontSize: '12px' }}>
                      Tus Playlists
                    </h4>
                    {playlists.slice(0, 3).map((playlist) => (
                      <div 
                        key={playlist.id} 
                        onClick={() => {
                          playPlaylist(playlist.id);
                          setCurrentPlaylist(playlist);
                          loadPlaylistTracks(playlist.id);
                        }}
                        style={{ 
                          padding: '6px', 
                          backgroundColor: 'rgba(40, 40, 40, 0.6)', 
                          marginBottom: '4px', 
                          borderRadius: '4px',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = 'rgba(29, 185, 84, 0.2)';
                          e.target.style.transform = 'scale(1.02)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'rgba(40, 40, 40, 0.6)';
                          e.target.style.transform = 'scale(1)';
                        }}
                      >
                        <p style={{ color: 'white', margin: '0', fontSize: '10px' }}>
                          {playlist.name}
                        </p>
                        <p style={{ color: '#b3b3b3', margin: '0', fontSize: '8px' }}>
                          {playlist.tracks.total} canciones
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Lista de canciones de playlist */}
                {showPlaylist && currentPlaylist && (
                  <div style={{ maxHeight: '150px', overflowY: 'auto' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '8px'
                    }}>
                      <h4 style={{ color: '#1db954', margin: '0', fontSize: '12px' }}>
                        {currentPlaylist.name}
                      </h4>
                      <button
                        onClick={() => setShowPlaylist(false)}
                        style={{
                          padding: '2px 6px',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '3px',
                          cursor: 'pointer',
                          fontSize: '10px'
                        }}
                      >
                        ✕
                      </button>
                    </div>
                    {playlistTracks.map((item, index) => (
                      <div
                        key={item.track.id}
                        onClick={() => playTrack(item.track.uri)}
                        style={{
                          padding: '6px',
                          backgroundColor: 'rgba(40, 40, 40, 0.6)',
                          marginBottom: '2px',
                          borderRadius: '3px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                      >
                        <span style={{ color: '#b3b3b3', fontSize: '10px', minWidth: '20px' }}>
                          {index + 1}
                        </span>
                        <img
                          src={item.track.album.images[2]?.url || '/img/default-album.png'}
                          alt="Album"
                          style={{ width: '24px', height: '24px', borderRadius: '2px' }}
                        />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ color: 'white', margin: '0', fontSize: '10px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {item.track.name}
                          </p>
                          <p style={{ color: '#b3b3b3', margin: '0', fontSize: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {item.track.artists[0]?.name}
                          </p>
                        </div>
                      </div>
                    ))}
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
                      setCurrentPlayback(null);
                      setSearchResults([]);
                      setCurrentPlaylist(null);
                      setPlaylistTracks([]);
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
