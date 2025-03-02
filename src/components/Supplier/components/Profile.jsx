
// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import CompetencyDialog from "./CompetenciesModal";
// import { useQuery } from "@tanstack/react-query";
// import { useAuth } from "@/hooks/useAuth";
// import axiosInstance from "@/api/client";

// const SuppliersProfile = () => {
//   const [isDialogOpen, setDialogOpen] = useState(false);
//   const { token } = useAuth();

//   const { data, isLoading, error } = useQuery({
//     queryKey: ["manufacturingCapabilities"],
//     queryFn: async () => {
//       const response = await axiosInstance.get("/suppliers/capabilities", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return response.manufacturingCapabilities || [];
//     },
//   });

//   const handleDialogOpen = () => setDialogOpen(true);
//   const handleDialogClose = () => setDialogOpen(false);

//   return (
//     <div className="container mx-auto p-4 space-y-8">
//       <Card>
//         <CardContent>
//           <div className="space-y-6">
//             <Tabs defaultValue="competencies" className="mt-8">
//               <TabsList className="w-full flex justify-around">
//                 <TabsTrigger value="competencies">My Competencies</TabsTrigger>
//                 <TabsTrigger value="companyInfo">Company Info</TabsTrigger>
//                 <TabsTrigger value="contacts">Contacts</TabsTrigger>
//               </TabsList>

//               <TabsContent value="competencies">
//                 <div className="flex justify-end mb-4">
//                   <Button variant="outline" onClick={handleDialogOpen}>
//                     Edit Competencies
//                   </Button>
//                 </div>

//                 <div className="mt-4 space-y-4">
//                   {isLoading ? (
//                     <p className="text-sm text-gray-500">Loading...</p>
//                   ) : error ? (
//                     <p className="text-sm text-red-500">Failed to load competencies.</p>
//                   ) : (
//                     <div className="flex flex-wrap gap-2">
//                       {data?.length > 0 ? (
//                         data.map((competency, index) => (
//                           <Badge key={`${competency}-${index}`} variant="outline">
//                             {competency}
//                           </Badge>
//                         ))
//                       ) : (
//                         <p className="text-sm text-gray-500">No competencies added yet.</p>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </TabsContent>

//               <TabsContent value="companyInfo">
//                 <div className="mt-4">
//                   <h4 className="text-lg font-semibold">Company Information</h4>
//                   <p>Details about the company's history, size, etc.</p>
//                 </div>
//               </TabsContent>

//               <TabsContent value="contacts">
//                 <div className="mt-4">
//                   <h4 className="text-lg font-semibold">Contact Information</h4>
//                   <p>Email, phone numbers, addresses, etc.</p>
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </div>
//         </CardContent>
//       </Card>

//       <CompetencyDialog 
//         open={isDialogOpen} 
//         onClose={handleDialogClose} 
//         capabilities={data} 
//         isLoading={isLoading}
//       />
//     </div>
//   );
// };

// export default SuppliersProfile;

//============================================
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CompetencyDialog from "./CompetenciesModal";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import axiosInstance from "@/api/client";

const SuppliersProfile = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const { token } = useAuth();

  // Fetch supplier's competencies
  const { data: capabilities, isLoading, error } = useQuery({
    queryKey: ["manufacturingCapabilities"],
    queryFn: async () => {
      const response = await axiosInstance.get("/suppliers/capabilities", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.manufacturingCapabilities || [];
    },
  });

  // Fetch supplier profile data (company name, certifications, etc.)
  const { data: supplierProfile } = useQuery({
    queryKey: ["supplierProfile"],
    queryFn: async () => {
      const response = await axiosInstance.get("/suppliers/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
  });

  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <Card>
        <CardContent>
          <div className="space-y-6">
            <Tabs defaultValue="competencies" className="mt-8">
              <TabsList className="w-full flex justify-around">
                <TabsTrigger value="competencies">My Competencies</TabsTrigger>
                <TabsTrigger value="companyInfo">Company Info</TabsTrigger>
                <TabsTrigger value="contacts">Contacts</TabsTrigger>
              </TabsList>

              {/* Competencies Tab */}
              <TabsContent value="competencies">
                <div className="flex justify-end mb-4">
                  <Button variant="outline" onClick={handleDialogOpen}>
                    Edit Competencies
                  </Button>
                </div>

                <div className="mt-4 space-y-4">
                  {isLoading ? (
                    <p className="text-sm text-gray-500">Loading...</p>
                  ) : error ? (
                    <p className="text-sm text-red-500">Failed to load competencies.</p>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {capabilities?.length > 0 ? (
                        capabilities.map((competency, index) => (
                          <Badge key={`${competency}-${index}`} variant="outline">
                            {competency}
                          </Badge>
                        ))
                      ) : (
                        <p className="text-sm text-gray-500">No competencies added yet.</p>
                      )}
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* Company Info Tab */}
              <TabsContent value="companyInfo">
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Company Information</h4>
                  <p><strong>Company Name:</strong> {supplierProfile?.companyName}</p>
                  <p><strong>Certifications:</strong> {supplierProfile?.certifications.length > 0 ? supplierProfile.certifications.join(', ') : 'None'}</p>
                  <p><strong>Rating:</strong> {supplierProfile?.rating || "Not rated yet"}</p>
                  <p><strong>Total Projects:</strong> {supplierProfile?.totalProjects}</p>
                  <p><strong>Active Projects:</strong> {supplierProfile?.activeProjects}</p>
                </div>
              </TabsContent>

              {/* Contacts Tab */}
              <TabsContent value="contacts">
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Contact Information</h4>
                  <p>Email: {supplierProfile?.user?.email}</p>
                  {/* You can add more fields for phone, address, etc. */}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      <CompetencyDialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        capabilities={capabilities}
        isLoading={isLoading}
      />
    </div>
  );
};

export default SuppliersProfile;
