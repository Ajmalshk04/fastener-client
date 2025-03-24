// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import Typography from "@/components/custom/typography";
// import { aboutUsData } from "@/data/aboutUs";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// function AboutUs() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section */}
//       <section className="relative bg-primary/10 py-32">
//         <div className="container mx-auto flex flex-col px-4 text-center">
//           <Typography
//             variant="h1"
//             className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6"
//           >
//             {aboutUsData.title}
//           </Typography>
//           <Separator className="w-36 mx-auto bg-primary" />
//           {/* <Button
//             size="lg"
//             className="w-64 mx-auto rounded-full gap-2 bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 shadow-xl"
//             onClick={() => navigate("/customer/quote")}
//           >
//             Get Started <ArrowRight className="w-5 h-5" />
//           </Button> */}
//         </div>
//       </section>

//       {/* Content Sections */}
//       <section className="container mx-auto px-4 py-20 space-y-20">
//         {aboutUsData.sections.map((section, sectionIndex) => (
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
//               <div key={contentIndex} className="space-y-6">
//                 {contentItem.text?.map((text, textIndex) => (
//                   <Typography
//                     key={textIndex}
//                     className={`text-base text-muted-foreground ${
//                       contentItem.textStyle === "block" ? "block mb-4" : ""
//                     }`}
//                   >
//                     {text}
//                   </Typography>
//                 ))}
//                 {contentItem.list && (
//                   <ul className="list-disc pl-6 space-y-4">
//                     {contentItem.list.map((item, listIndex) => (
//                       <li key={listIndex}>
//                         {typeof item === "string" ? (
//                           <Typography className="text-base leading-relaxed">
//                             {item}
//                           </Typography>
//                         ) : (
//                           <div>
//                             <Typography className="text-lg font-semibold tracking-tight mb-1">
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
//                   <div className="mt-4 flex justify-center">
//                     <Button
//                       size="lg"
//                       className="gap-2 bg-primary text-white hover:bg-primary/90"
//                       onClick={() => navigate("/customer/quote")}
//                     >
//                       {contentItem.button.text}{" "}
//                       <ArrowRight className="w-5 h-5" />
//                     </Button>
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
//             Ready to Partner with Xofah?
//           </Typography>
//           <Typography
//             variant="lead"
//             className="text-lg text-muted-foreground max-w-xl mx-auto"
//           >
//             Discover how Xofah can transform your manufacturing journey with global
//             expertise and precision.
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

// export default AboutUs;
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Typography from "@/components/custom/typography";
import { aboutUsData } from "@/data/aboutUs";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary/10 py-32">
        <div className="container mx-auto flex flex-col px-4 text-center">
          <Typography
            variant="h1"
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6"
          >
            {aboutUsData.title}
          </Typography>
          <Separator className="w-36 mx-auto bg-primary" />
        </div>
      </section>

      {/* Content Sections */}
      <section className="container mx-auto px-4 py-20 space-y-20">
        {aboutUsData.sections.map((section, sectionIndex) => (
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
              <div key={contentIndex} className="space-y-6">
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
                  <ul className="list-disc pl-6 space-y-4">
                    {contentItem.list.map((item, listIndex) => (
                      <li key={listIndex}>
                        {typeof item === "string" ? (
                          <Typography className="text-base leading-relaxed text-foreground">
                            {item}
                          </Typography>
                        ) : (
                          <div>
                            <Typography className="text-lg font-semibold tracking-tight mb-1 text-foreground">
                              {item.label}
                            </Typography>
                            <Typography className="text-base leading-relaxed opacity-80 text-muted-foreground">
                              {item.description}
                            </Typography>
                          </div>
                        )}
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
            Ready to Partner with Xofah?
          </Typography>
          <Typography
            variant="lead"
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Discover how Xofah can transform your manufacturing journey with global
            expertise and precision.
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

export default AboutUs;