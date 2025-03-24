// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import Typography from "@/components/custom/typography"; // Custom Typography component
// import { assembliesData } from "@/data/assembliesData"; // Adjust path as needed
// import { useNavigate } from "react-router-dom";

// // Placeholder for image mapping (add images here if provided)
// const assembliesImages = {
//   // Example: "Assembly Services": "/src/assets/assemblyImage.jpg",
// };

// function Assemblies() {
//   const navigate = useNavigate();
//   return (
//     <div className="container mx-auto p-10">
//       {/* Main Header */}
//       <Typography variant="h1" className="text-center">
//         {assembliesData.title}
//       </Typography>
//       <Typography variant="lead" className="text-center mt-4">
//         {assembliesData.lead}
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

//       {/* Dynamic Sections */}
//       {assembliesData.sections.map((section, sectionIndex) => (
//         <Card key={sectionIndex} className="mb-8">
//           <CardHeader>
//             <CardTitle className="text-2xl">{section.title}</CardTitle>
//           </CardHeader>
//           <CardContent>
//             {/* Section-level Image (if added later) */}
//             {assembliesImages[section.title] && (
//               <img
//                 src={assembliesImages[section.title]}
//                 className="container w-auto h-auto mx-auto object-cover mt-4"
//                 alt={`${section.title} Illustration`}
//               />
//             )}
//             {section.content.map((contentItem, contentIndex) => (
//               <div key={contentIndex} className="mb-4">
//                 <Typography variant="h3" className="text-xl">
//                   {contentItem.heading}
//                 </Typography>
//                 {contentItem.text &&
//                   contentItem.text.map((text, textIndex) => (
//                     <Typography key={textIndex} className="mt-2">
//                       {text}
//                     </Typography>
//                   ))}
//                 {contentItem.list && (
//                   <ul className="list-disc mt-2">
//                     {contentItem.list.map((item, listIndex) => (
//                       <li key={listIndex}>
//                         <Typography>{item}</Typography>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//                 {/* Subsection-level Image (if added later) */}
//                 {assembliesImages[contentItem.heading] && (
//                   <img
//                     src={assembliesImages[contentItem.heading]}
//                     className="container w-auto h-auto mx-auto object-cover mt-4"
//                     alt={`${contentItem.heading} Illustration`}
//                   />
//                 )}
//                 {contentItem.subSections &&
//                   contentItem.subSections.map((subSection, subIndex) => (
//                     <div key={subIndex} className="mt-4">
//                       <Typography variant="h4" className="text-lg">
//                         {subSection.heading}
//                       </Typography>
//                       {subSection.text && (
//                         <Typography className="mt-2">{subSection.text}</Typography>
//                       )}
//                       {subSection.list && (
//                         <ul className="list-disc list-inside mt-2">
//                           {subSection.list.map((item, listIndex) => (
//                             <li key={listIndex}>
//                               <Typography>{item}</Typography>
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                       {/* Nested Subsection Image (if added later) */}
//                       {assembliesImages[subSection.heading] && (
//                         <img
//                           src={assembliesImages[subSection.heading]}
//                           className="container w-auto h-auto mx-auto object-cover mt-4"
//                           alt={`${subSection.heading} Illustration`}
//                         />
//                       )}
//                     </div>
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

// export default Assemblies;

// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import Typography from "@/components/custom/typography";
// import { assembliesData } from "@/data/assembliesData";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// // Placeholder for image mapping (add images here if provided)
// const assembliesImages = {
//   // Example: "Assembly Services": "/src/assets/assemblyImage.jpg",
//   // Add more mappings as needed
// };

// // Helper function to determine grid columns based on list length
// const getGridColumns = (listLength) => {
//   if (listLength > 20) return "grid grid-cols-1 md:grid-cols-3 gap-4";
//   if (listLength > 10) return "grid grid-cols-1 md:grid-cols-2 gap-4";
//   return "space-y-2"; // Default to vertical list for <= 10 items
// };

