// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import Typography from "@/components/custom/Typography"; 

// function SheetMetalStamping() {
//   return (
//     <div className="p-10">
//       {/* Main Header */}
//       <Typography variant="h1" className="text-center">
//         Sheet Metal Stamping Services
//       </Typography>
//       <Typography variant="lead" className="text-center mt-4">
//         X provides custom precision sheet metal stampings and related services for a wide range of industries, offering high-quality parts from prototyping to high-volume production.
//       </Typography>
//       <div className="mt-6 flex justify-center">
//         <Button size="lg">Get a Quote</Button>
//       </div>

//       <Separator className="my-8" />

//       {/* Sheet Metal Stamping Overview (2) */}
//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle className="text-2xl">Sheet Metal Stamping</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Typography>
//             Sheet metal stamping is a process of using tools and dies to press and stamp metal blanks into their desired final shape. Sheet metal services are often used across a variety of industries such as automotive, aerospace, consumer electronics, and electronic manufacturing.
//           </Typography>
//           <Typography className="mt-2">
//             X provides custom precision sheet metal stampings from coiled or blanked sheet metal. We can produce sheet metal parts in short runs or high volumes using processes like bending, cutting, and welding.
//           </Typography>
//           <Typography className="mt-2">
//             Production processes include blanking, bending, embossing, punching, drawing, forming, piercing, laser cutting, welding, secondary machining, and fabrication.
//           </Typography>
//           <Typography className="mt-2">
//             X produces custom sheet metal stampings in a wide range of custom materials. Some of the materials include cold-rolled steel (CRS), hot-rolled steel, stainless steel, galvanized, brass, aluminum, and beryllium copper among others. We offer complete secondary operations include powder coating, painting, anodizing, silk screening, and pad printing. Assembly services are also available.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Metal Stamping & Forming Processes
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li><strong>Deep-Drawn Stamping:</strong> Deep-drawn stamping has become known as one of the best ways to create complex, detailed components with a vast degree of accuracy and dependability. Not only that, deep-drawn parts are unusually strong due to the extreme amount of compression exerted on the metal during the forming process.</li>
//             <li><strong>Progressive Die Stamping:</strong> Progressive die stamping is a metal-forming process that producers usually use to create parts, especially for automobiles, electronics and consumer devices. In progressive die stamping, the sheet metal is processed in several different workstations where one or multiple stamping operations are carried out.</li>
//             <li><strong>Transfer Press Stamping:</strong> In transfer press stamping, parts are transferred from one station to another by an automated mechanical system. In situations where the part must be free from the metal strip to enable operation to be carried out in a free state, a transfer press is used.</li>
//             <li><strong>Prototype and Short-Run Stamping:</strong> X can produce sheet metal stamped parts in lower quantities for prototyping and production runs. This helps our customers validate their designs without having to worry about the costs associated with large production runs.</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             X Supports a Variety of Materials for Sheet Metal Stampings
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Aluminum Alloys</li>
//             <li>Steel Alloys</li>
//             <li>Stainless Steel Alloys</li>
//             <li>Brass</li>
//             <li>Copper Alloys</li>
//             <li>Galvanized Steel</li>
//             <li>… and many more</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Secondary Sheet Metal Stamping Finishing Services
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li><strong>Heat Treating:</strong> Improve properties, performance, and durability</li>
//             <li><strong>Chrome Plating:</strong> Cosmetic and decorative finishes</li>
//             <li><strong>Passivation:</strong> Corrosion prevention</li>
//             <li><strong>Powder Coating:</strong> Variety of colors and outstanding durability</li>
//             <li><strong>Anodizing:</strong> Corrosion resistance & cosmetic surface finishes</li>
//             <li><strong>Zinc Plating:</strong> Corrosion and oxidation prevention</li>
//             <li><strong>Cadmium Plating:</strong> Corrosion resistance and other properties</li>
//             <li><strong>Tin Plating:</strong> Commonly used in some industries</li>
//             <li><strong>Black Oxide:</strong> Corrosion-resistant finish</li>
//             <li><strong>Gold and Silver Plating:</strong> Cosmetic and/or electronics for corrosion resistance</li>
//             <li><strong>Annealing:</strong> To increase ductility and reduce hardness</li>
//             <li>… and many more</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Industries & Applications
//           </Typography>
//           <Typography className="mt-2">
//             Sheet metal stampings have a variety of applications across multiple industries, such as:
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li><strong>Electronics:</strong> Telecom, computer, server, data communications, connectors, and electronic components</li>
//             <li><strong>Automotive:</strong> Components, subsystems, and other vehicle applications</li>
//             <li><strong>Lighting:</strong> Custom components for exterior, and interior lighting applications</li>
//             <li><strong>Marine:</strong> Applications include connectors, fittings, enclosures, housings, caps, covers, and couplings</li>
//             <li><strong>Medical:</strong> Medical products, surgical devices, equipment, pumps, motors, probes</li>
//             <li><strong>Construction:</strong> Hardware and metal components</li>
//             <li><strong>Electrical:</strong> Components and assemblies for electrical / wiring components and systems</li>
//             <li><strong>Aerospace:</strong> Electronic components, hardware, sub-assemblies, couplings, and fittings</li>
//             <li>… and many more</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Project Management
//           </Typography>
//           <Typography className="mt-2">
//             X offers project management throughout the manufacturing process. After you create a PO, our team will guide you through each step. They will keep you up-to-date with the information you need to monitor production and share project information with internal stakeholders.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Design for Manufacturing Expertise
//           </Typography>
//           <Typography className="mt-2">
//             Design for manufacturing support can deliver improved results when manufacturing sheet metal stamped parts. The design considers manufacturing tolerances and typical wear from usage.
//           </Typography>
//           <Typography className="mt-2">
//             Optimizing designs is an often overlooked step in the production of sheet metal stampings. Adding this step into the manufacturing process saves critical time during process development and ensures the parts will meet your project’s needs.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             FAIR Approval
//           </Typography>
//           <Typography className="mt-2">
//             A first-article inspection report (FAIR) is a part of any robust product development program. It is also critical to conduct detailed inspections to avoid out-of-tolerance components and rework for stamped parts. X’s process incorporates this essential step, giving you complete confidence in the parts you receive.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Managed Inventory for JIT
//           </Typography>
//           <Typography className="mt-2">
//             Global events of the early 2020s have demonstrated the importance of inventory management and supply chain resiliency. The traditional approach to JIT strains your ability to react to market or order fluctuations. Having a globally connected supply partner is an effective way to build resiliency and multi-source supply.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Get a Quote for Sheet Metal Stamped Components
//           </Typography>
//           <Typography className="mt-2">
//             X is your one-stop solution for complete end-to-end contract manufacturing and distribution. We provide:
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Unlimited manufacturing capacity, which decreases risk and improves your ability to respond to demand fluctuations</li>
//             <li>Global raw material sourcing to protect cost and supplier resiliency</li>
//             <li>Secondary processing, including anodizing, powder coating, and CNC machining</li>
//             <li>Assembly, packaging, and distribution</li>
//             <li>Quality control – AS 9100D & ISO 9001:2015 certified</li>
//             <li>Vendor managed inventory to optimize material availability</li>
//             <li>Supply chain management for efficient raw material conversion</li>
//             <li>Project management for a hands-free experience, with weekly updates for project and timing accountability</li>
//           </ul>
//           <Typography className="mt-2">
//             Experience the difference X makes in your manufacturing process. Request a quote today for sheet metal stamping or any other manufactured component.
//           </Typography>
//           <div className="mt-4 flex justify-center">
//             <Button>Request a Quote</Button>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Sheet Metal Fabrication (2.a) */}
//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle className="text-2xl">Sheet Metal Fabrication</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Typography variant="h3" className="text-xl">
//             What Is Sheet Metal Fabrication?
//           </Typography>
//           <Typography className="mt-2">
//             Sheet metal fabrication is a subtractive manufacturing process that forms parts from thin metal sheets. Engineers often choose sheet metal parts for their high precision and durability, especially for end-use applications like chassis, enclosures, and brackets.
//           </Typography>
//           <Typography className="mt-2">
//             X’s online sheet metal fabrication services provide a fast and cost-effective solution for any parts that need to be made from 3D CAD files or engineering drawings. X offers a range of sheet metal materials, including aluminum, copper, steel, and stainless steel, as well as assembly services like installing PEM inserts, welding, and finishing services. With a network of domestic and overseas fabricators, X can supply any quantity of sheet metal parts from low-volume, high-mix prototypes to high-volume production runs. X offers competitive, custom sheet metal fabricating prices for low volume prototypes and cost savings for high volume production runs.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             What is Sheet Metal Forming?
//           </Typography>
//           <Typography className="mt-2">
//             Sheet stock is procured in a flat state and cut then formed into its final state through a series of progressive steps. For a typical sheet metal project, the first step is equivalent to sheet cutting, where a shear, laser, waterjet, plasma, or punch press is used to create the internal holes and edge features of the part. This process is also known as blanking.
//           </Typography>
//           <Typography className="mt-2">
//             Once the blank is produced, the next step is to form sheet metal using various tools, but most commonly some sort of brake. A brake press can be manual or automated and uses die inserts to create a desired angular bend, forming the two-dimensional sheet into a three-dimensional object. Sheet metal forming can bend the part in multiple directions, creating simple parts such as brackets up to highly complex geometries which may require custom die tools. Once the tools are in place, making subsequent sheet parts in production is very cost-effective. This makes sheet metal fabrication and forming ideal for low to high volume production.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             X Sheet Metal Fabrication Capabilities
//           </Typography>
//           <Table className="mt-2">
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Feature</TableHead>
//                 <TableHead>Description</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <TableRow>
//                 <TableCell>Blank Size</TableCell>
//                 <TableCell>5’ x 10’ (1.52 m x 3.05 m). We accommodate larger part volumes upon request.</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Standard Lead Time</TableCell>
//                 <TableCell>3 business days</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Sheet Thickness</TableCell>
//                 <TableCell>0.024” - 0.250” typical. We accommodate thicker or thinner gauges upon request.</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>General Tolerances</TableCell>
//                 <TableCell>See our Sheet Metal manufacturing standards for details on general tolerances.</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Braking (Hydraulic)</TableCell>
//                 <TableCell>14′ length</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Braking (Magnetic)</TableCell>
//                 <TableCell>6 tons of magnetic pull across the entire beam, 5/8″ minimum reverse bend</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Punching</TableCell>
//                 <TableCell>2″ diameter hole capacity, or larger upon request</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Welding</TableCell>
//                 <TableCell>Welded edges and seams, weldments, and assemblies</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//           <Typography variant="h3" className="mt-4">
//             How X Sheet Metal Fabrication Works
//           </Typography>
//           <Typography className="mt-2">
//             X's custom sheet metal fabrication services utilize the top sheet metal fabricators in the US and globally. Sheet metal fabricators first convert CAD and drawing data into machine code. A laser cutting, waterjet, or plasma cutting machine will then precisely remove sheet metal material. The raw material is formed into angular bends and features using brakes, punches, and dies. If any assembly or post-processing is required, our sheet metal manufacturers will weld, add inserts, or finish the part.
//           </Typography>
//           <Typography className="mt-2">
//             The efficiency and high precision of sheet metal fabrication, coupled with X’s variety of materials, range of sheet metal fabricators, and post-processing options means you can get parts for any application. Sheet metal applications include aerospace, defense, automotive, energy, industrial, medical, dental, and consumer products.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Sheet Metal Materials Available at X
//           </Typography>
//           <Typography className="mt-2"><strong>Aluminum</strong></Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Aluminum 1100-H14</li>
//             <li>Aluminum 5052-H32</li>
//             <li>Aluminum 6061</li>
//           </ul>
//           <Typography className="mt-2">Learn more about aluminum sheet metal.</Typography>
//           <Typography className="mt-2"><strong>Copper</strong></Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Copper 101</li>
//             <li>Copper C110</li>
//             <li>Copper C110, H02</li>
//             <li>Copper 260 (Brass)</li>
//           </ul>
//           <Typography className="mt-2">Learn more about copper sheet metal.</Typography>
//           <Typography className="mt-2"><strong>Bronze</strong></Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Bronze 220</li>
//             <li>Bronze 510</li>
//           </ul>
//           <Typography className="mt-2">Learn more about bronze sheet metal.</Typography>
//           <Typography className="mt-2"><strong>Stainless Steel</strong></Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Stainless steel 301</li>
//             <li>Stainless steel 304</li>
//             <li>Stainless Steel 304 #4 brushed</li>
//             <li>Stainless Steel 304, #8 mirror polish</li>
//             <li>Stainless steel 316/316L</li>
//             <li>Stainless Steel 316, #4 brushed</li>
//           </ul>
//           <Typography className="mt-2">Learn more about stainless sheet metal.</Typography>
//           <Typography className="mt-2"><strong>Steel</strong></Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Steel 1018 (Low Carbon)</li>
//             <li>Steel 1045 (Hot Rolled)</li>
//             <li>Steel A569/ASTM A1011 (Hot Rolled)</li>
//             <li>AZ55 Galvalume</li>
//             <li>A653 Galvanized</li>
//             <li>1095 Spring Steel</li>
//             <li>Steel A36</li>
//             <li>Steel A36, pickled and oiled</li>
//             <li>Steel A366/1008</li>
//           </ul>
//           <Typography className="mt-2">Learn more about steel sheet metal.</Typography>
//           <Typography className="mt-2"><strong>Nickel Alloys</strong></Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Inconel 625</li>
//             <li>Nickel Alloy 200</li>
//             <li>Nickel Alloy 400</li>
//           </ul>
//           <Typography className="mt-2"><strong>Titanium</strong></Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Titanium (Grade 2)</li>
//             <li>Titanium 6AI-4V (Grade 5)</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Available Sheet Metal Finishes
//           </Typography>
//           <Typography className="mt-2">
//             Various material finishes are available for an instant online sheet metal quote. If you do not see the material finish combination you are looking for, please choose "Other" under the finish drop-down on your quote page and submit for an expert engineering review once you have specified features, tolerances, inspection needs, and quantities required.
//           </Typography>
//           <Typography className="mt-2">
//             Check out our finishing galleries to see examples of our standard finishes.
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li><strong>Standard:</strong> Minimal post-processing or treatment on parts is done.</li>
//             <li><strong>Bead Blast:</strong> The part surface is left with a smooth, matte appearance.</li>
//             <li><strong>Anodize (Type II Or Type III):</strong> Type II (MIL-A-8625/MIL-PRF-8625, Type II) creates a corrosion-resistant finish. Sheet metal parts can be anodized in different colors—clear, black, red, and gold are most common—and are usually associated with aluminum. Type III (MIL-A-8625, Type III, Class 1/2 "hardcoat") is thicker and creates a wear-resistant layer in addition to the corrosion resistance seen with Type II.</li>
//             <li><strong>Chem Film (Chromate Conversion Coating):</strong> This sheet metal finish provides corrosion resistance and good conductivity properties. Chem film can be used as a base for paint and can leave surfaces yellow or gold. Adds very little thickness, about 0.00001”-0.00004.” Chem film will conform to MIL-DTL-5541, TYPE I/II.</li>
//             <li><strong>Powder Coat:</strong> This is a sheet metal fabrication process where powdered paint is sprayed onto a part that is then baked in an oven. This creates a strong, wear- and corrosion-resistant layer that is more durable than standard painting methods. A wide variety of colors are available to create the desired aesthetic. See examples of our options in our powder coating finishes gallery.</li>
//             <li><strong>Electroless Nickel Plating:</strong> A sheet metal fabrication process that provides uniform nickel coating which offers protection from corrosion, oxidation, and wear on irregular surfaces. The finished part will be brighter. Thickness starts at .0001” and this finish conforms to MIL-C-26074.</li>
//             <li><strong>Gold Plating:</strong> Gold Plating provides good corrosion and tarnish resistance with excellent solderability. Default application specification is MIL-G-45204 & ASTM B488, CLASS 00, 0, OR 1 (Thickness 0.00002" - 0.00005").</li>
//             <li><strong>Silver Plating:</strong> Silver offers high solderability and electrical conductivity but is susceptible to tarnish on sheet metal parts. Conforms to AMS QQ-S-365D. Thickness is about 0.00002”- 0.0003.”</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Sheet Metal Design Guidelines
//           </Typography>
//           <Table className="mt-2">
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Feature</TableHead>
//                 <TableHead>Description (MT = Material Thickness)</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <TableRow>
//                 <TableCell>Minimum Bend</TableCell>
//                 <TableCell>1X MT</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Minimum Hole to Edge Distance</TableCell>
//                 <TableCell>2X MT</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Minimum Hole to Hole Distance</TableCell>
//                 <TableCell>6X MT</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Minimum Bend Edge to Hole Distance</TableCell>
//                 <TableCell>6X MT</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Minimum Feature to Countersink Distance</TableCell>
//                 <TableCell>8X MT</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Minimum Countersink Depth</TableCell>
//                 <TableCell>0.6X MT</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Relief Cuts</TableCell>
//                 <TableCell>1X MT</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Corner Fillets</TableCell>
//                 <TableCell>0.5X MT</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>

//       {/* Sheet Cutting (2.b) */}
//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle className="text-2xl">Sheet Cutting</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Typography variant="h3" className="text-xl">
//             What is Sheet Cutting?
//           </Typography>
//           <Typography className="mt-2">
//             Sheet cutting is a category of processes that slices into flat stock material following a profile to produce a shape. Sheet stock is cut using a high-powered CNC laser or waterjet. The material's gauge determines the thickness of the part. From a one-off batch to mass production, custom designs can be cut in various materials ranging from plastics, elastomers, composites, metals, and more. Sheet cutting is also typical for blank preparation in other manufacturing processes like sheet metal fabrication or metal stamping.
//           </Typography>
//           <Typography className="mt-2">
//             X's sheet cutting service can cut just about any material using lasers and waterjet capabilities. From clear acrylic panels to thick tool steel, X's manufacturing marketplace offers a one-stop-shop solution for any project with instant quoting and a wide selection of materials.
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Metals</li>
//             <li>Plastics</li>
//             <li>Wood</li>
//             <li>Composites</li>
//             <li>Foams</li>
//             <li>Rubber & Gaskets</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             How are Laser Cutting and Waterjet Cutting Different?
//           </Typography>
//           <Typography className="mt-2">
//             Laser cutting is the most common form of blanking or creating a profile cut of a two-dimensional shape in a common stock of material. It uses a laser to concentrate heat and carve a path through the material. The thickness of the path carved is called kerf and is typically less than 0.010”. Unlike lasers, waterjet cutting takes advantage of the fact that water cannot be compressed, so when a thin stream of water is shot out of a nozzle at very high pressure it can cut through just about anything.
//           </Typography>
//           <Typography className="mt-2">
//             Waterjets have an advantage over some thicker metals since they do not create excess heat which can affect temper. A waterjet’s kerf has a cut thickness of 0.040” to 0.050” but the general tolerance of both waterjet and lasers are the same at +/- 0.010". Waterjets are also better for soft materials like foams or gaskets versus a laser since it does not compress or burn. This is also important for materials like PVC, PC, and even galvanized metals that should only be cut by waterjet to avoid hazardous fumes such as fluorine, chlorine, or zinc when exposed to heat. Lasers have an advantage of speed and availability, since they can quickly handle most plastics and thinner metals deftly. Lasers are also used for engraving and part marking.
//           </Typography>
//           <Typography className="mt-2">
//             Laser and waterjet processes are common tools for creating profile cuts on sheets. Because of their versatility, X has made the inclusive category of Sheet Cutting to allow users to focus on what materials they want to cut based on their CAD.
//           </Typography>
//           <Typography className="mt-2">
//             X has a diverse range of suppliers with laser cutting or waterjet cutting services. The right supplier will be connected automatically based on the job requirements.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             X Sheet Cutting Sizes and Tolerances
//           </Typography>
//           <Table className="mt-2">
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Feature</TableHead>
//                 <TableHead>Description</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <TableRow>
//                 <TableCell>Blank Size</TableCell>
//                 <TableCell>X has access to platforms up to 10’ x 20’ for laser cutting and waterjet cutting. However, many sheet stock sizes commonly cap out at 48” x 96” (4’ x 8’) or smaller.</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Standard Lead Time</TableCell>
//                 <TableCell>3 business days</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Sheet Thickness</TableCell>
//                 <TableCell>0.020" up to beyond 1.00" depending on materials. Thinner or thicker stock may be possible through manual quoting.</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>General Tolerances</TableCell>
//                 <TableCell>For full details on tolerances offered by X's sheet cutting service, including edge to edge tolerance and taper, please consult our manufacturing standards.</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//           <Typography variant="h3" className="mt-4">
//             How X Sheet Cutting Works
//           </Typography>
//           <Typography className="mt-2">
//             X's sheet cutting services utilize the top laser cutting and waterjet suppliers in the US and globally. Fabricators first convert CAD and drawing data into machine code. A laser cutting, waterjet, or plasma cutting machine will then precisely remove sheet material. If any assembly or post-processing is required, our manufacturers will provide turnkey finishing to the part.
//           </Typography>
//           <Typography className="mt-2">
//             The efficiency and high precision of these CNC-controlled cutting tools, coupled with X’s variety of materials, range of suppliers, and post-processing options means you can get parts for any application. Sheet cut applications include aerospace, defense, automotive, energy, industrial, medical, dental, art, robotics, and consumer products.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Sheet Cutting Materials
//           </Typography>
//           <Typography className="mt-2"><strong>Aluminum Alloy</strong></Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Aluminum 6061 T6</li>
//             <li>Aluminum 2024-T3</li>
//             <li>Aluminum 5052 H32</li>
//             <li>Aluminum 7075 T6</li>
//             <li>Aluminum MIC6</li>
//           </ul>
//           <Typography className="mt-2"><strong>Brass and Bronze Alloy</strong></Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Brass 260</li>
//             <li>Brass 353 H02</li>
//             <li>Brass 464 H01</li>
//             <li>Bearing Bronze 932 M07</li>
//             <li>Bronze 220 H02</li>
//             <li>Bronze 510 H08 (spring) Silicon Bronze 655</li>
//           </ul>
//           <Typography className="mt-2"><strong>Copper Alloy</strong></Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Copper 101</li>
//             <li>Copper 110</li>
//           </ul>
//           <Typography className="mt-2"><strong>Mechanical Plastic</strong></Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>ABS</li>
//             <li>Acetal (POM, Delrin)</li>
//             <li>PETG</li>
//             <li>PC</li>
//             <li>PP</li>
//             <li>PTFE</li>
//             <li>PVC</li>
//             <li>UHMW</li>
//           </ul>
//           <Typography className="mt-2"><strong>Acrylic</strong></Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Clear and Colored Acrylic (Plexiglass)</li>
//           </ul>
//           <Typography className="mt-2"><strong>Foam</strong></Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>EVA Foam</li>
//             <li>Polyurethane Foam (PU)</li>
//             <li>Silicone Foam</li>
//           </ul>
//           <Typography className="mt-2"><strong>Steel</strong></Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Steel 1075</li>
//             <li>1095</li>
//             <li>4130</li>
//             <li>AR500</li>
//             <li>Corten A588</li>
//             <li>1045 HR</li>
//             <li>A1011 HR</li>
//             <li>1008</li>
//             <li>1018</li>
//             <li>4140</li>
//             <li>A36</li>
//             <li>A366</li>
//             <li>A572</li>
//             <li>A653</li>
//             <li>G90</li>
//             <li>Tool Steel D1, O1</li>
//           </ul>
//           <Typography className="mt-2"><strong>Stainless Steel</strong></Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Stainless 17-4 PH</li>
//             <li>17-7</li>
//             <li>301</li>
//             <li>304</li>
//             <li>316</li>
//             <li>410</li>
//             <li>430</li>
//             <li>440C</li>
//             <li>CPM 154</li>
//             <li>S30V</li>
//           </ul>
//           <Typography className="mt-2"><strong>Other Metal Alloys</strong></Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Titanium Grade 2 and 5</li>
//             <li>Nickel Alloy</li>
//           </ul>
//           <Typography className="mt-2"><strong>Wood</strong></Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Cherry</li>
//             <li>Hardboard</li>
//             <li>MDF</li>
//             <li>Poplar</li>
//             <li>Red Oak</li>
//             <li>Wood Laminate (Plywood)</li>
//           </ul>
//           <Typography className="mt-2"><strong>Carbon Fiber and Other Composites</strong></Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Carbon Fiber</li>
//             <li>Garolite G-10</li>
//             <li>Garolite G-11</li>
//             <li>Garolite LE (Phenolic)</li>
//           </ul>
//           <Typography className="mt-2"><strong>Rubber and Gasketing</strong></Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Buna-N Rubber Blends</li>
//             <li>EPDM</li>
//             <li>Silicone Rubber</li>
//             <li>Paper Fiber</li>
//             <li>PTFE</li>
//           </ul>
//           <Typography className="mt-2">
//             Not seeing the material you are looking for? We will source it! Submit your quote request using "Custom" in the material drop-down and our expert team will be happy to review the project.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             What Other Finishes are Available for Sheet Cut Parts?
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li><strong>Standard:</strong> A standard finish is available for all materials. No additional post-processing is performed, leaving the surface as-is after your choice of de-tabbing and deburring is performed. Plastics and cosmetically finished products may have an overwrap left on the faces for production. It is common for pre-polished, brushed, or textured materials to have only one side cosmetically finished.</li>
//             <li><strong>Sanding with Grain:</strong> Metal parts are sanded by hand, abrasive belt sander, or timesaver, in the direction of the grain to create a uniform finish. This is also called linear finishing.</li>
//             <li><strong>Sanding Random:</strong> Metal parts are sanded by hand, orbital sander, or timesaver, in a random pattern or swirl to create a uniform finish. This is also called a random swirl finish.</li>
//             <li><strong>Other Finishes:</strong> Like our other services, X can offer turnkey finishing services like anodizing, chem-film, metal plating, powder coating, heat treating, passivation, and even multiple custom finishes. See samples and learn more by visiting our Metal Finishes Gallery.</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Designing for Flat Cut Parts
//           </Typography>
//           <Typography className="mt-2">
//             These design tips can help guide your next laser cutting or waterjet project.
//           </Typography>
//           <Typography className="mt-2"><strong>Design Tip: Minimum Feature-to-Feature Distances for Laser and Waterjet Cutting</strong></Typography>
//           <Table className="mt-2">
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Feature Description (MT = Material Thickness)</TableHead>
//                 <TableHead>Value</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <TableRow>
//                 <TableCell>Minimum Hole to Edge Distance</TableCell>
//                 <TableCell>2X MT or 0.125”, whichever is smaller</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Minimum Hole to Hole Distance</TableCell>
//                 <TableCell>6X MT or 0.125”, whichever is smaller</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Minimum Relief Cuts</TableCell>
//                 <TableCell>0.010” or 1X MT, whichever is greater</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Minimum Corner Fillets</TableCell>
//                 <TableCell>0.5X MT or 0.125”, whichever is smaller</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Minimum Tab Thickness</TableCell>
//                 <TableCell>0.063” or 1X MT, whichever is greater</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Minimum Slot Thickness</TableCell>
//                 <TableCell>0.040” or 1X MT, whichever is greater</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//           <Typography className="mt-2"><strong>Design Tip: Explode Your Text</strong></Typography>
//           <Typography className="mt-2">
//             When text is added to a design it may be in an active state, meaning that although the text is visible on the screen it may not actually be outlined for laser or waterjet cutting. Make sure to convert text to a shape with an outline, or “explode” the text so it can be cut on the model.
//           </Typography>
//           <Typography className="mt-2">
//             It is also important to add joining or “stencil-like” bridges on free-floating text features like the hole in D, O, P, Q, or other closed-loop characters. Otherwise, the letters will just be a letter-shaped hole! The 3D viewer in X's quoting page will show you what features are registered. Learn more about how to prepare your DXF.
//           </Typography>
//           <Typography className="mt-2"><strong>Design Tip: Laser Cutting Notches and Slots</strong></Typography>
//           <Typography className="mt-2">
//             Notches and slots must be designed in the file, even if they are at the kerf thickness of the sheet cutting process. For example, a notch or slot of 0.040” should be designed to that width. It is recommended for slot features to have exaggerated “lollipop” rounds on at least one side to help compensate for the pierce hole which will be larger than the cutting thickness (kerf).
//           </Typography>
//           <Typography className="mt-2"><strong>Design Tip: Use Standard Gauges</strong></Typography>
//           <Typography className="mt-2">
//             Sheet cutting depends on stock material sizes to provide economical and quick-turn parts. Using common stock sizes or standard gauges for the material you are designing around is necessary to prevent delays in material sourcing.
//           </Typography>
//           <Typography className="mt-2">
//             If a design thickness is within the tolerance range of a standard gauge, X will source that standard gauge for the project. Thickness tolerances are independent of cutting tolerances, as they rely on the raw stock material’s tolerance range.
//           </Typography>
//           <Typography className="mt-2">
//             Some processes like plasma cutting, flame-cutting, and waterjet cutting can slice through very thick stock material but may require a manual quote review. Typically, the thicker the stock the less likely a large sheet size is available.
//           </Typography>
//           <Typography className="mt-2">Plastic material sheet stock in different gauges</Typography>
//           <Typography className="mt-2"><strong>Design Guide: Laser and Sheet Cutting</strong></Typography>
//           <Typography className="mt-2">
//             We've compiled our best tips into this guide to help you understand laser and sheet cutting processes, how to prepare your files, important design considerations for optimizing your parts for manufacturing, and information about X's sheet cutting services.
//           </Typography>
//         </CardContent>
//       </Card>

