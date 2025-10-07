import React, { useEffect, useRef, useState } from 'react';
import '../styles/dashboard.css';
import '../styles/mi-expediente.css';
import { useAuth } from '../context/AuthContext';
import { normalizeUpperAscii } from '../utils/strings.js';
import { listRecentDocs, uploadDoc, getDownloadUrl, deleteFile } from '../api/docs';
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
  const fileInputRef = useRef(null);

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
    demandante: ''
  });

  // Estados para selección múltiple
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);

  // Estados para notificaciones
  const [notice, setNotice] = useState(null);

  // Función para mostrar notificaciones
  const showNotice = (message, type = 'success') => {
    setNotice({ message, type });
    setTimeout(() => setNotice(null), 5000);
  };

  // Cargar documentos
  const loadDocs = async () => {
    if (!accessToken) return;
    
    setLoading(true);
    setError(null);
    try {
      let subfolder = DEFAULT_FOLDER;
      if (isAdmin && selectedClient) {
        subfolder = `clientes/${selectedClient.documentNumber}`;
      } else if (selectedFolder) {
        subfolder = selectedFolder.path;
      } else if (selectedUserFolder) {
        subfolder = selectedUserFolder.path;
      }
      
      const data = await listRecentDocs(subfolder);
      setDocs(data?.items || []);
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Error al cargar documentos');
    } finally {
      setLoading(false);
    }
  };

  // Cargar carpetas de clientes
  const loadClientFolders = async () => {
    if (!isAdmin || !selectedClient) return;
    
    setLoadingFolders(true);
    try {
      const data = await listRecentDocs(`clientes/${selectedClient.documentNumber}`);
      const folders = {};
      
      // Agrupar por carpetas
      (data?.items || []).forEach(item => {
        const parts = item.key.split('/');
        if (parts.length > 3) {
          const folderName = parts[2];
          if (!folders[folderName]) {
            folders[folderName] = [];
          }
          folders[folderName].push(item);
        }
      });
      
      setClientFolders(folders);
    } catch (err) {
      console.error('Error loading client folders:', err);
    } finally {
      setLoadingFolders(false);
    }
  };

  // Cargar carpetas de usuario
  const loadUserFolders = async () => {
    if (isAdmin) return;
    
    setLoadingUserFolders(true);
    try {
      const data = await listRecentDocs('clientes');
      const folders = [];
      
      // Agrupar por carpetas
      (data?.items || []).forEach(item => {
        const parts = item.key.split('/');
        if (parts.length > 2) {
          const folderName = parts[1];
          const existingFolder = folders.find(f => f.name === folderName);
          if (existingFolder) {
            existingFolder.items.push(item);
          } else {
            folders.push({
              name: folderName,
              path: `clientes/${folderName}`,
              items: [item]
            });
          }
        }
      });
      
      setUserFolders(folders);
    } catch (err) {
      console.error('Error loading user folders:', err);
    } finally {
      setLoadingUserFolders(false);
    }
  };

  // Cargar clientes asignados
  const loadAssignedClients = async () => {
    if (!isAdmin || !accessToken) return;
    
    setAssignedLoading(true);
    setAssignedError(null);
    try {
      const data = await listActiveClients();
      const items = Array.isArray(data?.items) ? data.items : [];
      const myId = String(user?.id || user?.sub || '').trim();
      setAssignedClients(items.filter((c) => String(c?.assignedAdmin?.id || '').trim() === myId));
    } catch (err) {
      setAssignedError(err?.response?.data?.message || err?.message || 'No se pudo cargar clientes asignados');
    } finally {
      setAssignedLoading(false);
    }
  };

  // Subir archivo
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
      showNotice('Archivo subido correctamente', 'success');
      loadDocs();
    } catch (err) {
      showNotice(err?.response?.data?.message || err?.message || 'Error al subir archivo', 'error');
    }
  };

  // Eliminar archivos seleccionados
  const executeDelete = async () => {
    if (selectedItems.size === 0) return;
    
    setDeleting(true);
    try {
      const deletePromises = Array.from(selectedItems).map(key => deleteFile(key));
      await Promise.all(deletePromises);
      
      showNotice(`${selectedItems.size} archivo(s) eliminado(s) correctamente`, 'success');
      setSelectedItems(new Set());
      setSelectionMode(false);
      setShowDeleteConfirm(false);
      loadDocs();
    } catch (err) {
      showNotice(err?.response?.data?.message || err?.message || 'Error al eliminar archivos', 'error');
    } finally {
      setDeleting(false);
    }
  };

  // Toggle selección de elemento
  const toggleItemSelection = (key) => {
    const newSelection = new Set(selectedItems);
    if (newSelection.has(key)) {
      newSelection.delete(key);
    } else {
      newSelection.add(key);
    }
    setSelectedItems(newSelection);
  };

  // Efectos
  useEffect(() => {
    if (activeTab === 'docs' && accessToken && user) {
      if (isAdmin) {
        loadDocs();
      } else {
        loadUserFolders();
      }
    }
  }, [activeTab, isAdmin, accessToken, user, selectedClient, selectedFolder, selectedUserFolder]);

  useEffect(() => {
    if (isAdmin && accessToken && user) {
      loadAssignedClients();
    }
  }, [isAdmin, user, accessToken]);

  useEffect(() => {
    if (isAdmin && selectedClient) {
      loadClientFolders();
    }
  }, [isAdmin, selectedClient]);

  if (!accessToken || !user) {
    return (
      <div className="dash-page">
        <div className="dash-card">
          <div className="dash-header">
            <div className="dash-title">Cargando...</div>
          </div>
          <div className="dash-item">
            <div>Verificando autenticación...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dash-page">
      {/* Notificaciones */}
      {notice && (
        <div className={`notice notice-${notice.type}`}>
          {notice.message}
        </div>
      )}

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
            <div className="dash-actions">
              <input
                type="file"
                ref={fileInputRef}
                onChange={onFileChange}
                style={{ display: 'none' }}
              />
              <button 
                className="dash-btn dash-btn-primary"
                onClick={() => fileInputRef.current?.click()}
              >
                Subir Archivo
              </button>
              
              {!selectionMode ? (
                <button 
                  className="dash-btn dash-btn-secondary"
                  onClick={() => setSelectionMode(true)}
                >
                  Seleccionar Elementos
                </button>
              ) : (
                <div className="dash-actions-group">
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
                </div>
              )}
            </div>

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
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Confirmar Eliminación</h3>
            </div>
            <div className="modal-body">
              <p>¿Estás seguro de que quieres eliminar {selectedItems.size} archivo(s)?</p>
            </div>
            <div className="modal-footer">
              <button 
                className="dash-btn dash-btn-secondary"
                onClick={() => setShowDeleteConfirm(false)}
                disabled={deleting}
              >
                Cancelar
              </button>
              <button 
                className="dash-btn dash-btn-danger"
                onClick={executeDelete}
                disabled={deleting}
              >
                {deleting ? 'Eliminando...' : 'Eliminar'}
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .notice {
          position: fixed;
          top: 20px;
          right: 20px;
          padding: 12px 20px;
          border-radius: 4px;
          color: white;
          font-weight: 500;
          z-index: 1000;
          animation: slideIn 0.3s ease-out;
        }
        .notice-success {
          background-color: #10b981;
        }
        .notice-error {
          background-color: #ef4444;
        }
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .dash-actions {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .dash-actions-group {
          display: flex;
          gap: 12px;
        }
        .dash-item.selectable {
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .dash-item.selectable:hover {
          background-color: #f3f4f6;
        }
        .dash-item.selected {
          background-color: rgba(252, 119, 28, 0.15);
          border: 1px solid rgba(252, 119, 28, 0.3);
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal {
          background: white;
          border-radius: 8px;
          padding: 0;
          max-width: 400px;
          width: 90%;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        .modal-header {
          padding: 20px 20px 0;
        }
        .modal-header h3 {
          margin: 0;
          color: #1f2937;
        }
        .modal-body {
          padding: 20px;
        }
        .modal-footer {
          padding: 0 20px 20px;
          display: flex;
          gap: 12px;
          justify-content: flex-end;
        }
      `}</style>
    </div>
  );
}

