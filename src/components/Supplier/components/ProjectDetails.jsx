import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ProjectDetails = ({ project }) => {
  if (!project) return <div>Loading project details...</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p><strong>Description:</strong> {project.description}</p>
        <p><strong>Status:</strong> {project.status}</p>
        <p><strong>Created:</strong> {new Date(project.createdAt).toLocaleDateString()}</p>
        <p><strong>Requirements:</strong></p>
        <ul>
          <li>Material: {project.requirements.material}</li>
          <li>Process: {project.requirements.process}</li>
          <li>Quantity: {project.requirements.quantity}</li>
          <li>Tolerance: {project.requirements.tolerance}</li>
          <li>Finish: {project.requirements.finish}</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProjectDetails;