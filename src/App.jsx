// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import Home from "./pages/Home";
// import About from "./pages/about/about";
// import CapabilitiesRoutes from "./routes/CapabilitiesRoutes";
// import IndustriesRoutes from "./routes/IndustriesRoutes";
// import LoginRoutes from "./routes/LogInRoutes";
// import ManufacturingServicesRoutes from "./routes/ManufacturingServicesRoutes";
// import WhyUs from "./pages/why-us/why-us";
// import ProtectedRoute from "./components/auth/ProtectedRoute";
// import CustomerDashboard from "./components/Customer/CustomerDashboard";
// import SupplierDashboard from "./components/Supplier/SupplierDashboard";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about/*" element={<About />} />
//           <Route path="why-us/*" element={<WhyUs />} />
//           <Route path="capabilities/*" element={<CapabilitiesRoutes />} />
//           <Route path="industries/*" element={<IndustriesRoutes />} />
//           <Route path="auth/*" element={<LoginRoutes />} />
//           <Route element={<ProtectedRoute allowedRoles={["customer"]} />}>
//             <Route path="/customer/dashboard" element={<CustomerDashboard />} />
//           </Route>

//           <Route element={<ProtectedRoute allowedRoles={["supplier"]} />}>
//             <Route path="/supplier/dashboard" element={<SupplierDashboard />} />
//           </Route>

//           <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
//             <Route path="/admin/dashboard" element={<AdminDashboard />} />
//           </Route>
//           <Route
//             path="manufacturing-services/*"
//             element={<ManufacturingServicesRoutes />}
//           />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
//======================================================================
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/about/about";
import CapabilitiesRoutes from "./routes/CapabilitiesRoutes";
import IndustriesRoutes from "./routes/IndustriesRoutes";
import LoginRoutes from "./routes/LogInRoutes";
import ManufacturingServicesRoutes from "./routes/ManufacturingServicesRoutes";
import WhyUs from "./pages/why-us/why-us";
import CustomerProtectedRoute from "./components/auth/CustomerProtectedRoute";
import SupplierProtectedRoute from "./components/auth/SupplierProtectedRoute";
import AdminProtectedRoute from "./components/auth/AdminProtectedRoute";
import PublicRoute from "./components/auth/PublicRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import PartnerOnboarding from "./components/Supplier/components/FirsetStep";
import LoadingSpinner from "./components/LoadingSpinner";
import AccountDetails from "./components/Customer/Profile";
import CreateNewQuote from "./components/Customer/CreateNewQuote";
import QuoteDetail from "./components/Customer/QuoteDetails";
import SuppliersProfile from "./components/Supplier/components/Profile";
import JobBoard from "./components/Supplier/components/JobBoard";
import MyOrdersTable from "./components/Supplier/components/OrderTable";
import Support from "./components/Support";
import UserListTable from "./components/Dashboard/components/UserTable";
import SupplierListTable from "./components/Dashboard/components/SuppliersTable";
import ProjectListTable from "./components/Dashboard/components/ProjectsTable";
import ProjectDetailsPage from "./components/Customer/ProjectDetails";

const CustomerDashboard = lazy(() =>
  import("./components/Customer/CustomerDashboard")
);
const SupplierDashboard = lazy(() =>
  import("./components/Supplier/SupplierDashboard")
);
const AdminDashboard = lazy(() =>
  import("./components/Dashboard/AdminDashboard")
);
const Unauthorized = lazy(() => import("./components/Unauthorized"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div>
            <LoadingSpinner size="medium" />
          </div>
        }
      >
        {/* Customers */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about/*" element={<About />} />
            <Route path="why-us/*" element={<WhyUs />} />
            <Route path="capabilities/*" element={<CapabilitiesRoutes />} />
            <Route path="industries/*" element={<IndustriesRoutes />} />
            <Route
              path="manufacturing-services/*"
              element={<ManufacturingServicesRoutes />}
            />

            {/* Public routes (redirect if authenticated) */}
            <Route element={<PublicRoute />}>
              <Route path="auth/*" element={<LoginRoutes />} />
            </Route>

            {/* Protected routes */}
            <Route element={<CustomerProtectedRoute />}>
              <Route
                path="/customer/dashboard"
                element={<CustomerDashboard />}
              />
              <Route path="/customer/quote" element={<CreateNewQuote />} />
              <Route
                path="/customer/quote-details"
                element={<ProjectDetailsPage />}
              />
              <Route path="/customer/profile" element={<AccountDetails />} />
              <Route path="/customer/support" element={<Support />} />
            </Route>
            {/* Suppliers */}
            <Route element={<SupplierProtectedRoute />}>
              <Route path="/supplier/dashboard" element={<SupplierDashboard />}>
                <Route
                  index
                  path="partner-onboarding"
                  element={<PartnerOnboarding />}
                />
                <Route path="profile" element={<SuppliersProfile />} />
                <Route path="job-board" element={<JobBoard />} />
                <Route path="my-orders" element={<MyOrdersTable />} />
                <Route path="support" element={<Support />} />
              </Route>
            </Route>
            {/* Admin DAshboard */}
            <Route element={<AdminProtectedRoute />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />}>
                <Route path="home" element={<Dashboard />} />
                <Route path="users" element={<UserListTable />} />
                <Route path="suppliers" element={<SupplierListTable />} />
                <Route path="projects" element={<ProjectListTable />} />
              </Route>
            </Route>

            {/* Unauthorized route */}
            <Route path="/unauthorized" element={<Unauthorized />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
//====================================
