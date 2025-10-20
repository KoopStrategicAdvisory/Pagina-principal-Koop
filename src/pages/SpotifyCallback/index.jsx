import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import api from '../../api/axios';
import { useAuth } from '../../context/AuthContext';

export default function SpotifyCallback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user } = useAuth();

  useEffect(() => {
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    if (error) {
      console.error('Spotify authorization error:', error);
      navigate('/dashboard');
      return;
    }

    if (code) {
      // Intercambiar código por token
      exchangeCodeForToken(code);
    } else {
      navigate('/dashboard');
    }
  }, [searchParams, navigate]);

  const exchangeCodeForToken = async (code) => {
    try {
      console.log('🔄 Iniciando intercambio de código por token:', { code: code?.substring(0, 10) + '...', user: !!user });
      
      // Verificar que el usuario esté autenticado
      if (!user) {
        console.error('❌ Usuario no autenticado');
        navigate('/login');
        return;
      }

      console.log('📤 Enviando petición al backend...');
      
      // Verificar que el token esté disponible
      const token = localStorage.getItem('accessToken');
      console.log('🔑 Token disponible:', !!token, token?.substring(0, 20) + '...');
      
      // Forzar el envío del token manualmente
      console.log('📋 Headers que se enviarán:', {
        'Authorization': `Bearer ${token?.substring(0, 20)}...`
      });
      
      console.log('📡 Enviando petición POST a /spotify/auth/token...');
      const response = await api.post('/spotify/auth/token', { code }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('✅ Respuesta recibida:', response.status, response.data);

      if (response.status === 200) {
        // Guardar los tokens de Spotify en localStorage
        const { access_token, refresh_token, expires_in } = response.data;
        localStorage.setItem('spotifyAccessToken', access_token);
        localStorage.setItem('spotifyRefreshToken', refresh_token);
        localStorage.setItem('spotifyTokenExpiry', Date.now() + (expires_in * 1000));
        console.log('💾 Tokens de Spotify guardados en localStorage');
        
        // Redirigir al dashboard
        navigate('/dashboard');
      } else {
        console.error('Error exchanging code for token');
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error exchanging code for token:', error);
      navigate('/dashboard');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#191414'
    }}>
      <div style={{
        textAlign: 'center',
        color: '#1db954'
      }}>
        <div style={{
          fontSize: '24px',
          marginBottom: '16px'
        }}>
          Conectando con Spotify...
        </div>
        <div style={{
          width: '40px',
          height: '40px',
          border: '4px solid #1db954',
          borderTop: '4px solid transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto'
        }}></div>
      </div>
      
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
