// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import Typography from "@/components/custom/typography";
// import { sheetMetalStampingData } from "@/data/sheetMetalData";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// // Import images
// import Image16 from "/src/assets/image16.jpeg";
// import Image17 from "/src/assets/image17.jpeg";
// import Image18 from "/src/assets/image18.jpeg";
// import Image19 from "/src/assets/image19.jpeg";
// import Image20 from "/src/assets/image20.jpeg";
// import Image21 from "/src/assets/image21.jpeg";
// import Image22 from "/src/assets/image22.jpeg";
// import Image23 from "/src/assets/image23.jpeg";
// import Image24 from "/src/assets/image24.jpeg";
// import Image25 from "/src/assets/image25.jpeg";
// import Image26 from "/src/assets/image26.jpeg";
// import Image27 from "/src/assets/image27.jpeg";
// import Image28 from "/src/assets/image28.jpeg";
// import Image29 from "/src/assets/image29.jpeg";
// import Image30 from "/src/assets/image30.jpeg";
// import Image31 from "/src/assets/image31.jpeg";
// import Image32 from "/src/assets/image32.jpeg";
// import Image33 from "/src/assets/image33.jpeg";
// import Image34 from "/src/assets/image34.jpeg";
// import Image35 from "/src/assets/image35.jpeg";
// import Image36 from "/src/assets/image36.jpeg";
// import Image37 from "/src/assets/image37.jpeg";
// import Image38 from "/src/assets/image38.png";
// import Image39 from "/src/assets/image39.jpeg";
// import Image40 from "/src/assets/image40.jpeg";

// // Mapping of subsection titles to their corresponding imported images
// const subsectionImages = {
//   "Available Sheet Metal Finishes": Image16,
//   "Xofah Sheet Cutting Sizes and Tolerances": Image17,
//   "How Xofah Sheet Cutting Works": Image18,
//   "Sheet Cutting Materials": Image19,
//   "Aluminum Alloy": Image20,
//   "Brass and Bronze Alloy": Image21,
//   "Copper Alloy": Image22,
//   "Mechanical Plastic": Image23,
//   "Clear and Colored Acrylic": Image24,
//   "EVA Foam, Polyurethane Foam (PU), Silicone Foam": Image25,
//   "Steel 1075, 1095, 4130, AR500, AR500, Corten A588, 1045 HR, A1011 HR, 1008, 1018, 4140, A36, A366, A572, A653, G90, Tool Steel D1, O1": Image26,
//   "Stainless 17-4 PH, 17-7, 301, 304, 316, 410, 430, 440C, CPM 154, S30V": Image27,
//   "Titanium Grade 2 and 5, Nickel Alloy": Image28,
//   "Cherry, Hardboard, MDF, Poplar, Red Oak, Wood Laminate (Plywood)": Image29,
//   "Carbon Fiber, Garolite G-10, Garolite G-11, Garolite LE (Phenolic)": Image30,
//   "Design Tip: Explode Your Text": Image31,
//   "Design Guide: Laser and Sheet Cutting": Image17,
//   "Advantages of Laser Cutting Services": Image18,
//   "High Quality Waterjet Cut Parts": Image32,
//   "Advantages of Waterjet Cutting": Image33,
//   "How Waterjets Work": Image34,
//   "Why Choose Xofah for Waterjet Cutting?": Image35,
//   "Sizes and Tolerances": Image36,
//   "Shapes and Materials": Image37,
//   "Tube Bending Sizes and Tolerances": Image38,
//   "Recommended Center Line Radius to Outer Diameter": Image39,
//   "(Above: Center Line Radius, CLR)": Image40,
// };

// // Helper function to determine grid columns based on list length
// const getGridColumns = (listLength) => {
//   if (listLength > 20) return "grid grid-cols-1 md:grid-cols-3 gap-4";
//   if (listLength > 10) return "grid grid-cols-1 md:grid-cols-2 gap-4";
//   return "space-y-2"; // Default to vertical list for <= 10 items
// };

// function SheetMetalStamping() {
//   const navigate = useNavigate();

