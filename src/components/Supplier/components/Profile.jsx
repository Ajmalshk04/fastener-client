// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { useQuery } from "@tanstack/react-query";
// import { useAuth } from "@/hooks/useAuth";
// import axiosInstance from "@/api/client";
// import { useNavigate } from "react-router-dom";

// const SuppliersProfile = () => {
//   const navigate = useNavigate();
//   const { token } = useAuth();

//   // Fetch supplier's competencies
//   const { data: capabilities, isLoading, error } = useQuery({
//     queryKey: ["manufacturingCapabilities"],
//     queryFn: async () => {
//       const response = await axiosInstance.get("/suppliers/capabilities", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return response.manufacturingCapabilities || [];
//     },
//   });

//   // Fetch supplier profile data (company name, certifications, etc.)
//   const { data: supplierProfile } = useQuery({
//     queryKey: ["supplierProfile"],
//     queryFn: async () => {
//       const response = await axiosInstance.get("/suppliers/me", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return response.data;
//     },
//   });


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

//               {/* Competencies Tab */}
//               <TabsContent value="competencies">
//                 <div className="flex justify-end mb-4">
//                 <Button 
//                   variant="outline" 
//                   onClick={() => navigate('/supplier/dashboard/competencies-options')}
//                 >
//                   Edit Competencies
//                 </Button>
//                 </div>

//                 <div className="mt-4 space-y-4">
//                   {isLoading ? (
//                     <p className="text-sm text-gray-500">Loading...</p>
//                   ) : error ? (
//                     <p className="text-sm text-red-500">Failed to load competencies.</p>
//                   ) : (
//                     <div className="flex flex-wrap gap-2">
//                       {capabilities?.length > 0 ? (
//                         capabilities.map((competency, index) => (
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

//               {/* Company Info Tab */}
//               <TabsContent value="companyInfo">
//                 <div className="mt-4">
//                   <h4 className="text-lg font-semibold">Company Information</h4>
//                   <p><strong>Company Name:</strong> {supplierProfile?.companyName}</p>
//                   <p><strong>Certifications:</strong> {supplierProfile?.certifications.length > 0 ? supplierProfile.certifications.join(', ') : 'None'}</p>
//                   <p><strong>Rating:</strong> {supplierProfile?.rating || "Not rated yet"}</p>
//                   <p><strong>Total Projects:</strong> {supplierProfile?.totalProjects}</p>
//                   <p><strong>Active Projects:</strong> {supplierProfile?.activeProjects}</p>
//                 </div>
//               </TabsContent>

//               {/* Contacts Tab */}
//               <TabsContent value="contacts">
//                 <div className="mt-4">
//                   <h4 className="text-lg font-semibold">Contact Information</h4>
//                   <p>Email: {supplierProfile?.user?.email}</p>
//                   {/* You can add more fields for phone, address, etc. */}
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default SuppliersProfile;
//======================================================
// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { useQuery } from "@tanstack/react-query";
// import { useAuth } from "@/hooks/useAuth";
// import axiosInstance from "@/api/client";
// import { useNavigate } from "react-router-dom";

// const SuppliersProfile = () => {
//   const navigate = useNavigate();
//   const { token } = useAuth();

//   // Fetch supplier's competencies
//   const { data: capabilities, isLoading, error } = useQuery({
//     queryKey: ["manufacturingCapabilities"],
//     queryFn: async () => {
//       const response = await axiosInstance.get("/suppliers/capabilities", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return Array.isArray(response.manufacturingCapabilities) 
//         ? response.manufacturingCapabilities 
//         : [];
//     },
//   });

//   // Fetch supplier profile data (company name, certifications, etc.)
//   const { data: supplierProfile, isLoading: isProfileLoading, error: profileError } = useQuery({
//     queryKey: ["supplierProfile"],
//     queryFn: async () => {
//       const response = await axiosInstance.get("/suppliers/me", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return response.data || {};
//     },
//   });

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

//               {/* Competencies Tab */}
//               <TabsContent value="competencies">
//                 <div className="flex justify-end mb-4">
//                   <Button 
//                     variant="outline" 
//                     onClick={() => navigate('/supplier/dashboard/competencies-options')}
//                   >
//                     Edit Competencies
//                   </Button>
//                 </div>

