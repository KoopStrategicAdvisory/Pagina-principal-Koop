import { useMemo, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/dashboard.css';

const ALLOWED_ROLES = ['admin', 'user'];
function normalizeRoles(value, { defaultRole = 'user' } = {}) {
  const normalizedDefault = String(defaultRole || 'user').trim().toLowerCase();
  const safeDefault = ALLOWED_ROLES.includes(normalizedDefault) ? normalizedDefault : 'user';
  const roles = Array.isArray(value) ? value : [value];
  const normalized = roles
    .map((role) => String(role || '').trim().toLowerCase())
    .filter((role) => ALLOWED_ROLES.includes(role));
  if (normalized.includes('admin')) return ['admin'];
  if (normalized.includes('user')) return ['user'];
  return [safeDefault];
}

function useIsAdmin(user) {
  const roles = normalizeRoles(user?.roles);
  return roles.includes('admin');
}

const USERS = {
  derly: { name: 'Derly Ramírez', initials: 'DR', color: '#0ea5e9' },
  juan: { name: 'Juan F. Rey', initials: 'JR', color: '#22d3ee' },
  valentina: { name: 'Valentina M.', initials: 'VM', color: '#a78bfa' },
};

const SAMPLE_TASKS = [
  { id:'T-901', title:'Radicar tutela por vacaciones compensadas', client:'AGG MRO', status:'en-curso', priority:'alta', due:'2025-09-22', assignee:'derly', tags:['Laboral','Audiencia'], radicado:'11001-31-05-2025-00123' },
  { id:'T-902', title:'Revisión contrato Promesa de Compraventa (Apto 501)', client:'Ramírez – Mendoza', status:'pendiente', priority:'media', due:'2025-09-20', assignee:'juan', tags:['Civil','Notaría 27'], radicado:null },
  { id:'T-903', title:'Concepto: Nota crédito RADIAN ya aceptada', client:'Tus-Cuentas', status:'pendiente', priority:'alta', due:'2025-09-19', assignee:'juan', tags:['Tributario','DIAN'], radicado:null },
  { id:'T-904', title:'Solicitud CHIP y verificación Folio', client:'Inmobiliario', status:'hecho', priority:'baja', due:'2025-09-15', assignee:'valentina', tags:['PH','Certificados'], radicado:'50C-2024-009988' },
  { id:'T-905', title:'Memorial de sustitución de comprador (Otrosí)', client:'Villa Carolina', status:'en-curso', priority:'media', due:'2025-09-23', assignee:'derly', tags:['Civil','Minuta'], radicado:null },
];

function fmtDate(iso) {
  try { return new Date(iso + 'T00:00:00').toLocaleDateString('es-CO', { year:'numeric', month:'short', day:'2-digit' }); } catch { return iso; }
}

function isOverdue(iso) {
  try { return new Date(iso) < new Date(new Date().toDateString()); } catch { return false; }
}

export default function AdminTareas() {
  const { user } = useAuth();
  const isAdmin = useIsAdmin(user);

  const [q, setQ] = useState('');
  const [me, setMe] = useState('derly');
  const [status, setStatus] = useState('all');
  const [viewMine, setViewMine] = useState(true);
  const [demoNoTasks, setDemoNoTasks] = useState(false);

  const dataset = useMemo(() => (demoNoTasks ? [] : SAMPLE_TASKS), [demoNoTasks]);

  const filtered = useMemo(() => {
    let data = dataset.slice();
    if (viewMine) data = data.filter((t) => t.assignee === me);
    if (status !== 'all') data = data.filter((t) => t.status === status);
    const needle = q.trim().toLowerCase();
    if (needle) {
      data = data.filter((t) => [t.title, t.client, t.radicado, (t.tags || []).join(' ')].filter(Boolean).join(' ').toLowerCase().includes(needle));
    }
    return data;
  }, [dataset, viewMine, me, status, q]);

  const countLabel = `${filtered.length} resultado${filtered.length === 1 ? '' : 's'}`;

  if (!isAdmin) {
    return (
      <div className="dash-page" style={{ padding: 40 }}>
        <div className="dash-card" style={{ maxWidth: 560 }}>
          <h2 className="dash-title">Acceso restringido</h2>
          <p style={{ marginTop: 12 }}>Esta sección está disponible solo para administradores.</p>
        </div>
      </div>
    );
  }

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
      <div className="dash-card" style={{ width: '100%', maxWidth: 1200 }}>
        <style>{`
          :root{ --ring: 0 0 0 3px rgb(34 211 238 / 0.25); --radius:18px; }
          .tasks-container{max-width:1100px;margin:0 auto}
          .tasks-header{display:flex;gap:12px;align-items:center;justify-content:space-between;margin-bottom:18px}
          .brand{display:flex;gap:12px;align-items:center}
          .brand .logo{width:38px;height:38px;border-radius:12px;background:linear-gradient(135deg,#22d3ee,#3b82f6);display:grid;place-items:center;box-shadow:0 8px 24px rgba(34,211,238,.25)}
          .brand .logo svg{filter:drop-shadow(0 2px 6px rgba(0,0,0,.25))}
          .brand h1{font-size:18px;margin:0;font-weight:700;letter-spacing:.2px}
          .toolbar{display:flex;gap:10px;flex-wrap:wrap}
          .toolbar .field{position:relative}
          .tasks-input, .tasks-select{background:#0c1530;border:1px solid #1e2a4a;color:#e5e7eb;padding:10px 12px;border-radius:12px;outline:none;min-width:200px}
          .tasks-input:focus, .tasks-select:focus{box-shadow:var(--ring);border-color:#22d3ee}
          .grid{display:grid;grid-template-columns:1fr;gap:16px}
          @media(min-width:780px){.grid{grid-template-columns:260px 1fr}}
          .panel{background:linear-gradient(180deg,rgba(255,255,255,.02),rgba(255,255,255,.01));border:1px solid rgba(255,255,255,.06);border-radius:var(--radius);box-shadow:0 10px 30px rgba(0,0,0,.35)}
          .sidebar{padding:16px}
          .sidebar h2{margin:8px 4px 10px;font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:#9fb0c8}
          .chips{display:flex;flex-wrap:wrap;gap:8px}
          .chip{padding:8px 10px;border-radius:999px;background:#0c1530;border:1px solid #1e2a4a;color:#c7d2fe;font-size:12px;cursor:pointer;user-select:none}
          .chip[data-active="true"]{background:linear-gradient(135deg,rgba(34,211,238,.15),rgba(59,130,246,.15));border-color:#234072}
          .board{padding:16px}
          .board-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
          .board-header h3{margin:0;font-size:16px}
          .count{font-size:12px;color:#94a3b8}
          .cards{display:grid;grid-template-columns:1fr;gap:12px}
          @media(min-width:560px){.cards{grid-template-columns:repeat(2,1fr)}}
          @media(min-width:980px){.cards{grid-template-columns:repeat(3,1fr)}}
          .card{background:linear-gradient(180deg,rgba(18,28,55,.9),rgba(12,20,40,.95));border:1px solid rgba(255,255,255,.06);border-radius:16px;padding:14px;display:flex;flex-direction:column;gap:10px;transition:transform .15s ease, border-color .15s ease}
          .card:hover{transform:translateY(-2px);border-color:rgba(34,211,238,.35)}
          .title{font-weight:600;line-height:1.25;margin:0}
          .meta{display:flex;gap:8px;flex-wrap:wrap}
          .badge{font-size:11px;border-radius:999px;padding:4px 8px;border:1px solid rgba(255,255,255,.1);background:#0c1530;color:#cbd5e1}
          .badge[data-variant="high"]{border-color:rgba(239,68,68,.35);background:rgba(239,68,68,.12);color:#fecaca}
          .badge[data-variant="medium"]{border-color:rgba(245,158,11,.35);background:rgba(245,158,11,.12);color:#fde68a}
          .badge[data-variant="low"]{border-color:rgba(34,197,94,.35);background:rgba(34,197,94,.12);color:#bbf7d0}
          .badge[data-variant="due"]{border-color:rgba(34,211,238,.35);background:rgba(34,211,238,.10);color:#67e8f9}
          .assignee{display:flex;align-items:center;gap:8px;margin-top:auto}
          .avatar{width:24px;height:24px;border-radius:999px;background:#0ea5e9;display:grid;place-items:center;font-size:12px;font-weight:700}
          .assignee small{color:#94a3b8}
          .empty{display:grid;place-items:center;padding:56px;text-align:center;color:#9fb0c8}
          .empty svg{margin-bottom:12px;opacity:.9}
          .footer-actions{margin-top:18px;display:flex;justify-content:flex-end}
          .link{font-size:12px;color:#7dd3fc;text-decoration:none;border-bottom:1px dashed rgba(125,211,252,.45)}
        `}</style>

        <div className="tasks-container">
          <div className="tasks-header">
            <div className="brand" aria-label="Koop Strategic Advisory">
              <div className="logo" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L20 6V18L12 22L4 18V6L12 2Z" stroke="white" strokeWidth="2"/>
                  <path d="M12 7V17" stroke="white" strokeWidth="2"/>
                  <path d="M7 9L12 12L17 9" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <h1>Tablero de Tareas</h1>
            </div>
            <div className="toolbar" role="search">
              <div className="field">
                <input className="tasks-input" type="search" placeholder="Buscar por asunto, cliente o radicado…" aria-label="Buscar" value={q} onChange={(e)=>setQ(e.target.value)} />
              </div>
              <div className="field">
                <select className="tasks-select" aria-label="Usuario actual" value={me} onChange={(e)=>setMe(e.target.value)}>
                  <option value="derly">Derly Ramírez (Abogada)</option>
                  <option value="juan">Juan F. Rey (Socio)</option>
                  <option value="valentina">Valentina Martínez (Asistente)</option>
                </select>
              </div>
              <div className="field">
                <select className="tasks-select" aria-label="Estado" value={status} onChange={(e)=>setStatus(e.target.value)}>
                  <option value="all">Todos los estados</option>
                  <option value="pendiente">Pendiente</option>
                  <option value="en-curso">En curso</option>
                  <option value="hecho">Hecho</option>
                </select>
              </div>
            </div>
          </div>

          <main className="grid" aria-live="polite">
            <aside className="sidebar panel">
              <h2>Filtros rápidos</h2>
              <div className="chips">
                <button className="chip" onClick={()=>setStatus('all')}>Hoy</button>
                <button className="chip" onClick={()=>setStatus('all')}>Vencidos</button>
                <button className="chip" onClick={()=>setStatus('all')}>Alta prioridad</button>
                <button className="chip" onClick={()=>setStatus('all')}>Cliente corporativo</button>
              </div>
              <h2 style={{ marginTop: 18 }}>Vistas</h2>
              <div className="chips">
                <button className="chip" data-active={viewMine ? 'true' : 'false'} onClick={()=>setViewMine(true)}>Mis tareas</button>
                <button className="chip" data-active={!viewMine ? 'true' : 'false'} onClick={()=>setViewMine(false)}>Todas</button>
              </div>
            </aside>

            <section className="board panel">
              <div className="board-header">
                <h3>{viewMine ? 'Mis tareas' : 'Todas las tareas'}</h3>
                <span className="count">{countLabel}</span>
              </div>

              {filtered.length === 0 ? (
                <div className="empty">
                  <svg width="72" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 7H20V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7Z" stroke="#67e8f9" strokeWidth="1.5"/>
                    <path d="M9 3H15V7H9V3Z" stroke="#67e8f9" strokeWidth="1.5"/>
                    <path d="M8 12H16" stroke="#94a3b8" strokeWidth="1.5"/>
                    <path d="M8 16H13" stroke="#94a3b8" strokeWidth="1.5"/>
                  </svg>
                  <div>
                    <strong>No tienes tareas asignadas</strong>
                    <p style={{ margin: '.35rem 0 0', fontSize: 14, color: '#a5b4fc' }}>Cuando te asignen una tarea aparecerá aquí.</p>
                  </div>
                </div>
              ) : (
                <div className="cards">
                  {filtered.map((t) => {
                    const u = USERS[t.assignee] || { name: t.assignee, initials: (t.assignee || '?').slice(0,2).toUpperCase(), color: '#0ea5e9' };
                    const priorityVariant = t.priority === 'alta' ? 'high' : t.priority === 'media' ? 'medium' : 'low';
                    const statusTxt = t.status === 'en-curso' ? 'En curso' : t.status === 'hecho' ? 'Hecho' : 'Pendiente';
                    return (
                      <article key={t.id} className="card" role="article" aria-label={t.title}>
                        <h4 className="title">{t.title}</h4>
                        <div className="meta">
                          <span className="badge" data-variant={priorityVariant}>Prioridad: {t.priority}</span>
                          <span className="badge" data-variant="due">{isOverdue(t.due) ? 'Vencida' : 'Vence'}: {fmtDate(t.due)}</span>
                          <span className="badge">Estado: {statusTxt}</span>
                          {t.radicado ? <span className="badge">Radicado: {t.radicado}</span> : null}
                          <span className="badge">Cliente: {t.client}</span>
                          {(t.tags || []).map((tag) => <span key={tag} className="badge">{tag}</span>)}
                        </div>
                        <div className="assignee" aria-label="Responsable">
                          <div className="avatar" style={{ background: u.color }} aria-hidden="true">{u.initials}</div>
                          <small>Asignada a <strong>{u.name}</strong></small>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}

              <div className="footer-actions">
                <button className="link" onClick={() => setDemoNoTasks((v) => !v)}>(Demo) Alternar escenario sin tareas</button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

