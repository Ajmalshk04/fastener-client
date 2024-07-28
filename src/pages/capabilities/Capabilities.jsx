import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/typography";

const capabilitiesData = [
  {
    title: "EXTRUSIONS",
    description:
      "Zetwerk manufactures high-quality extrusions produced using a range of aluminum alloys, with cross-sections that are as complex as customers require.",
    imageUrl: "https://via.placeholder.com/300x200?text=Extrusions",
  },
  {
    title: "DIE CASTING",
    description:
      "Zetwerk provides high-quality die-cast components produced using a range of materials including aluminum, zinc, copper, brass, and bronze alloys.",
    imageUrl: "https://via.placeholder.com/300x200?text=Die+Casting",
  },
  {
    title: "CNC MACHINING",
    description:
      "Zetwerk provides high-quality, tight toleranced components machined from bar stock. Zetwerk also finishes as-cast and as-forged components.",
    imageUrl: "https://via.placeholder.com/300x200?text=CNC+Machining",
  },
  {
    title: "FORGING",
    description:
      "Zetwerk offers a variety of forging types, including drop forging, hot/cold forging, rolled ring forging, and press forging.",
    imageUrl: "https://via.placeholder.com/300x200?text=Forging",
  },
  {
    title: "INJECTION MOLDING",
    description:
      "Injection molding can produce parts in a wide range of sizes and complexity. Small features, intricate geometries, and thin walls can be captured with ease.",
    imageUrl: "https://via.placeholder.com/300x200?text=Injection+Molding",
  },
  {
    title: "SHEET METAL STAMPING",
    description:
      "Zetwerk produces custom sheet metal stampings in a wide range of custom materials.",
    imageUrl: "https://via.placeholder.com/300x200?text=Sheet+Metal+Stamping",
  },
  {
    title: "PROTOTYPING AND PRE-PRODUCTION",
    description:
      "Zetwerk helps companies and entrepreneurs around the world manufacture prototypes for their businesses.",
    imageUrl: "https://via.placeholder.com/300x200?text=Prototyping",
  },
  {
    title: "INVESTMENT CASTING",
    description:
      "Zetwerk produces investment cast components using carbon steel, low-alloy steel, and stainless steel grades, in addition to a wide variety of non-ferrous metals.",
    imageUrl: "https://via.placeholder.com/300x200?text=Investment+Casting",
  },
  {
    title: "ASSEMBLIES",
    description:
      "With large flexible layout factories, Zetwerk is able to set up dedicated assembly lines as per the volume requirements for a wide variety of electro-mechanical products and assemblies.",
    imageUrl: "https://via.placeholder.com/300x200?text=Assemblies",
  },
];

const Capabilities = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <Typography variant="h2" className="text-center mb-8">
          OUR CAPABILITIES
        </Typography>
        <Typography
          variant="body1"
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          With our worldwide network of owned, operated, and partner
          manufacturing plants, we can have components built to your
          specification at your doorstep with industry-best lead times. These
          are just a few of Zetwerk's manufacturing capabilities.
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilitiesData.map((capability, index) => (
            <CapabilityCard key={index} {...capability} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CapabilityCard = ({ title, description, imageUrl }) => {
  return (
    <Card className="overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Learn More</Button>
      </CardFooter>
    </Card>
  );
};

export default Capabilities;
