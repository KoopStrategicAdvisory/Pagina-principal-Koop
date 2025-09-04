export default function KpiCard({ label, value, hint }) {
  return (
    <div className="dash-item">
      <div className="text-sm opacity-70" style={{ fontSize: 12, opacity: 0.8 }}>{label}</div>
      <div className="text-2xl font-semibold" style={{ fontSize: 28, fontWeight: 700 }}>{value}</div>
      {hint && (
        <div className="text-xs opacity-60" style={{ fontSize: 12, opacity: 0.7 }}>{hint}</div>
      )}
    </div>
  );
}