//   // Custom rendering for "Sheet Cutting Materials" subsection
//   const renderSheetCuttingMaterials = (content) => {
//     const materialCategories = content.filter(item => typeof item !== "string");
//     return materialCategories.map((category, index) => (
//       <div key={index} className="flex flex-col lg:flex-row gap-8 items-start">
//         {index % 2 === 0 && subsectionImages[category.subheading] && (
//           <img
//             src={subsectionImages[category.subheading]}
//             className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-64 lg:h-auto"
//             alt={`${category.subheading} Illustration`}
//             onError={() => console.error(`Failed to load image for ${category.subheading}`)}
//           />
//         )}
//         <div className="flex-1 space-y-4">
//           <Typography className="font-bold text-foreground text-lg">
//             {category.subheading}
//           </Typography>
//           {category.list && (
//             <div className={getGridColumns(category.list.length)}>
//               {category.list.map((listItem, listIndex) => (
//                 <div
//                   key={listIndex}
//                   className="flex items-start gap-2 text-muted-foreground p-2"
//                 >
//                   <span className="text-primary mt-1">•</span>
//                   <Typography className="inline">
//                     {listItem}
//                   </Typography>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//         {index % 2 !== 0 && subsectionImages[category.subheading] && (
//           <img
//             src={subsectionImages[category.subheading]}
//             className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-full lg:h-auto order-first lg:order-last"
//             alt={`${category.subheading} Illustration`}
//             onError={() => console.error(`Failed to load image for ${category.subheading}`)}
//           />
//         )}
//       </div>
//     ));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section */}
//       <section className="relative bg-primary/10 py-32 overflow-hidden">
//         <div className="container mx-auto flex flex-col px-4 text-center relative z-10">
//           <Typography
//             variant="h1"
//             className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 drop-shadow-lg"
//           >
//             {sheetMetalStampingData.title}
//           </Typography>
//           <Typography
//             variant="lead"
//             className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-semibold"
//           >
//             {sheetMetalStampingData.lead}
//           </Typography>
//           <Button
//             size="lg"
//             className="w-64 mx-auto rounded-full gap-2 bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 shadow-xl"
//             onClick={() => navigate("/customer/quote")}
//           >
//             Get a Quote <ArrowRight className="w-5 h-5" />
//           </Button>
//         </div>
//         <div className="absolute inset-0 opacity-20">
//           <img
//             src={Image16}
//             className="w-full h-full object-cover blur-sm"
//             alt="Sheet Metal Stamping Equipment"
//             onError={() => console.error("Failed to load hero image")}
//           />
//         </div>
//       </section>

