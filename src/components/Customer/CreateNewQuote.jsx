// import { useState, useCallback } from "react";
// import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

// import { Separator } from "@/components/ui/separator";
// import { Progress } from "@/components/ui/progress";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import dummyImg from "../../assets/drop-zone-pic-952cabeb.png";
// import { ShieldCheck, File } from "lucide-react";
// import useFileUpload from "@/hooks/useFileUpload";
// import axiosInstance from "@/api/client";
// import { useSelector } from "react-redux";
// import { useAuth } from "@/hooks/useAuth";
// import { Textarea } from "../ui/textarea";
// import { useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
// import { Button } from "../custom/button";

// const CreateNewQuote = () => {
//   const navigate = useNavigate();
//   const { token } = useAuth();
//   const { files, uploading, progress, error, handleUpload } = useFileUpload();
//   const [dragActive, setDragActive] = useState(false);
//   const [fileError, setFileError] = useState(null);
//   const [projectTitle, setProjectTitle] = useState("");
//   const [projectDescription, setProjectDescription] = useState("");
//   const [material, setMaterial] = useState("");
//   const [process, setProcess] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [tolerance, setTolerance] = useState("");
//   const [finish, setFinish] = useState("");
//   const [loading, setLoading] = useState(false);

//   const { profile } = useSelector((state) => state.user);

//   const decodedToken = jwtDecode(token);

//   const allowedTypes = [
//     ".step",
//     ".stp",
//     ".sldprt",
//     ".stl",
//     ".sat",
//     ".3dxml",
//     ".3mf",
//     ".prt",
//     ".ipt",
//     ".catpart",
//     ".x_t",
//     ".ptc",
//     ".x_b",
//     ".dxf",
//     ".dws",
//     ".dwf",
//     ".dwg",
//     ".pdf",
//     ".jpg",
//     ".jpeg",
//     ".webp",
//     ".png",
//     ".svg",
//   ];

//   const validateFiles = (files) => {
//     if (
//       !files.every((file) =>
//         allowedTypes.some((type) => file.name.toLowerCase().endsWith(type))
//       )
//     ) {
//       setFileError(
//         "Invalid file type. Please upload only the allowed file types."
//       );
//       return false;
//     }

//     setFileError(null);
//     return true;
//   };

//   const onDragOver = useCallback((e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(true);
//   }, []);

//   const onDragLeave = useCallback((e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//   }, []);

//   const onDrop = useCallback(
//     (e) => {
//       e.preventDefault();
//       e.stopPropagation();
//       setDragActive(false);
//       const droppedFiles = Array.from(e.dataTransfer.files);
//       if (validateFiles(droppedFiles)) {
//         handleUpload(droppedFiles);
//       }
//     },
//     [handleUpload]
//   );

//   const onFileSelect = useCallback(
//     (e) => {
//       const selectedFiles = Array.from(e.target.files);
//       if (validateFiles(selectedFiles)) {
//         handleUpload(selectedFiles);
//       }
//     },
//     [handleUpload]
//   );

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!projectTitle) {
//       setFileError("Project title is required.");
//       return;
//     }
//     setLoading(true);
//     try {
//       const response = await axiosInstance.post(
//         "/projects",
//         {
//           title: projectTitle,
//           description: projectDescription,
//           files: files.map((file) => ({
//             name: file.name,
//             downloadUrl: file.downloadURL,
//           })),
//           user: decodedToken.id,
//           requirements: {
//             material,
//             process,
//             quantity: Number(quantity),
//             tolerance,
//             finish,
//           },
//         },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       if (response.success) {
//         navigate(`/customer/dashboard`);
//       } else {
//         setFileError(response.data.error);
//       }
//     } catch (error) {
//       setFileError("Failed to create project: " + error.message);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 space-y-8 lg:my-10 max-h-[90%]">
//       <Card>
//         <CardHeader>
//           <CardTitle>Create New Quote</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-10">
//             <div
//               className={`flex flex-col gap-4 items-center justify-center border-2 border-dashed rounded-lg p-8 text-center ${
//                 dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
//               }`}
//               onDragOver={onDragOver}
//               onDragLeave={onDragLeave}
//               onDrop={onDrop}
//             >
//               {uploading ? (
//                 <div className="w-full">
//                   <Progress value={progress} className="w-full" />
//                   <p className="mt-2">Uploading... {progress}%</p>
//                 </div>
//               ) : files.length > 0 ? (
//                 <div className="w-full">
//                   <h3 className="text-lg font-medium mb-2">Uploaded Files:</h3>
//                   <ul className="space-y-2">
//                     {files.map((file, index) => (
//                       <li key={index} className="flex items-center">
//                         <File className="mr-2" />
//                         {file.name}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ) : (
//                 <>
//                   <img
//                     src={dummyImg}
//                     alt="Drop File"
//                     className="rounded-xl object-cover"
//                   />
//                   <p className="text-lg font-medium">
//                     Drag & Drop Your Designs Or
//                   </p>
//                   <Button
//                     variant="outline"
//                     className="mt-4"
//                     onClick={() =>
//                       document.getElementById("file-upload").click()
//                     }
//                   >
//                     Browse
//                   </Button>
//                   <input
//                     id="file-upload"
//                     type="file"
//                     multiple
//                     className="hidden"
//                     onChange={onFileSelect}
//                     accept={allowedTypes.join(",")}
//                   />
//                   <p className="text-sm text-gray-500 mt-2">
//                     You can upload multiple files at once
//                   </p>
//                 </>
//               )}
//             </div>

//             {(error || fileError) && (
//               <div className="text-red-500 text-center">
//                 Error: {error || fileError}
//               </div>
//             )}

//             <Separator my-6 />
//             {/* <div>
//               <h1>Quote Details</h1>
//             </div> */}
//             <div className="space-y-4">
//               <Label
//                 htmlFor="projectTitle"
//                 className="block text-sm font-medium"
//               >
//                 Project Title
//               </Label>
//               <Input
//                 type="text"
//                 id="projectTitle"
//                 placeholder="Project title"
//                 value={projectTitle}
//                 onChange={(e) => setProjectTitle(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="space-y-4">
//               <Label
//                 htmlFor="projectDescription"
//                 className="block text-sm font-medium"
//               >
//                 Project Description
//               </Label>
//               <Textarea
//                 placeholder="Type your project additional details here..."
//                 id="projectDescription"
//                 value={projectDescription}
//                 onChange={(e) => setProjectDescription(e.target.value)}
//                 className="border p-2 rounded-lg w-full"
//               />
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//               <div className="space-y-4">
//                 <Label htmlFor="material" className="block text-sm font-medium">
//                   Material
//                 </Label>
//                 <Input
//                   type="text"
//                   id="material"
//                   placeholder="Material"
//                   value={material}
//                   onChange={(e) => setMaterial(e.target.value)}
//                 />
//               </div>

//               <div className="space-y-4">
//                 <Label htmlFor="process" className="block text-sm font-medium">
//                   Process
//                 </Label>
//                 <Input
//                   type="text"
//                   id="process"
//                   placeholder="Process"
//                   value={process}
//                   onChange={(e) => setProcess(e.target.value)}
//                 />
//               </div>

//               <div className="space-y-4">
//                 <Label htmlFor="quantity" className="block text-sm font-medium">
//                   Quantity
//                 </Label>
//                 <Input
//                   type="number"
//                   id="quantity"
//                   placeholder="000"
//                   value={quantity}
//                   onChange={(e) => setQuantity(e.target.value)}
//                 />
//               </div>

//               <div className="space-y-4">
//                 <Label
//                   htmlFor="tolerance"
//                   className="block text-sm font-medium"
//                 >
//                   Tolerance
//                 </Label>
//                 <Input
//                   type="text"
//                   id="tolerance"
//                   placeholder="Tolerance"
//                   value={tolerance}
//                   onChange={(e) => setTolerance(e.target.value)}
//                 />
//               </div>

//               <div className="space-y-4">
//                 <Label htmlFor="finish" className="block text-sm font-medium">
//                   Finish
//                 </Label>
//                 <Input
//                   type="text"
//                   id="finish"
//                   placeholder="Finishing"
//                   value={finish}
//                   onChange={(e) => setFinish(e.target.value)}
//                 />
//               </div>
//             </div>

//             <Button
//               loading={loading}
//               type="submit"
//               className="block mx-auto text-white"
//             >
//               Create Project
//             </Button>
//           </form>

//           <Separator className="my-10" />

//           <div className="text-sm text-gray-600 space-y-4 text-center pb-10">
//             <p>
//               <strong>Instant quote:</strong> STEP, STP, SLDPRT, STL, SAT,
//               3DXML, 3MF, PRT, IPT, CATPART, X_T, PTC, X_B, DXF
//             </p>
//             <p>
//               <strong>Manual quote:</strong> DWS, DWF, DWG, PDF
//             </p>
//             <p className="flex items-center justify-center">
//               <ShieldCheck className="w-4 h-4 mr-1" />
//               All uploads are secure and confidential
//             </p>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default CreateNewQuote;
//================================================
import { useState, useCallback } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import dummyImg from "../../assets/drop-zone-pic-952cabeb.png";
import { ShieldCheck, File, Upload } from "lucide-react";
import useFileUpload from "@/hooks/useFileUpload";
import axiosInstance from "@/api/client";
import { useSelector } from "react-redux";
import { useAuth } from "@/hooks/useAuth";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { Button } from "@/components/ui/button"; // Replaced custom button with Shadcn's Button
import { toast } from "@/components/ui/use-toast";

const CreateNewQuote = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { files, uploading, progress, error, handleUpload } = useFileUpload();
  const [dragActive, setDragActive] = useState(false);
  const [fileError, setFileError] = useState(null);
  const [formData, setFormData] = useState({
    projectTitle: "",
    projectDescription: "",
    material: "",
    process: "",
    quantity: "",
    tolerance: "",
    finish: "",
  });
  const [loading, setLoading] = useState(false);

  const { profile } = useSelector((state) => state.user);
  const decodedToken = jwtDecode(token);

  const allowedTypes = [
    ".step", ".stp", ".sldprt", ".stl", ".sat", ".3dxml", ".3mf", ".prt",
    ".ipt", ".catpart", ".x_t", ".ptc", ".x_b", ".dxf", ".dws", ".dwf",
    ".dwg", ".pdf", ".jpg", ".jpeg", ".webp", ".png", ".svg",
  ];

  const validateFiles = (files) => {
    if (!files.every((file) => allowedTypes.some((type) => file.name.toLowerCase().endsWith(type)))) {
      setFileError("Invalid file type. Please upload only the allowed file types.");
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

  const onDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    if (validateFiles(droppedFiles)) {
      handleUpload(droppedFiles);
    }
  }, [handleUpload]);

  const onFileSelect = useCallback((e) => {
    const selectedFiles = Array.from(e.target.files);
    if (validateFiles(selectedFiles)) {
      handleUpload(selectedFiles);
    }
  }, [handleUpload]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.projectTitle) {
      setFileError("Project title is required.");
      return;
    }
    setLoading(true);
    try {
      const response = await axiosInstance.post(
        "/projects",
        {
          title: formData.projectTitle,
          description: formData.projectDescription,
          files: files.map((file) => ({
            name: file.name,
            downloadUrl: file.downloadURL,
          })),
          user: decodedToken.id,
          requirements: {
            material: formData.material,
            process: formData.process,
            quantity: Number(formData.quantity),
            tolerance: formData.tolerance,
            finish: formData.finish,
          },
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        toast({
          title: "Success",
          description: "Project created successfully",
        });
        navigate("/customer/dashboard");
      } else {
        setFileError(response.data.error);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create project: " + error.message,
        variant: "destructive",
      });
      setFileError("Failed to create project: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-7xl">
      <Card className="shadow-md border-0">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-semibold tracking-tight">
            Create New Quote
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Upload your designs and specify project details
          </p>
        </CardHeader>
        <CardContent className="space-y-8">
          <form onSubmit={handleSubmit}>
            {/* File Upload Section */}
            <div
              className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 transition-colors ${
                dragActive ? "border-primary bg-primary/5" : "border-muted"
              }`}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
            >
              {uploading ? (
                <div className="w-full space-y-2">
                  <Progress value={progress} className="w-full h-2" />
                  <p className="text-sm text-muted-foreground text-center">
                    Uploading... {progress}%
                  </p>
                </div>
              ) : files.length > 0 ? (
                <div className="w-full space-y-3">
                  <h3 className="text-lg font-medium text-center">Uploaded Files</h3>
                  <ul className="space-y-2 max-h-40 overflow-auto">
                    {files.map((file, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <File className="mr-2 h-4 w-4" />
                        <span className="truncate">{file.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <img
                    src={dummyImg}
                    alt="Drop File"
                    className="mx-auto h-32 w-32 object-cover rounded-lg"
                  />
                  <p className="text-lg font-medium">Drag & Drop Your Designs</p>
                  <p className="text-sm text-muted-foreground">Or</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => document.getElementById("file-upload").click()}
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Browse Files
                  </Button>
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    className="hidden"
                    onChange={onFileSelect}
                    accept={allowedTypes.join(",")}
                  />
                  <p className="text-xs text-muted-foreground">
                    Supports multiple files: {allowedTypes.slice(0, 5).join(", ")} and more
                  </p>
                </div>
              )}
            </div>

            {/* Error Display */}
            {(error || fileError) && (
              <div className="text-center text-sm text-destructive mt-4">
                {error || fileError}
              </div>
            )}

            <Separator className="my-8" />

            {/* Form Fields */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="projectTitle" className="text-sm font-medium">
                  Project Title <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="projectTitle"
                  name="projectTitle"
                  placeholder="Enter project title"
                  value={formData.projectTitle}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectDescription" className="text-sm font-medium">
                  Project Description
                </Label>
                <Textarea
                  id="projectDescription"
                  name="projectDescription"
                  placeholder="Describe your project details..."
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  className="min-h-[100px]"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="material" className="text-sm font-medium">
                    Material
                  </Label>
                  <Input
                    id="material"
                    name="material"
                    placeholder="e.g., Aluminum"
                    value={formData.material}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="process" className="text-sm font-medium">
                    Process
                  </Label>
                  <Input
                    id="process"
                    name="process"
                    placeholder="e.g., CNC Machining"
                    value={formData.process}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity" className="text-sm font-medium">
                    Quantity
                  </Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="number"
                    placeholder="e.g., 100"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    min="1"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tolerance" className="text-sm font-medium">
                    Tolerance
                  </Label>
                  <Input
                    id="tolerance"
                    name="tolerance"
                    placeholder="e.g., ±0.01 mm"
                    value={formData.tolerance}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="finish" className="text-sm font-medium">
                    Finish
                  </Label>
                  <Input
                    id="finish"
                    name="finish"
                    placeholder="e.g., Polished"
                    value={formData.finish}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <Button
                type="submit"
                disabled={loading || uploading}
                className="w-full sm:w-auto"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Project"
                )}
              </Button>
            </div>
          </form>

          <Separator className="my-8" />

          {/* Footer Info */}
          <div className="text-center text-sm text-muted-foreground space-y-3">
            <p>
              <strong>Instant Quote:</strong> STEP, STP, SLDPRT, STL, SAT, 3DXML, 3MF, PRT, IPT, CATPART, X_T, PTC, X_B, DXF
            </p>
            <p>
              <strong>Manual Quote:</strong> DWS, DWF, DWG, PDF
            </p>
            <p className="flex items-center justify-center">
              <ShieldCheck className="mr-2 h-4 w-4" />
              All uploads are secure and confidential
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateNewQuote;