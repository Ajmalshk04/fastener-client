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
      "X delivers top-notch extrusions crafted from various aluminum alloys, tailored to meet even the most intricate cross-sectional demands of clients.",
    imageUrl: "/assets/EXTRUSIONS.jpg",
  },
  {
    title: "DIE CASTING",
    description:
      "X produces premium die-cast parts using an assortment of materials such as aluminum, zinc, copper, brass, and bronze alloys.",
    imageUrl: "/assets/DIECASTING.jpg",
  },
  {
    title: "CNC MACHINING",
    description:
      "X offers precisely machined, high-quality components from bar stock, along with finishing services for as-cast and as-forged parts.",
    imageUrl: "/assets/CNCMACHINING.jpg",
  },
  {
    title: "FORGING",
    description:
      "X provides a range of forging techniques, including drop forging, hot/cold forging, rolled ring forging, and press forging.",
    imageUrl: "/assets/FORGING.jpg",
  },
  {
    title: "INJECTION MOLDING",
    description:
      "With injection molding, X creates parts of varying sizes and complexities, effortlessly capturing small details, intricate shapes, and thin walls.",
    imageUrl: "/assets/INJECTIONMOLDING.jpg",
  },
  {
    title: "SHEET METAL STAMPING",
    description:
      "X crafts custom sheet metal stampings using a diverse selection of tailored materials.",
    imageUrl: "/assets/SHEETMETALSTAMPING.jpg",
  },
  {
    title: "PROTOTYPING AND PRE-PRODUCTION",
    description:
      "X supports businesses and innovators globally by manufacturing prototypes to bring their ideas to life.",
    imageUrl: "/assets/PROTOTYPINGANDPRE-PRODUCTION.jpg",
  },
  {
    title: "INVESTMENT CASTING",
    description:
      "X creates investment cast parts using carbon steel, low-alloy steel, stainless steel, and a broad array of non-ferrous metals.",
    imageUrl: "/assets/INVESTMENTCASTING.jpg",
  },
  {
    title: "ASSEMBLIES",
    description:
      "Equipped with spacious, adaptable factories, X establishes dedicated assembly lines to meet volume needs for a wide range of electro-mechanical products and assemblies.",
    imageUrl: "/assets/ASSEMBLIES.jpg",
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
          Leveraging our global network of owned, operated, and partnered manufacturing facilities, X delivers components built to your specifications right to your door, with industry-leading turnaround times. Here’s a glimpse of X’s manufacturing expertise.
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
        {/* <Button variant="outline">Learn More</Button> */}
      </CardFooter>
    </Card>
  );
};

export default Capabilities;