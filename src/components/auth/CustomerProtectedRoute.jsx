import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const CustomerProtectedRoute = () => {
  const { token, role } = useAuth();

  if (!token) {
    return <Navigate to="/auth/customer/sign-in" replace />;
  }

  if (role !== "customer") {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default CustomerProtectedRoute;