//       {/* Laser Cutting (2.c) */}
//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle className="text-2xl">Laser Cutting</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Typography variant="h3" className="text-xl">
//             Metal Laser Cutting Service
//           </Typography>
//           <Typography className="mt-2">
//             X offers a high quality metal laser cutting service. Our metal laser cutting services support a variety of metal materials, including: Steel, Stainless Steel, Tool Steel, Spring Steel, Aluminum, Brass, Bronze, Copper, and Titanium. Our laser cutting machines use both fiber lasers and CO2 lasers and can cut through up to 4 inches of metal material. X offers instant quotes on metal laser cutting services, and free shipping on orders in the US.
//           </Typography>
//           <Typography className="mt-2">
//             For more information see our Metal Laser Cutting Service page, or simply Start a Quote Now.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Metal Laser Cutting Materials List
//           </Typography>
//           <Typography className="mt-2">
//             For a list of the metal materials supported by X's metal laser cutting service, see below. Other materials may also be available for quote.
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>1075 Spring Steel, annealed</li>
//             <li>1075 Spring Steel, Blue Tempered</li>
//             <li>1095 Spring Steel, annealed</li>
//             <li>1095 Spring Steel, blue tempered</li>
//             <li>4130 chrome-moly steel, annealed</li>
//             <li>Aluminum 2024-T3</li>
//             <li>Aluminum 5052 H32</li>
//             <li>Aluminum 6061 T6</li>
//             <li>Aluminum 7075 T6</li>
//             <li>Aluminum MIC6</li>
//             <li>AR400 Steel, hardened</li>
//             <li>AR500 Steel, hardened</li>
//             <li>Bearing Bronze 932 M07</li>
//             <li>Brass 260</li>
//             <li>Brass 353 H02</li>
//             <li>Brass 464 H01</li>
//             <li>Bronze 220 H02</li>
//             <li>Bronze 510 H08 (spring)</li>
//             <li>Carbon Fiber</li>
//             <li>Copper 101, H00 to H01</li>
//             <li>Copper 110, Annealed</li>
//             <li>Copper 110, H01</li>
//             <li>Copper 110, H02</li>
//             <li>Corten A588 (Weathered) Steel</li>
//             <li>Hot Rolled Steel 1045</li>
//             <li>Hot Rolled Steel A569/ASTM A1011</li>
//             <li>Nickel 200, annealed</li>
//             <li>Nickel 625, annealed</li>
//             <li>Pre-Anodized 6061-T6, Black</li>
//             <li>Silicon Bronze 655</li>
//             <li>Stainless Steel 17-4 PH, annealed</li>
//             <li>Stainless Steel 17-7 shim, hardened</li>
//             <li>Stainless Steel 301, spring temper</li>
//             <li>Stainless Steel 304</li>
//             <li>Stainless Steel 304 shim, hardened</li>
//             <li>Stainless Steel 304, #4 brushed</li>
//             <li>Stainless Steel 316</li>
//             <li>Stainless Steel 410, annealed</li>
//             <li>Stainless Steel 430, #3 brushed</li>
//             <li>Stainless Steel 440C</li>
//             <li>Stainless Steel CPM 154</li>
//             <li>Stainless Steel S30V, annealed</li>
//             <li>Steel 1008, zinc-galvanized</li>
//             <li>Steel 1018</li>
//             <li>Steel 4140, hardened</li>
//             <li>Steel 80CRV2</li>
//             <li>Steel A36</li>
//             <li>Steel A36, pickled and oiled</li>
//             <li>Steel A366/1008</li>
//             <li>Steel A572 Grade 50</li>
//             <li>Steel G90, galvanized</li>
//             <li>Titanium (Grade 2)</li>
//             <li>Titanium 6Al-4V (Grade 5)</li>
//             <li>Tool Steel D2, annealed</li>
//             <li>Tool Steel O1, annealed</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Plastic Laser Cutting Service
//           </Typography>
//           <Typography className="mt-2">
//             Our plastic laser cutting services support a variety of plastic materials, including: Acrylic, Foam, and Elastomer. Our laser cutting machines use both fiber lasers and CO2 lasers and can cut through up to 4 inches of plastic material.
//           </Typography>
//           <Typography className="mt-2">
//             For more information see our Plastic Laser Cutting Services page, or simply Start an Instant Quote Now.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Plastic Laser Cutting Material List
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>ABS, Black</li>
//             <li>ABS, White</li>
//             <li>Acetal, Black</li>
//             <li>Acetal, White</li>
//             <li>Acrylic, Clear</li>
//             <li>Acrylic, Colored</li>
//             <li>Buna-N Rubber, Adhesive-Backed, Black</li>
//             <li>Buna-N Rubber, Black</li>
//             <li>EPDM</li>
//             <li>EVA Foam, Black</li>
//             <li>EVA Foam, Blue</li>
//             <li>Extra Soft PU Foam, Adhesive Backed, Black</li>
//             <li>Extra Soft PU Foam, Black</li>
//             <li>Fiberglass</li>
//             <li>Flame-Retardant PU Air Filter Pad, Gray</li>
//             <li>Flame-Retardant Silicone Foam, Gray</li>
//             <li>Garolite G-10 (FR4), Black</li>
//             <li>Garolite G-11 (FR5), Green</li>
//             <li>Garolite LE (Phenolic), Brown</li>
//             <li>HDPE, White</li>
//             <li>High Temp Silicone Foam, Adhesive Backed, Red</li>
//             <li>High Temp Silicone Rubber, Adhesive-Backed, Red</li>
//             <li>High Temp Silicone Rubber, Red</li>
//             <li>Nylon 6/6, Black</li>
//             <li>Paper Fiber and Buna-N Blend, Gray</li>
//             <li>PETG Plastic, Clear</li>
//             <li>Polycarbonate, Clear</li>
//             <li>Polypropylene, White</li>
//             <li>PTFE Gasket Material</li>
//             <li>PTFE, White or Black</li>
//             <li>PVC, Gray</li>
//             <li>UHMW-PE, White</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Acrylic Laser Cutting Service
//           </Typography>
//           <Typography className="mt-2">
//             X offers a high quality Acrylic Laser Cutting service. We offer clear (transparent) acrylic materials, as well as a variety of colors. Advantages of laser cutting with acrylic include strength, easy of use, transparency, and waterproof/moisture resistance.
//           </Typography>
//           <Typography className="mt-2">
//             For more information see our Acrylic Laser Cutting Service page, or simply Start an Instant Quote Now.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Wood Laser Cutting Service
//           </Typography>
//           <Typography className="mt-2">
//             X offers a high quality Wood Laser Cutting service. We offer a variety of wood materials including Cherry Hardwood, Hardboard, MDF, Poplar Hardwood, Red Oak Hardwood, Uncoated Wood Laminate (Plywood), Chipboard, and Birch.
//           </Typography>
//           <Typography className="mt-2">
//             For more information see our Wood Laser Cutting Service page, or simply Start an Instant Quote Now.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Alternatives to Laser Cutting
//           </Typography>
//           <Typography className="mt-2">
//             Alternatives to Laser Cutting for sheet cutting projections include waterjet cutting services and plasma cutting services. Laser Cutting has limitations on the thickness of the material being cut. Laser cutting can cut up to 4 inches of material. For materials thicker than 4 inches, use waterjet cutting or plasma cutting services.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Types Of Laser Cutters Available From X
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li><strong>C02 Laser Cutting Machines:</strong> The most common laser cutter type because of their relatively high energy efficiency and high power output ratio. Best suited for cutting, boring, and engraving services.</li>
//             <li><strong>Nd Laser Cutting Machines:</strong> Nd lasers have a high energy, and are used for boring and welding. A disadvantage of Nd lasers are their low repetition efficiency.</li>
//             <li><strong>Nd:Yag Laser Cutting Machines:</strong> Nd:Yag Lasers are high powered lasers and suitable for cutting thick materials. Nd:Yag lasers can be used for boring, welding, and engraving. A disadvantage of Nd:Yag lasers is that they are more expensive to operate.</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Advantages of Laser Cutting
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li><strong>Durability:</strong> Laser Cutting produces highly durable parts well-suited for both functional laser-cut prototypes and end-use production.</li>
//             <li><strong>Scalability:</strong> All sheet metal parts are built on-demand and with lower setup costs compared to other manufacturing processes. Depending on your needs, order as little as a single prototype up to 10,000 production parts.</li>
//             <li><strong>Material Selection:</strong> Choose from a variety of materials across a wide range of strength, conductivity, weight, and corrosion resistance.</li>
//             <li><strong>Rapid Turnaround:</strong> Combining the latest cutting, bending, and punching with automated technologies, X provides instant sheet quotes that can often ship the same week.</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Laser Cut Metal General Tolerances
//           </Typography>
//           <Table className="mt-2">
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Description</TableHead>
//                 <TableHead>General Tolerance</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <TableRow>
//                 <TableCell>General Tolerances</TableCell>
//                 <TableCell>For full details on tolerances offered by X's sheet cutting service, including edge to edge tolerance and taper, please consult our manufacturing standards.</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Thickness Dimension</TableCell>
//                 <TableCell>Thickness tolerances are determined by the material blank.</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Minimum Recommend Part Size</TableCell>
//                 <TableCell>1.000"</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Minimum Feature Size</TableCell>
//                 <TableCell>2X material thickness with a minimum of 0.062"</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Kerf (slit size)</TableCell>
//                 <TableCell>Approximately 0.020"</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Edge Condition</TableCell>
//                 <TableCell>Laser cut parts will have a vertical striation on the cut face.</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//           <Typography variant="h3" className="mt-4">
//             An Overview of Laser Cutting
//           </Typography>
//           <Typography className="mt-2"><strong>The Basics Of Laser Cutting</strong></Typography>
//           <Typography className="mt-2">
//             Laser cutting directs a high-powered laser through optics to cut materials for industrial applications. Laser cutting is both more precise and less energy-consuming than plasma cutting but has an upper threshold on the thickness of the material being cut.
//           </Typography>
//           <Typography className="mt-2">
//             A laser cutting machine is a type of CNC machine that uses a thin, high-powered focused laser beam to cut materials. Laser cutters are commonly used for quality welding and to cut industrial sheet metal, but laser cutters can also be used for other materials such as plastic, rubber, glass, wood, and aluminum.
//           </Typography>
//           <Typography className="mt-2"><strong>The Laser Cutting Process</strong></Typography>
//           <Typography className="mt-2">
//             Laser cutters focusing optics are used to direct electrical energy into a high-density light beam, and CNC is used to manage either the workpiece or the laser beam. The material processed by the laser cutter is then melted, burned, vaporized, or blown away by a jet of oxygen or nitrogen.
//           </Typography>
//           <Typography className="mt-2"><strong>Advantages of Laser Cutting Services</strong></Typography>
//           <Typography className="mt-2">
//             The laser cutting process offers several advantages over traditional mechanical cutting or CNC machining processes, including quicker production, decreased contamination of the workpiece, and reduced chance of warping. A laser cutter produces clean laser cut parts and has a small chance of operator error making them great for fast prototyping.
//           </Typography>
//           <Typography className="mt-2">
//             X's custom laser cutting services offer a cost-effective on-demand solution for your sheet metal fabrication needs, including the material, details, and size of the project. From fast, low-volume prototypes to high-quality, high-volume production runs, X’s massive partner network has the ideal shop and the ideal machines for the job.
//           </Typography>
//         </CardContent>
//       </Card>

//       {/* Waterjet Cutting (2.d) */}
//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle className="text-2xl">Waterjet Cutting</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Typography variant="h3" className="text-xl">
//             High Quality Waterjet Cut Parts
//           </Typography>
//           <Typography className="mt-2">
//             Waterjet cutting, also known as water jet or abrasive waterjet cutting, is one of X's fabrication processes. It directs a high-pressure jet of water and an abrasive substance to cut materials for industrial applications such as machine part manufacturing. Modern water jet cutters are controlled by CNC (Computer Numerical Control) systems running G-code to position the water jet nozzle and increase accuracy. Important benefits of waterjet cutting with an abrasive substance include the ability to cut metals, plastics, foam, composites, and more without increasing the material surface temperature and compromising the internal structure of the material (no Heat Affected one, or HAZ); the ability to cut sharp corners, holes, and complex shapes with small inner radii; fast turnaround rates; and minimal material waste thanks to the precise cutting and the narrowness of the nozzle.
//           </Typography>
//           <Typography className="mt-2">
//             Our custom water cutting service offers a cost-effective and on-demand solution for your manufacturing needs. X's sheet cutting and sheet metal cutting services range from low-volume prototypes to high-volume production runs. X also offers a laser cutting service and a plasma cutting service.
//           </Typography>
//           <Typography className="mt-2">
//             You can get an instant quote from a 3D CAD file or DXF file in our Instant Quoting Engine.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Waterjet Cutting Materials
//           </Typography>
//           <Typography className="mt-2">
//             X offers a comprehensive selection of waterjet materials in various thicknesses for cutting.
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Metals alloys, up to 1" thick</li>
//             <li>Mechanical plastic</li>
//             <li>Acrylic (Plexiglass)</li>
//             <li>Foam</li>
//             <li>Rubber and Gasketing</li>
//             <li>Wood and MDF</li>
//             <li>Carbon Fiber Composite</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Advantages of Waterjet Cutting
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li><strong>Durability:</strong> Similar to CNC machining, sheet metal processes produce highly durable parts well-suited for both functional prototypes and end-use production.</li>
//             <li><strong>Scalability:</strong> All sheet metal parts are built on-demand and with lower setup costs compared to CNC Machining. Depending on your needs, order as little as a single prototype up to 10,000 production parts.</li>
//             <li><strong>Rapid Turnaround:</strong> Combining the latest cutting, bending and punching with automated technologies, X provides instant sheet quotes and completed parts in as little 12 business days.</li>
//             <li><strong>Material Selection:</strong> Choose from a variety of sheet metals across a wide range of strength, conductivity, weight, and corrosion-resistance.</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Waterjet Cutter General Tolerances
//           </Typography>
//           <Table className="mt-2">
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Description</TableHead>
//                 <TableHead>General Tolerance</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <TableRow>
//                 <TableCell>Distance Dimensions</TableCell>
//                 <TableCell>For full details on tolerances offered by X's sheet cutting service, including edge to edge tolerance and taper, please consult our manufacturing standards.</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Thickness Dimension</TableCell>
//                 <TableCell>Thickness tolerances are determined by the material blank.</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Minimum Recommend Part Size</TableCell>
//                 <TableCell>3.000"</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Minimum Feature Size</TableCell>
//                 <TableCell>2X material thickness with a minimum of 0.125"</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Kerf (slit size)</TableCell>
//                 <TableCell>Approximately 0.062"</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Edge Condition</TableCell>
//                 <TableCell>Waterjet parts will have a vertical striation on the edges and may show a slight taper.</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//           <Typography variant="h3" className="mt-4">
//             Overview: What is Waterjet?
//           </Typography>
//           <Typography className="mt-2"><strong>The Basics Of Waterjets</strong></Typography>
//           <Typography className="mt-2">
//             A waterjet cutter, also called a waterjet, is an industrial cutting device used for the fabrication of flat-cut parts. Using a nozzle to focus water into a high-pressure stream, a waterjet can be used to cut semi-soft materials like rubber, foam, or wood. Abrasive granular substances can be added to the jet in order to cut harder materials like aluminum and sheet metal.
//           </Typography>
//           <Typography className="mt-2"><strong>How Waterjets Work</strong></Typography>
//           <Typography className="mt-2">
//             A waterjet is connected to a high-pressure pump, which pushes water through specialized tubing and then expels it from the nozzle at a focused volume and a velocity of up to 900 m/sec. The perfect ratio of velocity and volume is what allows the waterjet to maintain its unique high-pressure cutting stream.
//           </Typography>
//           <Typography className="mt-2">
//             In the case of abrasive waterjet cutting, the abrasive substance (often garnet or aluminum oxide) is combined with the water in a chamber near the nozzle, and the mixture is then ejected in a thin water stream.
//           </Typography>
//           <Typography className="mt-2">
//             A waterjet is given great accuracy and repeatability by CNC technology, which is able to reliably manage the movement of the nozzle and water. Software and hardware in waterjet platforms can reduce taper for more vertical edges on thicker mater
//           </Typography>
//           <Typography className="mt-2"><strong>Why Use Waterjet Cutting For Your Parts?</strong></Typography>
//           <Typography className="mt-2">
//             Waterjet cutting does not warp or alter the structure of the material being cut, as a laser or more traditional cutting tool sometimes does. It is also is capable of very fine and complicated shapes. Additionally, a waterjet’s precision cuts do not require sanding or grinding, and it produces no byproducts that might harm human operators or the environment — unlike laser cutting and plasma cutting. The water can also be recycled, reducing waste and cost while increasing energy efficiency.
//           </Typography>
//           <Typography className="mt-2">
//             CNC waterjet cutters can be used on almost any material, and are easily adjusted from pure water cutting to abrasive water cutting. This makes them an adaptable tool for many industries.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Why Choose X for Waterjet Cutting?
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li><strong>Endless Options:</strong> Choose from millions of possible combinations of materials, finishes, tolerances, markings, and certifications for your order.</li>
//             <li><strong>Easy to Use:</strong> Get your parts delivered right to your door without the hassle of sourcing, project management, logistics, or shipping.</li>
//             <li><strong>Vetted Network:</strong> We are ISO 9001:2015, ISO 13485, IATF 16949:2016, and AS9100D certified. Only the top shops that apply to become Suppliers make it through our qualification process.</li>
//           </ul>
//         </CardContent>
//       </Card>

//       {/* Laser Tube Cutting (2.e) */}
//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle className="text-2xl">Laser Tube Cutting</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Typography variant="h3" className="text-xl">
//             Overview
//           </Typography>
//           <Typography className="mt-2">
//             Laser tube cutting is the process by which tube stock material is selectively cut to form various shapes, holes, designs, and/or channels using a controllable precision laser. The stock material (tube/pipe) is held in a controllable lathe, where the tube will rotate in line with the design specifications as the laser makes cuts. Laser tube cutting can create through-holes of any shape as small as the wall thickness of the material and is also often used to cut channels that allow for easy bending and welding of the tube for angled tubing.
//           </Typography>
//           <Typography className="mt-2">
//             X offers an extensive range of laser tube cutting services with instant online pricing, DFM, and lead times. Laser types utilized include fiber laser or CO2 lasers, depending upon the material and application, allowing for very tight tolerances and the ability to cut through wall thicknesses up to 1/2“. Using X’s online quote engine, it is simple to start a quote for your next laser tube cutting project, upload your 3D CAD, and select from our drop-downs to create your quote.
//           </Typography>
//           <Typography className="mt-2">
//             Our project managers and experts are here to assist you along the way with any questions or concerns, ensuring we meet your unique needs while providing a fast and easy manufacturing experience.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Sizes and Tolerances
//           </Typography>
//           <Typography className="mt-2">
//             Our laser tube cutting service can cut round, square, or rectangular tubes with a variety of sizes and wall thicknesses. Kerf sizes vary based on the specific material, laser type, laser power, and operation parameters but are overall much thinner than traditional cutting methods, reducing material waste.
//           </Typography>
//           <Typography className="mt-2">
//             Review X's Standard Tube Sizes for a comprehensive list of available tube stock.
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Minimum round outer diameter: .500"</li>
//             <li>Maximum round outer diameter: 6.000"</li>
//             <li>Minimum square or rectangle dimension: .500"</li>
//             <li>Maximum square or rectangle dimension: 6.000"</li>
//             <li>Minimum wall thickness: .035"</li>
//             <li>Maximum wall thickness: .500"</li>
//           </ul>
//           <Typography className="mt-2">
//             Tolerances are outlined in X's Manufacturing Standards for Tube Cutting
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li><strong>Cut Type:</strong> Normal-to-Surface</li>
//             <li><strong>Edge-to-Edge Tolerances:</strong> +/- .010” nominal on the inner face of the tube.</li>
//             <li><strong>Minimum feature size:</strong> Generally no larger than the tube thickness.</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Shapes and Materials
//           </Typography>
//           <Typography className="mt-2">
//             Laser tube cutting systems have settings for handling tubes of various shapes and profiles. These include round, square, and rectangular tubes.
//           </Typography>
//           <Typography className="mt-2">
//             The following materials are available for tube cutting.
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Stainless Steel: 304 and 316 Welded and Seamless</li>
//             <li>Aluminum 6061 Extruded and Drawn</li>
//             <li>Alloy Steel 4130 Seamless</li>
//             <li>Steel A513 DOM, HREW, and CREW</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Laser Tube Cutting Material Options
//           </Typography>
//           <Typography className="mt-2">
//             Standard Profile and Material Options for Laser Tube Cutting Services
//           </Typography>
//           <Table className="mt-2">
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Material</TableHead>
//                 <TableHead>Round Tube</TableHead>
//                 <TableHead>Rectangular Tube</TableHead>
//                 <TableHead>Square Tube</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <TableRow>
//                 <TableCell>Aluminum</TableCell>
//                 <TableCell>6061, Extruded • 6061, Drawn</TableCell>
//                 <TableCell>6061, Extruded</TableCell>
//                 <TableCell>6061, Extruded</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Stainless Steel</TableCell>
//                 <TableCell>SS 304, Welded • SS 304, Seamless • SS 316, Welded • SS 316, Seamless</TableCell>
//                 <TableCell>SS 304, Welded • SS 316, Welded</TableCell>
//                 <TableCell>SS 304, Welded • SS 316, Welded</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Alloy Steel</TableCell>
//                 <TableCell>Steel A513 Type 1, HREW • Steel A513 Type 2, CREW • Steel A513 Type 5, DOM • Steel 4130 (Chromoly), Seamless</TableCell>
//                 <TableCell>Steel A513 • Steel 4130 (Chromoly), Cold Drawn Seamless</TableCell>
//                 <TableCell>Steel A513 • Steel 4130 (Chromoly) Cold Drawn Seamless</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//           <Typography variant="h3" className="mt-4">
//             Types of Laser Tube Cutters
//           </Typography>
//           <Typography className="mt-2">
//             The main types of laser tube cutting machines vary based on application and laser type. Combination tube/flat sheet laser cutters are one of the most common machines used for laser tube cutting, but are generally used for smaller jobs and are multipurpose machines (i.e. they can also cut flat sheet parts). Self-contained laser tube cutters are dedicated tube cutting systems that are only specified for tube cutting applications, where they can work with nearly any tube shape (round, rectangular, octagonal, etc.) in long stock lengths (3+ feet or more).
//           </Typography>
//           <Typography className="mt-2">
//             Laser tube cutters can use fiber lasers or CO2 lasers based on the needs of a project. Fiber lasers are compatible with a variety of materials and are generally considered the most versatile laser type, while C02 lasers are designed to be an upgrade from plasma cutters, and are best for niche materials such as titanium due to their enhanced gas coverage over fiber lasers. Both laser types offer comparable power levels. In either case, both cutting processes are well suited for metal fabrication and can eliminate the need for secondary operations.
//           </Typography>
//           <Typography className="mt-2">
//             Lasers are specified based on their wattage, where a higher wattage offers deeper and more sustained cuts. Laser tube cutters are also specified based on the size of material they can handle (max sheet/tube size, max material weight), the assist gas required (nitrogen, CO2, etc,) the motor electrical requirements (3-phase VAC, etc.), repeatability, and other model-specific criteria. Some laser tube cutters come with built-in conveyors or stock handling machinery which automatically feeds the tube into the cutting portion of the system, providing semi-to-fully automated operation.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Advantages and Disadvantages
//           </Typography>
//           <Typography className="mt-2">
//             Here are the advantages of the laser tube cutting process:
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Semi-to-fully automated process with high throughput.</li>
//             <li>Low/no material wastage.</li>
//             <li>Offers highly complex, clean, and repeatable cuts.</li>
//             <li>Works with nearly every metal.</li>
//             <li>Most/nearly all tube stock up to 6" is accepted.</li>
//           </ul>
//           <Typography className="mt-2">
//             The disadvantages or limitations of laser tube cutting include the following:
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Some cut materials may show a small halo discoloration from the backsplash or overspray near the cut edges.</li>
//             <li>A small bump of material or a different edge condition may be present at the lead-in and lead-out in a cutting profile.</li>
//             <li>The process is generally reserved for thin-walled materials less than 0.500"-1.000" thick.</li>
//           </ul>
//         </CardContent>
//       </Card>

//       {/* Tube Bending (2.f) */}
//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle className="text-2xl">Tube Bending</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Typography variant="h3" className="text-xl">
//             Overview of Tube Bending
//           </Typography>
//           <Typography className="mt-2">
//             Tube bending consists of a series of manufacturing processes that alter the shape of a pipe or tube to create the desired geometry or features that meet specific requirements. In the process, tube stock is loaded into a bending machine which uses mechanical forces to push the tube against dies and rollers that cause the tube to conform to a shape. Tubes can be bent two-dimensionally where the openings remain on the same plane or in three dimensions where they sit on different planes. Multiple bends are allowed in CNC tube bending, reducing the need to weld or fabricate
//             a complex shape with elbow and straight tube sections.
//           </Typography>
//           <Typography className="mt-2">
//             X offers a full suite of custom tube bending services for your application with instant online quoting, DFM, and competitive lead times. Whether you are looking for standard rotary draw tube bending or highly precise mandrel tube bending, X offers different processes to meet your requirements for tube fabrication services in both low and high volumes. X also offers laser tube cutting services for parts that include cut features such as holes, slots, and more. Material choices for our tube bending services include stainless steel, aluminum, and alloy steel.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Tube Bending Sizes and Tolerances
//           </Typography>
//           <Typography className="mt-2">
//             Our tube bending service is built around typical industry standards to ensure a smooth manufacturing experience. X can achieve tighter tolerances after a manual review by one of our project engineers. In the list below, you'll find the standards and tolerances specific to our drawn or mandrel bending techniques for round profiles:
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Minimum bendable tube diameter: .250"</li>
//             <li>Maximum bendable tube diameter: 2.000"</li>
//             <li>Minimum bendable tube wall thickness: .035"</li>
//             <li>Maximum bendable tube wall thickness: .188"</li>
//             <li>Overall tube sheath envelope tolerance is +/- 0.125” typical</li>
//             <li>Linear dimensions (excluding locations to bends) are +/- 0.010"</li>
//             <li>Simple, single planar bends are +/- 0.010”</li>
//             <li>Multiple surface or multi-planar bends are +/- 0.030”</li>
//             <li>Angularity: +/- 2 degrees</li>
//             <li>Tube center line radius tolerance is +/- 0.125” typical</li>
//             <li>Tube end diameter tolerancing is +/- 0.020”</li>
//             <li>Cut edges will be normal-to-surface as a default. Normal-to-edge cuts will require agreement at the time of order.</li>
//           </ul>
//           <Typography className="mt-2">
//             View more standards on our manufacturing standards page.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Tube Bending Material Options
//           </Typography>
//           <Typography className="mt-2">
//             X's tube bending services are for creating custom round tubes in a variety of shapes and materials:
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li><strong>Stainless Steel 304 and 316 (Welded or Seamless):</strong> are resistant to rust and corrosion, making them ideal for outdoor, wet, or salty environments. 316 has slightly better corrosion resistance than 304.</li>
//             <li><strong>Aluminum 6061 (Extruded or Drawn):</strong> is a stiff, lightweight tube that won't rust. It it heavily used in lightweight frames and aircraft parts.</li>
//             <li><strong>Alloy Steel 4130 (Seamless):</strong> is an extremely strong and tough tube used in race cars and aerospace structures. Seamless reduces failure points in this material making ideal for critical applications.</li>
//             <li><strong>Steel A513 (Type 1 HREW, Type 2 CREW, or Type 5 DOM):</strong> is a go-to for general use. DOM is smooth and strong for car parts; HREW is less expensive and good for simple structures; CREW is cold-formed for better strength and finish.</li>
//           </ul>
//           <Typography className="mt-2">
//             The table below depicts the range of tube sizes available for these services. Learn more on our standard tube sizes resource page.
//           </Typography>
//           <Table className="mt-2">
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Material</TableHead>
//                 <TableHead>Minimum O.D.</TableHead>
//                 <TableHead>Maximum O.D.</TableHead>
//                 <TableHead>Minimum wall thickness</TableHead>
//                 <TableHead>Maximum wall thickness</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <TableRow>
//                 <TableCell>Stainless Steel 304</TableCell>
//                 <TableCell>.250"</TableCell>
//                 <TableCell>2.000"</TableCell>
//                 <TableCell>.035"</TableCell>
//                 <TableCell>.188"</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Stainless Steel 316</TableCell>
//                 <TableCell>.250"</TableCell>
//                 <TableCell>2.000"</TableCell>
//                 <TableCell>.035"</TableCell>
//                 <TableCell>.120"</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Aluminum 6061</TableCell>
//                 <TableCell>.250"</TableCell>
//                 <TableCell>2.000"</TableCell>
//                 <TableCell>.035"</TableCell>
//                 <TableCell>.188"</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Steel 4130 (Chromoly)</TableCell>
//                 <TableCell>.375"</TableCell>
//                 <TableCell>2.000"</TableCell>
//                 <TableCell>.035"</TableCell>
//                 <TableCell>.188"</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Steel A513 Type 5, DOM</TableCell>
//                 <TableCell>.250"</TableCell>
//                 <TableCell>2.000"</TableCell>
//                 <TableCell>.035"</TableCell>
//                 <TableCell>.188"</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Steel A513 Type 1, HREW</TableCell>
//                 <TableCell>1.000"</TableCell>
//                 <TableCell>2.000"</TableCell>
//                 <TableCell>.065"</TableCell>
//                 <TableCell>.120"</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Steel A513 Type 2, CREW</TableCell>
//                 <TableCell>.500"</TableCell>
//                 <TableCell>2.000"</TableCell>
//                 <TableCell>.035"</TableCell>
//                 <TableCell>.065"</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//           <Typography className="mt-2">
//             See additional details on our standard tube sizes page.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Tube Glossary
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li><strong>Welded:</strong> Welded tube is made by rolling a flat piece of metal into a tube shape and then welding the edges together.</li>
//             <li><strong>Seamless:</strong> Seamless tube is made without any welding. It's formed by heating and stretching a solid piece of metal until it becomes a tube.</li>
//             <li><strong>Extruded:</strong> Extruded tube is made by pushing heated metal through a shaped opening. This process can create complex shapes and is commonly used for aluminum.</li>
//             <li><strong>Drawn:</strong> Drawn tube is made by pulling a tube through a smaller die, making it more precise and stronger. Extruded and welded tube stock can be drawn.</li>
//             <li><strong>DOM:</strong> Drawn Over Mandrel is like drawn where welded tube is drawn over a mandrel after welding to improve strength and finish.</li>
//             <li><strong>HREW:</strong> Hot Rolled Electric-Welded tube is made from hot-rolled steel. This is a less expensive tube used for general purposes.</li>
//             <li><strong>CREW:</strong> Cold Rolled Electric-Welded is similar to HREW but made from cold-rolled steel giving it a slightly better surface compared to HREW.</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Design Tips for Tube Bending
//           </Typography>
//           <Typography className="mt-2">
//             When it comes to tube bending, there are a few things you can do when designing your parts to ensure a smoother quoting and manufacturing experience. We've compiled a few tube bending design for manufacturing (DFM) tips below. For additional tips, check out our top tube bending design tips article.
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>For multi-bend parts, maintain a consistent center line radius (CLR)</li>
//             <li>We recommend a bend radius to tube diameter ratio of 2:1 to 5:1, no greater than 6", using the center line radius (CLR)</li>
//             <li>Bend distances should be at least 2X the outer diameter for tubes less than 1", 3X for 1"-2", and 4X for tubing with outer diameters greater than 2"</li>
//             <li>Assume normal-to-surface cutting for cut features and end conditions.</li>
//           </ul>
//           <Typography className="mt-2"><strong>Recommended Center Line Radius to Outer Diameter</strong></Typography>
//           <Typography className="mt-2">
//             Beyond the bend distance guidelines, X has found the following tube diameter (OD) to center line radius (CLR) combinations more readily available across a broad network.
//           </Typography>
//           <Typography className="mt-2">
//             The list below shows a tube OD in decimals or fractions as the related CLR to help you design your project. It is recommended that single tubes contain only one CLR for ease of manufacturability.
//           </Typography>
//           <Typography className="mt-2">OD to CLR Recommended Combinations:</Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>.188" (3/16") OD: CLR of .25", .5", .75", 1", 3.5", or 4"</li>
//             <li>.25" (1/4") OD: CLR of .25", .5", .75", 1", or 1.25"</li>
//             <li>.375" (3/8") OD: CLR of .75", 1", 1.25", 1.5", 2", or 3"</li>
//             <li>.5" (1/2") OD: CLR of .75", 1", 1.25", 1.5", 1.75", 2", 2.5", 3", or 3.5"</li>
//             <li>.625" (5/8") OD: CLR of 1", 1.25", 1.5", 1.75", 2", 2.5", 3.5", or 4"</li>
//             <li>.75" (3/4") OD: CLR of .75", 1", 1.25", 1.5", 1.75", 2", 3", 3.5", or 4"</li>
//             <li>.875" (7/8") OD: CLR of 1.5", 2", or 2.5"</li>
//             <li>1" OD: CLR of 1", 1.5", 2", 2.5", 3", 3.5", or 4"</li>
//             <li>1.25" (1 1/4") OD: CLR of 1.25", 1.5", 2", 2.5", 3", 3.5", or 4"</li>
//             <li>1.5" (1 1/2") OD: CLR of 1.5", 1.75", 2", 2.5", or 3"</li>
//             <li>1.75" (1 3/4") OD: CLR of 2.5", 3", 3.5", or 4"</li>
//             <li>2" OD: CLR of 2", 2.5", 3", or 4"</li>
//           </ul>
//           <Typography className="mt-2">(Above: Center Line Radius, CLR)</Typography>
//           <Typography variant="h3" className="mt-4">
//             Capabilities
//           </Typography>
//           <Typography className="mt-2">
//             X offers a full range of tube bending capabilities and pipe bending services. These services include:
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li><strong>Mandrel Tube Bending:</strong> This method (also known as mandrel bending) is similar to rotary draw bending; however, it fully retains the internal tube profile throughout the bend. This process is accomplished using internal support known as a mandrel that preserves the structure of the tube during bending, ensuring that little to no unwanted deformation occurs. The mandrel tube bender has a long bed with a mandrel rod, which holds the mandrel right at the tangent point of the bend. The tube slides over the mandrel, the machine clamps down on it, and the tube is bent while the mandrel remains stationary. Mandrel tube bending is especially useful for thin wall thicknesses, large diameters, and tight radii, where collapsing during bending is common.</li>
//             <li><strong>Rotary Draw Tube Bending:</strong> by far the most popular method, rotary draw benders use a clamping die, radius (or bend) die, and pressure die to hold the tube to form during the entire bending process. The tube is clamped to the bend die and is “drawn” around the other dies via hydraulic or electrical power, resulting in a highly accurate and repeatable bend. Rotary draw tube bending processes can be manual, semi-manual, or CNC-operated. Computer-guided rotary draw bending allows unmatched precision (especially for high-volume applications). However, setup time can be longer, and each unique bend requires tooling to be created.</li>
//             <li><strong>Roll Tube Bending:</strong> In roll tube bending (also known as roll bending), three dies (or rollers) are used to lock down the tube, where a piston presses down on the tube, and the operator “rolls” the pipe through the machine, causing a gradual bend (also known as an arc). The tube is reset into the dies, the piston is lowered further, and the process is repeated until the desired profile is achieved. This method is often a manually-powered process; however, it can also be motorized for additional power input. Roll tube bending offers variable bends and angles without additional tooling and is ideal for large, gradual bends, but its accuracy and repeatability are limited.</li>
//             <li><strong>Compression Bending:</strong> With compression bending, the tube or pipe is clamped in place, and force is directly applied, which creates the bend. This process is primarily utilized for single bend applications. No internal support is used with compression bending, which typically produces an oval cross-section and may result in crushing of the bend. Bends generally are limited to angles of 120 degrees or less.</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Industries Served
//           </Typography>
//           <Typography className="mt-2">
//             Tube bending can be utilized across a diverse set of industries. From architectural and lighting fixtures in buildings to vehicle exhaust systems. Below is a list of just some of the notable sectors our tube fabrication and bending services are an ideal fit for:
//           </Typography>
//           <ul className="list-disc list-inside mt-2">
//             <li>Aerospace & Defense</li>
//             <li>Automotive</li>
//             <li>Architectural & Lighting</li>
//             <li>Consumer Goods</li>
//             <li>Oil & Gas</li>
//             <li>Marine & Shipbuilding</li>
//             <li>Construction</li>
//           </ul>
//         </CardContent>
//       </Card>

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
import {sheetMetalStampingData}from "@/data/sheetMetalData"

