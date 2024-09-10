// import React, { useState, useCallback, useEffect } from "react";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { User, Package, ChevronRight, ChevronLeft } from "lucide-react"; // Specific icon imports

// const navItems = [
//   { title: "Suppliers", icon: Package, variant: "ghost" },
//   { title: "Users", icon: User, variant: "default" },
// ];

// const useCollapsedState = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   useEffect(() => {
//     const collapsed = document.cookie
//       .split("; ")
//       .find((row) => row.startsWith("react-resizable-panels:collapsed"))
//       ?.split("=")[1];
//     setIsCollapsed(JSON.parse(collapsed ?? "false"));
//   }, []);

//   const handleCollapse = (collapsed) => {
//     setIsCollapsed(collapsed);
//     document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
//       collapsed
//     )}`;
//   };

//   return [isCollapsed, handleCollapse];
// };

// export function Sidebar() {
//   const [isCollapsed, handleCollapse] = useCollapsedState();
//   const [activeItem, setActiveItem] = useState(null);

//   const renderNavItem = useCallback(
//     (item, index) => (
//       <Tooltip key={index} delayDuration={0}>
//         <TooltipTrigger asChild>
//           <Button
//             variant={activeItem === item.title ? "default" : "ghost"}
//             className={cn(
//               "w-full justify-start",
//               isCollapsed ? "h-9 w-9 p-0" : "px-2",
//               activeItem === item.title
//                 ? "bg-primary text-primary-foreground"
//                 : "text-secondary-foreground"
//             )}
//             onClick={() => setActiveItem(item.title)}
//           >
//             {React.createElement(item.icon, {
//               className: cn("h-4 w-4", isCollapsed ? "mx-auto" : "mr-2"),
//             })}
//             {!isCollapsed && <span>{item.title}</span>}
//           </Button>
//         </TooltipTrigger>
//         <TooltipContent side="right" className={cn(!isCollapsed && "hidden")}>
//           {item.title}
//         </TooltipContent>
//       </Tooltip>
//     ),
//     [isCollapsed, activeItem]
//   );

//   return (
//     <div className="flex h-screen bg-background text-foreground border-r">
//       <TooltipProvider delayDuration={0}>
//         <div
//           className={cn(
//             "flex flex-col transition-all duration-300 ease-in-out",
//             isCollapsed ? "w-16" : "w-64"
//           )}
//         >
//           <div className="flex-1 flex flex-col items-center  gap-4 px-2 py-6">
//             <div className="font-bold text-lg flex items-center justify-center">
//               {!isCollapsed && "Supplier"}
//             </div>
//             {navItems.map(renderNavItem)}
//           </div>
//           <Button
//             variant="ghost"
//             onClick={() => handleCollapse(!isCollapsed)}
//             className="absolute top-6 right-0"
//           >
//             {isCollapsed ? (
//               <ChevronRight className="h-4 w-4" />
//             ) : (
//               <ChevronLeft className="h-4 w-4" />
//             )}
//           </Button>
//         </div>
//       </TooltipProvider>
//     </div>
//   );
// }
//==============================================================
// import React, { useState, useCallback, useEffect } from "react";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import {
//   User,
//   Package,
//   ChevronRight,
//   ChevronLeft,
//   Home,
//   Briefcase,
//   ShoppingCart,
//   MessageCircle,
//   User as ProfileIcon,
//   Cog,
// } from "lucide-react";

// const navItems = [
//   { title: "First Steps", icon: Home, variant: "ghost" },
//   { title: "Job Board", icon: Briefcase, variant: "ghost" },
//   { title: "My Orders", icon: ShoppingCart, variant: "ghost" },
//   { title: "Support", icon: MessageCircle, variant: "ghost" },
//   { title: "Profile", icon: ProfileIcon, variant: "default" },
// ];

// const useCollapsedState = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   useEffect(() => {
//     const collapsed = document.cookie
//       .split("; ")
//       .find((row) => row.startsWith("react-resizable-panels:collapsed"))
//       ?.split("=")[1];
//     setIsCollapsed(JSON.parse(collapsed ?? "false"));
//   }, []);

//   const handleCollapse = (collapsed) => {
//     setIsCollapsed(collapsed);
//     document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
//       collapsed
//     )}`;
//   };

//   return [isCollapsed, handleCollapse];
// };

// export function Sidebar() {
//   const [isCollapsed, handleCollapse] = useCollapsedState();
//   const [activeItem, setActiveItem] = useState(null);