//       {/* Service Highlights */}
//       <section className="container mx-auto px-4 py-20">
//         <Typography
//           variant="h2"
//           className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 tracking-wide"
//         >
//           Our Sheet Metal Services
//         </Typography>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {sheetMetalStampingData.sections.map((section, index) => (
//             <div
//               key={index}
//               className="p-6 flex flex-col items-center text-center gap-4 bg-white rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-md"
//             >
//               <div className="p-4 rounded-full bg-primary/20 text-primary">
//                 <svg
//                   className="w-8 h-8"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold text-foreground">
//                 {section.title}
//               </h3>
//               <p className="text-sm text-muted-foreground">
//                 {section.subsections[0]?.content?.[0]?.substring(0, 100)}...
//               </p>
//               <Button
//                 variant="link"
//                 className="text-primary hover:text-primary/80 mt-2"
//                 onClick={() => navigate("/customer/quote")}
//               >
//                 Learn More
//               </Button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Detailed Sections */}
//       <section className="container mx-auto px-4 py-20 space-y-20">
//         {sheetMetalStampingData.sections.map((section, sectionIndex) => (
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
//             {section.subsections.map((subsection, subIndex) => (
//               <div key={subIndex} className="space-y-8">
//                 <div className="flex flex-col lg:flex-row gap-8 items-start">
//                   {subIndex % 2 === 0 && subsectionImages[subsection.title] && subsection.title !== "Sheet Cutting Materials" && (
//                     <img
//                       src={subsectionImages[subsection.title]}
//                       className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-64 lg:h-auto"
//                       alt={`${subsection.title} Illustration`}
//                       onError={() =>
//                         console.error(`Failed to load image for ${subsection.title}`)
//                       }
//                     />
//                   )}
//                   <div className="flex-1 space-y-6">
//                     <h3 className="text-2xl font-semibold text-foreground">
//                       {subsection.title}
//                     </h3>
//                     <div className="space-y-6">
//                       {subsection.title === "Sheet Cutting Materials" ? (
//                         renderSheetCuttingMaterials(subsection.content)
//                       ) : (
//                         subsection.content?.map((item, itemIndex) => (
//                           <div key={itemIndex} className="space-y-4">
//                             {typeof item === "string" ? (
//                               <Typography className="text-base text-muted-foreground">
//                                 {item}
//                               </Typography>
//                             ) : (
//                               <>
//                                 {item.subheading && (
//                                   <Typography className="font-bold text-foreground text-lg">
//                                     {item.subheading}
//                                   </Typography>
//                                 )}
//                                 {item.text && (
//                                   <Typography className="text-base text-muted-foreground">
//                                     {item.text}
//                                   </Typography>
//                                 )}
//                                 {item.additional && (
//                                   <Typography className="text-base text-muted-foreground">
//                                     {item.additional}
//                                   </Typography>
//                                 )}
//                                 {item.list && (
//                                   <div className={getGridColumns(item.list.length)}>
//                                     {item.list.map((listItem, listIndex) => (
//                                       <div
//                                         key={listIndex}
//                                         className="flex items-start gap-2 text-muted-foreground p-2"
//                                       >
//                                         <span className="text-primary mt-1">•</span>
//                                         <Typography className="inline">
//                                           {typeof listItem === "string" ? (
//                                             listItem
//                                           ) : (
//                                             <>
//                                               <strong>{listItem.name}</strong>
//                                               {listItem.description && `: ${listItem.description}`}
//                                             </>
//                                           )}
//                                         </Typography>
//                                       </div>
//                                     ))}
//                                   </div>
//                                 )}
//                                 {item.subheading && subsectionImages[item.subheading] && (
//                                   <img
//                                     src={subsectionImages[item.subheading]}
//                                     className="rounded-xl shadow-lg object-cover w-full h-64 mt-4"
//                                     alt={`${item.subheading} Illustration`}
//                                     onError={() =>
//                                       console.error(`Failed to load image for ${item.subheading}`)
//                                     }
//                                   />
//                                 )}
//                               </>
//                             )}
//                           </div>
//                         ))
//                       )}
//                       {subsection.list && (
//                         <div className={getGridColumns(subsection.list.length)}>
//                           {subsection.list.map((listItem, listIndex) => (
//                             <div
//                               key={listIndex}
//                               className="flex items-start gap-2 text-muted-foreground p-2"
//                             >
//                               <span className="text-primary mt-1">•</span>
//                               <Typography className="inline">
//                                 {typeof listItem === "string" ? (
//                                   listItem
//                                 ) : (
//                                   <>
//                                     <strong>{listItem.name}</strong>
//                                     {listItem.description && `: ${listItem.description}`}
//                                   </>
//                                 )}
//                               </Typography>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                       {subsection.table && (
//                         <Table className="mt-4 border border-gray-200">
//                           <TableHeader>
//                             <TableRow className="bg-gray-50">
//                               {subsection.table.headers.map((header, headerIndex) => (
//                                 <TableHead key={headerIndex} className="p-3 text-foreground">
//                                   {header}
//                                 </TableHead>
//                               ))}
//                             </TableRow>
//                           </TableHeader>
//                           <TableBody>
//                             {subsection.table.rows.map((row, rowIndex) => (
//                               <TableRow key={rowIndex}>
//                                 {row.map((cell, cellIndex) => (
//                                   <TableCell key={cellIndex} className="p-3">
//                                     {cell.split("\n").map((line, lineIndex) => (
//                                       <Typography key={lineIndex} className="block">
//                                         {line}
//                                       </Typography>
//                                     ))}
//                                   </TableCell>
//                                 ))}
//                               </TableRow>
//                             ))}
//                           </TableBody>
//                         </Table>
//                       )}
//                       {subsection.advantages && (
//                         <>
//                           <Typography className="mt-2 font-bold text-foreground text-lg">
//                             Advantages include:
//                           </Typography>
//                           <div className={getGridColumns(subsection.advantages.length)}>
//                             {subsection.advantages.map((advantage, advIndex) => (
//                               <div
//                                 key={advIndex}
//                                 className="flex items-start gap-2 text-muted-foreground p-2"
//                               >
//                                 <span className="text-primary mt-1">•</span>
//                                 <Typography className="inline">{advantage}</Typography>
//                               </div>
//                             ))}
//                           </div>
//                         </>
//                       )}
//                       {subsection.disadvantages && (
//                         <>
//                           <Typography className="mt-2 font-bold text-foreground text-lg">
//                             Disadvantages include:
//                           </Typography>
//                           <div className={getGridColumns(subsection.disadvantages.length)}>
//                             {subsection.disadvantages.map((disadvantage, disIndex) => (
//                               <div
//                                 key={disIndex}
//                                 className="flex items-start gap-2 text-muted-foreground p-2"
//                               >
//                                 <span className="text-primary mt-1">•</span>
//                                 <Typography className="inline">{disadvantage}</Typography>
//                               </div>
//                             ))}
//                           </div>
//                         </>
//                       )}
//                       {subsection.button && (
//                         <Button
//                           variant="outline"
//                           className="mt-4 gap-2 hover:bg-primary/10"
//                           onClick={() => navigate("/customer/quote")}
//                         >
//                           {subsection.button.text} <ArrowRight className="w-4 h-4" />
//                         </Button>
//                       )}
//                     </div>
//                   </div>
//                   {subIndex % 2 !== 0 && subsectionImages[subsection.title] && subsection.title !== "Sheet Cutting Materials" && (
//                     <img
//                       src={subsectionImages[subsection.title]}
//                       className="rounded-xl shadow-lg object-cover w-1/2 h-full my-auto order-first lg:order-last"
//                       alt={`${subsection.title} Illustration`}
//                       onError={() =>
//                         console.error(`Failed to load image for ${subsection.title}`)
//                       }
//                     />
//                   )}
//                 </div>
//                 {(subsection.additionalContent || subsection.additionalContent2) && (
//                   <div className="space-y-6">
//                     {subsection.additionalContent &&
//                       subsection.additionalContent.map((addContent, addIndex) => (
//                         <div key={addIndex} className="space-y-4">
//                           {typeof addContent === "string" ? (
//                             <Typography className="text-base text-muted-foreground">
//                               {addContent}
//                             </Typography>
//                           ) : (
//                             <>
//                               {addContent.subheading && (
//                                 <Typography className="font-bold text-foreground text-lg">
//                                   {addContent.subheading}
//                                 </Typography>
//                               )}
//                               {addContent.text && (
//                                 <Typography className="text-base text-muted-foreground">
//                                   {addContent.text}
//                                 </Typography>
//                               )}
//                               {addContent.additional && (
//                                 <Typography className="text-base text-muted-foreground">
//                                   {addContent.additional}
//                                 </Typography>
//                               )}
//                               {addContent.subheading && subsectionImages[addContent.subheading] && (
//                                 <img
//                                   src={subsectionImages[addContent.subheading]}
//                                   className="rounded-xl shadow-lg object-cover w-full h-64 mt-4"
//                                   alt={`${addContent.subheading} Illustration`}
//                                   onError={() =>
//                                     console.error(`Failed to load image for ${addContent.subheading}`)
//                                   }
//                                 />
//                               )}
//                             </>
//                           )}
//                         </div>
//                       ))}
//                     {subsection.additionalContent2 &&
//                       subsection.additionalContent2.map((addContent, addIndex) => (
//                         <Typography
//                           key={addIndex}
//                           className="mt-2 text-base text-muted-foreground"
//                         >
//                           {addContent}
//                         </Typography>
//                       ))}
//                   </div>
//                 )}
//               </div>
//             ))}
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
//             Ready to Start Your Sheet Metal Project?
//           </Typography>
//           <Typography
//             variant="lead"
//             className="text-lg text-muted-foreground max-w-xl mx-auto"
//           >
//             Partner with Xofah for precision sheet metal stamping and fabrication tailored to your needs.
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

