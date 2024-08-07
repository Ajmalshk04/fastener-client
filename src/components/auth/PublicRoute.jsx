import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const PublicRoute = () => {
  const { token, role } = useAuth();

  if (token) {
    // Redirect to the appropriate dashboard based on user role
    if (role === "customer") {
      return <Navigate to="/customer/dashboard" replace />;
    } else if (role === "supplier") {
      return <Navigate to="/supplier/dashboard" replace />;
    } else if (role === "admin") {
      return <Navigate to="/admin/dashboard" replace />;
    }
  }

  return <Outlet />;
};

export default PublicRoute;
