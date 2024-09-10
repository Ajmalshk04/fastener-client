import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const ListJobs = () => {
  const [activeTab, setActiveTab] = useState("jobs");

  // Dummy data for jobs and responses
  const jobs = [
    {
      id: "J-1070458-164388",
      title:
        "Test Part. Shipping and customs fees included (DAP Ottobrunn, Germany)",
      process: ["Laser Cutting", "Waterjet Cutting", "Bending Sheet"],
      material: "Aluminium",
      leadTime: "20.08.2024",
      jobSize: "1 Part (1 piece)",
      total: "100,00 €",
      imageUrl: "https://via.placeholder.com/300x300?text=Sheet+Metal+Stamping",
    },
    {
      id: "J-1070458-164387",
      title:
        "Swiss turn Promotion article Test part. Shipping costs are included. DAP basis.",
      process: ["Turning", "Turning 2+ axes", "CNC"],
      material: "Stainless Steel",
      leadTime: "20.08.2024",
      jobSize: "1 Part (1 piece)",
      total: "100,00 €",
      imageUrl: "https://via.placeholder.com/300x300?text=Sheet+Metal+Stamping",
    },
  ];

  const responses = [
    {
      id: "R-2070458-164388",
      title:
        "Response to Test Part. Shipping and customs fees included (DAP Ottobrunn, Germany)",
      status: "Accepted",
      material: "Aluminium",
      leadTime: "22.08.2024",
      imageUrl: "https://via.placeholder.com/300x300?text=Sheet+Metal+Stamping",
    },
    {
      id: "R-2070458-164387",
      title:
        "Response to Swiss turn Promotion article Test part. Shipping costs are included. DAP basis.",
      status: "Pending",
      material: "Stainless Steel",
      leadTime: "23.08.2024",
      imageUrl: "https://via.placeholder.com/300x300?text=Sheet+Metal+Stamping",
    },
  ];

  const statusColors = {
    accepted: "text-white bg-green-600",
    pending: "text-black bg-yellow-400",
    rejected: "text-white bg-red-600",
  };

  return (
    <div className="p-4 mt-4">
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value)}>
        <TabsList>
          <TabsTrigger value="jobs">List of Jobs</TabsTrigger>
          <TabsTrigger value="responses">My Responses</TabsTrigger>
        </TabsList>

        <TabsContent value="jobs" className="mt-6">
          {jobs.map((job) => (
            <Card key={job.id} className="mb-4">
              <CardHeader className="w-2/3">
                <CardTitle className="text-lg font-semibold">
                  {job.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <div className="flex ">
                    <img
                      src={job.imageUrl}
                      alt={job.title}
                      className="w-24 h-24 mr-4"
                    />
                    <div className="space-y-4">
                      <p className="text-sm">
                        Process:{" "}
                        {job.process.map((process, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className={"ml-2 "}
                          >
                            {process}
                          </Badge>
                        ))}
                      </p>
                      <p className="text-sm">
                        Material:{" "}
                        <Badge variant="secondary">{job.material}</Badge>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <CardDescription className="text-sm text-muted-foreground">
                      Lead time: {job.leadTime}
                    </CardDescription>
                    <CardDescription className="text-sm text-muted-foreground">
                      Job size: {job.jobSize}
                    </CardDescription>
                    <CardDescription className="text-sm text-muted-foreground">
                      Total: {job.total}
                    </CardDescription>
                    <Button className="text-white ">
                      Click and check details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="responses">
          {responses.map((response) => (
            <Card key={response.id} className="mb-4">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  {response.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Lead time: {response.leadTime}
                </CardDescription>
                <CardDescription className="text-sm text-muted-foreground">
                  Status:{" "}
                  <Badge
                    className={statusColors[response.status.toLowerCase()]}
                  >
                    {response.status}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <div className="flex">
                    <img
                      src={response.imageUrl}
                      alt={response.title}
                      className="w-24 h-24 mr-4"
                    />
                    <div>
                      <p className="text-sm">Material: {response.material}</p>
                    </div>
                  </div>
                  <div>
                    <Button className="text-white">
                      Click and check details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ListJobs;
