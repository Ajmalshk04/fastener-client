// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import Typography from "@/components/custom/typography";
// import { cncMachiningData } from "@/data/cncMachine";
// import { ArrowRight, Factory, Drill, Gauge, TestTube2 } from "lucide-react";

// // Import all images
// import MainImage from "../../assets/image1.jpeg";
// import Image3 from "../../assets/image3.png";
// import Image5 from "../../assets/image5.jpeg";
// import Image4 from "../../assets/image4.png";
// import Image6 from "../../assets/image6.jpeg";
// import Image7 from "../../assets/image7.png";
// import Image8 from "../../assets/image8.jpeg";
// import Image9 from "../../assets/image9.jpeg";
// import Image10 from "../../assets/image10.jpeg";
// import Image11 from "../../assets/image11.jpeg";
// import Image12 from "../../assets/image12.jpeg";
// import Image13 from "../../assets/image13.jpeg";
// import Image14 from "../../assets/image14.jpeg";
// import Image15 from "../../assets/image15.jpeg";
// import ExtrusionsImg from "../../assets/EXTRUSIONS.jpg";
// import { useNavigate } from "react-router-dom";

// // Mapping of subsection titles to their corresponding imported images
// const subsectionImages = {
//   "Xofah has a diverse range of CNC Machining Capabilities": Image3,
//   "High Quality Rapid CNC Milling Service": Image4,
//   "CNC Milling Tolerances & Standards": Image5,
//   "The Basics Of CNC Mills": Image6,
//   "CNC Turning Service Overview": Image7,
//   "The Basics Of CNC Lathes": Image8,
//   "Custom Wire EDM Machining With Xofah": Image9,
//   "Applications of Medical CNC Machining": Image10,
//   "Medical Devices": Image11,
//   "Wire EDM Medical Machining": Image12,
//   "Xofah Includes CNC Machining in Aluminum": ExtrusionsImg,
//   "Advantages of Medical CNC Machining with Xofah": Image12,
//   "METAL STAMPING & FORMING PROCESSES": Image13,
//   "Xofah SUPPORTS A VARIETY OF MATERIALS FOR SHEET METAL STAMPINGS": Image14,
//   "SECONDARY SHEET METAL STAMPING FINISHING SERVICES": Image15,
// };

// Dynamic Component
// function CncMachining() {
//   const navigate = useNavigate();
//   return (
//     <div className="container mx-auto p-10">
//       {/* Main Header */}
//       <Typography variant="h1" className="text-center">
//         {cncMachiningData.title}
//       </Typography>
//       <Typography variant="lead" className="text-center mt-4">
//         {cncMachiningData.lead}
//       </Typography>
//       <div className="mt-6 flex justify-center">
//         <Button
//                 className="text-white mt-4"
//                 onClick={() => navigate("/customer/quote")}
//               >
//                 Get a Quote
//               </Button>
//       </div>

//       <Separator className="my-8" />
//       <img
//         src={MainImage}
//         className="container w-full mx-auto object-cover"
//         alt="CNC Machining Equipment"
//       />

