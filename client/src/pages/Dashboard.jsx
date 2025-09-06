import { useEffect, useRef, useState } from "react";
import api from "../api/axios";
import KpiCard from "../components/dashboard/KpiCard";
// import CasesTable from "../components/dashboard/CasesTable";
import UpcomingDeadlines from "../components/dashboard/UpcomingDeadlines";
import PendingInvoices from "../components/dashboard/PendingInvoices";
import UnreadMessages from "../components/dashboard/UnreadMessages";
import RecentDocuments from "../components/dashboard/RecentDocuments";
import "../../../src/styles/dashboard.css";
import { useAuth } from "../../../src/context/AuthContext.jsx";
import { normalizeUpperAscii } from "../../../src/utils/strings.js";

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

        {/* Acciones rÃ¡pidas */}
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
        </div>

        {/* KPIs */}
        <div className="kpi-grid" style={{ marginTop: 16 }}>
          <KpiCard label="Casos activos" value={kpis?.activeCases ?? (loading ? "â€¦" : 0)} />
          <KpiCard label="Vencimientos (7d)" value={kpis?.upcomingDeadlines7d ?? (loading ? "â€¦" : 0)} />
          <KpiCard label="Facturas vencidas" value={kpis?.overdueInvoices ?? (loading ? "â€¦" : 0)} />
          <KpiCard label="Tickets abiertos" value={kpis?.openTickets ?? (loading ? "â€¦" : 0)} />
        </div>

        {/* Fila principal */}
        <div className="main-grid" style={{ marginTop: 16 }}>
          <div className="main-left">
            <div className="dash-item" style={{ padding: 0 }}>
              <div style={{ height: 560 }}>
                <object data="/Saludobienvenidaportal.pdf" type="application/pdf" width="100%" height="100%">
                  <div style={{ padding: 16 }}>
                    No se pudo mostrar el PDF. <a href="/Saludobienvenidaportal.pdf" target="_blank" rel="noopener">Abrir en nueva pestaña</a>
                  </div>
                </object>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <UpcomingDeadlines />
            <PendingInvoices />
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
