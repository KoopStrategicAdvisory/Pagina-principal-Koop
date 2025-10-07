import { DangerNotice } from '../../../components/common/Notice';
import { EditForm, EditRow, EditField, EditTextArea, EditSelect } from '../../../components/common/EditFormKit';

export default function ConvertirUsuarioModal({
  clientModal,
  clientError,
  clientSaving,
  onClose,
  onClearError,
  onSave,
  onChange,
  rolesOptions = [
    { id: 'user', label: 'Usuario' },
    { id: 'admin', label: 'Administrador' },
  ],
}) {
  if (!clientModal) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  const setField = (key) => (e) => {
    const value = e?.target?.value;
    onChange?.({ [key]: value });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="modal-overlay"
      onClick={handleOverlayClick}
    >
      <div className="modal-card" role="document">
        <div className="modal-header">
          <div className="dash-title">Actualizar información del usuario</div>
          <button type="button" className="btn btn-secondary btn-sm" onClick={onClose} aria-label="Cerrar">
            Cerrar
          </button>
        </div>
        {clientError && (<DangerNotice onClose={onClearError}>{clientError}</DangerNotice>)}
        <EditForm>
          <EditField
            label="Nombre completo"
            value={clientModal.fullName}
            onChange={setField('fullName')}
            placeholder="Nombre y apellidos"
          />
          <EditRow cols={2}>
            <EditField
              label="Tipo de documento"
              value={clientModal.documentType}
              onChange={setField('documentType')}
              placeholder="CC / CE / NIT / PAS"
            />
            <EditField
              label="Número de documento"
              value={clientModal.documentNumber}
              onChange={setField('documentNumber')}
              placeholder="Ej: 80761460"
            />
          </EditRow>
          <EditField
            label="Fecha de nacimiento"
            type="date"
            value={clientModal.birthDate}
            onChange={setField('birthDate')}
          />
          <EditRow cols={2}>
            <EditField
              label="Teléfono fijo / celular"
              value={clientModal.phone}
              onChange={setField('phone')}
              placeholder="Ej: 300 123 4567"
            />
            <EditField
              label="Correo electrónico"
              type="email"
              value={clientModal.email}
              onChange={setField('email')}
              placeholder="nombre@dominio.com"
            />
          </EditRow>
          <EditSelect
            label="Rol"
            value={clientModal.role || ''}
            onChange={(e) => onChange?.({ role: e.target.value })}
            options={rolesOptions.map(r => ({ value: r.id, label: r.label }))}
            placeholder="Selecciona un rol"
          />
          <EditField
            label="Dirección física"
            value={clientModal.address}
            onChange={setField('address')}
            placeholder="Calle 123 #45-67, Ciudad"
          />
          <EditTextArea
            label="Información de contacto (opcional)"
            value={clientModal.contactInfo}
            onChange={setField('contactInfo')}
            placeholder="Notas internas, referencias, etc."
          />
        </EditForm>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12 }}>
          <button className="btn btn-secondary" onClick={onClose} disabled={clientSaving}>
            Cancelar
          </button>
          <button className="btn btn-primary" onClick={onSave} disabled={clientSaving}>
            {clientSaving ? 'Guardando...' : 'Guardar cambios'}
          </button>
        </div>
      </div>
    </div>
  );
}


