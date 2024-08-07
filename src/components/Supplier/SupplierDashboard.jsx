import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";

const SupplierDashboard = () => {
  return (
    <div className="flex h-full">
      <Sidebar></Sidebar>
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default SupplierDashboard;
