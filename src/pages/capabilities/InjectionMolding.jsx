// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import Typography from "@/components/custom/Typography";

// function InjectionMolding() {
//   return (
//     <div className="p-10">
//       {/* Main Header */}
//       <Typography variant="h1" className="text-center">
//         Injection Molding Services
//       </Typography>
//       <Typography variant="lead" className="text-center mt-4">
//         X provides a comprehensive range of injection molding services, delivering high-quality plastic parts from prototyping to production across various industries.
//       </Typography>
//       <div className="mt-6 flex justify-center">
//         <Button size="lg">Get a Quote</Button>
//       </div>

//       <Separator className="my-8" />

//       {/* Plastic Injection Moulding (3.a) */}
//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle className="text-2xl">Plastic Injection Moulding</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Typography variant="h3" className="text-xl">
//             What Is Injection Molding?
//           </Typography>
//           <Typography className="mt-2">
//             Injection molding is the most cost-effective way to make a plastic part at scale. The injection molding process involves injecting molten plastic into a mold tool, then ejecting the solidified part. This process quickly repeats hundreds or thousands of times, amortizing the cost of the mold tool and driving down the cost of each unit to a few dollars or less. Since the injection molding process uses the same mold tool for each part, it offers consistent quality across every part. Injection molding also has the highest variety of materials, colors, cosmetics, polishes, and surface textures when compared to CNC machining or even 3D printing.
//           </Typography>
//           <Typography className="mt-2">
//             X's custom plastic mold service is a service providing on-demand prototype and production molding. We take a customer-first approach which means we find the right injection molding supplier within our manufacturing supplier network to mold the parts the way you need them—without design compromises—at the right price point. We offer expert consultation on each injection mold quote and project managers on every order to move your parts from design to production. Our team has experience in every industry, especially medical injection molding and liquid silicone rubber molding. First-time buyers receive $500 off their first mold with X. We offer both domestic and China injection molding options, as well as ITAR injection molding.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Injection Molding Capabilities
//           </Typography>
//           <Table className="mt-2">
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Service</TableHead>
//                 <TableHead>Details</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <TableRow>
//                 <TableCell>Lead Time</TableCell>
//                 <TableCell>Starts at 5 business days, including fast quote responses with design-for-manufacturing (DFM) feedback</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Production Options</TableCell>
//                 <TableCell>Domestic and international</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Materials</TableCell>
//                 <TableCell>Most plastics, including custom sourcing and matching; see materials list below</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Machines Available</TableCell>
//                 <TableCell>Single, multi-cavity, and family molds; 50 to 1,100+ press tonnage; side actions including hand-loaded cores.</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Inspection and Certification Options</TableCell>
//                 <TableCell>Includes FAI and PPAP. ISO 9001, AS9100, ISO 13485, UL, ITAR, and ISO 7 and 8 Medical Clean Room molding.</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Tool Ownership</TableCell>
//                 <TableCell>Customer-owned with mold maintenance</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Mold Cavity Tolerances</TableCell>
//                 <TableCell>+/- 0.005" when machining the mold and an additional +/- 0.002" per inch when calculating for shrink rate</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Part to Part Repeatability</TableCell>
//                 <TableCell>+/- 0.004" or less</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Critical Feature Tolerances</TableCell>
//                 <TableCell>Tighter tolerances can be requested and may increase the cost of tooling because of additional sampling and grooming. X will mill to a steel-safe condition on critical features.</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Available Mold Types</TableCell>
//                 <TableCell>Steel and aluminum; Production grades range from Class 105, a prototype mold, to Class 101, an extremely high production mold. X typically produces Class 104, 103, and 102 tools.</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//           <Typography variant="h3" className="mt-4">
//             X Injection Molding Mold Classes
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What is a SPI Mold Classifcation?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             Standard injection mold tooling is defined by classes from Class 105 (prototype) to Class 101 (high volume production). These mold classes help manage expectations for both customers and suppliers on the overall tool requirements and scope.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What is a Class 105 Mold?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             Under 500 cycles. Prototype only. This mold will be constructed in the least expensive manner possible to produce a minimal quantity of prototype parts. Class 105 molds are also known as Class V tools.
//           </Typography>
//           <Typography className="mt-2">
//             Example: a one-and-done market test of 100 molded units.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What is a Class 104 Mold?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             Under 100,000 cycles. Low production mold. Use only for limited production, preferably with non-abrasive materials. Low to moderate price range. Class 104 molds are also known as Class IV tools.
//           </Typography>
//           <Typography className="mt-2">
//             Example: Aluminum or MUD tooling, SPI B-3 finish, hand-loaded cores, and limited re-runs.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What is a Class 103 Mold?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             Under 500,000 cycles. Medium production mold. This is a very popular mold for low to medium-production needs. Most common price range. Also known as a Class III tool.
//           </Typography>
//           <Typography className="mt-2">
//             Example: Aluminum or steel tooling, automated lifts or slides, multiple re-runs with batches between 1,000-5,000 units.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What is a Class 102 Mold?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             Medium to high production tooling, suitable for abrasive materials or parts requiring close tolerance. This is a high-quality, reasonably high-priced mold. Class 102 Molds are also known as Class II tools.
//           </Typography>
//           <Typography className="mt-2">
//             Example: Steel tooling with an SPI A-2 finish, automated slides, scheduled production cycles.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What is a Class 101 Mold?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             Over 1,000,000 cycles. They are engineered for extremely high production. This is the highest-priced mold and is made with only the highest-quality materials. Class 101 molds are also known as Class I tools.
//           </Typography>
//           <Typography className="mt-2">
//             Example: Multiple-cavity steel tooling with full automation and overnight production work centers for dedicated part manufacturing.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             How Custom Plastic Injection Molding Works
//           </Typography>
//           <Typography className="mt-2">
//             The plastic injection molding process requires an injection molding machine, raw plastic material, and a machined mold. The raw plastic material is first melted in the injection unit and is then injected into the mold—most often machined from steel or aluminum—where it cools and solidifies into the final plastic part.
//           </Typography>
//           <Typography className="mt-2">
//             At X, we first review your plastic injection molding online quote, then consult with you to ensure your specifications, lead time, and price fit your project needs. We then use your 3D part data to CNC machine a high-quality injection mold. Once the molded parts are created, X sends ten part samples (T1) for approval. Once the mold is refined and approved, X begins production. X molds a variety of products and parts from the smallest medical insert up to large automotive, aerospace, and defense parts.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Custom Plastic Injection Molding Materials
//           </Typography>
//           <Typography className="mt-2"><strong>Rigid Plastic Materials:</strong></Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>ABS (acrylonitrile butadiene styrene):</strong> High-strength general-purpose engineering plastic, used for many commercial products.</li>
//             <li><strong>ASA (acrylonitrile styrene acrylate):</strong> A material very similar to ABS with higher resistance to fading and better suited for outdoor use.</li>
//             <li><strong>CA (cellulose acetate):</strong> Typically used in eyeglasses and film, CA is a flexible clear material that can be used in food contact.</li>
//             <li><strong>HDPE (high-density polyethylene):</strong> Excellent strength-to-weight ratio and chemical resistance. It is often used for fuel tanks, connector insulators, and food containers. HDPE is also used in outdoor equipment like playgrounds.</li>
//             <li><strong>LCP (liquid crystal polymer):</strong> LCP has mechanics even at elevated temperatures as well as low dielectric constants. This material provides exceptional features for micromolding and thin walled components. LCP is popular for electrical connectors and interconnects as well as medical devices.</li>
//             <li><strong>LDPE (low-density polyethylene):</strong> A flexible and tough material with lower density versus HDPE. LDPE does not react to acids, bases, or alcohols. Useful for trays, snap lids, and general-purpose containers.</li>
//             <li><strong>PA 6 (polyamide 6, nylon 6):</strong> Offers increased mechanical strength, rigidity, good stability under heat, and/or chemical resistance.</li>
//             <li><strong>PA 6/6 (polyamide 6/6, nylon 6/6):</strong> Offers increased mechanical strength, rigidity, good stability under heat, and/or chemical resistance.</li>
//             <li><strong>PARA (polyarylamide):</strong> Often combined with infills such as glass or mineral fibers, PARA creates rigid parts with low creep and a slower rate of water absorption than nylon (PA). PARA is excellent for structural components in handheld and medical electronics.</li>
//             <li><strong>PBT (polybutylene terephthalate, Valox):</strong> A common electronic insulator with a polyester base. Highly used in automotive as a longer-wear alternative to nylon.</li>
//             <li><strong>PBT-PET (polybutylene terephthalate-polyethylene terephthalate):</strong> A compounded blend of PBT and PET.</li>
//             <li><strong>PC (polycarbonate):</strong> A clear or colored, lightweight, glass-like plastic that is heavily used across multiple industries. PC is impact resistant, holds great feature detail, and can be used for safety equipment, lenses, electronic devices, and much more.</li>
//             <li><strong>PC-ABS (polycarbonate-acrylonitrile butadiene styrene):</strong> The best of both PC and ABS. Higher-strength engineering thermoplastic with slightly more flexibility than standard polycarbonate.</li>
//             <li><strong>PC-PBT (polycarbonate-polybutylene terephthalate, Xenoy):</strong> A tough and rigid material resistant to lubricants, solvents, and cleaning agents. Very common in electronic enclosures.</li>
//             <li><strong>PC-PET (polycarbonate-polyethylene terephthalate):</strong> A blend of PC and PET provides tough and chemically resistant results and can be used as an alternate to PC-ABS. It endures harsh solvents and cleaners, making it excellent for sports equipment and healthcare applications.</li>
//             <li><strong>PCT (polycyclohexylenedimethylene terephthalate):</strong> A thermoplastic polyester that typically outperforms PET due to lower moisture absorption and better environmental stability. PCT is often used for connectors and switches.</li>
//             <li><strong>PE (polyethylene):</strong> One of the most common plastics used in the world, PE has high ductility, abrasion resistance, and chemical resistance. PE is often described by its molecular weight, such as UHMW PE (ultra-high molecular weight), LDPE (low density), or HDPE (high density). PE is used in packaging, tubing, films, bottles, and more.</li>
//             <li><strong>PEEK (polyether ether ketone):</strong> Offering excellent tensile strength that surpasses most plastics, PEEK is often used as a lightweight substitute for metal parts in high-temperature, high-stress applications. PEEK resists chemicals, wear, and moisture.</li>
//             <li><strong>PEI (polyetherimide, Ultem):</strong> Known best for its extremely high heat and flame resistance, PEI is used for many medical applications and is more affordable than PEEK.</li>
//             <li><strong>PE-PP (polyethylene-polypropylene):</strong> A resin blend of the polyolefin’s polypropylene and polyethylene.</li>
//             <li><strong>PE-PS (polyethylene-polystyrene):</strong> A resin blend of the polyethylene and polystyrene.</li>
//             <li><strong>PES (polyethersulfone):</strong> A rigid, transparent plastic that is chemically inert, biocompatible, and sterilizable. PES is suitable for food-contact devices such as coffee machine components as well as aerospace and automotive where chemical exposure is high.</li>
//             <li><strong>PET (polyethylene terephthalate, Rynite):</strong> Also abbreviated PETE, this is a clear, strong, and lightweight PE resin heavily used in food packaging, soda bottles, jars, and more. The material is food-safe. PET is recyclable with a resin code of 1.</li>
//             <li><strong>PLA (polylactic acid):</strong> A biodegradable and renewable plastic. PLA has a relatively low glass transition temperature and is common in short-use applications.</li>
//             <li><strong>PMMA (polymethyl methacrylate, acrylic):</strong> A clear glass-like plastic. Good wear and tear properties. Great for outdoor use.</li>
//             <li><strong>POM (acetal polyoxymethylene, Delrin):</strong> Good moisture resistance, high wear-resistance, and low friction.</li>
//             <li><strong>PP (polypropylene):</strong> Polypropylene has excellent electrical properties and little or no moisture absorption. It carries light loads for a long period in varying temperatures. It can be molded into parts requiring chemical or corrosion resistance.</li>
//             <li><strong>PPA (polyphthalamide):</strong> A subset of nylons (polyamide) that typically exhibit a higher melting point and lower moisture absorption. PPA is typically used in automotive and industrial applications because it can withstand harsh chemicals. PPA is good for fuel and fluid manifolds and headlight housings.</li>
//             <li><strong>PPS (polyphenylene sulfide, Ryton):</strong> A high-performance thermoplastic with extreme resistance to solvents.</li>
//             <li><strong>PS (polystyrene):</strong> A clear, hard, and brittle material widely used for food packaging, clamshell containers, and even disposable cutlery.</li>
//             <li><strong>PS-PPE (polystyrene-polyphenyl ethers, Noryl):</strong> Exhibiting high heat and flame resistance, PPE-PS has high stiffness and tensile strength even at elevated temperatures.</li>
//             <li><strong>PSU (polysulfone, Udel):</strong> A rigid, stiff, and transparent plastic which is a higher-performance alternative to polycarbonate.</li>
//             <li><strong>PVC (polyvinyl chloride (Shore D)):</strong> A rigid, general-use plastic that is common in plumbing, non-food packaging, and trimming.</li>
//             <li><strong>PVDF (polyvinylidene fluoride, Kynar):</strong> A chemically inert, high-temperature material. Due to its low friction, PVDF is used in plumbing parts, bearings, chemical handling, electrical wire insulation, and tubing.</li>
//             <li><strong>SAN (styrene acrylonitrile):</strong> A polystyrene that is heat resistant and transparent. Due to its relationship with polystyrene, SAN is low cost and has enhanced clarity and shine. SAN is common in household goods, door handles, and kitchenware.</li>
//             <li><strong>TPO (thermoplastic polyolefin):</strong> A flexible plastic with good chemical resistance but lower temperature resistance compared to PP.</li>
//             <li><strong>TPU (thermoplastic polyurethane (Shore D)):</strong> A tough, highly abrasion-resistant resin that bridges the gap between rubbers and plastics. TPUs can be formulated to be rigid or elastomeric. TPU exhibits a high flex before break and is ideal for wheels and door panels.</li>
//           </ul>
//           <Typography className="mt-2"><strong>Elastomer and Rubber Molded Materials:</strong></Typography>
//           <Typography className="mt-2">
//             Manufacturing elastomeric parts can be accomplished through injection molding, transfer molding, or compression molding. When getting a quote through X, our team can help you decide the best method depending on the part geometry, estimated annual volume, and the type of material required.
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>EPDM (ethylene propylene diene monomer rubber (Viton)):</strong> One of the highest performing rubber elastomers with high heat resistance, chemical resistance, and moisture sealing properties. EPDM is commonly found in automotive seals, gaskets, O-rings, and electrical insulators.</li>
//             <li><strong>PEBA (polyether block amide):</strong> A soft, flexible, plastic or elastomer used for medical devices such as catheters. PEBA foams are used for padding, shoe insoles, and sports equipment. PEBA is resistant to moisture and UV exposure.</li>
//             <li><strong>PVC (polyvinyl chloride (Shore A)):</strong> A soft rubber-like, general use elastomer, that is common in outdoor products, protective films, and mats. Shore A rubber-like PVC requires plasticizers to improve its flexibility from its typical rigid state. PVC is flame retardant due to self-extinguishing properties.</li>
//             <li><strong>TPE (thermoplastic elastomer):</strong> A broad class of elastomers that behave like a thermoset with high flex and elasticity but process like a thermoplastic through molding. TPE is an umbrella term for many unique elastomer classes.</li>
//             <li><strong>TPU (thermoplastic polyurethane (Shore A)):</strong> A tough, highly abrasion-resistant elastomer that bridges the gap between rubbers and plastics. TPUs can be formulated to be rigid or elastomeric. TPU exhibits a high flex before break and is ideal for flexible tires, skateboard wheels, and weatherproof gaskets.</li>
//             <li><strong>TPV (thermoplastics elastomer, vulcanized rubber (Santoprene)):</strong> An excellent elastomer with high versatility due to temperature resistance, compression, and elasticity.</li>
//             <li><strong>LSR (liquid silicone rubber):</strong> Silicones are versatile rubber materials offering food and biocompatibility, extreme heat resistance, and excellent flexibility. LSR is used for medical devices, automotive, aerospace, and consumer products. Liquid silicone rubber molding is a specialized process different from traditional injection molding.</li>
//           </ul>
//           <Typography className="mt-2">
//             Several injection molding, liquid silicone molding, and compression molding options are available for an online quote. If you do not see the material stock you are looking for, please choose “Other" under the material drop-down on your quote page and submit for an expert engineering review once you have specified features, tolerances, inspection needs, and quantities required.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Custom Injection Mold Finishes
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Standard Finish:</strong> Moldmaker's choice of finish. Typically SPI B-2, depending on geometry and drafts. Interior, non-cosmetic faces, are typically as-machined.</li>
//             <li><strong>SPI Finishes:</strong> Range of Society of Plastics Industry (SPI) finishes from Grade 3 diamond / high polish to 320 stone low polish. Finishes include: SPI A-1, SPI A-2, SPI A-3, SPI B-1, SPI B-2, SPI B-3, SPI C-1, SPI C-2, SPI C-3, SPI D-1, SPI D-2, and SPI D-3</li>
//             <li><strong>MoldTech Finishes (Mold Texturing):</strong> Range of finishes including matte, swirls, lines, and patterns. Our most common texture finishes include: MoldTech MT11010, MoldTech MT11020, and MoldTech MT11030. Other textured finishes can be added by request.</li>
//             <li><strong>Other Textures - VDI:</strong> VDI 3400 Surface Finish (commonly known as VDI surface finish) refers to the mold texture standard set by Verein Deutscher Ingenieure (VDI), the Society of German Engineers. This is mainly processed by EDM machining, producing fine to coarse matte finishes.</li>
//             <li><strong>As Molded:</strong> No secondary polishing or grinding. Part will show tooling marks.</li>
//             <li><strong>Threaded Inserts:</strong> We can install most commonly used standard inserts in UNF and metric sizes.</li>
//             <li><strong>Pad Printing:</strong> Transfer a 2D image onto a 3D part. All images are subject to review.</li>
//             <li><strong>Laser Engraving:</strong> Engrave part numbers, logos, and more onto your parts.</li>
//             <li><strong>Assembly:</strong> X has the ability to assemble and label injection molded parts. Discuss your needs with your salesperson.</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Custom Injection Moldings Design Guidelines
//           </Typography>
//           <Table className="mt-2">
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Feature</TableHead>
//                 <TableHead>Tip</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <TableRow>
//                 <TableCell>Undercuts</TableCell>
//                 <TableCell>Reduce undercuts, which will increase the complexity and cost of the tool ejection mechanisms, by adding in pass-thru coring.</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Wall Thickness</TableCell>
//                 <TableCell>Prevent wall sink and voids by maintaining an even wall thickness. Thinner walls reduce cycle time and reduce costs.</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Drafts</TableCell>
//                 <TableCell>Ensure parts are designed with a minimum draft angle of 0.5°, or up to 5°, for faces with medium textures.</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Ribs/Gussets</TableCell>
//                 <TableCell>Ribs should be 40-60% the thickness of outer walls and should still maintain draft.</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Bosses</TableCell>
//                 <TableCell>Bosses should be designed at a depth of 30% the wall thickness and with a 30% edge groove. Attach them to side walls or ribs for structural integrity.</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//           <Typography variant="h3" className="mt-4">
//             Applications and Advantages of Injection Molding
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Rapid Prototyping:</strong> Low-cost tooling allows for rapid injection molding to be produced in as fast as 10 business days at affordable prices.</li>
//             <li><strong>Production Parts:</strong> Injection molding can be the ideal process for low-volume production molding of 250 units to mass production molding of over 1,000,000 units. Plastic injection parts will generally perform better than the same part CNC machined or 3D printed using the same material. Careful selection of the resins allow for a wide range of properties and solvent compatibility. Molds are CNC machined to high precision, high tolerances and are able to produce thousands of identical parts with very small and intricate details.</li>
//             <li><strong>Range of Industries and Certifications:</strong> We offer ISO 9001, AS9100, ISO 13485, UL, ITAR, and ISO 7 and 8 Medical Clean Room molding.</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Injection Molding FAQs
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What industries use injection molding?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             Injection molding is used across a wide range of industries including aerospace, medical devices, consumer goods, energy, electronics, automotive, robotics, toys, and more.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What is the difference between molding and printing?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             With molding, plastic or metal parts are created inside a mold. They are then removed from the mold as fully-formed parts. 3D printing, on the other hand, is an additive manufacturing process, meaning that the part is built layer-by-layer using processes like deposition or sintering.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What is the process after ordering?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             After receiving the order, the statement of work is reviewed by one of our manufacturing engineers. A case manager is assigned, and an appropriate manufacturing supplier is identified. A comprehensive DFM/PEG report is created and provided for approval. Upon approval, tooling and mold production is commenced. T1 samples are produced and shipped for approval. Upon approval, the remaining parts are made.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Who owns the tool?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             At X, our customers own their injection mold tools! After a run is complete, the tool will remain at our facilities. Tools can be shipped to you upon request; however, you will be responsible for any associated shipping and packaging costs. Our engineers will work with you regarding tool compatibility with your equipment if you're unsure.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Can you run different colors of the same material?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             Yes, multiple colors can be run even on the same order! When running multiple colors on the same order, a purge charge will be added.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Why Use X Injection Mold Services?
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Endless Options:</strong> Choose from millions of possible combinations of materials, finishes, tolerances, markings, and certifications for your order.</li>
//             <li><strong>Easy to Use:</strong> Get your parts delivered right to your door without the hassle of sourcing, project management, logistics, or shipping.</li>
//             <li><strong>Vetted Network:</strong> We are ISO 9001:2015, ISO 13485, and AS9100D certified. Only the top shops that apply to become Suppliers make it through our qualification process.</li>
//           </ul>
//         </CardContent>
//       </Card>

