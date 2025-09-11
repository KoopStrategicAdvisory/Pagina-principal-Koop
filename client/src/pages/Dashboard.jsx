// Dashboard.jsx — Portal del cliente (página principal)
// Estructura general: Acciones rápidas, KPIs, PDF de bienvenida, widgets (Facturas/Mensajes) y Documentos recientes
import { useEffect, useRef, useState } from "react";
import api from "../api/axios";
import KpiCard from "../components/dashboard/KpiCard";
// import CasesTable from "../components/dashboard/CasesTable";
import UnreadMessages from "../components/dashboard/UnreadMessages";
import RecentDocuments from "../components/dashboard/RecentDocuments";
import "../../../src/styles/dashboard.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../src/context/AuthContext.jsx";
import { normalizeUpperAscii } from "../../../src/utils/strings.js";
import ResponsivePdf from "../components/dashboard/ResponsivePdf.jsx";

export default function Dashboard() {
  const { user } = useAuth();
  const displayName = normalizeUpperAscii(user?.name || 'Dashboard');
  const [kpis, setKpis] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [docsRefreshKey, setDocsRefreshKey] = useState(0);
  const fileInputRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("/kpis/overview");
        setKpis(data);
      } catch (e) {
        setError(e?.response?.data || e?.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="dash-page" style={{ backgroundImage: "linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')", backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
      <div className="dash-card" style={{ maxWidth: 1200 }}>
        <div className="dash-header">
          <div className="dash-title">{displayName}</div>
        </div>

        {/* Inline grid helpers (keeps responsive without Tailwind) */}
        <style>{`
          .kpi-grid { display:grid; grid-template-columns: 1fr; gap: 16px; }
          @media (min-width: 640px) { .kpi-grid { grid-template-columns: repeat(2, 1fr); } }
          @media (min-width: 1024px) { .kpi-grid { grid-template-columns: repeat(4, 1fr); } }
          .main-grid { display:grid; grid-template-columns: 1fr; gap: 16px; }
          @media (min-width: 1024px) { .main-grid { grid-template-columns: repeat(3, 1fr); } }
          .main-left { grid-column: span 1; }
          @media (min-width: 1024px) { .main-left { grid-column: span 2; } }
        `}</style>

        {/* Acciones rápidas (atajos para el usuario) */}
        <div className="dash-item" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <button
            className="btn btn-primary"
            onClick={() => {
              // Abrir la primera carpeta asignada al usuario desde el card (si existe)
              const anchor = document.querySelector('[data-drive-folder-url]');
              const url = anchor?.getAttribute('data-drive-folder-url');
              if (url) window.open(url, '_blank', 'noopener');
            }}
            title="Radicar documentación inicial"
          >
            Radicar documentación inicial
          </button>
          <Link className="btn btn-primary btn-sm" to="/mi-expediente" title="Ir a Mi expediente">
            Mi expediente
          </Link>
        </div>

        {/* KPIs (tarjetas con números) */}
        <div className="kpi-grid" style={{ marginTop: 16 }}>
          <KpiCard label="Casos activos" value={kpis?.activeCases ?? (loading ? "…" : 0)} />
        </div>

        {/* Fila principal: izquierda PDF, derecha widgets */}
        <div className="main-grid" style={{ marginTop: 16 }}>
          <div className="main-left">
            <div className="dash-item" style={{ padding: 0 }}>
              <ResponsivePdf src="/Saludobienvenidaportal.pdf" heightDesktop={560} heightMobile={480} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Bloque: Facturas vencidas (con botón de pago) */}
            <div className="dash-item">
              <div className="font-semibold mb-2" style={{ fontWeight: 600, marginBottom: 8 }}>Facturas vencidas</div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  className="btn btn-primary"
                  aria-label="Pagar factura"
                >
                  Pagar factura
                </button>
              </div>
            </div>
            <UnreadMessages />
          </div>
        </div>

        {/* Documentos recientes */}
        <div style={{ marginTop: 16 }}><RecentDocuments refreshKey={docsRefreshKey} /></div>

        {/* Error global KPIs */}
        {error && (
          <pre className="text-red-600 text-sm mt-2" style={{ color: '#fecaca', background: '#7f1d1d', padding: 12, borderRadius: 8, marginTop: 12 }}>
            {typeof error === 'string' ? error : JSON.stringify(error, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}

