// import React from "react";
// import {
//   Card,
//   CardHeader,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

// const aluminumExtrusionsData = {
//   overview: `Zetwerk manufactures high-quality extrusions with complex cross-sections produced using a range of aluminum alloys. We cut the aluminum extrusion to length and perform all necessary secondary operations such as CNC machining and surface treatment.`,
//   benefits: [
//     "Lightweight yet strong",
//     "Good resistance to corrosion",
//     "High tensile strength",
//     "Wear resistance",
//     "Uniform quality without mechanical joints",
//   ],
//   alloys: [
//     "6063-T5",
//     "6063-T6",
//     "6061-T5",
//     "6061-T6",
//     "6005-T5",
//     "7075-T6",
//     "6101-T61",
//   ],
//   secondaryOperations: [
//     "CNC milling",
//     "CNC cutting",
//     "Drilling",
//     "Tapping",
//     "Reaming",
//     "Punching",
//     "Bending",
//     "T5 and T6 heat treatment",
//     "Robotic welding",
//   ],
//   surfaceFinishes: [
//     "Mill Finish",
//     "Anodizing (Black, Clear, Custom colors)",
//     "Powder Coating (Black, White, Various colors)",
//   ],
//   certifications: [
//     "ISO 9001:2015",
//     "AS9100D",
//     "IATF 16949:2016",
//     "ISO 13485:2016",
//   ],
//   projectManagement: `Zetwerk offers comprehensive project management throughout the manufacturing extrusion process. Our team guides you through each step, keeping you updated on production progress and project timelines.`,
//   toolingDesign: `Tooling design is an optimization step that improves manufacturing speed and ensures tooling meets project needs, considering tolerances and wear.`,
//   fairApproval: `A first-article inspection report (FAIR) is critical for avoiding out-of-tolerance components and rework, ensuring confidence in the parts received.`,
//   managedInventory: `Zetwerk offers vendor-managed inventory to optimize material availability and improve supply chain resiliency, helping you respond to demand fluctuations effectively.`,
// };

// const AluminumExtrusions = () => {
//   return (
//     <Card className="mx-auto max-w-4xl">
//       <CardHeader>
//         <h2 className="text-2xl font-semibold">Aluminum Extrusions</h2>
//       </CardHeader>
//       <CardContent>
//         {/* Overview */}
//         <p className="text-gray-700">{aluminumExtrusionsData.overview}</p>

//         {/* Benefits */}
//         <div className="mt-4">
//           <h3 className="text-xl font-medium">
//             Benefits of Aluminum Extrusions
//           </h3>
//           <ul className="list-disc list-inside mt-2 text-gray-700">
//             {aluminumExtrusionsData.benefits.map((benefit, index) => (
//               <li key={index}>{benefit}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Alloy Types */}
//         <div className="mt-4">
//           <h3 className="text-xl font-medium">Alloy Types</h3>
//           <div className="flex flex-wrap gap-2 mt-2">
//             {aluminumExtrusionsData.alloys.map((alloy, index) => (
//               <Badge key={index} className="text-sm">
//                 {alloy}
//               </Badge>
//             ))}
//           </div>
//         </div>

//         {/* Secondary Operations */}
//         <div className="mt-4">
//           <h3 className="text-xl font-medium">Secondary Operations</h3>
//           <ul className="list-disc list-inside mt-2 text-gray-700">
//             {aluminumExtrusionsData.secondaryOperations.map(
//               (operation, index) => (
//                 <li key={index}>{operation}</li>
//               )
//             )}
//           </ul>
//         </div>

//         {/* Surface Finishes */}
//         <div className="mt-4">
//           <h3 className="text-xl font-medium">Surface Finishes</h3>
//           <ul className="list-disc list-inside mt-2 text-gray-700">
//             {aluminumExtrusionsData.surfaceFinishes.map((finish, index) => (
//               <li key={index}>{finish}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Certifications */}
//         <div className="mt-4">
//           <h3 className="text-xl font-medium">Certifications and Compliance</h3>
//           <ul className="list-disc list-inside mt-2 text-gray-700">
//             {aluminumExtrusionsData.certifications.map((cert, index) => (
//               <li key={index}>{cert}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Project Management and Tooling Design */}
//         <div className="mt-4">
//           <h3 className="text-xl font-medium">
//             Project Management and Tooling Design
//           </h3>
//           <p className="mt-2 text-gray-700">
//             {aluminumExtrusionsData.projectManagement}
//           </p>
//           <p className="mt-2 text-gray-700">
//             {aluminumExtrusionsData.toolingDesign}
//           </p>
//         </div>

//         {/* FAIR Approval */}
//         <div className="mt-4">
//           <h3 className="text-xl font-medium">FAIR Approval</h3>
//           <p className="mt-2 text-gray-700">
//             {aluminumExtrusionsData.fairApproval}
//           </p>
//         </div>

