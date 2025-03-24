// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "@/hooks/useAuth";
// import axiosInstance from "@/api/client";
// import { useQuery } from "@tanstack/react-query";
// import CompetencyDialog from "./CompetenciesModal";
// import { useState } from "react";

// const PartnerOnboarding = () => {
//   const navigate = useNavigate();
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
//     <div className="container mx-auto p-6 flex flex-col gap-6">
//       <section>
//         <h2 className="text-2xl font-bold mb-4">
//           You’re just 2 steps away from being a partner
//         </h2>
//         <p className="mb-6">
//           We want to find out what technology you work with and make one order
//           from you.
//         </p>

//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Card 1 */}
//           <Card className="flex flex-col w-1/2 h-1/2">
//             <CardHeader>
//               <CardTitle>Specify your competencies</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p>
//                 Specify the production methods you are working with - we'll
//                 appreciate as detailed data as possible.
//               </p>
//               <p className="mt-4">
//                 After that, you will have access to the test parts that are
//                 needed to confirm your competencies.
//               </p>
//             </CardContent>
//             <CardFooter>
//             <div className="flex justify-end mb-4">
//                   <Button variant="outline" onClick={handleDialogOpen}>
//                     Edit Competencies
//                   </Button>
//                 </div>
//             <CompetencyDialog 
//         open={isDialogOpen} 
//         onClose={handleDialogClose} 
//         capabilities={data} 
//         isLoading={isLoading}
//       />
//             </CardFooter>
//           </Card>
//           <div className="flex items-center justify-center">
//             <ChevronRight strokeWidth={1} className="h-24 w-24" />
//           </div>
//           {/* Card 2 */}
//           <Card className="flex flex-col w-1/2 h-1/2">
//             <CardHeader>
//               <CardTitle>Choose and produce test part</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p>
//                 Choose just ONE test job offer to confirm your competencies and
//                 your level of production quality.
//               </p>
//               <p className="mt-4">
//                 Once we are sure that your capabilities meet our standards, you
//                 will have access to all orders.
//               </p>
//             </CardContent>
//             <CardFooter>
//               <Button
//                 variant="primary"
//                 onClick={() => navigate("/supplier/dashboard/job-board")}
//               >
//                 Get Jobs
//               </Button>
//             </CardFooter>
//           </Card>
//         </div>
//       </section>

//       <section className="mt-8">
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Card 1 */}
//           <Card className="flex-1">
//             <CardHeader>
//               <CardTitle>Payment conditions</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p>In case of on-time delivery: 20 days after delivery</p>
//               <p className="mt-4">
//                 In case of delayed delivery: 40 days after delivery
//               </p>
//             </CardContent>
//           </Card>

//           {/* Card 2 */}
//           <Card className="flex-1">
//             <CardHeader>
//               <CardTitle>Already have ISO Certificates?</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p>
//                 About what certificates you have. It will simplify the process.
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PartnerOnboarding;
//========================================================
// PartnerOnboarding.jsx
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "@/hooks/useAuth";
// import axiosInstance from "@/api/client";
// import { useQuery } from "@tanstack/react-query";

// const PartnerOnboarding = () => {
//   const navigate = useNavigate();
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

//   return (
//     <div className="container mx-auto p-6 flex flex-col gap-6">
//       <section>
//         <h2 className="text-2xl font-bold mb-4">
//           You’re just 2 steps away from being a partner
//         </h2>
//         <p className="mb-6">
//           We want to find out what technology you work with and make one order
//           from you.
//         </p>

