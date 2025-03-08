import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Typography from "@/components/custom/typography"; // Custom Typography component
import { assembliesData } from "@/data/assembliesData"; // Adjust path as needed

// Placeholder for image mapping (add images here if provided)
const assembliesImages = {
  // Example: "Assembly Services": "/assets/assemblyImage.jpg",
};

function Assemblies() {
  return (
    <div className="container mx-auto p-10">
      {/* Main Header */}
      <Typography variant="h1" className="text-center">
        {assembliesData.title}
      </Typography>
      <Typography variant="lead" className="text-center mt-4">
        {assembliesData.lead}
      </Typography>
      <div className="mt-6 flex justify-center">
        <Button size="lg">Get a Quote</Button>
      </div>

      <Separator className="my-8" />

      {/* Dynamic Sections */}
      {assembliesData.sections.map((section, sectionIndex) => (
        <Card key={sectionIndex} className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">{section.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Section-level Image (if added later) */}
            {assembliesImages[section.title] && (
              <img
                src={assembliesImages[section.title]}
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
                {assembliesImages[contentItem.heading] && (
                  <img
                    src={assembliesImages[contentItem.heading]}
                    className="container w-auto h-auto mx-auto object-cover mt-4"
                    alt={`${contentItem.heading} Illustration`}
                  />
                )}
                {contentItem.subSections &&
                  contentItem.subSections.map((subSection, subIndex) => (
                    <div key={subIndex} className="mt-4">
                      <Typography variant="h4" className="text-lg">
                        {subSection.heading}
                      </Typography>
                      {subSection.text && (
                        <Typography className="mt-2">{subSection.text}</Typography>
                      )}
                      {subSection.list && (
                        <ul className="list-disc pl-4 pt-2 mt-2">
                          {subSection.list.map((item, listIndex) => (
                            <li key={listIndex}>
                              <Typography>{item}</Typography>
                            </li>
                          ))}
                        </ul>
                      )}
                      {/* Nested Subsection Image (if added later) */}
                      {assembliesImages[subSection.heading] && (
                        <img
                          src={assembliesImages[subSection.heading]}
                          className="container w-auto h-auto mx-auto object-cover mt-4"
                          alt={`${subSection.heading} Illustration`}
                        />
                      )}
                    </div>
                  ))}
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

export default Assemblies;