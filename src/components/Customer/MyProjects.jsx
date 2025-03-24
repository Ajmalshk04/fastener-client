// import React from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import GetListOfMyProjects from "./GetListOfMyProjects";

// const MyProjects = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-lg font-semibold mb-6">My Projects</h1>

//       <Tabs defaultValue="quotes">
//         <TabsList>
//           <TabsTrigger value="quotes">Quotes</TabsTrigger>
//           <TabsTrigger value="ordered">Ordered</TabsTrigger>
//           <TabsTrigger value="completed">Completed</TabsTrigger>
//         </TabsList>

//         <TabsContent value="quotes">
//           <div className="mb-4 ">
//             <Button
//               className="text-white mt-4"
//               onClick={() => {
//                 navigate("/customer/quote");
//               }}
//             >
//               Start New Quote
//             </Button>
//           </div>
//         </TabsContent>

//         <TabsContent value="ordered">
//           {/* Content for Ordered tab */}
//           <p>Ordered projects will be displayed here.</p>
//           <GetListOfMyProjects />
//         </TabsContent>

//         <TabsContent value="completed">
//           {/* Content for Completed tab */}
//           <p>Completed projects will be displayed here.</p>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default MyProjects;
//================================================
// import React from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import { useAuth } from "@/hooks/useAuth";
// import axiosInstance from "@/api/client";
// import GetListOfMyProjects from "./GetListOfMyProjects";

// const fetchProjects = async (token) => {
//   const response = await axiosInstance.get("/projects/get-project-by-user-id", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data; 
// }
// const MyProjects = () => {
//   const navigate = useNavigate();
//   const { token } = useAuth();

//   const {
//     data: projects,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["projects", token],
//     queryFn: () => fetchProjects(token),
//     enabled: !!token,
//   });

//   // Filter projects by status for each tab
//   const quotesProjects = projects?.filter(
//     (project) => project.status === "AVAILABLE"
//   ) || [];
//   const orderedProjects = projects?.filter(
//     (project) => project.status === "IN_PRODUCTION"
//   ) || [];
//   const completedProjects = projects?.filter(
//     (project) => project.status === "DELIVERED"
//   ) || [];

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-lg font-semibold mb-6">My Projects</h1>

//       {isLoading && (
//         <div className="p-6 space-y-6 lg:my-12 max-w-screen-lg">
//           <p>Loading projects...</p>
//         </div>
//       )}

//       {error && (
//         <div className="text-red-500">
//           Error loading projects: {error.message}
//         </div>
//       )}

//       {!isLoading && !error && (
//         <Tabs defaultValue="quotes">
//           <TabsList>
//             <TabsTrigger value="quotes">Quotes</TabsTrigger>
//             <TabsTrigger value="ordered">Ordered</TabsTrigger>
//             <TabsTrigger value="completed">Completed</TabsTrigger>
//           </TabsList>

//           <TabsContent value="quotes">
//             <div className="mb-4">
//               <Button
//                 className="text-white mt-4"
//                 onClick={() => navigate("/customer/quote")}
//               >
//                 Start New Quote
//               </Button>
//             </div>
//             <GetListOfMyProjects projects={quotesProjects} />
//           </TabsContent>

//           <TabsContent value="ordered">
//             <GetListOfMyProjects projects={orderedProjects} />
//           </TabsContent>

//           <TabsContent value="completed">
//             <GetListOfMyProjects projects={completedProjects} />
//           </TabsContent>
//         </Tabs>
//       )}
//     </div>
//   );
// };

// export default MyProjects;

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import axiosInstance from "@/api/client";
import GetListOfMyProjects from "./GetListOfMyProjects";
import { Loader2 } from "lucide-react";

const fetchProjects = async (token) => {
  const response = await axiosInstance.get("/projects/get-project-by-user-id", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const MyProjects = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  const {
    data: projects,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects", token],
    queryFn: () => fetchProjects(token),
    enabled: !!token,
  });

  const quotesProjects = projects?.filter((project) => project.status === "AVAILABLE") || [];
  const orderedProjects = projects?.filter((project) => project.status === "IN_PRODUCTION") || [];
  const completedProjects = projects?.filter((project) => project.status === "DELIVERED") || [];

  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">My Projects</h1>
        <p className="mt-2 text-muted-foreground text-sm">
          Manage your quotes, orders, and completed projects
        </p>
      </header>

      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          <span className="ml-2 text-muted-foreground">Loading projects...</span>
        </div>
      )}

      {error && (
        <div className="text-center text-destructive py-12">
          Error loading projects: {error.message}
        </div>
      )}

      {!isLoading && !error && (
        <Tabs defaultValue="quotes" className="space-y-6">
          <div className="flex justify-between items-center">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="quotes">Quotes</TabsTrigger>
              <TabsTrigger value="ordered">Ordered</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <Button
              onClick={() => navigate("/customer/quote")}
              className="hidden sm:block"
            >
              Start New Quote
            </Button>
          </div>

          <TabsContent value="quotes">
            <div className="sm:hidden mb-4">
              <Button
                onClick={() => navigate("/customer/quote")}
                className="w-full"
              >
                Start New Quote
              </Button>
            </div>
            <GetListOfMyProjects projects={quotesProjects} />
          </TabsContent>

          <TabsContent value="ordered">
            <GetListOfMyProjects projects={orderedProjects} />
          </TabsContent>

          <TabsContent value="completed">
            <GetListOfMyProjects projects={completedProjects} />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default MyProjects;