// export default SheetMetalStamping;

//============================================================
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Typography from "@/components/custom/typography";
import { sheetMetalStampingData } from "@/data/sheetMetalData";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Import images (unchanged)
import Image16 from "/src/assets/image16.jpeg";
import Image17 from "/src/assets/image17.jpeg";
import Image18 from "/src/assets/image18.jpeg";
import Image19 from "/src/assets/image19.jpeg";
import Image20 from "/src/assets/image20.jpeg";
import Image21 from "/src/assets/image21.jpeg";
import Image22 from "/src/assets/image22.jpeg";
import Image23 from "/src/assets/image23.jpeg";
import Image24 from "/src/assets/image24.jpeg";
import Image25 from "/src/assets/image25.jpeg";
import Image26 from "/src/assets/image26.jpeg";
import Image27 from "/src/assets/image27.jpeg";
import Image28 from "/src/assets/image28.jpeg";
import Image29 from "/src/assets/image29.jpeg";
import Image30 from "/src/assets/image30.jpeg";
import Image31 from "/src/assets/image31.jpeg";
import Image32 from "/src/assets/image32.jpeg";
import Image33 from "/src/assets/image33.jpeg";
import Image34 from "/src/assets/image34.jpeg";
import Image35 from "/src/assets/image35.jpeg";
import Image36 from "/src/assets/image36.jpeg";
import Image37 from "/src/assets/image37.jpeg";
import Image38 from "/src/assets/image38.png";
import Image39 from "/src/assets/image39.jpeg";
import Image40 from "/src/assets/image40.jpeg";

