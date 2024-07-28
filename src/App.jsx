import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/about/about";
import CapabilitiesRoutes from "./routes/CapabilitiesRoutes";
import IndustriesRoutes from "./routes/IndustriesRoutes";
import LoginRoutes from "./routes/LogInRoutes";
import ManufacturingServicesRoutes from "./routes/ManufacturingServicesRoutes";
import WhyUs from "./pages/why-us/why-us";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about/*" element={<About />} />
          <Route path="why-us/*" element={<WhyUs />} />
          <Route path="capabilities/*" element={<CapabilitiesRoutes />} />
          <Route path="industries/*" element={<IndustriesRoutes />} />
          <Route path="auth/*" element={<LoginRoutes />} />
          <Route
            path="manufacturing-services/*"
            element={<ManufacturingServicesRoutes />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
