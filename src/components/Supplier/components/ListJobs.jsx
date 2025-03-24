// import React, { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import {
//   Tabs,
//   TabsList,
//   TabsTrigger,
//   TabsContent,
// } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import axiosInstance from "@/api/client";
// import { useAuth } from "@/hooks/useAuth";
// import ProjectDetails from "./ProjectDetails";
// import CreateQuotation from "./CreateQuotation";
// import MyRequestQuotation from "./MyRequestQuotation";
// import MyResponseQuotation from "./MyResponseQuotation";

// const ListJobs = () => {
//   const [activeTab, setActiveTab] = useState("jobs");
//   const [selectedJob, setSelectedJob] = useState(null);
//   const { token } = useAuth();

//   // Fetch jobs data
//   const { data: jobsData, isLoading: jobsLoading, error: jobsError } = useQuery({
//     queryKey: ["projects"],
//     queryFn: async () => {
//       const response = await axiosInstance.get("/projects", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return response.data;
//     },
//   });

//   // Fetch quotations (for both requests and responses)
//   const { data: quotationsData, isLoading: quotationsLoading } = useQuery({
//     queryKey: ["quotations"],
//     queryFn: async () => {
//       const response = await axiosInstance.get("/quotations", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return response.data;
//     },
//   });

//   if (jobsLoading || quotationsLoading) return <div>Loading...</div>;
//   if (jobsError) return <div>Error: {jobsError.message}</div>;

//   // Filter quotations for requests and responses based on user role
//   // Here, we're assuming we can identify requests vs responses by status or role
//   const myRequestQuotations = quotationsData.filter(quotation => quotation.status === 'PENDING');
//   const myResponseQuotations = quotationsData.filter(quotation => quotation.status !== 'PENDING');

//   return (
//     <div className="p-4 mt-4">
//       <Tabs value={activeTab} onValueChange={setActiveTab}>
//         <TabsList>
//           <TabsTrigger value="jobs">List of Jobs</TabsTrigger>
//           <TabsTrigger value="myRequests">My Quotation Requests</TabsTrigger>
//           <TabsTrigger value="myResponses">My Quotation Responses</TabsTrigger>
//         </TabsList>

//         <TabsContent value="jobs" className="mt-6">
//           {jobsData.map((job) => (
//             <div key={job._id}>
//               <ProjectDetails project={job} />
//               <Button className="mt-2" onClick={() => setSelectedJob(job)}>Create Quotation</Button>
//             </div>
//           ))}
//         </TabsContent>

//         <TabsContent value="myRequests" className="mt-6">
//           <MyRequestQuotation quotations={myRequestQuotations} />
//         </TabsContent>

//         <TabsContent value="myResponses" className="mt-6">
//           <MyResponseQuotation quotations={myResponseQuotations} />
//         </TabsContent>
//       </Tabs>

//       {selectedJob && <CreateQuotation project={selectedJob} onClose={() => setSelectedJob(null)} />}
//     </div>
//   );
// };

// export default ListJobs;

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import axiosInstance from "@/api/client";
import { useAuth } from "@/hooks/useAuth";
import ProjectDetails from "./ProjectDetails";
import MyRequestQuotation from "./MyRequestQuotation";
import MyResponseQuotation from "./MyResponseQuotation";
import { Loader2 } from "lucide-react";

const ListJobs = () => {
  const [activeTab, setActiveTab] = useState("jobs");
  const { token } = useAuth();

  // Fetch jobs data
  const { data: jobsData, isLoading: jobsLoading, error: jobsError } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await axiosInstance.get("/projects", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
  });

  // Fetch quotations
  const { data: quotationsData, isLoading: quotationsLoading } = useQuery({
    queryKey: ["quotations"],
    queryFn: async () => {
      const response = await axiosInstance.get("/quotations", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
  });

  if (jobsLoading || quotationsLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (jobsError) {
    return (
      <div className="text-center py-10 text-red-500">
        Error: {jobsError.message}
      </div>
    );
  }

  const myRequestQuotations = quotationsData?.filter(
    (quotation) => quotation.status === "PENDING"
  ) || [];
  const myResponseQuotations = quotationsData?.filter(
    (quotation) => quotation.status !== "PENDING"
  ) || [];

  return (
    <div className="container mx-auto px-6 py-10">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-8">
          <TabsTrigger value="jobs">Available Jobs</TabsTrigger>
          <TabsTrigger value="myRequests">My Requests</TabsTrigger>
          <TabsTrigger value="myResponses">My Responses</TabsTrigger>
        </TabsList>

        <TabsContent value="jobs">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobsData?.map((job) => (
              <ProjectDetails key={job._id} project={job} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="myRequests">
          <MyRequestQuotation quotations={myRequestQuotations} />
        </TabsContent>

        <TabsContent value="myResponses">
          <MyResponseQuotation quotations={myResponseQuotations} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ListJobs;