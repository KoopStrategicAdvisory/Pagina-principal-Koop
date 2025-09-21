import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import './SpotifyPlayerAdmin.css';

export default function SpotifyPlayerAdmin() {
  const { user } = useAuth();
  const [isExpanded, setIsExpanded] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: '50%' });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const playerRef = useRef(null);
  
  const spotifyUrl = "https://open.spotify.com/embed/playlist/1Zf1rz0XX6fyNxKOq4XvgN?utm_source=generator&theme=0&view=compact&width=100%&height=100%";

  useEffect(() => {
    // Load state from localStorage
    const savedExpanded = localStorage.getItem('spotifyAdminPlayerExpanded');
    const savedPosition = localStorage.getItem('spotifyAdminPlayerPosition');
    
    if (savedExpanded !== null) setIsExpanded(JSON.parse(savedExpanded));
    if (savedPosition !== null) setPosition(JSON.parse(savedPosition));
  }, []);

  useEffect(() => {
    // Save state to localStorage
    localStorage.setItem('spotifyAdminPlayerExpanded', JSON.stringify(isExpanded));
    localStorage.setItem('spotifyAdminPlayerPosition', JSON.stringify(position));
  }, [isExpanded, position]);

  // Funciones para arrastrar (soporte para mouse y touch)
  const handleStart = (e) => {
    if (e.target.closest('iframe')) return; // No arrastrar si se hace click en el iframe
    
    setIsDragging(true);
    const rect = playerRef.current.getBoundingClientRect();
    
    // Obtener coordenadas según el tipo de evento
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    
    setDragOffset({
      x: clientX - rect.left,
      y: clientY - rect.top
    });
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    
    // Obtener coordenadas según el tipo de evento
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    
    const newX = clientX - dragOffset.x;
    const newY = clientY - dragOffset.y;
    
    // Limitar a los bordes de la ventana
    const maxX = window.innerWidth - 50; // 50px es el ancho del botón
    const maxY = window.innerHeight - 50; // 50px es la altura del botón
    
    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    });
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      // Eventos de mouse
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleEnd);
      
      // Eventos táctiles
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

  // Intentar activar shuffle después de cargar el iframe
  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(() => {
        const iframe = playerRef.current?.querySelector('iframe');
        if (iframe) {
          try {
            // Intentar enviar mensaje al iframe para activar shuffle
            iframe.contentWindow?.postMessage({
              type: 'command',
              command: 'shuffle',
              value: true
            }, 'https://open.spotify.com');
          } catch (e) {
            console.log('No se pudo activar shuffle automáticamente');
          }
        }
      }, 2000); // Esperar 2 segundos para que se cargue el iframe

      return () => clearTimeout(timer);
    }
  }, [isExpanded]);

  
  // Mostrar para todos los usuarios autenticados
  if (!user) return null;

  return (
    <div 
      ref={playerRef}
      className="spotify-admin-player-container"
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        width: isExpanded ? '600px' : '50px',
        height: isExpanded ? '80px' : '50px',
        transition: isDragging ? 'none' : 'all 0.3s ease',
        overflow: 'hidden',
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none'
      }}
      onMouseDown={handleStart}
      onTouchStart={handleStart}
    >
      {/* Botón de expandir/contraer */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50px',
          height: '50px',
          backgroundColor: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(148, 163, 184, 0.3)',
          opacity: 0.7,
          cursor: 'pointer',
          zIndex: 1001,
          aspectRatio: '1/1',
          minWidth: '50px',
          minHeight: '50px',
          maxWidth: '50px',
          maxHeight: '50px'
        }}
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.05)';
          e.target.style.backgroundColor = 'rgba(15, 23, 42, 0.9)';
          e.target.style.opacity = '1';
          e.target.style.borderColor = 'rgba(148, 163, 184, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.backgroundColor = 'rgba(15, 23, 42, 0.8)';
          e.target.style.opacity = '0.7';
          e.target.style.borderColor = 'rgba(148, 163, 184, 0.3)';
        }}
      >
        <span style={{ fontSize: '18px', color: '#fc771c' }}>♪</span>
      </div>

      {/* Reproductor expandido */}
      {isExpanded && (
        <iframe
          src={spotifyUrl}
          width="540px"
          height="80px"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Admin Player"
          style={{
            position: 'absolute',
            top: 0,
            left: '60px'
          }}
        ></iframe>
      )}
    </div>
  );
}
