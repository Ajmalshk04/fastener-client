import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Typography from "@/components/custom/typography";
import { industriesData } from "@/data/industriesData";

// Placeholder for image mapping
const industriesImages = {};

function Industries() {
  return (
    <div className="container mx-auto p-10">
      {/* Main Header */}
      <Typography variant="h1" className="text-center">
        {industriesData.title}
      </Typography>
      <Typography variant="lead" className="text-center mt-4">
        {industriesData.lead}
      </Typography>
      <div className="mt-6 flex justify-center">
        <Button size="lg">Get a Quote</Button>
      </div>

      <Separator className="my-8" />

      {/* Dynamic Sections */}
      {industriesData.sections.map((section, sectionIndex) => (
        <Card key={sectionIndex} className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">{section.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {industriesImages[section.title] && (
              <img
                src={industriesImages[section.title]}
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
                {contentItem.list2 && (
                  <ul className="list-disc pl-4 pt-2 mt-2">
                    {contentItem.list2.map((item, listIndex) => (
                      <li key={listIndex}>
                        <Typography>{item}</Typography>
                      </li>
                    ))}
                  </ul>
                )}
                {contentItem.text2 &&
                  contentItem.text2.map((text, textIndex) => (
                    <Typography key={textIndex} className="mt-2">
                      {text}
                    </Typography>
                  ))}
                {industriesImages[contentItem.heading] && (
                  <img
                    src={industriesImages[contentItem.heading]}
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
                      {subSection.text &&
                        subSection.text.map((text, textIndex) => (
                          <Typography key={textIndex} className="mt-2">
                            {text}
                          </Typography>
                        ))}
                      {subSection.list && (
                        <ul className="list-disc pl-4 pt-2 mt-2">
                          {subSection.list.map((item, listIndex) => (
                            <li key={listIndex}>
                              <Typography>{item}</Typography>
                            </li>
                          ))}
                        </ul>
                      )}
                      {industriesImages[subSection.heading] && (
                        <img
                          src={industriesImages[subSection.heading]}
                          className="container w-auto h-auto mx-auto object-cover mt-4"
                          alt={`${subSection.heading} Illustration`}
                        />
                      )}
                    </div>
                  ))}
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

export default Industries;