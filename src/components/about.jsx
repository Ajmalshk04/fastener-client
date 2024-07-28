import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sections = [
  {
    title: "UP TO 50% REDUCTION IN LEAD TIMES",
    content:
      "Zetwerk offers transparent tracking and timely delivery for customers.",
  },
  {
    title: "9 MILLION+ NUMBER OF PARTS MANUFACTURED",
    content:
      "Zetwerk provides unmatched manufacturing capabilities for all industries.",
  },
  {
    title: "1800+ ACTIVE CUSTOMERS",
    content:
      "Zetwerk’s manufacturing network caters to clients across the globe.",
  },
  {
    title: "20+ COUNTRIES ZETWERK DELIVERS TO",
    content:
      "Zetwerk’s manufacturing network caters to clients across the globe.",
  },
  {
    title: "UNBREAKABLE SUPPLY CHAIN",
    content:
      "Zetwerk’s global supply chain management has built-in redundancies, so typical production issues never become your problem. Zetwerk is your local supplier no matter where in the world you manufacture your product.",
  },
  {
    title: "AVOIDING BUSINESS DISRUPTION",
    content:
      "Zetwerk Managed Inventory provides Just in time deliveries in less than 5 days, regardless of where your components are manufactured. ZMI makes months-long lead times a thing of the past.",
  },
  {
    title: "PROVEN TECHNOLOGY",
    content:
      "Zetwerk’s in-house Manufacturing Operating System software includes proprietary tools, technology, and teams for project management, offering automation, transparency, and quality across manufacturing operations.",
  },
  {
    title: "UNLIMITED MANUFACTURING CAPACITY",
    content:
      "Zetwerk has the capacity to double production needs overnight regardless of product, specification, scale, or geography. Its partner facilities and worldwide supplier base enable scaling up and down production with a quick turnaround time.",
  },
];

const About = () => {
  // Split the sections into two halves
  const firstHalf = sections.slice(0, sections.length / 2);
  const secondHalf = sections.slice(sections.length / 2);

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">ABOUT ZETWERK</h1>
      <p className="mb-6">
        Zetwerk offers high-quality production, globally competitive costs, and
        unparalleled lead times in the manufacturing of capital goods, consumer
        goods, and precision parts.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Half */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {firstHalf.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Second Half */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondHalf.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
