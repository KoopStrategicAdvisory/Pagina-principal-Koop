import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { normalizeUpperAscii } from '../utils/strings';
import {
  listRecentDocs,
  uploadDoc,
  getDownloadUrl,
  getDiagnostics,
  createFolder,
  deleteDocument,
  deleteFolder,
} from '../api/docs';
import { listActiveClients } from '../api/clients';

const convertLatin1ToUtf8 = (input) => {
  if (!input) return input;
  try {
    const bytes = Uint8Array.from([...input], (char) => char.charCodeAt(0));
    return new TextDecoder('utf-8').decode(bytes);
  } catch (error) {
    console.error('Error convirtiendo latin1 a utf8:', error);
    return input;
  }
};

const aggressiveUTF8Fix = (str) => {
  if (!str) return str;

  return str
    .replace(/TrÃƒÂ¡mite/g, 'TrÃ¡mite')
    .replace(/TÃƒÂºtela/g, 'TÃºtela')
    .replace(/trÃƒÂ¡mite/g, 'trÃ¡mite')
    .replace(/tÃƒÂºtela/g, 'tÃºtela')
    .replace(/ConstituciÃƒÂ³n/g, 'ConstituciÃ³n')
    .replace(/PolÃƒÂ­tica/g, 'PolÃ­tica')
    .replace(/constituciÃƒÂ³n/g, 'constituciÃ³n')
    .replace(/polÃƒÂ­tica/g, 'polÃ­tica')
    .replace(/ÃƒÂ¡/g, 'Ã¡')
    .replace(/ÃƒÂ©/g, 'Ã©')
    .replace(/ÃƒÂ­/g, 'Ã­')
    .replace(/ÃƒÂ³/g, 'Ã³')
    .replace(/ÃƒÂº/g, 'Ãº')
    .replace(/ÃƒÂ±/g, 'Ã±')
    .replace(/Ãƒ/g, 'Ã')
    .replace(/Ãƒâ€°/g, 'Ã‰')
    .replace(/Ãƒ/g, 'Ã')
    .replace(/Ãƒ"/g, 'Ã“')
    .replace(/ÃƒÅ¡/g, 'Ãš')
    .replace(/Ãƒ'/g, 'Ã‘')
    .replace(/ÃƒÂ¼/g, 'Ã¼')
    .replace(/ÃƒÅ“/g, 'Ãœ')
    .replace(/Ãƒâ€¡/g, 'Ã‡');
};

const useUTF8Input = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    let inputValue = e.target.value;
    const correctedValue = aggressiveUTF8Fix(inputValue);
    if (correctedValue !== inputValue) {
      e.target.value = correctedValue;
      inputValue = correctedValue;
    }
    setValue(inputValue);
  };

  return [value, setValue, handleChange];
};

