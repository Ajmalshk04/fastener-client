import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FileIcon, ArrowLeftIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const ProjectDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (location.state && location.state.project) {
      setProject(location.state.project);
    }
  }, [location.state, navigate]);

  if (!project) {
    return null; // Or you could return a loading indicator here if you prefer
  }

  return (
    <div className="container mx-auto p-4">
      <Button
        variant="outline"
        className="mb-4"
        onClick={() => navigate("/customer/dashboard")}
      >
        <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to Projects
      </Button>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
          <p>
            <Badge variant="outline" className="mt-2">
              {project.status}
            </Badge>
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Requirements</h3>
              <ul className="space-y-1">
                {Object.entries(project.requirements).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-medium">
                      {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </span>{" "}
                    {value}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Project Details</h3>
              <ul className="space-y-1">
                <li>
                  <span className="font-medium">Created At:</span>{" "}
                  {new Date(project.createdAt).toLocaleString()}
                </li>
                <li>
                  <span className="font-medium">Updated At:</span>{" "}
                  {new Date(project.updatedAt).toLocaleString()}
                </li>
                {project.deliveryDate && (
                  <li>
                    <span className="font-medium">Delivery Date:</span>{" "}
                    {new Date(project.deliveryDate).toLocaleString()}
                  </li>
                )}
              </ul>
            </div>
          </div>

          <Separator className="my-4" />

          <div>
            <h3 className="text-lg font-semibold mb-2">Files</h3>
            {project.files && project.files.length > 0 ? (
              <ul className="space-y-2">
                {project.files.map((file, index) => (
                  <li key={index} className="flex items-center">
                    <FileIcon className="mr-2" size={20} />
                    <a
                      href={file.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {file.name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No files attached to this project.</p>
            )}
          </div>

          {project.customer && (
            <>
              <Separator className="my-4" />
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Customer Information
                </h3>
                <p>
                  <span className="font-medium">Billing Address:</span>{" "}
                  {`${project.customer.billingAddress.addressLine1}, ${project.customer.billingAddress.city}, ${project.customer.billingAddress.state}, ${project.customer.billingAddress.country} ${project.customer.billingAddress.zipCode}`}
                </p>
                <p>
                  <span className="font-medium">Preferred Payment Method:</span>{" "}
                  {project.customer.preferredPaymentMethod}
                </p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectDetailsPage;
