// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import Typography from "@/components/custom/Typography";
// import { industriesData } from "@/data/industriesData";

// function Industries() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
//       {/* Sticky Header */}
//       <header className="sticky top-0 z-10 bg-white shadow-md py-6 px-10 flex justify-between items-center fade-in">
//         <Typography variant="h1" className="text-4xl font-bold text-primary">
//           {industriesData.title}
//         </Typography>
//         <Button className="modern-button text-white px-6 py-3 rounded-full">
//           Get a Quote
//         </Button>
//       </header>

//       {/* Main Content */}
//       <div className="container mx-auto px-6 py-12">
//         <div className="text-center mb-12 fade-in">
//           <Typography variant="lead" className="text-xl text-gray-700 max-w-2xl mx-auto">
//             {industriesData.lead}
//           </Typography>
//         </div>

//         <Separator className="my-8 bg-accent w-1/4 mx-auto h-1 rounded-full" />

//         {/* Dynamic Sections */}
//         <div className="grid gap-8 staggered">
//           {industriesData.sections.map((section, sectionIndex) => (
//             <Card
//               key={sectionIndex}
//               className="modern-card bg-white rounded-xl overflow-hidden border-none fade-in"
//               style={{ "--index": sectionIndex }}
//             >
//               <CardHeader className="bg-gradient-to-r from-primary to-secondary p-6">
//                 <CardTitle className="text-2xl font-semibold text-white">
//                   {section.title}
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-6">
//                 {section.content.map((contentItem, contentIndex) => (
//                   <div key={contentIndex} className="mb-6">
//                     {contentItem.heading && (
//                       <Typography variant="h3" className="text-xl font-semibold text-primary mb-3">
//                         {contentItem.heading}
//                       </Typography>
//                     )}
//                     {contentItem.text && contentItem.text.map((text, textIndex) => (
//                       <Typography key={textIndex} className="text-gray-600 mb-2">
//                         {text}
//                       </Typography>
//                     ))}
//                     {contentItem.list && (
//                       <ul className="list-disc list-inside text-gray-600 mb-2">
//                         {contentItem.list.map((item, listIndex) => (
//                           <li key={listIndex}>
//                             {typeof item === "string" ? (
//                               item
//                             ) : (
//                               <>
//                                 <span className="font-semibold text-primary">{item.label}:</span> {item.description}
//                               </>
//                             )}
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                     {contentItem.list2 && (
//                       <ul className="list-disc list-inside text-gray-600 mb-2">
//                         {contentItem.list2.map((item, listIndex) => (
//                           <li key={listIndex}>{item}</li>
//                         ))}
//                       </ul>
//                     )}
//                     {contentItem.additionalText && (
//                       <Typography className="text-gray-600 mb-2">
//                         {contentItem.additionalText}
//                       </Typography>
//                     )}
//                     {contentItem.table && (
//                       <Table className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
//                         <TableHeader className="bg-gray-100">
//                           <TableRow>
//                             {contentItem.table.headers.map((header, headerIndex) => (
//                               <TableHead key={headerIndex} className="text-primary font-semibold">
//                                 {header}
//                               </TableHead>
//                             ))}
//                           </TableRow>
//                         </TableHeader>
//                         <TableBody>
//                           {contentItem.table.rows.map((row, rowIndex) => (
//                             <TableRow key={rowIndex} className="table-row-hover">
//                               {row.map((cell, cellIndex) => (
//                                 <TableCell key={cellIndex} className="text-gray-700">
//                                   {cell}
//                                 </TableCell>
//                               ))}
//                             </TableRow>
//                           ))}
//                         </TableBody>
//                       </Table>
//                     )}
//                     {contentItem.subSections && contentItem.subSections.map((subSection, subIndex) => (
//                       <div key={subIndex} className="mt-4 ml-4">
//                         <Typography variant="h4" className="text-lg font-medium text-secondary mb-2">
//                           {subSection.heading}
//                         </Typography>
//                         {subSection.text && (typeof subSection.text === "string" ? (
//                           <Typography className="text-gray-600 mb-2">{subSection.text}</Typography>
//                         ) : subSection.text.map((text, textIndex) => (
//                           <Typography key={textIndex} className="text-gray-600 mb-2">{text}</Typography>
//                         )))}
//                         {subSection.example && (
//                           <Typography className="text-gray-600 mb-2 italic">{subSection.example}</Typography>
//                         )}
//                         {subSection.list && (
//                           <ul className="list-disc list-inside text-gray-600 mb-2">
//                             {subSection.list.map((item, listIndex) => (
//                               <li key={listIndex}>
//                                 {typeof item === "string" ? (
//                                   item
//                                 ) : (
//                                   <>
//                                     <span className="font-semibold text-primary">{item.label}:</span> {item.description}
//                                   </>
//                                 )}
//                               </li>
//                             ))}
//                           </ul>
//                         )}
//                         {subSection.additionalText && (
//                           <Typography className="text-gray-600 mb-2">{subSection.additionalText}</Typography>
//                         )}
//                         {subSection.subSections && subSection.subSections.map((nestedSubSection, nestedIndex) => (
//                           <div key={nestedIndex} className="mt-3 ml-4">
//                             <Typography variant="h5" className="text-md font-medium text-accent mb-2">
//                               {nestedSubSection.heading}
//                             </Typography>
//                             {nestedSubSection.text && (typeof nestedSubSection.text === "string" ? (
//                               <Typography className="text-gray-600 mb-2">{nestedSubSection.text}</Typography>
//                             ) : nestedSubSection.text.map((text, textIndex) => (
//                               <Typography key={textIndex} className="text-gray-600 mb-2">{text}</Typography>
//                             )))}
//                             {nestedSubSection.additionalText && (
//                               <Typography className="text-gray-600 mb-2">{nestedSubSection.additionalText}</Typography>
//                             )}
//                             {nestedSubSection.list && (
//                               <ul className="list-disc list-inside text-gray-600 mb-2">
//                                 {nestedSubSection.list.map((item, listIndex) => (
//                                   <li key={listIndex}>{item}</li>
//                                 ))}
//                               </ul>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     ))}
//                     {contentItem.button && (
//                       <Button
//                         className="mt-4 modern-button text-white px-6 py-2 rounded-full"
//                         asChild
//                       >
//                         <a href={contentItem.button.href}>{contentItem.button.text}</a>
//                       </Button>
//                     )}
//                   </div>
//                 ))}
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Final Call to Action */}
//         <div className="mt-12 text-center fade-in">
//           <Button
//             variant="outline"
//             className="modern-button text-white px-8 py-4 rounded-full text-lg"
//             asChild
//           >
//             <a href="/contact">Contact Us for More Information</a>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Industries;

//===================================================================
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Typography from "@/components/custom/Typography";
import { industriesData } from "@/data/industriesData";

function Industries() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <Typography variant="h1" className="text-3xl font-bold mb-4">
        {industriesData.title}
      </Typography>
      <Typography variant="lead" className="text-lg text-gray-700 mb-6">
        {industriesData.lead}
      </Typography>

      <Separator className="my-6" />

      {/* Dynamic Sections */}
      {industriesData.sections.map((section, sectionIndex) => (
        <Card key={sectionIndex} className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              {section.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {section.content.map((contentItem, contentIndex) => (
              <div key={contentIndex} className="mb-4">
                {contentItem.heading && (
                  <Typography variant="h3" className="text-lg font-medium mb-2">
                    {contentItem.heading}
                  </Typography>
                )}
                {contentItem.text && contentItem.text.map((text, textIndex) => (
                  <Typography key={textIndex} className="text-gray-600 mb-2">
                    {text}
                  </Typography>
                ))}
                {contentItem.list && (
                  <ul className="list-disc list-inside text-gray-600 mb-2">
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
                  <ul className="list-disc list-inside text-gray-600 mb-2">
                    {contentItem.list2.map((item, listIndex) => (
                      <li key={listIndex}>{item}</li>
                    ))}
                  </ul>
                )}
                {contentItem.additionalText && (
                  <Typography className="text-gray-600 mb-2">
                    {contentItem.additionalText}
                  </Typography>
                )}
                {contentItem.table && (
                  <Table className="mt-4">
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
                {contentItem.subSections && contentItem.subSections.map((subSection, subIndex) => (
                  <div key={subIndex} className="mt-4 ml-4">
                    <Typography variant="h4" className="text-md font-medium mb-2">
                      {subSection.heading}
                    </Typography>
                    {subSection.text && (typeof subSection.text === "string" ? (
                      <Typography className="text-gray-600 mb-2">{subSection.text}</Typography>
                    ) : subSection.text.map((text, textIndex) => (
                      <Typography key={textIndex} className="text-gray-600 mb-2">{text}</Typography>
                    )))}
                    {subSection.example && (
                      <Typography className="text-gray-600 mb-2 italic">{subSection.example}</Typography>
                    )}
                    {subSection.list && (
                      <ul className="list-disc list-inside text-gray-600 mb-2">
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
                      <Typography className="text-gray-600 mb-2">{subSection.additionalText}</Typography>
                    )}
                    {subSection.subSections && subSection.subSections.map((nestedSubSection, nestedIndex) => (
                      <div key={nestedIndex} className="mt-2 ml-4">
                        <Typography variant="h5" className="text-sm font-medium mb-1">
                          {nestedSubSection.heading}
                        </Typography>
                        {nestedSubSection.text && (typeof nestedSubSection.text === "string" ? (
                          <Typography className="text-gray-600 mb-2">{nestedSubSection.text}</Typography>
                        ) : nestedSubSection.text.map((text, textIndex) => (
                          <Typography key={textIndex} className="text-gray-600 mb-2">{text}</Typography>
                        )))}
                        {nestedSubSection.additionalText && (
                          <Typography className="text-gray-600 mb-2">{nestedSubSection.additionalText}</Typography>
                        )}
                        {nestedSubSection.list && (
                          <ul className="list-disc list-inside text-gray-600 mb-2">
                            {nestedSubSection.list.map((item, listIndex) => (
                              <li key={listIndex}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
                {contentItem.button && (
                  <Button
                    variant="outline"
                    className="mt-4 px-4 py-2"
                    asChild
                  >
                    <a href={contentItem.button.href}>{contentItem.button.text}</a>
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
          className="px-6 py-3"
          asChild
        >
          <a href="/contact">Contact Us for More Information</a>
        </Button>
      </div>
    </div>
  );
}

export default Industries;