//                 <div className="mt-4 space-y-4">
//                   {isLoading ? (
//                     <p className="text-sm text-gray-500">Loading competencies...</p>
//                   ) : error ? (
//                     <p className="text-sm text-red-500">Failed to load competencies.</p>
//                   ) : (
//                     <div className="flex flex-wrap gap-2">
//                       {capabilities?.length > 0 ? (
//                         capabilities.map((competency, index) => (
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

//               {/* Company Info Tab */}
//               <TabsContent value="companyInfo">
//                 <div className="mt-4 space-y-4">
//                   {isProfileLoading ? (
//                     <p className="text-sm text-gray-500">Loading company info...</p>
//                   ) : profileError ? (
//                     <p className="text-sm text-red-500">Failed to load company info.</p>
//                   ) : (
//                     <>
//                       <h4 className="text-lg font-semibold">Company Information</h4>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <p><strong>Company Name:</strong> {supplierProfile?.companyName || "Not provided"}</p>
//                         <p><strong>Company Address:</strong> {supplierProfile?.companyAddress || "Not provided"}</p>
//                         <p><strong>Tax ID:</strong> {supplierProfile?.taxId || "Not provided"}</p>
//                         <p>
//                           <strong>Certifications:</strong>{" "}
//                           {supplierProfile?.certifications?.length > 0 
//                             ? supplierProfile.certifications.join(", ") 
//                             : "None"}
//                         </p>
//                         <p><strong>Rating:</strong> {supplierProfile?.rating || "Not rated yet"}</p>
//                         <p><strong>Total Projects:</strong> {supplierProfile?.totalProjects || 0}</p>
//                         <p><strong>Active Projects:</strong> {supplierProfile?.activeProjects || 0}</p>
//                         <p><strong>Lead Time:</strong> {supplierProfile?.leadTime ? `${supplierProfile.leadTime} days` : "Not specified"}</p>
//                         <p>
//                           <strong>Minimum Order Value:</strong>{" "}
//                           {supplierProfile?.minimumOrderValue 
//                             ? `$${supplierProfile.minimumOrderValue}` 
//                             : "Not specified"}
//                         </p>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               </TabsContent>

//               {/* Contacts Tab */}
//               <TabsContent value="contacts">
//                 <div className="mt-4 space-y-4">
//                   {isProfileLoading ? (
//                     <p className="text-sm text-gray-500">Loading contact info...</p>
//                   ) : profileError ? (
//                     <p className="text-sm text-red-500">Failed to load contact info.</p>
//                   ) : (
//                     <>
//                       <h4 className="text-lg font-semibold">Contact Information</h4>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <p><strong>Email:</strong> {supplierProfile?.user?.email || "Not provided"}</p>
//                         <p>
//                           <strong>Contact Name:</strong>{" "}
//                           {supplierProfile?.user?.firstName && supplierProfile?.user?.lastName 
//                             ? `${supplierProfile.user.firstName} ${supplierProfile.user.lastName}` 
//                             : "Not provided"}
//                         </p>
//                         <p>
//                           <strong>Contact No:</strong>{" "}
//                           {supplierProfile?.user?.phoneNumber ? `${supplierProfile.user.phoneNumber}` 
//                             : "Not provided"}
//                         </p>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default SuppliersProfile;

//=============================================================
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import axiosInstance from "@/api/client";
import { useNavigate } from "react-router-dom";
import { Loader2, Edit } from "lucide-react";

