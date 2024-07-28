import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const AllIndustries = lazy(() => import("../pages/industries/AllIndustries"));
const ConstructionIndustrial = lazy(() =>
  import("../pages/industries/ConstructionIndustrial")
);
const Machinery = lazy(() => import("../pages/industries/Machinery"));
const EnergyUtilities = lazy(() =>
  import("../pages/industries/EnergyUtilities")
);
const SolarProjects = lazy(() => import("../pages/industries/SolarProjects"));
const ConsumerProductsElectronicsAppliances = lazy(() =>
  import("../pages/industries/ConsumerProductsElectronicsAppliances")
);
const AerospaceDefense = lazy(() =>
  import("../pages/industries/AerospaceDefense")
);
const Automotive = lazy(() => import("../pages/industries/Automotive"));
const Infrastructure = lazy(() => import("../pages/industries/Infrastructure"));

const IndustriesRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route index path="all" element={<AllIndustries />} />
      <Route
        path="construction-industrial"
        element={<ConstructionIndustrial />}
      />
      <Route path="machinery" element={<Machinery />} />
      <Route path="energy-utilities" element={<EnergyUtilities />} />
      <Route path="solar-projects" element={<SolarProjects />} />
      <Route
        path="consumer-products-electronics-appliances"
        element={<ConsumerProductsElectronicsAppliances />}
      />
      <Route path="aerospace-defense" element={<AerospaceDefense />} />
      <Route path="automotive" element={<Automotive />} />
      <Route path="infrastructure" element={<Infrastructure />} />
    </Routes>
  </Suspense>
);

export default IndustriesRoutes;
