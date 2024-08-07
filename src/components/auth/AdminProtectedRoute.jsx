import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const AdminProtectedRoute = () => {
  const { token, role } = useAuth();

  if (!token) {
    return <Navigate to="/auth/admin/sign-in" replace />;
  }

  if (role !== "admin") {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default AdminProtectedRoute;
