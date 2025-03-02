import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import axiosInstance from "@/api/client";
import { useQuery } from "@tanstack/react-query";
import CompetencyDialog from "./CompetenciesModal";
import { useState } from "react";

const PartnerOnboarding = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const { token } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: ["manufacturingCapabilities"],
    queryFn: async () => {
      const response = await axiosInstance.get("/suppliers/capabilities", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.manufacturingCapabilities || [];
    },
  });

  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);

  return (
    <div className="container mx-auto p-6 flex flex-col gap-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">
          You’re just 2 steps away from being a partner
        </h2>
        <p className="mb-6">
          We want to find out what technology you work with and make one order
          from you.
        </p>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Card 1 */}
          <Card className="flex flex-col w-1/2 h-1/2">
            <CardHeader>
              <CardTitle>Specify your competencies</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Specify the production methods you are working with - we'll
                appreciate as detailed data as possible.
              </p>
              <p className="mt-4">
                After that, you will have access to the test parts that are
                needed to confirm your competencies.
              </p>
            </CardContent>
            <CardFooter>
            <div className="flex justify-end mb-4">
                  <Button variant="outline" onClick={handleDialogOpen}>
                    Edit Competencies
                  </Button>
                </div>
            <CompetencyDialog 
        open={isDialogOpen} 
        onClose={handleDialogClose} 
        capabilities={data} 
        isLoading={isLoading}
      />
            </CardFooter>
          </Card>
          <div className="flex items-center justify-center">
            <ChevronRight strokeWidth={1} className="h-24 w-24" />
          </div>
          {/* Card 2 */}
          <Card className="flex flex-col w-1/2 h-1/2">
            <CardHeader>
              <CardTitle>Choose and produce test part</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Choose just ONE test job offer to confirm your competencies and
                your level of production quality.
              </p>
              <p className="mt-4">
                Once we are sure that your capabilities meet our standards, you
                will have access to all orders.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                variant="primary"
                onClick={() => navigate("/supplier/dashboard/job-board")}
              >
                Get Jobs
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="mt-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Card 1 */}
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Payment conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <p>In case of on-time delivery: 20 days after delivery</p>
              <p className="mt-4">
                In case of delayed delivery: 40 days after delivery
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Already have ISO Certificates?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                About what certificates you have. It will simplify the process.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PartnerOnboarding;
