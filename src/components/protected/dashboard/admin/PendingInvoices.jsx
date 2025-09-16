export default function PendingInvoices() {
  return (
    <div className="dash-item" style={{ position: 'relative', paddingBottom: 56 }}>
      <div className="font-semibold mb-2" style={{ fontWeight: 600, marginBottom: 8 }}>Facturas pendientes</div>
      <div className="text-sm opacity-60" style={{ fontSize: 14, opacity: 0.8 }}>Sin datos.</div>
      <button
        className="btn btn-primary"
        style={{ position: 'absolute', right: 12, bottom: 12 }}
        aria-label="Pagar factura"
      >
        Pagar factura
      </button>
    </div>
  );
}
