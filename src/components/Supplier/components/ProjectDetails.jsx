// import React from "react";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// const ProjectDetails = ({ project }) => {
//   if (!project) return <div>Loading project details...</div>;

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>{project.title}</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <p><strong>Description:</strong> {project.description}</p>
//         <p><strong>Status:</strong> {project.status}</p>
//         <p><strong>Created:</strong> {new Date(project.createdAt).toLocaleDateString()}</p>
//         <p><strong>Requirements:</strong></p>
//         <ul>
//           <li>Material: {project.requirements.material}</li>
//           <li>Process: {project.requirements.process}</li>
//           <li>Quantity: {project.requirements.quantity}</li>
//           <li>Tolerance: {project.requirements.tolerance}</li>
//           <li>Finish: {project.requirements.finish}</li>
//         </ul>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProjectDetails;


// ProjectDetails.jsx
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CreateQuotation from "./CreateQuotation";

const ProjectDetails = ({ project }) => {
  const [isQuotationOpen, setIsQuotationOpen] = useState(false);

  if (!project) {
    return (
      <Card>
        <CardContent className="p-6 text-muted-foreground">
          Loading project details...
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card className="shadow-sm border-0 hover:shadow-md transition-shadow">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">
              {project.title}
            </CardTitle>
            <Badge
              variant="outline"
              className="capitalize"
            >
              {project.status.toLowerCase()}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Created: {new Date(project.createdAt).toLocaleDateString()}
          </p>
        </CardHeader>
        <CardContent className="pb-4 text-sm space-y-4">
          <div>
            <h4 className="font-medium text-muted-foreground">Description</h4>
            <p>{project.description}</p>
          </div>
          <div>
            <h4 className="font-medium text-muted-foreground">Requirements</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Material: {project.requirements.material}</li>
              <li>Process: {project.requirements.process}</li>
              <li>Quantity: {project.requirements.quantity}</li>
              <li>Tolerance: {project.requirements.tolerance}</li>
              <li>Finish: {project.requirements.finish}</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full mt-auto"
            onClick={() => setIsQuotationOpen(true)}
          >
            Create Quotation
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isQuotationOpen} onOpenChange={setIsQuotationOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create Quotation for {project.title}</DialogTitle>
          </DialogHeader>
          <CreateQuotation
            project={project}
            onClose={() => setIsQuotationOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectDetails;