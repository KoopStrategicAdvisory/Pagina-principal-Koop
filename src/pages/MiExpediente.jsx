import React, { useEffect, useRef, useState } from 'react';
import '../styles/dashboard.css';
import '../styles/mi-expediente.css';
import { useAuth } from '../context/AuthContext';
import { normalizeUpperAscii } from '../utils/strings.js';
import { listRecentDocs, uploadDoc, getDownloadUrl, getClientDocumentHistory, getDiagnostics, createFolder, deleteDocument, deleteFolder } from '../api/docs';
import { listActiveClients } from '../api/clients';
import { SuccessNotice, DangerNotice } from '../components/common/Notice';

// Función global para corregir codificación UTF-8
const fixUTF8Encoding = (str) => {
  if (!str) return str;
  
  console.log('🔧 Fixing encoding for:', str);
  console.log('🔧 Original bytes:', Array.from(str).map(c => c.charCodeAt(0).toString(16)).join(' '));
  
  let corrected = str;
  
  // Verificar si el texto ya tiene caracteres correctos (no corromper texto bueno)
  const hasCorrectChars = /[áéíóúñüçÁÉÍÓÚÑÜÇ]/.test(str);
  const hasCorruptedChars = /[Ã]/.test(str);
  
  if (hasCorrectChars && !hasCorruptedChars) {
    console.log('🔧 Text already has correct characters, preserving:', str);
    return str; // No corromper texto que ya está bien
  }
  
  // Solo aplicar correcciones si hay caracteres corrompidos
  if (hasCorruptedChars) {
    console.log('🔧 Detected corrupted characters, applying corrections...');
    
    corrected = corrected
      // Correcciones específicas para "ConstituciÃ³n PolÃ­tica"
      .replace(/ConstituciÃ³n/g, 'Constitución')
      .replace(/PolÃ­tica/g, 'Política')
      .replace(/constituciÃ³n/g, 'constitución')
      .replace(/polÃ­tica/g, 'política')
      // Correcciones generales para caracteres españoles
      .replace(/Ã¡/g, 'á')
      .replace(/Ã©/g, 'é') 
      .replace(/Ã­/g, 'í')
      .replace(/Ã³/g, 'ó')
      .replace(/Ãº/g, 'ú')
      .replace(/Ã±/g, 'ñ')
      .replace(/Ã¼/g, 'ü')
      .replace(/Ã§/g, 'ç')
      .replace(/Ã/g, 'Á')
      .replace(/Ã‰/g, 'É')
      .replace(/Ã/g, 'Í')
      .replace(/Ã"/g, 'Ó')
      .replace(/Ãš/g, 'Ú')
      .replace(/Ã'/g, 'Ñ')
      .replace(/Ãœ/g, 'Ü')
      .replace(/Ã‡/g, 'Ç')
      .replace(/Ã¢/g, 'â')
      .replace(/Ãª/g, 'ê')
      .replace(/Ã®/g, 'î')
      .replace(/Ã´/g, 'ô')
      .replace(/Ã»/g, 'û')
      .replace(/Ã‚/g, 'Â')
      .replace(/ÃŠ/g, 'Ê')
      .replace(/ÃŽ/g, 'Î')
      .replace(/Ã"/g, 'Ô')
      .replace(/Ã›/g, 'Û')
      .replace(/Ã¨/g, 'è')
      .replace(/Ã¬/g, 'ì')
      .replace(/Ã²/g, 'ò')
      .replace(/Ã¹/g, 'ù')
      .replace(/Ã€/g, 'À')
      .replace(/ÃŒ/g, 'Ì')
      .replace(/Ã'/g, 'Ò')
      .replace(/Ã™/g, 'Ù')
      .replace(/Ã¤/g, 'ä')
      .replace(/Ã«/g, 'ë')
      .replace(/Ã¯/g, 'ï')
      .replace(/Ã¶/g, 'ö')
      .replace(/Ã„/g, 'Ä')
      .replace(/Ã‹/g, 'Ë')
      .replace(/Ã/g, 'Ï')
      .replace(/Ã–/g, 'Ö')
      .replace(/â€™/g, "'")
      .replace(/â€œ/g, '"')
      .replace(/â€/g, '"')
      .replace(/â€"/g, '–')
      .replace(/â€"/g, '—');
    
    // Intentar corrección desde latin1 si aún hay problemas
    if (corrected.includes('Ã')) {
      try {
        const latin1Corrected = Buffer.from(corrected, 'latin1').toString('utf8');
        if (!latin1Corrected.includes('Ã')) {
          corrected = latin1Corrected;
          console.log('🔧 Applied latin1 correction:', corrected);
        }
      } catch (e) {
        console.log('🔧 Error en corrección latin1:', e);
      }
    }
  }
  
  console.log('🔧 Final result:', corrected);
  console.log('🔧 Final bytes:', Array.from(corrected).map(c => c.charCodeAt(0).toString(16)).join(' '));
  return corrected;
};

// Función de corrección agresiva
const aggressiveUTF8Fix = (str) => {
  if (!str) return str;
  
  return str
    // Correcciones específicas para casos reportados
    .replace(/TrÃ¡mite/g, 'Trámite')
    .replace(/TÃºtela/g, 'Tútela')
    .replace(/trÃ¡mite/g, 'trámite')
    .replace(/tÃºtela/g, 'tútela')
    .replace(/ConstituciÃ³n/g, 'Constitución')
    .replace(/PolÃ­tica/g, 'Política')
    .replace(/constituciÃ³n/g, 'constitución')
    .replace(/polÃ­tica/g, 'política')
    // Correcciones generales
    .replace(/Ã¡/g, 'á')
    .replace(/Ã©/g, 'é')
    .replace(/Ã­/g, 'í')
    .replace(/Ã³/g, 'ó')
    .replace(/Ãº/g, 'ú')
    .replace(/Ã±/g, 'ñ')
    .replace(/Ã/g, 'Á')
    .replace(/Ã‰/g, 'É')
    .replace(/Ã/g, 'Í')
    .replace(/Ã"/g, 'Ó')
    .replace(/Ãš/g, 'Ú')
    .replace(/Ã'/g, 'Ñ')
    .replace(/Ã¼/g, 'ü')
    .replace(/Ãœ/g, 'Ü')
    .replace(/Ã‡/g, 'Ç')
    .replace(/Ã§/g, 'ç');
};

// Hook personalizado para manejar codificación en inputs con corrección agresiva
const useUTF8Input = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  
  const handleChange = (e) => {
    let inputValue = e.target.value;
    
    // Aplicar corrección agresiva SIEMPRE
    const correctedValue = aggressiveUTF8Fix(inputValue);
    
    if (correctedValue !== inputValue) {
      console.log('🔧 AGGRESSIVE FIX - Original:', inputValue, 'Corrected:', correctedValue);
      e.target.value = correctedValue;
      inputValue = correctedValue;
    }
    
    setValue(inputValue);
  };
  
  return [value, setValue, handleChange];
};

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

  // Estados para notificaciones
  const [showSuccessNotice, setShowSuccessNotice] = useState(false);
  const [showErrorNotice, setShowErrorNotice] = useState(false);
  const [noticeMessage, setNoticeMessage] = useState('');
  const fileInputRef = useRef(null);
  const noticeTimeoutRef = useRef(null);

  // Estados para gesti�n de carpetas de clientes
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
  const [showRenameFile, setShowRenameFile] = useState(false);
  const [showDeleteFile, setShowDeleteFile] = useState(false);
  const [showProcessInfo, setShowProcessInfo] = useState(false);
  const [selectedFileForAction, setSelectedFileForAction] = useState(null);
  const [newFileName, setNewFileName] = useState('');
  // Estados para modal de audiencias
  const [showAudienceModal, setShowAudienceModal] = useState(false);
  const [audienceData, setAudienceData] = useState({
    fecha: '',
    actuacion: '',
    tipo: '',
    juzgado: '',
    estado: ''
  });
  const [audiences, setAudiences] = useState([]);

  // Estados para eliminar carpetas
  const [showDeleteFolderModal, setShowDeleteFolderModal] = useState(false);
  const [folderToDelete, setFolderToDelete] = useState(null);
  const [deletingFolder, setDeletingFolder] = useState(false);

  const [processData, setProcessData] = useState({
    radicado: '',
    clase: '',
    demandante: '',
    demandado: '',
    juzgado: '',
    estado: ''
  });
  const [newProcessName, setNewProcessName, handleProcessNameChange] = useUTF8Input('');
  const [newProcessType, setNewProcessType] = useState('');
  const [creatingProcess, setCreatingProcess] = useState(false);

  // Efecto específico para corregir el nombre del proceso
  useEffect(() => {
    if (newProcessName && newProcessName.includes('Ã')) {
      console.log('🔧 Process name has corrupted characters, correcting...');
      const corrected = fixUTF8Encoding(newProcessName);
      if (corrected !== newProcessName) {
        console.log('🔧 Auto-correcting process name:', newProcessName, '->', corrected);
        setNewProcessName(corrected);
      }
    }
  }, [newProcessName]);

  // Estados para selección múltiple
  const [multiSelectMode, setMultiSelectMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deletingItems, setDeletingItems] = useState(false);

  // Estados para subida de archivos con nombre personalizado
  const [selectedFile, setSelectedFile] = useState(null);
  const [customFileName, setCustomFileName, handleCustomFileNameChange] = useUTF8Input('');
  const [showFileNameInput, setShowFileNameInput] = useState(false);

  // Efecto específico para corregir el nombre del archivo personalizado - AGRESIVO
  useEffect(() => {
    if (customFileName) {
      const corrected = aggressiveUTF8Fix(customFileName);
      if (corrected !== customFileName) {
        console.log('🔧 AGGRESSIVE FILE NAME FIX - Original:', customFileName, 'Corrected:', corrected);
        setCustomFileName(corrected);
      }
    }
  }, [customFileName]);

  // Efecto para corregir automáticamente el input de archivo cada 100ms
  useEffect(() => {
    const handleFileInputCorrection = () => {
      // Buscar específicamente el input de nombre de archivo
      const fileInput = document.querySelector('input[type="text"][placeholder="Nombre del archivo..."]');
      if (fileInput && fileInput.value) {
        const corrected = aggressiveUTF8Fix(fileInput.value);
        if (corrected !== fileInput.value) {
          console.log('🔧 INTERVAL FILE INPUT FIX - Original:', fileInput.value, 'Corrected:', corrected);
          fileInput.value = corrected;
          
          // Disparar evento de cambio
          const changeEvent = new Event('change', { bubbles: true });
          fileInput.dispatchEvent(changeEvent);
        }
      }
    };

    // Ejecutar corrección cada 100ms
    const interval = setInterval(handleFileInputCorrection, 100);
    
    return () => clearInterval(interval);
  }, []);

  // Efecto para corregir automáticamente el texto - DESACTIVADO TEMPORALMENTE
  useEffect(() => {
    console.log('🔧 Global text correction effect loaded - DISABLED');
    // TEMPORAL: No aplicar correcciones automáticas
  }, []);

  // Efecto para monitorear y corregir codificación en tiempo real - AGRESIVO
  useEffect(() => {
    const handleInputEvent = (e) => {
      if (e.target.tagName === 'INPUT' && e.target.type === 'text') {
        const inputValue = e.target.value;
        const corrected = aggressiveUTF8Fix(inputValue);
        
        if (corrected !== inputValue) {
          console.log('🔧 GLOBAL AGGRESSIVE FIX - Original:', inputValue, 'Corrected:', corrected);
          e.target.value = corrected;
          
          // Disparar evento de cambio para actualizar el estado
          const changeEvent = new Event('change', { bubbles: true });
          e.target.dispatchEvent(changeEvent);
        }
      }
    };

    const handleKeyUpEvent = (e) => {
      if (e.target.tagName === 'INPUT' && e.target.type === 'text') {
        const inputValue = e.target.value;
        const corrected = aggressiveUTF8Fix(inputValue);
        
        if (corrected !== inputValue) {
          console.log('🔧 KEYUP AGGRESSIVE FIX - Original:', inputValue, 'Corrected:', corrected);
          e.target.value = corrected;
          
          // Disparar evento de cambio para actualizar el estado
          const changeEvent = new Event('change', { bubbles: true });
          e.target.dispatchEvent(changeEvent);
        }
      }
    };

    // Agregar listeners globales para inputs
    document.addEventListener('input', handleInputEvent);
    document.addEventListener('keyup', handleKeyUpEvent);
    
    return () => {
      document.removeEventListener('input', handleInputEvent);
      document.removeEventListener('keyup', handleKeyUpEvent);
    };
  }, []);

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

  const onClickUpload = () => {
    // Verificar si hay una carpeta seleccionada
    if (isAdmin && !selectedFolder?.path) {
      setNoticeMessage('Debes seleccionar una carpeta antes de subir un documento');
      setShowErrorNotice(true);
      return;
    }
    
    if (!isAdmin && !selectedUserFolder?.path) {
      setNoticeMessage('Debes seleccionar una carpeta antes de subir un documento');
      setShowErrorNotice(true);
      return;
    }
    
    fileInputRef.current?.click();
  };

  const onFileChange = (e) => {
    const f = e.target?.files?.[0];
    if (!f) return;
    
    // Validar que se haya seleccionado una subcarpeta específica
    let errorMessage = null;
    
    if (isAdmin) {
      // Para administradores: debe haber un cliente y una carpeta seleccionados
      if (!selectedClient?.documentNumber) {
        errorMessage = 'Debes seleccionar un cliente primero';
      } else if (!selectedFolder?.path) {
        errorMessage = 'Debes seleccionar una carpeta específica del proceso judicial para subir documentos. No se permiten archivos sueltos en la carpeta del cliente.';
      }
    } else {
      // Para usuarios regulares: debe haber una carpeta de usuario seleccionada
      if (!selectedUserFolder?.path) {
        errorMessage = 'Debes seleccionar una carpeta específica del proceso judicial para subir documentos. No se permiten archivos sueltos en la carpeta del cliente.';
      }
    }
    
    if (errorMessage) {
      setError(errorMessage);
      setNoticeMessage(errorMessage);
      setShowErrorNotice(true);
      try { e.target.value = null; } catch {}
      return;
    }
    
    // Guardar el archivo seleccionado y mostrar el input para editar el nombre
    setSelectedFile(f);
    setCustomFileName(f.name); // Nombre por defecto
    setShowFileNameInput(true);
    
    // Limpiar el input file
    try { e.target.value = null; } catch {}
  };

  /* const onFileChangeOld = async (e) => {
    const f = e.target?.files?.[0];
    if (!f) return;
    try {
      setLoading(true);
      setError(null);
      setShowErrorNotice(false);
      setShowSuccessNotice(false);
      // Validar que se haya seleccionado una subcarpeta específica
      let subfolder = null;
      let errorMessage = null;
      
      if (isAdmin) {
        // Para administradores: debe haber un cliente y una carpeta seleccionados
        if (!selectedClient?.documentNumber) {
          errorMessage = 'Debes seleccionar un cliente primero';
        } else if (!selectedFolder?.path) {
          errorMessage = 'Debes seleccionar una carpeta específica del proceso judicial para subir documentos. No se permiten archivos sueltos en la carpeta del cliente.';
        } else {
          subfolder = selectedFolder.path;
        }
      } else {
        // Para usuarios regulares: debe haber una carpeta de usuario seleccionada
        if (!selectedUserFolder?.path) {
          errorMessage = 'Debes seleccionar una carpeta específica del proceso judicial para subir documentos. No se permiten archivos sueltos en la carpeta del cliente.';
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
      
      // Mostrar notificación de éxito
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

  const handleFileUpload = async () => {
    if (!selectedFile || !customFileName.trim()) {
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
      
      // Determinar la subcarpeta
      let subfolder = null;
      if (isAdmin && selectedClient && selectedFolder) {
        subfolder = selectedFolder.path;
      } else if (!isAdmin && selectedUserFolder) {
        subfolder = selectedUserFolder.path;
      }
      
      // Crear un nuevo archivo con el nombre personalizado
      const originalFileName = customFileName.trim();
      console.log('🔧 File name original:', originalFileName);
      console.log('🔧 File name original bytes:', Array.from(originalFileName).map(c => c.charCodeAt(0).toString(16)).join(' '));
      
      // Aplicar corrección agresiva MÚLTIPLES VECES
      let correctedFileName = aggressiveUTF8Fix(originalFileName);
      console.log('🔧 File name después de primera corrección:', correctedFileName);
      
      // Segunda corrección por si acaso
      correctedFileName = aggressiveUTF8Fix(correctedFileName);
      console.log('🔧 File name después de segunda corrección:', correctedFileName);
      
      // Tercera corrección manual específica
      correctedFileName = correctedFileName
        .replace(/TrÃ¡mite/g, 'Trámite')
        .replace(/TÃºtela/g, 'Tútela')
        .replace(/trÃ¡mite/g, 'trámite')
        .replace(/tÃºtela/g, 'tútela');
      console.log('🔧 File name después de corrección manual:', correctedFileName);
      
      console.log('🔧 File name final (con corrección agresiva):', correctedFileName);
      const fileWithCustomName = new File([selectedFile], correctedFileName, {
        type: selectedFile.type,
        lastModified: selectedFile.lastModified
      });
      
      console.log('Subiendo archivo con nombre personalizado:', correctedFileName, 'a subfolder:', subfolder);
      console.log('🔧 Enviando useExactName: true');
      const res = await uploadDoc(fileWithCustomName, { subfolder, useExactName: true });
      
      // Mostrar inmediatamente el recién subido
      if (res?.file) setDocs((prev) => [res.file, ...prev]);
      
      // Actualizar lista desde el backend
      await reloadCurrentFolder();
      
      // Mostrar notificación de éxito
      setNoticeMessage(`Documento subido exitosamente`);
      setShowErrorNotice(true); // Notificación roja
      
      // Limpiar estados
      setSelectedFile(null);
      setCustomFileName('');
      setShowFileNameInput(false);
      
    } catch (e2) {
      const errorMsg = e2?.message || 'Error subiendo documento';
      setError(errorMsg);
      setNoticeMessage(`Error al subir documento: ${errorMsg}`);
      setShowErrorNotice(true);
    } finally {
      setLoading(false);
    }
  };

  const cancelFileUpload = () => {
    setSelectedFile(null);
    setCustomFileName('');
    setShowFileNameInput(false);
  };

  const onDownload = async (key, fallbackUrl) => {
    try {
      const { url } = await getDownloadUrl(key, 600);
      window.open(url || fallbackUrl, '_blank');
    } catch (e) {
      if (fallbackUrl) window.open(fallbackUrl, '_blank');
    }
  };


  // Funci�n para cargar carpetas de un cliente
  const loadClientFolders = async (client) => {
    if (!client?.documentNumber) return;
    
    setLoadingFolders(true);
    try {
      // Usar el endpoint /recent para listar objetos de S3 directamente
      const data = await listRecentDocs({ 
        limit: 100,
        subfolder: `clientes/${client.documentNumber}`
      });
      
      // Agrupar documentos por carpeta
      const folders = {};
      const clientBasePath = `clientes/${client.documentNumber}`;
      
      if (Array.isArray(data?.items)) {
        console.log('📁 Cargando carpetas para cliente:', client.documentNumber);
        console.log('📁 clientBasePath:', clientBasePath);
        console.log('📁 Items recibidos:', data.items.length);
        data.items.forEach(item => {
          if (item.isFolder) {
            // Es una carpeta - solo mostrar subcarpetas, no la carpeta padre del cliente
            const folderPath = item.key?.replace(/\/$/, ''); // Remover trailing slash
            
            console.log('📁 Procesando carpeta:', folderPath);
            console.log('📁 Es diferente a clientBasePath?', folderPath !== clientBasePath);
            console.log('📁 Empieza con clientBasePath + /?', folderPath.startsWith(clientBasePath + '/'));
            
            // Solo incluir si es una subcarpeta del cliente (no la carpeta padre)
            if (folderPath && folderPath !== clientBasePath && folderPath.startsWith(clientBasePath + '/')) {
              // Extraer solo el nombre de la carpeta (la �ltima parte despu�s del cliente)
              const relativePath = folderPath.replace(clientBasePath + '/', '');
              const folderName = relativePath.split('/').pop() || 'Carpeta';
              
              console.log('✅ Agregando carpeta:', folderName, 'path:', folderPath);
              
              folders[folderPath] = {
                name: folderName,
                path: folderPath,
                documents: [],
                isFolder: true
              };
            } else {
              console.log('❌ Excluyendo carpeta:', folderPath);
            }
    } else {
            // Es un archivo
            const folderPath = item.key?.split('/').slice(0, -1).join('/') || 'root';
            
            // Solo incluir archivos que est�n en subcarpetas del cliente
            if (folderPath && folderPath !== clientBasePath && folderPath.startsWith(clientBasePath + '/')) {
              if (!folders[folderPath]) {
                // Extraer solo el nombre de la carpeta (la �ltima parte despu�s del cliente)
                const relativePath = folderPath.replace(clientBasePath + '/', '');
                const folderName = relativePath.split('/').pop() || 'Carpeta';
                
                folders[folderPath] = {
                  name: folderName,
                  path: folderPath,
                  documents: [],
                  isFolder: false
                };
              }
              folders[folderPath].documents.push(item);
            }
          }
        });
      }
      
      // Si no hay subcarpetas encontradas, no crear ninguna carpeta
      // Solo mostrar las subcarpetas reales que existen
      
      setClientFolders(prev => ({
        ...prev,
        [client.id]: folders
      }));
    } catch (e) {
      console.error('Error cargando carpetas del cliente:', e);
      // En caso de error, no mostrar ninguna carpeta
      setClientFolders(prev => ({
        ...prev,
        [client.id]: {}
      }));
    } finally {
      setLoadingFolders(false);
    }
  };

  // Funci�n para manejar clic en cliente (acorde�n)
  const onClientClick = async (client) => {
    const isExpanded = expandedClients.has(client.id);
    
    if (isExpanded) {
      // Si est� expandido, lo contraemos
      setExpandedClients(prev => {
        const newSet = new Set(prev);
        newSet.delete(client.id);
        return newSet;
      });
      setSelectedClient(null);
      setSelectedFolder(null);
    } else {
      // Si est� contra�do, lo expandimos
      setExpandedClients(prev => new Set(prev).add(client.id));
      setSelectedClient(client);
      setSelectedFolder(null);
      
      // Si ya tenemos las carpetas cargadas, no las volvemos a cargar
      if (!clientFolders[client.id]) {
        await loadClientFolders(client);
      }
    }
  };

  // Funci�n para manejar clic en carpeta
  const onFolderClick = async (folder) => {
    setSelectedFolder(folder);
    
    // Si la carpeta ya tiene documentos cargados, los mostramos
    if (folder.documents && folder.documents.length > 0) {
      setDocs(folder.documents);
    } else {
      // Si no tiene documentos, intentamos cargar desde la API
      setLoading(true);
      try {
        const data = await listRecentDocs({ 
          limit: 100,
          subfolder: folder.path
        });
        const documents = Array.isArray(data?.items) ? data.items.filter(item => !item.isFolder) : [];
        setDocs(documents);
        
        // Actualizar la carpeta con los documentos cargados
        setClientFolders(prev => ({
          ...prev,
          [selectedClient.id]: {
            ...prev[selectedClient.id],
            [folder.path]: {
              ...folder,
              documents: documents
            }
          }
        }));
      } catch (e) {
        console.error('Error cargando documentos de la carpeta:', e);
        setDocs([]);
      } finally {
        setLoading(false);
      }
    }
  };

  // Función para verificar si una carpeta está vacía
  const isFolderEmpty = async (folder) => {
    try {
      const data = await listRecentDocs({ 
        limit: 100, // Aumentar el límite para verificar todos los elementos
        subfolder: folder.path
      });
      
      if (!data?.items || data.items.length === 0) {
        return true; // No hay elementos, la carpeta está vacía
      }
      
      // Verificar que no haya archivos (solo carpetas)
      const hasFiles = data.items.some(item => {
        const isFolder = item.isFolder || item.key?.endsWith('/') || item.name?.endsWith('/');
        return !isFolder; // Si no es carpeta, es un archivo
      });
      
      return !hasFiles; // Si no hay archivos, la carpeta está vacía
    } catch (error) {
      console.error('Error verificando si la carpeta está vacía:', error);
      return false; // En caso de error, asumir que no está vacía por seguridad
    }
  };

  // Función para eliminar una carpeta
  const handleDeleteFolder = async () => {
    if (!folderToDelete) return;
    
    try {
      setDeletingFolder(true);
      
      // Verificar que la carpeta esté vacía
      const isEmpty = await isFolderEmpty(folderToDelete);
      if (!isEmpty) {
        setNoticeMessage('No se puede eliminar la carpeta porque contiene archivos. Solo se pueden eliminar carpetas completamente vacías.');
        setShowErrorNotice(true);
        return;
      }
      
      // Eliminar la carpeta del backend
      console.log('Eliminando carpeta:', folderToDelete.path);
      await deleteFolder(folderToDelete.path);
      
      // Actualizar el estado local
      if (selectedClient) {
        setClientFolders(prev => {
          const updated = { ...prev };
          if (updated[selectedClient.id]) {
            const filtered = Object.fromEntries(
              Object.entries(updated[selectedClient.id]).filter(
                ([key, folder]) => folder.path !== folderToDelete.path
              )
            );
            updated[selectedClient.id] = filtered;
          }
          return updated;
        });
      }
      
      // Si la carpeta eliminada era la seleccionada, limpiar la selección
      if (selectedFolder?.path === folderToDelete.path) {
        setSelectedFolder(null);
        setDocs([]); // Limpiar también los documentos mostrados
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
  };

  // Función para cargar carpetas del usuario regular
  const loadUserFolders = async () => {
    setLoadingUserFolders(true);
    try {
      console.log('Usuario actual:', user);
      console.log('Token de acceso:', accessToken ? 'Presente' : 'Ausente');
      console.log('Roles del usuario:', user?.roles);
      
      // Primero intentamos una llamada simple para verificar autenticación
      console.log('Intentando verificar conectividad...');
      try {
        const healthCheck = await getDiagnostics();
        console.log('Health check exitoso:', healthCheck);
      } catch (healthError) {
        console.error('Health check falló:', healthError);
        throw new Error('No se puede conectar con el servidor de documentos');
      }
      
      console.log('Intentando cargar documentos del usuario...');
      
      // Para usuarios regulares, cargamos sus documentos desde su carpeta de cliente
      // El backend automáticamente resuelve la carpeta del cliente basado en el usuario autenticado
      // cuando usamos 'clientes' como subfolder
      const data = await listRecentDocs({ limit: 100, subfolder: 'clientes' });
      console.log('Datos de la API para usuario:', data);
      const items = Array.isArray(data?.items) ? data.items : [];
      console.log('Items procesados:', items);
      
      // Agrupamos los documentos por carpetas
      const foldersMap = new Map();
      
      // Obtener el prefijo base del cliente (ej: "clientes/1032465160/")
      // Buscar la primera carpeta que contenga "clientes/" para obtener la ruta base
      let clientBasePath = 'clientes';
      const clientFolder = items.find(item => item.isFolder && item.key && item.key.includes('clientes/'));
      if (clientFolder) {
        // Extraer la ruta base del cliente (ej: "clientes/1032465160/")
        const pathParts = clientFolder.key.split('/');
        if (pathParts.length >= 2) {
          clientBasePath = `${pathParts[0]}/${pathParts[1]}/`;
        }
      }
      console.log('Ruta base del cliente:', clientBasePath);
      console.log('Items encontrados:', items.map(item => ({ key: item.key, isFolder: item.isFolder, name: item.name })));
      
      // Primero, procesar solo las carpetas para evitar duplicados
      items.forEach(item => {
        if (item.isFolder) {
          const fullPath = item.key;
          
          // Solo incluir si es una subcarpeta dentro de clientes/1032465160/
          if (fullPath && fullPath.startsWith(clientBasePath) && fullPath !== clientBasePath) {
            const relativePath = fullPath.replace(clientBasePath, '').replace(/^\/+|\/+$/g, '');
            
            // Verificar que sea una subcarpeta directa (no sub-subcarpeta)
            if (relativePath && !relativePath.includes('/')) {
              foldersMap.set(fullPath, {
                name: relativePath,
                path: fullPath,
                documents: [],
                isFolder: true
              });
            }
          }
        }
      });
      
      // Luego, agregar archivos a las carpetas existentes
      items.forEach(item => {
        if (!item.isFolder) {
          const pathParts = item.key?.split('/') || [];
          
          if (pathParts.length > 2) { // clientes/1032465160/subcarpeta/archivo
            const folderPath = pathParts.slice(0, -1).join('/');
            
            if (folderPath.startsWith(clientBasePath) && folderPath !== clientBasePath) {
              const relativePath = folderPath.replace(clientBasePath, '').replace(/^\/+|\/+$/g, '');
              
              if (relativePath && !relativePath.includes('/')) {
                // Solo agregar archivo si la carpeta ya existe y el item no es una carpeta
                const existingFolder = foldersMap.get(folderPath);
                if (existingFolder && !item.isFolder) {
                  existingFolder.documents.push(item);
                }
              }
            }
          }
        }
      });
      
      const folders = Array.from(foldersMap.values());
      console.log('Carpetas del usuario cargadas:', folders);
      setUserFolders(folders);
    } catch (error) {
      console.error('Error cargando carpetas del usuario:', error);
      console.error('Detalles del error:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data
      });
      
      if (error.response?.status === 401) {
        setError('Error de autenticación. Por favor, cierra sesión y vuelve a iniciar sesión.');
      } else {
        setError('Error cargando carpetas: ' + (error.message || 'Error desconocido'));
      }
    } finally {
      setLoadingUserFolders(false);
    }
  };

  // Función para manejar clic en carpeta de usuario
  const onUserFolderClick = async (folder) => {
    setSelectedUserFolder(folder);
    
    // Si ya tenemos los documentos cargados para esta carpeta, los mostramos
    if (folder.documents && folder.documents.length > 0) {
      setDocs(folder.documents);
    } else {
      // Si no, cargamos los documentos de la carpeta
      try {
        setLoading(true);
        const data = await listRecentDocs({ 
          limit: 50, 
          subfolder: folder.path 
        });
        // Solo mostrar archivos, no carpetas
        const documents = Array.isArray(data?.items) ? data.items.filter(item => !item.isFolder) : [];
        setDocs(documents);
        
        // Actualizamos la carpeta con los documentos cargados (solo archivos)
        setUserFolders(prev => prev.map(f => 
          f.path === folder.path 
            ? { ...f, documents: documents }
            : f
        ));
      } catch (error) {
        console.error('Error cargando documentos de la carpeta:', error);
        setError('Error cargando documentos de la carpeta');
      } finally {
        setLoading(false);
      }
    }
  };

  // Función para manejar clic en carpeta de usuario (acordeón)
  const onUserFolderAccordionClick = (folder) => {
    const isExpanded = expandedUserFolders.has(folder.path);
    
    if (isExpanded) {
      // Si está expandido, lo contraemos
      setExpandedUserFolders(prev => {
        const newSet = new Set(prev);
        newSet.delete(folder.path);
        return newSet;
      });
      setSelectedUserFolder(null);
    } else {
      // Si está contraído, lo expandimos
      setExpandedUserFolders(prev => new Set(prev).add(folder.path));
      onUserFolderClick(folder);
    }
  };

  // Funciones para acciones del expediente
  const onCreateProcess = async () => {
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

      // Determinar la ruta base del cliente
      let clientBasePath = '';
      if (isAdmin && selectedClient?.documentNumber) {
        clientBasePath = `clientes/${selectedClient.documentNumber}`;
      } else if (!isAdmin) {
        // Para usuarios regulares, usar su carpeta de cliente
        // El backend automáticamente resuelve la carpeta del cliente
        clientBasePath = 'clientes';
      } else {
        throw new Error('No se puede determinar la carpeta del cliente');
      }

      // Crear el nombre de la carpeta combinando tipo de proceso + nombre
      const processName = newProcessName.trim();
      
      console.log('🔧 Proceso original:', processName);
      console.log('🔧 Proceso original bytes:', Array.from(processName).map(c => c.charCodeAt(0).toString(16)).join(' '));
      
      // Aplicar corrección agresiva
      const correctedProcessName = aggressiveUTF8Fix(processName);
      console.log('🔧 Proceso final (con corrección agresiva):', correctedProcessName);
      let folderName = '';
      
      if (newProcessType && correctedProcessName) {
        // Combinar tipo de proceso + nombre
        const typeLabels = {
          'civil': 'Proceso Civil',
          'laboral': 'Proceso Laboral', 
          'penal': 'Proceso Penal',
          'administrativo': 'Proceso Administrativo',
          'comercial': 'Proceso Comercial',
          'ejecutivo': 'Proceso Ejecutivo',
          'familia': 'Proceso de Familia',
          'notarial': 'Trámite Notarial',
          'tramite': 'Trámite'
        };
        const typeLabel = typeLabels[newProcessType] || newProcessType;
        folderName = `${typeLabel} - ${correctedProcessName}`;
      } else if (correctedProcessName) {
        // Solo nombre si no hay tipo seleccionado
        folderName = correctedProcessName;
      } else {
        throw new Error('El nombre del proceso es requerido');
      }
      
      const fullPath = `${clientBasePath}/${folderName}`;

      console.log('Creando carpeta:', fullPath);
      console.log('folderName (hex):', Buffer.from(folderName, 'utf8').toString('hex'));
      console.log('fullPath (hex):', Buffer.from(fullPath, 'utf8').toString('hex'));
      
      // Log del payload que se enviará al backend
      const payload = { subfolder: fullPath };
      console.log('🔧 Payload a enviar al backend:', payload);
      console.log('🔧 Payload JSON:', JSON.stringify(payload));
      console.log('🔧 Payload subfolder (hex):', Buffer.from(payload.subfolder, 'utf8').toString('hex'));
      
      // Crear la carpeta usando la API
      const result = await createFolder(payload);
      
      console.log('Carpeta creada exitosamente:', result);

      // Limpiar el formulario
      setNewProcessName('');
      setNewProcessType('');
      setShowCreateProcess(false);

      // Mostrar notificación de éxito
      setNoticeMessage(`Proceso creado exitosamente`);
      setShowSuccessNotice(true);

      // Recargar las carpetas del cliente
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
  };


  const onRenameFile = (file) => {
    setSelectedFileForAction(file);
    setNewFileName(file.name || file.key?.split('/').pop() || '');
    setShowRenameFile(true);
  };

  const onDeleteFile = (file) => {
    setSelectedFileForAction(file);
    setShowDeleteFile(true);
  };

  const onSaveProcessInfo = async () => {
    try {
      // Aquí implementarías la lógica para guardar la información del proceso
      console.log('Guardando información del proceso:', processData);
      setShowProcessInfo(false);
      setError(null);
    } catch (e) {
      setError('Error guardando información: ' + e.message);
    }
  };

  // Funciones para selección múltiple
  const toggleMultiSelectMode = () => {
    setMultiSelectMode(!multiSelectMode);
    setSelectedItems(new Set());
  };

  const toggleItemSelection = (itemKey) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(itemKey)) {
      newSelected.delete(itemKey);
    } else {
      newSelected.add(itemKey);
    }
    setSelectedItems(newSelected);
  };

  const selectAllItems = () => {
    const allItems = new Set();
    docs.forEach(doc => {
      if (doc.key) allItems.add(doc.key);
    });
    setSelectedItems(allItems);
  };

  const clearSelection = () => {
    setSelectedItems(new Set());
  };

  // useEffect para manejar el timeout de las notificaciones
  useEffect(() => {
    if (showSuccessNotice || showErrorNotice) {
      // Limpiar timeout anterior si existe
      if (noticeTimeoutRef.current) {
        clearTimeout(noticeTimeoutRef.current);
      }
      
      // Establecer nuevo timeout para ocultar la notificación después de 5 segundos
      noticeTimeoutRef.current = setTimeout(() => {
        setShowSuccessNotice(false);
        setShowErrorNotice(false);
        setNoticeMessage('');
      }, 5000);
    }
    
    // Cleanup function para limpiar el timeout cuando el componente se desmonte
    return () => {
      if (noticeTimeoutRef.current) {
        clearTimeout(noticeTimeoutRef.current);
      }
    };
  }, [showSuccessNotice, showErrorNotice]);

  const reloadCurrentFolder = async () => {
    console.log('🔄 Iniciando recarga de carpeta...');
    setLoading(true);
    setError(null);
    setWarning(null);
    try {
      let subfolder = null;
      
      if (isAdmin && selectedClient && selectedFolder) {
        // Para administradores: recargar la carpeta del cliente seleccionada
        subfolder = selectedFolder.path;
        console.log('📁 Admin - Carpeta específica:', subfolder);
      } else if (!isAdmin && selectedUserFolder) {
        // Para usuarios regulares: recargar su carpeta seleccionada
        subfolder = selectedUserFolder.path;
        console.log('👤 Usuario - Carpeta específica:', subfolder);
      } else if (isAdmin && selectedClient) {
        // Si hay cliente pero no carpeta específica, recargar la carpeta del cliente
        subfolder = `clientes/${selectedClient.documentNumber}`;
        console.log('📁 Admin - Carpeta del cliente:', subfolder);
      } else if (!isAdmin) {
        // Para usuarios regulares sin carpeta específica, recargar su carpeta base
        subfolder = 'clientes';
        console.log('👤 Usuario - Carpeta base:', subfolder);
      } else {
        // Fallback: recargar la carpeta por defecto
        subfolder = DEFAULT_FOLDER;
        console.log('🔄 Fallback - Carpeta por defecto:', subfolder);
      }
      
      console.log('📡 Llamando API con subfolder:', subfolder);
      const data = await listRecentDocs({ limit: 100, subfolder });
      console.log('📦 Datos recibidos de la API:', data);
      
      const allItems = Array.isArray(data?.items) ? data.items : [];
      console.log('📋 Total de elementos recibidos:', allItems.length);
      
      // Mostrar tanto archivos como carpetas
      setDocs(allItems);
      console.log('✅ Lista de documentos actualizada con', allItems.length, 'elementos');
      
      if (data?.warning) {
        setWarning(data.warning);
        console.log('⚠️ Advertencia:', data.warning);
      }
    } catch (e) {
      console.error('❌ Error recargando carpeta:', e);
      setError(e?.message || 'Error recargando documentos');
    } finally {
      setLoading(false);
      console.log('🏁 Recarga completada');
    }
  };

  const handleDeleteSelected = async () => {
    if (selectedItems.size === 0) return;
    
    try {
      setDeletingItems(true);
      setError(null);
      setShowErrorNotice(false);
      setShowSuccessNotice(false);
      
      // Eliminar archivos y carpetas seleccionados
      const itemsToDelete = Array.from(selectedItems);
      let deletedCount = 0;
      let errors = [];
      
      for (const itemKey of itemsToDelete) {
        try {
          console.log('🗑️ Eliminando elemento:', itemKey);
          await deleteDocument(itemKey);
          deletedCount++;
          console.log('✅ Elemento eliminado exitosamente:', itemKey);
        } catch (e) {
          console.error('❌ Error eliminando elemento:', itemKey, e);
          const doc = docs.find(d => d.key === itemKey);
          const name = doc?.name || itemKey.split('/').pop() || 'Elemento';
          errors.push(`${name}: ${e?.message || 'Error desconocido'}`);
        }
      }
      
      console.log(`📊 Resumen de eliminación: ${deletedCount} eliminados, ${errors.length} errores`);
      
      // Limpiar selección y salir del modo de selección múltiple
      setSelectedItems(new Set());
      setMultiSelectMode(false);
      setShowDeleteConfirm(false);
      
      // Mostrar notificación de eliminación (siempre en rojo)
      if (errors.length === 0) {
        setNoticeMessage(`Elementos eliminados correctamente`);
        setShowErrorNotice(true); // Cambiado a rojo
      } else if (deletedCount > 0) {
        setNoticeMessage(`Algunos elementos eliminados correctamente`);
        setShowErrorNotice(true);
      } else {
        setNoticeMessage(`Error al eliminar elementos`);
        setShowErrorNotice(true);
      }
      
      // Pequeño delay para asegurar que el servidor haya procesado la eliminación
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Recargar la lista de documentos de la carpeta actual
      await reloadCurrentFolder();
      
    } catch (e) {
      console.error('Error en eliminación masiva:', e);
      const errorMsg = e?.message || 'Error eliminando elementos';
      setError(errorMsg);
      setNoticeMessage(`Error al eliminar elementos: ${errorMsg}`);
      setShowErrorNotice(true);
    } finally {
      setDeletingItems(false);
    }
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
              ✕ Cerrar
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
            <button 
              className={`btn ${multiSelectMode ? 'btn-orange' : 'btn-secondary'}`}
              onClick={toggleMultiSelectMode}
              title={multiSelectMode ? 'Salir del modo de selección' : 'Seleccionar múltiples archivos'}
            >
              {multiSelectMode ? '✕ Cancelar selección' : '☑️ Seleccionar archivos'}
            </button>
            {multiSelectMode && selectedItems.size > 0 && (
              <button 
                className="btn btn-danger"
                onClick={() => setShowDeleteConfirm(true)}
                title={`Eliminar ${selectedItems.size} elemento${selectedItems.size > 1 ? 's' : ''} seleccionado${selectedItems.size > 1 ? 's' : ''}`}
              >
                🗑️ Eliminar ({selectedItems.size})
              </button>
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
                          {/* Nombre de la carpeta clickeable con indicador de acordeón */}
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
                            {/* Indicador de acordeón */}
                            <span style={{
                              display: 'inline-block',
                              transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                              transition: 'transform 0.2s ease',
                              fontSize: '12px',
                              color: isExpanded ? '#4fd1c5' : '#9fb3cc'
                            }}>
                              ▼
                            </span>
                            {folder.name}
                          </div>
                          
                          {/* Contenido de la carpeta (acordeón) */}
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
              {/* Mostrar carpetas del cliente cuando está en modo modal */}
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
                              {multiSelectMode && (
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
                                  🗑️
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
                <div className="me-leaf" style={{ opacity: .8 }}>Cargando clientes�</div>
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
                        {/* Nombre del cliente clickeable con indicador de acorde�n */}
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
                          onClick={() => onClientClick(c)}
                        >
                          {/* Indicador de acorde�n */}
                          <span style={{
                            display: 'inline-block',
                            transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                            fontSize: '12px',
                            color: isExpanded ? '#4fd1c5' : '#9fb3cc'
                          }}>
                            ▼
                          </span>
                          {c.name}
                        </div>
                        
                        {/* Contenido del cliente (acorde�n) */}
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
                                      {multiSelectMode && (
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
                                          🗑️
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
                            {!isAdmin && (
                              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                                <button
                                  className="btn btn-secondary btn-sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onDownload(d.key, d.downloadURL || d.downloadUrl || d.webContentLink || d.webViewLink);
                                  }}
                                  title="Descargar archivo"
                                  disabled={multiSelectMode}
                                >
                                  📥
                                </button>
                              </div>
                            )}
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
                      <th>Actuación</th>
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
                  <input ref={fileInputRef} type="file" style={{ display: 'none' }} onChange={onFileChange} />
                  <button 
                    className="btn btn-primary" 
                    onClick={onClickUpload}
                    disabled={loading}
                    title={isAdmin ? 
                      (!selectedClient?.documentNumber ? 'Selecciona un cliente primero' : 
                       !selectedFolder?.path ? 'Selecciona una carpeta específica del proceso judicial para subir documentos' : '') :
                      (!selectedUserFolder?.path ? 'Selecciona una carpeta específica del proceso judicial para subir documentos' : '')
                    }
                    style={{ width: '100%', padding: '12px' }}
                  >
                    {loading ? 'Subiendo...' : '📄 Radicar documento'}
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
                          // Corrección adicional al perder el foco
                          const corrected = aggressiveUTF8Fix(e.target.value);
                          if (corrected !== e.target.value) {
                            console.log('🔧 FILE INPUT BLUR FIX - Original:', e.target.value, 'Corrected:', corrected);
                            e.target.value = corrected;
                            setCustomFileName(corrected);
                          }
                        }}
                        onKeyUp={(e) => {
                          // Corrección adicional al soltar tecla
                          const corrected = aggressiveUTF8Fix(e.target.value);
                          if (corrected !== e.target.value) {
                            console.log('🔧 FILE INPUT KEYUP FIX - Original:', e.target.value, 'Corrected:', corrected);
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
                          {loading ? 'Subiendo...' : '✅ Subir'}
                        </button>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={cancelFileUpload}
                          disabled={loading}
                          style={{ flex: 1, padding: '8px' }}
                        >
                          ❌ Cancelar
                        </button>
                      </div>
                    </div>
                  )}
                  
                  <button 
                    className="btn btn-secondary" 
                    onClick={() => setShowCreateProcess(true)}
                    style={{ width: '100%', padding: '12px' }}
                  >
                    📋 Crear Proceso
                  </button>
                  
                  <button 
                    className="btn btn-secondary" 
                    onClick={() => setShowProcessInfo(true)}
                    style={{ width: '100%', padding: '12px' }}
                  >
                    ℹ️ Información del Expediente
                  </button>
                  
                  <button 
                    className="btn btn-secondary" 
                    onClick={() => setShowAudienceModal(true)}
                    style={{ width: '100%', padding: '12px' }}
                  >
                    📅 Programar audiencia
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
                    <div className="me-tag">Demandante</div><div>Juan Pérez</div>
                    <div className="me-tag">Demandado</div><div>Acme S.A.S.</div>
                    <div className="me-tag">Juzgado</div><div>JDO 009 MPC</div>
                    <div className="me-tag">Estado</div><div>En trámite</div>
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
                  ℹ️ Esta ventana generará el nombre completo de la carpeta combinando el tipo de proceso seleccionado con el nombre que escribas.
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
                  <option value="notarial">Trámite Notarial</option>
                  <option value="tramite">Trámite</option>
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
                  // Aquí implementarías la lógica para renombrar el archivo
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
                ⚠️ Esta acción no se puede deshacer
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
                  // Aquí implementarías la lógica para eliminar el archivo
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

      {/* Modal para información del expediente (solo en modo modal) */}
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
              <div className="dash-title">Información del Expediente</div>
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
                    placeholder="Juan Pérez"
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
                    <option value="en-tramite">En trámite</option>
                    <option value="sentencia">Sentencia</option>
                    <option value="archivado">Archivado</option>
                    <option value="suspension">Suspensión</option>
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
                Guardar Información
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de confirmación de eliminación masiva */}
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
            style={{ maxWidth: '500px', width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dash-header" style={{ marginBottom: 8 }}>
              <div className="dash-title">Confirmar Eliminación</div>
            </div>
            
            <div className="dash-item" style={{ display: 'grid', gap: 16 }}>
              <div>
                ¿Estás seguro de que quieres eliminar {selectedItems.size} elemento{selectedItems.size > 1 ? 's' : ''} seleccionado{selectedItems.size > 1 ? 's' : ''}?
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
                          {isFolder ? '📁' : '📄'} {name}
                        </span>
                        <span style={{ color: '#9fb3cc', fontSize: '12px', marginLeft: '8px' }}>
                          ({isFolder ? 'Carpeta' : 'Archivo'})
                        </span>
                      </li>
                    );
                  })}
                  {selectedItems.size > 10 && (
                    <li style={{ color: '#9fb3cc', fontStyle: 'italic' }}>
                      ... y {selectedItems.size - 10} elemento{selectedItems.size - 10 > 1 ? 's' : ''} más
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
                ⚠️ Esta acción no se puede deshacer
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
                ✕
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
                  Actuación
                </label>
                <input
                  type="text"
                  value={audienceData.actuacion}
                  onChange={(e) => setAudienceData(prev => ({ ...prev, actuacion: e.target.value }))}
                  placeholder="Ej: Audiencia de conciliación"
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
                  <option value="conciliacion">Conciliación</option>
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
                🗑️ Eliminar Carpeta
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
                ⚠️ Solo se puede eliminar si la carpeta está vacía
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




