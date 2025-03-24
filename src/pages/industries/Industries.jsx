

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import Typography from "@/components/custom/typography";
// import { industriesData } from "@/data/industriesData";
// import onSite from "../../assets/image44.jpeg";
// import image67 from "../../assets/image67.jpeg";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight, Globe, Shield, Cpu, Factory } from "lucide-react";

// const industriesImages = {
//   "Xofah's On-Site Capabilities": onSite,
//   "Aerospace & Defense Manufacturing Capabilities": image67,
// };

// const industryIcons = {
//   "Aerospace": <Globe className="w-6 h-6" />,
//   "Defense": <Shield className="w-6 h-6" />,
//   "Manufacturing": <Factory className="w-6 h-6" />,
//   "Technology": <Cpu className="w-6 h-6" />,
// };

// function Industries() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-b from-gray-50 to-white py-32 overflow-hidden">
//       <div className="container mx-auto flex flex-col px-4 text-center relative z-10">
//         <Typography
//           variant="h1"
//           className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 drop-shadow-lg"
//         >
//           {industriesData.title}
//         </Typography>
//         <Typography
//           variant="lead"
//           className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-semibold"
//         >
//           {industriesData.lead}
//         </Typography>
//         <Button
//           size="lg"
//           className="w-64 mx-auto rounded-full gap-2 bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 shadow-xl"
//           onClick={() => navigate("/customer/quote")}
//         >
//           Get Started <ArrowRight className="w-5 h-5" />
//         </Button>
//       </div>
//       <div className="absolute inset-0 opacity-50">
//         <img
//           src={image67}
//           className="w-full h-full object-cover blur-sm"
//           alt="Industries Background"
//           onError={() => console.error("Failed to load hero image")}
//         />
//       </div>
//     </section>

//       {/* Industry Cards */}
//       <section className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {Object.entries(industryIcons).map(([name, icon], index) => (
//             <Card key={index} className="hover:shadow-lg transition-shadow">
//               <CardContent className="p-6 flex flex-col items-center text-center gap-4">
//                 <div className="p-3 rounded-full bg-primary/10 text-primary">
//                   {icon}
//                 </div>
//                 <CardTitle className="text-lg font-semibold">
//                   {name} Solutions
//                 </CardTitle>
//                 <p className="text-sm text-muted-foreground">
//                   Specialized {name.toLowerCase()} solutions designed for modern challenges
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </section>

//       {/* Content Sections */}
//       <section className="container mx-auto px-4 py-16 space-y-24">
//         {industriesData.sections.map((section, sectionIndex) => (
//           <div key={sectionIndex} className="space-y-8">
//             <div className="text-center space-y-4">
//               <Typography variant="h2" className="text-3xl font-bold">
//                 {section.title}
//               </Typography>
//               <Separator className="w-24 mx-auto" />
//             </div>

//             <div className="flex gap-8 items-center">
//               {sectionIndex % 2 === 0 && industriesImages[section.title] && (
//                 <img 
//                   src={industriesImages[section.title]} 
//                   className="rounded-xl shadow-lg object-cover h-96 w-full"
//                   alt={section.title}
//                 />
//               )}

//               <div className="space-y-6">
//                 {section.content.map((contentItem, contentIndex) => (
//                   <Card key={contentIndex} className="bg-transparent">
//                     <CardHeader className="pb-2">
//                       <CardTitle className="text-xl">
//                         {contentItem.heading}
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="space-y-4">
//                       {contentItem.text?.map((text, textIndex) => (
//                         <p key={textIndex} className="text-muted-foreground">
//                           {text}
//                         </p>
//                       ))}

//                       {contentItem.list && (
//                         <ul className="space-y-2">
//                           {contentItem.list.map((item, listIndex) => (
//                             <li key={listIndex} className="flex items-start gap-2">
//                               <span className="text-primary mt-1">•</span>
//                               <span className="flex-1">{item}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       )}

//                       {contentItem.subSections?.map((subSection, subIndex) => (
//                         <div key={subIndex} className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
//                           <h4 className="font-semibold mb-2">{subSection.heading}</h4>
//                           {subSection.text?.map((text, textIndex) => (
//                             <p key={textIndex} className="text-muted-foreground">
//                               {text}
//                             </p>
//                           ))}
//                         </div>
//                       ))}

//                       {contentItem.button && (
//                         <Button 
//                           variant="outline" 
//                           className="mt-4 gap-1"
//                           onClick={() => navigate("/customer/quote")}
//                         >
//                           {contentItem.button.text}
//                           <ArrowRight className="w-4 h-4" />
//                         </Button>
//                       )}
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>

//               {sectionIndex % 2 !== 0 && industriesImages[section.title] && (
//                 <img 
//                   src={industriesImages[section.title]} 
//                   className="rounded-xl shadow-lg object-cover h-96 w-full order-first lg:order-last"
//                   alt={section.title}
//                 />
//               )}
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* Final CTA */}
//       <section className="bg-primary/10 py-24">
//         <div className="container mx-auto px-4 text-center space-y-8">
//           <Typography variant="h2" className="text-3xl font-bold">
//             Ready to Transform Your Industry Experience?
//           </Typography>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Let our expert team help you implement cutting-edge solutions tailored to your specific needs.
//           </p>
//           <div className="flex gap-4 justify-center">
//             <Button size="lg" onClick={() => navigate("/customer/quote")}>
//               Get a Quote
//             </Button>
//             <Button variant="outline" size="lg" asChild>
//               <a href="/customer/support">Contact Us</a>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Industries;

// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import Typography from "@/components/custom/typography";
// import { industriesData } from "@/data/industriesData";
// import onSite from "../../assets/image44.jpeg";
// import image67 from "../../assets/image67.jpeg";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// // Mapping of section titles to their corresponding imported images
// const industriesImages = {
//   "Xofah's On-Site Capabilities": onSite,
//   "Aerospace & Defense Manufacturing Capabilities": image67,
// };

// // Helper function to determine grid columns based on list length
// const getGridColumns = (listLength) => {
//   if (listLength > 20) return "grid grid-cols-1 md:grid-cols-3 gap-4";
//   if (listLength > 10) return "grid grid-cols-1 md:grid-cols-2 gap-4";
//   return "space-y-2"; // Default to vertical list for <= 10 items
// };

// function Industries() {
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
//             {industriesData.title}
//           </Typography>
//           <Typography
//             variant="lead"
//             className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-semibold"
//           >
//             {industriesData.lead}
//           </Typography>
//           <Button
//             size="lg"
//             className="w-64 mx-auto rounded-full gap-2 bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 shadow-xl"
//             onClick={() => navigate("/customer/quote")}
//           >
//             Get Started <ArrowRight className="w-5 h-5" />
//           </Button>
//         </div>
//         <div className="absolute inset-0 opacity-20">
//           <img
//             src={image67}
//             className="w-full h-full object-cover blur-sm"
//             alt="Industries Background"
//             onError={() => console.error("Failed to load hero image")}
//           />
//         </div>
//       </section>