//         {/* Managed Inventory */}
//         <div className="mt-4">
//           <h3 className="text-xl font-medium">Managed Inventory for JIT</h3>
//           <p className="mt-2 text-gray-700">
//             {aluminumExtrusionsData.managedInventory}
//           </p>
//         </div>
//       </CardContent>
//       <CardFooter className="flex justify-end">
//         <Button className="bg-blue-600 text-white hover:bg-blue-700">
//           Get a Quote
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// };

// export default AluminumExtrusions;
//=======================================
import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const aluminumExtrusionsData = {
  overview: `Zetwerk manufactures high-quality extrusions with complex cross-sections produced using a range of aluminum alloys. We cut the aluminum extrusion to length and perform all necessary secondary operations such as CNC machining and surface treatment.`,
  benefits: [
    "Lightweight yet strong",
    "Good resistance to corrosion",
    "High tensile strength",
    "Wear resistance",
    "Uniform quality without mechanical joints",
  ],
  alloys: [
    "6063-T5",
    "6063-T6",
    "6061-T5",
    "6061-T6",
    "6005-T5",
    "7075-T6",
    "6101-T61",
  ],
  secondaryOperations: [
    "CNC milling",
    "CNC cutting",
    "Drilling",
    "Tapping",
    "Reaming",
    "Punching",
    "Bending",
    "T5 and T6 heat treatment",
    "Robotic welding",
  ],
  surfaceFinishes: [
    "Mill Finish – Cleaned and deburred extrusions ready for plating/anodizing or painting",
    "Anodizing – Black, clear, custom colors (available in production quantities). Anodizing thickness is typically 6 – 18 μm.",
    "Powder coating – Automatic spray coating system producing the highest quality products. Black, white, and a variety of colors are possible.",
  ],
  certifications: [
    "ISO 9001:2015",
    "AS9100D",
    "IATF 16949:2016",
    "ISO 13485:2016",
  ],
  projectManagement: `Zetwerk offers comprehensive project management throughout the manufacturing extrusion process. Our team guides you through each step, keeping you updated on production progress and project timelines.`,
  toolingDesign: `Tooling design is an optimization step that improves manufacturing speed and ensures tooling meets project needs, considering tolerances and wear.`,
  fairApproval: `A first-article inspection report (FAIR) is critical for avoiding out-of-tolerance components and rework, ensuring confidence in the parts received.`,
  managedInventory: `Zetwerk offers vendor-managed inventory to optimize material availability and improve supply chain resiliency, helping you respond to demand fluctuations effectively.`,
};

const AluminumExtrusionsPage = () => {
  return (
    <div className="mx-auto max-w-7xl p-4">
      {/* Page Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">
          Aluminum Extrusions by Zetwerk
        </h1>
        <p className="text-center text-gray-700 mt-2">
          High-quality extrusions with complex cross-sections in various
          aluminum alloys
        </p>
      </header>

      {/* Overview Section */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Overview</h2>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">{aluminumExtrusionsData.overview}</p>
        </CardContent>
      </Card>

      {/* Benefits Section */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">
            Benefits of Aluminum Extrusions
          </h2>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            {aluminumExtrusionsData.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Alloy Types Section */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Aluminum Alloy Types</h2>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mt-2">
            {aluminumExtrusionsData.alloys.map((alloy, index) => (
              <Badge key={index} className="text-sm">
                {alloy}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Secondary Operations Section */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Secondary Operations</h2>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            {aluminumExtrusionsData.secondaryOperations.map(
              (operation, index) => (
                <li key={index}>{operation}</li>
              )
            )}
          </ul>
        </CardContent>
      </Card>

      {/* Surface Finishes Section */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Custom Surface Finishes</h2>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            {aluminumExtrusionsData.surfaceFinishes.map((finish, index) => (
              <li key={index}>{finish}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Certifications Section */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">
            Certifications and Compliance
          </h2>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            {aluminumExtrusionsData.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Project Management and Tooling Design Section */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">
            Project Management and Tooling Design
          </h2>
        </CardHeader>
        <CardContent>
          <p className="mt-2 text-gray-700">
            {aluminumExtrusionsData.projectManagement}
          </p>
          <Separator className="my-4" />
          <p className="mt-2 text-gray-700">
            {aluminumExtrusionsData.toolingDesign}
          </p>
        </CardContent>
      </Card>

      {/* FAIR Approval Section */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">FAIR Approval</h2>
        </CardHeader>
        <CardContent>
          <p className="mt-2 text-gray-700">
            {aluminumExtrusionsData.fairApproval}
          </p>
        </CardContent>
      </Card>

      {/* Managed Inventory Section */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Managed Inventory for JIT</h2>
        </CardHeader>
        <CardContent>
          <p className="mt-2 text-gray-700">
            {aluminumExtrusionsData.managedInventory}
          </p>
        </CardContent>
      </Card>

      {/* Call to Action Section */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">
            Get an Aluminum Extrusion Quote
          </h2>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            Zetwerk is your one-stop solution for complete end-to-end contract
            manufacturing and distribution. Request a quote today for aluminum
            extrusions or any other manufactured component.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Request a Quote
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AluminumExtrusionsPage;