const SuppliersProfile = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  // Fetch supplier's competencies
  const { data: capabilities, isLoading, error } = useQuery({
    queryKey: ["manufacturingCapabilities"],
    queryFn: async () => {
      const response = await axiosInstance.get("/suppliers/capabilities", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return Array.isArray(response.manufacturingCapabilities)
        ? response.manufacturingCapabilities
        : [];
    },
  });

  // Fetch supplier profile data
  const {
    data: supplierProfile,
    isLoading: isProfileLoading,
    error: profileError,
  } = useQuery({
    queryKey: ["supplierProfile"],
    queryFn: async () => {
      const response = await axiosInstance.get("/suppliers/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data || {};
    },
  });

  return (
    <div className="container mx-auto px-6 py-10 max-w-5xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Supplier Profile</h1>
        <p className="mt-2 text-muted-foreground">
          Manage your competencies, company information, and contact details
        </p>
      </header>

      <Card className="shadow-sm border-0">
        <CardContent className="p-6">
          <Tabs defaultValue="competencies" className="space-y-6">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3">
              <TabsTrigger value="competencies">Competencies</TabsTrigger>
              <TabsTrigger value="companyInfo">Company Info</TabsTrigger>
              <TabsTrigger value="contacts">Contacts</TabsTrigger>
            </TabsList>

            {/* Competencies Tab */}
            <TabsContent value="competencies">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">My Competencies</h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate("/supplier/dashboard/competencies-options")}
                >
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
              </div>
              {isLoading ? (
                <div className="flex items-center justify-center py-4">
                  <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                </div>
              ) : error ? (
                <p className="text-sm text-red-500 text-center">
                  Failed to load competencies
                </p>
              ) : capabilities.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {capabilities.map((competency, index) => (
                    <Badge
                      key={`${competency}-${index}`}
                      variant="secondary"
                      className="text-sm py-1 px-2"
                    >
                      {competency}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground text-center">
                  No competencies added yet. Add some to get started!
                </p>
              )}
            </TabsContent>

            {/* Company Info Tab */}
            <TabsContent value="companyInfo">
              <h2 className="text-xl font-semibold mb-6">Company Information</h2>
              {isProfileLoading ? (
                <div className="flex items-center justify-center py-4">
                  <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                </div>
              ) : profileError ? (
                <p className="text-sm text-red-500 text-center">
                  Failed to load company info
                </p>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 text-sm">
                  <div>
                    <span className="font-medium text-muted-foreground">
                      Company Name:
                    </span>{" "}
                    {supplierProfile?.companyName || "Not provided"}
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">
                      Address:
                    </span>{" "}
                    {supplierProfile?.companyAddress || "Not provided"}
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">
                      Tax ID:
                    </span>{" "}
                    {supplierProfile?.taxId || "Not provided"}
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">
                      Certifications:
                    </span>{" "}
                    {supplierProfile?.certifications?.length > 0
                      ? supplierProfile.certifications.join(", ")
                      : "None"}
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">
                      Rating:
                    </span>{" "}
                    {supplierProfile?.rating || "Not rated yet"}
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">
                      Total Projects:
                    </span>{" "}
                    {supplierProfile?.totalProjects || 0}
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">
                      Active Projects:
                    </span>{" "}
                    {supplierProfile?.activeProjects || 0}
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">
                      Lead Time:
                    </span>{" "}
                    {supplierProfile?.leadTime
                      ? `${supplierProfile.leadTime} days`
                      : "Not specified"}
                  </div>
                  <div className="sm:col-span-2">
                    <span className="font-medium text-muted-foreground">
                      Minimum Order Value:
                    </span>{" "}
                    {supplierProfile?.minimumOrderValue
                      ? `$${supplierProfile.minimumOrderValue.toLocaleString()}`
                      : "Not specified"}
                  </div>
                </div>
              )}
            </TabsContent>

            {/* Contacts Tab */}
            <TabsContent value="contacts">
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              {isProfileLoading ? (
                <div className="flex items-center justify-center py-4">
                  <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                </div>
              ) : profileError ? (
                <p className="text-sm text-red-500 text-center">
                  Failed to load contact info
                </p>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 text-sm">
                  <div>
                    <span className="font-medium text-muted-foreground">
                      Email:
                    </span>{" "}
                    {supplierProfile?.user?.email || "Not provided"}
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">
                      Contact Name:
                    </span>{" "}
                    {supplierProfile?.user?.firstName &&
                    supplierProfile?.user?.lastName
                      ? `${supplierProfile.user.firstName} ${supplierProfile.user.lastName}`
                      : "Not provided"}
                  </div>
                  <div className="sm:col-span-2">
                    <span className="font-medium text-muted-foreground">
                      Contact Number:
                    </span>{" "}
                    {supplierProfile?.user?.phoneNumber || "Not provided"}
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuppliersProfile;