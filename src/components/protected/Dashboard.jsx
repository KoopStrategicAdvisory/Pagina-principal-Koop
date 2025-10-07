import { useMemo } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import AdminDashboard from "./dashboard/admin/AdminDashboard.jsx";
import UserDashboard from "./dashboard/user/UserDashboard.jsx";
import NoAccessDashboard from "./dashboard/NoAccess.jsx";

function hasRole(user, role) {
  if (!user?.roles) return false;
  const normalized = Array.isArray(user.roles) ? user.roles : [user.roles];
  const needle = String(role || '').toLowerCase();
  return normalized.some((r) => String(r || '').toLowerCase() === needle);
}

export default function Dashboard() {
  const { user, loading } = useAuth();
  const view = useMemo(() => {
    if (!user) return "none";
    if (hasRole(user, "admin")) return "admin";
    if (hasRole(user, "user")) return "user";
    return "no-access";
  }, [user]);

  if (loading && !user) {
    return null;
  }

  if (view === "admin") {
    return <AdminDashboard />;
  }
  if (view === "user") {
    return <UserDashboard />;
  }
  if (view === "no-access") {
    return <NoAccessDashboard />;
  }

  return <NoAccessDashboard />;
}