//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Card 1 */}
//           <Card className="flex flex-col w-1/2 h-1/2">
//             <CardHeader>
//               <CardTitle>Specify your competencies</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p>
//                 Specify the production methods you are working with - we'll
//                 appreciate as detailed data as possible.
//               </p>
//               <p className="mt-4">
//                 After that, you will have access to the test parts that are
//                 needed to confirm your competencies.
//               </p>
//             </CardContent>
//             <CardFooter>
//               <div className="flex justify-end mb-4">
//                 <Button 
//                   variant="outline" 
//                   onClick={() => navigate('/supplier/dashboard/competencies-options')}
//                 >
//                   Edit Competencies
//                 </Button>
//               </div>
//             </CardFooter>
//           </Card>
//           <div className="flex items-center justify-center">
//             <ChevronRight strokeWidth={1} className="h-24 w-24" />
//           </div>
//           {/* Card 2 */}
//           <Card className="flex flex-col w-1/2 h-1/2">
//             <CardHeader>
//               <CardTitle>Choose and produce test part</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p>
//                 Choose just ONE test job offer to confirm your competencies and
//                 your level of production quality.
//               </p>
//               <p className="mt-4">
//                 Once we are sure that your capabilities meet our standards, you
//                 will have access to all orders.
//               </p>
//             </CardContent>
//             <CardFooter>
//               <Button
//                 variant="primary"
//                 onClick={() => navigate("/supplier/dashboard/job-board")}
//               >
//                 Get Jobs
//               </Button>
//             </CardFooter>
//           </Card>
//         </div>
//       </section>

//       <section className="mt-8">
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Card 1 */}
//           <Card className="flex-1">
//             <CardHeader>
//               <CardTitle>Payment conditions</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p>In case of on-time delivery: 20 days after delivery</p>
//               <p className="mt-4">
//                 In case of delayed delivery: 40 days after delivery
//               </p>
//             </CardContent>
//           </Card>

//           {/* Card 2 */}
//           <Card className="flex-1">
//             <CardHeader>
//               <CardTitle>Already have ISO Certificates?</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p>
//                 About what certificates you have. It will simplify the process.
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PartnerOnboarding;


import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import axiosInstance from "@/api/client";
import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const PartnerOnboarding = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  const { data, isLoading } = useQuery({
    queryKey: ["manufacturingCapabilities"],
    queryFn: async () => {
      const response = await axiosInstance.get("/suppliers/capabilities", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.manufacturingCapabilities || [];
    },
  });

  return (
    <div className="container mx-auto px-6 py-10 max-w-5xl">
      <header className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">
          Become a Partner in Just 2 Steps
        </h2>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          Share your manufacturing capabilities and complete a test order to
          unlock full access to our platform.
        </p>
      </header>

      <section className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] items-center">
          {/* Card 1 */}
          <Card className="shadow-sm border-0 hover:shadow-md transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">1. Define Your Capabilities</CardTitle>
                {data?.length > 0 && (
                  <Badge variant="secondary">Completed</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="pb-4 text-sm text-muted-foreground">
              <p>
                Tell us about your production methods and technologies - the
                more details, the better.
              </p>
              <p className="mt-3">
                This unlocks access to test parts for capability verification.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full"
                onClick={() =>
                  navigate("/supplier/dashboard/competencies-options")
                }
              >
                {data?.length > 0 ? "Edit Capabilities" : "Add Capabilities"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Chevron */}
          <ChevronRight
            strokeWidth={1.5}
            className="h-12 w-12 text-muted-foreground hidden lg:block mx-4"
          />

          {/* Card 2 */}
          <Card className="shadow-sm border-0 hover:shadow-md transition-shadow">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">2. Complete a Test Order</CardTitle>
            </CardHeader>
            <CardContent className="pb-4 text-sm text-muted-foreground">
              <p>
                Select one test job to demonstrate your production quality and
                capabilities.
              </p>
              <p className="mt-3">
                Upon successful completion, gain access to all available orders.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                onClick={() => navigate("/supplier/dashboard/job-board")}
                disabled={!data?.length}
              >
                Browse Test Jobs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Separator className="my-12" />

        <div className="grid gap-6 md:grid-cols-2">
          {/* Payment Conditions */}
          <Card className="shadow-sm border-0">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">On-time Delivery</span>
                <Badge variant="outline">20 days post-delivery</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Delayed Delivery</span>
                <Badge variant="outline">40 days post-delivery</Badge>
              </div>
            </CardContent>
          </Card>

          {/* ISO Certificates */}
          <Card className="shadow-sm border-0">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Have ISO Certificates?</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>
                Share your certifications to streamline the verification
                process and stand out.
              </p>
              <Button
                variant="link"
                className="mt-3 p-0 h-auto"
                onClick={() => navigate("/supplier/dashboard/profile")}
              >
                Add Certificates
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PartnerOnboarding;