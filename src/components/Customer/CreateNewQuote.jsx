import { useState, useCallback } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import dummyImg from "../../assets/drop-zone-pic-952cabeb.png";
import { ShieldCheck, File } from "lucide-react";
import useFileUpload from "@/hooks/useFileUpload";
import axiosInstance from "@/api/client";
import { useSelector } from "react-redux";
import { useAuth } from "@/hooks/useAuth";
import { Textarea } from "../ui/textarea";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { Button } from "../custom/button";

const CreateNewQuote = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { files, uploading, progress, error, handleUpload } = useFileUpload();
  const [dragActive, setDragActive] = useState(false);
  const [fileError, setFileError] = useState(null);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [material, setMaterial] = useState("");
  const [process, setProcess] = useState("");
  const [quantity, setQuantity] = useState("");
  const [tolerance, setTolerance] = useState("");
  const [finish, setFinish] = useState("");
  const [loading, setLoading] = useState(false);

  const { profile } = useSelector((state) => state.user);

  const decodedToken = jwtDecode(token);

  const allowedTypes = [
    ".step",
    ".stp",
    ".sldprt",
    ".stl",
    ".sat",
    ".3dxml",
    ".3mf",
    ".prt",
    ".ipt",
    ".catpart",
    ".x_t",
    ".ptc",
    ".x_b",
    ".dxf",
    ".dws",
    ".dwf",
    ".dwg",
    ".pdf",
    ".jpg",
    ".jpeg",
    ".webp",
    ".png",
    ".svg",
  ];

  const validateFiles = (files) => {
    if (
      !files.every((file) =>
        allowedTypes.some((type) => file.name.toLowerCase().endsWith(type))
      )
    ) {
      setFileError(
        "Invalid file type. Please upload only the allowed file types."
      );
      return false;
    }

    setFileError(null);
    return true;
  };

  const onDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }, []);

  const onDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }, []);

  const onDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      const droppedFiles = Array.from(e.dataTransfer.files);
      if (validateFiles(droppedFiles)) {
        handleUpload(droppedFiles);
      }
    },
    [handleUpload]
  );

  const onFileSelect = useCallback(
    (e) => {
      const selectedFiles = Array.from(e.target.files);
      if (validateFiles(selectedFiles)) {
        handleUpload(selectedFiles);
      }
    },
    [handleUpload]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!projectTitle) {
      setFileError("Project title is required.");
      return;
    }
    setLoading(true);
    try {
      const response = await axiosInstance.post(
        "/projects",
        {
          title: projectTitle,
          description: projectDescription,
          files: files.map((file) => ({
            name: file.name,
            downloadUrl: file.downloadURL,
          })),
          customer: decodedToken.id,
          requirements: {
            material,
            process,
            quantity: Number(quantity),
            tolerance,
            finish,
          },
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.success) {
        navigate(`/customer/dashboard`);
      } else {
        setFileError(response.data.error);
      }
    } catch (error) {
      setFileError("Failed to create project: " + error.message);
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-8 lg:my-10 max-h-[90%]">
      <Card>
        <CardHeader>
          <CardTitle>Create New Quote</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-10">
            <div
              className={`flex flex-col gap-4 items-center justify-center border-2 border-dashed rounded-lg p-8 text-center ${
                dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
              }`}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
            >
              {uploading ? (
                <div className="w-full">
                  <Progress value={progress} className="w-full" />
                  <p className="mt-2">Uploading... {progress}%</p>
                </div>
              ) : files.length > 0 ? (
                <div className="w-full">
                  <h3 className="text-lg font-medium mb-2">Uploaded Files:</h3>
                  <ul className="space-y-2">
                    {files.map((file, index) => (
                      <li key={index} className="flex items-center">
                        <File className="mr-2" />
                        {file.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <>
                  <img
                    src={dummyImg}
                    alt="Drop File"
                    className="rounded-xl object-cover"
                  />
                  <p className="text-lg font-medium">
                    Drag & Drop Your Designs Or
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() =>
                      document.getElementById("file-upload").click()
                    }
                  >
                    Browse
                  </Button>
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    className="hidden"
                    onChange={onFileSelect}
                    accept={allowedTypes.join(",")}
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    You can upload multiple files at once
                  </p>
                </>
              )}
            </div>

            {(error || fileError) && (
              <div className="text-red-500 text-center">
                Error: {error || fileError}
              </div>
            )}

            <Separator my-6 />
            {/* <div>
              <h1>Quote Details</h1>
            </div> */}
            <div className="space-y-4">
              <Label
                htmlFor="projectTitle"
                className="block text-sm font-medium"
              >
                Project Title
              </Label>
              <Input
                type="text"
                id="projectTitle"
                placeholder="Project title"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                required
              />
            </div>

            <div className="space-y-4">
              <Label
                htmlFor="projectDescription"
                className="block text-sm font-medium"
              >
                Project Description
              </Label>
              <Textarea
                placeholder="Type your project additional details here..."
                id="projectDescription"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                className="border p-2 rounded-lg w-full"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="space-y-4">
                <Label htmlFor="material" className="block text-sm font-medium">
                  Material
                </Label>
                <Input
                  type="text"
                  id="material"
                  placeholder="Material"
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                />
              </div>

              <div className="space-y-4">
                <Label htmlFor="process" className="block text-sm font-medium">
                  Process
                </Label>
                <Input
                  type="text"
                  id="process"
                  placeholder="Process"
                  value={process}
                  onChange={(e) => setProcess(e.target.value)}
                />
              </div>

              <div className="space-y-4">
                <Label htmlFor="quantity" className="block text-sm font-medium">
                  Quantity
                </Label>
                <Input
                  type="number"
                  id="quantity"
                  placeholder="000"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              <div className="space-y-4">
                <Label
                  htmlFor="tolerance"
                  className="block text-sm font-medium"
                >
                  Tolerance
                </Label>
                <Input
                  type="text"
                  id="tolerance"
                  placeholder="Tolerance"
                  value={tolerance}
                  onChange={(e) => setTolerance(e.target.value)}
                />
              </div>

              <div className="space-y-4">
                <Label htmlFor="finish" className="block text-sm font-medium">
                  Finish
                </Label>
                <Input
                  type="text"
                  id="finish"
                  placeholder="Finishing"
                  value={finish}
                  onChange={(e) => setFinish(e.target.value)}
                />
              </div>
            </div>

            <Button
              loading={loading}
              type="submit"
              className="block mx-auto text-white"
            >
              Create Project
            </Button>
          </form>

          <Separator className="my-10" />

          <div className="text-sm text-gray-600 space-y-4 text-center pb-10">
            <p>
              <strong>Instant quote:</strong> STEP, STP, SLDPRT, STL, SAT,
              3DXML, 3MF, PRT, IPT, CATPART, X_T, PTC, X_B, DXF
            </p>
            <p>
              <strong>Manual quote:</strong> DWS, DWF, DWG, PDF
            </p>
            <p className="flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 mr-1" />
              All uploads are secure and confidential
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateNewQuote;
