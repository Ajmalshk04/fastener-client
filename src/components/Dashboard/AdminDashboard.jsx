import { Outlet } from "react-router-dom";
import DashboardHeader from "../DashboardHeader";
import { useCallback, useState } from "react";
import { AdminSidebar } from "./components/AdminSidebar";

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

const AdminDashboard = () => {
  const [isCollapsed, handleCollapse] = useCollapsedState();
  return (
    <div>
      <div className="flex h-screen overflow-hidden">
        <AdminSidebar
          isCollapsed={isCollapsed}
          handleCollapse={handleCollapse}
        />
        <div
          className={`flex-1 overflow-auto transition-all duration-300 ease-in-out ${
            isCollapsed ? "ml-16" : "ml-64"
          }`}
        >
          <DashboardHeader></DashboardHeader>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