// function Assemblies() {
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
//             {assembliesData.title}
//           </Typography>
//           <Typography
//             variant="lead"
//             className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-semibold"
//           >
//             {assembliesData.lead}
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
//           {/* Placeholder for hero image; replace with actual image if available */}
//           <img
//             src={assembliesImages["Assembly Services"] || "/src/assets/placeholder.jpg"} // Adjust path or remove if no image
//             className="w-full h-full object-cover blur-sm"
//             alt="Assemblies Overview"
//             onError={() => console.error("Failed to load hero image")}
//           />
//         </div>
//       </section>

//       {/* Detailed Sections */}
//       <section className="container mx-auto px-4 py-20 space-y-20">
//         {assembliesData.sections.map((section, sectionIndex) => (
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
//             {section.content.map((contentItem, contentIndex) => (
//               <div key={contentIndex} className="space-y-8">
//                 <div className="flex flex-col lg:flex-row gap-8 items-start">
//                   {contentIndex % 2 === 0 && assembliesImages[contentItem.heading] && (
//                     <img
//                       src={assembliesImages[contentItem.heading]}
//                       className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-64 lg:h-auto"
//                       alt={`${contentItem.heading} Illustration`}
//                       onError={() =>
//                         console.error(`Failed to load image for ${contentItem.heading}`)
//                       }
//                     />
//                   )}
//                   <div className="flex-1 space-y-6">
//                     <Typography className="text-2xl font-semibold text-foreground">
//                       {contentItem.heading}
//                     </Typography>
//                     <div className="space-y-6">
//                       {contentItem.text &&
//                         contentItem.text.map((text, textIndex) => (
//                           <Typography key={textIndex} className="text-base text-muted-foreground">
//                             {text}
//                           </Typography>
//                         ))}
//                       {contentItem.list && (
//                         <div className={getGridColumns(contentItem.list.length)}>
//                           {contentItem.list.map((item, listIndex) => (
//                             <div
//                               key={listIndex}
//                               className="flex items-start gap-2 text-muted-foreground p-2"
//                             >
//                               <span className="text-primary mt-1">•</span>
//                               <Typography className="inline">{item}</Typography>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                       {contentItem.subSections &&
//                         contentItem.subSections.map((subSection, subIndex) => (
//                           <div key={subIndex} className="space-y-4">
//                             <Typography className="font-bold text-foreground text-lg">
//                               {subSection.heading}
//                             </Typography>
//                             {subSection.text && (
//                               <Typography className="text-base text-muted-foreground">
//                                 {subSection.text}
//                               </Typography>
//                             )}
//                             {subSection.list && (
//                               <div className={getGridColumns(subSection.list.length)}>
//                                 {subSection.list.map((item, listIndex) => (
//                                   <div
//                                     key={listIndex}
//                                     className="flex items-start gap-2 text-muted-foreground p-2"
//                                   >
//                                     <span className="text-primary mt-1">•</span>
//                                     <Typography className="inline">{item}</Typography>
//                                   </div>
//                                 ))}
//                               </div>
//                             )}
//                           </div>
//                         ))}
//                     </div>
//                   </div>
//                   {contentIndex % 2 !== 0 && assembliesImages[contentItem.heading] && (
//                     <img
//                       src={assembliesImages[contentItem.heading]}
//                       className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-64 lg:h-auto order-first lg:order-last"
//                       alt={`${contentItem.heading} Illustration`}
//                       onError={() =>
//                         console.error(`Failed to load image for ${contentItem.heading}`)
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
//       <section className="bg-primary/10 py-24 text-center border-t border-gray-200">
//         <div className="container mx-auto px-4 space-y-8">
//           <Typography
//             variant="h2"
//             className="text-3xl md:text-4xl font-bold text-foreground"
//           >
//             Ready to Optimize Your Assembly Process?
//           </Typography>
//           <Typography
//             variant="lead"
//             className="text-lg text-muted-foreground max-w-xl mx-auto"
//           >
//             Partner with Xofah for efficient, scalable assembly solutions tailored to your needs.
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

