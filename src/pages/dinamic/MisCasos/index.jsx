import React, { useEffect, useMemo, useState } from 'react';
import '../../../styles/dashboard.css';
import '../../../styles/mis-casos.css';

const casosEjemplo = [
  { id: 'CJ-001', titulo: 'Acción de tutela — derecho a la salud', estado: 'En curso', juzgado: 'Juzgado 12 Municipal', fecha: '2025-07-10' },
  { id: 'CJ-002', titulo: 'Proceso laboral — despido sin justa causa', estado: 'Audiencia programada', juzgado: 'Juzgado 3 Laboral del Circuito', fecha: '2025-08-02' },
  { id: 'CJ-003', titulo: 'Responsabilidad fiscal — recursos', estado: 'Recurso interpuesto', juzgado: 'Contraloría Distrital', fecha: '2025-08-21' },
  { id: 'CJ-004', titulo: 'Proceso de alimentos — fijación de cuota', estado: 'Admitido', juzgado: 'Juzgado 5 de Familia', fecha: '2025-09-01' },
];

export default function MisCasos() {
  const [selected, setSelected] = useState(null);

  // Cerrar modal con ESC
  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => { if (e.key === 'Escape') setSelected(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  const steps = useMemo(() => [
    'Reunión de documentos e investigación',
    'En escrito de demanda',
    'En radicación',
    'Al despacho: en espera de decisión del juez',
  ], []);

  const activeStep = (estado) => {
    if (!estado) return 1;
    const s = String(estado).toLowerCase();
    if (/(reun|investig)/.test(s)) return 1;
    if (/(escrito|demanda)/.test(s)) return 2;
    if (/(radicaci[óo]n|admitid)/.test(s)) return 3;
    if (/(despacho|juez|decisi[óo]n|audiencia|recurso)/.test(s)) return 4;
    if (/curso/.test(s)) return 2;
    return 2; // valor por defecto
  };

  return (
    <div
      className="dash-page"
      style={{
        backgroundImage:
          "linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      <div className="dash-card" style={{ maxWidth: 900 }}>
        <div className="dash-header">
          <div className="dash-title">Mis casos</div>
        </div>

        <div className="dash-item" style={{ padding: 0 }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="cases-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#1e2a3a' }}>
                  <th style={th}>Radicado</th>
                  <th style={th}>Título</th>
                  <th style={th}>Estado</th>
                  <th style={th}>Despacho</th>
                  <th style={th}>Última actuación</th>
                </tr>
              </thead>
              <tbody>
                {casosEjemplo.map((c) => (
                  <tr key={c.id} onClick={() => setSelected(c)} className="row-clickable">
                    <td style={td}>{c.id}</td>
                    <td style={td}>{c.titulo}</td>
                    <td style={td}><span className="badge" style={badge(c.estado)}>{c.estado}</span></td>
                    <td style={td}>{c.juzgado}</td>
                    <td style={td}>{new Date(c.fecha).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {selected && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="caso-title" onClick={(e) => { if (e.target === e.currentTarget) setSelected(null); }}>
          <div className="modal-card">
            <div className="modal-header">
              <div className="modal-title" id="caso-title">{selected.titulo}</div>
              <button className="btn btn-primary" onClick={() => setSelected(null)}>Cerrar</button>
            </div>
            <div className="modal-body">
              <div className="case-grid">
                <div>
                  <div className="muted">Radicado</div>
                  <div>{selected.id}</div>
                </div>
                <div>
                  <div className="muted">Estado</div>
                  <div><span className="badge" style={badge(selected.estado)}>{selected.estado}</span></div>
                </div>
                <div>
                  <div className="muted">Despacho</div>
                  <div>{selected.juzgado}</div>
                </div>
                <div>
                  <div className="muted">Última actuación</div>
                  <div>{new Date(selected.fecha).toLocaleString()}</div>
                </div>
              </div>

              <div className="timeline">
                {steps.map((label, i) => {
                  const idx = i + 1;
                  const current = activeStep(selected.estado);
                  const done = idx < current;
                  const isActive = idx === current;
                  return (
                    <div className={`timeline-step ${done ? 'done' : ''} ${isActive ? 'active' : ''}`} key={idx}>
                      <div className={`dot ${done ? 'done' : ''} ${isActive ? 'active' : ''}`}></div>
                      {idx < steps.length && <div className={`bar ${idx < current ? 'done' : ''}`}></div>}
                      <div className="label">{idx}. {label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const th = {
  textAlign: 'left',
  padding: '12px 14px',
  borderBottom: '1px solid #394b61',
  fontWeight: 600,
  color: '#e2e8f0',
  whiteSpace: 'nowrap',
};

const td = {
  padding: '12px 14px',
  borderBottom: '1px solid #34465a',
  color: '#e5edf7',
  verticalAlign: 'top',
};

function badge(estado) {
  let bg = '#3b82f6';
  if (/curso/i.test(estado)) bg = '#f59e0b';
  if (/programada|programado/i.test(estado)) bg = '#10b981';
  if (/recurso/i.test(estado)) bg = '#8b5cf6';
  return {
    display: 'inline-block',
    padding: '4px 8px',
    borderRadius: 8,
    background: bg,
    color: '#fff',
    fontSize: 12,
    fontWeight: 600,
  };
}
