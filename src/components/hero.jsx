import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const heroData = [
  {
    title: "Advanced Manufacturing Solutions",
    description:
      "Discover cutting-edge manufacturing technologies designed to optimize production and quality.",
    items: [
      {
        title: "3D Printing",
        imageUrl: "/src/assets/1584.jpg", 
      },
      {
        title: "Laser Cutting",
        imageUrl: "/src/assets/4465.jpg",
      },
      {
        title: "Robotic Automation",
        imageUrl: "/src/assets/133.jpg", // Assuming this might represent robotics
      },
      {
        title: "Precision Welding",
        imageUrl: "/src/assets/119.jpg", // Welding-related image
      },
      {
        title: "Surface Treatment",
        imageUrl: "/src/assets/20130.jpg", // General manufacturing image as placeholder
      },
      {
        title: "Tool & Die Making",
        imageUrl: "/src/assets/3953.jpg", // General manufacturing image as placeholder
      },
    ],
  },
  {
    title: "Industries We Serve",
    description: "Providing tailored manufacturing solutions for diverse industry needs.",
    items: [
      {
        title: "Automotive",
        imageUrl: "/src/assets/596.jpg",
      },
      {
        title: "Medical Devices",
        imageUrl: "/src/assets/14029.jpg", // Medical-related image
      },
      {
        title: "Renewable Energy",
        imageUrl: "/src/assets/2148907418.jpg", // Wind turbines or renewable energy image
      },
      {
        title: "Telecommunications",
        imageUrl: "/src/assets/194.jpg", // Placeholder for telecommunications
      },
      {
        title: "Food Processing",
        imageUrl: "/src/assets/13411.jpg", // Placeholder for food processing
      },
      {
        title: "Robotics",
        imageUrl: "/src/assets/2149408315.jpg", // Another robotics-related image
      },
    ],
  },
];

export function HeroSection() {
  return (
    <div className="hero-section mx-40 flex flex-col md:flex-row gap-2 mt-14">
      <div className="left-section md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center px-16 ">
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
                            <img src={item.imageUrl} alt={item.title} className="w-44 h-36 object-cover" />
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