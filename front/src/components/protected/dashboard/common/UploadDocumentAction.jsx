import { useState } from 'react';
import { uploadDoc } from '../../../../api/docs';

const DEFAULT_UPLOAD_FOLDER = 'documentos_iniciales';

function sanitizeFolder(value) {
  return String(value || '').trim();
}

export default function UploadDocumentAction({
  buttonLabel = 'Subir documento',
  buttonClassName = 'btn btn-primary',
  defaultFolder = DEFAULT_UPLOAD_FOLDER,
  allowFolderInput = true,
  onUploaded,
}) {
  const [open, setOpen] = useState(false);
  const [uploadFile, setUploadFile] = useState(null);
  const [uploadFolder, setUploadFolder] = useState(defaultFolder || '');
  const [uploadInputKey, setUploadInputKey] = useState(() => Date.now());
  const [uploadError, setUploadError] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [uploadingFile, setUploadingFile] = useState(false);

  const resetUploadState = () => {
    setUploadFile(null);
    setUploadFolder(defaultFolder || '');
    setUploadInputKey(Date.now());
    setUploadError(null);
    setUploadStatus(null);
    setUploadingFile(false);
  };

  const handleOpen = () => {
    resetUploadState();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    resetUploadState();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0] || null;
    setUploadFile(file);
    setUploadError(null);
    if (file) {
      setUploadStatus(null);
    }
  };

  const handleUploadSubmit = async (event) => {
    event.preventDefault();
    if (!uploadFile) {
      setUploadError('Selecciona un archivo');
      return;
    }
    const targetFolder = allowFolderInput ? sanitizeFolder(uploadFolder) : sanitizeFolder(defaultFolder);
    try {
      setUploadingFile(true);
      setUploadError(null);
      const response = await uploadDoc(uploadFile, {
        subfolder: targetFolder || undefined,
      });
      setUploadStatus(
        response?.file?.key ? 'Archivo subido correctamente' : 'Archivo subido'
      );
      setUploadFile(null);
      setUploadInputKey(Date.now());
      if (typeof onUploaded === 'function') {
        try {
          onUploaded(response);
        } catch (_) {
          // noop
        }
      }
    } catch (error) {
      setUploadError(
        error?.response?.data?.message || error?.message || 'No se pudo subir el archivo'
      );
    } finally {
      setUploadingFile(false);
    }
  };

  return (
    <>
      <button type="button" className={buttonClassName} onClick={handleOpen}>
        {buttonLabel}
      </button>
      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: 16,
          }}
        >
          <div
            className="dash-card"
            style={{ width: '100%', maxWidth: 480, position: 'relative' }}
          >
            <button
              type="button"
              onClick={handleClose}
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                background: 'transparent',
                border: 'none',
                color: '#334155',
                fontSize: 20,
                cursor: 'pointer',
              }}
              aria-label="Cerrar"
            >
              X
            </button>
            <h3 className="dash-title" style={{ marginBottom: 16 }}>
              Subir documento
            </h3>
            <form onSubmit={handleUploadSubmit}>
              <div style={{ marginBottom: 12 }}>
                <label style={{ display: 'block', marginBottom: 6, fontWeight: 600 }}>
                  Archivo
                </label>
                <input
                  key={uploadInputKey}
                  type="file"
                  onChange={handleFileChange}
                  disabled={uploadingFile}
                  required
                  style={{ width: '100%' }}
                />
              </div>
              {allowFolderInput ? (
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', marginBottom: 6, fontWeight: 600 }}>
                    Subcarpeta (opcional)
                  </label>
                  <input
                    type="text"
                    placeholder={defaultFolder || 'documentos_iniciales'}
                    value={uploadFolder}
                    onChange={(event) => setUploadFolder(event.target.value)}
                    disabled={uploadingFile}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid #cbd5f5' }}
                  />
                </div>
              ) : (
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', marginBottom: 6, fontWeight: 600 }}>
                    Carpeta destino
                  </label>
                  <input
                    type="text"
                    value={defaultFolder || ''}
                    readOnly
                    style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid #cbd5f5', background: '#1f2937', color: '#e2e8f0' }}
                  />
                </div>
              )}
              {uploadError && (
                <div style={{ background: '#7f1d1d', color: '#fecaca', padding: 8, borderRadius: 6, marginBottom: 12 }}>
                  {uploadError}
                </div>
              )}
              {uploadStatus && (
                <div style={{ background: '#14532d', color: '#bbf7d0', padding: 8, borderRadius: 6, marginBottom: 12 }}>
                  {uploadStatus}
                </div>
              )}
              <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                  disabled={uploadingFile}
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary" disabled={uploadingFile || !uploadFile}>
                  {uploadingFile ? 'Subiendo...' : 'Subir'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
