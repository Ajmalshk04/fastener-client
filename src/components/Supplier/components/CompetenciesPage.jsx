import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from "react-router-dom";
import CompetenciesOptionsSelect from "./CompetenciesOptionsSelect";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import axiosInstance from "@/api/client";

const CompetenciesPage = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  const { data, isLoading } = useQuery({
    queryKey: ["manufacturingCapabilities"],
    queryFn: async () => {
      const response = await axiosInstance.get("/suppliers/capabilities", {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Ensure we return an array even if the response is malformed
      return Array.isArray(response.data.manufacturingCapabilities) 
        ? response.data.manufacturingCapabilities 
        : [];
    },
  });

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Select Competencies</h1>
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>

      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="p-6">
          {isLoading ? (
            <p>Loading capabilities...</p>
          ) : (
            <CompetenciesOptionsSelect initialCapabilities={data} />
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CompetenciesPage;