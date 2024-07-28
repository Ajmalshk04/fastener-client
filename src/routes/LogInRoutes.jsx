import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const CustomerSignIn = lazy(() =>
  import("@/components/auth/customer-sign-in.jsx")
);
const SupplierSignIn = lazy(() =>
  import("@/components/auth/supplier-sign-in.jsx")
);
const CustomerSignUp = lazy(() =>
  import("@/components/auth/customer-sign-up.jsx")
);
const SupplierSignUp = lazy(() =>
  import("@/components/auth/supplier-sign-up.jsx")
);
const ForgotPassword = lazy(() =>
  import("@/components/auth/forgot-password.jsx")
);
const VerifyOtp = lazy(() => import("@/components/auth/otp.jsx"));

const LoginRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="customer/sign-in" element={<CustomerSignIn />} />
      <Route path="customer/sign-up" element={<CustomerSignUp />} />
      <Route path="supplier/sign-in" element={<SupplierSignIn />} />
      <Route path="supplier/sign-up" element={<SupplierSignUp />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="verify-otp" element={<VerifyOtp />} />
    </Routes>
  </Suspense>
);

export default LoginRoutes;
