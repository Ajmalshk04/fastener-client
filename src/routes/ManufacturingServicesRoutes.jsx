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
const HowZetwerk = lazy(() =>
  import("../pages/manufacturing-services/HowZetwerk")
);
const QualityControl = lazy(() =>
  import("../pages/manufacturing-services/QualityControl")
);
const ZetwerkManagedInventory = lazy(() =>
  import("../pages/manufacturing-services/ZetwerkManagedInventory")
);
const ManagedLogistics = lazy(() =>
  import("../pages/manufacturing-services/ManagedLogistics.jsx")
);

const ManufacturingServicesRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route index path="all" element={<AllManufacturingServices />} />
      <Route path="project-management" element={<ProjectManagement />} />
      <Route path="managed-supply-chain" element={<ManagedSupplyChain />} />
      <Route path="how-we" element={<HowZetwerk />} />
      <Route path="quality-control" element={<QualityControl />} />
      <Route
        path="zetwerk-managed-inventory"
        element={<ZetwerkManagedInventory />}
      />
      <Route path="managed-logistics" element={<ManagedLogistics />} />
    </Routes>
  </Suspense>
);

export default ManufacturingServicesRoutes;
