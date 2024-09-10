import LoadingSpinner from "@/components/LoadingSpinner.jsx";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const AllManufacturing = lazy(() =>
  import("../pages/capabilities/AllManufacturing.jsx")
);

const Capabilities = lazy(() =>
  import("../pages/capabilities/Capabilities.jsx")
);
const CNCMachining = lazy(() =>
  import("../pages/capabilities/CNCMachining.jsx")
);
const SheetMetalStamping = lazy(() =>
  import("../pages/capabilities/SheetMetalStamping.jsx")
);
const Assemblies = lazy(() => import("../pages/capabilities/Assemblies.jsx"));
const AluminumExtrusions = lazy(() =>
  import("../pages/capabilities/AluminumExtrusions.jsx")
);
const Forging = lazy(() => import("../pages/capabilities/Forging.jsx"));
const PrototypingPreproduction = lazy(() =>
  import("../pages/capabilities/PrototypingPreproduction.jsx")
);
const DieCasting = lazy(() => import("../pages/capabilities/DieCasting.jsx"));
const InjectionMolding = lazy(() =>
  import("../pages/capabilities/InjectionMolding.jsx")
);
const InvestmentCasting = lazy(() =>
  import("../pages/capabilities/InvestmentCasting.jsx")
);

const CapabilitiesRoutes = () => (
  <Suspense
    fallback={
      <div>
        <LoadingSpinner size="medium" />
      </div>
    }
  >
    <Routes>
      <Route index path="capabilities" element={<Capabilities />} />
      <Route path="all-manufacturing" element={<AllManufacturing />} />
      <Route path="cnc-machining" element={<CNCMachining />} />
      <Route path="sheet-metal-stamping" element={<SheetMetalStamping />} />
      <Route path="assemblies" element={<Assemblies />} />
      <Route path="aluminum-extrusions" element={<AluminumExtrusions />} />
      <Route path="forging" element={<Forging />} />
      <Route
        path="prototyping-preproduction"
        element={<PrototypingPreproduction />}
      />
      <Route path="die-casting" element={<DieCasting />} />
      <Route path="injection-molding" element={<InjectionMolding />} />
      <Route path="investment-casting" element={<InvestmentCasting />} />
    </Routes>
  </Suspense>
);

export default CapabilitiesRoutes;
