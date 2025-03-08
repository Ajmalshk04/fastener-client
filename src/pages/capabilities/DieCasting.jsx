
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Typography from "@/components/custom/typography"; // Custom Typography component
import { metalFabricationData } from "@/data/DieCasting";

// Import images with original extensions
import CustomDieCastingImg from "/src/assets/image65.jpeg";
import MetalStampingImg from "/src/assets/SHEETMETALSTAMPING.jpg";
import MetalExtrusionImg from "/src/assets/image66.jpeg";

// Mapping of headings to their corresponding imported images
const fabricationImages = {
  "Custom Die Casting Services": CustomDieCastingImg,
  "Metal Stamping": MetalStampingImg,
  "Metal Extrusion": MetalExtrusionImg,
};

function MetalFabrication() {
  return (
    <div className="container mx-auto p-10">
      {/* Main Header */}
      <Typography variant="h1" className="text-center">
        {metalFabricationData.title}
      </Typography>
      <Typography variant="lead" className="text-center mt-4">
        {metalFabricationData.lead}
      </Typography>
      <div className="mt-6 flex justify-center">
        <Button size="lg">Get a Quote</Button>
      </div>

      <Separator className="my-8" />

      {/* Dynamic Sections */}
      {metalFabricationData.sections.map((section, sectionIndex) => (
        <Card key={sectionIndex} className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">{section.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Section-level Image */}
            {fabricationImages[section.title] && (
              <img
                src={fabricationImages[section.title]}
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
                        {typeof item === "string" ? (
                          item
                        ) : (
                          <>
                            <strong>{item.label}:</strong> {item.description}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
                {contentItem.list2 && (
                  <ul className="list-disc pl-4 pt-2 mt-2">
                    {contentItem.list2.map((item, listIndex) => (
                      <li key={listIndex}>{item}</li>
                    ))}
                  </ul>
                )}
                {contentItem.additionalText && (
                  <Typography className="mt-2">
                    {contentItem.additionalText}
                  </Typography>
                )}
                {contentItem.table && (
                  <Table className="mt-2">
                    <TableHeader>
                      <TableRow>
                        {contentItem.table.headers.map((header, headerIndex) => (
                          <TableHead key={headerIndex}>{header}</TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contentItem.table.rows.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <TableCell key={cellIndex}>{cell}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
                {/* Subsection-level Image */}
                {fabricationImages[contentItem.heading] && (
                  <img
                    src={fabricationImages[contentItem.heading]}
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
                        (typeof subSection.text === "string" ? (
                          <Typography className="mt-2">{subSection.text}</Typography>
                        ) : (
                          subSection.text.map((text, textIndex) => (
                            <Typography key={textIndex} className="mt-2">
                              {text}
                            </Typography>
                          ))
                        ))}
                      {subSection.example && (
                        <Typography className="mt-2">{subSection.example}</Typography>
                      )}
                      {subSection.list && (
                        <ul className="list-disc pl-4 pt-2 mt-2">
                          {subSection.list.map((item, listIndex) => (
                            <li key={listIndex}>
                              {typeof item === "string" ? (
                                item
                              ) : (
                                <>
                                  <strong>{item.label}:</strong> {item.description}
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                      {subSection.additionalText && (
                        <Typography className="mt-2">
                          {subSection.additionalText}
                        </Typography>
                      )}
                      {subSection.subSections &&
                        subSection.subSections.map((nestedSubSection, nestedIndex) => (
                          <div key={nestedIndex} className="mt-4 ml-4">
                            <Typography variant="h5" className="text-md">
                              {nestedSubSection.heading}
                            </Typography>
                            {nestedSubSection.text &&
                              (typeof nestedSubSection.text === "string" ? (
                                <Typography className="mt-2">
                                  {nestedSubSection.text}
                                </Typography>
                              ) : (
                                nestedSubSection.text.map((text, textIndex) => (
                                  <Typography key={textIndex} className="mt-2">
                                    {text}
                                  </Typography>
                                ))
                              ))}
                            {nestedSubSection.additionalText && (
                              <Typography className="mt-2">
                                {nestedSubSection.additionalText}
                              </Typography>
                            )}
                            {nestedSubSection.list && (
                              <ul className="list-disc pl-4 pt-2 mt-2">
                                {nestedSubSection.list.map((item, listIndex) => (
                                  <li key={listIndex}>
                                    {typeof item === "string" ? (
                                      item
                                    ) : (
                                      <>
                                        <strong>{item.label}:</strong> {item.description}
                                      </>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
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

export default MetalFabrication;