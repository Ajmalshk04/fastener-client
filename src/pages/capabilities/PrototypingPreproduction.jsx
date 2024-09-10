import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <header className="bg-blue-600 dark:bg-blue-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Prototyping and Preproduction with Zetwerk
          </h1>
          <p className="text-xl mb-8">
            Helping companies and entrepreneurs around the world manufacture
            prototypes for their businesses
          </p>
          <Button variant="secondary" size="lg">
            Get a Quote
          </Button>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Prototyping Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "3D Printing / Additive Manufacturing",
              "Low Volume CNC Machining",
              "Low Volume Injection Molding",
              "Low Volume Sheet Metal Fabrication",
              "Low Volume Aluminum Extrusions",
              "Urethane Casting",
            ].map((service, index) => (
              <Card key={index} className="dark:bg-gray-800">
                <CardHeader>
                  <CardTitle>{service}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={`/api/placeholder/400/300?text=${encodeURIComponent(
                      service
                    )}`}
                    alt={service}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <p>
                    Advanced {service.toLowerCase()} for prototyping and
                    small-scale production.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zetwerk */}
      <section className="bg-gray-200 dark:bg-gray-800 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Zetwerk
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "No Minimum Order Quantity",
                description: "Iterate your designs without constraints.",
              },
              {
                title: "Process Expertise",
                description:
                  "Access to a variety of manufacturing technologies.",
              },
              {
                title: "Capability to Scale",
                description:
                  "Seamlessly transition from prototyping to production.",
              },
            ].map((item, index) => (
              <Card key={index} className="dark:bg-gray-700">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Printing Services */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            3D Printing Services
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                title: "MJF 3D Printing Services",
                content:
                  "Ideal for mono-color parts using materials like nylon. Can also produce multi-color parts. MJF Parts have good tolerance and a grainy surface finish.",
              },
              {
                title: "SLS 3D Printing Services",
                content:
                  "Ideal for mono-color parts using Nylon. SLS parts have a grainy surface finish.",
              },
              {
                title: "FDM 3D Printing Services",
                content:
                  "Ideal for mono-color parts where dimensional tolerance isn't high. Can be used with materials like PLA, ABS, Nylon, and PolyCarbonate.",
              },
              {
                title: "SLA 3D Printing Services",
                content:
                  "Ideal for parts with intricate details requiring a smooth surface finish. Available in a variety of SLA 3D Printing materials.",
              },
              {
                title: "Metal 3D Printing Services",
                content:
                  "Available in various processes like DMLS, SLM, etc. Common materials include aluminum alloys, titanium, and steel alloys.",
              },
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Other sections... */}

      {/* The Zetwerk Manufacturing Difference */}
      <section className="bg-gray-200 dark:bg-gray-800 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            The Zetwerk Manufacturing Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Project Management",
                description:
                  "Our team guides you through each step of the manufacturing process, providing regular updates and project information.",
              },
              {
                title: "Design for Manufacturing",
                description:
                  "We conduct a formal Design For Manufacturability (DFM) review to optimize your design for production, preventing issues and reducing production time.",
              },
              {
                title: "FAIR Approval",
                description:
                  "We conduct a First Article Inspection Report (FAIR) and detailed inspections to ensure all components meet your specifications.",
              },
              {
                title: "Managed Inventory for JIT",
                description:
                  "We offer managed inventory solutions to improve your supply chain resiliency and ability to react to market fluctuations.",
              },
            ].map((item, index) => (
              <Card key={index} className="dark:bg-gray-700">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Certifications</h2>
          <p className="mb-4">
            Zetwerk is ISO 9001:2015 and AS9100D certified.
          </p>
          <p>
            Our machine shops are IATF 16949:2016, ISO 13485:2016 and AS9100
            certified.
          </p>
          <p className="mt-4">
            Zetwerk has global quality expertise in FMEA, APQP, PPAP, SPC, and
            MSA.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Start Manufacturing Your Prototype Today
          </h2>
          <p className="mb-8">
            Submit your part drawings, 3D files, and other information for a
            prompt quote.
          </p>
          <Button variant="secondary" size="lg">
            Get a Quote
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-950 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Zetwerk. All rights reserved.</p>
          <p className="mt-2">ISO 9001:2015 and AS9100D certified</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
