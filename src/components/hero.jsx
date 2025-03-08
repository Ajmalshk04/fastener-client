import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import images for "Advanced Manufacturing Solutions"
import ThreeDPrintingImg from "/src/assets/1584.jpg";
import LaserCuttingImg from "/src/assets/4465.jpg";
import RoboticAutomationImg from "/src/assets/133.jpg";
import PrecisionWeldingImg from "/src/assets/119.jpg";
import SurfaceTreatmentImg from "/src/assets/20130.jpg";
import ToolDieMakingImg from "/src/assets/3953.jpg";

// Import images for "Industries We Serve"
import AutomotiveImg from "/src/assets/596.jpg";
import MedicalDevicesImg from "/src/assets/14029.jpg";
import RenewableEnergyImg from "/src/assets/2148907418.jpg";
import TelecommunicationsImg from "/src/assets/194.jpg";
import FoodProcessingImg from "/src/assets/13411.jpg";
import RoboticsImg from "/src/assets/2149408315.jpg";

const heroData = [
  {
    title: "Advanced Manufacturing Solutions",
    description:
      "Discover cutting-edge manufacturing technologies designed to optimize production and quality.",
    items: [
      {
        title: "3D Printing",
        image: ThreeDPrintingImg,
      },
      {
        title: "Laser Cutting",
        image: LaserCuttingImg,
      },
      {
        title: "Robotic Automation",
        image: RoboticAutomationImg,
      },
      {
        title: "Precision Welding",
        image: PrecisionWeldingImg,
      },
      {
        title: "Surface Treatment",
        image: SurfaceTreatmentImg,
      },
      {
        title: "Tool & Die Making",
        image: ToolDieMakingImg,
      },
    ],
  },
  {
    title: "Industries We Serve",
    description: "Providing tailored manufacturing solutions for diverse industry needs.",
    items: [
      {
        title: "Automotive",
        image: AutomotiveImg,
      },
      {
        title: "Medical Devices",
        image: MedicalDevicesImg,
      },
      {
        title: "Renewable Energy",
        image: RenewableEnergyImg,
      },
      {
        title: "Telecommunications",
        image: TelecommunicationsImg,
      },
      {
        title: "Food Processing",
        image: FoodProcessingImg,
      },
      {
        title: "Robotics",
        image: RoboticsImg,
      },
    ],
  },
];

export function HeroSection() {
  return (
    <div className="hero-section mx-40 flex flex-col md:flex-row gap-2 mt-14">
      <div className="left-section md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center px-16">
        <h1 className="text-3xl font-bold mb-4">X COMPANY INNOVATION</h1>
        <p className="mb-8">
          X Company delivers state-of-the-art manufacturing solutions, ensuring precision, efficiency, and reliability for all your production needs.
        </p>
        <a href="/contact-us">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Contact Us
          </button>
        </a>
      </div>
      <div className="carousel-section md:w-1/2">
        {heroData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="hero-section__item mb-12">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <p className="mb-8">{section.description}</p>
            <Carousel
              opts={{ align: "start" }}
              className="max-w-4xl z-10"
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent className="z-10">
                {section.items.map((item, itemIndex) => (
                  <CarouselItem key={itemIndex} className="basis-1/5 z-auto">
                    <div className="">
                      <Card className="bg-opacity-0 border-none shadow-none z-0">
                        <CardContent className="flex flex-col aspect-square items-center justify-center p-2 text-center bg-opacity-10 z-10">
                          <div className="icon-wrapper z-0">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-44 h-36 object-cover"
                            />
                          </div>
                          <span className="text-sm font-semibold mt-2">
                            {item.title}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;