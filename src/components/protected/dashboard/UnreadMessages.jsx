// UnreadMessages — Placeholder para mensajes no leídos del cliente
export default function UnreadMessages() {
  return (
    <div className="dash-item">
      <div className="font-semibold mb-2" style={{ fontWeight: 600, marginBottom: 8 }}>Mensajes no leídos</div>
      <div className="text-sm opacity-60" style={{ fontSize: 14, opacity: 0.8 }}>Sin datos.</div>
    </div>
  );
}
