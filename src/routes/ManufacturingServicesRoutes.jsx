import LoadingSpinner from "@/components/LoadingSpinner";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const AllManufacturingServices = lazy(() =>
  import("../pages/manufacturing-services/AllManufacturingServices")
);
const ProjectManagement = lazy(() =>
  import("../pages/manufacturing-services/ProjectManagement")
);
const ManagedSupplyChain = lazy(() =>
  import("../pages/manufacturing-services/ManagedSupplyChain")
);
const HowXofah = lazy(() =>
  import("../pages/manufacturing-services/HowXofah")
);
const QualityControl = lazy(() =>
  import("../pages/manufacturing-services/QualityControl")
);
const XofahManagedInventory = lazy(() =>
  import("../pages/manufacturing-services/XofahManagedInventory")
);
const ManagedLogistics = lazy(() =>
  import("../pages/manufacturing-services/ManagedLogistics.jsx")
);

const ManufacturingServicesRoutes = () => (
  <Suspense
    fallback={
      <div>
        <LoadingSpinner size="medium" />
      </div>
    }
  >
    <Routes>
      <Route index path="all" element={<AllManufacturingServices />} />
      <Route path="project-management" element={<ProjectManagement />} />
      <Route path="managed-supply-chain" element={<ManagedSupplyChain />} />
      <Route path="how-we" element={<HowXofah />} />
      <Route path="quality-control" element={<QualityControl />} />
      <Route
        path="Xofah-managed-inventory"
        element={<XofahManagedInventory />}
      />
      <Route path="managed-logistics" element={<ManagedLogistics />} />
    </Routes>
  </Suspense>
);

export default ManufacturingServicesRoutes;
