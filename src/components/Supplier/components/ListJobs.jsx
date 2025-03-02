import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/api/client";
import { useAuth } from "@/hooks/useAuth";
import ProjectDetails from "./ProjectDetails";
import CreateQuotation from "./CreateQuotation";
import MyRequestQuotation from "./MyRequestQuotation";
import MyResponseQuotation from "./MyResponseQuotation";

const ListJobs = () => {
  const [activeTab, setActiveTab] = useState("jobs");
  const [selectedJob, setSelectedJob] = useState(null);
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

  // Fetch quotations (for both requests and responses)
  const { data: quotationsData, isLoading: quotationsLoading } = useQuery({
    queryKey: ["quotations"],
    queryFn: async () => {
      const response = await axiosInstance.get("/quotations", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
  });

  if (jobsLoading || quotationsLoading) return <div>Loading...</div>;
  if (jobsError) return <div>Error: {jobsError.message}</div>;

  // Filter quotations for requests and responses based on user role
  // Here, we're assuming we can identify requests vs responses by status or role
  const myRequestQuotations = quotationsData.filter(quotation => quotation.status === 'PENDING');
  const myResponseQuotations = quotationsData.filter(quotation => quotation.status !== 'PENDING');

  return (
    <div className="p-4 mt-4">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="jobs">List of Jobs</TabsTrigger>
          <TabsTrigger value="myRequests">My Quotation Requests</TabsTrigger>
          <TabsTrigger value="myResponses">My Quotation Responses</TabsTrigger>
        </TabsList>

        <TabsContent value="jobs" className="mt-6">
          {jobsData.map((job) => (
            <div key={job._id}>
              <ProjectDetails project={job} />
              <Button className="mt-2" onClick={() => setSelectedJob(job)}>Create Quotation</Button>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="myRequests" className="mt-6">
          <MyRequestQuotation quotations={myRequestQuotations} />
        </TabsContent>

        <TabsContent value="myResponses" className="mt-6">
          <MyResponseQuotation quotations={myResponseQuotations} />
        </TabsContent>
      </Tabs>

      {selectedJob && <CreateQuotation project={selectedJob} onClose={() => setSelectedJob(null)} />}
    </div>
  );
};

export default ListJobs;