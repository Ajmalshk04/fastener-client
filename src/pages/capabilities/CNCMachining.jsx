import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Typography from "@/components/custom/typography";
import { cncMachiningData } from "@/data/cncMachine";

// Import all images
import MainImage from "../../assets/image1.jpeg";
import Image3 from "../../assets/image3.png";
import Image5 from "../../assets/image5.jpeg";
import Image4 from "../../assets/image4.png";
import Image6 from "../../assets/image6.jpeg";
import Image7 from "../../assets/image7.png";
import Image8 from "../../assets/image8.jpeg";
import Image9 from "../../assets/image9.jpeg";
import Image10 from "../../assets/image10.jpeg";
import Image11 from "../../assets/image11.jpeg";
import Image12 from "../../assets/image12.jpeg";
import Image13 from "../../assets/image13.jpeg";
import Image14 from "../../assets/image14.jpeg";
import Image15 from "../../assets/image15.jpeg";
import ExtrusionsImg from "../../assets/EXTRUSIONS.jpg";

// Mapping of subsection titles to their corresponding imported images
const subsectionImages = {
  "X has a diverse range of CNC Machining Capabilities": Image3,
  "High Quality Rapid CNC Milling Service": Image4,
  "CNC Milling Tolerances & Standards": Image5,
  "The Basics Of CNC Mills": Image6,
  "CNC Turning Service Overview": Image7,
  "The Basics Of CNC Lathes": Image8,
  "Custom Wire EDM Machining With X": Image9,
  "Applications of Medical CNC Machining": Image10,
  "Medical Devices": Image11,
  "Wire EDM Medical Machining": Image12,
  "X Includes CNC Machining in Aluminum": ExtrusionsImg,
  "Advantages of Medical CNC Machining with X": Image12,
  "METAL STAMPING & FORMING PROCESSES": Image13,
  "X SUPPORTS A VARIETY OF MATERIALS FOR SHEET METAL STAMPINGS": Image14,
  "SECONDARY SHEET METAL STAMPING FINISHING SERVICES": Image15,
};

