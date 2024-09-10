import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Zetwerk Assemblies</h1>
        <p className="text-lg mt-2">Manufacture Globally, Assemble Locally</p>
        <Button className="mt-4">Get a Quote</Button>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Capabilities</h2>
        <p className="text-gray-700 mb-4">
          Save production time and labor costs by using Zetwerk’s assembly
          capabilities from our factories in the US and Mexico.
        </p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item1">
            <AccordionTrigger>Aluminum Extrusions</AccordionTrigger>
            <AccordionContent>
              Manufacturing of aluminum parts for various applications.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item2">
            <AccordionTrigger>Die Casting</AccordionTrigger>
            <AccordionContent>
              Precision die casting for complex shapes and components.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item3">
            <AccordionTrigger>CNC Machining</AccordionTrigger>
            <AccordionContent>
              High-precision CNC machining services.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item4">
            <AccordionTrigger>Injection Molding</AccordionTrigger>
            <AccordionContent>
              Efficient production of plastic parts.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item5">
            <AccordionTrigger>Prototyping and Preproduction</AccordionTrigger>
            <AccordionContent>
              Rapid prototyping services to validate designs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item6">
            <AccordionTrigger>Sheet Metal Stamping</AccordionTrigger>
            <AccordionContent>
              Precision stamping for various metal components.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item7">
            <AccordionTrigger>Investment Casting</AccordionTrigger>
            <AccordionContent>
              High-quality casting for complex geometries.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Zetwerk?</h2>
        <Card>
          <CardHeader>
            <CardTitle>Quality Assurance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Our ISO 9001-certified NPI process ensures quality and efficiency
              in manufacturing and assembly.
            </p>
            <p className="text-gray-700 mb-4">
              We offer vendor-managed inventory and JIT deliveries, providing
              flexible lead times of less than 5 days.
            </p>
            <p className="text-gray-700 mb-4">
              Our team of Licensed Customs Brokers designs a tariff and
              logistics engineered supply chain for reduced tariff and
              best-in-class landed cost for finished products.
            </p>
            <p className="text-gray-700 mb-4">
              We can manufacture parts and ship them to US/MX as Completely
              Knocked Down (CKD) in the most efficient packaging and then
              assemble them locally or kit them for efficient assembly at your
              factory.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Zetwerk Global Supply Chain
        </h2>
        <p className="text-gray-700 mb-4">
          Zetwerk provides a full suite of manufacturing and assembly services
          focused on reducing turnaround time and improving efficiency and
          value.
        </p>
        <Accordion>
          <AccordionItem value="engineering">
            <AccordionTrigger>Engineering Design</AccordionTrigger>
            <AccordionContent>
              Reverse engineering to take your physical parts and develop
              detailed drawings for manufacturing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="metal-fabrication">
            <AccordionTrigger>Metal Fabrication</AccordionTrigger>
            <AccordionContent>
              Metal fabrication for enclosures, cabinets, and racks. Heavy and
              medium duty fabrication for automotive chassis and frames.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="testing">
            <AccordionTrigger>Testing Services</AccordionTrigger>
            <AccordionContent>
              Part testing options such as Salt spray, NDT, and pressure testing
              to qualify child parts and sub-assemblies.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <footer className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Get Your Products Assembled Locally
        </h2>
        <Button>Get a Quote</Button>
      </footer>
    </div>
  );
};

export default LandingPage;
