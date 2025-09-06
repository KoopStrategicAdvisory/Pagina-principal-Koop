import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Logout() {
  const { logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try { await logout(); } catch (_) {}
      try { sessionStorage.removeItem('koop_hasVisited'); } catch (_) {}
      try { document.documentElement.classList.remove('skip-splash'); } catch (_) {}
    })();
  }, [logout]);

  // Redirige al inicio; Index mostrará el splash al no encontrar la marca de visita
  const from = location.state?.from?.pathname;
  return <Navigate to="/" replace state={{ from }} />;
}

