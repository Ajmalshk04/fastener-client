import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/custom/hover-card"; // Adjust the path as needed
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@/components/modal"; // Adjust the path as needed
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // Adjust the path as needed
import { Link } from "react-router-dom";

const headerData = [
  {
    main: { title: "CAPABILITIES", link: "/capabilities" },
    subHeaders: [
      { title: "All Manufacturing", link: "/capabilities/all-manufacturing" },
      { title: "Capabilities", link: "/capabilities/capabilities" },
      { title: "CNC Machining", link: "/capabilities/cnc-machining" },
      {
        title: "Sheet Metal Stamping",
        link: "/capabilities/sheet-metal-stamping",
      },
      { title: "Assemblies", link: "/capabilities/assemblies" },
      {
        title: "Aluminum Extrusions",
        link: "/capabilities/aluminum-extrusions",
      },
      { title: "Forging", link: "/capabilities/forging" },
      {
        title: "Prototyping and Preproduction",
        link: "/capabilities/prototyping-preproduction",
      },
      { title: "Die Casting", link: "/capabilities/die-casting" },
      { title: "Injection Molding", link: "/capabilities/injection-molding" },
      { title: "Investment Casting", link: "/capabilities/investment-casting" },
    ],
  },
  {
    main: { title: "INDUSTRIES", link: "/industries" },
    subHeaders: [
      { title: "All Industries", link: "/industries/all" },
      {
        title: "Construction & Industrial",
        link: "/industries/construction-industrial",
      },
      { title: "Machinery", link: "/industries/machinery" },
      { title: "Energy & Utilities", link: "/industries/energy-utilities" },
      { title: "Solar Projects", link: "/industries/solar-projects" },
      {
        title: "Consumer Products, Electronics & Appliances",
        link: "/industries/consumer-products-electronics-appliances",
      },
      { title: "Aerospace & Defense", link: "/industries/aerospace-defense" },
      { title: "Automotive", link: "/industries/automotive" },
      { title: "Infrastructure", link: "/industries/infrastructure" },
    ],
  },
  {
    main: { title: "WHY US.", link: "/why-us" },
    subHeaders: [], // Empty array for consistency
  },
  {
    main: { title: "MANUFACTURING SERVICES", link: "/manufacturing-services" },
    subHeaders: [
      {
        title: "All Manufacturing Services",
        link: "/manufacturing-services/all",
      },
      {
        title: "Project Management",
        link: "/manufacturing-services/project-management",
      },
      {
        title: "Managed Supply Chain",
        link: "/manufacturing-services/managed-supply-chain",
      },
      { title: "How Zetwerk", link: "/manufacturing-services/how-zetwerk" },
      {
        title: "Quality Control",
        link: "/manufacturing-services/quality-control",
      },
      {
        title: "Zetwerk Managed Inventory",
        link: "/manufacturing-services/zetwerk-managed-inventory",
      },
      {
        title: "Managed Logistics",
        link: "/manufacturing-services/managed-logistics",
      },
    ],
  },
  {
    main: { title: "ABOUT", link: "/about" },
    subHeaders: [],
  },
];

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link to={"/"}>Logo</Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            {headerData.map((item, index) => (
              <div key={index} className="relative">
                {item.subHeaders.length > 0 ? (
                  <HoverCard openDelay={200}>
                    <HoverCardTrigger asChild>
                      <Button variant="ghost">{item.main.title}</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="grid grid-cols-3 max-w-4xl mt-2 z-50">
                      {item.subHeaders.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.link}
                          className="block py-2 px-4 hover:bg-secondary rounded-full"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </HoverCardContent>
                  </HoverCard>
                ) : (
                  <Button variant="ghost" asChild>
                    <a href={item.main.link}>{item.main.title}</a>
                  </Button>
                )}
              </div>
            ))}
          </nav>
          <div className="md:hidden">
            <Button variant="outline" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          <Button className="text-white">Get a Quote</Button>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button className="text-white">Login</Button>
            </HoverCardTrigger>
            <HoverCardContent align="end" className="flex flex-col max-w-7xl">
              <Link
                to="/auth/customer/sign-in"
                className="block py-2 px-4 hover:bg-secondary rounded-md"
              >
                Customer Login
              </Link>
              <Link
                to="/auth/supplier/sign-in"
                className="block py-2 px-4 hover:bg-secondary rounded-md"
              >
                Supplier Login
              </Link>
            </HoverCardContent>
          </HoverCard>
          <ModeToggle />
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {isMobileMenuOpen && (
        <Modal
          open={isMobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="bg-primary"
        >
          <ModalHeader>
            <div className="flex justify-between items-center px-6">
              <h2 className="text-lg font-bold">Menu</h2>
              <Button variant="ghost" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
          </ModalHeader>
          <ModalBody>
            <Accordion type="single" collapsible>
              {headerData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="w-full text-left py-2 px-4">
                    {item.main.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-4">
                      {item.subHeaders.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.link}
                          className="block py-2"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      )}
    </header>
  );
};

export default Header;
