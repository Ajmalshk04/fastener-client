// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import Typography from "@/components/custom/typography";
// import { sheetMetalStampingData } from "@/data/sheetMetalData";

// // Mapping of titles (subsection and subheadings) to their corresponding images
// const subsectionImages = {
//   "Available Sheet Metal Finishes": "/src/assets/image16.jpeg",
//   "X Sheet Cutting Sizes and Tolerances": "/src/assets/image17.jpeg",
//   "How X Sheet Cutting Works": "/src/assets/image18.jpeg",
//   "Sheet Cutting Materials": "/src/assets/image19.jpeg",
//   "Aluminum Alloy": "/src/assets/image20.jpeg",
//   "Brass and Bronze Alloy": "/src/assets/image21.jpeg",
//   "Copper Alloy": "/src/assets/image22.jpeg",
//   "Mechanical Plastic": "/src/assets/image23.jpeg",
//   "Clear and Colored Acrylic": "/src/assets/image24.jpeg",
//   "EVA Foam, Polyurethane Foam (PU), Silicone Foam": "/src/assets/image25.jpeg",
//   "Steel 1075, 1095, 4130, AR500, AR500, Corten A588, 1045 HR, A1011 HR, 1008, 1018, 4140, A36, A366, A572, A653, G90, Tool Steel D1, O1": "/src/assets/image26.jpeg",
//   "Stainless 17-4 PH, 17-7, 301, 304, 316, 410, 430, 440C, CPM 154, S30V": "/src/assets/image27.jpeg",
//   "Titanium Grade 2 and 5, Nickel Alloy": "/src/assets/image28.jpeg",
//   "Cherry, Hardboard, MDF, Poplar, Red Oak, Wood Laminate (Plywood)": "/src/assets/image29.jpeg",
//   "Carbon Fiber, Garolite G-10, Garolite G-11, Garolite LE (Phenolic)": "/src/assets/image30.jpeg",
//   "Design Tip: Explode Your Text": "/src/assets/image31.jpeg",
//   "Design Guide: Laser and Sheet Cutting": "/src/assets/image17.jpeg",
//   "Advantages of Laser Cutting Services": "/src/assets/image18.jpeg",
//   "High Quality Waterjet Cut Parts": "/src/assets/image32.jpeg", // Adjusted from "Waterjet Cutting"
//   "Advantages of Waterjet Cutting": "/src/assets/image33.jpeg",
//   "How Waterjets Work": "/src/assets/image34.jpeg",
//   "Why Choose X for Waterjet Cutting?": "/src/assets/image35.jpeg",
//   "Sizes and Tolerances": "/src/assets/image36.jpeg",
//   "Shapes and Materials": "/src/assets/image37.jpeg",
//   "Tube Bending Sizes and Tolerances": "/src/assets/image38.jpeg",
//   "Recommended Center Line Radius to Outer Diameter": "/src/assets/image39.jpeg",
//   "(Above: Center Line Radius, CLR)": "/src/assets/image40.jpeg",
// };

// // Dynamic Component
// function SheetMetalStamping() {
//   return (
//     <div className="container mx-auto p-10">
//       {/* Main Header */}
//       <Typography variant="h1" className="text-center">
//         {sheetMetalStampingData.title}
//       </Typography>
//       <Typography variant="lead" className="text-center mt-4">
//         {sheetMetalStampingData.lead}
//       </Typography>
//       <div className="mt-6 flex justify-center">
//         <Button size="lg">Get a Quote</Button>
//       </div>

//       <Separator className="my-8" />

