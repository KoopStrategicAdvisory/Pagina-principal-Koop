import { useMemo, useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext.jsx";
import useCalendarEvents from "../../../../hooks/useCalendarEvents";
import { normalizeUpperAscii } from "../../../../utils/strings.js";
import "../../../../styles/dashboard.css";
import UploadDocumentAction from "../common/UploadDocumentAction.jsx";
import CalendarWidget from "../common/CalendarWidget.jsx";
import RecentDocuments from "../admin/RecentDocuments.jsx";
import ResponsivePdf from "../admin/ResponsivePdf.jsx";
import UnreadMessages from "../admin/UnreadMessages.jsx";

function toDateKey(date) {
  if (!(date instanceof Date)) return null;
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default function UserDashboard() {
  const { user } = useAuth();
  const displayName = normalizeUpperAscii(user?.name || "Bienvenido");
  const [docsRefreshKey, setDocsRefreshKey] = useState(0);
  const [calendarEvents] = useCalendarEvents();
  const [selectedDate, setSelectedDate] = useState(() => new Date());

  const candidateIds = useMemo(() => {
    const values = [
      user?.id,
      user?.sub,
      user?._id,
      user?.documentNumber,
      user?.document_number,
      user?.documento,
      user?.clienteId,
    ];
    const cleaned = values
      .map((value) => (value === undefined || value === null ? '' : String(value).trim()))
      .filter((value) => Boolean(value));
    return Array.from(new Set(cleaned));
  }, [user]);

  const selectedDateKey = useMemo(() => toDateKey(selectedDate), [selectedDate]);

  const visibleEvents = useMemo(() => {
    if (!candidateIds.length) {
      return calendarEvents.filter((event) => event?.audience?.type === 'all');
    }
    return calendarEvents.filter((event) => {
      if (event?.audience?.type === 'all') return true;
      if (event?.audience?.type === 'clients') {
        const targets = Array.isArray(event.audience?.clientIds)
          ? event.audience.clientIds
              .map((value) => (value === undefined || value === null ? '' : String(value).trim()))
              .filter((value) => Boolean(value))
          : [];
        return targets.some((target) => candidateIds.includes(target));
      }
      return false;
    });
  }, [calendarEvents, candidateIds]);

  const dayEvents = useMemo(
    () => visibleEvents.filter((event) => event?.date === selectedDateKey),
    [visibleEvents, selectedDateKey]
  );

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
      <div className="dash-card" style={{ maxWidth: 1080 }}>
        <style>{`
          .user-main-grid { display: grid; gap: 16px; grid-template-columns: 1fr; }
          @media (min-width: 1024px) { .user-main-grid { grid-template-columns: 2fr 1fr; } }
          .user-main-left { display: flex; flex-direction: column; gap: 16px; }
          .user-main-right { display: flex; flex-direction: column; gap: 16px; }
        `}</style>

        <div className="dash-header">
          <div className="dash-title">{displayName}</div>
          <UploadDocumentAction
            buttonClassName="btn btn-primary"
            allowFolderInput={false}
            onUploaded={() => setDocsRefreshKey((value) => value + 1)}
          />
        </div>

        <div className="user-main-grid">
          <div className="user-main-left">
            <div className="dash-item">
              <p style={{ marginBottom: 8 }}>
                Aqui puedes revisar tu material mas reciente y mantenerte al dia con tu caso.
                Si necesitas asistencia adicional, nuestro equipo esta disponible para ayudarte.
              </p>
              <Link className="btn btn-primary btn-sm" to="/mis-casos">
                Ver mis casos
              </Link>
            </div>

            <div className="dash-item" style={{ padding: 0 }}>
              <ResponsivePdf src="/Saludobienvenidaportal.pdf" heightDesktop={480} heightMobile={420} />
            </div>

            <UnreadMessages />
            <RecentDocuments refreshKey={docsRefreshKey} />
          </div>

          <div className="user-main-right">
            <CalendarWidget
              value={selectedDate}
              onChange={setSelectedDate}
              events={visibleEvents}
            />
            <div className="dash-item">
              <div style={{ fontWeight: 600, marginBottom: 8 }}>{selectedDateLabel}</div>
              {dayEvents.length === 0 && (
                <p style={{ margin: 0, opacity: 0.7, fontSize: 14 }}>
                  No hay anotaciones programadas para este dia.
                </p>
              )}
              {dayEvents.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {dayEvents.map((event) => (
                    <div
                      key={event.id}
                      style={{
                        border: '1px solid rgba(148,163,184,0.35)',
                        borderRadius: 10,
                        padding: 10,
                        background: '#1b263b',
                      }}
                    >
                      <div>{event.note}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




