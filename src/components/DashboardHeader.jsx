import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { CircleUser, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

// const TopNavigation = ({ navItems }) => {
//   const location = useLocation();

//   return (
//     <nav className="text-white">
//       <div className="flex items-center justify-between">
//         <div className="flex space-x-4">
//           {navItems.map((link) => (
//             <Link key={link.href} to={link.href}>
//               <Button
//                 variant="ghost"
//                 className={`px-4 py-2 text-sm font-medium ${
//                   location.pathname === link.href
//                     ? "bg-ghost"
//                     : "bg-ghost text-white"
//                 }`}
//               >
//                 {link.title}
//               </Button>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// const topNavItems = [
//   { title: "Overview", href: "/dashboard/overview" },
//   { title: "Customers", href: "/dashboard/customers" },
//   { title: "Products", href: "/dashboard/products" },
//   { title: "Settings", href: "/dashboard/settings" },
// ];

const DashboardHeader = () => {
  const navigate = useNavigate();
  const { handleLogOut } = useAuth();
  return (
    <header className="flex flex-col">
      <div className="flex items-center justify-between px-6 py-[14px] border-b">
        {/* <TopNavigation navItems={topNavItems} /> */}
        <div className="ml-auto flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  navigate("/supplier/dashboard/profile");
                }}
              >
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogOut}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
