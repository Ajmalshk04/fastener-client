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

const InvestmentCastingLandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Investment Casting Services</h1>
        <p className="text-xl text-gray-600">
          High-quality components for a variety of applications
        </p>
        <Button className="mt-6" size="lg">
          Get a Quote
        </Button>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">
          Precision Investment-Cast Components
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Zetwerk provides high-quality investment cast components produced
          using a range of ferrous and non-ferrous alloys. We also perform
          necessary secondary operations on the cast parts such as finish
          machining, heat treatment, and surface treatment.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              <li>Complex designs with intricate features and fills</li>
              <li>
                High dimensional accuracy - tolerances as low as 0.003 in (0.076
                mm)
              </li>
              <li>Wall thickness as thin as 0.015 in (0.4 mm)</li>
              <li>Cost-effective alternative to machining</li>
              <li>
                Suitable for aerospace, medical devices, sports equipment, and
                more
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">
          Our Investment Casting Process
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Investment casting improves the quality of parts by using high-grade
          alloys. A wax pattern is first used to form an expendable ceramic mold
          which is then filled with molten metal to produce the final product.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Gravity-fed Casting</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Traditional method using gravity to fill the mold with molten
                metal.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Vacuum Casting</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Uses vacuum pressure to draw molten metal into the mold, ideal
                for thin-walled parts.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8" />

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Materials We Use</h2>
        <p className="text-lg text-gray-700 mb-4">
          We work with a variety of materials to meet your specific needs:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700 grid grid-cols-2 gap-4">
          <li>Carbon Steel</li>
          <li>Low-alloy Steel</li>
          <li>Stainless Steel</li>
          <li>Aluminum</li>
          <li>Brass</li>
          <li>Bronze</li>
          <li>Inconel</li>
          <li>Titanium</li>
          <li>Tungsten</li>
        </ul>
      </section>

      <Separator className="my-8" />

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="secondary">
            <AccordionTrigger>Secondary Operations</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6">
                <li>Machining for tight dimensional tolerances</li>
                <li>Heat treatment for desired mechanical properties</li>
                <li>
                  Surface finishing: pickling, passivation, electroplating,
                  polishing, powder coating, ultrasonic cleaning
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="prototyping">
            <AccordionTrigger>Prototyping</AccordionTrigger>
            <AccordionContent>
              <p>We offer two methods for creating wax patterns:</p>
              <ul className="list-disc pl-6">
                <li>Machined aluminum tool for wax injection</li>
                <li>
                  3D printed wax patterns for complex geometries and undercuts
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="assembly">
            <AccordionTrigger>Assembly Services</AccordionTrigger>
            <AccordionContent>
              <p>
                We provide assembly services and can procure additional parts
                like fasteners and other components required for assembly.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="quality">
            <AccordionTrigger>Quality Control and Inspection</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6">
                <li>Chemical composition testing</li>
                <li>Tensile strength testing</li>
                <li>Hardness testing</li>
                <li>Impact testing</li>
                <li>Dye penetrant testing</li>
                <li>Magnetic particle inspection</li>
                <li>Radiography inspection</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <Separator className="my-8" />

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">
          The Zetwerk Manufacturing Difference
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our team guides you through each step, keeping you informed
                throughout the manufacturing process.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Design for Manufacturing Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We conduct a formal Design For Manufacturability (DFM) review to
                optimize your design, prevent issues, and reduce production
                time.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>FAIR Approval</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We incorporate first-article inspection reports (FAIR) to ensure
                complete confidence in the parts you receive.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Managed Inventory for JIT</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our globally connected supply partnership helps build resiliency
                and multi-source supply for efficient inventory management.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Zetwerk?</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>Unlimited manufacturing capacity</li>
          <li>Global raw material sourcing</li>
          <li>Comprehensive secondary processing</li>
          <li>Assembly, packaging, and distribution services</li>
          <li>Quality control – AS 9100D & ISO 9001:2015 certified</li>
          <li>Vendor managed inventory</li>
          <li>Efficient supply chain management</li>
          <li>Hands-free project management with weekly updates</li>
        </ul>
      </section>

      <footer className="text-center mt-12">
        <Button size="lg">Request a Quote Today</Button>
        <p className="mt-4 text-gray-600">
          Experience the difference in your manufacturing process with our
          investment casting services.
        </p>
      </footer>
    </div>
  );
};

export default InvestmentCastingLandingPage;
