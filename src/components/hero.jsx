// src/components/HeroSection.js

import * as React from "react";
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
    title: "Manufacturing Processes",
    description:
      "Explore manufacturing capabilities that support a wide range of applications and processes.",
    items: [
      {
        title: "Extrusions",
        icon: "icon-extrusion",
        link: "/capabilities/aluminum-extrusions/",
      },
      {
        title: "Die Casting",
        icon: "icon-die-casting",
        link: "/capabilities/die-casting/",
      },
      {
        title: "CNC Machining",
        icon: "icon-machining",
        link: "/capabilities/cnc-machining/",
      },
      {
        title: "Forging",
        icon: "icon-forging",
        link: "/capabilities/forging/",
      },
      {
        title: "Injection Molding",
        icon: "icon-injection",
        link: "/capabilities/injection-molding/",
      },
      {
        title: "Sheet Metal Stamping",
        icon: "icon-fabricated-metal",
        link: "/capabilities/sheet-metal-stamping/",
      },
      {
        title: "Prototyping and Pre-Production",
        icon: "icon-manufacturing",
        link: "/capabilities/prototyping-and-preproduction/",
      },
      {
        title: "Investment Casting",
        icon: "icon-investment",
        link: "/capabilities/investment-casting/",
      },
      {
        title: "Assemblies",
        icon: "icon-zet",
        link: "/capabilities/assemblies/",
      },
    ],
  },
  {
    title: "Manufacturing for Industries",
    description: "Explore a full spectrum of solutions across industries.",
    items: [
      {
        title: "Transportation",
        icon: "icon-transportation",
        link: "/industries/transportation/",
      },
      {
        title: "Industrial Machinery & Equipment",
        icon: "icon-industrial-machinery",
        link: "/industries/industrial-machinery-equipment/",
      },
      {
        title: "Consumer Products, Electronics & Appliances",
        icon: "icon-consumer-products",
        link: "/industries/consumer-products-electronics-appliances/",
      },
      {
        title: "Construction & Infrastructure",
        icon: "icon-construction",
        link: "/industries/construction-infrastructure/",
      },
      {
        title: "Energy & Utilities",
        icon: "icon-energy",
        link: "/industries/energy-utilities/",
      },
      {
        title: "Aerospace & Defense",
        icon: "icon-aerospace",
        link: "/industries/aerospace-defense/",
      },
    ],
  },
];

const dummyImageUrl = "https://via.placeholder.com/300x200";

export function HeroSection() {
  return (
    <div className="hero-section flex flex-col md:flex-row p-8">
      <div className="left-section md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center px-4 lg:px-40 ">
        <h1 className="text-3xl font-bold mb-4">MAXIMIZE MANUFACTURING</h1>
        <p className="mb-8">
          With an unbreakable supply chain and virtually unlimited manufacturing
          capacity, Zetwerk is your solution for getting the components you need
          when you need them.
        </p>
        <a href="/get-quote">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Get a Quote
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
                      <a href={item.link}>
                        <Card className="bg-opacity-0 border-none shadow-none z-0">
                          <CardContent className="flex flex-col aspect-square items-center justify-center p-2 text-center bg-opacity-10 z-10">
                            <div className="icon-wrapper z-0">
                              <img src={dummyImageUrl} alt={item.title} />
                            </div>
                            <span className="text-sm font-semibold mt-2">
                              {item.title}
                            </span>
                          </CardContent>
                        </Card>
                      </a>
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
//==============================================
