// AdminDashboard - Portal del cliente (pagina principal para administradores)
// Estructura general: Acciones rapidas, KPIs, widgets personalizados y documentos recientes
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../../api/axios";
import { listUsers } from "../../../../api/adminUsers";
import { useAuth } from "../../../../context/AuthContext.jsx";
import useCalendarEvents from "../../../../hooks/useCalendarEvents";
import { normalizeUpperAscii } from "../../../../utils/strings.js";
import "../../../../styles/dashboard.css";
import UploadDocumentAction from "../common/UploadDocumentAction.jsx";
import CalendarWidget from "../common/CalendarWidget.jsx";
import KpiCard from "./KpiCard";
import RecentDocuments from "./RecentDocuments";

function toDateKey(date) {
  if (!(date instanceof Date)) return null;
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function generateEventId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `evt-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export default function AdminDashboard() {
  const { user } = useAuth();
  const displayName = normalizeUpperAscii(user?.name || "Dashboard");
  const [kpis, setKpis] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [docsRefreshKey, setDocsRefreshKey] = useState(0);

  const [calendarEvents, setCalendarEvents] = useCalendarEvents();
  const [selectedDate, setSelectedDate] = useState(() => new Date());
  const selectedDateKey = useMemo(() => toDateKey(selectedDate), [selectedDate]);

  const [noteText, setNoteText] = useState("");
  const [publishToAll, setPublishToAll] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClientIds, setSelectedClientIds] = useState([]);

  const [clients, setClients] = useState([]);
  const [clientsLoading, setClientsLoading] = useState(false);
  const [clientsError, setClientsError] = useState(null);

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

  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        setClientsLoading(true);
        setClientsError(null);
        const response = await listUsers();
        if (ignore) return;
        const items = Array.isArray(response?.items) ? response.items : [];
        setClients(
          items
            .map((item) => ({
              id: String(item?.id || item?._id || item?.documentNumber || '').trim(),
              name: item?.name || item?.fullName || item?.email || 'Cliente sin nombre',
              email: item?.email,
            }))
            .filter((entry) => entry.id)
        );
      } catch (err) {
        if (!ignore) {
          setClientsError(err?.response?.data?.message || err?.message || 'No se pudo cargar clientes');
        }
      } finally {
        if (!ignore) {
          setClientsLoading(false);
        }
      }
    })();
    return () => {
      ignore = true;
    };
  }, []);

  const filteredClients = useMemo(() => {
    if (!searchTerm) return clients;
    const normalized = searchTerm.trim().toLowerCase();
    return clients.filter((client) =>
      [client.id, client.name, client.email].some((value) =>
        String(value || '').toLowerCase().includes(normalized)
      )
    );
  }, [clients, searchTerm]);

  const selectedDayEvents = useMemo(() => {
    const events = calendarEvents.filter((event) => event?.date === selectedDateKey);
    return events.sort((a, b) => (a.createdAt || '').localeCompare(b.createdAt || ''));
  }, [calendarEvents, selectedDateKey]);

  const handleToggleClient = (clientId) => {
    const normalized = String(clientId);
    setSelectedClientIds((prev) => {
      if (prev.includes(normalized)) {
        return prev.filter((id) => id !== normalized);
      }
      return [...prev, normalized];
    });
  };

  const handleSaveNote = () => {
    const trimmed = noteText.trim();
    if (!selectedDateKey || !trimmed) return;
    if (!publishToAll && selectedClientIds.length === 0) return;

    const newEvent = {
      id: generateEventId(),
      date: selectedDateKey,
      note: trimmed,
      audience: publishToAll
        ? { type: 'all' }
        : { type: 'clients', clientIds: selectedClientIds.map((id) => String(id).trim()) },
      createdAt: new Date().toISOString(),
      createdBy: user?.id || user?.sub || 'admin',
    };

    setCalendarEvents((prev) => [...prev, newEvent]);
    setNoteText('');
    setSelectedClientIds([]);
    setPublishToAll(true);
  };

  const primaryButtonStyle = {
    padding: '10px 14px',
    fontSize: '14px',
    minHeight: '52px',
    borderRadius: '10px',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  };

  const adminPrimaryActions = [
    { key: 'clientes', label: 'Clientes', to: '/admin/clientes-activos' },
    { key: 'procesos', label: 'Procesos', to: '/mis-casos' },
    { key: 'publicaciones', label: 'Publicaciones Procesales', href: 'https://koop.com/publicaciones-procesales' },
  ];

  const selectedDateLabel = useMemo(
    () =>
      selectedDate?.toLocaleDateString('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    [selectedDate]
  );

  return (
    <div
      className="dash-page"
      style={{
        backgroundImage:
          "linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div className="dash-card" style={{ maxWidth: 1200 }}>
        <style>{`
          .admin-main-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
          @media (min-width: 1024px) { .admin-main-grid { grid-template-columns: repeat(3, 1fr); } }
          .admin-main-left { grid-column: span 1; display: flex; flex-direction: column; gap: 16px; }
          @media (min-width: 1024px) { .admin-main-left { grid-column: span 2; } }
          .admin-main-right { display: flex; flex-direction: column; gap: 16px; }
          .admin-clients-list { max-height: 200px; overflow-y: auto; border: 1px solid rgba(148,163,184,0.35); border-radius: 8px; padding: 8px; }
          .admin-clients-item { display: flex; align-items: center; justify-content: space-between; padding: 6px 4px; border-bottom: 1px solid rgba(148,163,184,0.15); }
          .admin-clients-item:last-child { border-bottom: none; }
        `}</style>

        <div className="dash-header">
          <div className="dash-title">{displayName}</div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <UploadDocumentAction
              buttonClassName="btn btn-primary"
              allowFolderInput
              onUploaded={() => setDocsRefreshKey((value) => value + 1)}
            />
          </div>
        </div>

        <div className="dash-item" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <button
            className="btn btn-primary"
            onClick={() => {
              const anchor = document.querySelector('[data-drive-folder-url]');
              const url = anchor?.getAttribute('data-drive-folder-url');
              if (url) window.open(url, '_blank', 'noopener');
            }}
            title="Lineas de tiempo procesales"
          >
            Lineas de tiempo procesales
          </button>
          <Link className="btn btn-primary btn-sm" to="/mi-expediente" title="Ir a Mi expediente">
            Mi expediente
          </Link>
          <Link className="btn btn-secondary btn-sm" to="/admin/usuarios" title="Administrar usuarios">
            Administrar usuarios
          </Link>
        </div>

        <div className="kpi-grid" style={{ marginTop: 16 }}>
          <KpiCard label="Casos activos" value={kpis?.activeCases ?? (loading ? "..." : 0)} />
        </div>

        <div className="admin-main-grid" style={{ marginTop: 16 }}>
          <div className="admin-main-left">
            <div className="dash-item">
              <div className="font-semibold mb-2" style={{ fontWeight: 600, marginBottom: 8 }}>
                Centro administrativo
              </div>
              <p style={{ marginBottom: 12 }}>
                Supervisa la operacion del portal, gestiona usuarios y da seguimiento a la informacion mas reciente.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                <Link className="btn btn-primary btn-sm" to="/admin/usuarios" title="Administrar usuarios">
                  Administrar usuarios
                </Link>
                <Link className="btn btn-secondary btn-sm" to="/mi-expediente" title="Revisar expedientes">
                  Revisar expedientes
                </Link>
              </div>
            </div>

            <CalendarWidget
              value={selectedDate}
              onChange={setSelectedDate}
              events={calendarEvents}
            />

            <div style={{ display: 'grid', gap: 10 }}>
              {adminPrimaryActions.map((action) => (
                <div key={action.key} className="dash-item" style={{ padding: 0, display: 'flex', alignItems: 'stretch' }}>
                  {action.to ? (
                    <Link
                      className="btn btn-primary"
                      to={action.to}
                      style={primaryButtonStyle}
                    >
                      {action.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={primaryButtonStyle}
                      onClick={() => {
                        if (typeof window !== 'undefined' && action.href) {
                          window.open(action.href, '_blank', 'noopener');
                        }
                      }}
                    >
                      {action.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="admin-main-right">
            <div className="dash-item">
              <div className="font-semibold" style={{ fontWeight: 600 }}>
                {selectedDateLabel || 'Selecciona un dia'}
              </div>
              <p style={{ marginTop: 4, fontSize: 13, opacity: 0.8 }}>
                Registra recordatorios o publicaciones para clientes especificos o para todos.
              </p>

              <textarea
                value={noteText}
                onChange={(event) => setNoteText(event.target.value)}
                placeholder="Agregar nota o detalle del evento"
                rows={4}
                style={{
                  width: '100%',
                  marginTop: 12,
                  background: '#1b263b',
                  color: '#e2e8f0',
                  border: '1px solid rgba(148,163,184,0.35)',
                  borderRadius: 10,
                  padding: '10px 12px',
                  resize: 'vertical',
                }}
              />

              <div style={{ marginTop: 12 }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <input
                    type="checkbox"
                    checked={publishToAll}
                    onChange={(event) => {
                      setPublishToAll(event.target.checked);
                      if (event.target.checked) {
                        setSelectedClientIds([]);
                      }
                    }}
                  />
                  <span>Publicar para todos los clientes</span>
                </label>
              </div>

              {!publishToAll && (
                <div style={{ marginTop: 12 }}>
                  <input
                    type="search"
                    placeholder="Buscar por nombre, email o ID"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: 10,
                      border: '1px solid rgba(148,163,184,0.35)',
                      background: '#1b263b',
                      color: '#e2e8f0',
                    }}
                  />
                  {clientsError && (
                    <div style={{ color: '#fecaca', background: '#7f1d1d', padding: 8, borderRadius: 8, marginTop: 8 }}>
                      {clientsError}
                    </div>
                  )}
                  <div className="admin-clients-list" style={{ marginTop: 8 }}>
                    {clientsLoading && <div style={{ opacity: 0.7 }}>Cargando clientes...</div>}
                    {!clientsLoading && filteredClients.length === 0 && (
                      <div style={{ opacity: 0.7 }}>No se encontraron clientes</div>
                    )}
                    {filteredClients.map((client) => {
                      const checked = selectedClientIds.includes(client.id);
                      return (
                        <label key={client.id} className="admin-clients-item">
                          <span style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontWeight: 600 }}>{client.name}</span>
                            <span style={{ fontSize: 12, opacity: 0.75 }}>{client.id}</span>
                          </span>
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => handleToggleClient(client.id)}
                          />
                        </label>
                      );
                    })}
                  </div>
                  {selectedClientIds.length > 0 && (
                    <div style={{ marginTop: 8, fontSize: 12, opacity: 0.7 }}>
                      Seleccionados: {selectedClientIds.join(', ')}
                    </div>
                  )}
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 12 }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setNoteText('');
                    setPublishToAll(true);
                    setSelectedClientIds([]);
                  }}
                >
                  Limpiar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSaveNote}
                  disabled={!noteText.trim() || (!publishToAll && selectedClientIds.length === 0)}
                >
                  Guardar anotacion
                </button>
              </div>

              {selectedDayEvents.length > 0 && (
                <div style={{ marginTop: 16 }}>
                  <div style={{ fontWeight: 600, marginBottom: 8 }}>Anotaciones del dia</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {selectedDayEvents.map((event) => (
                      <div
                        key={event.id}
                        style={{
                          border: '1px solid rgba(148,163,184,0.35)',
                          borderRadius: 10,
                          padding: 10,
                          background: '#1b263b',
                        }}
                      >
                        <div style={{ marginBottom: 6 }}>{event.note}</div>
                                                <div style={{ fontSize: 12, opacity: 0.7 }}>
                          {event.audience?.type === 'all'
                            ? 'Visible para todos los clientes'
                            : `Visible para: ${Array.isArray(event.audience?.clientIds) && event.audience.clientIds.length > 0 ? event.audience.clientIds.join(", ") : "—"}` }
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="dash-item">
              <div className="font-semibold mb-2" style={{ fontWeight: 600, marginBottom: 8 }}>
                Recordatorios del equipo
              </div>
              <p style={{ marginBottom: 0 }}>
                Comparte novedades internas, carga reportes de gestion o establece tareas prioritarias para tu equipo desde esta seccion.
              </p>
            </div>
            <div className="dash-item">
              <div className="font-semibold mb-2" style={{ fontWeight: 600, marginBottom: 8 }}>
                Reproductor Spotify
              </div>
              <iframe
                title="Spotify administracion"
                src="https://open.spotify.com/embed/playlist/1Zf1rz0XX6fyNxKOq4XvgN?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: 8 }}
              />
            </div>
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <RecentDocuments refreshKey={docsRefreshKey} />
        </div>

        {error && (
          <pre
            className="text-red-600 text-sm mt-2"
            style={{
              color: "#fecaca",
              background: "#7f1d1d",
              padding: 12,
              borderRadius: 8,
              marginTop: 12,
            }}
          >
            {typeof error === "string" ? error : JSON.stringify(error, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}






























