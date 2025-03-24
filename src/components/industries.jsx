// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import Typography from "@/components/custom/typography";
// import { industriesData } from "@/data/industriesData";
// import onSite from "../assets/image44.jpeg";
// import image67 from "../assets/image67.jpeg"; 
// import { useNavigate } from "react-router-dom";

// // Map content headings to images
// const industriesImages = {
//   "Xofah’s On-Site Capabilities": onSite,
//   "Xofah for Aerospace and Defense Manufacturers": image67,
// };

// function Industries() {
//   const navigate = useNavigate();

//   return (
//     <div className="container mx-auto px-8 py-12">
//       {/* Main Header */}
//       <Typography
//         variant="h1"
//         className="text-4xl font-light tracking-tight text-center mb-4"
//       >
//         {industriesData.title}
//       </Typography>
//       <Typography
//         variant="lead"
//         className="text-base leading-relaxed text-center mb-8 opacity-80"
//       >
//         {industriesData.lead}
//       </Typography>
//       {/* <div className="flex justify-center">
//         <Button
//           className="px-6 py-2 rounded-full font-medium tracking-wide transition-all hover:bg-opacity-10 hover:scale-105"
//           onClick={() => navigate("/customer/quote")}
//         >
//           Get a Quote
//         </Button>
//       </div> */}

//       <Separator className="my-10 opacity-50" />

//       {/* Dynamic Sections */}
//       {industriesData.sections.map((section, sectionIndex) => (
//         <Card
//           key={sectionIndex}
//           className="mb-10 rounded-xl shadow-lg border-none overflow-hidden transition-all hover:shadow-xl"
//         >
//           <CardHeader className="py-6">
//             <CardTitle className="text-2xl font-medium tracking-wide">
//               {section.title}
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="px-8 py-6">
//             {industriesImages[section.title] && (
//               <div className="mb-8">
//                 <img
//                   src={industriesImages[section.title]}
//                   className="w-full h-80 object-cover rounded-lg shadow-md transition-transform hover:scale-105 mx-auto"
//                   alt={`${section.title} Illustration`}
//                   onError={() => console.error(`Failed to load image for ${section.title}`)}
//                 />
//               </div>
//             )}
//             {section.content.map((contentItem, contentIndex) => (
//               <div key={contentIndex} className="mb-8 last:mb-0">
//                 <Typography
//                   variant="h3"
//                   className="text-lg font-semibold tracking-tight mb-4"
//                 >
//                   {contentItem.heading}
//                 </Typography>
//                 {contentItem.text &&
//                   contentItem.text.map((text, textIndex) => (
//                     <Typography
//                       key={textIndex}
//                       className="text-base leading-relaxed mb-2"
//                     >
//                       {text}
//                     </Typography>
//                   ))}
//                 {contentItem.list && (
//                   <ul className="list-disc pl-6 pt-2 mb-4 space-y-2">
//                     {contentItem.list.map((item, listIndex) => (
//                       <li key={listIndex}>
//                         <Typography className="text-base leading-relaxed">
//                           {item}
//                         </Typography>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//                 {contentItem.list2 && (
//                   <ul className="list-disc pl-6 pt-2 mb-4 space-y-2">
//                     {contentItem.list2.map((item, listIndex) => (
//                       <li key={listIndex}>
//                         <Typography className="text-base leading-relaxed">
//                           {item}
//                         </Typography>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//                 {contentItem.text2 &&
//                   contentItem.text2.map((text, textIndex) => (
//                     <Typography
//                       key={textIndex}
//                       className="text-base leading-relaxed mb-2"
//                     >
//                       {text}
//                     </Typography>
//                   ))}
//                 {industriesImages[contentItem.heading] ? (
//                   <div className="mb-8">
//                     {console.log(`Attempting to render image for: ${contentItem.heading}`)}
//                     <img
//                       src={industriesImages[contentItem.heading]}
//                       className="w-full h-80 object-cover rounded-lg shadow-md transition-transform hover:scale-105 mx-auto"
//                       alt={`${contentItem.heading} Illustration`}
//                       onError={() =>
//                         console.error(`Failed to load image for ${contentItem.heading}`)
//                       }
//                     />
//                   </div>
//                 ) : (
//                   console.log(`No image mapped for: ${contentItem.heading}`)
//                 )}
//                 {contentItem.subSections &&
//                   contentItem.subSections.map((subSection, subIndex) => (
//                     <div key={subIndex} className="mt-6">
//                       <Typography
//                         variant="h4"
//                         className="text-base font-semibold tracking-tight mb-2"
//                       >
//                         {subSection.heading}
//                       </Typography>
//                       {subSection.text &&
//                         subSection.text.map((text, textIndex) => (
//                           <Typography
//                             key={textIndex}
//                             className="text-base leading-relaxed mb-2"
//                           >
//                             {text}
//                           </Typography>
//                         ))}
//                       {subSection.list && (
//                         <ul className="list-disc pl-6 pt-2 mb-4 space-y-2">
//                           {subSection.list.map((item, listIndex) => (
//                             <li key={listIndex}>
//                               <Typography className="text-base leading-relaxed">
//                                 {item}
//                               </Typography>
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                       {industriesImages[subSection.heading] && (
//                         <div className="mb-8">
//                           <img
//                             src={industriesImages[subSection.heading]}
//                             className="w-full h-80 object-cover rounded-lg shadow-md transition-transform hover:scale-105 mx-auto"
//                             alt={`${subSection.heading} Illustration`}
//                             onError={() =>
//                               console.error(`Failed to load image for ${subSection.heading}`)
//                             }
//                           />
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 {contentItem.button && (
//                   <div className="mt-6 flex justify-center">
//                     <Button
//                       className="px-6 py-2 rounded-full font-medium tracking-wide transition-all hover:bg-opacity-10 hover:scale-105"
//                       onClick={() => navigate("/customer/quote")}
//                     >
//                       {contentItem.button.text}
//                     </Button>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </CardContent>
//         </Card>
//       ))}

//       {/* Final Call to Action */}
//       <div className="mt-12 flex justify-center">
//         <Button
//           variant="outline"
//           className="px-8 py-3 rounded-full border-2 font-medium tracking-wide transition-all hover:bg-opacity-10 hover:scale-105"
//           asChild
//         >
//           <a href="/customer/support">Contact Us for More Information</a>
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Industries;

import React from 'react'

const industries = () => {
  return (
    <div>industries</div>
  )
}

export default industries