export function useMiExpediente({ propSelectedClient = null, isModal = false } = {}) {
  const { user, accessToken } = useAuth();
  const displayName = useMemo(() => normalizeUpperAscii(user?.name || ''), [user]);
  const DEFAULT_FOLDER = 'clientes';
  const roles = useMemo(
    () => (Array.isArray(user?.roles) ? user.roles : user?.roles ? [user.roles] : []),
    [user]
  );
  const isAdmin = useMemo(
    () => roles.map((r) => String(r || '').trim().toLowerCase()).includes('admin'),
    [roles]
  );

  const [activeTab, setActiveTab] = useState('docs');
  const [assignedClients, setAssignedClients] = useState([]);
  const [assignedLoading, setAssignedLoading] = useState(false);
  const [assignedError, setAssignedError] = useState(null);
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [warning, setWarning] = useState(null);
  const [previewDoc, setPreviewDoc] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [previewLoading, setPreviewLoading] = useState(false);
  const [previewError, setPreviewError] = useState(null);
  const [showSuccessNotice, setShowSuccessNotice] = useState(false);
  const [showErrorNotice, setShowErrorNotice] = useState(false);
  const [noticeMessage, setNoticeMessage] = useState('');
  const [selectedClient, setSelectedClient] = useState(propSelectedClient || null);
  const [clientFolders, setClientFolders] = useState({});
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [loadingFolders, setLoadingFolders] = useState(false);
  const [expandedClients, setExpandedClients] = useState(new Set());
  const [userFolders, setUserFolders] = useState([]);
  const [selectedUserFolder, setSelectedUserFolder] = useState(null);
  const [loadingUserFolders, setLoadingUserFolders] = useState(false);
  const [expandedUserFolders, setExpandedUserFolders] = useState(new Set());
  const [showCreateProcess, setShowCreateProcess] = useState(false);
  const [showRenameFile, setShowRenameFile] = useState(false);
  const [showDeleteFile, setShowDeleteFile] = useState(false);
  const [showProcessInfo, setShowProcessInfo] = useState(false);
  const [selectedFileForAction, setSelectedFileForAction] = useState(null);
  const [newFileName, setNewFileName, handleCustomFileNameChange] = useUTF8Input('');
  const [showAudienceModal, setShowAudienceModal] = useState(false);
  const [audienceData, setAudienceData] = useState({
    fecha: '',
    actuacion: '',
    tipo: '',
    juzgado: '',
    estado: '',
  });
  const [audiences, setAudiences] = useState([]);
  const [showDeleteFolderModal, setShowDeleteFolderModal] = useState(false);
  const [folderToDelete, setFolderToDelete] = useState(null);
  const [deletingFolder, setDeletingFolder] = useState(false);
  const [processData, setProcessData] = useState({
    radicado: '',
    clase: '',
    demandante: '',
    demandado: '',
    juzgado: '',
    estado: '',
  });
  const [newProcessName, setNewProcessName, handleProcessNameChange] = useUTF8Input('');
  const [newProcessType, setNewProcessType] = useState('');
  const [creatingProcess, setCreatingProcess] = useState(false);
  const [multiSelectMode, setMultiSelectMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deletingItems, setDeletingItems] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showFileNameInput, setShowFileNameInput] = useState(false);

  const fileInputRef = useRef(null);
  const noticeTimeoutRef = useRef(null);

  const loadDocs = useCallback(async () => {
    setLoading(true);
    setError(null);
    setWarning(null);
    try {
      const data = await listRecentDocs({ limit: 20, subfolder: DEFAULT_FOLDER });
      const items = Array.isArray(data?.items) ? data.items : [];
      setDocs(items);
      if (data?.warning) setWarning(data.warning);
    } catch (e) {
      setError(e?.message || 'Error cargando documentos');
    } finally {
      setLoading(false);
    }
  }, []);

  const loadClientFolders = useCallback(async (client) => {
    if (!client?.documentNumber) return;

    setLoadingFolders(true);
    try {
      const data = await listRecentDocs({
        limit: 100,
        subfolder: `clientes/${client.documentNumber}`,
      });

      const folders = {};
      const clientBasePath = `clientes/${client.documentNumber}`;

      if (Array.isArray(data?.items)) {
        data.items.forEach((item) => {
          if (item.isFolder) {
            const folderPath = item.key?.replace(/\/$/, '');
            if (folderPath && folderPath !== clientBasePath && folderPath.startsWith(`${clientBasePath}/`)) {
              const relativePath = folderPath.replace(`${clientBasePath}/`, '');
              const folderName = relativePath.split('/').pop() || 'Carpeta';
              folders[folderPath] = {
                name: folderName,
                path: folderPath,
                documents: [],
                isFolder: true,
              };
            }
          } else {
            const folderPath = item.key?.split('/').slice(0, -1).join('/') || 'root';
            if (folderPath && folderPath !== clientBasePath && folderPath.startsWith(`${clientBasePath}/`)) {
              if (!folders[folderPath]) {
                const relativePath = folderPath.replace(`${clientBasePath}/`, '');
                const folderName = relativePath.split('/').pop() || 'Carpeta';
                folders[folderPath] = {
                  name: folderName,
                  path: folderPath,
                  documents: [],
                  isFolder: false,
                };
              }
              folders[folderPath].documents.push(item);
            }
          }
        });
      }

      setClientFolders((prev) => ({ ...prev, [client.id]: folders }));
    } catch (e) {
      console.error('Error cargando carpetas del cliente:', e);
      setClientFolders((prev) => ({ ...prev, [client.id]: {} }));
    } finally {
      setLoadingFolders(false);
    }
  }, []);

  const loadUserFolders = useCallback(async () => {
    setLoadingUserFolders(true);
    try {
      await getDiagnostics();
      const data = await listRecentDocs({ limit: 100, subfolder: DEFAULT_FOLDER });
      const items = Array.isArray(data?.items) ? data.items : [];
      const foldersMap = new Map();
      let clientBasePath = 'clientes';
      const clientFolder = items.find((item) => item.isFolder && item.key && item.key.includes('clientes/'));
      if (clientFolder) {
        const pathParts = clientFolder.key.split('/');
        if (pathParts.length >= 2) {
          clientBasePath = `${pathParts[0]}/${pathParts[1]}/`;
        }
      }

      items.forEach((item) => {
        if (item.isFolder) {
          const fullPath = item.key;
          if (fullPath && fullPath.startsWith(clientBasePath) && fullPath !== clientBasePath) {
            const relativePath = fullPath.replace(clientBasePath, '').replace(/^\/+|\/+$/g, '');
            if (relativePath && !relativePath.includes('/')) {
              foldersMap.set(fullPath, {
                name: relativePath,
                path: fullPath,
                documents: [],
                isFolder: true,
              });
            }
          }
        }
      });

      items.forEach((item) => {
        if (!item.isFolder) {
          const pathParts = item.key?.split('/') || [];
          if (pathParts.length > 2) {
            const folderPath = pathParts.slice(0, -1).join('/');
            if (folderPath.startsWith(clientBasePath) && folderPath !== clientBasePath) {
              const relativePath = folderPath.replace(clientBasePath, '').replace(/^\/+|\/+$/g, '');
              if (relativePath && !relativePath.includes('/')) {
                const existingFolder = foldersMap.get(folderPath);
                if (existingFolder) {
                  existingFolder.documents.push(item);
                }
              }
            }
          }
        }
      });

      setUserFolders(Array.from(foldersMap.values()));
    } catch (error) {
      console.error('Error cargando carpetas del usuario:', error);
      if (error.response?.status === 401) {
        setError('Error de autenticación. Por favor, cierra sesión y vuelve a iniciar sesión.');
      } else {
        setError('Error cargando carpetas: ' + (error.message || 'Error desconocido'));
      }
    } finally {
      setLoadingUserFolders(false);
    }
  }, []);

  const onClickUpload = useCallback(() => {
    if (isAdmin && !selectedFolder?.path) {
      setError('Debes seleccionar una carpeta antes de subir un documento');
      setNoticeMessage('Debes seleccionar una carpeta antes de subir un documento');
      setShowErrorNotice(true);
      return;
    }
    if (!isAdmin && !selectedUserFolder?.path) {
      setError('Debes seleccionar una carpeta antes de subir un documento');
      setNoticeMessage('Debes seleccionar una carpeta antes de subir un documento');
      setShowErrorNotice(true);
      return;
    }
    fileInputRef.current?.click();
  }, [isAdmin, selectedFolder, selectedUserFolder]);

  const onFileChange = useCallback(
    (e) => {
      const f = e.target?.files?.[0];
      if (!f) return;
      let errorMessage = null;
      if (isAdmin) {
        if (!selectedClient?.documentNumber) {
          errorMessage = 'Debes seleccionar un cliente primero';
        } else if (!selectedFolder?.path) {
          errorMessage = 'Debes seleccionar una carpeta específica del proceso judicial para subir documentos. No se permiten archivos sueltos en la carpeta del cliente.';
        }
      } else {
        if (!selectedUserFolder?.path) {
          errorMessage = 'Debes seleccionar una carpeta específica del proceso judicial para subir documentos. No se permiten archivos sueltos en la carpeta del cliente.';
        }
      }
      if (errorMessage) {
        setError(errorMessage);
        setNoticeMessage(errorMessage);
        setShowErrorNotice(true);
        try {
          e.target.value = null;
        } catch {}
        return;
      }
      setSelectedFile(f);
      setNewFileName(f.name);
      setShowFileNameInput(true);
      try {
        e.target.value = null;
      } catch {}
    },
    [isAdmin, selectedClient, selectedFolder, selectedUserFolder, setNewFileName]
  );

  const getFallbackUrl = useCallback((doc, fallbackUrl) => {
    return fallbackUrl || doc?.downloadURL || doc?.downloadUrl || doc?.webContentLink || doc?.webViewLink || doc?.url || doc?.fallbackUrl || null;
  }, []);

  const fetchDocumentUrl = useCallback(async (doc, fallbackUrl) => {
    if (!doc?.key) throw new Error('Documento sin identificador');
    const safeFallback = getFallbackUrl(doc, fallbackUrl);
    const { downloadURL, downloadUrl, url } = await getDownloadUrl(doc.key, 600);
    const finalUrl = downloadURL || downloadUrl || url || safeFallback;
    if (!finalUrl) throw new Error('No se recibió URL de previsualización');
    return finalUrl;
  }, [getFallbackUrl]);

  const closePreviewModal = useCallback(() => {
    setPreviewDoc(null);
    setPreviewUrl('');
    setPreviewError(null);
    setPreviewLoading(false);
  }, []);

  const onPreviewDocument = useCallback(
    async (doc, fallbackUrl) => {
      if (!doc?.key) return;
      setPreviewDoc({ ...doc, fallbackUrl });
      setPreviewUrl('');
      setPreviewError(null);
      setPreviewLoading(true);
      try {
        const finalUrl = await fetchDocumentUrl(doc, fallbackUrl);
        setPreviewUrl(finalUrl);
      } catch (e) {
        console.error('Error obteniendo URL de previsualización:', e);
        const friendly = e?.response?.data?.message || e?.message || 'No se pudo abrir el documento';
        setPreviewError(friendly);
        if (fallbackUrl) {
          setPreviewUrl(fallbackUrl);
        }
      } finally {
        setPreviewLoading(false);
      }
    },
    [fetchDocumentUrl]
  );

  const retryPreviewDocument = useCallback(() => {
    if (!previewDoc?.key) return;
    onPreviewDocument(previewDoc, getFallbackUrl(previewDoc));
  }, [previewDoc, onPreviewDocument, getFallbackUrl]);

  const onDownloadDocument = useCallback(
    async (doc, fallbackUrl) => {
      try {
        const url = await fetchDocumentUrl(doc, fallbackUrl);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
        anchor.download = doc?.name || doc?.key?.split('/').pop() || 'documento';
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
      } catch (e) {
        console.error('Error descargando documento:', e);
        const friendly = e?.response?.data?.message || e?.message || 'No se pudo descargar el documento';
        setError(friendly);
        setNoticeMessage(friendly);
        setShowErrorNotice(true);
      }
    },
    [fetchDocumentUrl]
  );

  const onShareDocument = useCallback(
    async (doc, fallbackUrl) => {
      try {
        const url = await fetchDocumentUrl(doc, fallbackUrl);
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(url);
          setNoticeMessage('Enlace copiado al portapapeles');
          setShowSuccessNotice(true);
        } else {
          window.prompt('Copia el siguiente enlace', url);
        }
      } catch (e) {
        console.error('Error compartiendo documento:', e);
        const friendly = e?.response?.data?.message || e?.message || 'No se pudo obtener el enlace para compartir';
        setNoticeMessage(friendly);
        setShowErrorNotice(true);
      }
    },
    [fetchDocumentUrl]
  );

  const onClientClick = useCallback(
    async (client) => {
      const isExpanded = expandedClients.has(client.id);
      if (isExpanded) {
        setExpandedClients((prev) => {
          const newSet = new Set(prev);
          newSet.delete(client.id);
          return newSet;
        });
        setSelectedClient(null);
        setSelectedFolder(null);
      } else {
        setExpandedClients((prev) => new Set(prev).add(client.id));
        setSelectedClient(client);
        setSelectedFolder(null);
        if (!clientFolders[client.id]) {
          await loadClientFolders(client);
        }
      }
    },
    [clientFolders, expandedClients, loadClientFolders]
  );

  const onFolderClick = useCallback(
    async (folder) => {
      setSelectedFolder(folder);
      if (folder.documents && folder.documents.length > 0) {
        setDocs(folder.documents);
      } else {
        setLoading(true);
        try {
          const data = await listRecentDocs({ limit: 100, subfolder: folder.path });
          const documents = Array.isArray(data?.items) ? data.items.filter((item) => !item.isFolder) : [];
          setDocs(documents);
          setClientFolders((prev) => ({
            ...prev,
            [selectedClient.id]: {
              ...prev[selectedClient.id],
              [folder.path]: {
                ...folder,
                documents,
              },
            },
          }));
        } catch (e) {
          console.error('Error cargando documentos de la carpeta:', e);
          setDocs([]);
        } finally {
          setLoading(false);
        }
      }
    },
    [selectedClient]
  );

  const isFolderEmpty = useCallback(async (folder) => {
    try {
      const data = await listRecentDocs({ limit: 100, subfolder: folder.path });
      if (!data?.items || data.items.length === 0) {
        return true;
      }
      const hasFiles = data.items.some((item) => {
        const isFolder = item.isFolder || item.key?.endsWith('/') || item.name?.endsWith('/');
        return !isFolder;
      });
      return !hasFiles;
    } catch (error) {
      console.error('Error verificando si la carpeta está vacía', error);
      return false;
    }
  }, []);

  const handleDeleteFolder = useCallback(async () => {
    if (!folderToDelete) return;
    try {
      setDeletingFolder(true);
      const empty = await isFolderEmpty(folderToDelete);
      if (!empty) {
        setNoticeMessage('No se puede eliminar la carpeta porque contiene archivos. Solo se pueden eliminar carpetas completamente vacías.');
        setShowErrorNotice(true);
        return;
      }
      await deleteFolder(folderToDelete.path);
      if (selectedClient) {
        setClientFolders((prev) => {
          const updated = { ...prev };
          if (updated[selectedClient.id]) {
            const filtered = Object.fromEntries(
              Object.entries(updated[selectedClient.id]).filter(
                ([, folder]) => folder.path !== folderToDelete.path
              )
            );
            updated[selectedClient.id] = filtered;
          }
          return updated;
        });
      }
      if (selectedFolder?.path === folderToDelete.path) {
        setSelectedFolder(null);
        setDocs([]);
      }
      setShowDeleteFolderModal(false);
      setFolderToDelete(null);
      setNoticeMessage('Carpeta eliminada correctamente');
      setShowSuccessNotice(true);
    } catch (error) {
      console.error('Error eliminando carpeta:', error);
      setNoticeMessage('Error al eliminar la carpeta');
      setShowErrorNotice(true);
    } finally {
      setDeletingFolder(false);
    }
  }, [folderToDelete, selectedClient, selectedFolder, isFolderEmpty]);

  const onUserFolderClick = useCallback(
    async (folder) => {
      setSelectedUserFolder(folder);
      if (folder.documents && folder.documents.length > 0) {
        setDocs(folder.documents);
      } else {
        try {
          setLoading(true);
          const data = await listRecentDocs({ limit: 50, subfolder: folder.path });
          const documents = Array.isArray(data?.items) ? data.items.filter((item) => !item.isFolder) : [];
          setDocs(documents);
          setUserFolders((prev) =>
            prev.map((f) => (f.path === folder.path ? { ...f, documents } : f))
          );
        } catch (error) {
          console.error('Error cargando documentos de la carpeta:', error);
          setError('Error cargando documentos de la carpeta');
        } finally {
          setLoading(false);
        }
      }
    },
    []
  );

  const onUserFolderAccordionClick = useCallback(
    (folder) => {
      const isExpanded = expandedUserFolders.has(folder.path);
      if (isExpanded) {
        setExpandedUserFolders((prev) => {
          const newSet = new Set(prev);
          newSet.delete(folder.path);
          return newSet;
        });
        setSelectedUserFolder(null);
      } else {
        setExpandedUserFolders((prev) => new Set(prev).add(folder.path));
        onUserFolderClick(folder);
      }
    },
    [expandedUserFolders, onUserFolderClick]
  );

  const onCreateProcess = useCallback(async () => {
    if (!newProcessName.trim()) {
      setError('El nombre del proceso es requerido');
      setNoticeMessage('El nombre del proceso es requerido');
      setShowErrorNotice(true);
      return;
    }
    try {
      setCreatingProcess(true);
      setError(null);
      setShowErrorNotice(false);
      setShowSuccessNotice(false);
      let clientBasePath = '';
      if (isAdmin && selectedClient?.documentNumber) {
        clientBasePath = `clientes/${selectedClient.documentNumber}`;
      } else if (!isAdmin) {
        clientBasePath = 'clientes';
      } else {
        throw new Error('No se puede determinar la carpeta del cliente');
      }
      const processName = newProcessName.trim();
      let correctedProcessName = aggressiveUTF8Fix(processName);
      correctedProcessName = aggressiveUTF8Fix(correctedProcessName);
      correctedProcessName = correctedProcessName
        .replace(/TrÃƒÂ¡mite/g, 'TrÃ¡mite')
        .replace(/TÃƒÂºtela/g, 'TÃºtela')
        .replace(/trÃƒÂ¡mite/g, 'trÃ¡mite')
        .replace(/tÃƒÂºtela/g, 'tÃºtela');
      let folderName = '';
      if (newProcessType && correctedProcessName) {
        const typeLabels = {
          civil: 'Proceso Civil',
          laboral: 'Proceso Laboral',
          penal: 'Proceso Penal',
          administrativo: 'Proceso Administrativo',
          comercial: 'Proceso Comercial',
          ejecutivo: 'Proceso Ejecutivo',
          familia: 'Proceso de Familia',
          notarial: 'Trámite Notarial',
          tramite: 'Trámite',
        };
        const typeLabel = typeLabels[newProcessType] || newProcessType;
        folderName = `${typeLabel} - ${correctedProcessName}`;
      } else if (correctedProcessName) {
        folderName = correctedProcessName;
      } else {
        throw new Error('El nombre del proceso es requerido');
      }
      const fullPath = `${clientBasePath}/${folderName}`;
      await createFolder({ subfolder: fullPath });
      setNewProcessName('');
      setNewProcessType('');
      setShowCreateProcess(false);
      setNoticeMessage('Proceso creado exitosamente');
      setShowSuccessNotice(true);
      if (isAdmin && selectedClient) {
        await loadClientFolders(selectedClient);
      } else if (!isAdmin) {
        await loadUserFolders();
      }
    } catch (e) {
      console.error('Error creando proceso:', e);
      const errorMsg = e?.response?.data?.message || e?.message || 'Error creando proceso';
      setError(errorMsg);
      setNoticeMessage(`Error al crear proceso: ${errorMsg}`);
      setShowErrorNotice(true);
    } finally {
      setCreatingProcess(false);
    }
  }, [isAdmin, loadClientFolders, loadUserFolders, newProcessName, newProcessType, selectedClient]);

  const onRenameFile = useCallback((file) => {
    setSelectedFileForAction(file);
    setNewFileName(file.name || file.key?.split('/').pop() || '');
    setShowRenameFile(true);
  }, []);

  const onDeleteFile = useCallback((file) => {
    setSelectedFileForAction(file);
    setShowDeleteFile(true);
  }, []);

  const onSaveProcessInfo = useCallback(async () => {
    try {
      setShowProcessInfo(false);
      setError(null);
    } catch (e) {
      setError('Error guardando información: ' + e.message);
    }
  }, []);

  const toggleMultiSelectMode = useCallback(() => {
    if (!isAdmin) return;
    setSelectedItems(new Set());
    setMultiSelectMode((prev) => !prev);
  }, [isAdmin]);

  const toggleItemSelection = useCallback((itemKey) => {
    setSelectedItems((prev) => {
      const newSelected = new Set(prev);
      if (newSelected.has(itemKey)) {
        newSelected.delete(itemKey);
      } else {
        newSelected.add(itemKey);
      }
      return newSelected;
    });
  }, []);

  const selectAllItems = useCallback(() => {
    const allItems = new Set();
    docs.forEach((doc) => {
      if (doc.key) allItems.add(doc.key);
    });
    setSelectedItems(allItems);
  }, [docs]);

  const clearSelection = useCallback(() => {
    setSelectedItems(new Set());
  }, []);

  const reloadCurrentFolder = useCallback(async () => {
    setLoading(true);
    setError(null);
    setWarning(null);
    try {
      let subfolder = null;
      if (isAdmin && selectedClient && selectedFolder) {
        subfolder = selectedFolder.path;
      } else if (!isAdmin && selectedUserFolder) {
        subfolder = selectedUserFolder.path;
      } else if (isAdmin && selectedClient) {
        subfolder = `clientes/${selectedClient.documentNumber}`;
      } else if (!isAdmin) {
        subfolder = DEFAULT_FOLDER;
      } else {
        subfolder = DEFAULT_FOLDER;
      }
      const data = await listRecentDocs({ limit: 100, subfolder });
      const allItems = Array.isArray(data?.items) ? data.items : [];
      setDocs(allItems);
      if (isAdmin && selectedClient && selectedFolder) {
        setClientFolders((prev) => {
          const clientData = prev[selectedClient.id];
          if (!clientData || !clientData[selectedFolder.path]) return prev;
          return {
            ...prev,
            [selectedClient.id]: {
              ...clientData,
              [selectedFolder.path]: {
                ...clientData[selectedFolder.path],
                documents: allItems.filter((item) => !item.isFolder),
              },
            },
          };
        });
        setSelectedFolder((prev) => (prev ? { ...prev, documents: allItems.filter((item) => !item.isFolder) } : prev));
      } else if (!isAdmin && selectedUserFolder) {
        setUserFolders((prev) =>
          prev.map((folder) =>
            folder.path === selectedUserFolder.path
              ? { ...folder, documents: allItems.filter((item) => !item.isFolder) }
              : folder
          )
        );
        setSelectedUserFolder((prev) => (prev ? { ...prev, documents: allItems.filter((item) => !item.isFolder) } : prev));
      }
      if (data?.warning) {
        setWarning(data.warning);
      }
    } catch (e) {
      console.error('Error recargando carpeta:', e);
      setError(e?.message || 'Error recargando documentos');
    } finally {
      setLoading(false);
    }
  }, [isAdmin, selectedClient, selectedFolder, selectedUserFolder]);

  const handleFileUpload = useCallback(async () => {
    if (!selectedFile || !newFileName.trim()) {
      setError('Debes seleccionar un archivo y especificar un nombre');
      setNoticeMessage('Debes seleccionar un archivo y especificar un nombre');
      setShowErrorNotice(true);
      return;
    }
    try {
      setLoading(true);
      setError(null);
      setShowErrorNotice(false);
      setShowSuccessNotice(false);
      let subfolder = null;
      if (isAdmin && selectedClient && selectedFolder) {
        subfolder = selectedFolder.path;
      } else if (!isAdmin && selectedUserFolder) {
        subfolder = selectedUserFolder.path;
      }
      const originalFileName = newFileName.trim();
      let correctedFileName = aggressiveUTF8Fix(originalFileName);
      correctedFileName = aggressiveUTF8Fix(correctedFileName);
      correctedFileName = correctedFileName
        .replace(/TrÃƒÂ¡mite/g, 'TrÃ¡mite')
        .replace(/TÃƒÂºtela/g, 'TÃºtela')
        .replace(/trÃƒÂ¡mite/g, 'trÃ¡mite')
        .replace(/tÃƒÂºtela/g, 'tÃºtela');
      const fileWithCustomName = new File([selectedFile], correctedFileName, {
        type: selectedFile.type,
        lastModified: selectedFile.lastModified,
      });
      const res = await uploadDoc(fileWithCustomName, { subfolder, useExactName: true });
      if (res?.file) setDocs((prev) => [res.file, ...prev]);
      await reloadCurrentFolder();
      setNoticeMessage('Documento subido exitosamente');
      setShowErrorNotice(true);
      setSelectedFile(null);
      setNewFileName('');
      setShowFileNameInput(false);
    } catch (e2) {
      const errorMsg = e2?.message || 'Error subiendo documento';
      setError(errorMsg);
      setNoticeMessage(`Error al subir documento: ${errorMsg}`);
      setShowErrorNotice(true);
    } finally {
      setLoading(false);
    }
  }, [newFileName, isAdmin, reloadCurrentFolder, selectedClient, selectedFile, selectedFolder, selectedUserFolder]);

  const cancelFileUpload = useCallback(() => {
    setSelectedFile(null);
    setNewFileName('');
    setShowFileNameInput(false);
  }, []);

  const handleDeleteSelected = useCallback(async () => {
    if (selectedItems.size === 0) return;
    try {
      setDeletingItems(true);
      setError(null);
      setShowErrorNotice(false);
      setShowSuccessNotice(false);
      const itemsToDelete = Array.from(selectedItems);
      let deletedCount = 0;
      let errors = [];
      for (const itemKey of itemsToDelete) {
        try {
          await deleteDocument(itemKey);
          deletedCount++;
        } catch (e) {
          const doc = docs.find((d) => d.key === itemKey);
          const name = doc?.name || itemKey.split('/').pop() || 'Elemento';
          errors.push(`${name}: ${e?.message || 'Error desconocido'}`);
        }
      }
      setSelectedItems(new Set());
      setMultiSelectMode(false);
      setShowDeleteConfirm(false);
      if (errors.length === 0) {
        setNoticeMessage('Elementos eliminados correctamente');
        setShowErrorNotice(true);
      } else if (deletedCount > 0) {
        setNoticeMessage('Algunos elementos eliminados correctamente');
        setShowErrorNotice(true);
      } else {
        setNoticeMessage('Error al eliminar elementos');
        setShowErrorNotice(true);
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
      await reloadCurrentFolder();
    } catch (e) {
      const errorMsg = e?.message || 'Error eliminando elementos';
      setError(errorMsg);
      setNoticeMessage(`Error al eliminar elementos: ${errorMsg}`);
      setShowErrorNotice(true);
    } finally {
      setDeletingItems(false);
    }
  }, [docs, reloadCurrentFolder, selectedItems]);

  useEffect(() => {
    if (activeTab === 'docs') {
      if (isAdmin) {
        loadDocs();
      } else {
        loadUserFolders();
      }
    }
  }, [activeTab, isAdmin, loadDocs, loadUserFolders]);

  useEffect(() => {
    if (propSelectedClient && isModal) {
      setSelectedClient(propSelectedClient);
      setExpandedClients((prev) => new Set(prev).add(propSelectedClient.id));
      loadClientFolders(propSelectedClient);
    }
  }, [isModal, loadClientFolders, propSelectedClient]);

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
    return () => {
      ignore = true;
    };
  }, [isAdmin, user]);

  useEffect(() => {
    if (showSuccessNotice || showErrorNotice) {
      if (noticeTimeoutRef.current) {
        clearTimeout(noticeTimeoutRef.current);
      }
      noticeTimeoutRef.current = setTimeout(() => {
        setShowSuccessNotice(false);
        setShowErrorNotice(false);
        setNoticeMessage('');
      }, 5000);
    }
    return () => {
      if (noticeTimeoutRef.current) {
        clearTimeout(noticeTimeoutRef.current);
      }
    };
  }, [showSuccessNotice, showErrorNotice]);

  return {
    activeTab,
    setActiveTab,
    assignedClients,
    assignedLoading,
    assignedError,
    audienceData,
    audiences,
    setAudiences,
    cancelFileUpload,
    closePreviewModal,
    createFolder,
    customFileName: newFileName,
    displayName,
    docs,
    error,
    fileInputRef,
    folderToDelete,
    getFallbackUrl,
    handleCreateProcess: onCreateProcess,
    handleDeleteFolder,
    handleDeleteSelected,
    handleFileUpload,
    handleFileUploadChange: onFileChange,
    handlePreviewDocument: onPreviewDocument,
    handleRenameFile: onRenameFile,
    handleShareDocument: onShareDocument,
    handleStatusChange: null,
    handleUserFolderAccordionClick: onUserFolderAccordionClick,
    handleUserFolderClick: onUserFolderClick,
    handleDownloadDocument: onDownloadDocument,
    isAdmin,
    isModal,
    loadClientFolders,
    loading,
    loadingFolders,
    loadingUserFolders,
    noticeMessage,
    onClickUpload,
    onCreateProcess: onCreateProcess,
    onDeleteFile,
    onFolderClick,
    onPreviewDocument,
    onSaveProcessInfo,
    onShareDocument,
    onUserFolderAccordionClick,
    onUserFolderClick,
    onDeleteFolder: handleDeleteFolder,
    onDownloadDocument,
    onRenameFile,
    openCreateProcess: () => setShowCreateProcess(true),
    openDeleteConfirm: () => setShowDeleteConfirm(true),
    openProcessInfo: () => setShowProcessInfo(true),
    openAudienceModal: () => setShowAudienceModal(true),
    onSaveProcessInfo,
    onShareDocument,
    onUserFolderClick,
    propSelectedClient,
    previewDoc,
    previewError,
    previewLoading,
    reloadCurrentFolder,
    removeSelectedFile: cancelFileUpload,
    selectedClient,
    selectedFile,
    selectedFileForAction,
    selectedFolder,
    selectedItems,
    selectedUserFolder,
    selectAllItems,
    setActiveTab,
    setAudienceData,
    setClientFolders,
    setDeleteFolder: setFolderToDelete,
    setSelectedClient,
    setSelectedFolder,
    setShowAudienceModal,
    setShowCreateProcess,
    setShowDeleteConfirm,
    setShowDeleteFile,
    setShowErrorNotice,
    setShowProcessInfo,
    setShowSuccessNotice,
    setUserFolders,
    setViewingUserFolder: setSelectedUserFolder,
    showAudienceModal,
    showCreateProcess,
    showDeleteConfirm,
    showDeleteFile,
    showErrorNotice,
    showProcessInfo,
    showFileNameInput,
    showRenameFile,
    showSuccessNotice,
    showDeleteFolderModal,
    multiSelectMode,
    expandedClients,
    expandedUserFolders,
    userFolders,
    signOut: null,
    selectedFile,
    setSelectedFile,
    setSelectedFileForAction,
    setCustomFileName: setNewFileName,
    setNewProcessName,
    setNewProcessType,
    setShowFileNameInput,
    setNoticeMessage,
    setDocs,
    setError,
    setLoading,
    setWarning,
    setPreviewError,
    setPreviewLoading,
    setSelectedItems,
    setMultiSelectMode,
    toggleMultiSelectMode,
    toggleItemSelection,
    setShowErrorNotice,
    setShowSuccessNotice,
    setSelectedUserFolder,
    setExpandedUserFolders,
    setExpandedClients,
    setAssignedClients,
    setAssignedError,
    setAssignedLoading,
    selectedFile,
    setSelectedFolder,
    setSelectedUserFolder,
    showAudienceModal,
    selectedItems,
    newFileName,
    handleCustomFileNameChange,
    handleProcessNameChange,
    newProcessType,
    creatingProcess,
    deletingFolder,
    noticeMessage,
    warning,
    previewDoc,
    previewError,
    previewLoading,
    selectedUserFolder,
    selectedFolder,
    userFolders,
    clientFolders,
    selectedClient,
    assignedClients,
    assignedLoading,
    assignedError,
    isAdmin,
    isModal,
    activeTab,
    onClickUpload,
    onFileChange,
    handleFileUpload,
    cancelFileUpload,
    onCreateProcess,
    setShowCreateProcess,
    setShowProcessInfo,
    setShowAudienceModal,
    setShowDeleteConfirm,
    setShowRenameFile,
    setSelectedFileForAction,
    setProcessData,
    setNoticeMessage,
    setShowSuccessNotice,
    setShowErrorNotice,
    setDocs,
    setError,
    setLoading,
    setWarning,
    onClientClick,
    setSelectedClient,
    setSelectedFolder,
    setSelectedUserFolder,
    setExpandedClients,
    setExpandedUserFolders,
    setSelectedItems,
    setMultiSelectMode,
    setDeletingItems,
    setShowErrorNotice,
    setShowSuccessNotice,
    setNoticeMessage,
    setShowDeleteFolderModal,
    setFolderToDelete,
    setShowCreateProcess,
    setNewProcessName,
    setNewProcessType,
    setSelectedFile,
    setShowFileNameInput,
    setCustomFileName: setNewFileName,
    setPreviewDoc,
    setPreviewUrl,
    setPreviewError,
    setPreviewLoading,
  };
}
