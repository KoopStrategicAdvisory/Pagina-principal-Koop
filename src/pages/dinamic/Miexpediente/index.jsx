import React from 'react';
import '../../../styles/dashboard.css';
import '../../../styles/mi-expediente.css';
import { useMiExpediente } from '../../../hooks/useMiExpediente';
import { SuccessNotice, DangerNotice } from '../../../components/common/Notice.jsx';

const actionChipBase = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
  padding: '6px 12px',
  fontSize: 12,
  lineHeight: 1.1,
  borderRadius: 999,
  minHeight: 28,
};

const actionChipPrimary = {
  ...actionChipBase,
  fontWeight: 600,
  color: '#0f172a',
  background: 'linear-gradient(135deg, #2dd4bf, #0ea5e9)',
  border: '1px solid rgba(14,165,233,0.4)',
  boxShadow: '0 3px 6px rgba(14,165,233,0.25)',
};

const actionChipSecondary = {
  ...actionChipBase,
  color: '#e2e8f0',
  background: 'rgba(15,23,42,0.65)',
  border: '1px solid rgba(148,163,184,0.35)',
};

export default function MiExpediente({ selectedClient: propSelectedClient, isModal = false, onClose }) {
  const {
    activeTab,
    assignedClients,
    assignedLoading,
    assignedError,
    audienceData,
    audiences,
    cancelFileUpload,
    closePreviewModal,
    customFileName,
    displayName,
    docs,
    error,
    expandedClients,
    expandedUserFolders,
    fileInputRef,
    folderToDelete,
    getFallbackUrl,
    handleCreateProcess,
    handleDeleteFolder,
    handleDeleteSelected,
    handleFileUpload,
    handleFileUploadChange,
    handlePreviewDocument,
    handleRenameFile,
    handleShareDocument,
    handleProcessNameChange,
    handleCustomFileNameChange,
    handleUserFolderAccordionClick,
    handleUserFolderClick,
    handleDownloadDocument,
    isAdmin,
    loading,
    loadingFolders,
    loadingUserFolders,
    multiSelectMode,
    noticeMessage,
    onClickUpload,
    onCreateProcess,
    onDeleteFile,
    onFolderClick,
    onClientClick,
    onPreviewDocument,
    onSaveProcessInfo,
    onShareDocument,
    onDeleteFolder,
    onDownloadDocument,
    onRenameFile,
    toggleMultiSelectMode,
    toggleItemSelection,
    openCreateProcess,
    openDeleteConfirm,
    openProcessInfo,
    openAudienceModal,
    previewDoc,
    previewError,
    previewLoading,
    reloadCurrentFolder,
    selectedClient,
    selectedFile,
    selectedFileForAction,
    selectedFolder,
    selectedItems,
    selectedUserFolder,
    selectAllItems,
    setActiveTab,
    setAudienceData,
    setAudiences,
    setClientFolders,
    setDeleteFolder: setFolderToDelete,
    setSelectedClient,
    setSelectedFolder,
    setShowAudienceModal,
    setShowCreateProcess,
    setShowDeleteConfirm,
    setShowDeleteFile,
    setShowDeleteFolderModal,
    setShowErrorNotice,
    setShowProcessInfo,
    setShowSuccessNotice,
    setShowFileNameInput,
    setUserFolders,
    setViewingUserFolder: setSelectedUserFolder,
    setCustomFileName,
    setNewProcessName,
    setNewProcessType,
    setNoticeMessage,
    setDocs,
    setError,
    setLoading,
    setWarning,
    setSelectedFile,
    setSelectedFileForAction,
    setProcessData,
    userFolders,
    clientFolders,
    newProcessName,
    newProcessType,
    creatingProcess,
    deletingFolder,
    showAudienceModal,
    showCreateProcess,
    showDeleteConfirm,
    showDeleteFile,
    showErrorNotice,
    showProcessInfo,
    showFileNameInput,
    showRenameFile,
    showSuccessNotice,
    warning,
  } = useMiExpediente({ propSelectedClient, isModal });

  const handleClientAccordionClick = (client) => {
    onClientClick(client);
  };

  /* const onFileChangeOld = async (e) => {
    const f = e.target?.files?.[0];
    if (!f) return;
    try {
      setLoading(true);
      setError(null);
      setShowErrorNotice(false);
      setShowSuccessNotice(false);
      // Validar que se haya seleccionado una subcarpeta especÃ­fica
      let subfolder = null;
      let errorMessage = null;
      
      if (isAdmin) {
        // Para administradores: debe haber un cliente y una carpeta seleccionados
        if (!selectedClient?.documentNumber) {
          errorMessage = 'Debes seleccionar un cliente primero';
        } else if (!selectedFolder?.path) {
          errorMessage = 'Debes seleccionar una carpeta especÃ­fica del proceso judicial para subir documentos. No se permiten archivos sueltos en la carpeta del cliente.';
        } else {
          subfolder = selectedFolder.path;
        }
      } else {
        // Para usuarios regulares: debe haber una carpeta de usuario seleccionada
        if (!selectedUserFolder?.path) {
          errorMessage = 'Debes seleccionar una carpeta especÃ­fica del proceso judicial para subir documentos. No se permiten archivos sueltos en la carpeta del cliente.';
        } else {
          subfolder = selectedUserFolder.path;
        }
      }
      
      if (errorMessage) {
        setError(errorMessage);
        setNoticeMessage(errorMessage);
        setShowErrorNotice(true);
        try { e.target.value = null; } catch {}
        return;
      }
      
      console.log('Subiendo archivo a subfolder:', subfolder);
      const res = await uploadDoc(f, { subfolder });
      // Mostrar inmediatamente el recin subido
      if (res?.file) setDocs((prev) => [res.file, ...prev]);
      // Actualizar lista desde el backend (si hay permisos de ListBucket)
      await loadDocs();
      
      // Mostrar notificaciÃ³n de Ã©xito
      setNoticeMessage(`Documento subido exitosamente`);
      setShowSuccessNotice(true);
    } catch (e2) {
      const errorMsg = e2?.message || 'Error subiendo documento';
      setError(errorMsg);
      setNoticeMessage(`Error al subir documento: ${errorMsg}`);
      setShowErrorNotice(true);
    } finally {
      setLoading(false);
      try { e.target.value = null; } catch {}
    }
  }; */

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
        {/* Notificaciones */}
        {showSuccessNotice && (
          <SuccessNotice 
            autoHideMs={5000} 
            onClose={() => setShowSuccessNotice(false)}
          >
            {noticeMessage}
          </SuccessNotice>
        )}
        {showErrorNotice && (
          <DangerNotice 
            autoHideMs={8000} 
            onClose={() => setShowErrorNotice(false)}
          >
            {noticeMessage}
          </DangerNotice>
        )}
        
        <div className="dash-header">
          <div className="dash-title">
            {isModal ? 'Expediente' : (isAdmin ? 'Mis expedientes' : 'Mi expediente')}
          </div>
          {isModal && onClose && (
            <button className="btn btn-secondary" onClick={onClose} style={{ marginLeft: 'auto' }}>
              Cerrar
            </button>
          )}
        </div>

        {/* Barra de acciones / b?squeda */}
        <div className="dash-item me-subbar">
          <div className="me-hello">Bienvenido: {displayName}</div>
          <select className="me-select" aria-label="Tipo de b?squeda">
            <option>Procesos judiciales</option>
            <option>Demandas</option>
            <option>Audiencias</option>
          </select>
          <input className="me-input" placeholder="Buscar..." />
          <div className="me-actions">
            {isAdmin && (
              <>
                <button
                  className={`btn ${multiSelectMode ? 'btn-orange' : 'btn-secondary'}`}
                  onClick={toggleMultiSelectMode}
                  title={multiSelectMode ? 'Salir del modo de selección' : 'Seleccionar múltiples archivos'}
                >
                  {multiSelectMode ? 'Cancelar selección' : 'Seleccionar archivos'}
                </button>
                {multiSelectMode && selectedItems.size > 0 && (
                  <button
                    className="btn btn-danger"
                    onClick={() => setShowDeleteConfirm(true)}
                    title={`Eliminar ${selectedItems.size} elemento${selectedItems.size > 1 ? 's' : ''} seleccionado${selectedItems.size > 1 ? 's' : ''}`}
                  >
                    Eliminar ({selectedItems.size})
                  </button>
                )}
              </>
            )}
            <button className="btn btn-secondary">Ver información</button>
          </div>
        </div>

        {/* Layout 3 columnas */}
        <div className="me-layout">
          {/* Izquierda: Clientes asignados al admin (o mensaje) */}
          <aside className="me-left dash-item">
            <div className="me-head">{isAdmin ? (isModal ? 'CARPETAS' : 'CLIENTE') : 'CARPETAS'}</div>
            <div className="me-tree">
              {!isAdmin && (
                <>
                  {loadingUserFolders ? (
                    <div className="me-leaf" style={{ opacity: .8 }}>
                      Cargando carpetas...
                    </div>
                  ) : userFolders.length === 0 ? (
                    <div className="me-leaf" style={{ opacity: .8 }}>
                      No hay carpetas disponibles
                    </div>
                  ) : (
                    userFolders.map((folder) => {
                      const isExpanded = expandedUserFolders.has(folder.path);
                      return (
                        <div key={folder.path} style={{ marginBottom: '8px' }}>
                          {/* Nombre de la carpeta clickeable con indicador de acordeÃ³n */}
                          <div 
                            style={{ 
                              cursor: 'pointer',
                              color: isExpanded ? '#4fd1c5' : '#e5edf7',
                              fontWeight: '600',
                              padding: '8px 4px',
                              borderRadius: '4px',
                              backgroundColor: isExpanded ? '#2a3a51' : 'transparent',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              transition: 'all 0.2s ease'
                            }}
                            onClick={() => onUserFolderAccordionClick(folder)}
                          >
                            {/* Indicador de acordeÃ³n */}
                            <span style={{
                              display: 'inline-block',
                              transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                              transition: 'transform 0.2s ease',
                              fontSize: '12px',
                              color: isExpanded ? '#4fd1c5' : '#9fb3cc'
                            }}>
                              ▶
                            </span>
                            {folder.name}
                          </div>
                          
                          {/* Contenido de la carpeta (acordeÃ³n) */}
                          {isExpanded && (
                            <div style={{ marginLeft: '16px', marginTop: '4px' }}>
                              <div style={{ color: '#9fb3cc', fontSize: '12px' }}>
                                {folder.documents?.length || 0} documentos
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </>
              )}
              {/* Mostrar carpetas del cliente cuando estÃ¡ en modo modal */}
              {isAdmin && isModal && selectedClient && (
                <>
                  {loadingFolders ? (
                    <div className="me-leaf" style={{ opacity: .8 }}>
                      Cargando carpetas...
                    </div>
                  ) : (
                    <div>
                      {Object.values(clientFolders[selectedClient.id] || {}).map((folder, index) => (
                        <div 
                          key={index}
                          style={{ 
                            cursor: 'pointer',
                            backgroundColor: selectedFolder?.path === folder.path ? '#2a3a51' : '#1e2a3a',
                            borderRadius: '8px',
                            margin: '4px 0',
                            padding: '12px 16px',
                            border: selectedFolder?.path === folder.path ? '1px solid #fc771c' : '1px solid #4fd1c5',
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                          }}
                          onClick={() => onFolderClick(folder)}
                          onMouseEnter={(e) => {
                            if (selectedFolder?.path !== folder.path) {
                              e.target.style.backgroundColor = '#2a3a51';
                              e.target.style.borderColor = '#fc771c';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (selectedFolder?.path !== folder.path) {
                              e.target.style.backgroundColor = '#1e2a3a';
                              e.target.style.borderColor = '#4fd1c5';
                            }
                          }}
                        >
                          {/* Icono de carpeta moderno */}
                          <div style={{
                            width: '24px',
                            height: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: selectedFolder?.path === folder.path ? '#fc771c' : '#4fd1c5'
                          }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
                            </svg>
                          </div>
                          
                          {/* Contenido de la carpeta */}
                          <div style={{ flex: 1 }}>
                            <div style={{ 
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              marginBottom: '2px'
                            }}>
                              <div style={{ 
                                color: selectedFolder?.path === folder.path ? '#fc771c' : '#4fd1c5',
                                fontSize: '14px',
                                fontWeight: '500'
                              }}>
                                {folder.name}
                              </div>
                              {isAdmin && multiSelectMode && (
                                <button
                                  className="btn btn-secondary btn-sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setFolderToDelete(folder);
                                    setShowDeleteFolderModal(true);
                                  }}
                                  style={{ 
                                    padding: '2px 6px',
                                    fontSize: '10px',
                                    minWidth: 'auto'
                                  }}
                                  title="Eliminar carpeta (solo si está vacía)"
                                >
                                  ðŸ—‘ï¸
                                </button>
                              )}
                            </div>
                            <div style={{ 
                              color: '#9fb3cc',
                              fontSize: '11px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}>
                              <span style={{
                                display: 'inline-block',
                                width: '4px',
                                height: '4px',
                                borderRadius: '50%',
                                backgroundColor: folder.documents?.length > 0 ? '#10b981' : '#6b7280'
                              }}></span>
                              {folder.documents?.length || 0} documentos
                            </div>
                          </div>
                        </div>
                      ))}
                      {Object.keys(clientFolders[selectedClient.id] || {}).length === 0 && !loadingFolders && (
                        <div style={{ color: '#9fb3cc', fontSize: '12px' }}>
                          No hay carpetas disponibles
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
              {isAdmin && !isModal && assignedError && (
                <div className="me-leaf" style={{ color: '#fecaca' }}>{assignedError}</div>
              )}
              {isAdmin && !isModal && !assignedError && assignedLoading && (
                <div className="me-leaf" style={{ opacity: .8 }}>Cargando clientes</div>
              )}
              {isAdmin && !isModal && !assignedLoading && assignedClients.length === 0 && (
                <div className="me-leaf" style={{ opacity: .8 }}>No tienes clientes asignados</div>
              )}
              {isAdmin && !isModal && assignedClients.length > 0 && (
                <>
                  {assignedClients.map((c) => {
                    const isExpanded = expandedClients.has(c.id);
                    return (
                      <div key={c.id} style={{ marginBottom: '8px' }}>
                        {/* Nombre del cliente clickeable con indicador de acordeï¿½n */}
                        <div 
                          style={{ 
                            cursor: 'pointer',
                            color: isExpanded ? '#4fd1c5' : '#e5edf7',
                            fontWeight: '600',
                            padding: '8px 4px',
                            borderRadius: '4px',
                            backgroundColor: isExpanded ? '#2a3a51' : 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            transition: 'all 0.2s ease'
                          }}
                          onClick={() => handleClientAccordionClick(c)}
                        >
                          {/* Indicador de acordeï¿½n */}
                          <span style={{
                            display: 'inline-block',
                            transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                            fontSize: '12px',
                            color: isExpanded ? '#4fd1c5' : '#9fb3cc'
                          }}>
                            ▶
                          </span>
                          {c.name}
                        </div>
                        
                        {/* Contenido del cliente (acordeï¿½n) */}
                        {isExpanded && (
                        <div style={{ marginLeft: '16px', marginTop: '4px' }}>
                          {loadingFolders ? (
                            <div style={{ color: '#9fb3cc', fontSize: '12px' }}>
                              Cargando carpetas...
                            </div>
                          ) : (
                            <div>
                              {Object.values(clientFolders[c.id] || {}).map((folder, index) => (
                                <div 
                                  key={index}
                                  style={{ 
                                    cursor: 'pointer',
                                    backgroundColor: selectedFolder?.path === folder.path ? '#2a3a51' : '#1e2a3a',
                                    borderRadius: '8px',
                                    margin: '4px 0',
                                    padding: '12px 16px',
                                    border: selectedFolder?.path === folder.path ? '1px solid #fc771c' : '1px solid #4fd1c5',
                                    transition: 'all 0.2s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px'
                                  }}
                                  onClick={() => onFolderClick(folder)}
                                  onMouseEnter={(e) => {
                                    if (selectedFolder?.path !== folder.path) {
                                      e.target.style.backgroundColor = '#2a3a51';
                                      e.target.style.borderColor = '#fc771c';
                                    }
                                  }}
                                  onMouseLeave={(e) => {
                                    if (selectedFolder?.path !== folder.path) {
                                      e.target.style.backgroundColor = '#1e2a3a';
                                      e.target.style.borderColor = '#4fd1c5';
                                    }
                                  }}
                                >
                                  {/* Icono de carpeta moderno */}
                                  <div style={{
                                    width: '24px',
                                    height: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: selectedFolder?.path === folder.path ? '#fc771c' : '#4fd1c5'
                                  }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                      <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
                                    </svg>
                                  </div>
                                  
                                  {/* Contenido de la carpeta */}
                                  <div style={{ flex: 1 }}>
                                    <div style={{ 
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      marginBottom: '2px'
                                    }}>
                                      <div style={{ 
                                        color: selectedFolder?.path === folder.path ? '#fc771c' : '#4fd1c5',
                                        fontSize: '14px',
                                        fontWeight: '500'
                                      }}>
                                        {folder.name}
                                      </div>
                                      {isAdmin && multiSelectMode && (
                                        <button
                                          className="btn btn-secondary btn-sm"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setFolderToDelete(folder);
                                            setShowDeleteFolderModal(true);
                                          }}
                                          style={{ 
                                            padding: '2px 6px',
                                            fontSize: '10px',
                                            minWidth: 'auto'
                                          }}
                                          title="Eliminar carpeta (solo si está vacía)"
                                        >
                                          ðŸ—‘ï¸
                                        </button>
                                      )}
                                    </div>
                                    <div style={{ 
                                      color: '#9fb3cc',
                                      fontSize: '11px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '4px'
                                    }}>
                                      <span style={{
                                        display: 'inline-block',
                                        width: '4px',
                                        height: '4px',
                                        borderRadius: '50%',
                                        backgroundColor: folder.documents?.length > 0 ? '#10b981' : '#6b7280'
                                      }}></span>
                                      {folder.documents?.length || 0} documentos
                                    </div>
                                  </div>
                                </div>
                              ))}
                              {Object.keys(clientFolders[c.id] || {}).length === 0 && !loadingFolders && (
                                <div style={{ color: '#9fb3cc', fontSize: '12px' }}>
                                  No hay carpetas disponibles
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        )}
                      </div>
                    );
                  })}
                </>
              )}
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
                      <th>Fecha de registro</th>
                      <th>Documento</th>
                      <th>Tipo</th>
                      <th>Tamaño</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {docs.filter((d) => {
                      const isFolder = d.isFolder || d.key?.endsWith('/') || d.name?.endsWith('/');
                      return !isFolder;
                    }).length === 0 && (
                      <tr>
                        <td colSpan={5} style={{ color: '#9fb3cc', textAlign: 'center', padding: '20px' }}>
                          {loading ? 'Cargando...' : 'No hay archivos'}
                        </td>
                      </tr>
                    )}
                    {docs.filter((d) => {
                      // Solo mostrar archivos, NO carpetas
                      const isFolder = d.isFolder || d.key?.endsWith('/') || d.name?.endsWith('/');
                      return !isFolder;
                    }).map((d) => {
                      const dt = d.lastModified ? new Date(d.lastModified) : (d.createdTime ? new Date(d.createdTime) : null);
                      const name = d.name || (d.key || '').split('/').pop();
                      const sizeKb = typeof d.size === 'number' ? Math.max(1, Math.round(d.size / 1024)) : null;
                      const mime = d.mimeType || (name && name.toLowerCase().endsWith('.pdf') ? 'application/pdf' : undefined);
                      const isSelected = selectedItems.has(d.key);
                      
                      return (
                        <tr 
                          key={d.key || d.id}
                          style={{
                            backgroundColor: isSelected ? 'rgba(252, 119, 28, 0.15)' : 'transparent',
                            border: isSelected ? '1px solid #fc771c' : '1px solid transparent',
                            transition: 'all 0.2s ease',
                            cursor: multiSelectMode ? 'pointer' : 'default'
                          }}
                          onClick={multiSelectMode ? () => toggleItemSelection(d.key) : undefined}
                          title={multiSelectMode ? (isSelected ? 'Deseleccionar' : 'Seleccionar') : undefined}
                        >
                          <td>{dt ? dt.toLocaleString() : '-'}</td>
                          <td title={name}>
                            <span style={{ 
                              color: isSelected ? '#fc771c' : '#e2e8f0',
                              fontWeight: isSelected ? '600' : '400'
                            }}>
                              {name}
                            </span>
                          </td>
                          <td>
                            <span style={{ 
                              color: isSelected ? '#fc771c' : '#4fd1c5',
                              fontWeight: isSelected ? '600' : '500'
                            }}>
                              {mime ? (mime.split('/')[1] || mime) : '-'}
                            </span>
                          </td>
                          <td>{sizeKb ? `${sizeKb} KB` : '-'}</td>
                          <td>
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                style={actionChipPrimary}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onPreviewDocument(
                                    d,
                                    d.downloadURL || d.downloadUrl || d.webContentLink || d.webViewLink
                                  );
                                }}
                                title="Previsualizar documento"
                                disabled={isAdmin && multiSelectMode}
                              >
                                <span role="img" aria-label="ver" style={{ fontSize: 12 }}>
                                  👁️
                                </span>
                                <span style={{ fontWeight: 600 }}>Ver</span>
                              </button>
                              <button
                                type="button"
                                className="btn btn-secondary btn-sm"
                                style={actionChipSecondary}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onDownloadDocument(
                                    d,
                                    d.downloadURL || d.downloadUrl || d.webContentLink || d.webViewLink
                                  );
                                }}
                                title="Descargar documento"
                                disabled={isAdmin && multiSelectMode}
                              >
                                <span role="img" aria-label="descargar" style={{ fontSize: 12 }}>
                                  ⬇️
                                </span>
                                <span>Descargar</span>
                              </button>
                              <button
                                type="button"
                                className="btn btn-secondary btn-sm"
                                style={actionChipSecondary}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onShareDocument(
                                    d,
                                    d.downloadURL || d.downloadUrl || d.webContentLink || d.webViewLink
                                  );
                                }}
                                title="Compartir enlace"
                                disabled={isAdmin && multiSelectMode}
                              >
                                <span role="img" aria-label="link" style={{ fontSize: 12 }}>
                                  🔗
                                </span>
                                <span>Compartir</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
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
                      <th>ActuaciÃ³n</th>
                      <th>Tipo</th>
                      <th>Juzgado</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {audiences.length === 0 ? (
                      <tr>
                        <td colSpan={5} style={{ textAlign: 'center', padding: 20, color: '#9fb3cc' }}>
                          No hay audiencias programadas
                        </td>
                      </tr>
                    ) : (
                      audiences.map((audience, index) => (
                        <tr key={index}>
                          <td>{new Date(audience.fecha).toLocaleString('es-CO')}</td>
                          <td>{audience.actuacion}</td>
                          <td>{audience.tipo}</td>
                          <td>{audience.juzgado}</td>
                          <td>
                            <span className={`me-badge ${
                              audience.estado === 'agendada' ? 'me-badge-warning' :
                              audience.estado === 'confirmada' ? 'me-badge-info' :
                              audience.estado === 'realizada' ? 'me-badge-success' :
                              audience.estado === 'cancelada' ? 'me-badge-danger' :
                              'me-badge-secondary'
                            }`}>
                              {audience.estado}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </main>

          {/* Derecha: Herramientas del Expediente (solo en modo modal) o Datos del Proceso (modo normal) */}
          <aside className="me-right dash-item">
            {isModal ? (
              <>
                <div className="me-head">Herramientas del Expediente</div>
                <div className="me-right-content" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <input ref={fileInputRef} type="file" style={{ display: 'none' }} onChange={handleFileUploadChange} />
                  <button 
                    className="btn btn-primary" 
                    onClick={onClickUpload}
                    disabled={loading}
                    title={isAdmin ? 
                      (!selectedClient?.documentNumber ? 'Selecciona un cliente primero' : 
                       !selectedFolder?.path ? 'Selecciona una carpeta especÃ­fica del proceso judicial para subir documentos' : '') :
                      (!selectedUserFolder?.path ? 'Selecciona una carpeta especÃ­fica del proceso judicial para subir documentos' : '')
                    }
                    style={{ width: '100%', padding: '12px' }}
                  >
                    {loading ? 'Subiendo...' : 'Radicar documento'}
                  </button>
                  
                  {/* Input para editar el nombre del archivo */}
                  {showFileNameInput && selectedFile && (
                    <div style={{ 
                      background: '#1e2a3a', 
                      padding: '12px', 
                      borderRadius: '6px',
                      border: '1px solid #394b61',
                      marginTop: '8px'
                    }}>
                      <div style={{ 
                        fontSize: '12px', 
                        color: '#9fb3cc', 
                        marginBottom: '8px',
                        fontWeight: '500'
                      }}>
                        Nombre del archivo en S3:
                      </div>
                      <input
                        type="text"
                        value={customFileName}
                        onChange={handleCustomFileNameChange}
                        onBlur={(e) => {
                          // CorrecciÃ³n adicional al perder el foco
                          const corrected = aggressiveUTF8Fix(e.target.value);
                          if (corrected !== e.target.value) {
                            console.log('ðŸ”§ FILE INPUT BLUR FIX - Original:', e.target.value, 'Corrected:', corrected);
                            e.target.value = corrected;
                            setCustomFileName(corrected);
                          }
                        }}
                        onKeyUp={(e) => {
                          // CorrecciÃ³n adicional al soltar tecla
                          const corrected = aggressiveUTF8Fix(e.target.value);
                          if (corrected !== e.target.value) {
                            console.log('ðŸ”§ FILE INPUT KEYUP FIX - Original:', e.target.value, 'Corrected:', corrected);
                            e.target.value = corrected;
                            setCustomFileName(corrected);
                          }
                        }}
                        placeholder="Nombre del archivo..."
                        style={{
                          width: '100%',
                          padding: '8px 12px',
                          background: '#2a3a51',
                          border: '1px solid #4fd1c5',
                          borderRadius: '4px',
                          color: '#e2e8f0',
                          fontSize: '14px',
                          marginBottom: '8px'
                        }}
                      />
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={handleFileUpload}
                          disabled={loading || !customFileName.trim()}
                          style={{ flex: 1, padding: '8px' }}
                        >
                          {loading ? 'Subiendo...' : 'âœ… Subir'}
                        </button>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={cancelFileUpload}
                          disabled={loading}
                          style={{ flex: 1, padding: '8px' }}
                        >
                          âŒ Cancelar
                        </button>
                      </div>
                    </div>
                  )}
                  
                  <button 
                    className="btn btn-secondary" 
                    onClick={() => setShowCreateProcess(true)}
                    style={{ width: '100%', padding: '12px' }}
                  >
                    Crear Proceso
                  </button>
                  
                  <button 
                    className="btn btn-secondary" 
                    onClick={() => setShowProcessInfo(true)}
                    style={{ width: '100%', padding: '12px' }}
                  >
                    Información del Expediente
                  </button>
                  
                  <button 
                    className="btn btn-secondary" 
                    onClick={() => setShowAudienceModal(true)}
                    style={{ width: '100%', padding: '12px' }}
                  >
                    Programar audiencia
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="me-head">Datos del Proceso Judicial</div>
                <div className="me-right-content">
                  <div className="me-proc-grid">
                    <div className="me-tag">Radicado</div><div>110014105009-20250011400</div>
                    <div className="me-tag">Clase</div><div>Laboral - Ordinario</div>
                    <div className="me-tag">Demandante</div><div>Juan PÃ©rez</div>
                    <div className="me-tag">Demandado</div><div>Acme S.A.S.</div>
                    <div className="me-tag">Juzgado</div><div>JDO 009 MPC</div>
                    <div className="me-tag">Estado</div><div>En trÃ¡mite</div>
                  </div>
                  <hr className="me-hr" />
                  <button className="btn btn-primary" style={{ width: '100%' }}>Descargar expediente</button>
                </div>
                </>
              )}
          </aside>
        </div>
            </div>

      {/* Modal para crear proceso (solo en modo modal) */}
      {isModal && showCreateProcess && (
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
          onClick={() => setShowCreateProcess(false)}
        >
          <div 
            className="dash-card" 
            style={{ maxWidth: '500px', width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dash-header" style={{ marginBottom: 8 }}>
              <div className="dash-title">Crear Nuevo Proceso</div>
            </div>
            
            <div className="dash-item" style={{ display: 'grid', gap: 16 }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                  Nombre del Proceso:
                </label>
                <input
                  type="text" 
                  className="me-input" 
                  placeholder="Ej: Demanda por despido injustificado"
                  value={newProcessName}
                  onChange={handleProcessNameChange}
                  style={{ width: '100%' }}
                  disabled={creatingProcess}
                />
                <div style={{ 
                  fontSize: '12px', 
                  color: '#fbbf24', 
                  backgroundColor: 'rgba(251, 191, 36, 0.1)',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  borderRadius: '6px',
                  padding: '8px 12px',
                  marginTop: '8px'
                }}>
                  â„¹ï¸ Esta ventana generarÃ¡ el nombre completo de la carpeta combinando el tipo de proceso seleccionado con el nombre que escribas.
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                  Tipo de Proceso:
                </label>
                <select 
                  className="me-select" 
                  style={{ width: '100%' }}
                  value={newProcessType}
                  onChange={(e) => setNewProcessType(e.target.value)}
                  disabled={creatingProcess}
                >
                  <option value="">Selecciona un tipo...</option>
                  <option value="civil">Proceso Civil</option>
                  <option value="laboral">Proceso Laboral</option>
                  <option value="penal">Proceso Penal</option>
                  <option value="administrativo">Proceso Administrativo</option>
                  <option value="comercial">Proceso Comercial</option>
                  <option value="ejecutivo">Proceso Ejecutivo</option>
                  <option value="familia">Proceso de Familia</option>
                  <option value="notarial">TrÃ¡mite Notarial</option>
                  <option value="tramite">TrÃ¡mite</option>
                </select>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12 }}>
              <button 
                className="btn btn-secondary" 
                onClick={() => {
                  setShowCreateProcess(false);
                  setNewProcessName('');
                  setNewProcessType('');
                }}
                disabled={creatingProcess}
              >
                Cancelar
              </button>
              <button 
                className="btn btn-primary" 
                onClick={onCreateProcess}
                disabled={creatingProcess || !newProcessName.trim()}
              >
                {creatingProcess ? 'Creando...' : 'Crear Proceso'}
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Modal para renombrar archivo (solo en modo modal) */}
      {isModal && showRenameFile && selectedFileForAction && (
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
          onClick={() => setShowRenameFile(false)}
        >
          <div 
            className="dash-card" 
            style={{ maxWidth: '500px', width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dash-header" style={{ marginBottom: 8 }}>
              <div className="dash-title">Renombrar Archivo</div>
            </div>
            
            <div className="dash-item" style={{ display: 'grid', gap: 16 }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                  Archivo actual:
                </label>
                <div style={{ 
                  background: '#1e2a3a', 
                  padding: '8px 12px', 
                  borderRadius: '6px',
                  color: '#9fb3cc',
                  fontSize: '14px'
                }}>
                  {selectedFileForAction.name || selectedFileForAction.key?.split('/').pop()}
          </div>
      </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                  Nuevo nombre:
                </label>
                <input 
                  type="text" 
                  className="me-input" 
                  value={newFileName}
                  onChange={(e) => setNewFileName(e.target.value)}
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12 }}>
              <button 
                className="btn btn-secondary" 
                onClick={() => setShowRenameFile(false)}
              >
                Cancelar
              </button>
              <button 
                className="btn btn-primary" 
                onClick={() => {
                  // AquÃ­ implementarÃ­as la lÃ³gica para renombrar el archivo
                  console.log('Renombrando archivo:', selectedFileForAction.key, 'a:', newFileName);
                  setShowRenameFile(false);
                }}
              >
                Renombrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal para eliminar archivo (solo en modo modal) */}
      {isModal && showDeleteFile && selectedFileForAction && (
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
          onClick={() => setShowDeleteFile(false)}
        >
          <div 
            className="dash-card" 
            style={{ maxWidth: '500px', width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dash-header" style={{ marginBottom: 8 }}>
              <div className="dash-title">Confirmar Eliminación</div>
            </div>
            
            <div className="dash-item" style={{ display: 'grid', gap: 16 }}>
              <div>
                ¿Estás seguro de que quieres eliminar el archivo?
              </div>
              
              <div style={{ 
                background: '#1e2a3a', 
                padding: '12px', 
                borderRadius: '6px',
                color: '#e5edf7',
                fontSize: '14px'
              }}>
                <strong>Archivo:</strong> {selectedFileForAction.name || selectedFileForAction.key?.split('/').pop()}
              </div>
              
              <div style={{ 
                background: '#7f1d1d', 
                color: '#fecaca', 
                padding: '8px 12px', 
                borderRadius: '6px',
                fontSize: '12px'
              }}>
                âš ï¸ Esta acciÃ³n no se puede deshacer
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12 }}>
              <button 
                className="btn btn-secondary" 
                onClick={() => setShowDeleteFile(false)}
              >
                Cancelar
              </button>
              <button 
                className="btn btn-danger" 
                onClick={() => {
                  // AquÃ­ implementarÃ­as la lÃ³gica para eliminar el archivo
                  console.log('Eliminando archivo:', selectedFileForAction.key);
                  setShowDeleteFile(false);
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal para informaciÃ³n del expediente (solo en modo modal) */}
      {isModal && showProcessInfo && (
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
          onClick={() => setShowProcessInfo(false)}
        >
          <div 
            className="dash-card" 
            style={{ maxWidth: '600px', width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dash-header" style={{ marginBottom: 8 }}>
              <div className="dash-title">InformaciÃ³n del Expediente</div>
            </div>
            
            <div className="dash-item" style={{ display: 'grid', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                    Radicado:
                  </label>
                  <input 
                    type="text" 
                    className="me-input" 
                    value={processData.radicado}
                    onChange={(e) => setProcessData(prev => ({ ...prev, radicado: e.target.value }))}
                    placeholder="110014105009-20250011400"
                    style={{ width: '100%' }}
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                    Clase:
                  </label>
                  <input 
                    type="text" 
                    className="me-input" 
                    value={processData.clase}
                    onChange={(e) => setProcessData(prev => ({ ...prev, clase: e.target.value }))}
                    placeholder="Laboral - Ordinario"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                    Demandante:
                  </label>
                  <input 
                    type="text" 
                    className="me-input" 
                    value={processData.demandante}
                    onChange={(e) => setProcessData(prev => ({ ...prev, demandante: e.target.value }))}
                    placeholder="Juan PÃ©rez"
                    style={{ width: '100%' }}
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                    Demandado:
                  </label>
                  <input 
                    type="text" 
                    className="me-input" 
                    value={processData.demandado}
                    onChange={(e) => setProcessData(prev => ({ ...prev, demandado: e.target.value }))}
                    placeholder="Acme S.A.S."
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                    Juzgado:
                  </label>
                  <input 
                    type="text" 
                    className="me-input" 
                    value={processData.juzgado}
                    onChange={(e) => setProcessData(prev => ({ ...prev, juzgado: e.target.value }))}
                    placeholder="JDO 009 MPC"
                    style={{ width: '100%' }}
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                    Estado:
                  </label>
                  <select 
                    className="me-select" 
                    value={processData.estado}
                    onChange={(e) => setProcessData(prev => ({ ...prev, estado: e.target.value }))}
                    style={{ width: '100%' }}
                  >
                    <option value="">Selecciona un estado...</option>
                    <option value="en-tramite">En trÃ¡mite</option>
                    <option value="sentencia">Sentencia</option>
                    <option value="archivado">Archivado</option>
                    <option value="suspension">SuspensiÃ³n</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12 }}>
              <button 
                className="btn btn-secondary" 
                onClick={() => setShowProcessInfo(false)}
              >
                Cancelar
              </button>
              <button 
                className="btn btn-primary" 
                onClick={onSaveProcessInfo}
              >
                Guardar InformaciÃ³n
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de confirmaciÃ³n de eliminaciÃ³n masiva */}
      {isAdmin && showDeleteConfirm && (
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
          onClick={() => setShowDeleteConfirm(false)}
        >
          <div 
            className="dash-card" 
            style={{ maxWidth: '500px', width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dash-header" style={{ marginBottom: 8 }}>
              <div className="dash-title">Confirmar EliminaciÃ³n</div>
            </div>
            
            <div className="dash-item" style={{ display: 'grid', gap: 16 }}>
              <div>
                Â¿EstÃ¡s seguro de que quieres eliminar {selectedItems.size} elemento{selectedItems.size > 1 ? 's' : ''} seleccionado{selectedItems.size > 1 ? 's' : ''}?
              </div>
              
              <div style={{ 
                background: '#1e2a3a', 
                padding: '12px', 
                borderRadius: '6px',
                color: '#e5edf7',
                fontSize: '14px',
                maxHeight: '200px',
                overflowY: 'auto'
              }}>
                <strong>Elementos a eliminar:</strong>
                <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px' }}>
                  {Array.from(selectedItems).slice(0, 10).map((itemKey, index) => {
                    const doc = docs.find(d => d.key === itemKey);
                    const name = doc?.name || itemKey.split('/').pop() || 'Elemento';
                    const isFolder = doc?.isFolder || itemKey.endsWith('/') || name.endsWith('/');
                    return (
                      <li key={index} style={{ marginBottom: '4px' }}>
                        <span style={{ color: isFolder ? '#4fd1c5' : '#e5edf7' }}>
                          {isFolder ? 'ðŸ“' : 'ðŸ“„'} {name}
                        </span>
                        <span style={{ color: '#9fb3cc', fontSize: '12px', marginLeft: '8px' }}>
                          ({isFolder ? 'Carpeta' : 'Archivo'})
                        </span>
                      </li>
                    );
                  })}
                  {selectedItems.size > 10 && (
                    <li style={{ color: '#9fb3cc', fontStyle: 'italic' }}>
                      ... y {selectedItems.size - 10} elemento{selectedItems.size - 10 > 1 ? 's' : ''} mÃ¡s
                    </li>
                  )}
                </ul>
              </div>
              
              <div style={{ 
                background: '#7f1d1d', 
                color: '#fecaca', 
                padding: '8px 12px', 
                borderRadius: '6px',
                fontSize: '12px'
              }}>
                âš ï¸ Esta acciÃ³n no se puede deshacer
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12 }}>
              <button 
                className="btn btn-secondary" 
                onClick={() => setShowDeleteConfirm(false)}
                disabled={deletingItems}
              >
                Cancelar
              </button>
              <button 
                className="btn btn-danger" 
                onClick={handleDeleteSelected}
                disabled={deletingItems}
              >
                {deletingItems ? 'Eliminando...' : `Eliminar ${selectedItems.size} elemento${selectedItems.size > 1 ? 's' : ''}`}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal para programar audiencia (solo en modo modal) */}
      {isModal && showAudienceModal && (
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
          onClick={() => setShowAudienceModal(false)}
        >
          <div 
            style={{ 
              background: '#0f172a', 
              color: '#e2e8f0', 
              width: '100%', 
              maxWidth: 560, 
              borderRadius: 14, 
              padding: 16, 
              boxShadow: '0 10px 32px rgba(0,0,0,0.45)' 
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>Programar Audiencia</h3>
              <button 
                className="btn btn-secondary btn-sm" 
                onClick={() => setShowAudienceModal(false)}
                style={{ padding: '4px 8px' }}
              >
                âœ•
              </button>
            </div>
            
            <div style={{ display: 'grid', gap: 16 }}>
              <div>
                <label style={{ display: 'block', marginBottom: 6, fontSize: '14px', fontWeight: '500' }}>
                  Fecha de Audiencia
                </label>
                <input
                  type="datetime-local"
                  value={audienceData.fecha}
                  onChange={(e) => setAudienceData(prev => ({ ...prev, fecha: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    background: '#1b263b',
                    color: '#e2e8f0',
                    border: '1px solid rgba(148,163,184,0.35)',
                    borderRadius: 8,
                    fontSize: '14px'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: 6, fontSize: '14px', fontWeight: '500' }}>
                  ActuaciÃ³n
                </label>
                <input
                  type="text"
                  value={audienceData.actuacion}
                  onChange={(e) => setAudienceData(prev => ({ ...prev, actuacion: e.target.value }))}
                  placeholder="Ej: Audiencia de conciliaciÃ³n"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    background: '#1b263b',
                    color: '#e2e8f0',
                    border: '1px solid rgba(148,163,184,0.35)',
                    borderRadius: 8,
                    fontSize: '14px'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: 6, fontSize: '14px', fontWeight: '500' }}>
                  Tipo de Audiencia
                </label>
                <select
                  value={audienceData.tipo}
                  onChange={(e) => setAudienceData(prev => ({ ...prev, tipo: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    background: '#1b263b',
                    color: '#e2e8f0',
                    border: '1px solid rgba(148,163,184,0.35)',
                    borderRadius: 8,
                    fontSize: '14px'
                  }}
                >
                  <option value="">Seleccionar tipo</option>
                  <option value="conciliacion">ConciliaciÃ³n</option>
                  <option value="audiencia_inicial">Audiencia Inicial</option>
                  <option value="audiencia_pruebas">Audiencia de Pruebas</option>
                  <option value="audiencia_sentencia">Audiencia de Sentencia</option>
                  <option value="audiencia_especial">Audiencia Especial</option>
                </select>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: 6, fontSize: '14px', fontWeight: '500' }}>
                  Juzgado
                </label>
                <input
                  type="text"
                  value={audienceData.juzgado}
                  onChange={(e) => setAudienceData(prev => ({ ...prev, juzgado: e.target.value }))}
                  placeholder="Ej: Juzgado Primero Civil del Circuito"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    background: '#1b263b',
                    color: '#e2e8f0',
                    border: '1px solid rgba(148,163,184,0.35)',
                    borderRadius: 8,
                    fontSize: '14px'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: 6, fontSize: '14px', fontWeight: '500' }}>
                  Estado
                </label>
                <select
                  value={audienceData.estado}
                  onChange={(e) => setAudienceData(prev => ({ ...prev, estado: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    background: '#1b263b',
                    color: '#e2e8f0',
                    border: '1px solid rgba(148,163,184,0.35)',
                    borderRadius: 8,
                    fontSize: '14px'
                  }}
                >
                  <option value="">Seleccionar estado</option>
                  <option value="agendada">Agendada</option>
                  <option value="confirmada">Confirmada</option>
                  <option value="realizada">Realizada</option>
                  <option value="cancelada">Cancelada</option>
                  <option value="aplazada">Aplazada</option>
                </select>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 20 }}>
              <button 
                className="btn btn-secondary" 
                onClick={() => setShowAudienceModal(false)}
              >
                Cancelar
              </button>
              <button 
                className="btn btn-primary" 
                onClick={() => {
                  // Guardar la audiencia en el estado
                  const newAudience = {
                    ...audienceData,
                    id: Date.now(), // ID temporal
                    fecha: audienceData.fecha
                  };
                  setAudiences(prev => [...prev, newAudience]);
                  setShowAudienceModal(false);
                  setAudienceData({
                    fecha: '',
                    actuacion: '',
                    tipo: '',
                    juzgado: '',
                    estado: ''
                  });
                }}
                disabled={!audienceData.fecha || !audienceData.actuacion || !audienceData.tipo || !audienceData.juzgado || !audienceData.estado}
              >
                Programar Audiencia
              </button>
            </div>
          </div>
        </div>
      )}

      {previewDoc && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
            zIndex: 9000,
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closePreviewModal();
          }}
        >
          <div
            className="dash-card"
            style={{
              width: '100%',
              maxWidth: 1100,
              maxHeight: '95vh',
              display: 'flex',
              flexDirection: 'column',
              background: '#0f172a',
              border: '1px solid rgba(148,163,184,0.35)',
              boxShadow: '0 25px 45px rgba(0,0,0,0.45)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="dash-header"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}
            >
              <div>
                <div className="dash-title" style={{ marginBottom: 4 }}>
                  Previsualizar documento
                </div>
                <div style={{ fontSize: 14, color: '#cbd5e1' }}>
                  {previewDoc?.name || previewDoc?.key?.split('/').pop() || 'Documento'}
                </div>
              </div>
              <button className="btn btn-secondary btn-sm" onClick={closePreviewModal}>
                Cerrar
              </button>
            </div>
            <div className="dash-item" style={{ flex: 1, overflow: 'hidden', background: '#0f172a' }}>
              {previewLoading ? (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '70vh',
                    color: '#cbd5e1',
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      border: '3px solid #4fd1c5',
                      borderTopColor: 'transparent',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite',
                    }}
                  />
                  Cargando vista previa...
                </div>
              ) : previewUrl ? (
                <iframe
                  title="Vista previa del documento"
                  src={previewUrl}
                  style={{
                    width: '100%',
                    height: '70vh',
                    border: 'none',
                    borderRadius: 12,
                    background: '#fff',
                  }}
                />
              ) : (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '70vh',
                    color: '#fecaca',
                    textAlign: 'center',
                    gap: 16,
                  }}
                >
                  <div style={{ fontSize: 16 }}>{previewError || 'No se pudo cargar el documento.'}</div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
                    <button className="btn btn-primary btn-sm" onClick={retryPreviewDocument} disabled={previewLoading}>
                      Reintentar
                    </button>
                    {previewDoc?.fallbackUrl && (
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => window.open(previewDoc.fallbackUrl, '_blank', 'noopener,noreferrer')}
                      >
                        Abrir enlace directo
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
              <button
                className="btn btn-secondary btn-sm"
                style={actionChipSecondary}
                onClick={() => onDownloadDocument(previewDoc, getFallbackUrl(previewDoc))}
                disabled={previewLoading}
              >
                ⬇️ Descargar
              </button>
              <button
                className="btn btn-secondary btn-sm"
                style={actionChipSecondary}
                onClick={() => onShareDocument(previewDoc, getFallbackUrl(previewDoc))}
                disabled={previewLoading}
              >
                🔗 Compartir
              </button>
              {previewUrl && (
                <button
                  className="btn btn-primary btn-sm"
                  style={actionChipPrimary}
                  onClick={() => window.open(previewUrl, '_blank', 'noopener,noreferrer')}
                >
                  Abrir pestaña
                </button>
              )}
              <button
                className="btn btn-secondary btn-sm"
                style={actionChipSecondary}
                onClick={closePreviewModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal para eliminar carpeta (solo en modo modal) */}
      {isModal && showDeleteFolderModal && folderToDelete && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000
          }}
          onClick={() => {
            if (!deletingFolder) {
              setShowDeleteFolderModal(false);
              setFolderToDelete(null);
            }
          }}
        >
          <div
            style={{
              backgroundColor: '#1e2a3a',
              borderRadius: '12px',
              padding: '24px',
              maxWidth: '400px',
              width: '90%',
              border: '1px solid #394b61',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ 
                color: '#e2e8f0', 
                margin: '0 0 8px 0',
                fontSize: '18px',
                fontWeight: '600'
              }}>
                Eliminar Carpeta
              </h3>
              <p style={{ 
                color: '#9fb3cc', 
                margin: 0,
                fontSize: '14px',
                lineHeight: '1.5'
              }}>
                ¿Estás seguro de que quieres eliminar la carpeta <strong style={{ color: '#fc771c' }}>"{folderToDelete.name}"</strong>?
              </p>
              <p style={{ 
                color: '#ef4444', 
                margin: '8px 0 0 0',
                fontSize: '12px',
                fontWeight: '500'
              }}>
                Solo se puede eliminar si la carpeta está vacía.
              </p>
            </div>
            
            <div style={{ 
              display: 'flex', 
              gap: '12px', 
              justifyContent: 'flex-end',
              marginTop: '20px'
            }}>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setShowDeleteFolderModal(false);
                  setFolderToDelete(null);
                }}
                disabled={deletingFolder}
                style={{ padding: '8px 16px' }}
              >
                Cancelar
              </button>
              <button
                className="btn btn-danger"
                onClick={handleDeleteFolder}
                disabled={deletingFolder}
                style={{ padding: '8px 16px' }}
              >
                {deletingFolder ? 'Eliminando...' : 'Eliminar Carpeta'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}







