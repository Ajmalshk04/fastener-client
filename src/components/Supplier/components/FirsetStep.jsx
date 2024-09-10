import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CompetenciesModal from "./CompetenciesModal";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import SelectCompetencies from "./SelectCompetencies";
import { useNavigate } from "react-router-dom";

const PartnerOnboarding = () => {
  const navigate = useNavigate();
  const [competencies, setCompetencies] = useState([]);

  const handleCompetenciesChange = (newCompetencies) => {
    setCompetencies(newCompetencies);
  };

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
              <SelectCompetencies
                onCompetenciesChange={handleCompetenciesChange}
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