//       {/* Quick Turn Molding (3.b) */}
//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle className="text-2xl">Quick Turn Molding</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Typography variant="h3" className="text-xl">
//             Quick Turn Injection Molding With X
//           </Typography>
//           <Typography className="mt-2">
//             X offers an array of injection molding solutions, such as Prototype Molding and Production Molding, to meet your needs no matter your development stage. Thanks to X’s vast manufacturing network, we can deliver injection molded parts faster than ever. With quick turn injection molding, a domestic molding service, we can achieve lead times as low as five business days!
//           </Typography>
//           <Typography className="mt-2">
//             This service is ideal for molding projects that require parts to be expedited and delivered as quickly as possible. With X’s quick turn injection molding, you can take advantage of benefits such as:
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li>Dozens of production-grade material options to choose from</li>
//             <li>A variety of mold finishing options including polished and textured finishes</li>
//             <li>Up to 2,500 shots per mold</li>
//             <li>Made in USA</li>
//             <li>Own your tooling</li>
//             <li>DFM analysis and project support from X's molding experts</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Quick Turn Molding Order Criteria
//           </Typography>
//           <Typography className="mt-2">
//             With our quick turn molding service, our goal is to ensure we achieve the best possible turnaround times with as few limitations as possible. That said, there are some considerations when choosing this service to ensure it is suitable for your project. The table below shows our quick turn service offerings and order criteria. For projects requiring fewer limitations and greater customization, visit our plastic injection molding page to see our extensive molding services.
//           </Typography>
//           <Table className="mt-2">
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Guidance</TableHead>
//                 <TableHead>Quick Turn Molding</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <TableRow>
//                 <TableCell>Tooling</TableCell>
//                 <TableCell>Prototype grade aluminum molds</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Mold Shot Life</TableCell>
//                 <TableCell>Up to 2,500 shots</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Size Limitations</TableCell>
//                 <TableCell>Max XYZ of 10"x12"x3.9"</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Mold Finishes</TableCell>
//                 <TableCell>6 Standard finishes (SPI-A2, A3, B2, B3, light or heavy textured)</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Material Selection</TableCell>
//                 <TableCell>Limited to 25 families of materials, or customer supplied</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Inspection Options</TableCell>
//                 <TableCell>Standard XYZ Dimension Report</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Typical Quote Response Time *</TableCell>
//                 <TableCell>Same day, in as little as 2 hours</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Part Lead Times</TableCell>
//                 <TableCell>Fast as 5 business days</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Country of Origin</TableCell>
//                 <TableCell>Domestic only (made in India)</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//           <Typography variant="h3" className="mt-4">
//             Material Families Available
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li>ABS | Acrylonitrile Butadiene Styrene</li>
//             <li>PC-ABS | Polycarbonate-Acrylonitrile Butadiene Styrene</li>
//             <li>ASA | Acrylonitrile Styrene Acrylate</li>
//             <li>HDPE | High-Density Polyethylene</li>
//             <li>HIPS | High-Impact Polystyrene</li>
//             <li>LCP | Liquid Crystal Polymer</li>
//             <li>LDPE | Low-Density Polyethylene</li>
//             <li>PA 6/6 | Polyamide 6/6, Nylon 6/6</li>
//             <li>PBT | Polybutylene Terephthalate, Valox</li>
//             <li>PBT-PET | Polybutylene Terephthalate-Polyethylene Terephthalate</li>
//             <li>PC | Polycarbonate</li>
//             <li>PC-PBT | Polycarbonate-Polybutylene Terephthalate, Xenoy</li>
//             <li>PEBA | Polyether Block Amide</li>
//             <li>PET | Polyethylene Terephthalate, Rynite</li>
//             <li>PETG | Polyethylene Terephthalate Glycol, Eastar</li>
//             <li>PMMA | Polymethyl Methacrylate, Acrylic</li>
//             <li>POM | Acetal Polyoxymethylene, Delrin</li>
//             <li>PP | Polypropylene</li>
//             <li>PPA | Polyphthalamide, Zytel HTN</li>
//             <li>PS-PPE | Polystyrene-Polyphenyl Ethers, Noryl</li>
//             <li>PS | Polystyrene</li>
//             <li>Soft PVC | Polyvinyl Chloride, Geon HC</li>
//             <li>TPE | Thermoplastic Elastomer, Santoprene</li>
//             <li>TPU | Thermoplastic Polyurethane (Shore A)</li>
//             <li>TPV | Thermoplastics Elastomer, Vulcanized Rubber</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Injection Molding FAQ
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What are the lead times for quick turn molding?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             X's quick turn molding process involves using a proprietary insert and base system to produce molded parts rapidly. Depending on your project's requirements and complexity, parts can be delivered as quickly as 5 business days!
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Will I receive design for manufacturing (DFM) feedback?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             Yes! As part of X's service, we offer DFM feedback on all projects both pre-sale as well as during final tool kickoff to ensure the project is a success.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What is the process after ordering?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             After receiving the order, one of our manufacturing engineers reviews the statement of work. A case manager is assigned, and an appropriate manufacturing supplier is identified. A comprehensive DFM/PEG report is created and provided for approval. Upon approval, tooling and mold production is commenced. T1 samples are produced and shipped for approval. Upon approval, the remaining parts are made.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What is the minimum order quantity with quick turn molding?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             Quick turn molding is available for order quantities of 50 and greater. We offer urethane casting and 3D printing services, which are great options for lower-quantity orders.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What industries use injection molding?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             Injection molding is used across various industries, including aerospace, medical devices, consumer goods, energy, electronics, automotive, robotics, toys, and more.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Why would I prototype with injection molding rather than 3D printing?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             3D printing is an excellent process for rapid prototyping! However, prototyping with injection molding enables a much more comprehensive range of materials, finishes, and textures that other processes do not offer. Prototyping with injection molding also paves the way for potential full-scale production in the future. You can iterate and tune the design to fit the same process used for production quantities. Many customers do initial prototyping using 3D printing but later move onto injection molding when preparing to scale production and bring their creation to its final vision.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What is MUD tooling?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             A MUD (Master Unit Die) is a type of mold that uses a standard injection molding frame that utilizes inserts that define the shape of the internal cavity and thus the eventual part. Think of it as a quick-change system akin to swapping out the head of a disposable razor. Ultimately this type of tool helps drive lower-cost and lead time as most of the machining time will be focused on the core and cavity work, rather than all other aspects of a more complicated tooling setup. MUD tooling is often used with prototype molding applications. Learn more about injection molding tooling and processes.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Why Choose X for Injection Molding?
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Endless Options:</strong> Choose from millions of possible combinations of materials, finishes, tolerances, markings, and certifications for your order.</li>
//             <li><strong>Expert Help:</strong> Our experts help get your parts delivered right to your door without the hassle of sourcing, project management, logistics, or shipping.</li>
//             <li><strong>Vetted Network:</strong> We are ISO 9001:2015, ISO 13485, and AS9100D certified. Only the top shops that apply to become Suppliers make it through our qualification process.</li>
//           </ul>
//         </CardContent>
//       </Card>

