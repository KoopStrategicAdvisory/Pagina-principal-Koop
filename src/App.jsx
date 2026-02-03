// App.jsx — Punto de entrada de la SPA (sitio + portal)
// Explicación sencilla:
// - Define el enrutado con React Router
// - Rutas públicas: páginas informativas
// - Rutas protegidas: requieren sesión (Dashboard, Mi expediente, etc.)
// - Muestra/oculta la Navbar en login/registro
import React, { useState } from 'react';
import './styles/overrides.css';
import './styles/menu-mobile-uniform.css';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Index from './pages/Index.jsx';
import Derecho from './pages/static/Derecho/index.jsx';
import Contabilidad from './pages/static/Contabilidad/index.jsx';
import Auditoria from './pages/static/Auditoria/index.jsx';
import DerechoAdministrativo from './pages/static/DerechoAdministrativo/index.jsx';
import DerechoFamilia from './pages/static/DerechoFamilia/index.jsx';
import DerechoLaboral from './pages/static/DerechoLaboral/index.jsx';
import DerechoPenal from './pages/static/DerechoPenal/index.jsx';
import Impuestos from './pages/static/Impuestos/index.jsx';
import AsesoriaContable from './pages/static/AsesoriaContable/index.jsx';
import Privacidad from './pages/static/Privacidad/index.jsx';
import TramitesNotariales from './pages/static/TramitesNotariales/index.jsx';
import AccionesDeTutela from './pages/static/AccionesDeTutela/index.jsx';
import Login from './pages/dinamic/auth/Login/index.jsx';
import Register from './pages/dinamic/auth/Register/index.jsx';
import Panel from './pages/dinamic/Panel/index.jsx';
import AdminUsuarios from './pages/dinamic/AdminUsuariosResponsive/index.jsx';
import AdminTareas from './pages/dinamic/AdminTareas/index.jsx';
import ClientesActivos from './pages/dinamic/ClientesActivos/index.jsx';
import Dashboard from './components/protected/Dashboard.jsx';
import MiExpediente from './pages/dinamic/Miexpediente/index.jsx';
import MisCasos from './pages/dinamic/MisCasos/index.jsx';
import Logout from './pages/dinamic/auth/Logout/index.jsx';
import SpotifyCallback from './pages/dinamic/SpotifyCallback/index.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';
import api from './api/axios';
import Navbar from './components/Navbar.jsx';
import FontProvider from './theme/FontProvider.jsx';
import SpotifyWidget from './components/SpotifyWidget.jsx';

function App() {
  // Test /api/ping using Axios instance
  const [pong, setPong] = useState(null);
  const testPing = async () => {
    try {
      const { data } = await api.get('/ping');
      setPong(data);
    } catch (err) {
      console.error(err);
      setPong({ error: true, message: err?.message || 'error' });
    }
  };

  //Acá se manipula el navbar para que no aparezca en login, register y dashboard

  // Shell: layout básico (Navbar + Rutas)
  const Shell = () => {
    const location = useLocation();
    const { isAuthenticated } = useAuth();
    const p = location.pathname.toLowerCase();
    const hideNavbar = p.startsWith('/login') || p.startsWith('/register');
    return (
      <>
        {/* Navbar global (se oculta en login y registro) */}
        {!hideNavbar && <Navbar />}
        
        {/* Spotify Widget global (solo para admins autenticados) */}
        <SpotifyWidget />
        
        <Routes>
          {/* Rutas públicas (siempre accesibles) */}
          <Route path="/" element={<Index />} />
          <Route path="/derecho" element={<Derecho />} />
          <Route path="/contabilidad" element={<Contabilidad />} />
          <Route path="/auditoria" element={<Auditoria />} />
          <Route path="/derecho-administrativo" element={<DerechoAdministrativo />} />
          <Route path="/derecho-familia" element={<DerechoFamilia />} />
          <Route path="/derecho-laboral" element={<DerechoLaboral />} />
          <Route path="/derecho-penal" element={<DerechoPenal />} />
          <Route path="/impuestos" element={<Impuestos />} />
          <Route path="/asesoria-contable" element={<AsesoriaContable />} />
          {/* Mantener ruta antigua para compatibilidad */}
          <Route path="/planeacion-patrimonial" element={<Navigate to="/asesoria-contable" replace />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/tramites-notariales" element={<TramitesNotariales />} />
          <Route path="/acciones-de-tutela" element={<AccionesDeTutela />} />
          
          {/* Auth: si ya estás autenticado, redirige fuera de login; registro queda libre */}
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" replace /> : <Login />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/callback" element={<SpotifyCallback />} />
          <Route
            path="/panel"
            element={
              <ProtectedRoute>
                <Panel />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/usuarios"
            element={
              <ProtectedRoute>
                <AdminUsuarios />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/clientes-activos"
            element={
              <ProtectedRoute>
                <ClientesActivos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/tareas"
            element={
              <ProtectedRoute>
                <AdminTareas />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mi-expediente"
            element={
              <ProtectedRoute>
                <MiExpediente />
              </ProtectedRoute>
            }
          />
          {/* alias solicitado: dashboard2 */}
          <Route
            path="/dashboard2"
            element={
              <ProtectedRoute>
                <MiExpediente />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mis-casos"
            element={
              <ProtectedRoute>
                <MisCasos />
              </ProtectedRoute>
            }
          />
          {/* Legacy .html paths -> redirect to SPA routes */}
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="/derecho.html" element={<Navigate to="/derecho" replace />} />
          <Route path="/contabilidad.html" element={<Navigate to="/contabilidad" replace />} />
          <Route path="/auditoria.html" element={<Navigate to="/auditoria" replace />} />
          <Route path="/derecho-administrativo.html" element={<Navigate to="/derecho-administrativo" replace />} />
          <Route path="/derecho-familia.html" element={<Navigate to="/derecho-familia" replace />} />
          <Route path="/derecho-laboral.html" element={<Navigate to="/derecho-laboral" replace />} />
          <Route path="/derecho-penal.html" element={<Navigate to="/derecho-penal" replace />} />
          <Route path="/impuestos.html" element={<Navigate to="/impuestos" replace />} />
          <Route path="/planeacion-patrimonial.html" element={<Navigate to="/asesoria-contable" replace />} />
          <Route path="/privacidad.html" element={<Navigate to="/privacidad" replace />} />
          <Route path="/tramites-notariales.html" element={<Navigate to="/tramites-notariales" replace />} />
          <Route path="/acciones-de-tutela.html" element={<Navigate to="/acciones-de-tutela" replace />} />
        </Routes>
      </>
    );
  };

  return (
    <AuthProvider>
      <FontProvider>
        <BrowserRouter>
          <Shell />
        </BrowserRouter>
      </FontProvider>
    </AuthProvider>
  );
}

export default App;