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
import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  User,
  Package,
  ChevronRight,
  ChevronLeft,
  Home,
  Briefcase,
  ShoppingCart,
  MessageCircle,
  User as ProfileIcon,
  Cog,
  Grid,
} from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    icon: Grid,
    variant: "ghost",
    path: "/supplier/dashboard/home",
  },
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

const useCollapsedState = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const collapsed = document.cookie
      .split("; ")
      .find((row) => row.startsWith("react-resizable-panels:collapsed"))
      ?.split("=")[1];
    setIsCollapsed(JSON.parse(collapsed ?? "false"));
  }, []);

  const handleCollapse = (collapsed) => {
    setIsCollapsed(collapsed);
    document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
      collapsed
    )}`;
  };

  return [isCollapsed, handleCollapse];
};

export function Sidebar() {
  const [isCollapsed, handleCollapse] = useCollapsedState();
  const [activeItem, setActiveItem] = useState(null);

  const renderNavItem = useCallback(
    (item, index) => (
      <Tooltip key={index} delayDuration={0}>
        <TooltipTrigger asChild>
          <Link to={item.path} onClick={() => setActiveItem(item.title)}>
            <Button
              variant={activeItem === item.title ? "default" : "ghost"}
              className={cn(
                "w-full justify-start",
                isCollapsed ? "h-9 w-9 p-0 justify-between" : "px-2",
                activeItem === item.title ? "bg-primary text-white" : ""
              )}
            >
              {React.createElement(item.icon, {
                className: cn("h-4 w-4", isCollapsed ? "mx-auto" : "mr-2"),
              })}
              {!isCollapsed && <span>{item.title}</span>}
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent
          side="right"
          className={cn(!isCollapsed && "hidden", "text-white")}
        >
          {item.title}
        </TooltipContent>
      </Tooltip>
    ),
    [isCollapsed, activeItem]
  );

  return (
    <div className="flex h-screen bg-background text-foreground border-gray-200">
      <TooltipProvider delayDuration={0}>
        <div
          className={cn(
            "flex flex-col transition-all duration-300 ease-in-out border border-r-2 relative",
            isCollapsed ? "w-16" : "w-64"
          )}
        >
          <div className="flex-1 flex flex-col gap-4 items-center">
            <div
              className={`font-semibold w-full text-lg flex items-center justify-center border-b-[1px] px-4 py-5 ${
                isCollapsed ? "gap-0" : "gap-2"
              }`}
            >
              <Cog className="h-6 w-6" />
              {!isCollapsed && "Supplier"}
            </div>
            <div className="px-4 flex flex-col w-full space-y-4">
              {navItems.map(renderNavItem)}
            </div>
          </div>
          <Button
            onClick={() => handleCollapse(!isCollapsed)}
            size="icon"
            variant="outline"
            className="absolute -right-5 top-4 z-50 hidden rounded-full md:inline-flex"
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
      </TooltipProvider>
    </div>
  );
}
