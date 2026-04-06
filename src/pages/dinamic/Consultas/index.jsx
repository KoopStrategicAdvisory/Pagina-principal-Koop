import React, { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { createConsultationLog, downloadConsultationPdf, listAllRadicados, listConsultationLogs } from '../../../api/consultas';
import '../../../styles/dashboard.css';

const RESULT_OPTIONS = [
  { value: 'Sin movimiento', label: 'Sin movimiento' },
  { value: 'Actuación nueva', label: 'Actuación nueva' },
  { value: 'Término corriendo', label: 'Término corriendo' },
];

const CONSULTATION_PORTALS = [
  {
    label: 'Consulta de procesos Rama Judicial',
    url: 'https://consultaprocesos.ramajudicial.gov.co/Procesos/Index',
  },
  {
    label: 'Publicaciones Procesales Rama Judicial',
    url: 'https://publicacionesprocesales.ramajudicial.gov.co/',
  },
  {
    label: 'SIUGJ',
    url: 'https://siugj.ramajudicial.gov.co/principalPortal/index.php',
  },
  {
    label: 'Consultas Fiscalía',
    url: 'https://consulta-web.fiscalia.gov.co/',
  },
  {
    label: 'Consultas Jurisdiccionales SuperFinanciera',
    url: 'https://www.superfinanciera.gov.co/formulesuqueja/faces/consulta/jurisdiccional.xhtml',
  },
];

function formatDate(date) {
  return new Date(date).toLocaleString('es-CO', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function ConsultasPage() {
  const { user } = useAuth();
  const [processNumber, setProcessNumber] = useState('');
  const [result, setResult] = useState(RESULT_OPTIONS[0].value);
  const [observation, setObservation] = useState('');
  const [selectedDate, setSelectedDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [records, setRecords] = useState([]);
  const [radicados, setRadicados] = useState([]);
  const [radicadoSearch, setRadicadoSearch] = useState('');
  const [radicadosLoading, setRadicadosLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);

  const isAdminOrLawyer = useMemo(() => {
    const roles = Array.isArray(user?.roles) ? user.roles : [user?.roles];
    return roles.some((role) => ['admin', 'lawyer'].includes(String(role || '').toLowerCase()));
  }, [user]);

  useEffect(() => {
    if (!selectedDate) return;
    setLoading(true);
    listConsultationLogs(selectedDate)
      .then((data) => {
        setRecords(Array.isArray(data.items) ? data.items : []);
      })
      .catch((err) => {
        console.error('Error cargando registros de consultas:', err);
        setMessage({ type: 'error', text: 'No se pudo cargar los registros.' });
      })
      .finally(() => setLoading(false));
  }, [selectedDate]);

  useEffect(() => {
    setRadicadosLoading(true);
    listAllRadicados()
      .then((data) => {
        setRadicados(Array.isArray(data.items) ? data.items : []);
      })
      .catch((err) => {
        console.error('Error cargando radicados:', err);
        setMessage({ type: 'error', text: 'No se pudo cargar los radicados del sistema.' });
      })
      .finally(() => setRadicadosLoading(false));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!processNumber.trim()) {
      setMessage({ type: 'error', text: 'El campo Proceso / Radicado es obligatorio.' });
      return;
    }
    setSaving(true);
    setMessage(null);

    try {
      await createConsultationLog({
        processNumber: processNumber.trim(),
        result,
        observation: observation.trim(),
      });
      setProcessNumber('');
      setObservation('');
      setResult(RESULT_OPTIONS[0].value);
      setMessage({ type: 'success', text: 'Registro guardado correctamente.' });
      const data = await listConsultationLogs(selectedDate);
      setRecords(Array.isArray(data.items) ? data.items : []);
    } catch (err) {
      console.error('Error guardando registro de consulta:', err);
      setMessage({ type: 'error', text: err?.response?.data?.message || 'No se pudo guardar el registro.' });
    } finally {
      setSaving(false);
    }
  };

  const handleDownloadPdf = async () => {
    try {
      setLoading(true);
      const blob = await downloadConsultationPdf(selectedDate);
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `bitacora-diaria-${selectedDate}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error descargando PDF:', err);
      setMessage({ type: 'error', text: 'No se pudo generar el PDF.' });
    } finally {
      setLoading(false);
    }
  };

  if (!isAdminOrLawyer) {
    return (
      <div className="dash-page" style={{ padding: 24 }}>
        <div className="dash-card">
          <div className="font-semibold" style={{ marginBottom: 16 }}>Acceso no autorizado</div>
          <div>No tienes permiso para ver esta sección.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="dash-page" style={{ padding: 24 }}>
      <div className="dash-card" style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="dash-header" style={{ marginBottom: 24 }}>
          <div className="dash-title">Consultas externas y bitácora diaria</div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn btn-secondary btn-sm" type="button" onClick={handleDownloadPdf} disabled={loading}>
              Generar PDF diario
            </button>
            <button
              className="btn btn-primary btn-sm"
              type="button"
              onClick={() => setSelectedDate(new Date().toISOString().slice(0, 10))}
            >
              Hoy
            </button>
          </div>
        </div>

        <div className="dash-item" style={{ marginBottom: 24 }}>
          <div className="font-semibold" style={{ marginBottom: 12 }}>Portales de consulta</div>
          <div style={{ display: 'grid', gap: 10, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {CONSULTATION_PORTALS.map((portal) => (
              <button
                key={portal.label}
                type="button"
                className="btn btn-secondary"
                style={{ justifyContent: 'flex-start' }}
                onClick={() => window.open(portal.url, '_blank', 'noopener')}
              >
                {portal.label}
              </button>
            ))}
          </div>
        </div>

        <div className="dash-item" style={{ marginBottom: 24 }}>
          <div className="font-semibold" style={{ marginBottom: 12 }}>Radicados conocidos</div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 12 }}>
            <label style={{ display: 'grid', gap: 6, flex: '1 1 240px' }}>
              Buscar radicado
              <input
                type="search"
                value={radicadoSearch}
                onChange={(e) => setRadicadoSearch(e.target.value)}
                className="input-field"
                placeholder="Filtrar por número de radicado"
              />
            </label>
            <div style={{ color: '#94a3b8' }}>
              {radicadosLoading ? 'Cargando radicados...' : `${radicados.length} radicados registrados`}
            </div>
          </div>
          <div style={{ display: 'grid', gap: 10, maxHeight: 320, overflowY: 'auto' }}>
            {radicadosLoading ? (
              <div>Cargando radicados...</div>
            ) : radicados.length === 0 ? (
              <div>No hay radicados registrados en el sistema.</div>
            ) : (
              radicados
                .filter((item) =>
                  !radicadoSearch.trim() || item.radicado.toLowerCase().includes(radicadoSearch.trim().toLowerCase())
                )
                .map((item) => (
                  <button
                    type="button"
                    key={item.radicado}
                    className="btn btn-secondary btn-sm"
                    style={{ justifyContent: 'space-between', display: 'flex', gap: 12 }}
                    onClick={() => setProcessNumber(item.radicado)}
                  >
                    <span>{item.radicado}</span>
                    <span style={{ color: '#94a3b8' }}>{item.count} registro(s)</span>
                  </button>
                ))
            )}
          </div>
        </div>

        <div className="dash-item" style={{ marginBottom: 24 }}>
          <div className="font-semibold" style={{ marginBottom: 12 }}>Registro de revisión</div>
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
            <div style={{ display: 'grid', gap: 12, gridTemplateColumns: '1.7fr 1fr' }}>
              <label style={{ display: 'grid', gap: 6 }}>
                Proceso / Radicado *
                <input
                  type="text"
                  value={processNumber}
                  onChange={(e) => setProcessNumber(e.target.value)}
                  className="input-field"
                  placeholder="Ej. 11001-31-05-2025-00123"
                  required
                />
              </label>
              <label style={{ display: 'grid', gap: 6 }}>
                Resultado
                <select
                  value={result}
                  onChange={(e) => setResult(e.target.value)}
                  className="input-field"
                >
                  {RESULT_OPTIONS.map((option) => (
                    <option value={option.value} key={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
            </div>
            <label style={{ display: 'grid', gap: 6 }}>
              Observación breve
              <textarea
                value={observation}
                onChange={(e) => setObservation(e.target.value)}
                className="input-field"
                rows={4}
                placeholder="Detalles relevantes de la revisión"
              />
            </label>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button type="submit" className="btn btn-primary" disabled={saving}>Guardar registro</button>
              <div style={{ alignSelf: 'center', color: '#94a3b8' }}>
                Usuario: {user?.name || user?.email} · Fecha: {selectedDate}
              </div>
            </div>
          </form>
        </div>

        {message && (
          <div className={`notice ${message.type === 'error' ? 'notice-danger' : 'notice-success'}`}>
            {message.text}
          </div>
        )}

        <div className="dash-item">
          <div className="font-semibold" style={{ marginBottom: 12 }}>Registros del día</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', marginBottom: 16 }}>
            <label style={{ display: 'grid', gap: 6 }}>
              Fecha de consulta
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="input-field"
              />
            </label>
          </div>
          {loading ? (
            <div>Cargando registros...</div>
          ) : (
            <div style={{ display: 'grid', gap: 12 }}>
              {records.length === 0 ? (
                <div>No hay registros para esta fecha.</div>
              ) : (
                records.map((record) => (
                  <div key={record._id || `${record.processNumber}-${record.createdAt}`} className="dash-card" style={{ padding: 16, background: '#07101f', border: '1px solid rgba(148,163,184,0.12)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                      <div>
                        <div className="font-semibold">{record.processNumber}</div>
                        <div style={{ color: '#94a3b8', marginTop: 4 }}>{record.result}</div>
                      </div>
                      <div style={{ color: '#94a3b8' }}>{formatDate(record.createdAt)}</div>
                    </div>
                    <div style={{ marginTop: 12, color: '#cbd5e1' }}>{record.observation || 'Sin observación'}</div>
                    <div style={{ marginTop: 12, color: '#94a3b8' }}>
                      Registrado por {record.createdBy?.name || record.createdBy?.email}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
