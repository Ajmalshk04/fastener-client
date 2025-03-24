// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import Typography from "@/components/custom/typography";
// import { injectionMoldingData } from "@/data/injectionMolding";

// // Import images
// import InjectionMoldingMainImg from "/src/assets/INJECTIONMOLDING.jpg";
// import Image55 from "/src/assets/image55.jpeg";
// import Image56 from "/src/assets/image56.jpeg";
// import Image57 from "/src/assets/image57.jpeg";
// import Image58 from "/src/assets/image58.jpeg";
// import Image59 from "/src/assets/image59.jpeg";
// import Image60 from "/src/assets/image60.jpeg";
// import Image61 from "/src/assets/image61.jpeg";
// import Image62 from "/src/assets/image62.jpeg";
// import Image63 from "/src/assets/image63.jpeg";
// import Image64 from "/src/assets/image64.jpeg";
// import { useNavigate } from "react-router-dom";

// // Mapping of titles (subsection and subheadings) to their corresponding imported images
// const subsectionImages = {
//   "Custom Plastic Injection Molding Materials": Image55,
//   "Elastomer and Rubber Molded Materials": Image56,
//   "Why Choose Xofah for Injection Molding?": Image57,
//   "Prototype Molding Service With Xofah": Image58,
//   "Production With Xofah": Image59,
//   "Custom Insert Molding With Xofah": Image60,
//   "Compression Molding": Image61,
//   "Society of Plastics Industry (SPI) Mold Finishes": Image62,
//   "Custom Plastic Fabrication Services": Image63,
//   "Micro Molding Services": Image64,
// };

// // Dynamic Component
// function InjectionMolding() {
//   const navigate = useNavigate();
//   return (
//     <div className="container mx-auto p-10">
//       {/* Main Header */}
//       <Typography variant="h1" className="text-center">
//         {injectionMoldingData.title}
//       </Typography>
//       <Typography variant="lead" className="text-center mt-4">
//         {injectionMoldingData.lead}
//       </Typography>
//       <div className="mt-6 flex justify-center">
//         <Button
//                 className="text-white mt-4"
//                 onClick={() => navigate("/customer/quote")}
//               >
//                 Get a Quote
//               </Button>
//       </div>
//       <img
//         src={InjectionMoldingMainImg}
//         className="container w-auto h-auto mx-auto object-cover my-10"
//         alt="Injection Molding Overview"
//       />
//       <Separator className="my-8" />

