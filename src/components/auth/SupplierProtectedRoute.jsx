import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const SupplierProtectedRoute = () => {
  const { token, role } = useAuth();

  if (!token) {
    return <Navigate to="/auth/supplier/sign-in" replace />;
  }

  if (role !== "supplier") {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default SupplierProtectedRoute;