// Mapping of subsection titles to their corresponding imported images (unchanged)
const subsectionImages = {
  "Available Sheet Metal Finishes": Image16,
  "Xofah Sheet Cutting Sizes and Tolerances": Image17,
  "How Xofah Sheet Cutting Works": Image18,
  "Sheet Cutting Materials": Image19,
  "Aluminum Alloy": Image20,
  "Brass and Bronze Alloy": Image21,
  "Copper Alloy": Image22,
  "Mechanical Plastic": Image23,
  "Clear and Colored Acrylic": Image24,
  "EVA Foam, Polyurethane Foam (PU), Silicone Foam": Image25,
  "Steel 1075, 1095, 4130, AR500, AR500, Corten A588, 1045 HR, A1011 HR, 1008, 1018, 4140, A36, A366, A572, A653, G90, Tool Steel D1, O1": Image26,
  "Stainless 17-4 PH, 17-7, 301, 304, 316, 410, 430, 440C, CPM 154, S30V": Image27,
  "Titanium Grade 2 and 5, Nickel Alloy": Image28,
  "Cherry, Hardboard, MDF, Poplar, Red Oak, Wood Laminate (Plywood)": Image29,
  "Carbon Fiber, Garolite G-10, Garolite G-11, Garolite LE (Phenolic)": Image30,
  "Design Tip: Explode Your Text": Image31,
  "Design Guide: Laser and Sheet Cutting": Image17,
  "Advantages of Laser Cutting Services": Image18,
  "High Quality Waterjet Cut Parts": Image32,
  "Advantages of Waterjet Cutting": Image33,
  "How Waterjets Work": Image34,
  "Why Choose Xofah for Waterjet Cutting?": Image35,
  "Sizes and Tolerances": Image36,
  "Shapes and Materials": Image37,
  "Tube Bending Sizes and Tolerances": Image38,
  "Recommended Center Line Radius to Outer Diameter": Image39,
  "(Above: Center Line Radius, CLR)": Image40,
};

// Helper function to determine grid columns based on list length (unchanged)
const getGridColumns = (listLength) => {
  if (listLength > 20) return "grid grid-cols-1 md:grid-cols-3 gap-4";
  if (listLength > 10) return "grid grid-cols-1 md:grid-cols-2 gap-4";
  return "space-y-2"; // Default to vertical list for <= 10 items
};