//       {/* Dynamic Sections */}
//       {cncMachiningData.sections.map((section, index) => (
//         <Card key={index} className="mb-8 border-none">
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
//                       ) : item && typeof item === "object" ? (
//                         <>
//                           {item.subheading && (
//                             <Typography className="font-bold">{item.subheading}</Typography>
//                           )}
//                           {item.text && <Typography>{item.text}</Typography>}
//                           {item.example && (
//                             <Typography className="italic">{item.example}</Typography>
//                           )}
//                           {item.question && (
//                             <>
//                               <Typography className="font-bold">{item.question}</Typography>
//                               <Typography>{item.answer}</Typography>
//                             </>
//                           )}
//                           {item.additional && <Typography>{item.additional}</Typography>}
//                           {item.list && (
//                             <ul className="list-disc list-outside mt-2 ml-4">
//                               {item.list.map((listItem, listIndex) => {
//                                 if (typeof listItem !== "string" && !listItem) {
//                                   console.error("Invalid listItem in content.list:", listItem);
//                                   return null;
//                                 }
//                                 return (
//                                   <li key={listIndex} className="flex items-start">
//                                     <span className="mr-2">•</span>
//                                     <Typography className="inline">
//                                       {typeof listItem === "string" ? (
//                                         listItem
//                                       ) : listItem && typeof listItem === "object" ? (
//                                         <>
//                                           <strong>{listItem.name}</strong>
//                                           {listItem.description && `: ${listItem.description}`}
//                                           {listItem.sublist && (
//                                             <ul className="list-disc list-outside ml-6 mt-1">
//                                               {listItem.sublist.map((subItem, subItemIndex) => (
//                                                 <li key={subItemIndex} className="flex items-start">
//                                                   <span className="mr-2">•</span>
//                                                   <Typography className="inline">{subItem}</Typography>
//                                                 </li>
//                                               ))}
//                                             </ul>
//                                           )}
//                                           {listItem.additional && (
//                                             <Typography className="block mt-1">{listItem.additional}</Typography>
//                                           )}
//                                         </>
//                                       ) : (
//                                         "Invalid list item"
//                                       )}
//                                     </Typography>
//                                   </li>
//                                 );
//                               })}
//                             </ul>
//                           )}
//                         </>
//                       ) : (
//                         <Typography>Invalid content item</Typography>
//                       )}
//                     </div>
//                   ))}
//                 {subsection.list && (
//                   <ul className="list-disc list-outside mt-2 ml-4">
//                     {subsection.list.map((listItem, listIndex) => {
//                       if (typeof listItem !== "string" && (!listItem || typeof listItem !== "object")) {
//                         console.error("Unexpected listItem in subsection.list:", listItem);
//                         return null;
//                       }
//                       return (
//                         <li key={listIndex} className="flex items-start">
//                           <span className="mr-2">•</span>
//                           <Typography className="inline">
//                             {typeof listItem === "string" ? (
//                               listItem
//                             ) : listItem && typeof listItem === "object" ? (
//                               <>
//                                 {listItem.name && <strong>{listItem.name}</strong>}
//                                 {listItem.description && `: ${listItem.description}`}
//                                 {listItem.sublist && (
//                                   <ul className="list-disc list-outside ml-6 mt-1">
//                                     {listItem.sublist.map((subItem, subItemIndex) => (
//                                       <li key={subItemIndex} className="flex items-start">
//                                         <span className="mr-2">•</span>
//                                         <Typography className="inline">{subItem}</Typography>
//                                       </li>
//                                     ))}
//                                   </ul>
//                                 )}
//                                 {listItem.additional && (
//                                   <Typography className="block mt-1">{listItem.additional}</Typography>
//                                 )}
//                               </>
//                             ) : null}
//                           </Typography>
//                         </li>
//                       );
//                     })}
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
//                     <Typography className="mt-2 font-bold">Advantages include:</Typography>
//                     <ul className="list-disc list-outside mt-2 ml-4">
//                       {subsection.advantages.map((advantage, advIndex) => (
//                         <li key={advIndex} className="flex items-start">
//                           <span className="mr-2">•</span>
//                           <Typography className="inline">{advantage}</Typography>
//                         </li>
//                       ))}
//                     </ul>
//                   </>
//                 )}
//                 {subsection.disadvantages && (
//                   <>
//                     <Typography className="mt-2 font-bold">Disadvantages include:</Typography>
//                     <ul className="list-disc list-outside mt-2 ml-4">
//                       {subsection.disadvantages.map((disadvantage, disIndex) => (
//                         <li key={disIndex} className="flex items-start">
//                           <span className="mr-2">•</span>
//                           <Typography className="inline">{disadvantage}</Typography>
//                         </li>
//                       ))}
//                     </ul>
//                   </>
//                 )}
//                 {subsection.quote && (
//                   <Typography className="mt-2 italic">{subsection.quote}</Typography>
//                 )}
//                 {/* Add Image if Subsection Title Matches */}
//                 {subsectionImages[subsection.title] && (
//                   <img
//                     src={subsectionImages[subsection.title]}
//                     className="container w-full h-auto px-40 object-cover my-28"
//                     alt={`${subsection.title} Illustration`}
//                   />
//                 )}
//                 {subsection.button && (
//                   <div className="mt-4 flex justify-center">
//                     <Button asChild
//     onClick={() => navigate("/customer/quote")}
// >
//                      {subsection.button.text}
//                     </Button>
//                   </div>
//                 )}
//                 {subsection.additionalContent &&
//                   subsection.additionalContent.map((addContent, addIndex) => (
//                     <Typography key={addIndex} className="mt-2">{addContent}</Typography>
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

// export default CncMachining;

// const sectionIcons = {
//   "CNC Machining": <Factory className="w-6 h-6" />,
//   "CNC Milling": <Drill className="w-6 h-6" />,
//   "CNC Turning": <Gauge className="w-6 h-6" />,
//   "Medical CNC": <TestTube2 className="w-6 h-6" />
// };

// function CncMachining() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-b from-primary/10 to-background py-24">
//         <div className="container mx-auto px-4 text-center space-y-6">
//           <Typography variant="h1" className="text-4xl md:text-5xl font-bold tracking-tight">
//             {cncMachiningData.title}
//           </Typography>
//           <Typography variant="lead" className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             {cncMachiningData.lead}
//           </Typography>
//           <div className="flex gap-4 justify-center">
//             <Button size="lg" onClick={() => navigate("/customer/quote")}>
//               Get Instant Quote
//               <ArrowRight className="ml-2 w-4 h-4" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-16 space-y-16">
//         <img 
//           src={MainImage} 
//           className="rounded-xl shadow-lg w-auto h-auto mx-auto object-cover" 
//           alt="CNC Machining" 
//         />

//         {cncMachiningData.sections.map((section, index) => (
//           <section key={index} className="space-y-12">
//             <div className="flex items-center gap-4">
//               <div className="p-3 rounded-full bg-primary/10 text-primary">
//                 {sectionIcons[section.title]}
//               </div>
//               <Typography variant="h2" className="text-3xl font-semibold">
//                 {section.title}
//               </Typography>
//             </div>