// Dynamic Component
function SheetMetalStamping() {
  return (
    <div className="p-10">
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
                {subsection.content && subsection.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="mt-2">
                    {typeof item === 'string' ? (
                      <Typography>{item}</Typography>
                    ) : (
                      <>
                        {item.subheading && <Typography className="font-bold">{item.subheading}</Typography>}
                        {item.text && <Typography>{item.text}</Typography>}
                        {item.example && <Typography className="italic">{item.example}</Typography>}
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
                                <Typography className="inline">{listItem}</Typography>
                              </li>
                            ))}
                          </ul>
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
                          {typeof listItem === 'string' ? listItem : (
                            <>
                              <strong>{listItem.name}</strong>{listItem.description && `: ${listItem.description}`}
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
                              {listItem.additional && <Typography className="block mt-1">{listItem.additional}</Typography>}
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
                {subsection.button && (
                  <div className="mt-4 flex justify-center">
                    <Button asChild>
                      <a href={subsection.button.href}>{subsection.button.text}</a>
                    </Button>
                  </div>
                )}
                {(subsection.additionalContent || subsection.additionalContent2) && (
                  <>
                    {subsection.additionalContent && subsection.additionalContent.map((addContent, addIndex) => (
                      <Typography key={addIndex} className="mt-2">
                        {typeof addContent === 'string' ? addContent : (
                          <>
                            {addContent.subheading && <Typography className="font-bold">{addContent.subheading}</Typography>}
                            {addContent.text && <Typography>{addContent.text}</Typography>}
                            {addContent.additional && <Typography>{addContent.additional}</Typography>}
                          </>
                        )}
                      </Typography>
                    ))}
                    {subsection.additionalContent2 && subsection.additionalContent2.map((addContent, addIndex) => (
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