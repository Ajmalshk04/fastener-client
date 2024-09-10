// import React, { useState } from "react";
// import { useQuery } from "@tanstack/react-query";

// import { useAuth } from "@/hooks/useAuth";
// import {
//   Card,
//   CardHeader,
//   CardContent,
//   CardTitle,
//   CardFooter,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Pagination } from "@/components/ui/pagination";
// import { Separator } from "@/components/ui/separator";
// import axiosInstance from "@/api/client";

// const fetchProjects = async (token) => {
//   const response = await axiosInstance.get("/projects/get-project-by-user-id", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   console.log(response);

//   return response.data;
// };

// const GetListOfMyProjects = () => {
//   const { token } = useAuth();
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   const {
//     data: projects,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["projects", token],
//     queryFn: () => fetchProjects(token),
//     enabled: !!token,
//   });

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const paginatedProjects = projects?.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error loading projects</div>;

//   return (
//     <div className="container mx-auto p-4 space-y-8 lg:my-10 max-h-[90%]">
//       {paginatedProjects?.map((project) => (
//         <Card key={project._id} className="flex flex-col lg:flex-row mb-4">
//           <CardHeader className="lg:w-1/3">
//             <CardTitle>{project.title}</CardTitle>
//           </CardHeader>
//           <CardContent className="lg:w-2/3">
//             <p>{project.description}</p>
//             <Separator />
//             <p>
//               <strong>Material:</strong> {project.requirements.material}
//             </p>
//             <p>
//               <strong>Process:</strong> {project.requirements.process}
//             </p>
//             <p>
//               <strong>Quantity:</strong> {project.requirements.quantity}
//             </p>
//             <p>
//               <strong>Tolerance:</strong> {project.requirements.tolerance}
//             </p>
//             <p>
//               <strong>Finish:</strong> {project.requirements.finish}
//             </p>
//             <p>
//               <strong>Status:</strong> {project.status}
//             </p>
//             <p>
//               <strong>Delivery Date:</strong>{" "}
//               {new Date(project.deliveryDate).toLocaleDateString()}
//             </p>
//           </CardContent>
//           <CardFooter>
//             <Button variant="outline">View Files</Button>
//           </CardFooter>
//         </Card>
//       ))}
//       <Pagination
//         totalItems={projects?.length || 0}
//         currentPage={currentPage}
//         itemsPerPage={itemsPerPage}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// };

// export default GetListOfMyProjects;
//===================================
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import axiosInstance from "@/api/client";
import { useNavigate } from "react-router-dom";

const fetchProjects = async (token) => {
  const response = await axiosInstance.get("/projects/get-project-by-user-id", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response);
  return response.data;
};

const GetListOfMyProjects = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const {
    data: projects,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects", token],
    queryFn: () => fetchProjects(token),
    enabled: !!token,
  });

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleProjectDetails = (project) => {
    navigate("/customer/quote-details", { state: { project } });
  };

  const paginatedProjects = projects?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (isLoading)
    return (
      <div className="p-6 space-y-6 lg:my-12 max-w-screen-lg">
        <Skeleton className="h-64" />
        <Skeleton className="h-64" />
        <Skeleton className="h-64" />
      </div>
    );

  if (error)
    return (
      <div className="text-red-500">
        Error loading projects: {error.message}
      </div>
    );

  return (
    <div className=" space-y-6 ">
      <div className="grid gap-4 mt-8">
        {paginatedProjects?.map((project) => (
          <Card key={project._id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>
                Delivery Date:{" "}
                {new Date(project.deliveryDate).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-2">
                <span
                  className={`bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded`}
                >
                  {project.status === "AVAILABLE" ? "ORDERED" : null}
                </span>
              </div>
              <p>
                <strong>Material:</strong> {project.requirements.material}
              </p>
              <p>
                <strong>Process:</strong> {project.requirements.process}
              </p>
              <p>
                <strong>Quantity:</strong> {project.requirements.quantity}
              </p>
              <p>
                <strong>Tolerance:</strong> {project.requirements.tolerance}
              </p>
              <p>
                <strong>Finish:</strong> {project.requirements.finish}
              </p>
              <p>
                <strong>Description:</strong> {project.description}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              {/* <div>
                <Button variant="ghost">Edit</Button>
                <Button variant="ghost">Delete</Button>
              </div> */}
              <Button
                className="text-white"
                onClick={() => handleProjectDetails(project)}
              >
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Pagination
        totalItems={projects?.length || 0}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        className="mt-6"
      />
    </div>
  );
};

export default GetListOfMyProjects;
