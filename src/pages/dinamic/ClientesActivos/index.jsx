import { useActiveClients } from '../../../hooks/useActiveClients';
import '../../../styles/dashboard.css';
import { SuccessNotice, DangerNotice } from '../../../components/common/Notice';
import { EditForm, EditField, EditRow } from '../../../components/common/EditFormKit';
import MiExpediente from '../../../views/authenticated/MiExpediente';

export default function ClientesActivos() {
  const {
    isAdmin,
    loading,
    error,
    editing,
    setEditing,
    saving,
    search,
    setSearch,
    expandedClient,
    collapseClient,
    assignOpen,
    assignClient,
    admins,
    adminsLoading,
    adminsError,
    selectedAdminId,
    setSelectedAdminId,
    filesOpen,
    filesClient,
    clientFiles,
    loadingFiles,
    confirmDeleteOpen,
    confirmDeleteClient,
    deleting,
    deleteError,
    deletePass,
    setDeletePass,
    notice,
    noticeKind,
    fetchClients,
    filtered,
    getAssignedFor,
    openAssignModal,
    onSaveAssignment,
    onEdit,
    onSave,
    onAskDelete,
    onConfirmDelete,
    openFilesModal,
    folderForClient,
    toggleClientExpansion,
    closeAssignModal,
    closeFilesModal,
    closeDeleteModal,
  } = useActiveClients();

  if (!isAdmin) {
    return (
      <div className="dash-page" style={{ padding: 40 }}>
        <div className="dash-card" style={{ maxWidth: 560 }}>
          <h2 className="dash-title">Acceso restringido</h2>
          <p style={{ marginTop: 12 }}>
            Esta seccion esta disponible solo para administradores.
          </p>
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
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        // respetar el padding-top del .dash-page (deja espacio para navbar fijo)
      }}
    >
      <div className="dash-card" style={{ width: '100%', maxWidth: 1200 }}>
         <style>{`
           @keyframes spin {
             0% { transform: rotate(0deg); }
             100% { transform: rotate(360deg); }
           }
           .only-mobile { display: block; }
           .only-desktop { display: none; }
           @media (min-width: 768px) {
             .only-mobile { display: none; }
             .only-desktop { display: block; }
           }
           @media (max-width: 767px) {
             .mobile-list { display: grid; gap: 10px; }
           }
           /* Header layout */
           .clients-header { display: grid; gap: 10px; align-items: center; }
           .clients-actions { display: grid; grid-template-columns: 1fr auto; gap: 8px; }
           @media (min-width: 768px) {
             .clients-header { grid-template-columns: 1fr auto; }
           }
           @media (max-width: 767px) {
             .clients-actions { grid-template-columns: 1fr; }
             .clients-actions .btn { width: 100%; }
           }
           .mobile-item { border: 1px solid rgba(148,163,184,0.35); border-radius: 10px; overflow: hidden; background: #1b263b; }
           .mobile-item-header { display: flex; align-items: center; justify-content: space-between; padding: 0; cursor: pointer; height: 44px; }
           .mobile-item .btn { border-radius: 10px; width: 100%; }
           .mobile-item-title { flex: 1; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: left; padding: 0 12px; }
           .mobile-item-details { padding: 10px 12px; border-top: 1px solid rgba(148,163,184,0.25); }
           .kv { display: grid; grid-template-columns: 120px 1fr; gap: 8px; font-size: 14px; }
           .kv span { opacity: 0.9; }
           @media (max-width: 480px) {
             .kv { grid-template-columns: 1fr; }
             .kv span { font-size: 12px; opacity: 0.8; }
           }
         `}</style>
        <div className="dash-header clients-header" style={{ marginBottom: 16 }}>
          <div className="dash-title">Clientes activos</div>
          <div className="clients-actions">
            <input
              type="search"
              name="q"
              autoComplete="off"
              placeholder="Buscar por nombre, email, cedula o celular"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                background: '#1b263b',
                color: '#e2e8f0',
                border: '1px solid rgba(148,163,184,0.35)',
                borderRadius: 8,
                padding: '6px 10px',
              }}
            />
            <button className="btn btn-secondary" onClick={fetchClients} disabled={loading}>
              {loading ? 'Actualizando...' : 'Refrescar'}
            </button>
          </div>
        </div>

        {notice && (noticeKind === 'danger' ? (
          <DangerNotice autoHideMs={3500}>{notice}</DangerNotice>
        ) : (
          <SuccessNotice autoHideMs={3500}>{notice}</SuccessNotice>
        ))}
        {error && (<DangerNotice>{error}</DangerNotice>)}

        {/* Desktop table */}
        <div className="dash-item only-desktop" style={{ overflowX: 'auto' }}>
          <table className="me-table" style={{ minWidth: 820 }}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Cedula</th>
                <th>Celular</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center', padding: 16 }}>
                    {loading ? 'Cargando...' : 'No hay clientes activos para mostrar'}
                  </td>
                </tr>
              )}
              {filtered.map((c) => (
                <div key={c.id} style={{ display: 'contents' }}>
                  <tr>
                    <td>
                    <div 
                      style={{ 
                        cursor: 'pointer', 
                        color: '#4fd1c5', 
                        fontWeight: '500',
                        textDecoration: 'underline'
                      }}
                      onClick={() => toggleClientExpansion(c)}
                      onMouseOver={(e) => e.target.style.color = '#6ee7d7'}
                      onMouseOut={(e) => e.target.style.color = '#4fd1c5'}
                    >
                      {c.name || '-'} {expandedClient === c.id ? '▼' : '▶'}
                    </div>
                    <div style={{ fontSize: 12, opacity: 0.75 }}>Admin asignado: {c.assignedAdmin?.name || '—'}</div>
                  </td>
                  <td>{c.email || '-'}</td>
                  <td>{c.documentNumber || '-'}</td>
                  <td>{c.phone || '-'}</td>
                  <td>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => openAssignModal(c)}
                        title={getAssignedFor(c.id) ? `Asignado a ${getAssignedFor(c.id)?.name || ''}` : 'Asignar administrador'}
                      >
                        {getAssignedFor(c.id) ? 'Asignado' : 'Asignar'}
                      </button>
                      <button 
                        className="btn btn-primary btn-sm"
                        onClick={() => openFilesModal(c)}
                      >
                        Archivos
                      </button>
                      <button className="btn btn-primary btn-sm" onClick={() => onEdit(c)}>Editar</button>
                      <button className="btn btn-secondary btn-sm" onClick={() => onAskDelete(c)}>Eliminar</button>
                    </div>
                  </td>
                </tr>
                
                {/* Fila expandible con archivos */}
                expandedClient === c.id && (
                  <tr key={`expanded-${c.id}`}>
                    <td colSpan={5} style={{ padding: 0, background: '#0c1530' }}>
                        <div style={{ padding: '20px' }}>
                          <div style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            marginBottom: '16px'
                          }}>
                            <h4 style={{ margin: 0, color: '#e2e8f0' }}>
                              Archivos y Carpetas - {c.name}
                            </h4>
                            <button 
                              className="btn btn-secondary btn-sm"
                              onClick={collapseClient}
                            >
                              Cerrar
                            </button>
                          </div>
                          
                          {loadingFiles[c.id] ? (
                            <div style={{ 
                              textAlign: 'center', 
                              padding: '40px',
                              color: '#cbd5e1'
                            }}>
                              <div style={{ 
                                display: 'inline-block',
                                width: '20px',
                                height: '20px',
                                border: '2px solid #4fd1c5',
                                borderTop: '2px solid transparent',
                                borderRadius: '50%',
                                animation: 'spin 1s linear infinite',
                                marginRight: '8px'
                              }}></div>
                              Cargando archivos...
                            </div>
                          ) : (
                            <div style={{ 
                              border: '1px solid #394b61', 
                              borderRadius: '8px', 
                              overflow: 'hidden',
                              background: '#1b263b'
                            }}>
                              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead style={{ background: '#0c1530' }}>
                                  <tr>
                                    <th style={{ padding: '12px 16px', fontWeight: '600', textAlign: 'left' }}>Nombre</th>
                                    <th style={{ padding: '12px 16px', fontWeight: '600', textAlign: 'left' }}>Tipo</th>
                                    <th style={{ padding: '12px 16px', fontWeight: '600', textAlign: 'left' }}>Fecha</th>
                                    <th style={{ padding: '12px 16px', fontWeight: '600', textAlign: 'left' }}>Tamaño</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {(!clientFiles[c.id] || clientFiles[c.id].length === 0) ? (
                                    <tr>
                                      <td colSpan={4} style={{ 
                                        textAlign: 'center', 
                                        padding: '40px',
                                        color: '#cbd5e1'
                                      }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                          <div>No hay archivos o carpetas para mostrar</div>
                                          <div style={{ fontSize: '14px', opacity: 0.7 }}>
                                            Haz clic en "Archivos" para gestionar documentos
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  ) : (
                                    clientFiles[c.id]
                                      .filter((f) => {
                                        const key = f.key || '';
                                        const folder = folderForClient(c);
                                        const isRootClientFolder = key === folder && f.isFolder;
                                        return !isRootClientFolder;
                                      })
                                      .map((f) => {
                                        const dt = f.lastModified ? new Date(f.lastModified) : (f.createdTime ? new Date(f.createdTime) : null);
                                        const isFolder = f.isFolder || f.key?.endsWith('/') || f.name?.endsWith('/');
                                        
                                        // Extraer solo el nombre de la carpeta/archivo, sin la ruta completa
                                        let name = f.name || (f.key || '').split('/').pop();
                                        if (isFolder && name && folderForClient(c)) {
                                          const clientPrefix = folderForClient(c).replace(/\/$/, '');
                                          if (f.key && f.key.startsWith(clientPrefix)) {
                                            const relativePath = f.key.replace(clientPrefix + '/', '');
                                            name = relativePath.replace(/\/$/, '');
                                          }
                                        }
                                        
                                        const sizeKb = typeof f.size === 'number' ? Math.max(1, Math.round(f.size / 1024)) : null;
                                        
                                        return (
                                          <tr key={f.key || f.id} style={{ 
                                            borderBottom: '1px solid #394b61'
                                          }}>
                                            <td style={{ padding: '12px 16px' }}>
                                              <span style={{ 
                                                color: isFolder ? '#fc771c' : '#e2e8f0',
                                                fontWeight: '500'
                                              }}>
                                                {name}
                                              </span>
                                            </td>
                                            <td style={{ padding: '12px 16px' }}>
                                              <span style={{ 
                                                color: isFolder ? '#fc771c' : '#4fd1c5',
                                                fontWeight: '500'
                                              }}>
                                                {isFolder ? 'Carpeta' : 'Archivo'}
                                              </span>
                                            </td>
                                            <td style={{ padding: '12px 16px', color: '#cbd5e1' }}>
                                              {dt ? dt.toLocaleDateString('es-CO') : '-'}
                                            </td>
                                            <td style={{ padding: '12px 16px', color: '#cbd5e1' }}>
                                              {sizeKb ? `${sizeKb} KB` : '-'}
                                            </td>
                                          </tr>
                                        );
                                      })
                                  )}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </div>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile list with expandable details */}
        <div className="dash-item only-mobile mobile-list">
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: 8 }}>
              {loading ? 'Cargando...' : 'No hay clientes activos para mostrar'}
            </div>
          )}
          {filtered.map((c) => {
            const isOpen = expandedClient === c.id;
            return (
              <div key={c.id} className="mobile-item">
                <button
                  type="button"
                  className="btn btn-primary btn-sm mobile-item-header"
                  onClick={() => toggleClientExpansion(c)}
                  aria-expanded={isOpen}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <div className="mobile-item-title">{c.name || '-'}</div>
                  <div style={{ opacity: 0.9, fontSize: 12, paddingRight: 10 }}>{isOpen ? '▼' : '▶'}</div>
                </button>
                {isOpen && (
                  <div className="mobile-item-details">
                    <div className="kv"><span>Email</span><div>{c.email || '-'}</div></div>
                    <div className="kv" style={{ marginTop: 6 }}><span>Cédula</span><div>{c.documentNumber || '-'}</div></div>
                    <div className="kv" style={{ marginTop: 6 }}><span>Celular</span><div>{c.phone || '-'}</div></div>
                    <div className="kv" style={{ marginTop: 6 }}><span>Admin asignado</span><div>{c.assignedAdmin?.name || '—'}</div></div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => openAssignModal(c)}
                        style={{ marginRight: 8 }}
                        title={getAssignedFor(c.id) ? `Asignado a ${getAssignedFor(c.id)?.name || ''}` : 'Asignar administrador'}
                      >
                        {getAssignedFor(c.id) ? 'Asignado' : 'Asignar'}
                      </button>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => openFilesModal(c)}
                        style={{ marginRight: 8 }}
                      >
                        Archivos
                      </button>
                      <button className="btn btn-primary btn-sm" onClick={() => onEdit(c)} style={{ marginRight: 8 }}>Editar</button>
                      <button className="btn btn-secondary btn-sm" onClick={() => onAskDelete(c)}>Eliminar</button>
                    </div>
                    
                    {/* Sección de archivos en móvil */}
                    <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #394b61' }}>
                      <h5 style={{ margin: '0 0 12px 0', color: '#e2e8f0', fontSize: '16px' }}>
                        Archivos y Carpetas
                      </h5>
                      
                      {loadingFiles[c.id] ? (
                        <div style={{ 
                          textAlign: 'center', 
                          padding: '20px',
                          color: '#cbd5e1'
                        }}>
                          <div style={{ 
                            display: 'inline-block',
                            width: '16px',
                            height: '16px',
                            border: '2px solid #4fd1c5',
                            borderTop: '2px solid transparent',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite',
                            marginRight: '8px'
                          }}></div>
                          Cargando archivos...
                        </div>
                      ) : (
                        <div>
                          {(!clientFiles[c.id] || clientFiles[c.id].length === 0) ? (
                            <div style={{ 
                              textAlign: 'center', 
                              padding: '20px',
                              color: '#cbd5e1',
                              fontSize: '14px'
                            }}>
                              <div>No hay archivos o carpetas para mostrar</div>
                              <div style={{ fontSize: '12px', opacity: 0.7, marginTop: '4px' }}>
                                Haz clic en "Archivos" para gestionar documentos
                              </div>
                            </div>
                          ) : (
                            <div style={{ 
                              border: '1px solid #394b61', 
                              borderRadius: '6px', 
                              overflow: 'hidden',
                              background: '#1b263b'
                            }}>
                              {clientFiles[c.id]
                                .filter((f) => {
                                  const key = f.key || '';
                                  const folder = folderForClient(c);
                                  const isRootClientFolder = key === folder && f.isFolder;
                                  return !isRootClientFolder;
                                })
                                .map((f) => {
                                  const dt = f.lastModified ? new Date(f.lastModified) : (f.createdTime ? new Date(f.createdTime) : null);
                                  const isFolder = f.isFolder || f.key?.endsWith('/') || f.name?.endsWith('/');  
                                  
                                  // Extraer solo el nombre de la carpeta/archivo, sin la ruta completa
                                  let name = f.name || (f.key || '').split('/').pop();
                                  if (isFolder && name && folderForClient(c)) {
                                    const clientPrefix = folderForClient(c).replace(/\/$/, '');
                                    if (f.key && f.key.startsWith(clientPrefix)) {
                                      const relativePath = f.key.replace(clientPrefix + '/', '');
                                      name = relativePath.replace(/\/$/, '');
                                    }
                                  }
                                  
                                  const sizeKb = typeof f.size === 'number' ? Math.max(1, Math.round(f.size / 1024)) : null;
                                  
                                  return (
                                    <div key={f.key || f.id} style={{ 
                                      padding: '12px',
                                      borderBottom: '1px solid #394b61',
                                      display: 'flex',
                                      justifyContent: 'space-between',
                                      alignItems: 'center'
                                    }}>
                                      <div>
                                        <div style={{ 
                                          color: isFolder ? '#fc771c' : '#e2e8f0',
                                          fontWeight: '500',
                                          fontSize: '14px'
                                        }}>
                                          {name}
                                        </div>
                                        <div style={{ 
                                          color: '#cbd5e1',
                                          fontSize: '12px',
                                          marginTop: '2px'
                                        }}>
                                          {isFolder ? 'Carpeta' : 'Archivo'} • {dt ? dt.toLocaleDateString('es-CO') : '-'} • {sizeKb ? `${sizeKb} KB` : '-'}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {editing && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50,
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setEditing(null); }}
        >
          <div className="dash-card" style={{ width: '100%', maxWidth: 560, padding: 16 }}>
            <div className="dash-header" style={{ marginBottom: 12 }}>
              <div className="dash-title">Editar cliente</div>
            </div>
            <div className="dash-item">
              <EditForm>
                <EditField
                  label="Nombre"
                  value={editing.name}
                  onChange={(e) => setEditing((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Nombre y apellidos"
                />
                <EditField
                  label="Email"
                  type="email"
                  value={editing.email}
                  onChange={() => {}}
                  inputProps={{ readOnly: true }}
                />
                <EditRow cols={2}>
                  <EditField
                    label="Cédula"
                    value={editing.documentNumber}
                    onChange={(e) => setEditing((prev) => ({ ...prev, documentNumber: e.target.value }))}
                    placeholder="Ej: 80153356"
                  />
                  <EditField
                    label="Celular"
                    value={editing.phone}
                    onChange={(e) => setEditing((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="Ej: 300 123 4567"
                  />
                </EditRow>
              </EditForm>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12 }}>
              <button className="btn btn-secondary" onClick={() => setEditing(null)} disabled={saving}>
                Cancelar
              </button>
              <button className="btn btn-primary" onClick={onSave} disabled={saving}>
                {saving ? 'Guardando...' : 'Guardar cambios'}
              </button>
            </div>
          </div>
        </div>
      )}

       {/* Componente de gestión de archivos */}
      {filesOpen && (
        <div 
          style={{ 
            position: 'fixed', 
            inset: 0, 
            background: 'rgba(0,0,0,0.6)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            zIndex: 60, 
            padding: 16 
          }}
          onClick={closeFilesModal}
        >
          <div 
            style={{ 
              width: '100%', 
              maxWidth: '95vw', 
              maxHeight: '95vh',
              background: 'transparent'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <MiExpediente 
              selectedClient={filesClient}
              isModal={true}
              onClose={closeFilesModal}
            />
          </div>
        </div>
      )}

      {assignOpen && assignClient && (
        <div
          role="dialog"
          aria-modal="true"
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 60, padding: 16 }}
          onClick={(e) => { if (e.target === e.currentTarget) { closeAssignModal(); } }}
        >
          <div className="dash-card" style={{ width: '100%', maxWidth: 560 }}>
            <div className="dash-header" style={{ marginBottom: 8 }}>
              <div className="dash-title">Asignar administrador</div>
            </div>
            <div className="dash-item" style={{ display: 'grid', gap: 10 }}>
              <div style={{ fontSize: 14, opacity: 0.85 }}>Cliente: <strong>{assignClient.name}</strong> <span style={{ opacity: 0.7 }}>({assignClient.id})</span></div>
              {adminsError && (
                <div style={{ background: '#7f1d1d', color: '#fecaca', padding: 8, borderRadius: 6 }}>{adminsError}</div>
              )}
              <label style={{ display: 'grid', gap: 6 }}>
                <span>Selecciona un admin</span>
                <select
                  value={selectedAdminId}
                  onChange={(e)=>setSelectedAdminId(e.target.value)}
                  disabled={adminsLoading}
                  style={{ background: '#1b263b', color: '#e2e8f0', border: '1px solid rgba(148,163,184,0.35)', borderRadius: 8, padding: '8px 10px' }}
                >
                  <option value="">— Sin asignar —</option>
                  {admins.map((a)=> (
                    <option key={a.id} value={a.id}>{a.name} — {a.email}</option>
                  ))}
                </select>
              </label>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12 }}>
              <button className="btn btn-secondary" onClick={closeAssignModal} disabled={adminsLoading}>Cancelar</button>
              <button className="btn btn-primary" onClick={onSaveAssignment} disabled={adminsLoading}>Guardar</button>
            </div>
          </div>
        </div>
      )}

      {confirmDeleteOpen && confirmDeleteClient && (
        <div
          role="dialog"
          aria-modal="true"
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 65, padding: 16 }}
          onClick={(e) => { if (e.target === e.currentTarget) { closeDeleteModal(); } }}
        >
          <div className="dash-card" style={{ width: '100%', maxWidth: 520 }}>
            <div className="dash-header" style={{ marginBottom: 8 }}>
              <div className="dash-title">Confirmar eliminación</div>
            </div>
              <div className="dash-item" style={{ display: 'grid', gap: 10 }}>
                <div>
                  ¿Eliminar al cliente <strong>{confirmDeleteClient.name || confirmDeleteClient.email || confirmDeleteClient.id}</strong>?
                </div>
                <div style={{ fontSize: 13, opacity: 0.85 }}>
                  Esta acción eliminará el contenedor del cliente y su carpeta S3 asociada (clientes/{String(confirmDeleteClient.documentNumber || '').trim()}).
                </div>
                {/* Hidden username trap to discourage browser autofill on page search */}
                <input
                  type="text"
                  autoComplete="username"
                  value=" "
                  readOnly
                  aria-hidden="true"
                  style={{ position: 'absolute', opacity: 0, height: 0, width: 0, pointerEvents: 'none' }}
                />
                <label style={{ display: 'grid', gap: 6 }}>
                  <span>Contraseña de eliminación</span>
                  <input
                    type="password"
                    name="delete-confirm"
                    autoComplete="new-password"
                    data-lpignore="true"
                    data-1p-ignore="true"
                    value={deletePass}
                    onChange={(e)=>setDeletePass(e.target.value)}
                    placeholder="eliminarclientekoop"
                    style={{ background: '#1b263b', color: '#e2e8f0', border: '1px solid rgba(148,163,184,0.35)', borderRadius: 8, padding: '8px 10px' }}
                  />
                </label>
                {deleteError && (
                  <div style={{ background: '#7f1d1d', color: '#fecaca', padding: 8, borderRadius: 6 }}>{deleteError}</div>
                )}
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12 }}>
                <button className="btn btn-secondary" onClick={closeDeleteModal} disabled={deleting}>Cancelar</button>
                <button className="btn btn-primary" onClick={onConfirmDelete} disabled={deleting || !deletePass}>{deleting ? 'Eliminando...' : 'Eliminar'}</button>
              </div>
          </div>
        </div>
      )}
      
      {/* Estilos CSS */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
