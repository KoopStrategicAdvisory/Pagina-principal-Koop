import React from 'react';
import './styles/overrides.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Index from './pages/Index.jsx';
import Derecho from './pages/Derecho.jsx';
import Contabilidad from './pages/Contabilidad.jsx';
import Auditoria from './pages/Auditoria.jsx';
import DerechoAdministrativo from './pages/DerechoAdministrativo.jsx';
import DerechoFamilia from './pages/DerechoFamilia.jsx';
import DerechoLaboral from './pages/DerechoLaboral.jsx';
import DerechoPenal from './pages/DerechoPenal.jsx';
import Impuestos from './pages/Impuestos.jsx';
import PlaneacionPatrimonial from './pages/PlaneacionPatrimonial.jsx';
import Privacidad from './pages/Privacidad.jsx';
import TramitesNotariales from './pages/TramitesNotariales.jsx';
import AccionesDeTutela from './pages/AccionesDeTutela.jsx';

function App() {
  const basename = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/derecho" element={<Derecho />} />
        <Route path="/contabilidad" element={<Contabilidad />} />
        <Route path="/auditoria" element={<Auditoria />} />
        <Route path="/derecho-administrativo" element={<DerechoAdministrativo />} />
        <Route path="/derecho-familia" element={<DerechoFamilia />} />
        <Route path="/derecho-laboral" element={<DerechoLaboral />} />
        <Route path="/derecho-penal" element={<DerechoPenal />} />
        <Route path="/impuestos" element={<Impuestos />} />
        <Route path="/planeacion-patrimonial" element={<PlaneacionPatrimonial />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/tramites-notariales" element={<TramitesNotariales />} />
        <Route path="/acciones-de-tutela" element={<AccionesDeTutela />} />
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
        <Route path="/planeacion-patrimonial.html" element={<Navigate to="/planeacion-patrimonial" replace />} />
        <Route path="/privacidad.html" element={<Navigate to="/privacidad" replace />} />
        <Route path="/tramites-notariales.html" element={<Navigate to="/tramites-notariales" replace />} />
        <Route path="/acciones-de-tutela.html" element={<Navigate to="/acciones-de-tutela" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
