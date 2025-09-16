import { Link } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext.jsx";
import { normalizeUpperAscii } from "../../../../utils/strings.js";
import "../../../../styles/dashboard.css";
import RecentDocuments from "../admin/RecentDocuments.jsx";
import ResponsivePdf from "../admin/ResponsivePdf.jsx";
import UnreadMessages from "../admin/UnreadMessages.jsx";

export default function UserDashboard() {
  const { user } = useAuth();
  const displayName = normalizeUpperAscii(user?.name || "Bienvenido");

  return (
    <div
      className="dash-page"
      style={{
        backgroundImage:
          "linear-gradient(rgba(13,27,42,0.65), rgba(27,38,59,0.65)), url('/fondodashboard.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div className="dash-card" style={{ maxWidth: 1080 }}>
        <div className="dash-header">
          <div className="dash-title">{displayName}</div>
        </div>

        <div className="dash-item" style={{ marginBottom: 16 }}>
          <p style={{ marginBottom: 8 }}>
            Aqui puedes revisar tu material mas reciente y mantenerte al dia con tu caso.
            Si necesitas asistencia adicional, nuestro equipo esta disponible para ayudarte.
          </p>
          <Link className="btn btn-primary btn-sm" to="/mis-casos">
            Ver mis casos
          </Link>
        </div>

        <div className="dash-item" style={{ padding: 0, marginBottom: 16 }}>
          <ResponsivePdf src="/Saludobienvenidaportal.pdf" heightDesktop={480} heightMobile={420} />
        </div>

        <div style={{ display: "grid", gap: 16 }}>
          <UnreadMessages />
          <RecentDocuments />
        </div>
      </div>
    </div>
  );
}