//       {/* Prototype Molding (3.c) */}
//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle className="text-2xl">Prototype Molding</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Typography variant="h3" className="text-xl">
//             Prototype Molding Service With X
//           </Typography>
//           <Typography className="mt-2">
//             At X, we help our customers bring their ideas to reality. While we offer an array of services, such as CNC Machining or 3D Printing which are used to prototype parts, many of our customers are looking to take their prototyping needs to the next level. Our prototype molding services can help you bridge the gap between initial prototypes to validating your product for full production runs.
//           </Typography>
//           <Typography className="mt-2">
//             Our prototyping molding services are non-limiting. Take advantage of all the same technologies, materials, and finishing options X offers within our plastic injection molding services to get the same quality of parts you can expect from a total production run with no minimums. Our project managers and engineers will work closely with you to understand your project's unique requirements and help you make informed decisions to optimize for the lowest costs and fastest lead times.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Why Start With Prototype Injection Molding?
//           </Typography>
//           <Typography className="mt-2">
//             Sometimes it can be challenging to determine whether or not you should start with Prototype Molding or jump straight into Production Molding. X understands every project is unique, and our experts will work with you to make an informed decision. There are a few characteristics that Prototype Molding may be best suited for:
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Low-cost Tooling:</strong> Tooling used is optimized for smaller runs and is typically made of cheaper materials, is less complex, and thus less expensive to produce.</li>
//             <li><strong>Fast:</strong> Whether you are rapid prototyping or simply have a tight deadline to meet, the prototype mold process allows for quicker turnaround with parts in your hand in as little as 10 business days!</li>
//             <li><strong>Limited Volume:</strong> Ideal for projects where a limited run of high-quality parts is needed. Great for quantities up to 10,000-50,000 depending on tooling used.</li>
//             <li><strong>Break-Even Costs:</strong> With low piece pricing at high quantities, the cost of molding, in many instances, outweighs the costs of other rapid prototyping processes such as Additive Manufacturing.</li>
//             <li><strong>Product Validation:</strong> Start with a limited volume run to validate your product before investing more into production-level tooling and quantities.</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Prototype Injection Molding Considerations
//           </Typography>
//           <Typography className="mt-2">
//             We do our best to cater to our customer's needs and desires. That said, there are considerations one should make when choosing any manufacturing process. When developing a prototype mold, there are a few key aspects. The table below may help you determine whether an injection molding prototype process is suitable or if you may need to explore higher-tier options such as our Bridge Tooling or Production Tooling services.
//           </Typography>
//           <Table className="mt-2">
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Subject</TableHead>
//                 <TableHead>Consideration</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <TableRow>
//                 <TableCell>Tool Life</TableCell>
//                 <TableCell>Tooling used for prototype molding applications is generally made of softer materials and thus will wear out sooner than molds made of tougher material.</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Mold Texturing & Polishing</TableCell>
//                 <TableCell>Texturing and polishing of prototype molds can be performed; however, the effect is likely to wear out sooner due to the softer tooling used and may not justify the increased cost. Typically we recommend B to D SPI finishes for prototype molds.</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Gating Methods</TableCell>
//                 <TableCell>Gates may be constrained to edge, direct & fan techniques. Gating that requires high shear or hot runners is better suited for Bridge or Production tooling.</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Mold Classes</TableCell>
//                 <TableCell>Class 105 & 104 molds are the most suitable for prototyping molding runs and are typically made of Aluminum or Mild Steel. Projects requiring class 103,102 or 101 molds may be better suited for other tiers of production and be made of higher tier materials.</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Material Selection</TableCell>
//                 <TableCell>All injection molding materials we offer are available for prototype mold applications. That said, abrasive materials such as glass-filled ones may result in increased wear on a prototype tool's life.</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Tool Origin</TableCell>
//                 <TableCell>X offers both domestic (India) and international molding options. India-based prototyping molding is typically the quickest, while international prototype tooling will be the most economical at the expense of a few extra days.</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//           <Typography variant="h3" className="mt-4">
//             Injection Molding FAQ
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What industries use injection molding?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             Injection molding is used across various industries, including aerospace, medical devices, consumer goods, energy, electronics, automotive, robotics, toys, and more.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Why would I prototype with injection molding rather than 3D printing?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             3D printing is an excellent process for rapid prototyping! However, prototyping with injection molding enables a much more comprehensive range of materials, finishes, and textures that other processes do not offer. Prototyping with injection molding also paves the way for potential full-scale production in the future. You can iterate and tune the design to fit the same process used for production quantities. Many customers do initial prototyping using 3D printing but later move onto injection molding when preparing to scale production and bring their creation to its final vision.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What are mold classes?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             The SPI (Society of Plastic Engineers) developed mold classifications to standardize mold type definitions based on mold material, tool design, features, and production volume. Mold classes range from 101 (most advanced, highest volume production) to 105 (prototyping applications) to simplify the type of injection mold required for thermoplastic molding based on production needs. Mold classes are intended to be used as a guideline.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What is MUD tooling?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             A MUD (Master Unit Die) is a type of mold that uses a standard injection molding frame that utilizes inserts that define the shape of the internal cavity and thus the eventual part. Think of it as a quick-change system akin to swapping out the head of a disposable razor. Ultimately this type of tool helps drive lower-cost and lead time as most of the machining time will be focused on the core and cavity work, rather than all other aspects of a more complicated tooling setup. MUD tooling is often used with prototype molding applications. Learn more about injection molding tooling and processes.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What are lead times like with prototype injection molding?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             X can typically deliver a prototype injection mold component within 3 weeks. We can deliver in as few as 10 business days, depending on the specific requirements of your project!
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What materials are available for prototype molding?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             All of our usual injection molding material offerings are available for prototype molding! Read more about choosing the right injection molded plastic.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Can you run different colors of the same material?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             Yes, multiple colors can be run even on the same order! When running multiple colors on the same order, a purge charge will be added.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What is the process after ordering?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             After receiving the order, the statement of work is reviewed by one of our manufacturing engineers. A case manager is assigned, and an appropriate manufacturing supplier is identified. A comprehensive DFM/PEG report is created and provided for approval. Upon approval, tooling and mold production is commenced. T1 samples are produced and shipped for approval. Upon approval, the remaining parts are made.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Why Choose X for Prototype Tooling?
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Endless Options:</strong> Choose from millions of possible combinations of materials, finishes, tolerances, markings, and certifications for your order.</li>
//             <li><strong>Expert Help:</strong> Our experts help get your parts delivered right to your door without the hassle of sourcing, project management, logistics, or shipping.</li>
//             <li><strong>Vetted Network:</strong> We are ISO 9001:2015, ISO 13485, and AS9100D certified. Only the top shops that apply to become Suppliers make it through our qualification process.</li>
//           </ul>
//         </CardContent>
//       </Card>

//       {/* Production Molding (3.d) */}
//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle className="text-2xl">Production Molding</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Typography variant="h3" className="text-xl">
//             Production With X
//           </Typography>
//           <Typography className="mt-2">
//             We are here to provide personalized support with getting projects off the ground and see them through to their final vision! We understand that fully realizing a product demands volume, strict schedules, logistics, and reasonable pricing.
//           </Typography>
//           <Typography className="mt-2">
//             Our production injection mold tooling services complement many of our other services, such as prototype molding and bridge tooling, which our customers use to get to a production-ready stage. Below are just some of the advantages you can expect by working with X on your high-volume production needs:
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Your project managed:</strong> We remove the headaches caused by handling all the complexities related to high-volume production. Leave the sourcing, tool design, fabrication, problem-solving, logistics, and more to us!</li>
//             <li><strong>Effective communication:</strong> Avoid the commotion of dealing with many different contact points to get the answers you need. A team of project managers and industry experts will be dedicated to you to keep communication simple and work to build a lasting relationship from start to finish!</li>
//             <li><strong>World-class lead times:</strong> Our manufacturing network enables us to offer some of the fastest possible lead times in the industry. Our broad reach and capabilities allow us to optimize your production path to hit milestones in a matter of weeks, not months.</li>
//             <li><strong>Industry experts:</strong> With experts in medical, automotive, aerospace, and more, our experts are here to provide robust support. Our team members will use their experience to guide you to success and help avoid common pitfalls.</li>
//             <li><strong>Certifications and quality:</strong> We offer ISO 9001, AS9100, ISO 13485, UL, ITAR, and ISO 7 and 8 Medical Clean Room molding. We can also incorporate FAI, control plans, PPAP, and IQ OQ PQ to suit your project needs.</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             How It Works
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Start A Quote:</strong> Upload your files to the X Quote Engine. Our team will consult with you to ensure your specifications, lead time, and price fit your project needs. We will provide a DFM report for approval before kicking off tooling.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>T1 Sample Approval:</strong> Once your project is kicked off we will build a high-quality injection mold. After the mold is created we will send out part samples, called T1s, for approval.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Production Begins:</strong> Once samples are approved, we move forward with production and deliver parts. You own your tool and can easily re-order as needed to meet demand.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Quality & Certifications
//           </Typography>
//           <Typography className="mt-2">
//             X is ITAR-registered and certified to ISO 9001:2015, AS9100D, IATF 16949:2016 and ISO 13485:2016. Our diverse manufacturing suppliers have the certifications you require.
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li>ITAR Registered</li>
//             <li>ISO 9001</li>
//             <li>AS9100</li>
//             <li>ISO 13485</li>
//             <li>ISO 7 & 8 Medical Clean Room</li>
//             <li>Material Traceability</li>
//             <li>PPAP, Formalized Inspections, FAIR, IQ/OQ/PQ</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Injection Molding FAQ
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What industries use injection molding?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             Injection molding is used across various industries, including aerospace, medical devices, consumer goods, energy, electronics, automotive, robotics, toys, and more.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What is the lead time for remaining parts?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             After your tool has been made and samples have been approved, production will commence. The average lead time to produce the remaining parts in the run is 10-15 days.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What materials are available?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             We offer a wide array of materials, including the most commercially available resins and engineering materials! We can also source custom materials upon request. Read more about choosing the right injection molded plastic.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Can I run multiple materials or colors in the same mold?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             Yes, most of the time, if they're in the same family of resins (i.e., two grades of ABS). We can also run different colors of the same material in the same mold. Changing to glass-filled or drastically different materials may present some potential concerns, which our engineers will be happy to work with you on. A purge charge is added to your order when changing materials or colors in the same order.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Who owns the tool?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             At X, our customers own their injection mold tools! After a run is complete, the tool will remain at our facilities. Tools can be shipped to you upon request; however, you will be responsible for any associated shipping and packaging costs. Our engineers will work with you regarding tool compatibility with your equipment if you're unsure.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>How much will shipping cost?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             Exact shipping costs are calculated once the order is kicked off. We need to determine the facility and location from which the parts will ship and work out the size, weight, and packaging requirements. We can ship on a provided DHL, UPS, or FedEx shipping account or provide a shipping quote on our account.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>What is the process after ordering?</strong>
//           </Typography>
//           <Typography className="mt-2">
//             After receiving the order, the statement of work is reviewed by one of our manufacturing engineers. A case manager is assigned, and an appropriate manufacturing supplier is identified. A comprehensive DFM/PEG report is created and provided for approval. Upon approval, tooling and mold production is commenced. T1 samples are produced and shipped for approval. Upon approval, production begins.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Why Choose X for Your Tooling Needs?
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Endless Options:</strong> Choose from millions of possible combinations of materials, finishes, tolerances, markings, and certifications for your order.</li>
//             <li><strong>Expert Help:</strong> Our experts help get your parts delivered right to your door without the hassle of sourcing, project management, logistics, or shipping.</li>
//             <li><strong>Vetted Network:</strong> We are ISO 9001:2015, ISO 13485, IATF 16949:2016 and AS9100D certified. Only the top shops that apply to become Suppliers make it through our qualification process.</li>
//           </ul>
//         </CardContent>
//       </Card>