//             <div className="space-y-8">
//               {section.subsections.map((subsection, subIndex) => (
//                 <Card key={subIndex} className="bg-transparent">
//                   <CardContent className="space-y-6">
//                     <Typography variant="h3" className="text-xl font-semibold">
//                       {subsection.title}
//                     </Typography>

//                     {/* Content Blocks */}
//                     {subsection.content?.map((content, contentIndex) => (
//                       <div key={contentIndex} className="space-y-4">
//                         {typeof content === 'string' ? (
//                           <Typography className="text-muted-foreground">
//                             {content}
//                           </Typography>
//                         ) : (
//                           <>
//                             {content.subheading && (
//                               <Typography variant="h4" className="font-semibold">
//                                 {content.subheading}
//                               </Typography>
//                             )}
//                             {content.text && (
//                               <Typography className="text-muted-foreground">
//                                 {content.text}
//                               </Typography>
//                             )}
//                             {content.list && (
//                               <ul className="space-y-2 pl-4">
//                                 {content.list.map((item, listIndex) => (
//                                   <li key={listIndex} className="flex gap-2">
//                                     <span className="text-primary">•</span>
//                                     <Typography className="text-muted-foreground">
//                                       {typeof item === 'string' ? item : (
//                                         <>
//                                           <strong>{item.name}</strong>
//                                           {item.description && `: ${item.description}`}
//                                         </>
//                                       )}
//                                     </Typography>
//                                   </li>
//                                 ))}
//                               </ul>
//                             )}
//                           </>
//                         )}
//                       </div>
//                     ))}

//                     {/* Tables */}
//                     {subsection.table && (
//                       <div className="rounded-lg border overflow-hidden">
//                         <Table>
//                           <TableHeader className="bg-muted/50">
//                             <TableRow>
//                               {subsection.table.headers.map((header, headerIndex) => (
//                                 <TableHead key={headerIndex}>{header}</TableHead>
//                               ))}
//                             </TableRow>
//                           </TableHeader>
//                           <TableBody>
//                             {subsection.table.rows.map((row, rowIndex) => (
//                               <TableRow key={rowIndex}>
//                                 {row.map((cell, cellIndex) => (
//                                   <TableCell key={cellIndex} className="py-3">
//                                     {cell.split('\n').map((line, i) => (
//                                       <div key={i}>{line}</div>
//                                     ))}
//                                   </TableCell>
//                                 ))}
//                               </TableRow>
//                             ))}
//                           </TableBody>
//                         </Table>
//                       </div>
//                     )}

//                     {/* Image */}
//                     {subsectionImages[subsection.title] && (
//                       <img
//                         src={subsectionImages[subsection.title]}
//                         className="rounded-lg shadow-lg w-auto mx-auto h-auto object-cover"
//                         alt={subsection.title}
//                       />
//                     )}

//                     {/* CTA Button */}
//                     {subsection.button && (
//                       <div className="pt-4">
//                         <Button
//                           variant="outline"
//                           className="gap-1"
//                           onClick={() => navigate("/customer/quote")}
//                         >
//                           {subsection.button.text}
//                           <ArrowRight className="w-4 h-4" />
//                         </Button>
//                       </div>
//                     )}
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </section>
//         ))}

//         {/* Final CTA */}
//         <section className="bg-primary/10 rounded-xl py-16 text-center space-y-6">
//           <Typography variant="h2" className="text-3xl font-semibold">
//             Ready to Start Your Project?
//           </Typography>
//           <Typography className="text-muted-foreground max-w-xl mx-auto">
//             Our team of CNC experts is ready to help bring your designs to life with precision and speed.
//           </Typography>
//           <div className="flex gap-4 justify-center">
//             <Button size="lg" onClick={() => navigate("/customer/quote")}>
//               Request Quote
//             </Button>
//             <Button variant="outline" size="lg" asChild>
//               <a href="/contact">Contact Engineers</a>
//             </Button>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default CncMachining;

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import Typography from "@/components/custom/typography";
// import { cncMachiningData } from "@/data/cncMachine";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   Wrench,
//   Rocket,
//   CarFront,
//   Wind,
//   Zap,
//   Heart,
//   Shield,
//   Factory,
// } from "lucide-react";

// // Import all images
// import MainImage from "../../assets/image1.jpeg";
// import Image3 from "../../assets/image3.png";
// import Image4 from "../../assets/image4.png";
// import Image5 from "../../assets/image5.jpeg";
// import Image6 from "../../assets/image6.jpeg";
// import Image7 from "../../assets/image7.png";
// import Image8 from "../../assets/image8.jpeg";
// import Image9 from "../../assets/image9.jpeg";
// import Image10 from "../../assets/image10.jpeg";
// import Image11 from "../../assets/image11.jpeg";
// import Image12 from "../../assets/image12.jpeg";
// import Image13 from "../../assets/image13.jpeg";
// import Image14 from "../../assets/image14.jpeg";
// import Image15 from "../../assets/image15.jpeg";
// import Image68 from "../../assets/image68.jpeg";
// import Image69 from "../../assets/image69.jpeg";
// import Image70 from "../../assets/image70.jpeg";
// import ExtrusionsImg from "../../assets/EXTRUSIONS.jpg";

