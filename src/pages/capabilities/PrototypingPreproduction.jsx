

// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import Typography from "@/components/custom/typography";
// import { prototypePreproductionData } from "@/data/prototypePreproductionData";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// // Placeholder for image mapping (add images here if provided)
// const prototypeImages = {
//   // Example: "Prototyping Processes": "/src/assets/prototypeImage.jpg",
//   // Add more mappings as needed
// };

// // Helper function to determine grid columns based on list length
// const getGridColumns = (listLength) => {
//   if (listLength > 20) return "grid grid-cols-1 md:grid-cols-3 gap-4";
//   if (listLength > 10) return "grid grid-cols-1 md:grid-cols-2 gap-4";
//   return "space-y-2"; // Default to vertical list for <= 10 items
// };

// function PrototypePreproduction() {
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
//             {prototypePreproductionData.title}
//           </Typography>
//           <Typography
//             variant="lead"
//             className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto font-semibold"
//           >
//             {prototypePreproductionData.lead}
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
//           {/* Placeholder for hero image; replace with actual image if available */}
//           <img
//             src={prototypeImages["Prototyping Processes"] || "/src/assets/PROTOTYPINGANDPRE-PRODUCTION.jpg"} // Adjust path or remove if no image
//             className="w-full h-full object-cover blur-sm"
//             alt="Prototyping Overview"
//             onError={() => console.error("Failed to load hero image")}
//           />
//         </div>
//       </section>

//       {/* Detailed Sections */}
//       <section className="container mx-auto px-4 py-20 space-y-20">
//         {prototypePreproductionData.sections.map((section, sectionIndex) => (
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
//                   {contentIndex % 2 === 0 && prototypeImages[contentItem.heading] && (
//                     <img
//                       src={prototypeImages[contentItem.heading]}
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
//                       {contentItem.button && (
//                         <Button
//                           variant="outline"
//                           className="mt-4 gap-2 hover:bg-primary/10"
//                           onClick={() => navigate("/customer/quote")} // Adjusted to use navigate
//                         >
//                           {contentItem.button.text} <ArrowRight className="w-4 h-4" />
//                         </Button>
//                       )}
//                     </div>
//                   </div>
//                   {contentIndex % 2 !== 0 && prototypeImages[contentItem.heading] && (
//                     <img
//                       src={prototypeImages[contentItem.heading]}
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
//             Ready to Build Your Prototype?
//           </Typography>
//           <Typography
//             variant="lead"
//             className="text-lg text-muted-foreground max-w-xl mx-auto"
//           >
//             Partner with Xofah for innovative prototyping and preproduction solutions tailored to your needs.
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

// export default PrototypePreproduction;

//============================================================
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Typography from "@/components/custom/typography";
import { prototypePreproductionData } from "@/data/prototypePreproductionData";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Placeholder for image mapping (unchanged)
const prototypeImages = {
  // Example: "Prototyping Processes": "/src/assets/prototypeImage.jpg",
  // Add more mappings as needed
};

// Helper function to determine grid columns based on list length (unchanged)
const getGridColumns = (listLength) => {
  if (listLength > 20) return "grid grid-cols-1 md:grid-cols-3 gap-4";
  if (listLength > 10) return "grid grid-cols-1 md:grid-cols-2 gap-4";
  return "space-y-2"; // Default to vertical list for <= 10 items
};

function PrototypePreproduction() {
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
            {prototypePreproductionData.title}
          </Typography>
          <Typography
            variant="lead"
            className="text-xl md:text-2xl  dark:text-white/60 mb-10 max-w-3xl mx-auto font-semibold"
          >
            {prototypePreproductionData.lead}
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
          {/* Placeholder for hero image; replace with actual image if available */}
          <img
            src={prototypeImages["Prototyping Processes"] || "/src/assets/PROTOTYPINGANDPRE-PRODUCTION.jpg"} // Adjust path or remove if no image
            className="w-full h-full object-cover blur-sm"
            alt="Prototyping Overview"
            onError={() => console.error("Failed to load hero image")}
          />
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="container mx-auto px-4 py-20 space-y-20">
        {prototypePreproductionData.sections.map((section, sectionIndex) => (
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
                  {contentIndex % 2 === 0 && prototypeImages[contentItem.heading] && (
                    <img
                      src={prototypeImages[contentItem.heading]}
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
                             渠道 key={listIndex}
                              className="flex items-start gap-2 text-muted-foreground p-2"
                            >
                              <span className="text-primary mt-1">•</span>
                              <Typography className="inline">{item}</Typography>
                            </div>
                          ))}
                        </div>
                      )}
                      {contentItem.button && (
                        <Button
                          variant="outline"
                          className="mt-4 gap-2 hover:bg-primary/10 text-foreground"
                          onClick={() => navigate("/customer/quote")} // Adjusted to use navigate
                        >
                          {contentItem.button.text} <ArrowRight className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                  {contentIndex % 2 !== 0 && prototypeImages[contentItem.heading] && (
                    <img
                      src={prototypeImages[contentItem.heading]}
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
            Ready to Build Your Prototype?
          </Typography>
          <Typography
            variant="lead"
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Partner with Xofah for innovative prototyping and preproduction solutions tailored to your needs.
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

export default PrototypePreproduction;