//       {/* Over Molding (3.e) */}
//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle className="text-2xl">Over Molding</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Typography variant="h3" className="text-xl">
//             Custom Overmolding With X
//           </Typography>
//           <Typography className="mt-2">
//             Need overmolded parts that are truly custom? You have come to the right place. X delivers high-quality, on-demand injection molding for prototypes and production parts.
//           </Typography>
//           <Typography className="mt-2">
//             Simply put, the overmolding process lets you combine multiple materials into one part. One material, usually a thermoplastic elastomer (TPE/TPV), is molded onto a second material, which is often a rigid plastic. Think about your toothbrush handle where the single piece has both rigid and rubbery components. It’s a great way to make plastic parts perform and look better. For a complete list of our thermoplastic elastomer and rigid plastic material choices, please see our injection molding capabilities page.
//           </Typography>
//           <Typography className="mt-2">
//             X takes a “have it your way” approach to all types of injection molding, no matter your level of experience. We specialize in complex projects, including those requiring side action or hand loaded inserts. Our goal is to provide a long-term overmolding solution, moving beyond rapid prototyping, with dedicated overmolding project managers and engineering experts to communicate through all project stages from design to production. We offer molding solutions for every industry, including medical injection molding, and both US and China injection molding services.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             X's Overmolding Finishes
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>SPI Finishes:</strong> Range of finishes from Grade 3 diamond / high polish to 320 stone low polish. Finishes include: SPI A-1 SPI A-2 SPI A-3 SPI B-1 SPI B-2 SPI B-3 SPI C-1 SPI C-2 SPI C-3 SPI D-1 SPI D-2 SPI D-3</li>
//             <li><strong>As Molded:</strong> No secondary polishing or grinding. Part will show tooling marks.</li>
//             <li><strong>Other Mold Texturing:</strong> X can match other mold textures upon request.</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Overmolding Design Tips
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li>Wall thicknesses between 0.060" to 0.120" (1.5 mm-3 mm) generally provide the best bonding.</li>
//             <li>Keeping radii between 0.020" or 0.5mm minimum in corners reduces localized stresses.</li>
//             <li>If the part requires the use of thick TPE sections, they should be cored out to minimize shrinkage problems, reduce the part weight and lower cycle time.</li>
//             <li>Avoid deep or un-ventable blind pockets or ribs in your design.</li>
//             <li>Use gradual transitions between wall thickness to reduce or avoid problems with flow (back fills, gas traps, etc.)</li>
//             <li>The TPE/TPV should be less thick than the substrate to prevent warpage, especially if the part is flat, long, or both.</li>
//             <li>Overmolding needs mechanical or chemical bonding to the substrate, so your overmold material choices should enable this.</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Other Types of Injection Molding at X
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Thermoplastic Injection Molding:</strong> X delivers top quality plastic injection molded parts in as little as 10 business days. Our Manufacturing Partner Network can help you design and manufacture tools, dies, and molds for rapid tooling for prototyping to advanced mold making for production runs. Full injection molding capabilities including insert molding, unlimited undercuts, and internal/external threads are available.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Insert Molding:</strong> X now also offers insert molding as part of its injection molding capabilities. We can even use our CNC machining services to produce custom metal and plastic inserts to integrate into the part. For a free insert molding design review and quote, upload your CAD files. Our expert team of injection molders will get back to you within 24 hours.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Range of Mold Making Options:</strong> Our vetted network of partners allow us to quickly convert your 3D part data into a high-quality injection mold at top speed. We offer services from design and manufacturing for tools, dies, and molds for prototyping and production runs. Plastic blow molds, aluminum and steel tooling, 2-shot and 3-shot molding are also available. And with X, you own your own tools, so our partner network also offers mold maintenance services.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Why Choose X for Overmolding?
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Endless Options:</strong> Choose from millions of possible combinations of materials, finishes, tolerances, markings, and certifications for your order.</li>
//             <li><strong>Easy to Use:</strong> Get your parts delivered right to your door without the hassle of sourcing, project management, logistics, or shipping.</li>
//             <li><strong>Vetted Network:</strong> We are ISO 9001:2015, AS9100D, and ISO 13485 certified. Only the top molding shops that apply to become Suppliers make it through our qualification process.</li>
//           </ul>
//         </CardContent>
//       </Card>

//       {/* Insert Molding (3.f) */}
//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle className="text-2xl">Insert Molding</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Typography variant="h3" className="text-xl">
//             Custom Insert Molding With X
//           </Typography>
//           <Typography className="mt-2">
//             X offers insert mold services as part of its injection molding capabilities. For a free insert molding design review and quote, upload your CAD files here. Our expert team of injection molders will get back to you within 24 hours. If you want to learn more about our injection molding capabilities, download our design guide here. If injection molding isn’t the best fit for you, you could also try urethane casting or 3D printing.
//           </Typography>
//           <Typography className="mt-2">
//             Insert Molding is an injection molding process that works especially well for parts that have threaded holes. It can also help you create better wheels, pulleys, fan blades, and other similar parts. Done correctly, insert molding can help:
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Eliminate assembly:</strong> You can make insert molded parts all at once instead of having to do assembly after the fact.</li>
//             <li><strong>Reduce costs:</strong> Insert molding costs more than standard injection molding, but the costs are usually offset by the fact that you no longer need to do post-assembly.</li>
//             <li><strong>Lower the size and weight of the part:</strong> A plastic part with a metal insert is generally lighter than an all-metal part.</li>
//             <li><strong>Improve reliability:</strong> Metal mold inserts will guarantee the function of threads and mitigate wear and tear over the part's life.</li>
//             <li><strong>Improve part strength:</strong> Because it’s a “one-shot” process, it can produce stronger parts than overmolding and other processes.</li>
//           </ul>
//           <Typography className="mt-2">
//             Ready to get started on your custom insert molding quote?
//           </Typography>
//           <div className="mt-4 flex justify-center">
//             <Button>Get Your Quote</Button>
//           </div>
//           <Typography variant="h3" className="mt-4">
//             Applications for Insert Molding
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>End-Use Functional Parts:</strong> Insertion molding creates fully dense, smooth parts with superior mechanical performance.</li>
//             <li><strong>Scaled Production:</strong> Insert injection molding is best known for its unmatched production capabilities from thousands to millions of identical parts.</li>
//             <li><strong>Certified Components:</strong> We offer ISO 9001, AS9100, ISO 13485, UL, ITAR, and ISO 7 & 8 Medical Clean Room molding.</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Insert Molding Process Advantages
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Durability:</strong> Metal inserts will guarantee the function of threads and mitigate wear and tear over the part’s life.</li>
//             <li><strong>Strength:</strong> Because it’s a “one-shot” process, insert molding can produce stronger parts than overmolding and other processes.</li>
//             <li><strong>Creating Production Parts:</strong> Insert molding is great for creating prototypes and production parts.</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Other Types of Injection Molding at X
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Thermoplastic Injection Molding:</strong> X delivers top quality plastic injection molded parts in as little as 10 business days. Our Manufacturing Partner Network can help you design and manufacture tools, dies, and molds for rapid tooling for prototyping to advanced mold making for production runs. Full injection molding capabilities including overmolding, unlimited undercuts, and internal/external threads are available.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Overmolding:</strong> Overmolding lets you combine multiple materials into one part. One material, usually a thermoplastic elastomer (TPE/TPV), is molded onto a second material, which is often a rigid plastic. Think about your toothbrush handle where the single piece has both rigid and rubbery components. It’s a great way to make plastic parts perform and look better.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Range of Mold Making Options:</strong> Our vetted network of partners allow us to quickly convert your 3D part data into a high-quality injection mold at top speed. We offer services from design and manufacturing for tools, dies, and molds for prototyping and production runs. Plastic blow molds, aluminum and steel tooling, 2-shot and 3-shot molding are also available. And with X, you own your own tools, so our partner network also offers mold maintenance services.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Why Choose X for Molded Inserts?
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Endless Options:</strong> Choose from millions of possible combinations of materials, finishes, tolerances, markings, and certifications for your order.</li>
//             <li><strong>Easy to Use:</strong> Get your parts delivered right to your door without the hassle of sourcing, project management, logistics, or shipping.</li>
//             <li><strong>Vetted Network:</strong> We are ISO 9001:2015, ISO 13485, and AS9100D certified. Only the top shops that apply to become Suppliers make it through our qualification process.</li>
//           </ul>
//         </CardContent>
//       </Card>

//       {/* Compression Molding (3.g) */}
//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle className="text-2xl">Compression Molding</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Typography className="mt-2">
//             Compression molding is used across many industries and is a popular choice among X customers. Although it came onto the scene in 1905, it has held its ground over the years through all of our technological advances. There are still plenty of reasons why companies and manufacturers turn to it over other methods. It has proven to be a solid and reliable choice for making everything from dental devices to video game controllers. Up ahead, we’ll go into detail about how compression molding works, what it’s used for, and both its advantages and disadvantages.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             What to Know About Compression Molding
//           </Typography>
//           <Typography className="mt-2">
//             Compression molding is a manufacturing process used to create plastic and composite parts. Through a mixture of heat and high pressure, it squeezes materials—like thermosetting polymers or thermoplastic compounds—into set shapes. It’s the heat and pressure that allows solid materials to soften and reform into new structures that are wholly even and cured. During the process, curing triggers a chemical reaction, which helps give the final product strength and durability.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             The Importance of Compression Molding
//           </Typography>
//           <Typography className="mt-2">
//             This is one process that’s helpful when it comes to turning pre-impregnated intermediate products into semi-structural and structural composite components. It’s also key for developing fibrous materials that have been impregnated with thermoset and thermoplastic matrices. Not only that, but compression molding is a great process for companies looking to cut costs, minimize waste, and make numerous products. Compression molding is also better suited for manufacturing certain part geometries, such as thick walls.
//           </Typography>
//           <Typography className="mt-2">Compression molding diagram</Typography>
//           <Typography variant="h3" className="mt-4">
//             How the Compression Molding Process Works
//           </Typography>
//           <Typography className="mt-2">
//             There are a few steps in the compression molding process. Here’s how it works, according to our engineers:
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Step 1:</strong> The first step in compression molding is creating the molds, which are responsible for shaping the end product. These are usually made of steel or aluminum and, once they’re put together, have a cavity, an upper mold, and a lower mold.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Step 2:</strong> After the mold is created, the machine is set up for the process. Users will clean the mold, input the settings, and turn on the heat. Keeping the temperature controlled is essential for preventing defects and warping.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Step 3:</strong> For thermosets, the next step involves placing a charge made of fiber-reinforced resin, silicone, or rubber into the cavity. The mold is then closed while heat, pressure, and speed settings are locked in to begin the molding process.
//           </Typography>
//           <Typography className="mt-2">
//             It’s slightly different for thermoplastics. For these materials, temperature-controlled cooling molds are used instead.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Step 4:</strong> Once the shapes are complete, they cool and any extra edges or excess material are removed. Altogether, the process can take 1 to 5 minutes, but it largely depends on how thick the parts are.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Equipment Used in the Process
//           </Typography>
//           <Typography className="mt-2">
//             These are the main components of a compression molding machine and the tools needed to fulfill the process:
//           </Typography>
//           <ol className="list-decimal pl-4 pt-2 mt-2">
//             <li><strong>Large tonnage press:</strong> This is usually 150 tons to 2,500 tons.</li>
//             <li><strong>Heated mold:</strong> As mentioned earlier, the mold will have an upper and lower portion
//             as well as an inner cavity. They’re designed to control the flow of material as it melts and reshapes into the new desired object.</li>
//             <li><strong>Heating chamber:</strong> This or an oven will be used to heat materials and get them to their molten state.</li>
//             <li><strong>Heating lines:</strong> These long and cylindrical electrical resistors are the primary heating elements.</li>
//             <li><strong>Shop air:</strong> This helps clean the cavity and gets rid of debris, particles, and contaminants from different parts of the machine.</li>
//             <li><strong>Cutting tools:</strong> These are used to manually cut away any leftover materials.</li>
//           </ol>
//           <Typography variant="h3" className="mt-4">
//             Materials Used in the Process
//           </Typography>
//           <Typography className="mt-2">
//             These are the most common materials used for compression molding and why they’re popular:
//           </Typography>
//           <ol className="list-decimal pl-4 pt-2 mt-2">
//             <li><strong>Epoxy:</strong> These resins have superb mechanical properties, high heat resistance, and dimensional stability. When they melt down, they flow easily and evenly into the cavity. After it has cooled down, epoxy parts are known to be durable and strong. Because of this, the material is usually used for aerospace parts, electrical insulation, and structural composites.</li>
//             <li><strong>Silicone:</strong> This is another material with top-notch heat resistance. Silicone is also flexible and ideal for electrical insulation. Like epoxy, silicone also flows well into the cavity and has no problem properly molding into intricate shapes. This makes it a great material for precision seals, gaskets, medical devices, and automotive components.</li>
//             <li><strong>Melamine:</strong> For excellent heat and chemical resistance, many manufacturers rely on melamine. Its hardness and stability are key features, too. It molds easily and once it’s formed into the right shape, the finish makes it a winning choice. That’s why melamine is often used for home goods like kitchenware, heat-resistant utensils, and decorative laminates—but it’s also used for electrical components.</li>
//             <li><strong>Urethane:</strong> Also known as polyurethane, this material is strong and resistant to wear and tear. Like the other materials, urethane flows perfectly fine into the cavity, covering every nook and cranny. This makes it another great choice for more detailed designs like automotive parts, rollers, wheels, and industrial seals.</li>
//             <li><strong>High-Density Polyethylene (HDPE):</strong> This type of plastic is perfect for melting and molding. It offers fantastic chemical resistance, strength, and rigidity. On top of this, it’s capable of handling major impact, which is why it’s used for automotive components and industrial parts.</li>
//             <li><strong>Polyphenylene Sulfide (PPS):</strong> For electrical components, industrial equipment, and some automotive parts, manufacturers will often use PPS. This is because it flows well once it’s melted down but cools into a stiff but strong finish.</li>
//             <li><strong>Polytetrafluoroethylene (PTFE):</strong> You’ll likely recognize this material in the kitchen as it’s used to create non-stick surfaces. In compression molding it offers much of the same benefits—stability in high temperatures, chemical resistance, and a slick surface.</li>
//           </ol>
//           <Typography className="mt-2">
//             "Compression molding works really well for rubber products that have thicker or uneven walls—think insoles, phone cases, or silicone kitchen gadgets." — Amung Horam, Director, Applications Engineering
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Applications of Compression Molding
//           </Typography>
//           <Typography className="mt-2">
//             Thanks to its customizable parts and settings and its flexibility with materials, compression molding spans many different industries. It has a lot of different uses, with just a small chunk of those listed below.
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Kitchenware:</strong> The staples in your cooking space may exist thanks to compression molding. This process can make products like bowls, cups, plates, and utensils and create versions that are resistant to heat and breaks. The ever-popular melamine plates used for eating outdoors are often made this way.</li>
//             <li><strong>Automotive parts:</strong> Both small and large components for vehicles like cars, trucks, and tractors can be made through compression molding. As examples, you can get door panels, dashboards, and parts for engines.</li>
//             <li><strong>Electrical components:</strong> With the previous materials listed, it’s no surprise that compression molding can be used to make electrical components. Manufacturers can get precise shapes, reliable functionality, and consistency across the board.</li>
//             <li><strong>Video games and computer devices:</strong> The devices we spend hours on wouldn’t function the same without the help of compression molding. This process can produce keypads for computers, video game controllers, and parts that provide electrical insulation.</li>
//             <li><strong>Medical and dental components:</strong> You could probably name quite a few tools and devices your doctor and dentist rely on, but without some finer details and tiny components, they wouldn’t be usable! Compression molding can create plastic and silicone parts like syringe stoppers and pieces for respirator masks.</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Advantages and Disadvantages
//           </Typography>
//           <Typography className="mt-2">
//             There are pros and cons to think about when you’re weighing up compression molding and other similar processes. Here are some of the advantages and disadvantages that X makes their customers aware of when considering the process:
//           </Typography>
//           <Typography className="mt-2"><strong>Advantages include:</strong></Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li>Ultra-strong parts that last through immense wear and tear and heavy-duty use.</li>
//             <li>Molds are highly customizable and can be created for intricate designs or more basic styles.</li>
//             <li>Compression molding can handle various materials, including highly viscous materials, and therefore make a wide range of different products.</li>
//             <li>Molds are efficient when it comes to using material, which saves money in the long run.</li>
//             <li>The parts made from compression molds have excellent finishes.</li>
//             <li>Batch production is possible and users can create settings and cycles for maximum efficiency.</li>
//             <li>Compression molding machines can use recycled and eco-friendly materials—a perk for sustainably-minded companies.</li>
//           </ul>
//           <Typography className="mt-2"><strong>Disadvantages include:</strong></Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li>Complex parts are no problem, but intricate components with thin walls is a no-go.</li>
//             <li>Pressure range limits make it difficult to create detailed shapes</li>
//             <li>While it only takes a few minutes, compression molding is slower than other processes like injection molding.</li>
//             <li>The heat, pressure, and cooling process can lead to longer production times, too.</li>
//             <li>Flash can happen and create imperfect parts, wasting material, time, and resources.</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             The Future of Compression Molding
//           </Typography>
//           <Typography className="mt-2">
//             At X, we have only seen demand for compression-molded products increase over time. The need for products that are produced through this method is increasing thanks to specific industries seeing a boom in growth—whether that’s new medical and dental developments or an influx of new car parts.
//           </Typography>
//           <Typography className="mt-2">
//             Machine learning, AI, and automated systems is also making compression molding simpler to execute. While the demand for compression molded products is growing, so are the available materials that can be used in these types of machines. With how easy it is to manufacture everyday items like dishes and more advanced components for a computer to function, it’s hard to see this manufacturing process winding down in the near future.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Compression vs. Injection Molding
//           </Typography>
//           <Typography className="mt-2">
//             Compression and injection molding are similar but have a few key differences. These can influence your decision when it comes to selecting the best process for the job. Compression molding uses heat and pressure to form a shape within the mold. Injection molding, as its name suggests, funnels or injects hot material into a closed mold.
//           </Typography>
//           <Typography className="mt-2">
//             Injection molding is better for objects that require intricate details (like threading or ribbing), thin walls, or complex parts. Compression molding wins out when it comes to thicker products needed for their strength, robustness, and durability. Overall, Injection molding processes tend to be quicker than compression processes.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             How X Can Help
//           </Typography>
//           <Typography className="mt-2">
//             X provides a wide range of manufacturing capabilities, including injection molding and other value-added services for all of your prototyping and production needs. Get an instant quote today.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Disclaimer
//           </Typography>
//           <Typography className="mt-2">
//             The content appearing on this webpage is for informational purposes only. X makes no representation or warranty of any kind, be it expressed or implied, as to the accuracy, completeness, or validity of the information. Any performance parameters, geometric tolerances, specific design features, quality and types of materials, or processes should not be inferred to represent what will be delivered by third-party suppliers or manufacturers through X’s network. Buyers seeking quotes for parts are responsible for defining the specific requirements for those parts. Please refer to our terms and conditions for more information.
//           </Typography>
//         </CardContent>
//       </Card>

//       {/* Injection Molded Surface Finishes (3.h) */}
//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle className="text-2xl">Injection Molded Surface Finishes</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Typography variant="h3" className="text-xl">
//             An Overview of Injection Molded Surface Finishes
//           </Typography>
//           <Typography className="mt-2">
//             X offers SPI injection molding finishes and Mold-Tech and VDI injection molding finish options for polished, matte, to textured molded parts.
//           </Typography>
//           <Typography className="mt-2">
//             A common question we hear at X is, "What do your molded parts look like?" The answer is: however you want it! X has access to a diverse marketplace of molding suppliers and all standard mold finishing options. Our mold finishes include SPI, MoldTech, VDI (EDM), and others. Mold finishes can range from glossy to matte to even patterned. Finishes applied to the surface of the mold cavity transfer to the surface of the molded part. For example, a mold surface that is polished to be reflective will make a reflective (or transparent) part. Mold finishes are different from finishes for CNC machined, or 3D printed parts, where each component is treated individually. Adding a finish or texture can change the tool's price depending on the process required, but it does not alter the price of the individual parts.
//           </Typography>
//           <Typography className="mt-2">
//             The most common finishes used include those from the Society of the Plastics Industry (SPI), which are a set of standard mold finishes starting from heavily polished (SPI A) to semi-gloss (SPI B) to fine and coarse matte (SPI C and SPI D). Where polished textures can increase a parts' cosmetic reflection or transparency on transparent polymers, matte finishes can help provide more subdued tones and even help prevent fingerprints on handled products (e.g., your laptop's frame and keyboard).
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Society of Plastics Industry (SPI) Mold Finishes
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Standard SPI Injection Molding Finishes</strong>
//           </Typography>
//           <Table className="mt-2">
//             <TableHeader>
//               <TableRow>
//                 <TableHead>SPI Finish</TableHead>
//                 <TableHead>Description</TableHead>
//                 <TableHead>Typical Applications</TableHead>
//                 <TableHead>Surface Roughness (Ra µm)</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <TableRow>
//                 <TableCell>SPI A-1</TableCell>
//                 <TableCell>Grade #3, 6000 Grit Diamond Buff</TableCell>
//                 <TableCell>High polish or transparent parts, optically clear</TableCell>
//                 <TableCell>0.012 - 0.025</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>SPI A-2</TableCell>
//                 <TableCell>Grade #6, 3000 Grit Diamond Buff</TableCell>
//                 <TableCell>High polish or transparent parts</TableCell>
//                 <TableCell>0.025 - 0.050</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>SPI A-3</TableCell>
//                 <TableCell>Grade #15, 1200 Grit Diamond Buff</TableCell>
//                 <TableCell>High-to-medium polish parts, non-optical lenses</TableCell>
//                 <TableCell>0.050 - 0.100</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>SPI B-1</TableCell>
//                 <TableCell>600 Grit Paper</TableCell>
//                 <TableCell>Medium polish parts</TableCell>
//                 <TableCell>0.05 - 0.10</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>SPI B-2</TableCell>
//                 <TableCell>400 Grit Paper</TableCell>
//                 <TableCell>Medium polish parts</TableCell>
//                 <TableCell>0.10 - 0.15</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>SPI B-3</TableCell>
//                 <TableCell>320 Grit Paper</TableCell>
//                 <TableCell>Medium - low polish parts</TableCell>
//                 <TableCell>0.28 - 0.32</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>SPI C-1</TableCell>
//                 <TableCell>600 Stone</TableCell>
//                 <TableCell>Low polish parts</TableCell>
//                 <TableCell>0.35 - 0.40</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>SPI C-2</TableCell>
//                 <TableCell>400 Stone</TableCell>
//                 <TableCell>Low polish parts</TableCell>
//                 <TableCell>0.45 - 0.55</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>SPI C-3</TableCell>
//                 <TableCell>320 Stone</TableCell>
//                 <TableCell>Low polish parts</TableCell>
//                 <TableCell>0.63 - 0.70</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>SPI D-1</TableCell>
//                 <TableCell>Dry Blast Glass Bead</TableCell>
//                 <TableCell>Satin finish</TableCell>
//                 <TableCell>0.80 - 1.00</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>SPI D-2</TableCell>
//                 <TableCell>Dry Blast #240 Oxide</TableCell>
//                 <TableCell>Dull finish</TableCell>
//                 <TableCell>1.00 - 2.80</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>SPI D-3</TableCell>
//                 <TableCell>Dry Blast #24 Oxide</TableCell>
//                 <TableCell>Dull finish</TableCell>
//                 <TableCell>3.20 - 18.00</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//           <Typography variant="h3" className="mt-4">
//             Mold-Tech Textured Finishes
//           </Typography>
//           <Typography className="mt-2">
//             Standex Engraving Mold-Tech is a standardized mold texturing option typically used for commercial or saleable goods. Mold-Tech is serialized in four series, A through D. Most commonly the Mold-Tech Series A finishes are used on products as it has a range of fine to coarse matte finishes that do not require laser, masked chemical etching, or other engineered texturing processes. Mold-Tech finishes are categorized by their serial number and texture depth. A more aggressive draft angle is needed with Mold-Tech because mold texturing has more coarse features than SPI finishes, it is recommended to add 1.5° of draft for every 0. Mold-Tech A Finishes
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Common Mold-Tech Injection Molding Finishes</strong>
//           </Typography>
//           <Table className="mt-2">
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Mold-Tech Serial Number</TableHead>
//                 <TableHead>Texture Depth (inch)</TableHead>
//                 <TableHead>Application</TableHead>
//                 <TableHead>Minimum Draft</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <TableRow>
//                 <TableCell>MT-11010</TableCell>
//                 <TableCell>0.001"</TableCell>
//                 <TableCell>Dull matte finish</TableCell>
//                 <TableCell>1.5°</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>MT-11020</TableCell>
//                 <TableCell>0.0015"</TableCell>
//                 <TableCell>Coarse matte finish</TableCell>
//                 <TableCell>2.25°</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>MT-11030</TableCell>
//                 <TableCell>0.002"</TableCell>
//                 <TableCell>Coarse matte finish</TableCell>
//                 <TableCell>3°</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//           <Typography variant="h3" className="mt-4">
//             VDI (EDM) Mold Texture Values
//           </Typography>
//           <Typography className="mt-2">
//             VDI 3400 Surface Finish (known as VDI surface finish) refers to the mold texture standard Verein Deutscher Ingenieure (VDI), the Society of German Engineers. The VDI 3400 surface finish is mainly processed by Electrical Discharge Machining (EDM) when mold machining. VDI is an international standard for mold texturing of matte surfaces. The EDM surface gives a fine-to-coarse grain depending on the selection. VDI is not the same as Mold-Tech, which is applied through various techniques from manual finishing to laser etching to chemical etching with patterns. However, some textures may have near equivalencies, such as SPI D-3, VDI 33, and MT-11020, all looking very similar. In similar aspects, VDI 12 and SPI C-1 are equivalent.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Common VDI Injection Molding Finishes</strong>
//           </Typography>
//           <Table className="mt-2">
//             <TableHeader>
//               <TableRow>
//                 <TableHead>VDI Value</TableHead>
//                 <TableHead>Description</TableHead>
//                 <TableHead>Applications</TableHead>
//                 <TableHead>Surface Roughness (Ra µm)</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <TableRow>
//                 <TableCell>VDI 12</TableCell>
//                 <TableCell>600 Stone</TableCell>
//                 <TableCell>Low polish parts</TableCell>
//                 <TableCell>0.40</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>VDI 15</TableCell>
//                 <TableCell>400 Stone</TableCell>
//                 <TableCell>Low polish parts</TableCell>
//                 <TableCell>0.56</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>VDI 18</TableCell>
//                 <TableCell>Dry Blast Glass Bead</TableCell>
//                 <TableCell>Satin finish</TableCell>
//                 <TableCell>0.80</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>VDI 21</TableCell>
//                 <TableCell>Dry Blast # 240 Oxide</TableCell>
//                 <TableCell>Dull finish</TableCell>
//                 <TableCell>1.12</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>VDI 24</TableCell>
//                 <TableCell>Dry Blast # 240 Oxide</TableCell>
//                 <TableCell>Dull finish</TableCell>
//                 <TableCell>1.60</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>VDI 27</TableCell>
//                 <TableCell>Dry Blast # 240 Oxide</TableCell>
//                 <TableCell>Dull finish</TableCell>
//                 <TableCell>2.24</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>VDI 30</TableCell>
//                 <TableCell>Dry Blast # 24 Oxide</TableCell>
//                 <TableCell>Dull finish</TableCell>
//                 <TableCell>3.15</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>VDI 33</TableCell>
//                 <TableCell>Dry Blast # 24 Oxide</TableCell>
//                 <TableCell>Dull finish</TableCell>
//                 <TableCell>4.50</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>VDI 36</TableCell>
//                 <TableCell>Dry Blast # 24 Oxide</TableCell>
//                 <TableCell>Dull finish</TableCell>
//                 <TableCell>6.30</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>VDI 39</TableCell>
//                 <TableCell>Dry Blast # 24 Oxide</TableCell>
//                 <TableCell>Dull finish</TableCell>
//                 <TableCell>9.00</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>VDI 42</TableCell>
//                 <TableCell>Dry Blast # 24 Oxide</TableCell>
//                 <TableCell>Dull finish</TableCell>
//                 <TableCell>12.50</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>VDI 45</TableCell>
//                 <TableCell>Dry Blast # 24 Oxide</TableCell>
//                 <TableCell>Dull finish</TableCell>
//                 <TableCell>18.00</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//           <Typography className="mt-2">
//             Unless otherwise specified, an injection molded part will typically have an SPI B-2 default finish to enable better part release from the mold and remove tool marks. Surface finishes can be applied to some or all faces; for example, an opaque molded part can have a custom outer surface. The interior, non-cosmetic surface, can remain default. Multiple finishes and texturing can be applied to a single tool cavity if required. Transparent parts are typically polished on both sides to achieve the highest clarity.
//           </Typography>
//           <Typography className="mt-2">
//             X offers a wide variety of surface finishes and additional mold textures to ensure that your parts meet all of their structural and cosmetic requirements. Learn more about our injection molding service.
//           </Typography>
//         </CardContent>
//       </Card>

