import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const industries = [
  {
    title: "TRANSPORTATION",
    content:
      "Zetwerk provides manufacturing services for the transportation industry, including automotive, tractor, truck, and heavy equipment manufacturers.",
  },
  {
    title: "INDUSTRIAL MACHINERY & EQUIPMENT",
    content:
      "Zetwerk manufactures machine components and finished equipment for virtually any industrial application, including robotics and automation.",
  },
  {
    title: "CONSUMER PRODUCTS, ELECTRONICS & APPLIANCES",
    content:
      "Zetwerk reduces supply risk for consumer electronics OEMs and manufacturers of consumer products and appliances.",
  },
  {
    title: "CONSTRUCTION & INFRASTRUCTURE",
    content:
      "Zetwerk is a trusted supplier of extrusions, precision parts, and fabricated metal products for construction projects of any scale.",
  },
  {
    title: "ENERGY & UTILITIES",
    content:
      "Zetwerk partners with leading power generation, transmission, and distribution companies to bring energy and utilities manufacturing projects to life.",
  },
  {
    title: "AEROSPACE & DEFENSE",
    content:
      "Zetwerk is a strategic, trusted manufacturing partner for aerial vehicles, defense systems, aircraft parts, rocket casings, and other critical components.",
  },
];

const Industries = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">INDUSTRIES</h1>
      <p className="mb-6">
        Zetwerk is a manufacturing services provider that offers virtually
        unlimited manufacturing capacity and a wide range of capabilities.
        Regardless of your industry, from aircraft engines, or medical equipment
        to mining, we offer best-in-class precision manufacturing solutions
        alongside manufacturing services that improve quality and reduce lead
        times.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {industries.map((industry, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{industry.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{industry.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Industries;