// Dynamic Component
function CncMachining() {
  return (
    <div className="container mx-auto p-10">
      {/* Main Header */}
      <Typography variant="h1" className="text-center">
        {cncMachiningData.title}
      </Typography>
      <Typography variant="lead" className="text-center mt-4">
        {cncMachiningData.lead}
      </Typography>
      <div className="mt-6 flex justify-center">
        <Button size="lg">Get a Quote</Button>
      </div>

      <Separator className="my-8" />
      <img
        src={MainImage}
        className="container w-full mx-auto object-cover"
        alt="CNC Machining Equipment"
      />

      {/* Dynamic Sections */}
      {cncMachiningData.sections.map((section, index) => (
        <Card key={index} className="mb-8 border-none">
          <CardHeader>
            <CardTitle className="text-2xl">{section.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {section.subsections.map((subsection, subIndex) => (
              <div key={subIndex} className="mb-4">
                <Typography variant="h3" className="text-xl">
                  {subsection.title}
                </Typography>
                {subsection.content &&
                  subsection.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="mt-2">
                      {typeof item === "string" ? (
                        <Typography>{item}</Typography>
                      ) : item && typeof item === "object" ? (
                        <>
                          {item.subheading && (
                            <Typography className="font-bold">{item.subheading}</Typography>
                          )}
                          {item.text && <Typography>{item.text}</Typography>}
                          {item.example && (
                            <Typography className="italic">{item.example}</Typography>
                          )}
                          {item.question && (
                            <>
                              <Typography className="font-bold">{item.question}</Typography>
                              <Typography>{item.answer}</Typography>
                            </>
                          )}
                          {item.additional && <Typography>{item.additional}</Typography>}
                          {item.list && (
                            <ul className="list-disc list-outside mt-2 ml-4">
                              {item.list.map((listItem, listIndex) => {
                                if (typeof listItem !== "string" && !listItem) {
                                  console.error("Invalid listItem in content.list:", listItem);
                                  return null;
                                }
                                return (
                                  <li key={listIndex} className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <Typography className="inline">
                                      {typeof listItem === "string" ? (
                                        listItem
                                      ) : listItem && typeof listItem === "object" ? (
                                        <>
                                          <strong>{listItem.name}</strong>
                                          {listItem.description && `: ${listItem.description}`}
                                          {listItem.sublist && (
                                            <ul className="list-disc list-outside ml-6 mt-1">
                                              {listItem.sublist.map((subItem, subItemIndex) => (
                                                <li key={subItemIndex} className="flex items-start">
                                                  <span className="mr-2">•</span>
                                                  <Typography className="inline">{subItem}</Typography>
                                                </li>
                                              ))}
                                            </ul>
                                          )}
                                          {listItem.additional && (
                                            <Typography className="block mt-1">{listItem.additional}</Typography>
                                          )}
                                        </>
                                      ) : (
                                        "Invalid list item"
                                      )}
                                    </Typography>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </>
                      ) : (
                        <Typography>Invalid content item</Typography>
                      )}
                    </div>
                  ))}
                {subsection.list && (
                  <ul className="list-disc list-outside mt-2 ml-4">
                    {subsection.list.map((listItem, listIndex) => {
                      if (typeof listItem !== "string" && (!listItem || typeof listItem !== "object")) {
                        console.error("Unexpected listItem in subsection.list:", listItem);
                        return null;
                      }
                      return (
                        <li key={listIndex} className="flex items-start">
                          <span className="mr-2">•</span>
                          <Typography className="inline">
                            {typeof listItem === "string" ? (
                              listItem
                            ) : listItem && typeof listItem === "object" ? (
                              <>
                                {listItem.name && <strong>{listItem.name}</strong>}
                                {listItem.description && `: ${listItem.description}`}
                                {listItem.sublist && (
                                  <ul className="list-disc list-outside ml-6 mt-1">
                                    {listItem.sublist.map((subItem, subItemIndex) => (
                                      <li key={subItemIndex} className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <Typography className="inline">{subItem}</Typography>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                                {listItem.additional && (
                                  <Typography className="block mt-1">{listItem.additional}</Typography>
                                )}
                              </>
                            ) : null}
                          </Typography>
                        </li>
                      );
                    })}
                  </ul>
                )}
                {subsection.table && (
                  <Table className="mt-2">
                    <TableHeader>
                      <TableRow>
                        {subsection.table.headers.map((header, headerIndex) => (
                          <TableHead key={headerIndex}>{header}</TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {subsection.table.rows.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <TableCell key={cellIndex}>{cell}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
                {subsection.advantages && (
                  <>
                    <Typography className="mt-2 font-bold">Advantages include:</Typography>
                    <ul className="list-disc list-outside mt-2 ml-4">
                      {subsection.advantages.map((advantage, advIndex) => (
                        <li key={advIndex} className="flex items-start">
                          <span className="mr-2">•</span>
                          <Typography className="inline">{advantage}</Typography>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {subsection.disadvantages && (
                  <>
                    <Typography className="mt-2 font-bold">Disadvantages include:</Typography>
                    <ul className="list-disc list-outside mt-2 ml-4">
                      {subsection.disadvantages.map((disadvantage, disIndex) => (
                        <li key={disIndex} className="flex items-start">
                          <span className="mr-2">•</span>
                          <Typography className="inline">{disadvantage}</Typography>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {subsection.quote && (
                  <Typography className="mt-2 italic">{subsection.quote}</Typography>
                )}
                {/* Add Image if Subsection Title Matches */}
                {subsectionImages[subsection.title] && (
                  <img
                    src={subsectionImages[subsection.title]}
                    className="container w-full h-auto px-40 object-cover my-28"
                    alt={`${subsection.title} Illustration`}
                  />
                )}
                {subsection.button && (
                  <div className="mt-4 flex justify-center">
                    <Button asChild>
                      <a href={subsection.button.href}>{subsection.button.text}</a>
                    </Button>
                  </div>
                )}
                {subsection.additionalContent &&
                  subsection.additionalContent.map((addContent, addIndex) => (
                    <Typography key={addIndex} className="mt-2">{addContent}</Typography>
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

export default CncMachining;