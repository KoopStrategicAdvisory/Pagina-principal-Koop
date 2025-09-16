import "../../../styles/dashboard.css";

export default function NoAccessDashboard() {
  return (
    <div
      className="dash-page"
      style={{
        background: "linear-gradient(rgba(24,31,56,0.9), rgba(15,23,42,0.95))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
        padding: 24,
      }}
    >
      <div className="dash-card" style={{ maxWidth: 520 }}>
        <h2 className="dash-title">Acceso restringido</h2>
        <p style={{ marginTop: 12 }}>
          Tu cuenta no tiene un rol asignado para ingresar al portal. Comunicate con el administrador para solicitar acceso.
        </p>
      </div>
    </div>
  );
}

