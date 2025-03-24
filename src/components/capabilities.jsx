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

// Import images
import ExtrusionsImg from "/src/assets/EXTRUSIONS.jpg";
import DieCastingImg from "/src/assets/DIECASTING.jpg";
import CNCMachiningImg from "/src/assets/CNCMACHINING.jpg";
import ForgingImg from "/src/assets/FORGING.jpg";
import InjectionMoldingImg from "/src/assets/INJECTIONMOLDING.jpg";
import SheetMetalStampingImg from "/src/assets/SHEETMETALSTAMPING.jpg";
import PrototypingImg from "/src/assets/PROTOTYPINGANDPRE-PRODUCTION.jpg";
import InvestmentCastingImg from "/src/assets/INVESTMENTCASTING.jpg";
import AssembliesImg from "/src/assets/ASSEMBLIES.jpg";

const capabilitiesData = [
  {
    title: "EXTRUSIONS",
    description:
      "Xofah delivers top-notch extrusions crafted from various aluminum alloys, tailored to meet even the most intricate cross-sectional demands of clients.",
    image: ExtrusionsImg, // Use imported image
  },
  {
    title: "DIE CASTING",
    description:
      "Xofah produces premium die-cast parts using an assortment of materials such as aluminum, zinc, copper, brass, and bronze alloys.",
    image: DieCastingImg,
  },
  {
    title: "CNC MACHINING",
    description:
      "Xofah offers precisely machined, high-quality components from bar stock, along with finishing services for as-cast and as-forged parts.",
    image: CNCMachiningImg,
  },
  {
    title: "FORGING",
    description:
      "Xofah provides a range of forging techniques, including drop forging, hot/cold forging, rolled ring forging, and press forging.",
    image: ForgingImg,
  },
  {
    title: "INJECTION MOLDING",
    description:
      "With injection molding, Xofah creates parts of varying sizes and complexities, effortlessly capturing small details, intricate shapes, and thin walls.",
    image: InjectionMoldingImg,
  },
  {
    title: "SHEET METAL STAMPING",
    description:
      "Xofah crafts custom sheet metal stampings using a diverse selection of tailored materials.",
    image: SheetMetalStampingImg,
  },
  {
    title: "PROTOTYPING AND PRE-PRODUCTION",
    description:
      "Xofah supports businesses and innovators globally by manufacturing prototypes to bring their ideas to life.",
    image: PrototypingImg,
  },
  {
    title: "INVESTMENT CASTING",
    description:
      "Xofah creates investment cast parts using carbon steel, low-alloy steel, stainless steel, and a broad array of non-ferrous metals.",
    image: InvestmentCastingImg,
  },
  {
    title: "ASSEMBLIES",
    description:
      "Equipped with spacious, adaptable factories, Xofah establishes dedicated assembly lines to meet volume needs for a wide range of electro-mechanical products and assemblies.",
    image: AssembliesImg,
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
          Leveraging our global network of owned, operated, and partnered manufacturing facilities, Xofah delivers components built to your specifications right to your door, with industry-leading turnaround times. Here’s a glimpse of Xofah’s manufacturing expertise.
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

const CapabilityCard = ({ title, description, image }) => {
  return (
    <Card className="overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
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