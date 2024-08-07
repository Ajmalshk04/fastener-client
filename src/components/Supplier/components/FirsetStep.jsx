// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import CompetenciesModal from "./CompetenciesModal";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ChevronRight } from "lucide-react";
// import { fetchSupplier } from "@/store/features/supplier/supplierSlice";

// const PartnerOnboarding = () => {
//   const dispatch = useDispatch();
//   const supplier = useSelector((state) => state.supplier.data);
//   const status = useSelector((state) => state.supplier.status);
//   const error = useSelector((state) => state.supplier.error);

//   useEffect(() => {
//     const supplierId = "YOUR_SUPPLIER_ID"; // Replace with the actual supplier ID
//     dispatch(fetchSupplier(supplierId));
//   }, [dispatch]);

//   const handleCompetenciesChange = (newCompetencies) => {
//     // Optionally, dispatch an action to update competencies in the Redux store
//   };

//   if (status === "loading") return <p>Loading...</p>;
//   if (status === "failed") return <p>Error: {error}</p>;

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
//               <CompetenciesModal
//                 onCompetenciesChange={handleCompetenciesChange}
//                 initialCompetencies={supplier?.manufacturingCapabilities || []}
//               />
//             </CardFooter>
//           </Card>
//           <div className="flex items-center justify-center">
//             <ChevronRight strokeWidth={1} className="h-24 w-24" />
//           </div>
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
//               <Button variant="primary">Get Jobs</Button>
//             </CardFooter>
//           </Card>
//         </div>
//       </section>

//       <section className="mt-8">
//         <div className="flex flex-col lg:flex-row gap-6">
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
//=================================================
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import CompetenciesModal from "./CompetenciesModal";

const PartnerOnboarding = () => {
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
              <CompetenciesModal
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
              <Button variant="primary">Get Jobs</Button>
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

// const PartnerOnboarding = () => {
//   return (
//     <div className="container mx-auto p-6 flex flex-col gap-6">
//       <section className="bg-gray-50 p-8 rounded-lg shadow-md">
//         <h2 className="text-3xl font-bold mb-4 text-center">
//           You’re just 2 steps away from being a partner
//         </h2>
//         <p className="mb-6 text-center">
//           We want to find out what technology you work with and make one order
//           from you.
//         </p>

//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Card 1 */}
//           <Card className="flex-1 bg-white shadow-lg rounded-lg">
//             <CardHeader className="p-6 border-b">
//               <CardTitle className="text-xl font-semibold">
//                 Specify your competencies
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-6">
//               <p>
//                 Specify the production methods you are working with - we'll
//                 appreciate as detailed data as possible.
//               </p>
//               <p className="mt-4">
//                 After that, you will have access to the test parts that are
//                 needed to confirm your competencies.
//               </p>
//             </CardContent>
//             <CardFooter className="p-6">
//               <Button variant="primary" className="w-full">
//                 Edit competencies
//               </Button>
//             </CardFooter>
//           </Card>

//           {/* Card 2 */}
//           <Card className="flex-1 bg-white shadow-lg rounded-lg">
//             <CardHeader className="p-6 border-b">
//               <CardTitle className="text-xl font-semibold">
//                 Choose and produce test part
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-6">
//               <p>
//                 Choose just ONE test job offer to confirm your competencies and
//                 your level of production quality.
//               </p>
//               <p className="mt-4">
//                 Once we are sure that your capabilities meet our standards, you
//                 will have access to all orders.
//               </p>
//             </CardContent>
//             <CardFooter className="p-6">
//               <Button variant="primary" className="w-full">
//                 Get Jobs
//               </Button>
//             </CardFooter>
//           </Card>
//         </div>
//       </section>

//       <section className="mt-8">
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Card 1 */}
//           <Card className="flex-1 bg-white shadow-lg rounded-lg">
//             <CardHeader className="p-6 border-b">
//               <CardTitle className="text-xl font-semibold">
//                 Payment conditions
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-6">
//               <p>In case of on-time delivery: 20 days after delivery</p>
//               <p className="mt-4">
//                 In case of delayed delivery: 40 days after delivery
//               </p>
//             </CardContent>
//           </Card>

//           {/* Card 2 */}
//           <Card className="flex-1 bg-white shadow-lg rounded-lg">
//             <CardHeader className="p-6 border-b">
//               <CardTitle className="text-xl font-semibold">
//                 Already have ISO Certificates?
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-6">
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

export default PartnerOnboarding;
