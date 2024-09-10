// import { Outlet } from "react-router-dom";
// import { Sidebar } from "../Sidebar";

// const SupplierDashboard = () => {
//   return (
//     <div className="flex h-full relative overflow-hidden">
//       <Sidebar></Sidebar>
//       <div className="flex-1">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default SupplierDashboard;
//==========================================
import React, { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import DashboardHeader from "../DashboardHeader";

const useCollapsedState = () => {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const collapsed = localStorage.getItem("sidebar-collapsed");
    return collapsed ? JSON.parse(collapsed) : false;
  });

  const handleCollapse = useCallback((collapsed) => {
    setIsCollapsed(collapsed);
    localStorage.setItem("sidebar-collapsed", JSON.stringify(collapsed));
  }, []);

  return [isCollapsed, handleCollapse];
};

const SupplierDashboard = () => {
  const [isCollapsed, handleCollapse] = useCollapsedState();

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isCollapsed={isCollapsed} handleCollapse={handleCollapse} />
      <div
        className={`flex-1 overflow-auto transition-all duration-300 ease-in-out ${
          isCollapsed ? "ml-16" : "ml-64"
        }`}
      >
        <DashboardHeader></DashboardHeader>
        <Outlet />
      </div>
    </div>
  );
};

export default SupplierDashboard;
