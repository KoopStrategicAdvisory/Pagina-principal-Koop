import React, { useState } from 'react';
import '../styles/dashboard.css';
import '../styles/mi-expediente.css';
import { useAuth } from '../context/AuthContext.jsx';
import { normalizeUpperAscii } from '../utils/strings.js';

export default function MiExpediente() {
  const [activeTab, setActiveTab] = useState('docs');
  const { user } = useAuth();
  const displayName = normalizeUpperAscii(user?.name || '');

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
      <div className="dash-card" style={{ width: '100%', maxWidth: 1320 }}>
        <div className="dash-header">
          <div className="dash-title">Mi expediente</div>
        </div>

        {/* Barra de acciones / búsqueda */}
        <div className="dash-item me-subbar">
          <div className="me-hello">Bienvenido: {displayName}</div>
          <select className="me-select" aria-label="Tipo de búsqueda">
            <option>Procesos judiciales</option>
            <option>Demandas</option>
            <option>Audiencias</option>
          </select>
          <input className="me-input" placeholder="Buscar..." />
          <div className="me-actions">
            <button className="btn btn-primary">Registrar</button>
            <button className="btn btn-secondary">Ver información</button>
          </div>
        </div>

        {/* Layout 3 columnas */}
        <div className="me-layout">
          {/* Izquierda: Árbol */}
          <aside className="me-left dash-item">
            <div className="me-head">ESPECIALIDAD: LABORAL</div>
            <div className="me-tree">
              <details open>
                <summary>
                  <span className="me-chev">▶</span>
                  <span>JUZGADO 009 MUNICIPAL DE PEQUEÑAS CAUSAS</span>
                </summary>
                <div className="me-leaf">
                  <div>110014105009-20250011400</div>
                  <div className="me-tag">Cuadernos</div>
                </div>
              </details>
              <details open>
                <summary>
                  <span className="me-chev">▶</span>
                  <span>JUZGADO 003 LABORAL DEL CIRCUITO</span>
                </summary>
                <div className="me-leaf">
                  <div>110014105009-2025011401</div>
                  <div className="me-tag">Cuadernos</div>
                </div>
              </details>
              <details>
                <summary>
                  <span className="me-chev">▶</span>
                  <span>JUZGADO 015 MUNICIPAL DE PEQUEÑAS CAUSAS</span>
                </summary>
                <div className="me-leaf">
                  <div>110014105015-20240208700</div>
                  <div className="me-tag">Cuadernos</div>
                </div>
              </details>
              <details>
                <summary>
                  <span className="me-chev">▶</span>
                  <span>JUZGADO 048 LABORAL DEL CIRCUITO</span>
                </summary>
                <div className="me-leaf">
                  <div>110013105048-2024090000</div>
                  <div className="me-tag">Cuadernos</div>
                </div>
              </details>
            </div>
          </aside>

          {/* Centro: Tabs + Tabla */}
          <main className="me-center dash-item">
            <div className="me-tabs">
              <div
                className={`me-tab ${activeTab === 'docs' ? 'active' : ''}`}
                onClick={() => setActiveTab('docs')}
                role="button"
                tabIndex={0}
              >
                Documentos del Proceso
              </div>
              <div
                className={`me-tab ${activeTab === 'aud' ? 'active' : ''}`}
                onClick={() => setActiveTab('aud')}
                role="button"
                tabIndex={0}
              >
                Audiencias
              </div>
            </div>

            {activeTab === 'docs' && (
              <div className="me-table-wrap">
                <table className="me-table">
                  <thead>
                    <tr>
                      <th style={{ width: 42 }}>
                        <input type="checkbox" />
                      </th>
                      <th>Fecha de registro</th>
                      <th>Documento</th>
                      <th>Tipo documento</th>
                      <th>Tamaño</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>2025-08-12 10:34</td>
                      <td>Auto admisorio</td>
                      <td>PDF</td>
                      <td>1.2 MB</td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>2025-08-18 16:02</td>
                      <td>Memorial de apoderado</td>
                      <td>PDF</td>
                      <td>680 KB</td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>2025-08-21 09:11</td>
                      <td>Oficio – traslado</td>
                      <td>DOCX</td>
                      <td>95 KB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'aud' && (
              <div className="me-table-wrap">
                <table className="me-table">
                  <thead>
                    <tr>
                      <th>Fecha</th>
                      <th>Actuación</th>
                      <th>Juzgado</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2025-09-03 08:00</td>
                      <td>Audiencia inicial</td>
                      <td>JDO 003 Laboral</td>
                      <td><span className="me-badge me-badge-success">Agendada</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </main>

          {/* Derecha: Datos del Proceso */}
          <aside className="me-right dash-item">
            <div className="me-head">Datos del Proceso Judicial</div>
            <div className="me-right-content">
              <div className="me-proc-grid">
                <div className="me-tag">Radicado</div><div>110014105009-20250011400</div>
                <div className="me-tag">Clase</div><div>Laboral – Ordinario</div>
                <div className="me-tag">Demandante</div><div>Juan Pérez</div>
                <div className="me-tag">Demandado</div><div>Acme S.A.S.</div>
                <div className="me-tag">Juzgado</div><div>JDO 009 MPC</div>
                <div className="me-tag">Estado</div><div>En trámite</div>
              </div>
              <hr className="me-hr" />
              <button className="btn btn-primary" style={{ width: '100%' }}>Descargar expediente</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
