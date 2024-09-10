import axiosInstance from "@/api/client";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

const initialData = {
  totalUsers: 0,
  totalProjects: 0,
  totalQuotations: 0,
  recentProjects: [],
  recentQuotations: [],
};

export const useDashboardData = () => {
  const { token } = useAuth();

  return useQuery({
    queryKey: ["dashboardData", token],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get("/admin/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Dashboard", response);
        return response.data;
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        throw error; // Throw the error to let React Query handle it
      }
    },
    initialData: initialData,
    enabled: !!token, // Only run the query if there's a token
  });
};
