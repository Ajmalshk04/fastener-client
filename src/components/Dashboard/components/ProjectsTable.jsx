// import React from "react";
// import {
//   Table,
//   TableHead,
//   TableRow,
//   TableHeader,
//   TableBody,
//   TableCell,
// } from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";
// import { Skeleton } from "@/components/ui/skeleton";
// import { useQuery } from "@tanstack/react-query";
// import { useAuth } from "@/hooks/useAuth";
// import axiosInstance from "@/api/client";

// const ProjectsListTable = () => {
//   const { token } = useAuth();

//   const fetchProjects = async () => {
//     const response = await axiosInstance.get("/projects", {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   };

//   const {
//     data: projects,
//     error,
//     isLoading,
//   } = useQuery({
//     queryKey: ["projects"],
//     queryFn: fetchProjects,
//   });

//   const statusColors = {
//     draft: "text-gray-500 bg-gray-200",
//     submitted: "text-white bg-blue-600",
//     quoted: "text-white bg-yellow-600",
//     in_production: "text-white bg-orange-600",
//     shipped: "text-white bg-teal-600",
//     delivered: "text-white bg-green-600",
//     cancelled: "text-white bg-red-600",
//   };

//   if (isLoading) {
//     return (
//       <div className="container mx-auto my-6 p-4">
//         <h1 className="text-2xl font-semibold mb-4">Projects List</h1>
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead className="py-3 px-4 text-left">Title</TableHead>
//               <TableHead className="py-3 px-4 text-left">Description</TableHead>
//               <TableHead className="py-3 px-4 text-left">Customer</TableHead>
//               <TableHead className="py-3 px-4 text-left">Status</TableHead>
//               <TableHead className="py-3 px-4 text-left">
//                 Delivery Date
//               </TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {Array.from({ length: 5 }).map((_, index) => (
//               <TableRow key={index}>
//                 <TableCell className="py-3 px-4">
//                   <Skeleton className="w-32 h-6" />
//                 </TableCell>
//                 <TableCell className="py-3 px-4">
//                   <Skeleton className="w-48 h-6" />
//                 </TableCell>
//                 <TableCell className="py-3 px-4">
//                   <Skeleton className="w-24 h-6" />
//                 </TableCell>
//                 <TableCell className="py-3 px-4">
//                   <Skeleton className="w-24 h-6" />
//                 </TableCell>
//                 <TableCell className="py-3 px-4">
//                   <Skeleton className="w-24 h-6" />
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     );
//   }

//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div className="container mx-auto my-6 p-4">
//       <h1 className="text-2xl font-semibold mb-4">Projects List</h1>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="py-3 px-4 text-left">Title</TableHead>
//             <TableHead className="py-3 px-4 text-left">Description</TableHead>
//             <TableHead className="py-3 px-4 text-left">Customer</TableHead>
//             <TableHead className="py-3 px-4 text-left">Status</TableHead>
//             <TableHead className="py-3 px-4 text-left">Delivery Date</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {projects.map((project) => (
//             <TableRow key={project._id}>
//               <TableCell className="py-3 px-4">{project.title}</TableCell>
//               <TableCell className="py-3 px-4">{project.description}</TableCell>
//               <TableCell className="py-3 px-4">{project.customer}</TableCell>
//               <TableCell className="py-3 px-4">
//                 <Badge className={statusColors[project.status.toLowerCase()]}>
//                   {project.status.replace("_", " ")}
//                 </Badge>
//               </TableCell>
//               <TableCell className="py-3 px-4">
//                 {project.deliveryDate
//                   ? new Date(project.deliveryDate).toLocaleDateString()
//                   : "N/A"}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default ProjectsListTable;
//====================================================
import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import axiosInstance from "@/api/client";

const ProjectsListTable = () => {
  const { token } = useAuth();

  const fetchProjects = async () => {
    const response = await axiosInstance.get("/projects", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    return response.data;
  };

  const {
    data: projects,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  //   const statusColors = {
  //     draft: "text-dark border border-gray-500 bg-gray-200",
  //     submitted:
  //       "dark:text-white text-blue-500 border border-blue-500 dark:bg-blue-500 light:bg-blue-100",
  //     quoted:
  //       "dark:text-white text-yellow-500 border border-yellow-500 dark:bg-yellow-500 light:bg-yellow-50",
  //     in_production:
  //       "dark:text-white  text-orange-500 border border-orange-500 dark:bg-orange-500 light:bg-orange-50",
  //     shipped: "text-dark border border-teal-500 bg-transparent",
  //     delivered: "text-dark border border-green-500 bg-transparent",
  //     cancelled: "text-dark border border-red-500 bg-transparent",
  //   };

  const statusColors = {
    draft: "text-dark border border-gray-500 bg-gray-200",
    submitted:
      "dark:text-gray-500 text-blue-500 border border-blue-500 bg-blue-100",
    quoted:
      "dark:text-gray-500 text-yellow-500 border border-yellow-500 bg-yellow-50",
    in_production:
      "dark:text-gray-500  text-orange-500 border border-orange-500 bg-orange-50",
    shipped: "text-dark border border-teal-500 bg-transparent",
    delivered: "text-dark border border-green-500 bg-transparent",
    cancelled: "text-dark border border-red-500 bg-transparent",
  };

  if (isLoading) {
    return (
      <div className="container mx-auto my-6 p-4">
        <h1 className="text-2xl font-semibold mb-4">Projects List</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="py-3 px-4 text-left">Title</TableHead>
              <TableHead className="py-3 px-4 text-left">Description</TableHead>
              <TableHead className="py-3 px-4 text-left">Customer</TableHead>
              <TableHead className="py-3 px-4 text-left">Status</TableHead>
              <TableHead className="py-3 px-4 text-left">
                Delivery Date
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 3 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell className="py-3 px-4">
                  <Skeleton className="w-32 h-6" />
                </TableCell>
                <TableCell className="py-3 px-4">
                  <Skeleton className="w-48 h-6" />
                </TableCell>
                <TableCell className="py-3 px-4">
                  <Skeleton className="w-24 h-6" />
                </TableCell>
                <TableCell className="py-3 px-4">
                  <Skeleton className="w-24 h-6" />
                </TableCell>
                <TableCell className="py-3 px-4">
                  <Skeleton className="w-24 h-6" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto my-6 p-4">
      <h1 className="text-2xl font-semibold mb-4">Projects List</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="py-3 px-4 text-left">Title</TableHead>
            <TableHead className="py-3 px-4 text-left">Description</TableHead>
            <TableHead className="py-3 px-4 text-left">Customer</TableHead>
            <TableHead className="py-3 px-4 text-left">Status</TableHead>
            <TableHead className="py-3 px-4 text-left">Delivery Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project._id}>
              <TableCell className="py-3 px-4">{project.title}</TableCell>
              <TableCell className="py-3 px-4">{project.description}</TableCell>
              <TableCell className="py-3 px-4">
                {project.customer
                  ? `${project.customer.billingAddress.city}, ${project.customer.billingAddress.state}`
                  : "N/A"}
              </TableCell>
              <TableCell className="py-3 px-4">
                <Badge
                  variant="outline"
                  className={
                    statusColors[project.status.toLowerCase().replace(" ", "_")]
                  }
                >
                  {project.status.replace("_", " ")}
                </Badge>
              </TableCell>
              <TableCell className="py-3 px-4">
                {project.deliveryDate
                  ? new Date(project.deliveryDate).toLocaleDateString()
                  : "N/A"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectsListTable;