//   const renderNavItem = useCallback(
//     (item, index) => (
//       <Tooltip key={index} delayDuration={0}>
//         <TooltipTrigger asChild>
//           <Button
//             variant={activeItem === item.title ? "default" : "ghost"}
//             className={cn(
//               "w-full justify-start",
//               isCollapsed ? "h-9 w-9 p-0 justify-between" : "px-2",
//               activeItem === item.title ? "bg-primary text-white" : ""
//             )}
//             onClick={() => setActiveItem(item.title)}
//           >
//             {React.createElement(item.icon, {
//               className: cn("h-4 w-4", isCollapsed ? "mx-auto" : "mr-2"),
//             })}
//             {!isCollapsed && <span>{item.title}</span>}
//           </Button>
//         </TooltipTrigger>
//         <TooltipContent
//           side="right"
//           className={cn(!isCollapsed && "hidden", "text-white")}
//         >
//           {item.title}
//         </TooltipContent>
//       </Tooltip>
//     ),
//     [isCollapsed, activeItem]
//   );

//   return (
//     <div className="flex h-screen bg-background text-foreground  border-gray-200">
//       <TooltipProvider delayDuration={0}>
//         <div
//           className={cn(
//             "flex flex-col transition-all duration-300 ease-in-out border border-r-2  relative",
//             isCollapsed ? "w-16" : "w-64"
//           )}
//         >
//           <div className="flex-1 flex flex-col gap-4  items-center">
//             <div
//               className={`font-semibold w-full text-lg flex items-center justify-center border-b-[1px] px-4 py-5  ${
//                 isCollapsed ? "gap-0" : "gap-2"
//               }`}
//             >
//               <Cog className="h-6 w-6" />
//               {!isCollapsed && "Supplier"}
//             </div>
//             <div className="px-4 flex flex-col w-full  space-y-4">
//               {navItems.map(renderNavItem)}
//             </div>
//           </div>
//           <Button
//             onClick={() => handleCollapse(!isCollapsed)}
//             size="icon"
//             variant="outline"
//             className="absolute -right-5 top-4 z-50 hidden rounded-full md:inline-flex"
//           >
//             {isCollapsed ? (
//               <ChevronRight className="h-4 w-4" />
//             ) : (
//               <ChevronLeft className="h-4 w-4" />
//             )}
//           </Button>
//         </div>
//       </TooltipProvider>
//     </div>
//   );
// }
//====================================================
// import React, { useState, useCallback, useEffect } from "react";
// import { Link } from "react-router-dom"; // Import Link
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import {
//   User,
//   Package,
//   ChevronRight,
//   ChevronLeft,
//   Home,
//   Briefcase,
//   ShoppingCart,
//   MessageCircle,
//   User as ProfileIcon,
//   Cog,
//   Grid,
// } from "lucide-react";

// const navItems = [
//   {
//     title: "Dashboard",
//     icon: Grid,
//     variant: "ghost",
//     path: "/supplier/dashboard/home",
//   },
//   {
//     title: "First Step",
//     icon: Home,
//     variant: "ghost",
//     path: "/supplier/dashboard/partner-onboarding",
//   },
//   {
//     title: "Job Board",
//     icon: Briefcase,
//     variant: "ghost",
//     path: "/supplier/dashboard/job-board",
//   },
//   {
//     title: "My Orders",
//     icon: ShoppingCart,
//     variant: "ghost",
//     path: "/supplier/dashboard/my-orders",
//   },
//   {
//     title: "Support",
//     icon: MessageCircle,
//     variant: "ghost",
//     path: "/supplier/dashboard/support",
//   },
//   {
//     title: "Profile",
//     icon: ProfileIcon,
//     variant: "default",
//     path: "/supplier/dashboard/profile",
//   },
// ];

// const useCollapsedState = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   useEffect(() => {
//     const collapsed = document.cookie
//       .split("; ")
//       .find((row) => row.startsWith("react-resizable-panels:collapsed"))
//       ?.split("=")[1];
//     setIsCollapsed(JSON.parse(collapsed ?? "false"));
//   }, []);

//   const handleCollapse = (collapsed) => {
//     setIsCollapsed(collapsed);
//     document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
//       collapsed
//     )}`;
//   };

//   return [isCollapsed, handleCollapse];
// };

// export function Sidebar() {
//   const [isCollapsed, handleCollapse] = useCollapsedState();
//   const [activeItem, setActiveItem] = useState(null);

//   const renderNavItem = useCallback(
//     (item, index) => (
//       <Tooltip key={index} delayDuration={0}>
//         <TooltipTrigger asChild>
//           <Link to={item.path} onClick={() => setActiveItem(item.title)}>
//             <Button
//               variant={activeItem === item.title ? "default" : "ghost"}
//               className={cn(
//                 "w-full justify-start",
//                 isCollapsed ? "h-9 w-9 p-0 justify-between" : "px-2",
//                 activeItem === item.title ? "bg-primary text-white" : ""
//               )}
//             >
//               {React.createElement(item.icon, {
//                 className: cn("h-4 w-4", isCollapsed ? "mx-auto" : "mr-2"),
//               })}
//               {!isCollapsed && <span>{item.title}</span>}
//             </Button>
//           </Link>
//         </TooltipTrigger>
//         <TooltipContent
//           side="right"
//           className={cn(!isCollapsed && "hidden", "text-white")}
//         >
//           {item.title}
//         </TooltipContent>
//       </Tooltip>
//     ),
//     [isCollapsed, activeItem]
//   );

//   return (
//     <div className="flex bg-background text-foreground border-gray-200">
//       <TooltipProvider delayDuration={0}>
//         <div
//           className={cn(
//             "flex flex-col transition-all duration-300 ease-in-out border border-r-2 relative",
//             isCollapsed ? "w-16" : "w-64"
//           )}
//         >
//           <div className="flex-1 flex flex-col gap-4 items-center">
//             <div
//               className={`font-semibold w-full text-lg flex items-center justify-center border-b-[1px] px-4 py-5 ${
//                 isCollapsed ? "gap-0" : "gap-2"
//               }`}
//             >
//               <Cog className="h-6 w-6" />
//               {!isCollapsed && "Supplier"}
//             </div>
//             <div className="px-4 flex flex-col w-full space-y-4">
//               {navItems.map(renderNavItem)}
//             </div>
//           </div>
//           <Button
//             onClick={() => handleCollapse(!isCollapsed)}
//             size="icon"
//             variant="outline"
//             className="absolute -right-5 top-4 z-50 hidden rounded-full md:inline-flex"
//           >
//             {isCollapsed ? (
//               <ChevronRight className="h-4 w-4" />
//             ) : (
//               <ChevronLeft className="h-4 w-4" />
//             )}
//           </Button>
//         </div>
//       </TooltipProvider>
//     </div>
//   );
// }
//=========================================================
import React, { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Grid,
  Home,
  Briefcase,
  ShoppingCart,
  MessageCircle,
  User as ProfileIcon,
  Cog,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const navItems = [
  // {
  //   title: "Dashboard",
  //   icon: Grid,
  //   variant: "ghost",
  //   path: "/supplier/dashboard/home",
  // },
  {
    title: "First Step",
    icon: Home,
    variant: "ghost",
    path: "/supplier/dashboard/partner-onboarding",
  },
  {
    title: "Job Board",
    icon: Briefcase,
    variant: "ghost",
    path: "/supplier/dashboard/job-board",
  },
  {
    title: "My Orders",
    icon: ShoppingCart,
    variant: "ghost",
    path: "/supplier/dashboard/my-orders",
  },
  {
    title: "Support",
    icon: MessageCircle,
    variant: "ghost",
    path: "/supplier/dashboard/support",
  },
  {
    title: "Profile",
    icon: ProfileIcon,
    variant: "default",
    path: "/supplier/dashboard/profile",
  },
];

export function Sidebar({ isCollapsed, handleCollapse }) {
  const location = useLocation();

  const renderNavItem = useCallback(
    (item) => {
      const isActive = location.pathname === item.path;
      return (
        <li key={item.title}>
          <Tooltip delayDuration={300}>
            <TooltipTrigger asChild>
              <Link to={item.path} className="w-full block ">
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    isCollapsed ? "h-12 w-12 p-0" : "h-12 px-4",
                    isActive
                      ? "bg-primary text-white"
                      : "hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  {React.createElement(item.icon, {
                    className: cn("h-5 w-5", isCollapsed ? "mx-auto" : "mr-3"),
                  })}
                  {!isCollapsed && (
                    <span className="flex-grow text-left">{item.title}</span>
                  )}
                </Button>
              </Link>
            </TooltipTrigger>
            {isCollapsed && (
              <TooltipContent side="right" className="bg-primary text-white">
                {item.title}
              </TooltipContent>
            )}
          </Tooltip>
        </li>
      );
    },
    [isCollapsed, location.pathname]
  );

  return (
    <TooltipProvider>
      <aside
        className={cn(
          "fixed top-0 left-0 h-screen flex flex-col transition-all duration-300 ease-in-out border-r z-50 bg-background",
          isCollapsed ? "w-16" : "w-64"
        )}
      >
        <div className="flex-1 flex flex-col">
          <div
            className={cn(
              "h-16 font-semibold text-lg flex items-center justify-center border-b",
              isCollapsed ? "px-2" : "px-4"
            )}
          >
            <Cog className="h-6 w-6 text-primary" />
            {!isCollapsed && <span className="ml-2">Supplier</span>}
          </div>
          <nav className="flex-1 overflow-y-auto py-6">
            <ul className="space-y-1 px-2">{navItems.map(renderNavItem)}</ul>
          </nav>
        </div>
        <Button
          onClick={() => handleCollapse(!isCollapsed)}
          size="icon"
          variant="outline"
          className="absolute -right-3 top-[52px] z-10 h-6 w-6 rounded-full border-primary bg-background shadow-md"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </aside>
    </TooltipProvider>
  );
}
