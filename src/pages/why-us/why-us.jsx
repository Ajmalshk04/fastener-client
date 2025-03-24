
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import Typography from "@/components/custom/typography";
// import { whyXData } from "@/data/whyUsData";
// import image48 from "../../assets/image48.jpeg"; // Adjust path if necessary

// // Map section headings to images
// const whyXImages = {
//   "MAKE IN INDIA, FOR THE WORLD": image48
// };

// function WhyX() {
//   return (
//     <div className="container mx-auto p-6 min-h-screen ">
//       {/* Header */}
//       <Typography variant="h1" className="text-3xl font-bold mb-4 ">
//         {whyXData.title}
//       </Typography>

//       <Separator className="my-6" />

//       {/* Dynamic Sections */}
//       {whyXData.sections.map((section, sectionIndex) => (
//         <Card key={sectionIndex} className="mb-6 ">
//           {section.heading && (
//             <CardHeader>
//               <CardTitle className="text-xl font-semibold ">
//                 {section.heading}
//               </CardTitle>
//             </CardHeader>
//           )}
//           <CardContent>
//             {/* Render image below section heading if it exists */}
//             {whyXImages[section.heading] && (
//               <img
//                 src={whyXImages[section.heading]}
//                 className="w-auto h-auto mx-auto object-cover mt-4 mb-4"
//                 alt={`${section.heading} Illustration`}
//               />
//             )}
//             {section.content.map((contentItem, contentIndex) => (
//               <div key={contentIndex} className="mb-4">
//                 {contentItem.heading && (
//                   <Typography
//                     variant="h3"
//                     className="text-lg font-medium mb-2 "
//                   >
//                     {contentItem.heading}
//                   </Typography>
//                 )}
//                 {contentItem.text &&
//                   contentItem.text.map((text, textIndex) => (
//                     <Typography
//                       key={textIndex}
//                       className={`mb-2  ${
//                         contentItem.textStyle === "block" ? "block" : ""
//                       }`}
//                     >
//                       {text}
//                     </Typography>
//                   ))}
//                 {contentItem.list && (
//                   <ul
//                     className={
//                       section.heading === "THE Xofah EFFECT" ||
//                       section.heading === "QUALITY CERTIFICATIONS" ||
//                       section.heading === "CUSTOMER SUCCESS STORIES"
//                         ? "custom-list"
//                         : "list-disc pl-4 pt-2 mb-2"
//                     }
//                   >
//                     {contentItem.list.map((item, listIndex) => (
//                       <li key={listIndex}>
//                         {typeof item === "string" ? (
//                           <Typography className="">{item}</Typography>
//                         ) : (
//                           <Typography className="">
//                             <strong>{item.label}:</strong> {item.description}
//                           </Typography>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//                 {contentItem.button && (
//                   <Button
//                     variant="outline"
//                     className="mt-4 px-4 py-2 border-white hover:bg-white hover:text-black"
//                     asChild
//                   >
//                     <a href={contentItem.button.href}>
//                       {contentItem.button.text}
//                     </a>
//                   </Button>
//                 )}
//               </div>
//             ))}
//           </CardContent>
//         </Card>
//       ))}

//       {/* Final Call to Action */}
//       <div className="mt-6 text-center">
//         <Button
//           variant="outline"
//           className="px-6 py-3 border-white hover:bg-white hover:text-black"
//           asChild
//         >
//           <a href="/customer/support">Contact Us for More Information</a>
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default WhyX;

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import Typography from "@/components/custom/typography";
// import { whyXData } from "@/data/whyUsData";
// import image48 from "../../assets/image48.jpeg"; // Adjust path if necessary

// // Map section headings to images
// const whyXImages = {
//   "MAKE IN INDIA, FOR THE WORLD": image48,
// };

// function WhyX() {
//   return (
//     <div className="container mx-auto px-8 py-12 min-h-screen">
//       {/* Header */}
//       <Typography
//         variant="h1"
//         className="text-4xl font-light tracking-tight text-center mb-8"
//       >
//         {whyXData.title}
//       </Typography>

//       <Separator className="my-10 opacity-50" />

//       {/* Dynamic Sections */}
//       {whyXData.sections.map((section, sectionIndex) => (
//         <Card
//           key={sectionIndex}
//           className="mb-10 rounded-xl shadow-lg border-none overflow-hidden transition-all hover:shadow-xl"
//         >
//           {section.heading && (
//             <CardHeader className="py-6">
//               <CardTitle className="text-2xl font-medium tracking-wide">
//                 {section.heading}
//               </CardTitle>
//             </CardHeader>
//           )}
//           <CardContent className="px-8 py-6">
//             {/* Render image below section heading if it exists */}
//             {whyXImages[section.heading] && (
//               <div className="mb-8">
//                 <img
//                   src={whyXImages[section.heading]}
//                   className="w-full h-80 object-cover rounded-lg shadow-md transition-transform hover:scale-105 mx-auto"
//                   alt={`${section.heading} Illustration`}
//                 />
//               </div>
//             )}
//             {section.content.map((contentItem, contentIndex) => (
//               <div key={contentIndex} className="mb-8 last:mb-0">
//                 {contentItem.heading && (
//                   <Typography
//                     variant="h3"
//                     className="text-lg font-semibold tracking-tight mb-4"
//                   >
//                     {contentItem.heading}
//                   </Typography>
//                 )}
//                 {contentItem.text &&
//                   contentItem.text.map((text, textIndex) => (
//                     <Typography
//                       key={textIndex}
//                       className={`text-base leading-relaxed ${
//                         contentItem.textStyle === "block" ? "block mb-4" : "mb-2"
//                       }`}
//                     >
//                       {text}
//                     </Typography>
//                   ))}
//                 {contentItem.list && (
//                   <ul
//                     className={
//                       section.heading === "THE Xofah EFFECT" ||
//                       section.heading === "QUALITY CERTIFICATIONS" ||
//                       section.heading === "CUSTOMER SUCCESS STORIES"
//                         ? "space-y-6"
//                         : "list-disc pl-6 pt-2 mb-2 space-y-4"
//                     }
//                   >
//                     {contentItem.list.map((item, listIndex) => (
//                       <li key={listIndex}>
//                         {typeof item === "string" ? (
//                           <Typography className="text-base leading-relaxed">
//                             {item}
//                           </Typography>
//                         ) : (
//                           <div>
//                             <Typography className="text-base font-semibold tracking-tight mb-1">
//                               {item.label}
//                             </Typography>
//                             <Typography className="text-base leading-relaxed opacity-80">
//                               {item.description}
//                             </Typography>
//                           </div>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//                 {contentItem.button && (
//                   <div className="mt-6 flex justify-center">
//                     <Button
//                       variant="outline"
//                       className="px-6 py-2 rounded-full border-2 font-medium tracking-wide transition-all hover:bg-opacity-10 hover:scale-105"
//                       asChild
//                     >
//                       <a href={contentItem.button.href}>{contentItem.button.text}</a>
//                     </Button>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </CardContent>
//         </Card>
//       ))}

//       {/* Final Call to Action */}
//       <div className="mt-12 text-center">
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

// export default WhyX;


// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import Typography from "@/components/custom/typography";
// import { whyXData } from "@/data/whyUsData";
// import image48 from "../../assets/image48.jpeg"; // Adjust path if necessary
// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// // Map section headings to images
// const whyXImages = {
//   "MAKE IN INDIA, FOR THE WORLD": image48,
// };

// function WhyX() {
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
//             {whyXData.title}
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
//             src={image48}
//             className="w-full h-full object-cover blur-sm"
//             alt="Why Xofah Background"
//             onError={() => console.error("Failed to load hero image")}
//           />
//         </div>
//       </section>

