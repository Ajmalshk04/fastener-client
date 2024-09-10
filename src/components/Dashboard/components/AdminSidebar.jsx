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
  Cog,
  ChevronRight,
  ChevronLeft,
  User,
  UserRoundCog,
  Briefcase,
} from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    icon: Grid,
    variant: "ghost",
    path: "/admin/dashboard/home",
  },
  {
    title: "Users",
    icon: User,
    variant: "ghost",
    path: "/admin/dashboard/users",
  },
  {
    title: "Suppliers",
    icon: UserRoundCog,
    variant: "ghost",
    path: "/admin/dashboard/suppliers",
  },
  {
    title: "Projects",
    icon: Briefcase,
    variant: "ghost",
    path: "/admin/dashboard/projects",
  },
];

export function AdminSidebar({ isCollapsed, handleCollapse }) {
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className={`transition-all ${
                isCollapsed ? "h-6 w-6" : "h-8 w-8"
              }`}
            >
              <rect width="256" height="256" fill="none"></rect>
              <line
                x1="208"
                y1="128"
                x2="128"
                y2="208"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <line
                x1="192"
                y1="40"
                x2="40"
                y2="192"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <span className="sr-only">Website Name</span>
            </svg>
            {!isCollapsed && <span className="ml-2">Admin Dashboard</span>}
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className={`space-y-1 ${isCollapsed ? "p-2" : "px-4"}`}>
              {navItems.map(renderNavItem)}
            </ul>
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
