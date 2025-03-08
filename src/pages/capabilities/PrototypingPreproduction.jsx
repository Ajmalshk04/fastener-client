import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Typography from "@/components/custom/typography"; // Custom Typography component
import { prototypePreproductionData } from "@/data/prototypePreproductionData"; // Adjust path as needed

// Placeholder for image mapping (add images here if provided)
const prototypeImages = {
  // Example: "Prototyping Processes": "/src/assets/prototypeImage.jpg",
};

function PrototypePreproduction() {
  return (
    <div className="container mx-auto p-10">
      {/* Main Header */}
      <Typography variant="h1" className="text-center">
        {prototypePreproductionData.title}
      </Typography>
      <Typography variant="lead" className="text-center mt-4">
        {prototypePreproductionData.lead}
      </Typography>
      <div className="mt-6 flex justify-center">
        <Button size="lg">Get a Quote</Button>
      </div>

      <Separator className="my-8" />

      {/* Dynamic Sections */}
      {prototypePreproductionData.sections.map((section, sectionIndex) => (
        <Card key={sectionIndex} className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">{section.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Section-level Image (if added later) */}
            {prototypeImages[section.title] && (
              <img
                src={prototypeImages[section.title]}
                className="container w-auto h-auto mx-auto object-cover mt-4"
                alt={`${section.title} Illustration`}
              />
            )}
            {section.content.map((contentItem, contentIndex) => (
              <div key={contentIndex} className="mb-4">
                <Typography variant="h3" className="text-xl">
                  {contentItem.heading}
                </Typography>
                {contentItem.text &&
                  contentItem.text.map((text, textIndex) => (
                    <Typography key={textIndex} className="mt-2">
                      {text}
                    </Typography>
                  ))}
                {contentItem.list && (
                  <ul className="list-disc pl-4 pt-2 mt-2">
                    {contentItem.list.map((item, listIndex) => (
                      <li key={listIndex}>
                        <Typography>{item}</Typography>
                      </li>
                    ))}
                  </ul>
                )}
                {/* Subsection-level Image (if added later) */}
                {prototypeImages[contentItem.heading] && (
                  <img
                    src={prototypeImages[contentItem.heading]}
                    className="container w-auto h-auto mx-auto object-cover mt-4"
                    alt={`${contentItem.heading} Illustration`}
                  />
                )}
                {contentItem.button && (
                  <div className="mt-4 flex justify-center">
                    <Button asChild>
                      <a href={contentItem.button.href}>
                        {contentItem.button.text}
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      ))}

      {/* Final Call to Action */}
      <div className="mt-8 flex justify-center">
        <Button variant="outline" asChild>
          <a href="/contact">Contact Us for More Information</a>
        </Button>
      </div>
    </div>
  );
}

export default PrototypePreproduction;