// export default Assemblies;

//==================================================
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Typography from "@/components/custom/typography";
import { assembliesData } from "@/data/assembliesData";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Placeholder for image mapping (unchanged)
const assembliesImages = {
  // Example: "Assembly Services": "/src/assets/assemblyImage.jpg",
  // Add more mappings as needed
};

// Helper function to determine grid columns based on list length (unchanged)
const getGridColumns = (listLength) => {
  if (listLength > 20) return "grid grid-cols-1 md:grid-cols-3 gap-4";
  if (listLength > 10) return "grid grid-cols-1 md:grid-cols-2 gap-4";
  return "space-y-2"; // Default to vertical list for <= 10 items
};

function Assemblies() {
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
            {assembliesData.title}
          </Typography>
          <Typography
            variant="lead"
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto font-semibold"
          >
            {assembliesData.lead}
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
          {/* Placeholder for hero image; replace with actual image if available */}
          <img
            src={assembliesImages["Assembly Services"] || "/src/assets/placeholder.jpg"} // Adjust path or remove if no image
            className="w-full h-full object-cover blur-sm"
            alt="Assemblies Overview"
            onError={() => console.error("Failed to load hero image")}
          />
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="container mx-auto px-4 py-20 space-y-20">
        {assembliesData.sections.map((section, sectionIndex) => (
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
            {section.content.map((contentItem, contentIndex) => (
              <div key={contentIndex} className="space-y-8">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  {contentIndex % 2 === 0 && assembliesImages[contentItem.heading] && (
                    <img
                      src={assembliesImages[contentItem.heading]}
                      className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-64 lg:h-auto"
                      alt={`${contentItem.heading} Illustration`}
                      onError={() =>
                        console.error(`Failed to load image for ${contentItem.heading}`)
                      }
                    />
                  )}
                  <div className="flex-1 space-y-6">
                    <Typography className="text-2xl font-semibold text-foreground">
                      {contentItem.heading}
                    </Typography>
                    <div className="space-y-6">
                      {contentItem.text &&
                        contentItem.text.map((text, textIndex) => (
                          <Typography key={textIndex} className="text-base text-muted-foreground">
                            {text}
                          </Typography>
                        ))}
                      {contentItem.list && (
                        <div className={getGridColumns(contentItem.list.length)}>
                          {contentItem.list.map((item, listIndex) => (
                            <div
                              key={listIndex}
                              className="flex items-start gap-2 text-muted-foreground p-2"
                            >
                              <span className="text-primary mt-1">•</span>
                              <Typography className="inline">{item}</Typography>
                            </div>
                          ))}
                        </div>
                      )}
                      {contentItem.subSections &&
                        contentItem.subSections.map((subSection, subIndex) => (
                          <div key={subIndex} className="space-y-4">
                            <Typography className="font-bold text-foreground text-lg">
                              {subSection.heading}
                            </Typography>
                            {subSection.text && (
                              <Typography className="text-base text-muted-foreground">
                                {subSection.text}
                              </Typography>
                            )}
                            {subSection.list && (
                              <div className={getGridColumns(subSection.list.length)}>
                                {subSection.list.map((item, listIndex) => (
                                  <div
                                    key={listIndex}
                                    className="flex items-start gap-2 text-muted-foreground p-2"
                                  >
                                    <span className="text-primary mt-1">•</span>
                                    <Typography className="inline">{item}</Typography>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                  {contentIndex % 2 !== 0 && assembliesImages[contentItem.heading] && (
                    <img
                      src={assembliesImages[contentItem.heading]}
                      className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-64 lg:h-auto order-first lg:order-last"
                      alt={`${contentItem.heading} Illustration`}
                      onError={() =>
                        console.error(`Failed to load image for ${contentItem.heading}`)
                      }
                    />
                  )}
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
            Ready to Optimize Your Assembly Process?
          </Typography>
          <Typography
            variant="lead"
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Partner with Xofah for efficient, scalable assembly solutions tailored to your needs.
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

export default Assemblies;