import React, { useEffect, useRef, useState } from 'react';
import '../styles/dashboard.css';
import '../styles/mi-expediente.css';
import { useAuth } from '../context/AuthContext';
import { normalizeUpperAscii } from '../utils/strings.js';
import { listRecentDocs, uploadDoc, getDownloadUrl, getClientDocumentHistory, getDiagnostics, deleteFile } from '../api/docs';
import { listActiveClients } from '../api/clients';

export default function MiExpediente({ selectedClient: propSelectedClient, isModal = false, onClose }) {
  const [activeTab, setActiveTab] = useState('docs');
  const { user, accessToken } = useAuth();
  const displayName = normalizeUpperAscii(user?.name || '');
  const DEFAULT_FOLDER = 'clientes';
  const roles = Array.isArray(user?.roles) ? user.roles : (user?.roles ? [user?.roles] : []);
  const isAdmin = roles.map((r)=>String(r||'').trim().toLowerCase()).includes('admin');
  // Clientes asignados (solo admin)
  const [assignedClients, setAssignedClients] = useState([]);
  const [assignedLoading, setAssignedLoading] = useState(false);
  const [assignedError, setAssignedError] = useState(null);

  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [warning, setWarning] = useState(null);

  // Estados para gestión de carpetas de clientes
  const [selectedClient, setSelectedClient] = useState(propSelectedClient || null);
  const [clientFolders, setClientFolders] = useState({});
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [loadingFolders, setLoadingFolders] = useState(false);
  const [expandedClients, setExpandedClients] = useState(new Set());
  
  // Estados para usuarios regulares
  const [userFolders, setUserFolders] = useState([]);
  const [selectedUserFolder, setSelectedUserFolder] = useState(null);
  const [loadingUserFolders, setLoadingUserFolders] = useState(false);
  const [expandedUserFolders, setExpandedUserFolders] = useState(new Set());

  // Estados para funcionalidades del expediente
  const [showCreateProcess, setShowCreateProcess] = useState(false);
  const [showAddFile, setShowAddFile] = useState(false);
  const [showRenameFile, setShowRenameFile] = useState(false);
  const [showDeleteFile, setShowDeleteFile] = useState(false);
  const [showProcessInfo, setShowProcessInfo] = useState(false);
  const [selectedFileForAction, setSelectedFileForAction] = useState(null);
  const [newFileName, setNewFileName] = useState('');
  const [processData, setProcessData] = useState({
    radicado: '',
    clase: '',
    demandante: '',
    demandado: '',
    juzgado: '',
    estado: ''
  });

  // Estados para selección múltiple
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);

  // Referencia para el input de archivo
  const fileInputRef = useRef(null);

  // Función para manejar subida de archivos
  const onFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      let subfolder = DEFAULT_FOLDER;
      if (isAdmin && selectedClient) {
        subfolder = `clientes/${selectedClient.documentNumber}`;
      } else if (selectedFolder) {
        subfolder = selectedFolder.path;
      } else if (selectedUserFolder) {
        subfolder = selectedUserFolder.path;
      }

      await uploadDoc(file, subfolder);
      setError(null);
      // Recargar documentos
      if (selectedFolder) {
        loadDocs();
      } else if (selectedUserFolder) {
        loadUserFolders();
      }
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Error al subir archivo');
    }
  };

  const loadDocs = async () => {
    setLoading(true);
    setError(null);
    setWarning(null);
    try {
      const data = await listRecentDocs({ limit: 20, subfolder: DEFAULT_FOLDER });
      setDocs(Array.isArray(data?.items) ? data.items : []);
      if (data?.warning) setWarning(data.warning);
    } catch (e) {
      setError(e?.message || 'Error cargando documentos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'docs') {
      if (isAdmin) {
        loadDocs();
      } else {
        // Para usuarios regulares, cargar sus carpetas
        loadUserFolders();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, isAdmin]);

  // Efecto para cargar carpetas cuando se pasa un cliente como prop (modo modal)
  useEffect(() => {
    if (propSelectedClient && isModal) {
      setSelectedClient(propSelectedClient);
      loadClientFolders(propSelectedClient);
    }
  }, [propSelectedClient, isModal]);

  // Cargar clientes asignados al admin actual
  useEffect(() => {
    if (!isAdmin) return;
    let ignore = false;
    (async () => {
      try {
        setAssignedLoading(true);
        setAssignedError(null);
        const data = await listActiveClients();
        if (ignore) return;
        const items = Array.isArray(data?.items) ? data.items : [];
        const myId = String(user?.id || user?.sub || '').trim();
        setAssignedClients(items.filter((c) => String(c?.assignedAdmin?.id || '').trim() === myId));
      } catch (e) {
        if (!ignore) setAssignedError(e?.response?.data?.message || e?.message || 'No se pudo cargar clientes asignados');
      } finally {
        if (!ignore) setAssignedLoading(false);
      }
    })();
    return () => { ignore = true; };
  }, [isAdmin, user]);

  const onClickUpload = () => fileInputRef.current?.click();

  const onDownload = async (key, fallbackUrl) => {
    try {
      const { url } = await getDownloadUrl(key, 600);
      window.open(url || fallbackUrl, '_blank');
    } catch (e) {
      if (fallbackUrl) window.open(fallbackUrl, '_blank');
    }
  };

  // Funciones para selección múltiple
  const toggleItemSelection = (key) => {
    const newSelection = new Set(selectedItems);
    if (newSelection.has(key)) {
      newSelection.delete(key);
    } else {
      newSelection.add(key);
    }
    setSelectedItems(newSelection);
  };

  const executeDelete = async () => {
    if (selectedItems.size === 0) return;
    
    setDeleting(true);
    try {
      const deletePromises = Array.from(selectedItems).map(key => {
        // Determinar si es una carpeta o archivo
        const isFolder = key.endsWith('/') || clientFolders[selectedClient?.id]?.[key] || userFolders.some(f => f.path === key);
        return deleteFile(key, isFolder);
      });
      
      await Promise.all(deletePromises);
      
      // Actualizar la lista local inmediatamente
      setDocs(prev => prev.filter(doc => !selectedItems.has(doc.key)));
      
      // Recargar después de un breve delay para asegurar consistencia
      setTimeout(() => {
        if (selectedFolder) {
          loadDocs();
        } else if (selectedUserFolder) {
          loadUserFolders();
        }
      }, 1000);
      
      setSelectedItems(new Set());
      setSelectionMode(false);
      setShowDeleteConfirm(false);
      setError(null);
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Error al eliminar archivos');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div
      className="dash-page"
      style={{
        backgroundImage:
          'linear-gradient(135deg, #1e2a3a 0%, #2a3a51 50%, #1e2a3a 100%)',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <div className="dash-card">
        <div className="dash-header">
          <div className="dash-title">Mi Expediente</div>
          <div className="dash-subtitle">Bienvenido, {displayName}</div>
        </div>

        {/* Tabs */}
        <div className="dash-tabs">
          <button 
            className={`dash-tab ${activeTab === 'docs' ? 'active' : ''}`}
            onClick={() => setActiveTab('docs')}
          >
            Documentos
          </button>
        </div>

        {/* Contenido de Documentos */}
        {activeTab === 'docs' && (
          <div className="dash-content">
            {/* Botones de acción */}
            <div style={{ 
              display: 'flex', 
              gap: '12px', 
              marginBottom: '16px',
              padding: '12px 0',
              borderBottom: '1px solid #34465a'
            }}>
              {!selectionMode ? (
                <>
                  <button 
                    className="dash-btn dash-btn-primary"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Subir Archivo
                  </button>
                  <button 
                    className="dash-btn dash-btn-secondary"
                    onClick={() => setSelectionMode(true)}
                  >
                    Seleccionar Elementos
                  </button>
                </>
              ) : (
                <>
                  <button 
                    className="dash-btn dash-btn-danger"
                    onClick={() => setShowDeleteConfirm(true)}
                    disabled={selectedItems.size === 0}
                  >
                    Eliminar ({selectedItems.size})
                  </button>
                  <button 
                    className="dash-btn dash-btn-secondary"
                    onClick={() => {
                      setSelectionMode(false);
                      setSelectedItems(new Set());
                    }}
                  >
                    Cancelar
                  </button>
                </>
              )}
            </div>

            {/* Input de archivo oculto */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={onFileChange}
              style={{ display: 'none' }}
            />

            {/* Lista de documentos */}
            <div className="dash-list">
              {loading ? (
                <div className="dash-item">Cargando...</div>
              ) : error ? (
                <div className="dash-item dash-error">{error}</div>
              ) : docs.length === 0 ? (
                <div className="dash-item">No hay documentos</div>
              ) : (
                docs.map((doc) => (
                  <div 
                    key={doc.key}
                    className={`dash-item ${selectionMode ? 'selectable' : ''} ${selectedItems.has(doc.key) ? 'selected' : ''}`}
                    style={{
                      backgroundColor: selectedItems.has(doc.key) ? 'rgba(252, 119, 28, 0.15)' : 'transparent',
                      cursor: selectionMode ? 'pointer' : 'default'
                    }}
                    onClick={() => selectionMode && toggleItemSelection(doc.key)}
                  >
                    <div className="dash-item-content">
                      <div className="dash-item-title">{doc.name}</div>
                      <div className="dash-item-subtitle">{doc.key}</div>
                    </div>
                    {!selectionMode && (
                      <div className="dash-item-actions">
                        <button 
                          className="dash-btn dash-btn-sm"
                          onClick={() => window.open(doc.downloadUrl, '_blank')}
                        >
                          Descargar
                        </button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* Modal de confirmación de eliminación */}
      {showDeleteConfirm && (
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
            style={{ maxWidth: '400px', width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dash-header" style={{ marginBottom: 8 }}>
              <div className="dash-title">Confirmar Eliminación</div>
            </div>
            
            <div className="dash-item">
              <p>¿Estás seguro de que quieres eliminar {selectedItems.size} elemento(s)?</p>
              <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '8px' }}>
                Esta acción no se puede deshacer.
              </p>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12 }}>
              <button 
                className="btn btn-secondary" 
                onClick={() => setShowDeleteConfirm(false)}
                disabled={deleting}
              >
                Cancelar
              </button>
              <button 
                className="btn btn-danger" 
                onClick={executeDelete}
                disabled={deleting}
              >
                {deleting ? 'Eliminando...' : 'Eliminar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