// // Mapping of subsection titles to their corresponding imported images
// const subsectionImages = {
//   "Xofah has a diverse range of CNC Machining Capabilities": Image3,
//   "Start Manufacturing Your Precision Machined Components": Image68,
//   "Xofah Supports Multiple Precision CNC Machining Materials": Image69,
//   "Advantages of CNC Turning": Image70,
//   "High Quality Rapid CNC Milling Service": Image4,
//   "CNC Milling Tolerances & Standards": Image5,
//   "The Basics Of CNC Mills": Image6,
//   "CNC Turning Service Overview": Image7,
//   "The Basics Of CNC Lathes": Image8,
//   "Custom Wire EDM Machining With Xofah": Image9,
//   "Applications of Medical CNC Machining": Image10,
//   "Medical Devices": Image11,
//   "Wire EDM Medical Machining": Image12,
//   "Xofah Includes CNC Machining in Aluminum": ExtrusionsImg,
//   "Advantages of Medical CNC Machining with Xofah": Image12,
//   "METAL STAMPING & FORMING PROCESSES": Image13,
//   "Xofah SUPPORTS A VARIETY OF MATERIALS FOR SHEET METAL STAMPINGS": Image14,
//   "SECONDARY SHEET METAL STAMPING FINISHING SERVICES": Image15,
// };

// // Map sections to icons for highlights
// const sectionIcons = {
//   "CNC Machining": <Wrench className="w-8 h-8" />,
//   "CNC Milling": <Rocket className="w-8 h-8" />,
//   "CNC Turning": <CarFront className="w-8 h-8" />,
//   "Wire EDM Machining Service": <Zap className="w-8 h-8" />,
//   "Medical CNC": <Heart className="w-8 h-8" />,
// };

// function CncMachining() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section */}
//       <section className="relative bg-primary/10 py-32 overflow-hidden">
//         <div className="container mx-auto flex flex-col  px-4 text-center relative z-10">
//           <Typography
//             variant="h1"
//             className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 drop-shadow-md"
//           >
//             {cncMachiningData.title}
//           </Typography>
//           <Typography
//             variant="lead"
//             className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-semibold"
//           >
//             {cncMachiningData.lead}
//           </Typography>
//           <Button
//             size="lg"
//             className="w-56 mx-auto rounded-full gap-2 bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
//             onClick={() => navigate("/customer/quote")}
//           >
//             Get a Quote <ArrowRight className="w-5 h-5" />
//           </Button>
//         </div>
//         <div className="absolute inset-0 opacity-30">
//           <img
//             src={MainImage}
//             className="w-full h-full object-cover"
//             alt="CNC Machining Equipment"
//             onError={() => console.error("Failed to load MainImage")}
//           />
//         </div>
//       </section>

//       {/* Service Highlights */}
//       <section className="container mx-auto px-4 py-20">
//         <Typography
//           variant="h2"
//           className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 tracking-wide"
//         >
//           Our CNC Machining Services
//         </Typography>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {cncMachiningData.sections.map((section, index) => (
//             <Card
//               key={index}
//               className=" transition-all duration-300 hover:-translate-y-2"
//             >
//               <CardContent className="p-6 flex flex-col items-center text-center gap-4">
//                 <div className="p-4 rounded-full bg-primary/20 text-primary">
//                   {sectionIcons[section.title] || <Factory className="w-8 h-8" />}
//                 </div>
//                 <CardTitle className="text-xl font-semibold text-foreground">
//                   {section.title}
//                 </CardTitle>
//                 <p className="text-sm text-muted-foreground">
//                   {section.subsections[0]?.content?.[0]?.substring(0, 100)}...
//                 </p>
//                 <Button
//                   variant="link"
//                   className="text-primary hover:text-primary/80 mt-2"
//                   onClick={() => navigate("/customer/quote")}
//                 >
//                   Learn More
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </section>

