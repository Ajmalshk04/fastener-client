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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { headerData } from "./data/header";
import { useAuth } from "@/hooks/useAuth";
import { useSelector } from "react-redux";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { handleLogOut } = useAuth();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isActive = (path) => {
    return location.pathname === path;
  };
  const isMainActive = (item) => {
    if (location.pathname === item.main.link) return true;
    return item.subHeaders.some(
      (subItem) => location.pathname === subItem.link
    );
  };
  return (
    <header className="sticky top-0 backdrop-blur-lg shadow-md z-[777]">
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
                      <Button
                        variant="ghost"
                        className={
                          isMainActive(item)
                            ? "bg-primary text-white"
                            : "light:hover:text-gray-800"
                        }
                      >
                        {item.main.title}
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="grid grid-cols-3 max-w-4xl mt-2 z-[100] items-center gap-y-4">
                      {item.subHeaders.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.link}
                          className={`block py-2 px-4 hover:bg-secondary rounded-xl ${
                            isActive(subItem.link)
                              ? "bg-primary text-white hover:text-gray-800 dark:hover:text-white"
                              : "light:hover:text-gray-800"
                          }`}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </HoverCardContent>
                  </HoverCard>
                ) : (
                  <Button
                    variant="ghost"
                    asChild
                    className={
                      isActive(item.main.link) ? "bg-primary text-white" : ""
                    }
                  >
                    <Link to={item.main.link}>{item.main.title}</Link>
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
          <Button
            className="text-white"
            onClick={() => {
              navigate("/customer/dashboard");
            }}
          >
            Get a Quote Now
          </Button>
          {isAuthenticated ? (
            <Button onClick={handleLogOut} className="text-white">
              Logout
            </Button>
          ) : (
            <HoverCard openDelay={0}>
              <HoverCardTrigger asChild>
                <Button className="text-white">Login</Button>
              </HoverCardTrigger>
              <HoverCardContent
                align="start"
                className="flex flex-col max-w-7xl p-2"
              >
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
          )}
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
                  <AccordionTrigger
                    className={`w-full text-left py-2 px-4 ${
                      isMainActive(item)
                        ? "bg-primary text-primary-foreground"
                        : ""
                    }`}
                  >
                    {item.main.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-4">
                      {item.subHeaders.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.link}
                          className={`block py-2 ${
                            isActive(subItem.link)
                              ? "bg-primary text-primary-foreground"
                              : ""
                          }`}
                        >
                          {subItem.title}
                        </Link>
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
//=================================================

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ModeToggle } from "@/components/mode-toggle";
// import { Menu, X } from "lucide-react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import { Modal, ModalHeader, ModalBody, ModalFooter } from "@/components/modal"; // Adjust the path as needed
// import {
//   Accordion,
//   AccordionItem,
//   AccordionTrigger,
//   AccordionContent,
// } from "@/components/ui/accordion"; // Adjust the path as needed
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { headerData } from "./data/header";
// import { useAuth } from "@/hooks/useAuth";
// import { useSelector } from "react-redux";

// const Header = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const { handleLogOut } = useAuth();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const isActive = (path) => location.pathname === path;

//   const isMainActive = (item) => {
//     if (location.pathname === item.main.link) return true;
//     return item.subHeaders.some(
//       (subItem) => location.pathname === subItem.link
//     );
//   };

//   return (
//     <header className="sticky top-0 backdrop-blur-lg shadow-md z-[777]">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex justify-between items-center">
//           <div className="text-2xl font-bold">
//             <Link to="/">Logo</Link>
//           </div>
//           <div className="hidden md:flex space-x-4">
//             <NavigationMenu>
//               <NavigationMenuList>
//                 {headerData.map((item, index) => (
//                   <NavigationMenuItem key={index}>
//                     {item.subHeaders.length > 0 ? (
//                       <NavigationMenuTrigger>
//                         <Button
//                           variant="ghost"
//                           className={
//                             isMainActive(item)
//                               ? "bg-primary text-white"
//                               : "light:hover:text-gray-800"
//                           }
//                         >
//                           {item.main.title}
//                         </Button>
//                       </NavigationMenuTrigger>
//                     ) : (
//                       <NavigationMenuLink
//                         asChild
//                         className={
//                           isActive(item.main.link)
//                             ? "bg-primary text-white"
//                             : ""
//                         }
//                       >
//                         <Link to={item.main.link}>{item.main.title}</Link>
//                       </NavigationMenuLink>
//                     )}
//                     {item.subHeaders.length > 0 && (
//                       <NavigationMenuContent>
//                         <ul className="grid grid-cols-1 gap-4 p-4 md:w-[300px] lg:w-[400px]">
//                           {item.subHeaders.map((subItem, subIndex) => (
//                             <li key={subIndex}>
//                               <NavigationMenuLink
//                                 asChild
//                                 className={`block py-2 px-4 rounded-xl ${
//                                   isActive(subItem.link)
//                                     ? "bg-primary text-white"
//                                     : "light:hover:text-gray-800"
//                                 }`}
//                               >
//                                 <Link to={subItem.link}>{subItem.title}</Link>
//                               </NavigationMenuLink>
//                             </li>
//                           ))}
//                         </ul>
//                       </NavigationMenuContent>
//                     )}
//                   </NavigationMenuItem>
//                 ))}
//               </NavigationMenuList>
//             </NavigationMenu>
//           </div>
//           <div className="md:hidden">
//             <Button variant="outline" onClick={() => setMobileMenuOpen(true)}>
//               <Menu className="h-5 w-5" />
//             </Button>
//           </div>
//           <Button
//             className="text-white"
//             onClick={() => navigate("/customer/dashboard")}
//           >
//             Get a Quote
//           </Button>
//           {isAuthenticated ? (
//             <Button onClick={handleLogOut} className="text-white">
//               Logout
//             </Button>
//           ) : (
//             <Button className="text-white">Login</Button>
//           )}
//           <ModeToggle />
//         </div>
//       </div>

//       {/* Mobile Menu Modal */}
//       {isMobileMenuOpen && (
//         <Modal
//           open={isMobileMenuOpen}
//           onClose={() => setMobileMenuOpen(false)}
//           className="bg-primary"
//         >
//           <ModalHeader>
//             <div className="flex justify-between items-center px-6">
//               <h2 className="text-lg font-bold">Menu</h2>
//               <Button variant="ghost" onClick={() => setMobileMenuOpen(false)}>
//                 <X className="h-6 w-6" />
//               </Button>
//             </div>
//           </ModalHeader>
//           <ModalBody>
//             <Accordion type="single" collapsible>
//               {headerData.map((item, index) => (
//                 <AccordionItem key={index} value={`item-${index}`}>
//                   <AccordionTrigger
//                     className={`w-full text-left py-2 px-4 ${
//                       isMainActive(item)
//                         ? "bg-primary text-primary-foreground"
//                         : ""
//                     }`}
//                   >
//                     {item.main.title}
//                   </AccordionTrigger>
//                   <AccordionContent>
//                     <div className="pl-4">
//                       {item.subHeaders.map((subItem, subIndex) => (
//                         <Link
//                           key={subIndex}
//                           to={subItem.link}
//                           className={`block py-2 ${
//                             isActive(subItem.link)
//                               ? "bg-primary text-primary-foreground"
//                               : ""
//                           }`}
//                         >
//                           {subItem.title}
//                         </Link>
//                       ))}
//                     </div>
//                   </AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </ModalBody>
//           <ModalFooter></ModalFooter>
//         </Modal>
//       )}
//     </header>
//   );
// };

// export default Header;