function SheetMetalStamping() {
  const navigate = useNavigate();

  // Custom rendering for "Sheet Cutting Materials" subsection (unchanged)
  const renderSheetCuttingMaterials = (content) => {
    const materialCategories = content.filter(item => typeof item !== "string");
    return materialCategories.map((category, index) => (
      <div key={index} className="flex flex-col lg:flex-row gap-8 items-start">
        {index % 2 === 0 && subsectionImages[category.subheading] && (
          <img
            src={subsectionImages[category.subheading]}
            className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-64 lg:h-auto"
            alt={`${category.subheading} Illustration`}
            onError={() => console.error(`Failed to load image for ${category.subheading}`)}
          />
        )}
        <div className="flex-1 space-y-4">
          <Typography className="font-bold text-foreground text-lg">
            {category.subheading}
          </Typography>
          {category.list && (
            <div className={getGridColumns(category.list.length)}>
              {category.list.map((listItem, listIndex) => (
                <div
                  key={listIndex}
                  className="flex items-start gap-2 text-muted-foreground p-2"
                >
                  <span className="text-primary mt-1">•</span>
                  <Typography className="inline">
                    {listItem}
                  </Typography>
                </div>
              ))}
            </div>
          )}
        </div>
        {index % 2 !== 0 && subsectionImages[category.subheading] && (
          <img
            src={subsectionImages[category.subheading]}
            className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-full lg:h-auto order-first lg:order-last"
            alt={`${category.subheading} Illustration`}
            onError={() => console.error(`Failed to load image for ${category.subheading}`)}
          />
        )}
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary/10 py-32 overflow-hidden">
        <div className="container mx-auto flex flex-col px-4 text-center relative z-10">
          <Typography
            variant="h1"
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 drop-shadow-lg"
          >
            {sheetMetalStampingData.title}
          </Typography>
          <Typography
            variant="lead"
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto font-semibold"
          >
            {sheetMetalStampingData.lead}
          </Typography>
          <Button
            size="lg"
            className="w-64 mx-auto rounded-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 shadow-xl"
            onClick={() => navigate("/customer/quote")}
          >
            Get a Quote <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        <div className="absolute inset-0 opacity-20">
          <img
            src={Image16}
            className="w-full h-full object-cover blur-sm"
            alt="Sheet Metal Stamping Equipment"
            onError={() => console.error("Failed to load hero image")}
          />
        </div>
      </section>

      {/* Service Highlights */}
      <section className="container mx-auto px-4 py-20">
        <Typography
          variant="h2"
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 tracking-wide"
        >
          Our Sheet Metal Services
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sheetMetalStampingData.sections.map((section, index) => (
            <div
              key={index}
              className="p-6 flex flex-col items-center text-center gap-4 bg-card rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-md"
            >
              <div className="p-4 rounded-full bg-primary/20 text-primary">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {section.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {section.subsections[0]?.content?.[0]?.substring(0, 100)}...
              </p>
              <Button
                variant="link"
                className="text-primary hover:text-primary/80 mt-2"
                onClick={() => navigate("/customer/quote")}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="container mx-auto px-4 py-20 space-y-20">
        {sheetMetalStampingData.sections.map((section, sectionIndex) => (
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
            {section.subsections.map((subsection, subIndex) => (
              <div key={subIndex} className="space-y-8">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  {subIndex % 2 === 0 && subsectionImages[subsection.title] && subsection.title !== "Sheet Cutting Materials" && (
                    <img
                      src={subsectionImages[subsection.title]}
                      className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-64 lg:h-auto"
                      alt={`${subsection.title} Illustration`}
                      onError={() =>
                        console.error(`Failed to load image for ${subsection.title}`)
                      }
                    />
                  )}
                  <div className="flex-1 space-y-6">
                    <h3 className="text-2xl font-semibold text-foreground">
                      {subsection.title}
                    </h3>
                    <div className="space-y-6">
                      {subsection.title === "Sheet Cutting Materials" ? (
                        renderSheetCuttingMaterials(subsection.content)
                      ) : (
                        subsection.content?.map((item, itemIndex) => (
                          <div key={itemIndex} className="space-y-4">
                            {typeof item === "string" ? (
                              <Typography className="text-base text-muted-foreground">
                                {item}
                              </Typography>
                            ) : (
                              <>
                                {item.subheading && (
                                  <Typography className="font-bold text-foreground text-lg">
                                    {item.subheading}
                                  </Typography>
                                )}
                                {item.text && (
                                  <Typography className="text-base text-muted-foreground">
                                    {item.text}
                                  </Typography>
                                )}
                                {item.additional && (
                                  <Typography className="text-base text-muted-foreground">
                                    {item.additional}
                                  </Typography>
                                )}
                                {item.list && (
                                  <div className={getGridColumns(item.list.length)}>
                                    {item.list.map((listItem, listIndex) => (
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
                                              {listItem.description && `: ${listItem.description}`}
                                            </>
                                          )}
                                        </Typography>
                                      </div>
                                    ))}
                                  </div>
                                )}
                                {item.subheading && subsectionImages[item.subheading] && (
                                  <img
                                    src={subsectionImages[item.subheading]}
                                    className="rounded-xl shadow-lg object-cover w-full h-64 mt-4"
                                    alt={`${item.subheading} Illustration`}
                                    onError={() =>
                                      console.error(`Failed to load image for ${item.subheading}`)
                                    }
                                  />
                                )}
                              </>
                            )}
                          </div>
                        ))
                      )}
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
                                    {listItem.description && `: ${listItem.description}`}
                                  </>
                                )}
                              </Typography>
                            </div>
                          ))}
                        </div>
                      )}
                      {subsection.table && (
                        <Table className="mt-4 border border-border">
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              {subsection.table.headers.map((header, headerIndex) => (
                                <TableHead key={headerIndex} className="p-3 text-foreground">
                                  {header}
                                </TableHead>
                              ))}
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {subsection.table.rows.map((row, rowIndex) => (
                              <TableRow key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                  <TableCell key={cellIndex} className="p-3 text-muted-foreground">
                                    {cell.split("\n").map((line, lineIndex) => (
                                      <Typography key={lineIndex} className="block">
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
                          <Typography className="mt-2 font-bold text-foreground text-lg">
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
                          <Typography className="mt-2 font-bold text-foreground text-lg">
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
                      {subsection.button && (
                        <Button
                          variant="outline"
                          className="mt-4 gap-2 hover:bg-primary/10 text-foreground"
                          onClick={() => navigate("/customer/quote")}
                        >
                          {subsection.button.text} <ArrowRight className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                  {subIndex % 2 !== 0 && subsectionImages[subsection.title] && subsection.title !== "Sheet Cutting Materials" && (
                    <img
                      src={subsectionImages[subsection.title]}
                      className="rounded-xl shadow-lg object-cover w-1/2 h-full my-auto order-first lg:order-last"
                      alt={`${subsection.title} Illustration`}
                      onError={() =>
                        console.error(`Failed to load image for ${subsection.title}`)
                      }
                    />
                  )}
                </div>
                {(subsection.additionalContent || subsection.additionalContent2) && (
                  <div className="space-y-6">
                    {subsection.additionalContent &&
                      subsection.additionalContent.map((addContent, addIndex) => (
                        <div key={addIndex} className="space-y-4">
                          {typeof addContent === "string" ? (
                            <Typography className="text-base text-muted-foreground">
                              {addContent}
                            </Typography>
                          ) : (
                            <>
                              {addContent.subheading && (
                                <Typography className="font-bold text-foreground text-lg">
                                  {addContent.subheading}
                                </Typography>
                              )}
                              {addContent.text && (
                                <Typography className="text-base text-muted-foreground">
                                  {addContent.text}
                                </Typography>
                              )}
                              {addContent.additional && (
                                <Typography className="text-base text-muted-foreground">
                                  {addContent.additional}
                                </Typography>
                              )}
                              {addContent.subheading && subsectionImages[addContent.subheading] && (
                                <img
                                  src={subsectionImages[addContent.subheading]}
                                  className="rounded-xl shadow-lg object-cover w-full h-64 mt-4"
                                  alt={`${addContent.subheading} Illustration`}
                                  onError={() =>
                                    console.error(`Failed to load image for ${addContent.subheading}`)
                                  }
                                />
                              )}
                            </>
                          )}
                        </div>
                      ))}
                    {subsection.additionalContent2 &&
                      subsection.additionalContent2.map((addContent, addIndex) => (
                        <Typography
                          key={addIndex}
                          className="mt-2 text-base text-muted-foreground"
                        >
                          {addContent}
                        </Typography>
                      ))}
                  </div>
                )}
              </div>
            ))}
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
            Ready to Start Your Sheet Metal Project?
          </Typography>
          <Typography
            variant="lead"
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Partner with Xofah for precision sheet metal stamping and fabrication tailored to your needs.
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

export default SheetMetalStamping;