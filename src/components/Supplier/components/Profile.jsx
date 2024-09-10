import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CompetencyDialog from "./CompetenciesModal"; // Adjust the path if needed

const SuppliersProfile = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Hi dimi niki</CardTitle>
          <p className="text-sm text-gray-500">ID: PR-74198</p>
          <Button variant="link" className="text-blue-600 mt-2">
            Have questions or need help?
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="text-gray-500">
              <p>Not enough data collected.</p>
              <p>Rating is empty.</p>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="text-lg font-semibold">Overall Rating</div>
              <div className="text-sm text-gray-500">
                <p>Timing</p>
                <p>Quality</p>
                <p>Packing</p>
                <p>Communication</p>
                <p>Cancel Ratio -</p>
              </div>
              <div className="text-sm text-gray-500">
                <p>State: Registered</p>
                <p>Test Part: To get here take job on “Job Board”</p>
                <p>Probation</p>
                <p>Trusted</p>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="text-lg font-semibold">Orders</div>
              <div className="text-sm text-gray-500">
                <p>Orders: 0 / € 0.00</p>
                <p>In production: 0 / € 0.00</p>
                <p>Total: 0 / € 0.00</p>
              </div>
              <div className="text-lg font-semibold">Order Limits</div>
              <div className="text-sm text-gray-500">
                <p>Limits on orders in production</p>
                <p>Quantity: No limits</p>
                <p>Value: No limits</p>
              </div>
            </div>

            <Separator />

            <Tabs defaultValue="competencies" className="mt-8">
              <TabsList className="w-full flex justify-around">
                <TabsTrigger value="competencies">My Competencies</TabsTrigger>
                <TabsTrigger value="companyInfo">Company Info</TabsTrigger>
                <TabsTrigger value="contacts">Contacts</TabsTrigger>
              </TabsList>

              <TabsContent value="competencies">
                <div className="ml-auto">
                  <Button variant="outline" onClick={handleDialogOpen}>
                    Edit Competencies
                  </Button>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Industry</h4>
                  <p>Milling, Turning, Laser Cutting, 3D Printing, etc.</p>
                  <h4 className="text-lg font-semibold mt-4">Materials</h4>
                  <p>Metal, Plastic, Ceramic, etc.</p>
                  <h4 className="text-lg font-semibold mt-4">Certification</h4>
                  <p>ISO 9001, ISO 14001, etc.</p>
                  <h4 className="text-lg font-semibold mt-4">
                    Quality Control
                  </h4>
                  <p>Strict internal quality controls.</p>
                  <h4 className="text-lg font-semibold mt-4">Language</h4>
                  <p>English, German, French</p>
                  <h4 className="text-lg font-semibold mt-4">
                    Production Methods
                  </h4>
                  <p>Milling, Turning, Injection Molding, etc.</p>
                </div>
              </TabsContent>

              <TabsContent value="companyInfo">
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Company Information</h4>
                  <p>Details about the company's history, size, etc.</p>
                </div>
              </TabsContent>

              <TabsContent value="contacts">
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Contact Information</h4>
                  <p>Email, phone numbers, addresses, etc.</p>
                </div>
              </TabsContent>
            </Tabs>

            <Button variant="link" className="text-blue-600">
              If you want to delete your profile and all the information in it,
              please click here
            </Button>
          </div>
        </CardContent>
      </Card>

      <CompetencyDialog open={isDialogOpen} onClose={handleDialogClose} />
    </div>
  );
};

export default SuppliersProfile;
