import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const ZetwerkIndustriesLandingPage = () => {
  const industries = [
    {
      name: "Transportation",
      description:
        "Automotive, tractor, truck, and heavy equipment manufacturers.",
    },
    {
      name: "Industrial Machinery & Equipment",
      description:
        "Machine components and finished equipment for industrial applications, including robotics and automation.",
    },
    {
      name: "Consumer Products, Electronics & Appliances",
      description:
        "Reducing supply risk for consumer electronics OEMs and manufacturers of consumer products and appliances.",
    },
    {
      name: "Construction & Infrastructure",
      description:
        "Supplier of extrusions, precision parts, and fabricated metal products for construction projects of any scale.",
    },
    {
      name: "Energy & Utilities",
      description:
        "Partnering with leading power generation, transmission, and distribution companies.",
    },
    {
      name: "Aerospace & Defense",
      description:
        "Strategic manufacturing partner for aerial vehicles, defense systems, aircraft parts, rocket casings, and other critical components.",
    },
  ];

  const services = [
    {
      name: "Project Management",
      description:
        "Dedicated project manager providing regular updates and total visibility into your order.",
    },
    {
      name: "Managed Inventory",
      description:
        "Zetwerk Managed Inventory™ (ZMI) offers lead times of a domestic supplier with cost savings of global sourcing.",
    },
    {
      name: "Managed Logistics",
      description:
        "Lower shipping costs, handling of inland transportation and customs clearance.",
    },
    {
      name: "Quality Control",
      description:
        "On-site quality control teams inspect components before shipping and upon delivery for ZMI customers.",
    },
    {
      name: "Secondary Operations",
      description:
        "Comprehensive range of in-house secondary operations at globally competitive prices.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Zetwerk for Manufacturers</h1>
        <p className="text-xl text-gray-600">
          Unlimited manufacturing capacity and capabilities for diverse
          industries
        </p>
        <Button className="mt-6" size="lg">
          Contact a Manufacturing Expert
        </Button>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Industries We Serve</h2>
        <p className="text-lg text-gray-700 mb-6">
          Zetwerk offers best-in-class precision manufacturing solutions
          alongside services that improve quality and reduce lead times,
          regardless of your industry.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{industry.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">
          Zetwerk Quality Certified
        </h2>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
              Zetwerk is certified by leading quality standards:
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">AS 9100D aerospace</Badge>
              <Badge variant="secondary">ISO 9001:2015</Badge>
              <Badge variant="secondary">ISO 45001:2018</Badge>
              <Badge variant="secondary">ISO 14001:2015</Badge>
              <Badge variant="secondary">IATF 16949:2016</Badge>
              <Badge variant="secondary">ISO 13485:2016</Badge>
            </div>
            <p className="mt-4">
              Global quality expertise in FMEA, APQP, SPC, MSA – we support PPAP
              requirements.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">
          Zetwerk Manufacturing Services
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          From single components to complete turnkey solutions, Zetwerk offers a
          wide range of manufacturing services:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Zetwerk?</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-4">
          <li>Unlimited manufacturing capacity</li>
          <li>Global raw material sourcing</li>
          <li>Comprehensive secondary processing</li>
          <li>Assembly, packaging, and distribution</li>
          <li>Quality control – AS 9100D & ISO 9001:2015 certified</li>
          <li>Vendor-managed inventory</li>
          <li>Supply chain management</li>
          <li>Project management with weekly updates</li>
        </ul>
      </section>

      <footer className="text-center mt-12">
        <Button size="lg">Contact a Zetwerk Manufacturing Expert</Button>
        <p className="mt-4 text-gray-600">
          Experience the Zetwerk difference in your manufacturing process.
        </p>
      </footer>
    </div>
  );
};

export default ZetwerkIndustriesLandingPage;
