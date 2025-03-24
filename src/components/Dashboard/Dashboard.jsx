// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { useDashboardData } from "@/hooks/useDashboardData";
// import { MoreHorizontal, Users, Briefcase, DollarSign } from "lucide-react";

// const Dashboard = () => {
//   const { data, isLoading, isError } = useDashboardData();
//   console.log(data);

//   if (isLoading) {
//     return <div>Loading dashboard data...</div>;
//   }

//   if (isError) {
//     return <div>Error loading dashboard data. Please try again later.</div>;
//   }

//   const {
//     totalUsers,
//     totalProjects,
//     totalQuotations,
//     recentProjects,
//     recentQuotations,
//   } = data;
//   return (
//     <div className="container mx-auto space-y-6 mt-10">
//       <h1 className="text-2xl font-bold">Dashboard</h1>

//       <div className="grid gap-4 md:grid-cols-3">
//         <StatCard title="Total Users" value={totalUsers} icon={Users} />
//         <StatCard
//           title="Total Projects"
//           value={totalProjects}
//           icon={Briefcase}
//         />
//         <StatCard
//           title="Total Quotations"
//           value={totalQuotations}
//           icon={DollarSign}
//         />
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>Recent Projects</CardTitle>
//           <CardDescription>Overview of the latest projects</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Title</TableHead>
//                 <TableHead>Material</TableHead>
//                 <TableHead>Process</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead>Delivery Date</TableHead>
//                 <TableHead></TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {recentProjects.map((project) => (
//                 <TableRow key={project._id}>
//                   <TableCell className="font-medium">{project.title}</TableCell>
//                   <TableCell>{project.requirements.material}</TableCell>
//                   <TableCell>{project.requirements.process}</TableCell>
//                   <TableCell>
//                     <Badge variant="outline">{project.status}</Badge>
//                   </TableCell>
//                   <TableCell>
//                     {new Date(project.deliveryDate).toLocaleDateString()}
//                   </TableCell>
//                   <TableCell>
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button variant="ghost" className="h-8 w-8 p-0">
//                           <MoreHorizontal className="h-4 w-4" />
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent align="end">
//                         <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                         <DropdownMenuItem>View details</DropdownMenuItem>
//                         <DropdownMenuItem>Update status</DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader>
//           <CardTitle>Recent Quotations</CardTitle>
//           <CardDescription>Latest pricing information</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Project</TableHead>
//                 <TableHead>Unit Price</TableHead>
//                 <TableHead>Quantity</TableHead>
//                 <TableHead>Total Price</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead></TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {recentQuotations.map((quotation) => (
//                 <TableRow key={quotation._id}>
//                   <TableCell className="font-medium">
//                     {quotation.project}
//                   </TableCell>
//                   <TableCell>${quotation.unitPrice.toFixed(2)}</TableCell>
//                   <TableCell>{quotation.quantity}</TableCell>
//                   <TableCell>${quotation.totalPrice.toFixed(2)}</TableCell>
//                   <TableCell>
//                     <Badge variant="outline">{quotation.status}</Badge>
//                   </TableCell>
//                   <TableCell>
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button variant="ghost" className="h-8 w-8 p-0">
//                           <MoreHorizontal className="h-4 w-4" />
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent align="end">
//                         <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                         <DropdownMenuItem>View details</DropdownMenuItem>
//                         <DropdownMenuItem>Update status</DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// const StatCard = ({ title, value, icon: Icon }) => (
//   <Card>
//     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//       <div className="flex items-center space-x-2">
//         <Icon className="h-5 w-5 text-muted-foreground" />
//         <CardTitle className="text-sm font-medium">{title}</CardTitle>
//       </div>
//     </CardHeader>
//     <CardContent>
//       <div className="text-2xl font-bold">{value}</div>
//     </CardContent>
//   </Card>
// );

// export default Dashboard;
//=============================================================
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDashboardData } from "@/hooks/useDashboardData";
import { MoreHorizontal, Users, Briefcase, DollarSign, Loader2 } from "lucide-react";

const Dashboard = () => {
  const { data, isLoading, isError } = useDashboardData();

  if (isLoading) {
    return (
      <div className="container mx-auto px-6 py-12 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        <span className="ml-2 text-muted-foreground">Loading dashboard data...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto px-6 py-12 text-center text-destructive">
        Error loading dashboard data. Please try again later.
      </div>
    );
  }

  const { totalUsers, totalProjects, totalQuotations, recentProjects, recentQuotations } = data;

  return (
    <div className="container mx-auto px-6 py-12 max-w-7xl space-y-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Overview of users, projects, and quotations
        </p>
      </header>

      {/* Stats Section */}
      <div className="grid gap-6 md:grid-cols-3">
        <StatCard title="Total Users" value={totalUsers} icon={Users} />
        <StatCard title="Total Projects" value={totalProjects} icon={Briefcase} />
        <StatCard title="Total Quotations" value={totalQuotations} icon={DollarSign} />
      </div>

      {/* Recent Projects */}
      <Card className="shadow-sm border-0">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold">Recent Projects</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Overview of the latest projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-muted-foreground">Title</TableHead>
                <TableHead className="text-muted-foreground">Material</TableHead>
                <TableHead className="text-muted-foreground">Process</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="text-muted-foreground">Delivery Date</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentProjects.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-muted-foreground py-6">
                    No recent projects available.
                  </TableCell>
                </TableRow>
              ) : (
                recentProjects.map((project) => (
                  <TableRow key={project._id} className="hover:bg-muted/50">
                    <TableCell className="font-medium truncate max-w-xs">{project.title}</TableCell>
                    <TableCell>{project.requirements.material || "N/A"}</TableCell>
                    <TableCell>{project.requirements.process || "N/A"}</TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={
                          project.status === "AVAILABLE"
                            ? "bg-green-100 text-green-800"
                            : project.status === "IN_PRODUCTION"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }
                      >
                        {project.status.replace("_", " ")}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(project.deliveryDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem className="cursor-pointer">
                            View details
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            Update status
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Recent Quotations */}
      <Card className="shadow-sm border-0">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold">Recent Quotations</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Latest pricing information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-muted-foreground">Project</TableHead>
                <TableHead className="text-muted-foreground">Unit Price</TableHead>
                <TableHead className="text-muted-foreground">Quantity</TableHead>
                <TableHead className="text-muted-foreground">Total Price</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentQuotations.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-muted-foreground py-6">
                    No recent quotations available.
                  </TableCell>
                </TableRow>
              ) : (
                recentQuotations.map((quotation) => (
                  <TableRow key={quotation._id} className="hover:bg-muted/50">
                    <TableCell className="font-medium truncate max-w-xs">
                      {quotation.project}
                    </TableCell>
                    <TableCell>${quotation.unitPrice.toFixed(2)}</TableCell>
                    <TableCell>{quotation.quantity}</TableCell>
                    <TableCell>${quotation.totalPrice.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={
                          quotation.status === "PENDING"
                            ? "bg-yellow-100 text-yellow-800"
                            : quotation.status === "ACCEPTED"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }
                      >
                        {quotation.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem className="cursor-pointer">
                            View details
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            Update status
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

const StatCard = ({ title, value, icon: Icon }) => (
  <Card className="shadow-sm border hover:shadow-md transition-shadow">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">
        {title}
      </CardTitle>
      <Icon className="h-5 w-5 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold">{value}</div>
    </CardContent>
  </Card>
);

export default Dashboard;