//       {/* Custom Plastic Fabrication (3.i) */}
//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle className="text-2xl">Custom Plastic Fabrication</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Typography variant="h3" className="text-xl">
//             Custom Plastic Fabrication Services
//           </Typography>
//           <Typography className="mt-2">
//             High quality custom plastic fabricated production parts in days | AS9100D | ISO 9001:2015 | ISO 13485 | IATF 16949:2016 | ITAR Registered
//           </Typography>
//           <Typography className="mt-2">
//             Plastic can be processed using a wide range of manufacturing methods. One of the lowest-cost methods is plastic fabrication. Plastic fabrication includes techniques such as: machining, precision cutting, bonding, welding, and thermoforming. X offers a custom plastic fabrication service that can help you succeed with any plastic fabrication project while also maintaining the highest levels of quality.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Plastic Fabrication Processes and Machinery
//           </Typography>
//           <Typography className="mt-2">
//             Plastic fabrication refers to the process of shaping, forming, or bonding plastic sheets, tubes, rods, or bars. Fabrication does not include melt processing techniques like injection molding. The plastic fabrication process typically starts by consulting an expert. During this phase, the specific requirements of the part are defined. The initial conceptual design can be analyzed to determine if it follows applicable DFM (Design for Manufacturing) guidelines. The operating conditions must be largely known as they will determine what type of plastic is best suited to your application. Typical factors to consider are: operating temperature, chemical exposure, and load cases. Once these have all been considered, the design can be finalized and fabrication drawings produced.
//           </Typography>
//           <Typography className="mt-2">
//             Depending on the design, there are a number of fabrication techniques and tools available, the most common are listed below:
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>CNC Machining:</strong> Plastic machining can be fast and does not place excessive wear on tooling (unless the plastics are filled with carbon or glass particles). Cutting tools are kept sharp to avoid heat build-up during cutting.</li>
//             <li><strong>Bending:</strong> Most plastics can be bent. In some cases, they may need to be heated in order to bend easily. This is especially useful for more brittle plastics like acrylic.</li>
//             <li><strong>Welding:</strong> Plastic welding is typically done with a specialized extrusion welding tool. This tool generates hot air and plastic is fed into an extruder that melts and pushes the plastic from a nozzle. The operator can join plastic components using either fillet or butt welds. The weld bead fuses with the base material to create a homogeneous bond. Other techniques like ultrasonic welding are also employed to fuse plastic components together.</li>
//             <li><strong>Routing:</strong> Plastic can be formed using a router in the same manner as wood routers are used. Chamfers or rounds can be cut on sharp corners, and pockets can also be cut. High-speed rotary tools can cause the plastic to melt, so care must be taken to ensure the tools are sharp.</li>
//             <li><strong>Sawing:</strong> Many different sawing tools are available such as: jigsaws, circular saws, band saws, and table saws. When cutting plastic, purpose-made cutting blades are used which have a coarse tooth spacing.</li>
//             <li><strong>Thermoforming:</strong> Plastic sheets can be vacuum-formed over various shapes by heating the plastic and then draping it over a form. A vacuum is then applied that forces the heated plastic over the shape.</li>
//             <li><strong>Drilling:</strong> Plastics are easily drilled. However, drill bits must be kept sharp and speed relatively slow. Blunt drills and high speeds will often melt the plastic rather than drill through it.</li>
//           </ul>
//           <Typography className="mt-2">
//             During the fabrication process and prior to releasing the component, rigorous quality inspections are performed to ensure the part meets stringent quality standards. Typical inspections can include: material checks, dimensional checks, and general visual checks.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Benefits of Plastic Fabrication
//           </Typography>
//           <Typography className="mt-2">
//             Plastic fabrication offers a wide array of different benefits. Some of the most important are listed below:
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Versatility</strong></li>
//             <li><strong>Light Weight</strong></li>
//             <li><strong>Cost Effective</strong></li>
//             <li><strong>Durability</strong></li>
//             <li><strong>Chemical Resistance</strong></li>
//             <li><strong>Low Friction</strong></li>
//           </ul>
//           <Typography className="mt-2">
//             <strong>Versatility:</strong> There are many different plastics available that cover a wide range of properties. This makes it easy to find the perfect plastic for your unique application. Specific plastics can also be further modified with additives to improve UV, thermal, and chemical resistances. In addition to their physical properties, plastics can be formed using a wide range of techniques.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Light Weight:</strong> Plastics have densities that hover in the range of 1000 kg/m3 and some plastics have strength approaching that of aluminum. This makes plastic ideal for applications in which low weight is a key design requirement, for example in the aerospace or automotive industries.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Cost Effective:</strong> Some plastics known as commodity plastics can be very cost effective when compared to other construction materials like metals. Coupled with common plastic fabrication techniques, this lower cost is further amplified as expensive tooling is not required.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Durability:</strong> Plastics are generally tough materials that can withstand impact loads without fracturing; they do not rust or corrode like metals. As such, plastics are ideal for hard-wearing applications such as those encountered in public spaces.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Chemical Resistance:</strong> Some plastics are able to resist extremely corrosive chemicals due to which metals would quickly become corroded. This makes certain plastics ideal for use in harsh environments like those found in chemical processing facilities.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Low Friction:</strong> Some plastics like PTFE (polytetrafluoroethylene) or UHMWPE (ultra-high-molecular-weight polyethylene) have very low coefficients of friction. This makes them ideal as a protective and low-friction liner for metal chutes like those used in bulk materials handling applications.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Disadvantages of Plastic Fabrication
//           </Typography>
//           <Typography className="mt-2">
//             Despite its many benefits, plastic fabrication does have some downsides as listed below:
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Limited Temperature Resistance</strong></li>
//             <li><strong>Susceptibility to Chemical Degradation</strong></li>
//             <li><strong>Less Rigid Than Metal</strong></li>
//           </ul>
//           <Typography className="mt-2">
//             <strong>Limited Temperature Resistance:</strong> While some plastics are able to resist relatively high temperatures, they do not come close to metals and are not suitable for very high-temperature conditions. Plastics tend to have accelerated creep when exposed to elevated temperatures.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Susceptibility to Chemical Degradation:</strong> While some plastics have excellent chemical resistance in general, more-commonplace plastics tend to degrade when exposed to specific chemicals. Even plastics with excellent chemical resistance like PVDF (polyvinylidene fluoride) will experience stress corrosion cracking over time.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Less Rigid Than Metal:</strong> While plastics are tough, they are not as rigid as metals and will undergo creep at much lower temperatures than metals. As such, plastics are not ideal for heavy-duty structural applications but can still be used for light-duty structural applications in which low weight is required.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Applications of Plastic Fabrication
//           </Typography>
//           <Typography className="mt-2">
//             Plastics are used in almost every industry. Listed below are some examples of plastic fabrication:
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Product Enclosures</strong></li>
//             <li><strong>Displays</strong></li>
//             <li><strong>Components</strong></li>
//             <li><strong>Prototyping</strong></li>
//             <li><strong>Packaging</strong></li>
//             <li><strong>Process Tanks</strong></li>
//           </ul>
//           <Typography className="mt-2">
//             <strong>Product Enclosures:</strong> Plastics are often used for product enclosures in a wide range of industries. Typical examples include: consumer electronics enclosures, household appliances, and scientific instrumentation and equipment.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Displays:</strong> Plastic is often used for marketing displays due to the wide range of colors, textures, ease of fabrication, and low cost of plastic. This allows advertisers to easily create eye-catching displays that can maintain their vibrant colors while also resisting long-term exposure to the outdoors.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Components:</strong> Specialized plastic components can be produced to fit an endless range of applications. Some examples can include: gears, cams, and valves. Precise components can be manufactured using techniques like CNC machining.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Prototyping:</strong> Plastic is cost-effective and easy to work with, which makes it an ideal material for prototyping. Designs can be iterated on without needing complex manufacturing processes and expensive equipment.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Packaging:</strong> The low cost and durability of plastic make it ideal for packing as it can be used to protect fragile components or food items during transport. Plastic can be formed into almost any shape to suit each unique packaging application.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Process Tanks:</strong> Process tanks are often made from plastics due to their chemical resistance. For example, electroless nickel plating tanks are often made from polypropylene panels that have been welded together.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Industries Served by Plastic Fabrication
//           </Typography>
//           <Typography className="mt-2">
//             Rapid machining has various applications, including:
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Electronics</strong></li>
//             <li><strong>Automotive</strong></li>
//             <li><strong>Healthcare</strong></li>
//             <li><strong>Consumer Goods</strong></li>
//             <li><strong>Aerospace</strong></li>
//             <li><strong>Process Engineering</strong></li>
//           </ul>
//           <Typography className="mt-2">
//             <strong>Electronics:</strong> Electronics make extensive use of plastic for their structural enclosures, electrical connections, and screen guards. This is due in part to the low weight of plastics, their low cost, as well as their ability to behave as electrical insulators.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Automotive:</strong> The automotive industry requires parts that are lightweight, tough, and long-lasting. Plastics that fit these requirements are used for a number of applications such as: gear wheels, valves, and exterior or interior panels.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Healthcare:</strong> Plastic fabrication is used in the healthcare industry due to its transparency to X-rays (for some grades), low weight, sterilizability, and chemical resistance. Typical applications include diagnostic equipment and surgical tools.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Consumer Goods:</strong> Household appliances, tools, consumer electronics, and product packaging all make extensive use of plastic fabrication. Its prevalence is due to its low raw material cost, low weight, and low-cost fabrication techniques.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Aerospace:</strong> Aerospace components need to be lightweight, strong, and resistant to a wide range of chemicals and environmental conditions. Plastic fabrication can be used to shape the plastic with the specific properties required into a long-lasting, low-weight part.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Process Engineering:</strong> Plastic in general has excellent resistance to chemicals. Regardless of the chemical that is being handled, there is most likely a type of plastic that can resist it. As such, plastic fabricated equipment like tanks, vessels, and piping are often used in the chemical processing industry.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Alternatives to Plastic Fabrication
//           </Typography>
//           <Typography className="mt-2">
//             Plastic fabrication might not meet your specific requirements; listed below are three potential alternatives:
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Metal Fabrication</strong></li>
//             <li><strong>Wood Fabrication</strong></li>
//             <li><strong>Composites</strong></li>
//           </ul>
//           <Typography className="mt-2">
//             <strong>Metal Fabrication:</strong> Plastic fabricated parts do not always have the required temperature resistance and structural strength. In these cases, metal fabrication can be used instead. Metal fabrication is especially useful for heavy-duty equipment.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Wood Fabrication:</strong> Wood fabrication is ideal for prototyping as it is easy to work with and can be lightweight, especially when compared to metal. Low-cost wood-like MDF or chipboard is cheaper than plastic and is also lightweight. However, wood has no thermal or chemical resistance.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Composites:</strong> Composites are able to provide lightweight and strong components and are a suitable alternative to both metal and plastic fabrication. Composites are primarily manufactured by laminating sheets of glass or carbon fiber over a form to produce complex shapes and are widely used in the aerospace industry.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Why Choose X for Custom Plastic Fabrication Services?
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Endless Options:</strong> Choose from millions of possible combinations of materials, finishes, tolerances, markings, and certifications for your order.</li>
//             <li><strong>Easy to Use:</strong> Get started with our easy-to-use platform and let our experts take care of managing the project from locating the right manufacturing partner to delivery logistics.</li>
//             <li><strong>Vetted Network:</strong> We are ISO 9001:2015, ISO 13485, and AS9100D certified. Only the top shops that apply to become Suppliers make it through our qualification process.</li>
//           </ul>
//         </CardContent>
//       </Card>

//       {/* Micro Molding (3.j) */}
//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle className="text-2xl">Micro Molding</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Typography variant="h3" className="text-xl">
//             Micro Molding Services
//           </Typography>
//           <Typography className="mt-2">
//             X offers the highest quality micro molding services and can assist in the production of parts with intricate and complex geometries and excellent surface finishes. Subject to availability. X doesn't guarantee that we can provide this service at any given time.
//           </Typography>
//           <Typography className="mt-2">
//             Micro molding is a highly advanced and specialized manufacturing process that enables the fabrication of complex, miniature parts with incredible precision. Considered a subset of plastic injection molding, micro molding is tailored for producing parts with features typically less than one millimeter. It has gained prominence in industries like: medical device manufacturing, electronics, automotive, and aerospace. The ability to efficiently create precise parts with minute features in large volumes and in a wide range of compatible materials are some of the biggest advantages of custom plastic injection micro molding.
//           </Typography>
//           <Typography className="mt-2">
//             X offers high-quality micro molding services for a variety of industries and applications. Common applications for micro injection molding include integrated circuit components and automotive door-locking mechanisms. Our vast manufacturing network coupled with our extensive manufacturing experience ensures your parts will be made to the highest standards of quality with short lead times.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             The Micro Injection Molding Process
//           </Typography>
//           <Typography className="mt-2">
//             The micro molding process is nearly identical to the standard plastic injection molding process but requires more careful control to ensure high-quality parts. Before micro injection molding can actually begin, molds and die sets must be fabricated. Precise and advanced manufacturing methods such as electric discharge machining (EDM), micro EDM, and micro-machining are used to create extremely precise molds with tolerances as small as a few micrometers. Once fabricated, molds can be mounted in a micro injection machine. Then, a thermoplastic or liquid silicone rubber is melted and maintained at a consistent temperature. The molten material is forced into the micro mold with a controlled flow rate and held at a particular pressure while it cools. Advanced programming and controls within micro injection molding machines ensure molding parameters are stable and consistent. Once sufficiently cooled, the micro injection molded parts are ejected from the mold and inspected to ensure dimensional tolerances are met.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Types of Micro Molding Processes
//           </Typography>
//           <Typography className="mt-2">
//             There are various types of micro molding, each with its own sets of advantages and disadvantages and special use cases. The different types of micro molding processes are listed and described below:
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Insert Molding</strong></li>
//             <li><strong>Overmolding</strong></li>
//           </ul>
//           <Typography className="mt-2">
//             <strong>Insert Molding:</strong> Insert molding is a type of injection molding in which a metal component is placed into a mold cavity before molten plastic fills the mold. Insert molding is also possible with micro molding. In the insert micro molding process, a metal insert is positioned either manually or automatically by a robotic arm in the mold. Then, the mold closes, the plastic resin is injected in a single shot, and the molten plastic forms around the insert to create a single part. Finally, the part is ejected, the metal insert is removed, and the process repeats. Insert micro molding is a great way to enhance product durability and functionality. It is commonly used in the medical manufacturing industry to make components like catheters or in the electronics industry for micro-optic and integrated circuit components.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Overmolding:</strong> Overmolding is another subset of injection molding. It is the process of molding different materials or different colors of the same material in the same mold to create complex multi-material or multi-color parts. As with typical injection molding, the overmolding process begins with the injection of a substrate material into a mold. Then, a second injection is made using a different material or the same material with a different color into the same mold. The material from the second injection is layered directly on top of the first layer. This results in a single solid piece composed of different materials or colors. The process is great for enhancing grip characteristics for consumer products and attractive, multi-color products. Micro overmolding is often used to create small parts like: multi-color buttons or housings for electronics and seals and gaskets in automotive.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Material Selection for Micro Molding
//           </Typography>
//           <Typography className="mt-2">
//             Material selection is highly important in micro molding projects as thermoplastic polymers and other specialized resins must be carefully vetted for suitability for particular applications, particularly in medical applications. The different materials used in micro molding are listed and described below:
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Polyethylene (PE)</strong></li>
//             <li><strong>Polypropylene (PP)</strong></li>
//             <li><strong>Nylon (Polyamide)</strong></li>
//             <li><strong>Polycarbonate (PC)</strong></li>
//             <li><strong>Delrin® (Acetal / Polyoxymethylene / POM)</strong></li>
//             <li><strong>Polysulfone (PSU)</strong></li>
//             <li><strong>Polybutylene Terephthalate (PBT)</strong></li>
//             <li><strong>Acrylic (Polymethylmethacrylate / PMMA)</strong></li>
//             <li><strong>PEEK (Polyether Ether Ketone)</strong></li>
//             <li><strong>ULTEM® (Polyetherimide / PEI)</strong></li>
//             <li><strong>LCP (Liquid Crystal Polymer)</strong></li>
//           </ul>
//           <Typography className="mt-2">
//             <strong>Polyethylene (PE):</strong> Polyethylene is one of the most commonly used thermoplastics in the world. Polyethylene is an FDA-compliant material, which makes it suitable for food and beverage applications. Additionally, it has great chemical and thermal resistance, as well as high tensile strength. Common applications of PE include: packaging, consumer goods, and textiles.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Polypropylene (PP):</strong> Polypropylene is another popular plastic used for components in a variety of industries and applications. Desirable properties of PP include: rigidity, wide operating temperature range, and chemical, corrosion, and fatigue resistance. Common applications of PP include: packaging, machinery components, textiles, and consumer goods.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Nylon (Polyamide):</strong> Nylon is a popular thermoplastic lauded for its chemical resistance, strength, and dimensional stability across a wide temperature range. Nylon has many uses including: textiles, electrical housings, and mechanical components like bearings, bushings, and sprockets.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Polycarbonate (PC):</strong> Polycarbonate is a thermoplastic known for its transparency, optical clarity, tensile and impact strength, recyclability, and chemical and fire resistance. These properties make polycarbonate great for electrical housings, switches, machine guards, and more.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Delrin® (Acetal / Polyoxymethylene / POM):</strong> Delrin® is DuPont’s trademarked polyoxymethylene (POM or acetal) resin. Delrin® is known for its strength, toughness, elasticity, rigidity, chemical and flame resistance, machinability, dimensional stability, and low friction coefficient. POM is used for mechanical components such as: gears, pulleys, and rollers.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Polysulfone (PSU):</strong> PSU is a translucent thermoplastic known for its biocompatibility, food compatibility, good mechanical properties, and wide operating temperature range. PSU is commonly used in food preparation and medical industries due to its bio-friendliness.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Polybutylene Terephthalate (PBT):</strong> PBT is a thermoplastic that has great dimensional stability, high strength, good chemical, UV, and thermal resistance, and low moisture absorption characteristics. PBT is often used in the automotive and electronics industries for automotive fenders, electrical enclosures, and power-tool housings.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Acrylic (Polymethylmethacrylate / PMMA):</strong> Acrylic is a widely used thermoplastic due to its optical clarity and transparency, high tensile and impact strength, light weight, and durability. PMMA is often used as a substitute for glass and is commonly used in applications like: signage, windows, machine guards, and more.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>PEEK (Polyether Ether Ketone):</strong> PEEK is a special thermoplastic that is known for its wide operating temperature range up to 489 °F or 250 °C. Not only that, but it also has high strength, great chemical resistance, and high stiffness. PEEK is used in a variety of applications, from mechanical components like: bushings, bearings, and seals to fluidic components like valves and fittings, electrical housings, and connectors.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>ULTEM® (Polyetherimide / PEI):</strong> ULTEM® is a popular brand name for the thermoplastic PEI. PEI is known for its rigidity, high mechanical strength, and creep resistance over a broad range of temperatures. Additionally, PEI is a great electrical insulator, which makes it commonly used for applications like coils and fuses in electronics and interior trim pieces in aircraft.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>LCP (Liquid Crystal Polymer):</strong> LCPs are advanced polymer materials that maintain an ordered microstructure in both liquid and solid phases. The ordered microstructure results in exceptional mechanical strength and great temperature and flame resistance. Uses of LCP include: electrical connectors, catheters, surgical and dental instruments, and coatings on cookware.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Micro Molding Advantages
//           </Typography>
//           <Typography className="mt-2">
//             Micro molding offers many advantages for manufacturers and end users. These advantages are listed below:
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Lightweight</strong></li>
//             <li><strong>Size</strong></li>
//             <li><strong>Less Energy and Time</strong></li>
//             <li><strong>Tight Tolerances</strong></li>
//             <li><strong>Chemical Resistance</strong></li>
//           </ul>
//           <Typography className="mt-2">
//             <strong>Lightweight:</strong> Micro molding creates parts that are lightweight and small. This is particularly useful for creating small and comfortable medical implants. Additionally, lightweight micro molded parts are also important in the creation of small, lightweight electronics or microfluidic components like small valves and fittings.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Size:</strong> Not only are the parts made by micro molding lightweight, but they are also exceptionally small in size. Advanced machining processes like micro-machining and EDM are used to create small, precise mold cavities and cores. As a result, micro-molded parts can easily fit into small and confined spaces. Micro molding has become a popular process for creating small parts in electronics, medical implants for orthopedics, pacemakers, and micro-optics.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Less Energy and Time:</strong> Micro molding offers significant cost savings compared to conventional injection molding. The cost savings are a result of the smaller tools and machinery needed to complete the micro molding process. Tools and molds are often smaller in size and thus cheaper to manufacture. Additionally, because parts are smaller, clamping forces are smaller, and consequently, power requirements are smaller. Finally, since parts are smaller, cycle times are often shorter since parts do not require as long a time to cool compared to parts made from conventional injection molding. All these traits of micro molding enable significant cost savings.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Tight Tolerances:</strong> Creating parts that satisfy tight tolerances is something the micro molding injection molding technique excels at. Micro molding enables the production of exceptionally small, detailed, and complex components with tolerances as small as 0.005” to 0.015”. Advanced manufacturing methods like micro-machining and EDM allow micro-sized cavities, cores, and other features to be made with great accuracy. The process is often used in the fabrication of electronics, medical devices, and micro-optics because of its ability to produce parts that satisfy tight tolerances.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Chemical Resistance:</strong> Thermoplastics used in the micro molding process often exhibit great chemical resistance. Therefore, the miniature parts created by the process can be used in applications with high exposure to various chemicals or in corrosive environments. This is particularly useful in the medical industry for implants, instruments, and diagnostic equipment, as well as in fluidic control components like valves and fittings. Additionally, various consumer goods and electronics may benefit from the chemical resistance offered by micro molded parts.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Micro Molding Applications
//           </Typography>
//           <Typography className="mt-2">
//             There are many different industrial applications of micro molding, some of which are listed and described below:
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Medical Devices</strong></li>
//             <li><strong>Drones</strong></li>
//             <li><strong>Surveillance Equipment</strong></li>
//             <li><strong>Fitness Trackers</strong></li>
//             <li><strong>Robotics</strong></li>
//             <li><strong>Automotive Industries</strong></li>
//           </ul>
//           <Typography className="mt-2">
//             <strong>Medical Devices:</strong> Medical devices require parts to be made to stringent dimensional standards to ensure healthy patient outcomes and safety. Medical devices are one of the biggest applications of micro molded parts. The different applications in which micro molding is used in medical devices are listed below:
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li>Implants</li>
//             <li>Catheters</li>
//             <li>Drug delivery systems</li>
//             <li>Diagnostic equipment</li>
//           </ul>
//           <Typography className="mt-2">
//             Common materials for micro molded parts in the medical industry include: PE, PP, and PC.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Drones:</strong> Drones are uncrewed, remotely controlled, or programmed aircraft that are used for many applications—from surveillance to hobbyist uses. Lightweight micro molded components are important for the function and performance of drones. Micro molded components in drones include:
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li>Housings, switches, and connectors for optical equipment</li>
//             <li>Actuators and gears</li>
//             <li>Sensor housings</li>
//             <li>Structural components</li>
//           </ul>
//           <Typography className="mt-2">
//             PC, acetal, acrylic, PEI, nylon, and more are used for micro molded drone components.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Surveillance Equipment:</strong> Surveillance equipment that utilizes optical devices such as CCTV cameras and body cameras is another application of micro molded components. As electronics become smaller, the components in electronics must satisfy tighter tolerances and more stringent precision requirements. Below are some examples of micro molded components for surveillance equipment.
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li>Lenses</li>
//             <li>Mirrors</li>
//             <li>Plugs</li>
//             <li>Switches</li>
//           </ul>
//           <Typography className="mt-2">
//             Plastics like PE, PP, and acrylic are commonly used in micro molded parts for surveillance equipment.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Fitness Trackers:</strong> Fitness trackers are popular medical and consumer electronic devices that track important health information such as: heart rate, breathing rate, distance traveled, and time asleep. These devices must be small and minimally invasive to optimize user comfort while maintaining functionality. Micro molded parts for fitness trackers include:
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li>Switches</li>
//             <li>Housings</li>
//             <li>Plugs</li>
//           </ul>
//           <Typography className="mt-2">
//             Nylon, acrylic, and PC are common materials in fitness trackers.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Robotics:</strong> As with surveillance equipment and fitness trackers, the electronics used in robotics are small and must satisfy small dimensional tolerances. Micro molded parts help reduce the weight of robotics while also helping them improve performance and function. Different applications of micro molded products in robotics include:
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li>Sensor housings</li>
//             <li>Switches and connectors</li>
//             <li>Gears and actuators</li>
//           </ul>
//           <Typography className="mt-2">
//             Acetal, PP, PC, PE, and acrylic are commonly used for micro molded parts in robotics.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Automotive Industries:</strong> Micro molding enables automotive parts to be smaller. This results in lighter, more fuel-efficient, and better-performing vehicles. Applications of micro molding in the automotive industry include:
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li>Components in brake pads and assemblies</li>
//             <li>Fastening hardware such as washers and clips</li>
//             <li>Door locking mechanisms</li>
//             <li>Switches</li>
//             <li>Micro gears</li>
//             <li>Buttons</li>
//           </ul>
//           <Typography variant="h3" className="mt-4">
//             Other Features of X Micro Molding Services
//           </Typography>
//           <Typography className="mt-2">
//             Listed below are the other features of X’s micro molding service:
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Surface Finish</strong></li>
//             <li><strong>FDA Registered</strong></li>
//             <li><strong>High-Volume Production</strong></li>
//             <li><strong>Drug Delivery Devices</strong></li>
//           </ul>
//           <Typography className="mt-2">
//             <strong>Surface Finish:</strong> Surface finish is a significant factor for micro molded parts, not only when it comes to aesthetic appeal, but also the functionality of a micro molded product. Advanced manufacturing methods like micro-machining and EDM are used to attain precise dimensions in the cavities of small micro molds. While EDM can be used to achieve precise dimensions, it also has the ability to create desirable mold textures in cavities that lead to smooth, finished parts.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>FDA Registered:</strong> FDA standards regulate devices and components that can be used in the medical industry. X is ISO 14385 certified and has extensive manufacturing and industry experience. This means your micro molded parts are fabricated to the highest standards of quality and to comply with regulatory standards.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>High Volume Production:</strong> High volumes of precise parts can be made with micro molding just like with standard injection molding. Molds used in micro injection molding can have multiple cavities which enable the production of several parts in a typical 30 to 60 second cycle time. Manufacturers can easily produce hundreds to thousands of parts a day with micro molding.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>Drug Delivery Devices:</strong> Drug delivery devices are medical devices that deliver and/or control the release of a medicine or therapeutic agent to specific sites in the human body. Typical drug delivery can be accomplished by digestion, inhalation, injection, or topical techniques. However, advancements in medicine have led to the use of micro molding to create drug-delivery devices with new methods for administering medicines. Microneedle patches that have an array of tiny needles thinner than a strand of hair and small robotic pills that help treat various digestive disorders are examples of drug delivery devices that utilize micro molding. X’s micro molding capability enables the fabrication of such devices.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Alternatives to Micro Molding
//           </Typography>
//           <Typography className="mt-2">
//             X offers alternative methods for micro molding as listed below:
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>3D Printing</strong></li>
//             <li><strong>Micro-Machining</strong></li>
//           </ul>
//           <Typography className="mt-2">
//             <strong>1. 3D Printing:</strong> 3D printing is a great alternative to micro molding due to the process’s ability to produce tiny plastic or metal parts with complex features. 3D printing is the process of producing parts layer-by-layer until the complete 3-dimensional part is created. 3D printing methods such as stereolithography (SLA), digital light processing (DLP), selective laser sintering (SLS), and selective laser melting (SLM) can achieve precise dimensions as small as +0.010. While 3D printing can achieve tolerances similar to micro molding, the process is often more expensive due to the equipment required and the slower processing time.
//           </Typography>
//           <Typography className="mt-2">
//             <strong>2. Micro-Machining:</strong> Micro-machining is a subset of CNC machining that encompasses micro CNC milling or micro-electric discharge machining (µEDM). Micro CNC milling can achieve tolerances as low as 0.001”, while µEDM can achieve tolerances as small as 0.008” or 0.02 mm. While micro-machining can achieve similar tolerances to micro molding, the process is often more expensive due to the cost of µEDM machines and the slower process involved.
//           </Typography>
//           <Typography variant="h3" className="mt-4">
//             Why Choose X for Micro Molding Services?
//           </Typography>
//           <ul className="list-disc pl-4 pt-2 mt-2">
//             <li><strong>Endless Options:</strong> Choose from millions of possible combinations of materials, finishes, tolerances, markings, and certifications for your order.</li>
//             <li><strong>Easy to Use:</strong> Get started with our easy-to-use platform and let our experts take care of managing the project from locating the right manufacturing partner to delivery logistics.</li>
//             <li><strong>Vetted Network:</strong> We are ISO 9001:2015, ISO 13485, and AS9100D certified. Only the top shops that apply to become Suppliers make it through our qualification process.</li>
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

// export default InjectionMolding;

//==========================================================
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import Typography from "@/components/custom/typography";
// import { injectionMoldingData } from "@/data/injectionMolding";

// // Dynamic Component
// function InjectionMolding() {
//   return (
//     <div className="container mx-auto p-10">
      
//       {/* Main Header */}
//       <Typography variant="h1" className="text-center">
//         {injectionMoldingData.title}
//       </Typography>
//       <Typography variant="lead" className="text-center mt-4">
//         {injectionMoldingData.lead}
//       </Typography>
//       <div className="mt-6 flex justify-center">
//         <Button size="lg">Get a Quote</Button>
//       </div>
//       <img
//         src={`/src/assets/INJECTIONMOLDING.jpg`}
//         className="container w-full h-auto mx-auto object-cover my-10"
//       />
//       <Separator className="my-8" />

//       {/* Dynamic Sections */}
//       {injectionMoldingData.sections.map((section, index) => (
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
//                             <Typography className="font-bold">
//                               {item.subheading}
//                             </Typography>
//                           )}
//                           {item.text && <Typography>{item.text}</Typography>}
//                           {item.example && (
//                             <Typography className="italic">
//                               {item.example}
//                             </Typography>
//                           )}
//                           {item.question && (
//                             <>
//                               <Typography className="font-bold">
//                                 {item.question}
//                               </Typography>
//                               <Typography>{item.answer}</Typography>
//                             </>
//                           )}
//                           {item.additional && (
//                             <Typography>{item.additional}</Typography>
//                           )}
//                         </>
//                       )}
//                     </div>
//                   ))}
//                 {subsection.list && (
//                   <ul className="list-disc pl-4 pt-2 mt-2">
//                     {subsection.list.map((listItem, listIndex) => (
//                       <li key={listIndex} className="">
//                         <Typography>
//                           {typeof listItem === "string" ? (
//                             listItem
//                           ) : (
//                             <>
//                               <strong>{listItem.name}</strong>
//                               {listItem.description &&
//                                 `: ${listItem.description}`}
//                               {listItem.sublist && (
//                                 <ul className="list-disc pl-4 pt-2 ml-4">
//                                   {listItem.sublist.map(
//                                     (subItem, subItemIndex) => (
//                                       <li key={subItemIndex}>
//                                         <Typography>{subItem}</Typography>
//                                       </li>
//                                     )
//                                   )}
//                                 </ul>
//                               )}
//                               {listItem.additional && (
//                                 <Typography>{listItem.additional}</Typography>
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
//                     <Typography className="mt-2 font-bold">
//                       Advantages include:
//                     </Typography>
//                     <ul className="list-disc pl-4 pt-2 mt-2">
//                       {subsection.advantages.map((advantage, advIndex) => (
//                         <li key={advIndex}>
//                           <Typography>{advantage}</Typography>
//                         </li>
//                       ))}
//                     </ul>
//                   </>
//                 )}
//                 {subsection.disadvantages && (
//                   <>
//                     <Typography className="mt-2 font-bold">
//                       Disadvantages include:
//                     </Typography>
//                     <ul className="list-disc pl-4 pt-2 mt-2">
//                       {subsection.disadvantages.map(
//                         (disadvantage, disIndex) => (
//                           <li key={disIndex}>
//                             <Typography>{disadvantage}</Typography>
//                           </li>
//                         )
//                       )}
//                     </ul>
//                   </>
//                 )}
//                 {subsection.quote && (
//                   <Typography className="mt-2 italic">
//                     {subsection.quote}
//                   </Typography>
//                 )}
//                 {subsection.button && (
//                   <div className="mt-4 flex justify-center">
//                     <Button asChild>
//                       <a href={subsection.button.href}>
//                         {subsection.button.text}
//                       </a>
//                     </Button>
//                   </div>
//                 )}
//                 {subsection.additionalContent &&
//                   subsection.additionalContent.map((addContent, addIndex) => (
//                     <Typography key={addIndex} className="mt-2">
//                       {addContent}
//                     </Typography>
//                   ))}
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

// export default InjectionMolding;
//=====================================================
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
import Typography from "@/components/custom/typography";
import { injectionMoldingData } from "@/data/injectionMolding";

// Mapping of titles (subsection and subheadings) to their corresponding images
const subsectionImages = {
  "Custom Plastic Injection Molding Materials": "/src/assets/image55.jpeg",
  "Elastomer and Rubber Molded Materials": "/src/assets/image56.jpeg",
  "Why Choose X for Injection Molding?": "/src/assets/image57.jpeg",
  "Prototype Molding Service With X": "/src/assets/image58.jpeg",
  "Production With X": "/src/assets/image59.jpeg",
  "Custom Insert Molding With X": "/src/assets/image60.jpeg",
  "Compression Molding": "/src/assets/image61.jpeg",
  "Society of Plastics Industry (SPI) Mold Finishes": "/src/assets/image62.jpeg",
  "Custom Plastic Fabrication Services": "/src/assets/image63.jpeg",
  "Micro Molding Services": "/src/assets/image64.jpeg",
};

// Dynamic Component
function InjectionMolding() {
  return (
    <div className="container mx-auto p-10">
      {/* Main Header */}
      <Typography variant="h1" className="text-center">
        {injectionMoldingData.title}
      </Typography>
      <Typography variant="lead" className="text-center mt-4">
        {injectionMoldingData.lead}
      </Typography>
      <div className="mt-6 flex justify-center">
        <Button size="lg">Get a Quote</Button>
      </div>
      <img
        src={`/src/assets/INJECTIONMOLDING.jpg`}
        className="container w-auto h-auto mx-auto object-cover my-10"
        alt="Injection Molding Overview"
      />
      <Separator className="my-8" />

      {/* Dynamic Sections */}
      {injectionMoldingData.sections.map((section, index) => (
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
                            <Typography className="font-bold">
                              {item.subheading}
                            </Typography>
                          )}
                          {item.text && <Typography>{item.text}</Typography>}
                          {item.example && (
                            <Typography className="italic">
                              {item.example}
                            </Typography>
                          )}
                          {item.question && (
                            <>
                              <Typography className="font-bold">
                                {item.question}
                              </Typography>
                              <Typography>{item.answer}</Typography>
                            </>
                          )}
                          {item.additional && (
                            <Typography>{item.additional}</Typography>
                          )}
                          {/* Add Image for Subheading */}
                          {item.subheading && subsectionImages[item.subheading] && (
                            <img
                              src={subsectionImages[item.subheading]}
                              className="container w-auto h-auto mx-auto object-cover mt-4"
                              alt={`${item.subheading} Illustration`}
                            />
                          )}
                        </>
                      )}
                    </div>
                  ))}
                {subsection.list && (
                  <ul className="list-disc pl-4 pt-2 mt-2">
                    {subsection.list.map((listItem, listIndex) => (
                      <li key={listIndex} className="">
                        <Typography>
                          {typeof listItem === "string" ? (
                            listItem
                          ) : (
                            <>
                              <strong>{listItem.name}</strong>
                              {listItem.description &&
                                `: ${listItem.description}`}
                              {listItem.sublist && (
                                <ul className="list-disc pl-4 pt-2 ml-4">
                                  {listItem.sublist.map(
                                    (subItem, subItemIndex) => (
                                      <li key={subItemIndex}>
                                        <Typography>{subItem}</Typography>
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                              {listItem.additional && (
                                <Typography>{listItem.additional}</Typography>
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
                    <Typography className="mt-2 font-bold">
                      Advantages include:
                    </Typography>
                    <ul className="list-disc pl-4 pt-2 mt-2">
                      {subsection.advantages.map((advantage, advIndex) => (
                        <li key={advIndex}>
                          <Typography>{advantage}</Typography>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {subsection.disadvantages && (
                  <>
                    <Typography className="mt-2 font-bold">
                      Disadvantages include:
                    </Typography>
                    <ul className="list-disc pl-4 pt-2 mt-2">
                      {subsection.disadvantages.map(
                        (disadvantage, disIndex) => (
                          <li key={disIndex}>
                            <Typography>{disadvantage}</Typography>
                          </li>
                        )
                      )}
                    </ul>
                  </>
                )}
                {subsection.quote && (
                  <Typography className="mt-2 italic">
                    {subsection.quote}
                  </Typography>
                )}
                {/* Add Image for Subsection Title */}
                {subsectionImages[subsection.title] && (
                  <img
                    src={subsectionImages[subsection.title]}
                    className="container w-auto h-auto mx-auto object-cover mt-4"
                    alt={`${subsection.title} Illustration`}
                  />
                )}
                {subsection.button && (
                  <div className="mt-4 flex justify-center">
                    <Button asChild>
                      <a href={subsection.button.href}>
                        {subsection.button.text}
                      </a>
                    </Button>
                  </div>
                )}
                {subsection.additionalContent &&
                  subsection.additionalContent.map((addContent, addIndex) => (
                    <Typography key={addIndex} className="mt-2">
                      {addContent}
                    </Typography>
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

export default InjectionMolding;