//       {/* Detailed Sections */}
//       <section className="container mx-auto px-4 py-20 space-y-24">
//         {cncMachiningData.sections.map((section, sectionIndex) => (
//           <div key={sectionIndex} className="space-y-10">
//             <div className="text-center space-y-4">
//               <Typography
//                 variant="h2"
//                 className="text-3xl md:text-4xl font-bold text-gray-800"
//               >
//                 {section.title}
//               </Typography>
//               <Separator className="w-16 mx-auto bg-primary" />
//             </div>
//             {section.subsections.map((subsection, subIndex) => (
//               <div key={subIndex} className="space-y-6">
//                 <div className="flex gap-12 items-center">
//                   {subIndex % 2 === 0 && subsectionImages[subsection.title] && (
//                     <img
//                       src={subsectionImages[subsection.title]}
//                       className="rounded-xl shadow-lg object-cover h-auto w-1/2"
//                       alt={`${subsection.title} Illustration`}
//                       onError={() =>
//                         console.error(`Failed to load image for ${subsection.title}`)
//                       }
//                     />
//                   )}
//                   <Card className="bg-card  hover:shadow-md transition-shadow">
//                     <CardHeader className="pb-4">
//                       <CardTitle className="text-2xl font-semibold text-foreground">
//                         {subsection.title}
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="space-y-4">
//                       {subsection.content?.map((item, itemIndex) => (
//                         <div key={itemIndex} className="mt-2">
//                           {typeof item === "string" ? (
//                             <Typography className="text-base text-muted-foreground">
//                               {item}
//                             </Typography>
//                           ) : (
//                             <>
//                               {item.subheading && (
//                                 <Typography className="font-bold text-foreground">
//                                   {item.subheading}
//                                 </Typography>
//                               )}
//                               {item.text && (
//                                 <Typography className="text-base text-muted-foreground">
//                                   {item.text}
//                                 </Typography>
//                               )}
//                               {item.additional && (
//                                 <Typography className="text-base text-muted-foreground">
//                                   {item.additional}
//                                 </Typography>
//                               )}
//                               {item.list && (
//                                 <ul className="space-y-2">
//                                   {item.list.map((listItem, listIndex) => (
//                                     <li
//                                       key={listIndex}
//                                       className="flex items-start gap-2 text-muted-foreground"
//                                     >
//                                       <span className="text-primary mt-1">•</span>
//                                       <Typography className="inline">
//                                         {typeof listItem === "string" ? (
//                                           listItem
//                                         ) : (
//                                           <>
//                                             <strong>{listItem.name}</strong>
//                                             {listItem.description && `: ${listItem.description}`}
//                                           </>
//                                         )}
//                                       </Typography>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               )}
//                             </>
//                           )}
//                         </div>
//                       ))}
//                       {subsection.list && (
//                         <ul className="space-y-2">
//                           {subsection.list.map((listItem, listIndex) => (
//                             <li
//                               key={listIndex}
//                               className="flex items-start gap-2 text-muted-foreground"
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
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                       {subsection.table && (
//                         <Table className="mt-4">
//                           <TableHeader>
//                             <TableRow>
//                               {subsection.table.headers.map((header, headerIndex) => (
//                                 <TableHead key={headerIndex}>{header}</TableHead>
//                               ))}
//                             </TableRow>
//                           </TableHeader>
//                           <TableBody>
//                             {subsection.table.rows.map((row, rowIndex) => (
//                               <TableRow key={rowIndex}>
//                                 {row.map((cell, cellIndex) => (
//                                   <TableCell key={cellIndex}>
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
//                       {subsection.button && (
//                         <Button
//                           variant="outline"
//                           className="mt-4 gap-2 hover:bg-primary/10"
//                           onClick={() => navigate("/customer/quote")}
//                         >
//                           {subsection.button.text}
//                           <ArrowRight className="w-4 h-4" />
//                         </Button>
//                       )}
//                       {subsection.additionalContent &&
//                         subsection.additionalContent.map((addContent, addIndex) => (
//                           <Typography
//                             key={addIndex}
//                             className="mt-2 text-muted-foreground"
//                           >
//                             {addContent}
//                           </Typography>
//                         ))}
//                     </CardContent>
//                   </Card>
//                   {subIndex % 2 !== 0 && subsectionImages[subsection.title] && (
//                     <img
//                       src={subsectionImages[subsection.title]}
//                       className="rounded-xl shadow-lg object-cover h-auto w-1/2 order-first lg:order-last"
//                       alt={`${subsection.title} Illustration`}
//                       onError={() =>
//                         console.error(`Failed to load image for ${subsection.title}`)
//                       }
//                     />
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </section>

//       {/* Final CTA */}
//       <section className="bg-primary/10 py-24 text-center">
//         <div className="container mx-auto px-4 space-y-8">
//           <Typography
//             variant="h2"
//             className="text-3xl md:text-4xl font-bold text-foreground"
//           >
//             Ready to Start Your CNC Machining Project?
//           </Typography>
//           <Typography
//             variant="lead"
//             className="text-lg text-muted-foreground max-w-xl mx-auto"
//           >
//             Partner with Xofah for precision CNC machining tailored to your needs.
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

// export default CncMachining;

// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import Typography from "@/components/custom/typography";
// import { cncMachiningData } from "@/data/cncMachine";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   Wrench,
//   Rocket,
//   CarFront,
//   Wind,
//   Zap,
//   Heart,
//   Shield,
//   Factory,
// } from "lucide-react";

// // Import all images
// import MainImage from "../../assets/image1.jpeg";
// import Image3 from "../../assets/image3.png";
// import Image4 from "../../assets/image4.png";
// import Image5 from "../../assets/image5.jpeg";
// import Image6 from "../../assets/image6.jpeg";
// import Image7 from "../../assets/image7.png";
// import Image8 from "../../assets/image8.jpeg";
// import Image9 from "../../assets/image9.jpeg";
// import Image10 from "../../assets/image10.jpeg";
// import Image11 from "../../assets/image11.jpeg";
// import Image12 from "../../assets/image12.jpeg";
// import Image13 from "../../assets/image13.jpeg";
// import Image14 from "../../assets/image14.jpeg";
// import Image15 from "../../assets/image15.jpeg";
// import Image68 from "../../assets/image68.jpeg";
// import Image69 from "../../assets/image69.jpeg";
// import Image70 from "../../assets/image70.jpeg";
// import ExtrusionsImg from "../../assets/EXTRUSIONS.jpg";

// // Mapping of subsection titles to their corresponding imported images
// const subsectionImages = {
//   "Xofah has a diverse range of CNC Machining Capabilities": Image3,
//   "Start Manufacturing Your Precision Machined Components": Image68,
//   "Xofah Supports Multiple Precision CNC Machining Materials": Image69,
//   "Advantages of CNC Turning": Image70,
//   "High Quality Rapid CNC Milling Service": Image4,
//   "CNC Milling Tolerances & Standards": Image5,
//   "The Basics Of CNC Mills": Image6,
//   "CNC Turning Service Overview": Image7,
//   "The Basics Of CNC Lathes": Image8,
//   "Custom Wire EDM Machining With Xofah": Image9,
//   "Applications of Medical CNC Machining": Image10,
//   "Medical Devices": Image11,
//   "Wire EDM Medical Machining": Image12,
//   "Xofah Includes CNC Machining in Aluminum": ExtrusionsImg,
//   "Advantages of Medical CNC Machining with Xofah": Image12,
//   "METAL STAMPING & FORMING PROCESSES": Image13,
//   "Xofah SUPPORTS A VARIETY OF MATERIALS FOR SHEET METAL STAMPINGS": Image14,
//   "SECONDARY SHEET METAL STAMPING FINISHING SERVICES": Image15,
// };

// // Map sections to icons for highlights
// const sectionIcons = {
//   "CNC Machining": <Wrench className="w-8 h-8" />,
//   "CNC Milling": <Rocket className="w-8 h-8" />,
//   "CNC Turning": <CarFront className="w-8 h-8" />,
//   "Wire EDM Machining Service": <Zap className="w-8 h-8" />,
//   "Medical CNC": <Heart className="w-8 h-8" />,
// };

// function CncMachining() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section */}
//       <section className="relative bg-primary/10 py-32 overflow-hidden">
//         <div className="container mx-auto flex flex-col px-4 text-center relative z-10">
//           <Typography
//             variant="h1"
//             className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 drop-shadow-md"
//           >
//             {cncMachiningData.title}
//           </Typography>
//           <Typography
//             variant="lead"
//             className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-semibold"
//           >
//             {cncMachiningData.lead}
//           </Typography>
//           <Button
//             size="lg"
//             className="w-56 mx-auto rounded-full gap-2 bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
//             onClick={() => navigate("/customer/quote")}
//           >
//             Get a Quote <ArrowRight className="w-5 h-5" />
//           </Button>
//         </div>
//         <div className="absolute inset-0 opacity-30">
//           <img
//             src={MainImage}
//             className="w-full h-full object-cover"
//             alt="CNC Machining Equipment"
//             onError={() => console.error("Failed to load MainImage")}
//           />
//         </div>
//       </section>

//       {/* Service Highlights */}
//       <section className="container mx-auto px-4 py-20">
//         <Typography
//           variant="h2"
//           className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 tracking-wide"
//         >
//           Our CNC Machining Services
//         </Typography>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {cncMachiningData.sections.map((section, index) => (
//             <div
//               key={index}
//               className="p-6 flex flex-col items-center text-center gap-4 bg-white rounded-lg transition-all duration-300 hover:-translate-y-2"
//             >
//               <div className="p-4 rounded-full bg-primary/20 text-primary">
//                 {sectionIcons[section.title] || <Factory className="w-8 h-8" />}
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
//       <section className="container mx-auto px-4 py-20 space-y-24">
//         {cncMachiningData.sections.map((section, sectionIndex) => (
//           <div key={sectionIndex} className="space-y-10">
//             <div className="text-center space-y-4">
//               <Typography
//                 variant="h2"
//                 className="text-3xl md:text-4xl font-bold text-gray-800"
//               >
//                 {section.title}
//               </Typography>
//               <Separator className="w-16 mx-auto bg-primary" />
//             </div>
//             {section.subsections.map((subsection, subIndex) => (
//               <div key={subIndex} className="space-y-6">
//                 <div className="flex gap-12 items-center">
//                   {subIndex % 2 === 0 && subsectionImages[subsection.title] && (
//                     <img
//                       src={subsectionImages[subsection.title]}
//                       className="rounded-xl shadow-lg object-cover h-auto w-1/2"
//                       alt={`${subsection.title} Illustration`}
//                       onError={() =>
//                         console.error(`Failed to load image for ${subsection.title}`)
//                       }
//                     />
//                   )}
//                   <div className="flex-1">
//                     <h3 className="text-2xl font-semibold text-foreground mb-4">
//                       {subsection.title}
//                     </h3>
//                     <div className="space-y-4">
//                       {subsection.content?.map((item, itemIndex) => (
//                         <div key={itemIndex} className="mt-2">
//                           {typeof item === "string" ? (
//                             <Typography className="text-base text-muted-foreground">
//                               {item}
//                             </Typography>
//                           ) : (
//                             <>
//                               {item.subheading && (
//                                 <Typography className="font-bold text-foreground">
//                                   {item.subheading}
//                                 </Typography>
//                               )}
//                               {item.text && (
//                                 <Typography className="text-base text-muted-foreground">
//                                   {item.text}
//                                 </Typography>
//                               )}
//                               {item.additional && (
//                                 <Typography className="text-base text-muted-foreground">
//                                   {item.additional}
//                                 </Typography>
//                               )}
//                               {item.list && (
//                                 <ul className="space-y-2">
//                                   {item.list.map((listItem, listIndex) => (
//                                     <li
//                                       key={listIndex}
//                                       className="flex items-start gap-2 text-muted-foreground"
//                                     >
//                                       <span className="text-primary mt-1">•</span>
//                                       <Typography className="inline">
//                                         {typeof listItem === "string" ? (
//                                           listItem
//                                         ) : (
//                                           <>
//                                             <strong>{listItem.name}</strong>
//                                             {listItem.description && `: ${listItem.description}`}
//                                           </>
//                                         )}
//                                       </Typography>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               )}
//                             </>
//                           )}
//                         </div>
//                       ))}
//                       {subsection.list && (
//                         <ul className="space-y-2">
//                           {subsection.list.map((listItem, listIndex) => (
//                             <li
//                               key={listIndex}
//                               className="flex items-start gap-2 text-muted-foreground"
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
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                       {subsection.table && (
//                         <Table className="mt-4">
//                           <TableHeader>
//                             <TableRow>
//                               {subsection.table.headers.map((header, headerIndex) => (
//                                 <TableHead key={headerIndex}>{header}</TableHead>
//                               ))}
//                             </TableRow>
//                           </TableHeader>
//                           <TableBody>
//                             {subsection.table.rows.map((row, rowIndex) => (
//                               <TableRow key={rowIndex}>
//                                 {row.map((cell, cellIndex) => (
//                                   <TableCell key={cellIndex}>
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
//                       {subsection.button && (
//                         <Button
//                           variant="outline"
//                           className="mt-4 gap-2 hover:bg-primary/10"
//                           onClick={() => navigate("/customer/quote")}
//                         >
//                           {subsection.button.text}
//                           <ArrowRight className="w-4 h-4" />
//                         </Button>
//                       )}
//                       {subsection.additionalContent &&
//                         subsection.additionalContent.map((addContent, addIndex) => (
//                           <Typography
//                             key={addIndex}
//                             className="mt-2 text-muted-foreground"
//                           >
//                             {addContent}
//                           </Typography>
//                         ))}
//                     </div>
//                   </div>
//                   {subIndex % 2 !== 0 && subsectionImages[subsection.title] && (
//                     <img
//                       src={subsectionImages[subsection.title]}
//                       className="rounded-xl shadow-lg object-cover h-auto w-1/2 order-first lg:order-last"
//                       alt={`${subsection.title} Illustration`}
//                       onError={() =>
//                         console.error(`Failed to load image for ${subsection.title}`)
//                       }
//                     />
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </section>

//       {/* Final CTA */}
//       <section className="bg-primary/10 py-24 text-center">
//         <div className="container mx-auto px-4 space-y-8">
//           <Typography
//             variant="h2"
//             className="text-3xl md:text-4xl font-bold text-foreground"
//           >
//             Ready to Start Your CNC Machining Project?
//           </Typography>
//           <Typography
//             variant="lead"
//             className="text-lg text-muted-foreground max-w-xl mx-auto"
//           >
//             Partner with Xofah for precision CNC machining tailored to your needs.
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

// export default CncMachining;

//================================================================
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Typography from "@/components/custom/typography";
import { cncMachiningData } from "@/data/cncMachine";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Wrench,
  Rocket,
  CarFront,
  Zap,
  Heart,
  Factory,
} from "lucide-react";

// Import all images (unchanged)
import MainImage from "../../assets/image1.jpeg";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";
import Image5 from "../../assets/image5.jpeg";
import Image6 from "../../assets/image6.jpeg";
import Image7 from "../../assets/image7.png";
import Image8 from "../../assets/image8.jpeg";
import Image9 from "../../assets/image9.jpeg";
import Image10 from "../../assets/image10.jpeg";
import Image11 from "../../assets/image11.jpeg";
import Image12 from "../../assets/image12.jpeg";
import Image13 from "../../assets/image13.jpeg";
import Image14 from "../../assets/image14.jpeg";
import Image15 from "../../assets/image15.jpeg";
import Image68 from "../../assets/image68.jpeg";
import Image69 from "../../assets/image69.jpeg";
import Image70 from "../../assets/image70.jpeg";
import ExtrusionsImg from "../../assets/EXTRUSIONS.jpg";

// Mapping of subsection titles to images (unchanged)
const subsectionImages = {
  "Xofah has a diverse range of CNC Machining Capabilities": Image3,
  "Start Manufacturing Your Precision Machined Components": Image68,
  "Xofah Supports Multiple Precision CNC Machining Materials": Image69,
  "Advantages of CNC Turning": Image70,
  "High Quality Rapid CNC Milling Service": Image4,
  "CNC Milling Tolerances & Standards": Image5,
  "The Basics Of CNC Mills": Image6,
  "CNC Turning Service Overview": Image7,
  "The Basics Of CNC Lathes": Image8,
  "Custom Wire EDM Machining With Xofah": Image9,
  "Applications of Medical CNC Machining": Image10,
  "Medical Devices": Image11,
  "Wire EDM Medical Machining": Image12,
  "Xofah Includes CNC Machining in Aluminum": ExtrusionsImg,
  "Advantages of Medical CNC Machining with Xofah": Image12,
  "METAL STAMPING & FORMING PROCESSES": Image13,
  "Xofah SUPPORTS A VARIETY OF MATERIALS FOR SHEET METAL STAMPINGS": Image14,
  "SECONDARY SHEET METAL STAMPING FINISHING SERVICES": Image15,
};

// Map sections to icons for highlights (unchanged)
const sectionIcons = {
  "CNC Machining": <Wrench className="w-8 h-8" />,
  "CNC Milling": <Rocket className="w-8 h-8" />,
  "CNC Turning": <CarFront className="w-8 h-8" />,
  "Wire EDM Machining Service": <Zap className="w-8 h-8" />,
  "Medical CNC": <Heart className="w-8 h-8" />,
};

function CncMachining() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary/10 py-32 overflow-hidden">
        <div className="container mx-auto flex flex-col px-4 text-center relative z-10">
          <Typography
            variant="h1"
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 drop-shadow-md"
          >
            {cncMachiningData.title}
          </Typography>
          <Typography
            variant="lead"
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto font-semibold"
          >
            {cncMachiningData.lead}
          </Typography>
          <Button
            size="lg"
            className="w-56 mx-auto rounded-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
            onClick={() => navigate("/customer/quote")}
          >
            Get a Quote <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        <div className="absolute inset-0 opacity-30">
          <img
            src={MainImage}
            className="w-full h-full object-cover"
            alt="CNC Machining Equipment"
            onError={() => console.error("Failed to load MainImage")}
          />
        </div>
      </section>

      {/* Service Highlights */}
      <section className="container mx-auto px-4 py-20">
        <Typography
          variant="h2"
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 tracking-wide"
        >
          Our CNC Machining Services
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cncMachiningData.sections.map((section, index) => (
            <div
              key={index}
              className="p-6 flex flex-col items-center text-center gap-4 bg-card rounded-lg shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="p-4 rounded-full bg-primary/20 text-primary">
                {sectionIcons[section.title] || <Factory className="w-8 h-8" />}
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
      <section className="container mx-auto px-4 py-20 space-y-24">
        {cncMachiningData.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-10">
            <div className="text-center space-y-4">
              <Typography
                variant="h2"
                className="text-3xl md:text-4xl font-bold text-foreground"
              >
                {section.title}
              </Typography>
              <Separator className="w-16 mx-auto bg-primary" />
            </div>
            {section.subsections.map((subsection, subIndex) => (
              <div
                key={subIndex}
                className="flex flex-col lg:flex-row gap-12 items-center"
              >
                {subsectionImages[subsection.title] && (
                  <img
                    src={subsectionImages[subsection.title]}
                    className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-auto"
                    alt={`${subsection.title} Illustration`}
                    onError={() =>
                      console.error(`Failed to load image for ${subsection.title}`)
                    }
                  />
                )}
                <div className="flex-1 space-y-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {subsection.title}
                  </h3>
                  <div className="space-y-4">
                    {subsection.content?.map((item, itemIndex) => (
                      <div key={itemIndex} className="mt-2">
                        {typeof item === "string" ? (
                          <Typography className="text-base text-muted-foreground">
                            {item}
                          </Typography>
                        ) : (
                          <>
                            {item.subheading && (
                              <Typography className="font-bold text-foreground">
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
                              <ul className="space-y-2">
                                {item.list.map((listItem, listIndex) => (
                                  <li
                                    key={listIndex}
                                    className="flex items-start gap-2 text-muted-foreground"
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
                                        </>
                                      )}
                                    </Typography>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        )}
                      </div>
                    ))}
                    {subsection.list && (
                      <ul className="space-y-2">
                        {subsection.list.map((listItem, listIndex) => (
                          <li
                            key={listIndex}
                            className="flex items-start gap-2 text-muted-foreground"
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
                          </li>
                        ))}
                      </ul>
                    )}
                    {subsection.table && (
                      <Table className="mt-4 border-border">
                        <TableHeader>
                          <TableRow>
                            {subsection.table.headers.map((header, headerIndex) => (
                              <TableHead key={headerIndex} className="text-foreground">
                                {header}
                              </TableHead>
                            ))}
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {subsection.table.rows.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                              {row.map((cell, cellIndex) => (
                                <TableCell key={cellIndex} className="text-muted-foreground">
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
                    {subsection.button && (
                      <Button
                        variant="outline"
                        className="mt-4 gap-2 text-foreground hover:bg-primary/10"
                        onClick={() => navigate("/customer/quote")}
                      >
                        {subsection.button.text}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    )}
                    {subsection.additionalContent &&
                      subsection.additionalContent.map((addContent, addIndex) => (
                        <Typography
                          key={addIndex}
                          className="mt-2 text-muted-foreground"
                        >
                          {addContent}
                        </Typography>
                      ))}
                  </div>
                </div>
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
            Ready to Start Your CNC Machining Project?
          </Typography>
          <Typography
            variant="lead"
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Partner with Xofah for precision CNC machining tailored to your needs.
          </Typography>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
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
              className="gap-2 text-foreground hover:bg-muted"
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

export default CncMachining;