// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import Typography from "@/components/custom/typography";
// import { manufacturingServicesData } from "@/data/manufacturingServicesData";
// import image49 from "../../assets/image49.jpeg";
// import image50 from "../../assets/image50.jpeg";
// import image51 from "../../assets/image51.jpeg";
// import image52 from "../../assets/image52.jpeg";
// import image53 from "../../assets/image53.jpeg";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// // Map list item labels to images
// const manufacturingImages = {
//   "Xofah Managed Inventory™ (ZMI)": image49,
//   "Project Management": image50,
//   "Quality Control": image51,
//   "Managed Logistics": image52,
//   "Managed Supply Chain": image53,
// };

// function ManufacturingServices() {
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
//             {manufacturingServicesData.title}
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
//             src={image49} // Default hero image; adjust path if incorrect
//             className="w-full h-full object-cover blur-sm"
//             alt="Manufacturing Services Background"
//             onError={(e) => {
//               console.error("Failed to load hero image: ", e);
//               e.target.style.display = "none"; // Hide broken image
//             }}
//           />
//         </div>
//       </section>

//       {/* Content Sections */}
//       <section className="container mx-auto px-4 py-20 space-y-20">
//         {manufacturingServicesData.sections.map((section, sectionIndex) => (
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
//             {section.content.map((contentItem, contentIndex) => (
//               <div key={contentIndex} className="space-y-8">
//                 <div className="space-y-6">
//                   {contentItem.text?.map((text, textIndex) => (
//                     <Typography
//                       key={textIndex}
//                       className={`text-base text-muted-foreground ${
//                         contentItem.textStyle === "block" ? "block mb-4" : ""
//                       }`}
//                     >
//                       {text}
//                     </Typography>
//                   ))}
//                   {contentItem.list && (
//                     <div className="space-y-12">
//                       {contentItem.list.map((item, listIndex) => (
//                         <div
//                           key={listIndex}
//                           className="flex flex-col lg:flex-row gap-8 items-start"
//                         >
//                           {listIndex % 2 === 0 && manufacturingImages[item.label] && (
//                             <img
//                               src={manufacturingImages[item.label]}
//                               className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-64 lg:h-auto"
//                               alt={`${item.label} Illustration`}
//                               onError={(e) =>
//                                 console.error(
//                                   `Failed to load image for ${item.label}: `,
//                                   e
//                                 )
//                               }
//                             />
//                           )}
//                           <div className="flex-1 space-y-2 my-auto">
//                             {typeof item === "string" ? (
//                               <Typography className="text-base leading-relaxed">
//                                 {item}
//                               </Typography>
//                             ) : (
//                               <>
//                                 <Typography className="text-lg font-semibold tracking-tight">
//                                   {item.label}
//                                 </Typography>
//                                 <Typography className="text-base leading-relaxed opacity-80">
//                                   {item.description}
//                                 </Typography>
//                               </>
//                             )}
//                           </div>
//                           {listIndex % 2 !== 0 && manufacturingImages[item.label] && (
//                             <img
//                               src={manufacturingImages[item.label]}
//                               className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-64 lg:h-auto order-first lg:order-last"
//                               alt={`${item.label} Illustration`}
//                               onError={(e) =>
//                                 console.error(
//                                   `Failed to load image for ${item.label}: `,
//                                   e
//                                 )
//                               }
//                             />
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                   {contentItem.button && (
//                     <div className="mt-4 flex justify-center">
//                       <Button
//                         size="lg"
//                         className="gap-2 bg-primary text-white hover:bg-primary/90"
//                         onClick={() => navigate("/customer/quote")}
//                       >
//                         {contentItem.button.text}{" "}
//                         <ArrowRight className="w-5 h-5" />
//                       </Button>
//                     </div>
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
//             Ready to Optimize Your Manufacturing Process?
//           </Typography>
//           <Typography
//             variant="lead"
//             className="text-lg text-muted-foreground max-w-xl mx-auto"
//           >
//             Partner with Xofah to unlock efficiency, quality, and scalability in your
//             production.
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

// export default ManufacturingServices;

//==============================================================================
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Typography from "@/components/custom/typography";
import { manufacturingServicesData } from "@/data/manufacturingServicesData";
import image49 from "../../assets/image49.jpeg";
import image50 from "../../assets/image50.jpeg";
import image51 from "../../assets/image51.jpeg";
import image52 from "../../assets/image52.jpeg";
import image53 from "../../assets/image53.jpeg";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Map list item labels to images (unchanged)
const manufacturingImages = {
  "Xofah Managed Inventory™ (ZMI)": image49,
  "Project Management": image50,
  "Quality Control": image51,
  "Managed Logistics": image52,
  "Managed Supply Chain": image53,
};

function ManufacturingServices() {
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
            {manufacturingServicesData.title}
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
            src={image49} // Default hero image; adjust path if incorrect
            className="w-full h-full object-cover blur-sm"
            alt="Manufacturing Services Background"
            onError={(e) => {
              console.error("Failed to load hero image: ", e);
              e.target.style.display = "none"; // Hide broken image
            }}
          />
        </div>
      </section>

      {/* Content Sections */}
      <section className="container mx-auto px-4 py-20 space-y-20">
        {manufacturingServicesData.sections.map((section, sectionIndex) => (
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
            {section.content.map((contentItem, contentIndex) => (
              <div key={contentIndex} className="space-y-8">
                <div className="space-y-6">
                  {contentItem.text?.map((text, textIndex) => (
                    <Typography
                      key={textIndex}
                      className={`text-base text-muted-foreground ${
                        contentItem.textStyle === "block" ? "block mb-4" : ""
                      }`}
                    >
                      {text}
                    </Typography>
                  ))}
                  {contentItem.list && (
                    <div className="space-y-12">
                      {contentItem.list.map((item, listIndex) => (
                        <div
                          key={listIndex}
                          className="flex flex-col lg:flex-row gap-8 items-start"
                        >
                          {listIndex % 2 === 0 && manufacturingImages[item.label] && (
                            <img
                              src={manufacturingImages[item.label]}
                              className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-64 lg:h-auto"
                              alt={`${item.label} Illustration`}
                              onError={(e) =>
                                console.error(
                                  `Failed to load image for ${item.label}: `,
                                  e
                                )
                              }
                            />
                          )}
                          <div className="flex-1 space-y-2 my-auto">
                            {typeof item === "string" ? (
                              <Typography className="text-base leading-relaxed text-muted-foreground">
                                {item}
                              </Typography>
                            ) : (
                              <>
                                <Typography className="text-lg font-semibold tracking-tight text-foreground">
                                  {item.label}
                                </Typography>
                                <Typography className="text-base leading-relaxed text-muted-foreground opacity-80">
                                  {item.description}
                                </Typography>
                              </>
                            )}
                          </div>
                          {listIndex % 2 !== 0 && manufacturingImages[item.label] && (
                            <img
                              src={manufacturingImages[item.label]}
                              className="rounded-xl shadow-lg object-cover w-full lg:w-1/2 h-64 lg:h-auto order-first lg:order-last"
                              alt={`${item.label} Illustration`}
                              onError={(e) =>
                                console.error(
                                  `Failed to load image for ${item.label}: `,
                                  e
                                )
                              }
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  {contentItem.button && (
                    <div className="mt-4 flex justify-center">
                      <Button
                        size="lg"
                        className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                        onClick={() => navigate("/customer/quote")}
                      >
                        {contentItem.button.text}{" "}
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </div>
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
            Ready to Optimize Your Manufacturing Process?
          </Typography>
          <Typography
            variant="lead"
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Partner with Xofah to unlock efficiency, quality, and scalability in your
            production.
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

export default ManufacturingServices;