//       {/* Dynamic Sections */}
//       {injectionMoldingData.sections.map((section, index) => (
//         <Card key={index} className="mb-8">
//           <CardHeader>
//             <CardTitle className="text-2xl">{section.title}</CardTitle>
//           </CardHeader>
//           <CardContent>
//             {section.subsections.map((subsection, subIndex) => (
//               <div key={subIndex} className="mb-4">
//                 <Typography variant="h3" className="text-xl">
//                   {subsection.title}
//                 </Typography>
//                 {subsection.content &&
//                   subsection.content.map((item, itemIndex) => (
//                     <div key={itemIndex} className="mt-2">
//                       {typeof item === "string" ? (
//                         <Typography>{item}</Typography>
//                       ) : (
//                         <>
//                           {item.subheading && (
//                             <Typography className="font-bold">
//                               {item.subheading}
//                             </Typography>
//                           )}
//                           {item.text && <Typography>{item.text}</Typography>}
//                           {item.example && (
//                             <Typography className="italic">
//                               {item.example}
//                             </Typography>
//                           )}
//                           {item.question && (
//                             <>
//                               <Typography className="font-bold">
//                                 {item.question}
//                               </Typography>
//                               <Typography>{item.answer}</Typography>
//                             </>
//                           )}
//                           {item.additional && (
//                             <Typography>{item.additional}</Typography>
//                           )}
//                           {/* Add Image for Subheading */}
//                           {item.subheading && subsectionImages[item.subheading] && (
//                             <img
//                               src={subsectionImages[item.subheading]}
//                               className="container w-auto h-auto mx-auto object-cover mt-4"
//                               alt={`${item.subheading} Illustration`}
//                             />
//                           )}
//                         </>
//                       )}
//                     </div>
//                   ))}
//                 {subsection.list && (
//                   <ul className="list-disc pl-4 pt-2 mt-2">
//                     {subsection.list.map((listItem, listIndex) => (
//                       <li key={listIndex} className="">
//                         <Typography>
//                           {typeof listItem === "string" ? (
//                             listItem
//                           ) : (
//                             <>
//                               <strong>{listItem.name}</strong>
//                               {listItem.description &&
//                                 `: ${listItem.description}`}
//                               {listItem.sublist && (
//                                 <ul className="list-disc pl-4 pt-2 ml-4">
//                                   {listItem.sublist.map(
//                                     (subItem, subItemIndex) => (
//                                       <li key={subItemIndex}>
//                                         <Typography>{subItem}</Typography>
//                                       </li>
//                                     )
//                                   )}
//                                 </ul>
//                               )}
//                               {listItem.additional && (
//                                 <Typography>{listItem.additional}</Typography>
//                               )}
//                             </>
//                           )}
//                         </Typography>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//                 {subsection.table && (
//                   <Table className="mt-2">
//                     <TableHeader>
//                       <TableRow>
//                         {subsection.table.headers.map((header, headerIndex) => (
//                           <TableHead key={headerIndex}>{header}</TableHead>
//                         ))}
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       {subsection.table.rows.map((row, rowIndex) => (
//                         <TableRow key={rowIndex}>
//                           {row.map((cell, cellIndex) => (
//                             <TableCell key={cellIndex}>{cell}</TableCell>
//                           ))}
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 )}
//                 {subsection.advantages && (
//                   <>
//                     <Typography className="mt-2 font-bold">
//                       Advantages include:
//                     </Typography>
//                     <ul className="list-disc pl-4 pt-2 mt-2">
//                       {subsection.advantages.map((advantage, advIndex) => (
//                         <li key={advIndex}>
//                           <Typography>{advantage}</Typography>
//                         </li>
//                       ))}
//                     </ul>
//                   </>
//                 )}
//                 {subsection.disadvantages && (
//                   <>
//                     <Typography className="mt-2 font-bold">
//                       Disadvantages include:
//                     </Typography>
//                     <ul className="list-disc pl-4 pt-2 mt-2">
//                       {subsection.disadvantages.map(
//                         (disadvantage, disIndex) => (
//                           <li key={disIndex}>
//                             <Typography>{disadvantage}</Typography>
//                           </li>
//                         )
//                       )}
//                     </ul>
//                   </>
//                 )}
//                 {subsection.quote && (
//                   <Typography className="mt-2 italic">
//                     {subsection.quote}
//                   </Typography>
//                 )}
//                 {/* Add Image for Subsection Title */}
//                 {subsectionImages[subsection.title] && (
//                   <img
//                     src={subsectionImages[subsection.title]}
//                     className="container w-auto h-auto mx-auto object-cover mt-4"
//                     alt={`${subsection.title} Illustration`}
//                   />
//                 )}
//                 {subsection.button && (
//                   <div className="mt-4 flex justify-center">
//                     <Button asChild
//     onClick={() => navigate("/customer/quote")}
// >
                    
//                         {subsection.button.text}
                     
//                     </Button>
//                   </div>
//                 )}
//                 {subsection.additionalContent &&
//                   subsection.additionalContent.map((addContent, addIndex) => (
//                     <Typography key={addIndex} className="mt-2">
//                       {addContent}
//                     </Typography>
//                   ))}
//               </div>
//             ))}
//           </CardContent>
//         </Card>
//       ))}

//       {/* Final Call to Action */}
//       <div className="mt-8 flex justify-center">
//         <Button variant="outline" asChild>
//           <a href="/customer/support">Contact Us for More Information</a>
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default InjectionMolding;

// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import Typography from "@/components/custom/typography";
// import { injectionMoldingData } from "@/data/injectionMolding";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// // Import images
// import InjectionMoldingMainImg from "/src/assets/INJECTIONMOLDING.jpg";
// import Image55 from "/src/assets/image55.jpeg";
// import Image56 from "/src/assets/image56.jpeg";
// import Image57 from "/src/assets/image57.jpeg";
// import Image58 from "/src/assets/image58.jpeg";
// import Image59 from "/src/assets/image59.jpeg";
// import Image60 from "/src/assets/image60.jpeg";
// import Image61 from "/src/assets/image61.jpeg";
// import Image62 from "/src/assets/image62.jpeg";
// import Image63 from "/src/assets/image63.jpeg";
// import Image64 from "/src/assets/image64.jpeg";

// // Mapping of titles (subsection and subheadings) to their corresponding imported images
// const subsectionImages = {
//   "Custom Plastic Injection Molding Materials": Image55,
//   "Elastomer and Rubber Molded Materials": Image56,
//   "Why Choose Xofah for Injection Molding?": Image57,
//   "Prototype Molding Service With Xofah": Image58,
//   "Production With Xofah": Image59,
//   "Custom Insert Molding With Xofah": Image60,
//   "Compression Molding": Image61,
//   "Society of Plastics Industry (SPI) Mold Finishes": Image62,
//   "Custom Plastic Fabrication Services": Image63,
//   "Micro Molding Services": Image64,
// };

// // Helper function to determine grid columns based on list length
// const getGridColumns = (listLength) => {
//   if (listLength > 20) return "grid grid-cols-1 md:grid-cols-3 gap-4";
//   if (listLength > 10) return "grid grid-cols-1 md:grid-cols-2 gap-4";
//   return "space-y-2"; // Default to vertical list for <= 10 items
// };

// function InjectionMolding() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section */}
//       <section className="relative bg-primary/10 py-32 overflow-hidden">
//         <div className="container mx-auto flex flex-col px-4 text-center relative z-10">
//           <Typography
//             variant="h1"
//             className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 drop-shadow-lg"
//           >
//             {injectionMoldingData.title}
//           </Typography>
//           <Typography
//             variant="lead"
//             className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto font-semibold"
//           >
//             {injectionMoldingData.lead}
//           </Typography>
//           <Button
//             size="lg"
//             className="w-64 mx-auto rounded-full gap-2 bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 shadow-xl"
//             onClick={() => navigate("/customer/quote")}
//           >
//             Get a Quote <ArrowRight className="w-5 h-5" />
//           </Button>
//         </div>
//         <div className="absolute inset-0 opacity-50">
//           <img
//             src={InjectionMoldingMainImg}
//             className="w-full h-full object-cover blur-sm"
//             alt="Injection Molding Overview"
//             onError={() => console.error("Failed to load hero image")}
//           />
//         </div>
//       </section>

//       {/* Detailed Sections */}
//       <section className="container mx-auto px-4 py-20 space-y-20">
//         {injectionMoldingData.sections.map((section, sectionIndex) => (
//           <div key={sectionIndex} className="space-y-12">
//             <div className="text-center space-y-6">
//               <Typography
//                 variant="h2"
//                 className="text-3xl md:text-4xl font-bold text-gray-800"
//               >
//                 {section.title}
//               </Typography>
//               <Separator className="w-20 mx-auto bg-primary" />
//             </div>
//             {section.subsections.map((subsection, subIndex) => {
//               const adjustedIndex =
//                 sectionIndex * section.subsections.length + subIndex;
//               return (
//                 <div key={subIndex} className="space-y-8">
//                   <div className="flex flex-col lg:flex-row gap-8 items-start">
//                     {adjustedIndex % 2 === 0 &&
//                       subsectionImages[subsection.title] && (
//                         <img
//                           src={subsectionImages[subsection.title]}
//                           className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-64 lg:h-auto"
//                           alt={`${subsection.title} Illustration`}
//                           onError={() =>
//                             console.error(
//                               `Failed to load image for ${subsection.title}`
//                             )
//                           }
//                         />
//                       )}
//                     <div className="flex-1 space-y-6">
//                       <Typography className="text-2xl font-semibold text-foreground">
//                         {subsection.title}
//                       </Typography>
//                       <div className="space-y-6">
//                         {subsection.content &&
//                           subsection.content.map((item, itemIndex) => (
//                             <div key={itemIndex} className="space-y-4">
//                               {typeof item === "string" ? (
//                                 <Typography className="text-base text-muted-foreground">
//                                   {item}
//                                 </Typography>
//                               ) : (
//                                 <>
//                                   {item.subheading && (
//                                     <Typography className="font-bold text-lg text-foreground">
//                                       {item.subheading}
//                                     </Typography>
//                                   )}
//                                   {item.text && (
//                                     <Typography className="text-base text-muted-foreground">
//                                       {item.text}
//                                     </Typography>
//                                   )}
//                                   {item.example && (
//                                     <Typography className="italic text-muted-foreground">
//                                       {item.example}
//                                     </Typography>
//                                   )}
//                                   {item.question && (
//                                     <>
//                                       <Typography className="font-bold text-foreground">
//                                         {item.question}
//                                       </Typography>
//                                       <Typography className="text-base text-muted-foreground">
//                                         {item.answer}
//                                       </Typography>
//                                     </>
//                                   )}
//                                   {item.additional && (
//                                     <Typography className="text-base text-muted-foreground">
//                                       {item.additional}
//                                     </Typography>
//                                   )}
//                                   {item.subheading &&
//                                     subsectionImages[item.subheading] && (
//                                       <img
//                                         src={subsectionImages[item.subheading]}
//                                         className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-64 lg:h-auto mt-4"
//                                         alt={`${item.subheading} Illustration`}
//                                         onError={() =>
//                                           console.error(
//                                             `Failed to load image for ${item.subheading}`
//                                           )
//                                         }
//                                       />
//                                     )}
//                                 </>
//                               )}
//                             </div>
//                           ))}
//                         {subsection.list && (
//                           <div className={getGridColumns(subsection.list.length)}>
//                             {subsection.list.map((listItem, listIndex) => (
//                               <div
//                                 key={listIndex}
//                                 className="flex items-start gap-2 text-muted-foreground p-2"
//                               >
//                                 <span className="text-primary mt-1">•</span>
//                                 <Typography className="inline">
//                                   {typeof listItem === "string" ? (
//                                     listItem
//                                   ) : (
//                                     <>
//                                       <strong>{listItem.name}</strong>
//                                       {listItem.description &&
//                                         `: ${listItem.description}`}
//                                       {listItem.sublist && (
//                                         <div className="mt-2 space-y-1">
//                                           {listItem.sublist.map(
//                                             (subItem, subItemIndex) => (
//                                               <div
//                                                 key={subItemIndex}
//                                                 className="flex items-start gap-2"
//                                               >
//                                                 <span className="text-primary mt-1">
//                                                   -
//                                                 </span>
//                                                 <Typography>{subItem}</Typography>
//                                               </div>
//                                             )
//                                           )}
//                                         </div>
//                                       )}
//                                       {listItem.additional && (
//                                         <Typography className="mt-2">
//                                           {listItem.additional}
//                                         </Typography>
//                                       )}
//                                     </>
//                                   )}
//                                 </Typography>
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                         {subsection.note && (
//                           <Typography className="text-base text-muted-foreground mt-4 italic">
//                             {subsection.note}
//                           </Typography>
//                         )}
//                         {subsection.table && (
//                           <Table className="mt-4 border border-gray-200">
//                             <TableHeader>
//                               <TableRow className="bg-gray-50">
//                                 {subsection.table.headers.map(
//                                   (header, headerIndex) => (
//                                     <TableHead
//                                       key={headerIndex}
//                                       className="p-3 text-foreground"
//                                     >
//                                       {header}
//                                     </TableHead>
//                                   )
//                                 )}
//                               </TableRow>
//                             </TableHeader>
//                             <TableBody>
//                               {subsection.table.rows.map((row, rowIndex) => (
//                                 <TableRow key={rowIndex}>
//                                   {row.map((cell, cellIndex) => (
//                                     <TableCell key={cellIndex} className="p-3">
//                                       {cell.split("\n").map((line, lineIndex) => (
//                                         <Typography
//                                           key={lineIndex}
//                                           className="block"
//                                         >
//                                           {line}
//                                         </Typography>
//                                       ))}
//                                     </TableCell>
//                                   ))}
//                                 </TableRow>
//                               ))}
//                             </TableBody>
//                           </Table>
//                         )}
//                         {subsection.advantages && (
//                           <>
//                             <Typography className="font-bold text-foreground text-lg mt-4">
//                               Advantages include:
//                             </Typography>
//                             <div className={getGridColumns(subsection.advantages.length)}>
//                               {subsection.advantages.map((advantage, advIndex) => (
//                                 <div
//                                   key={advIndex}
//                                   className="flex items-start gap-2 text-muted-foreground p-2"
//                                 >
//                                   <span className="text-primary mt-1">•</span>
//                                   <Typography className="inline">{advantage}</Typography>
//                                 </div>
//                               ))}
//                             </div>
//                           </>
//                         )}
//                         {subsection.disadvantages && (
//                           <>
//                             <Typography className="font-bold text-foreground text-lg mt-4">
//                               Disadvantages include:
//                             </Typography>
//                             <div className={getGridColumns(subsection.disadvantages.length)}>
//                               {subsection.disadvantages.map((disadvantage, disIndex) => (
//                                 <div
//                                   key={disIndex}
//                                   className="flex items-start gap-2 text-muted-foreground p-2"
//                                 >
//                                   <span className="text-primary mt-1">•</span>
//                                   <Typography className="inline">{disadvantage}</Typography>
//                                 </div>
//                               ))}
//                             </div>
//                           </>
//                         )}
//                         {subsection.quote && (
//                           <Typography className="italic text-muted-foreground mt-4">
//                             {subsection.quote}
//                           </Typography>
//                         )}
//                         {subsection.additionalContent &&
//                           subsection.additionalContent.map((addContent, addIndex) => (
//                             <Typography
//                               key={addIndex}
//                               className="text-base text-muted-foreground mt-4"
//                             >
//                               {addContent}
//                             </Typography>
//                           ))}
//                       </div>
//                       {subsection.button && (
//                         <div className="mt-4 flex justify-center">
//                           <Button
//                             size="lg"
//                             className="gap-2 bg-primary text-white hover:bg-primary/90"
//                             onClick={() => navigate("/customer/quote")}
//                           >
//                             {subsection.button.text} <ArrowRight className="w-5 h-5" />
//                           </Button>
//                         </div>
//                       )}
//                     </div>
//                     {adjustedIndex % 2 !== 0 &&
//                       subsectionImages[subsection.title] && (
//                         <img
//                           src={subsectionImages[subsection.title]}
//                           className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-auto my-auto lg:h-auto order-first lg:order-last"
//                           alt={`${subsection.title} Illustration`}
//                           onError={() =>
//                             console.error(
//                               `Failed to load image for ${subsection.title}`
//                             )
//                           }
//                         />
//                       )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </section>

//       {/* Final CTA */}
//       <section className="bg-primary/10 py-24 text-center border-t border-gray-200">
//         <div className="container mx-auto px-4 space-y-8">
//           <Typography
//             variant="h2"
//             className="text-3xl md:text-4xl font-bold text-foreground"
//           >
//             Ready to Start Your Injection Molding Project?
//           </Typography>
//           <Typography
//             variant="lead"
//             className="text-lg text-muted-foreground max-w-xl mx-auto"
//           >
//             Partner with Xofah for precision injection molding services tailored to your needs.
//           </Typography>
//           <div className="flex gap-4 justify-center">
//             <Button
//               size="lg"
//               className="gap-2 bg-primary text-white hover:bg-primary/90"
//               onClick={() => navigate("/customer/quote")}
//             >
//               Get a Quote <ArrowRight className="w-5 h-5" />
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               className="gap-2 hover:bg-muted"
//               asChild
//             >
//               <a href="/customer/support">Contact Us</a>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default InjectionMolding;

//=====================================================
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Typography from "@/components/custom/typography";
import { injectionMoldingData } from "@/data/injectionMolding";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Import images (unchanged)
import InjectionMoldingMainImg from "/src/assets/INJECTIONMOLDING.jpg";
import Image55 from "/src/assets/image55.jpeg";
import Image56 from "/src/assets/image56.jpeg";
import Image57 from "/src/assets/image57.jpeg";
import Image58 from "/src/assets/image58.jpeg";
import Image59 from "/src/assets/image59.jpeg";
import Image60 from "/src/assets/image60.jpeg";
import Image61 from "/src/assets/image61.jpeg";
import Image62 from "/src/assets/image62.jpeg";
import Image63 from "/src/assets/image63.jpeg";
import Image64 from "/src/assets/image64.jpeg";

// Mapping of titles (subsection and subheadings) to their corresponding imported images (unchanged)
const subsectionImages = {
  "Custom Plastic Injection Molding Materials": Image55,
  "Elastomer and Rubber Molded Materials": Image56,
  "Why Choose Xofah for Injection Molding?": Image57,
  "Prototype Molding Service With Xofah": Image58,
  "Production With Xofah": Image59,
  "Custom Insert Molding With Xofah": Image60,
  "Compression Molding": Image61,
  "Society of Plastics Industry (SPI) Mold Finishes": Image62,
  "Custom Plastic Fabrication Services": Image63,
  "Micro Molding Services": Image64,
};

// Helper function to determine grid columns based on list length (unchanged)
const getGridColumns = (listLength) => {
  if (listLength > 20) return "grid grid-cols-1 md:grid-cols-3 gap-4";
  if (listLength > 10) return "grid grid-cols-1 md:grid-cols-2 gap-4";
  return "space-y-2"; // Default to vertical list for <= 10 items
};

function InjectionMolding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary/10 py-32 overflow-hidden">
        <div className="container mx-auto flex flex-col px-4 text-center relative z-10">
          <Typography
            variant="h1"
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 drop-shadow-lg"
          >
            {injectionMoldingData.title}
          </Typography>
          <Typography
            variant="lead"
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto font-semibold"
          >
            {injectionMoldingData.lead}
          </Typography>
          <Button
            size="lg"
            className="w-64 mx-auto rounded-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 shadow-xl"
            onClick={() => navigate("/customer/quote")}
          >
            Get a Quote <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        <div className="absolute inset-0 opacity-50">
          <img
            src={InjectionMoldingMainImg}
            className="w-full h-full object-cover blur-sm"
            alt="Injection Molding Overview"
            onError={() => console.error("Failed to load hero image")}
          />
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="container mx-auto px-4 py-20 space-y-20">
        {injectionMoldingData.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-12">
            <div className="text-center space-y-6">
              <Typography
                variant="h2"
                className="text-3xl md:text-4xl font-bold text-foreground"
              >
                {section.title}
              </Typography>
              <Separator className="w-20 mx-auto bg-primary" />
            </div>
            {section.subsections.map((subsection, subIndex) => {
              const adjustedIndex =
                sectionIndex * section.subsections.length + subIndex;
              return (
                <div key={subIndex} className="space-y-8">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {adjustedIndex % 2 === 0 &&
                      subsectionImages[subsection.title] && (
                        <img
                          src={subsectionImages[subsection.title]}
                          className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-64 lg:h-auto"
                          alt={`${subsection.title} Illustration`}
                          onError={() =>
                            console.error(
                              `Failed to load image for ${subsection.title}`
                            )
                          }
                        />
                      )}
                    <div className="flex-1 space-y-6">
                      <Typography className="text-2xl font-semibold text-foreground">
                        {subsection.title}
                      </Typography>
                      <div className="space-y-6">
                        {subsection.content &&
                          subsection.content.map((item, itemIndex) => (
                            <div key={itemIndex} className="space-y-4">
                              {typeof item === "string" ? (
                                <Typography className="text-base text-muted-foreground">
                                  {item}
                                </Typography>
                              ) : (
                                <>
                                  {item.subheading && (
                                    <Typography className="font-bold text-lg text-foreground">
                                      {item.subheading}
                                    </Typography>
                                  )}
                                  {item.text && (
                                    <Typography className="text-base text-muted-foreground">
                                      {item.text}
                                    </Typography>
                                  )}
                                  {item.example && (
                                    <Typography className="italic text-muted-foreground">
                                      {item.example}
                                    </Typography>
                                  )}
                                  {item.question && (
                                    <>
                                      <Typography className="font-bold text-foreground">
                                        {item.question}
                                      </Typography>
                                      <Typography className="text-base text-muted-foreground">
                                        {item.answer}
                                      </Typography>
                                    </>
                                  )}
                                  {item.additional && (
                                    <Typography className="text-base text-muted-foreground">
                                      {item.additional}
                                    </Typography>
                                  )}
                                  {item.subheading &&
                                    subsectionImages[item.subheading] && (
                                      <img
                                        src={subsectionImages[item.subheading]}
                                        className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-64 lg:h-auto mt-4"
                                        alt={`${item.subheading} Illustration`}
                                        onError={() =>
                                          console.error(
                                            `Failed to load image for ${item.subheading}`
                                          )
                                        }
                                      />
                                    )}
                                </>
                              )}
                            </div>
                          ))}
                        {subsection.list && (
                          <div className={getGridColumns(subsection.list.length)}>
                            {subsection.list.map((listItem, listIndex) => (
                              <div
                                key={listIndex}
                                className="flex items-start gap-2 text-muted-foreground p-2"
                              >
                                <span className="text-primary mt-1">•</span>
                                <Typography className="inline">
                                  {typeof listItem === "string" ? (
                                    listItem
                                  ) : (
                                    <>
                                      <strong>{listItem.name}</strong>
                                      {listItem.description &&
                                        `: ${listItem.description}`}
                                      {listItem.sublist && (
                                        <div className="mt-2 space-y-1">
                                          {listItem.sublist.map(
                                            (subItem, subItemIndex) => (
                                              <div
                                                key={subItemIndex}
                                                className="flex items-start gap-2"
                                              >
                                                <span className="text-primary mt-1">
                                                  -
                                                </span>
                                                <Typography>{subItem}</Typography>
                                              </div>
                                            )
                                          )}
                                        </div>
                                      )}
                                      {listItem.additional && (
                                        <Typography className="mt-2">
                                          {listItem.additional}
                                        </Typography>
                                      )}
                                    </>
                                  )}
                                </Typography>
                              </div>
                            ))}
                          </div>
                        )}
                        {subsection.note && (
                          <Typography className="text-base text-muted-foreground mt-4 italic">
                            {subsection.note}
                          </Typography>
                        )}
                        {subsection.table && (
                          <Table className="mt-4 border border-border">
                            <TableHeader>
                              <TableRow className="bg-muted/50">
                                {subsection.table.headers.map(
                                  (header, headerIndex) => (
                                    <TableHead
                                      key={headerIndex}
                                      className="p-3 text-foreground"
                                    >
                                      {header}
                                    </TableHead>
                                  )
                                )}
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {subsection.table.rows.map((row, rowIndex) => (
                                <TableRow key={rowIndex}>
                                  {row.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex} className="p-3 text-muted-foreground">
                                      {cell.split("\n").map((line, lineIndex) => (
                                        <Typography
                                          key={lineIndex}
                                          className="block"
                                        >
                                          {line}
                                        </Typography>
                                      ))}
                                    </TableCell>
                                  ))}
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        )}
                        {subsection.advantages && (
                          <>
                            <Typography className="font-bold text-foreground text-lg mt-4">
                              Advantages include:
                            </Typography>
                            <div className={getGridColumns(subsection.advantages.length)}>
                              {subsection.advantages.map((advantage, advIndex) => (
                                <div
                                  key={advIndex}
                                  className="flex items-start gap-2 text-muted-foreground p-2"
                                >
                                  <span className="text-primary mt-1">•</span>
                                  <Typography className="inline">{advantage}</Typography>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                        {subsection.disadvantages && (
                          <>
                            <Typography className="font-bold text-foreground text-lg mt-4">
                              Disadvantages include:
                            </Typography>
                            <div className={getGridColumns(subsection.disadvantages.length)}>
                              {subsection.disadvantages.map((disadvantage, disIndex) => (
                                <div
                                  key={disIndex}
                                  className="flex items-start gap-2 text-muted-foreground p-2"
                                >
                                  <span className="text-primary mt-1">•</span>
                                  <Typography className="inline">{disadvantage}</Typography>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                        {subsection.quote && (
                          <Typography className="italic text-muted-foreground mt-4">
                            {subsection.quote}
                          </Typography>
                        )}
                        {subsection.additionalContent &&
                          subsection.additionalContent.map((addContent, addIndex) => (
                            <Typography
                              key={addIndex}
                              className="text-base text-muted-foreground mt-4"
                            >
                              {addContent}
                            </Typography>
                          ))}
                      </div>
                      {subsection.button && (
                        <div className="mt-4 flex justify-center">
                          <Button
                            size="lg"
                            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                            onClick={() => navigate("/customer/quote")}
                          >
                            {subsection.button.text} <ArrowRight className="w-5 h-5" />
                          </Button>
                        </div>
                      )}
                    </div>
                    {adjustedIndex % 2 !== 0 &&
                      subsectionImages[subsection.title] && (
                        <img
                          src={subsectionImages[subsection.title]}
                          className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-auto my-auto lg:h-auto order-first lg:order-last"
                          alt={`${subsection.title} Illustration`}
                          onError={() =>
                            console.error(
                              `Failed to load image for ${subsection.title}`
                            )
                          }
                        />
                      )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </section>

      {/* Final CTA */}
      <section className="bg-primary/10 py-24 text-center border-t border-border">
        <div className="container mx-auto px-4 space-y-8">
          <Typography
            variant="h2"
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Ready to Start Your Injection Molding Project?
          </Typography>
          <Typography
            variant="lead"
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Partner with Xofah for precision injection molding services tailored to your needs.
          </Typography>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => navigate("/customer/quote")}
            >
              Get a Quote <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 hover:bg-muted text-foreground"
              asChild
            >
              <a href="/customer/support">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InjectionMolding;