//       {/* Content Sections */}
//       <section className="container mx-auto px-4 py-20 space-y-20">
//         {industriesData.sections.map((section, sectionIndex) => (
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
//             {section.content.map((contentItem, contentIndex) => {
//               const adjustedIndex =
//                 sectionIndex * section.content.length + contentIndex;
//               return (
//                 <div key={contentIndex} className="space-y-8">
//                   <div className="flex flex-col lg:flex-row gap-8 items-start">
//                     {adjustedIndex % 2 === 0 &&
//                       industriesImages[contentItem.heading] && (
//                         <img
//                           src={industriesImages[contentItem.heading]}
//                           className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-64 lg:h-auto"
//                           alt={`${contentItem.heading} Illustration`}
//                           onError={() =>
//                             console.error(
//                               `Failed to load image for ${contentItem.heading}`
//                             )
//                           }
//                         />
//                       )}
//                     <div className="flex-1 space-y-6">
//                       <Typography className="text-2xl font-semibold text-foreground">
//                         {contentItem.heading}
//                       </Typography>
//                       <div className="space-y-6">
//                         {contentItem.text?.map((text, textIndex) => (
//                           <Typography
//                             key={textIndex}
//                             className="text-base text-muted-foreground"
//                           >
//                             {text}
//                           </Typography>
//                         ))}
//                         {contentItem.list && (
//                           <div className={getGridColumns(contentItem.list.length)}>
//                             {contentItem.list.map((item, listIndex) => (
//                               <div
//                                 key={listIndex}
//                                 className="flex items-start gap-2 text-muted-foreground p-2"
//                               >
//                                 <span className="text-primary mt-1">•</span>
//                                 <Typography className="inline">{item}</Typography>
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                         {contentItem.list2 && (
//                           <div className={getGridColumns(contentItem.list2.length)}>
//                             {contentItem.list2.map((item, listIndex) => (
//                               <div
//                                 key={listIndex}
//                                 className="flex items-start gap-2 text-muted-foreground p-2"
//                               >
//                                 <span className="text-primary mt-1">•</span>
//                                 <Typography className="inline">{item}</Typography>
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                         {contentItem.subSections?.map((subSection, subIndex) => (
//                           <div key={subIndex} className="space-y-4">
//                             <Typography className="font-bold text-lg text-foreground">
//                               {subSection.heading}
//                             </Typography>
//                             {subSection.text?.map((text, textIndex) => (
//                               <Typography
//                                 key={textIndex}
//                                 className="text-base text-muted-foreground"
//                               >
//                                 {text}
//                               </Typography>
//                             ))}
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
//                         {contentItem.text2?.map((text, textIndex) => (
//                           <Typography
//                             key={textIndex}
//                             className="text-base text-muted-foreground"
//                           >
//                             {text}
//                           </Typography>
//                         ))}
//                         {contentItem.button && (
//                           <div className="mt-4 flex justify-center">
//                             <Button
//                               size="lg"
//                               className="gap-2 bg-primary text-white hover:bg-primary/90"
//                               onClick={() => navigate("/customer/quote")}
//                             >
//                               {contentItem.button.text} <ArrowRight className="w-5 h-5" />
//                             </Button>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                     {adjustedIndex % 2 !== 0 &&
//                       industriesImages[contentItem.heading] && (
//                         <img
//                           src={industriesImages[contentItem.heading]}
//                           className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-64 lg:h-auto order-first lg:order-last"
//                           alt={`${contentItem.heading} Illustration`}
//                           onError={() =>
//                             console.error(
//                               `Failed to load image for ${contentItem.heading}`
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
//             Ready to Transform Your Industry Experience?
//           </Typography>
//           <Typography
//             variant="lead"
//             className="text-lg text-muted-foreground max-w-xl mx-auto"
//           >
//             Let our expert team help you implement cutting-edge solutions tailored to your specific needs.
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

// export default Industries;

//===============================================================
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Typography from "@/components/custom/typography";
import { industriesData } from "@/data/industriesData";
import onSite from "../../assets/image44.jpeg";
import image67 from "../../assets/image67.jpeg";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Mapping of section titles to their corresponding imported images (unchanged)
const industriesImages = {
  "Xofah's On-Site Capabilities": onSite,
  "Aerospace & Defense Manufacturing Capabilities": image67,
};

// Helper function to determine grid columns based on list length (unchanged)
const getGridColumns = (listLength) => {
  if (listLength > 20) return "grid grid-cols-1 md:grid-cols-3 gap-4";
  if (listLength > 10) return "grid grid-cols-1 md:grid-cols-2 gap-4";
  return "space-y-2"; // Default to vertical list for <= 10 items
};

function Industries() {
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
            {industriesData.title}
          </Typography>
          <Typography
            variant="lead"
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto font-semibold"
          >
            {industriesData.lead}
          </Typography>
          <Button
            size="lg"
            className="w-64 mx-auto rounded-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 shadow-xl"
            onClick={() => navigate("/customer/quote")}
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        <div className="absolute inset-0 opacity-20">
          <img
            src={image67}
            className="w-full h-full object-cover blur-sm"
            alt="Industries Background"
            onError={() => console.error("Failed to load hero image")}
          />
        </div>
      </section>

      {/* Content Sections */}
      <section className="container mx-auto px-4 py-20 space-y-20">
        {industriesData.sections.map((section, sectionIndex) => (
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
            {section.content.map((contentItem, contentIndex) => {
              const adjustedIndex =
                sectionIndex * section.content.length + contentIndex;
              return (
                <div key={contentIndex} className="space-y-8">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {adjustedIndex % 2 === 0 &&
                      industriesImages[contentItem.heading] && (
                        <img
                          src={industriesImages[contentItem.heading]}
                          className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-64 lg:h-auto"
                          alt={`${contentItem.heading} Illustration`}
                          onError={() =>
                            console.error(
                              `Failed to load image for ${contentItem.heading}`
                            )
                          }
                        />
                      )}
                    <div className="flex-1 space-y-6">
                      <Typography className="text-2xl font-semibold text-foreground">
                        {contentItem.heading}
                      </Typography>
                      <div className="space-y-6">
                        {contentItem.text?.map((text, textIndex) => (
                          <Typography
                            key={textIndex}
                            className="text-base text-muted-foreground"
                          >
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
                        {contentItem.list2 && (
                          <div className={getGridColumns(contentItem.list2.length)}>
                            {contentItem.list2.map((item, listIndex) => (
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
                        {contentItem.subSections?.map((subSection, subIndex) => (
                          <div key={subIndex} className="space-y-4">
                            <Typography className="font-bold text-lg text-foreground">
                              {subSection.heading}
                            </Typography>
                            {subSection.text?.map((text, textIndex) => (
                              <Typography
                                key={textIndex}
                                className="text-base text-muted-foreground"
                              >
                                {text}
                              </Typography>
                            ))}
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
                        {contentItem.text2?.map((text, textIndex) => (
                          <Typography
                            key={textIndex}
                            className="text-base text-muted-foreground"
                          >
                            {text}
                          </Typography>
                        ))}
                        {contentItem.button && (
                          <div className="mt-4 flex justify-center">
                            <Button
                              size="lg"
                              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                              onClick={() => navigate("/customer/quote")}
                            >
                              {contentItem.button.text} <ArrowRight className="w-5 h-5" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                    {adjustedIndex % 2 !== 0 &&
                      industriesImages[contentItem.heading] && (
                        <img
                          src={industriesImages[contentItem.heading]}
                          className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-64 lg:h-auto order-first lg:order-last"
                          alt={`${contentItem.heading} Illustration`}
                          onError={() =>
                            console.error(
                              `Failed to load image for ${contentItem.heading}`
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
            Ready to Transform Your Industry Experience?
          </Typography>
          <Typography
            variant="lead"
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Let our expert team help you implement cutting-edge solutions tailored to your specific needs.
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

export default Industries;