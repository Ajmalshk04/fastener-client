import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DieCastingLandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Die Casting Services</h1>
        <p className="text-xl text-gray-600">
          High-precision metal components for various industries
        </p>
        <Button className="mt-6" size="lg">
          Get a Quote
        </Button>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">What is Die Casting?</h2>
        <p className="text-lg text-gray-700 mb-4">
          Die casting is a metal-forming process where molten metal is poured
          into a mold to create components with high precision, intricate
          detail, and perfect fits for functional use. Popular in automotive,
          aerospace, power equipment, lighting, firearms, and other industries.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              <li>High precision and intricate details</li>
              <li>Mass production of components in various metal alloys</li>
              <li>
                Aluminum, zinc, copper, brass, and bronze alloys available
              </li>
              <li>Can be further refined with CNC machining</li>
              <li>
                Surface finishes include shot-blasting, texturing, plating, and
                painting
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">
          Our Die Casting Processes and Machines
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          We help our customers select the right process based on factors such
          as annual volume, part size, weight, geometry, and surface finish
          requirements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "High Pressure Die Casting (HPDC)",
            "Low-Pressure Die Casting (LPDC)",
            "Gravity Die Casting (GDC)",
          ].map((process, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{process}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimized for various factors including annual volume, part
                  size, weight, geometry, and surface finish requirements.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-lg text-gray-700 mt-6">
          We offer both hot chamber and cold chamber production die-casting
          machines. Machine tonnage is selected based on factors such as part
          size and cavitation.
        </p>
      </section>

      <Separator className="my-8" />

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Die Casting Materials</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="aluminum">
            <AccordionTrigger>Aluminum Castings</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6">
                <li>
                  Safety-critical castings for platforms used in aerial
                  construction equipment
                </li>
                <li>
                  Precision multi-axis gearbox housings (0.002″ TP of multiple
                  bores)
                </li>
                <li>
                  High-pressure die-cast hubs built to withstand extreme fatigue
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="copper">
            <AccordionTrigger>Copper Alloy Castings</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6">
                <li>
                  Casting solutions for water, wind and power transmission
                  industries
                </li>
                <li>
                  Wide variety of available alloys, including no-lead bronze
                  (e.g. C89520), phosphor bronze, and more
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="iron">
            <AccordionTrigger>Gray and Ductile Iron Castings</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6">
                <li>More than a million MT of gray iron castings produced</li>
                <li>
                  Components ranging from 5kg precision gearbox housings to
                  machined 14MT counterweights
                </li>
                <li>
                  200kg rail gearbox housings with Grade 1 x-ray soundness
                  requirements
                </li>
                <li>
                  Multiple -40C Charpy ductile castings for wind-power
                  applications
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="steel">
            <AccordionTrigger>Low-Alloy Steel Castings</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6">
                <li>
                  New alloy and investment casting process for thin-walled,
                  x-ray quality, structural casting for luxury auto brands
                </li>
                <li>
                  Heavy-duty steel castings for frames and yokes with x-ray
                  quality zones for rail and construction customers
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="various">
            <AccordionTrigger>Various Alloy Castings</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6">
                <li>New applications in 304 and 316 stainless</li>
                <li>
                  Complex high nickel alloys for power generation castings
                </li>
                <li>Corrosion-resistant castings</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <Separator className="my-8" />

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">
          Secondary Operations and Surface Finishes
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          We offer a range of secondary operations and surface finishes to meet
          your specific requirements:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>CNC machining for further refinement</li>
          <li>Shot-blasting</li>
          <li>Texturing</li>
          <li>Plating</li>
          <li>Painting</li>
        </ul>
      </section>

      <Separator className="my-8" />

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">
          The Zetwerk Manufacturing Difference
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>Our Comprehensive Services</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              <li>
                Unlimited manufacturing capacity to decrease risk and improve
                response to demand fluctuations
              </li>
              <li>
                Global raw material sourcing to protect cost and supplier
                resiliency
              </li>
              <li>
                Secondary processing, including anodizing, powder coating, and
                CNC machining
              </li>
              <li>Assembly, packaging, and distribution</li>
              <li>Quality control – AS 9100D & ISO 9001:2015 certified</li>
              <li>
                Vendor managed inventory to optimize material availability
              </li>
              <li>
                Supply chain management for efficient raw material conversion
              </li>
              <li>
                Project management for a hands-free experience, with weekly
                updates for project and timing accountability
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our team will guide you through each step after you create a PO,
                keeping you up-to-date with the information you need to monitor
                production and share project information with internal
                stakeholders.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Die Casting Tooling Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We optimize tooling design to improve manufacturing speed,
                considering manufacturing tolerances and typical wear from
                usage. This critical step saves time during process development
                and ensures the tooling meets your project's needs.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>FAIR Approval</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We conduct detailed first-article inspection reports (FAIR) to
                avoid out-of-tolerance components and rework for die cast
                components, giving you complete confidence in the parts you
                receive.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Managed Inventory for JIT</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We offer globally connected supply partnerships to build
                resiliency and multi-source supply, helping you react to market
                or order fluctuations effectively.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="text-center mt-12">
        <Button size="lg">Request a Quote Today</Button>
        <p className="mt-4 text-gray-600">
          Experience the difference in your manufacturing process with our
          die-casting services.
        </p>
      </footer>
    </div>
  );
};

export default DieCastingLandingPage;