//       {/* Content Sections */}
//       <section className="container mx-auto px-4 py-20 space-y-20">
//         {whyXData.sections.map((section, sectionIndex) => (
//           <div key={sectionIndex} className="space-y-12">
//             <div className="text-center space-y-6">
//               <Typography
//                 variant="h2"
//                 className="text-3xl md:text-4xl font-bold text-gray-800"
//               >
//                 {section.heading}
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
//                       whyXImages[section.heading] && (
//                         <img
//                           src={whyXImages[section.heading]}
//                           className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-64 lg:h-auto"
//                           alt={`${section.heading} Illustration`}
//                           onError={() =>
//                             console.error(
//                               `Failed to load image for ${section.heading}`
//                             )
//                           }
//                         />
//                       )}
//                     <div className="flex-1 space-y-6">
//                       {contentItem.heading && (
//                         <Typography className="text-2xl font-semibold text-foreground">
//                           {contentItem.heading}
//                         </Typography>
//                       )}
//                       <div className="space-y-6">
//                         {contentItem.text?.map((text, textIndex) => (
//                           <Typography
//                             key={textIndex}
//                             className={`text-base text-muted-foreground ${
//                               contentItem.textStyle === "block"
//                                 ? "block mb-4"
//                                 : ""
//                             }`}
//                           >
//                             {text}
//                           </Typography>
//                         ))}
//                         {contentItem.list && (
//                           <ul className="space-y-4 list-disc pl-6">
//                             {contentItem.list.map((item, listIndex) => (
//                               <li key={listIndex} className="flex items-start gap-2">
//                                 <span className="text-primary mt-1">•</span>
//                                 <Typography className="inline">
//                                   {typeof item === "string" ? (
//                                     item
//                                   ) : (
//                                     <>
//                                       <strong>{item.label}</strong>
//                                       {item.description && `: ${item.description}`}
//                                     </>
//                                   )}
//                                 </Typography>
//                               </li>
//                             ))}
//                           </ul>
//                         )}
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
//             Ready to Experience the Xofah Difference?
//           </Typography>
//           <Typography
//             variant="lead"
//             className="text-lg text-muted-foreground max-w-xl mx-auto"
//           >
//             Partner with Xofah to streamline your manufacturing process and achieve unparalleled efficiency.
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

// export default WhyX;

//=======================================================
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Typography from "@/components/custom/typography";
import { whyXData } from "@/data/whyUsData";
import image48 from "../../assets/image48.jpeg"; // Adjust path if necessary
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Map section headings to images (unchanged)
const whyXImages = {
  "MAKE IN INDIA, FOR THE WORLD": image48,
};

function WhyX() {
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
            {whyXData.title}
          </Typography>
          <Separator className="w-36 mx-auto bg-primary" />
          {/* <Button
            size="lg"
            className="w-64 mx-auto rounded-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 shadow-xl"
            onClick={() => navigate("/customer/quote")}
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Button> */}
        </div>
        <div className="absolute inset-0 opacity-20">
          <img
            src={image48}
            className="w-full h-full object-cover blur-sm"
            alt="Why Xofah Background"
            onError={() => console.error("Failed to load hero image")}
          />
        </div>
      </section>

      {/* Content Sections */}
      <section className="container mx-auto px-4 py-20 space-y-20">
        {whyXData.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-12">
            <div className="text-center space-y-6">
              <Typography
                variant="h2"
                className="text-3xl md:text-4xl font-bold text-foreground"
              >
                {section.heading}
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
                      whyXImages[section.heading] && (
                        <img
                          src={whyXImages[section.heading]}
                          className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-64 lg:h-auto"
                          alt={`${section.heading} Illustration`}
                          onError={() =>
                            console.error(
                              `Failed to load image for ${section.heading}`
                            )
                          }
                        />
                      )}
                    <div className="flex-1 space-y-6">
                      {contentItem.heading && (
                        <Typography className="text-2xl font-semibold text-foreground">
                          {contentItem.heading}
                        </Typography>
                      )}
                      <div className="space-y-6">
                        {contentItem.text?.map((text, textIndex) => (
                          <Typography
                            key={textIndex}
                            className={`text-base text-muted-foreground ${
                              contentItem.textStyle === "block"
                                ? "block mb-4"
                                : ""
                            }`}
                          >
                            {text}
                          </Typography>
                        ))}
                        {contentItem.list && (
                          <ul className="space-y-4 list-disc pl-6">
                            {contentItem.list.map((item, listIndex) => (
                              <li key={listIndex} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <Typography className="inline">
                                  {typeof item === "string" ? (
                                    item
                                  ) : (
                                    <>
                                      <strong>{item.label}</strong>
                                      {item.description && `: ${item.description}`}
                                    </>
                                  )}
                                </Typography>
                              </li>
                            ))}
                          </ul>
                        )}
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
            Ready to Experience the Xofah Difference?
          </Typography>
          <Typography
            variant="lead"
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Partner with Xofah to streamline your manufacturing process and achieve unparalleled efficiency.
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

export default WhyX;