//       {/* Dynamic Sections */}
//       {sheetMetalStampingData.sections.map((section, index) => (
//         <Card key={index} className="mb-8">
//           <CardHeader>
//             <CardTitle className="text-2xl">{section.title}</CardTitle>
//           </CardHeader>
//           <CardContent>
//             {section.subsections.map((subsection, subIndex) => (
//               <div key={subIndex} className="mb-4">
//                 <Typography variant="h3" className="text-xl">
//                   {subsection.title}
//                 </Typography>
//                 {subsection.content &&
//                   subsection.content.map((item, itemIndex) => (
//                     <div key={itemIndex} className="mt-2">
//                       {typeof item === "string" ? (
//                         <Typography>{item}</Typography>
//                       ) : (
//                         <>
//                           {item.subheading && (
//                             <Typography className="font-bold">{item.subheading}</Typography>
//                           )}
//                           {item.text && <Typography>{item.text}</Typography>}
//                           {item.example && (
//                             <Typography className="italic">{item.example}</Typography>
//                           )}
//                           {item.question && (
//                             <>
//                               <Typography className="font-bold">{item.question}</Typography>
//                               <Typography>{item.answer}</Typography>
//                             </>
//                           )}
//                           {item.additional && <Typography>{item.additional}</Typography>}
//                           {item.list && (
//                             <ul className="list-disc list-outside mt-2 ml-4">
//                               {item.list.map((listItem, listIndex) => (
//                                 <li key={listIndex} className="flex items-start">
//                                   <span className="mr-2">•</span>
//                                   <Typography className="inline">
//                                     {typeof listItem === "string" ? (
//                                       listItem
//                                     ) : (
//                                       <>
//                                         <strong>{listItem.name}</strong>
//                                         {listItem.description && `: ${listItem.description}`}
//                                         {listItem.sublist && (
//                                           <ul className="list-disc list-outside ml-6 mt-1">
//                                             {listItem.sublist.map((subItem, subItemIndex) => (
//                                               <li key={subItemIndex} className="flex items-start">
//                                                 <span className="mr-2">•</span>
//                                                 <Typography className="inline">{subItem}</Typography>
//                                               </li>
//                                             ))}
//                                           </ul>
//                                         )}
//                                         {listItem.additional && (
//                                           <Typography className="block mt-1">{listItem.additional}</Typography>
//                                         )}
//                                       </>
//                                     )}
//                                   </Typography>
//                                 </li>
//                               ))}
//                             </ul>
//                           )}
//                           {/* Add Image for Subheading */}
//                           {item.subheading && subsectionImages[item.subheading] && (
//                             <img
//                               src={subsectionImages[item.subheading]}
//                               className="container max-w-xl h-auto mx-auto object-cover mt-4"
//                               alt={`${item.subheading} Illustration`}
//                             />
//                           )}
//                         </>
//                       )}
//                     </div>
//                   ))}
//                 {subsection.list && (
//                   <ul className="list-disc list-outside mt-2 ml-4">
//                     {subsection.list.map((listItem, listIndex) => (
//                       <li key={listIndex} className="flex items-start">
//                         <span className="mr-2">•</span>
//                         <Typography className="inline">
//                           {typeof listItem === "string" ? (
//                             listItem
//                           ) : (
//                             <>
//                               <strong>{listItem.name}</strong>
//                               {listItem.description && `: ${listItem.description}`}
//                               {listItem.sublist && (
//                                 <ul className="list-disc list-outside ml-6 mt-1">
//                                   {listItem.sublist.map((subItem, subItemIndex) => (
//                                     <li key={subItemIndex} className="flex items-start">
//                                       <span className="mr-2">•</span>
//                                       <Typography className="inline">{subItem}</Typography>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               )}
//                               {listItem.additional && (
//                                 <Typography className="block mt-1">{listItem.additional}</Typography>
//                               )}
//                             </>
//                           )}
//                         </Typography>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//                 {subsection.table && (
//                   <Table className="mt-2">
//                     <TableHeader>
//                       <TableRow>
//                         {subsection.table.headers.map((header, headerIndex) => (
//                           <TableHead key={headerIndex}>{header}</TableHead>
//                         ))}
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       {subsection.table.rows.map((row, rowIndex) => (
//                         <TableRow key={rowIndex}>
//                           {row.map((cell, cellIndex) => (
//                             <TableCell key={cellIndex}>{cell}</TableCell>
//                           ))}
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 )}
//                 {subsection.advantages && (
//                   <>
//                     <Typography className="mt-2 font-bold">Advantages include:</Typography>
//                     <ul className="list-disc list-outside mt-2 ml-4">
//                       {subsection.advantages.map((advantage, advIndex) => (
//                         <li key={advIndex} className="flex items-start">
//                           <span className="mr-2">•</span>
//                           <Typography className="inline">{advantage}</Typography>
//                         </li>
//                       ))}
//                     </ul>
//                   </>
//                 )}
//                 {subsection.disadvantages && (
//                   <>
//                     <Typography className="mt-2 font-bold">Disadvantages include:</Typography>
//                     <ul className="list-disc list-outside mt-2 ml-4">
//                       {subsection.disadvantages.map((disadvantage, disIndex) => (
//                         <li key={disIndex} className="flex items-start">
//                           <span className="mr-2">•</span>
//                           <Typography className="inline">{disadvantage}</Typography>
//                         </li>
//                       ))}
//                     </ul>
//                   </>
//                 )}
//                 {subsection.quote && (
//                   <Typography className="mt-2 italic">{subsection.quote}</Typography>
//                 )}
//                 {/* Add Image for Subsection Title */}
//                 {subsectionImages[subsection.title] && (
//                   <img
//                     src={subsectionImages[subsection.title]}
//                     className="container max-w-3xl h-auto mx-auto object-cover mt-4"
//                     alt={`${subsection.title} Illustration`}
//                   />
//                 )}
//                 {subsection.button && (
//                   <div className="mt-4 flex justify-center">
//                     <Button asChild>
//                       <a href={subsection.button.href}>{subsection.button.text}</a>
//                     </Button>
//                   </div>
//                 )}
//                 {(subsection.additionalContent || subsection.additionalContent2) && (
//                   <>
//                     {subsection.additionalContent &&
//                       subsection.additionalContent.map((addContent, addIndex) => (
//                         <div key={addIndex} className="mt-2">
//                           {typeof addContent === "string" ? (
//                             <Typography>{addContent}</Typography>
//                           ) : (
//                             <>
//                               {addContent.subheading && (
//                                 <Typography className="font-bold">{addContent.subheading}</Typography>
//                               )}
//                               {addContent.text && <Typography>{addContent.text}</Typography>}
//                               {addContent.additional && <Typography>{addContent.additional}</Typography>}
//                               {/* Add Image for Additional Content Subheading */}
//                               {addContent.subheading && subsectionImages[addContent.subheading] && (
//                                 <img
//                                   src={subsectionImages[addContent.subheading]}
//                                   className="container h-auto mx-auto object-cover mt-4"
//                                   alt={`${addContent.subheading} Illustration`}
//                                 />
//                               )}
//                             </>
//                           )}
//                         </div>
//                       ))}
//                     {subsection.additionalContent2 &&
//                       subsection.additionalContent2.map((addContent, addIndex) => (
//                         <Typography key={addIndex} className="mt-2">{addContent}</Typography>
//                       ))}
//                   </>
//                 )}
//               </div>
//             ))}
//           </CardContent>
//         </Card>
//       ))}

//       {/* Final Call to Action */}
//       <div className="mt-8 flex justify-center">
//         <Button variant="outline" asChild>
//           <a href="/contact">Contact Us for More Information</a>
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default SheetMetalStamping;

//=============================================================
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Typography from "@/components/custom/typography";
import { sheetMetalStampingData } from "@/data/sheetMetalData";

// Import images
import Image16 from "/src/assets/image16.jpeg";
import Image17 from "/src/assets/image17.jpeg";
import Image18 from "/src/assets/image18.jpeg";
import Image19 from "/src/assets/image19.jpeg";
import Image20 from "/src/assets/image20.jpeg";
import Image21 from "/src/assets/image21.jpeg";
import Image22 from "/src/assets/image22.jpeg";
import Image23 from "/src/assets/image23.jpeg";
import Image24 from "/src/assets/image24.jpeg";
import Image25 from "/src/assets/image25.jpeg";
import Image26 from "/src/assets/image26.jpeg";
import Image27 from "/src/assets/image27.jpeg";
import Image28 from "/src/assets/image28.jpeg";
import Image29 from "/src/assets/image29.jpeg";
import Image30 from "/src/assets/image30.jpeg";
import Image31 from "/src/assets/image31.jpeg";
import Image32 from "/src/assets/image32.jpeg";
import Image33 from "/src/assets/image33.jpeg";
import Image34 from "/src/assets/image34.jpeg";
import Image35 from "/src/assets/image35.jpeg";
import Image36 from "/src/assets/image36.jpeg";
import Image37 from "/src/assets/image37.jpeg";
import Image38 from "/src/assets/image38.png";
import Image39 from "/src/assets/image39.jpeg";
import Image40 from "/src/assets/image40.jpeg";

// Mapping of titles (subsection and subheadings) to their corresponding imported images
const subsectionImages = {
  "Available Sheet Metal Finishes": Image16,
  "X Sheet Cutting Sizes and Tolerances": Image17,
  "How X Sheet Cutting Works": Image18,
  "Sheet Cutting Materials": Image19,
  "Aluminum Alloy": Image20,
  "Brass and Bronze Alloy": Image21,
  "Copper Alloy": Image22,
  "Mechanical Plastic": Image23,
  "Clear and Colored Acrylic": Image24,
  "EVA Foam, Polyurethane Foam (PU), Silicone Foam": Image25,
  "Steel 1075, 1095, 4130, AR500, AR500, Corten A588, 1045 HR, A1011 HR, 1008, 1018, 4140, A36, A366, A572, A653, G90, Tool Steel D1, O1": Image26,
  "Stainless 17-4 PH, 17-7, 301, 304, 316, 410, 430, 440C, CPM 154, S30V": Image27,
  "Titanium Grade 2 and 5, Nickel Alloy": Image28,
  "Cherry, Hardboard, MDF, Poplar, Red Oak, Wood Laminate (Plywood)": Image29,
  "Carbon Fiber, Garolite G-10, Garolite G-11, Garolite LE (Phenolic)": Image30,
  "Design Tip: Explode Your Text": Image31,
  "Design Guide: Laser and Sheet Cutting": Image17,
  "Advantages of Laser Cutting Services": Image18,
  "High Quality Waterjet Cut Parts": Image32, // Adjusted from "Waterjet Cutting"
  "Advantages of Waterjet Cutting": Image33,
  "How Waterjets Work": Image34,
  "Why Choose X for Waterjet Cutting?": Image35,
  "Sizes and Tolerances": Image36,
  "Shapes and Materials": Image37,
  "Tube Bending Sizes and Tolerances": Image38,
  "Recommended Center Line Radius to Outer Diameter": Image39,
  "(Above: Center Line Radius, CLR)": Image40,
};

// Dynamic Component
function SheetMetalStamping() {
  return (
    <div className="container mx-auto p-10">
      {/* Main Header */}
      <Typography variant="h1" className="text-center">
        {sheetMetalStampingData.title}
      </Typography>
      <Typography variant="lead" className="text-center mt-4">
        {sheetMetalStampingData.lead}
      </Typography>
      <div className="mt-6 flex justify-center">
        <Button size="lg">Get a Quote</Button>
      </div>

      <Separator className="my-8" />

      {/* Dynamic Sections */}
      {sheetMetalStampingData.sections.map((section, index) => (
        <Card key={index} className="mb-8">
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
                      ) : (
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
                              {item.list.map((listItem, listIndex) => (
                                <li key={listIndex} className="flex items-start">
                                  <span className="mr-2">•</span>
                                  <Typography className="inline">
                                    {typeof listItem === "string" ? (
                                      listItem
                                    ) : (
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
                                    )}
                                  </Typography>
                                </li>
                              ))}
                            </ul>
                          )}
                          {/* Add Image for Subheading */}
                          {item.subheading && subsectionImages[item.subheading] && (
                            <img
                              src={subsectionImages[item.subheading]}
                              className="container max-w-xl h-auto mx-auto object-cover mt-4"
                              alt={`${item.subheading} Illustration`}
                            />
                          )}
                        </>
                      )}
                    </div>
                  ))}
                {subsection.list && (
                  <ul className="list-disc list-outside mt-2 ml-4">
                    {subsection.list.map((listItem, listIndex) => (
                      <li key={listIndex} className="flex items-start">
                        <span className="mr-2">•</span>
                        <Typography className="inline">
                          {typeof listItem === "string" ? (
                            listItem
                          ) : (
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
                          )}
                        </Typography>
                      </li>
                    ))}
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
                {/* Add Image for Subsection Title */}
                {subsectionImages[subsection.title] && (
                  <img
                    src={subsectionImages[subsection.title]}
                    className="container max-w-3xl h-auto mx-auto object-cover mt-4"
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
                {(subsection.additionalContent || subsection.additionalContent2) && (
                  <>
                    {subsection.additionalContent &&
                      subsection.additionalContent.map((addContent, addIndex) => (
                        <div key={addIndex} className="mt-2">
                          {typeof addContent === "string" ? (
                            <Typography>{addContent}</Typography>
                          ) : (
                            <>
                              {addContent.subheading && (
                                <Typography className="font-bold">{addContent.subheading}</Typography>
                              )}
                              {addContent.text && <Typography>{addContent.text}</Typography>}
                              {addContent.additional && <Typography>{addContent.additional}</Typography>}
                              {/* Add Image for Additional Content Subheading */}
                              {addContent.subheading && subsectionImages[addContent.subheading] && (
                                <img
                                  src={subsectionImages[addContent.subheading]}
                                  className="container h-auto mx-auto object-cover mt-4"
                                  alt={`${addContent.subheading} Illustration`}
                                />
                              )}
                            </>
                          )}
                        </div>
                      ))}
                    {subsection.additionalContent2 &&
                      subsection.additionalContent2.map((addContent, addIndex) => (
                        <Typography key={addIndex} className="mt-2">{addContent}</Typography>
                      ))}
                  </>
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

export default SheetMetalStamping;