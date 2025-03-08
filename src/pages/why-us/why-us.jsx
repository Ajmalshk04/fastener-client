import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Typography from "@/components/custom/typography";
import { whyXData } from "@/data/whyUsData";

function WhyX() {
  return (
    <div className="container mx-auto p-6 min-h-screen ">
      {/* Header */}
      <Typography variant="h1" className="text-3xl font-bold mb-4 ">
        {whyXData.title}
      </Typography>

      <Separator className="my-6" />

      {/* Dynamic Sections */}
      {whyXData.sections.map((section, sectionIndex) => (
        <Card key={sectionIndex} className="mb-6 ">
          {section.heading && (
            <CardHeader>
              <CardTitle className="text-xl font-semibold ">
                {section.heading}
              </CardTitle>
            </CardHeader>
          )}
          <CardContent>
            {section.content.map((contentItem, contentIndex) => (
              <div key={contentIndex} className="mb-4">
                {contentItem.heading && (
                  <Typography
                    variant="h3"
                    className="text-lg font-medium mb-2 "
                  >
                    {contentItem.heading}
                  </Typography>
                )}
                {contentItem.text &&
                  contentItem.text.map((text, textIndex) => (
                    <Typography
                      key={textIndex}
                      className={`mb-2  ${
                        contentItem.textStyle === "block" ? "block" : ""
                      }`}
                    >
                      {text}
                    </Typography>
                  ))}
                {contentItem.list && (
                  <ul
                    className={
                      section.heading === "THE X EFFECT" ||
                      section.heading === "QUALITY CERTIFICATIONS" ||
                      section.heading === "CUSTOMER SUCCESS STORIES"
                        ? "custom-list"
                        : "list-disc pl-4 pt-2 mb-2"
                    }
                  >
                    {contentItem.list.map((item, listIndex) => (
                      <li key={listIndex}>
                        {typeof item === "string" ? (
                          <Typography className="">{item}</Typography>
                        ) : (
                          <Typography className="">
                            <strong>{item.label}:</strong> {item.description}
                          </Typography>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
                {contentItem.button && (
                  <Button
                    variant="outline"
                    className="mt-4 px-4 py-2  border-white hover:bg-white hover:text-black"
                    asChild
                  >
                    <a href={contentItem.button.href}>
                      {contentItem.button.text}
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      ))}

      {/* Final Call to Action */}
      <div className="mt-6 text-center">
        <Button
          variant="outline"
          className="px-6 py-3  border-white hover:bg-white hover:text-black"
          asChild
        >
          <a href="/contact">Contact Us for More Information</a>
        </Button>
      </div>
    </div>
  );
}

export default WhyX;