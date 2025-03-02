// // import React, { useState } from "react";
// // import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableHead,
// //   TableHeader,
// //   TableRow,
// // } from "@/components/ui/table";
// // import { Badge } from "@/components/ui/badge";
// // import { Skeleton } from "@/components/ui/skeleton";
// // import { Button } from "@/components/ui/button";
// // import { Eye, Trash2, Pencil, Download } from "lucide-react";
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogDescription,
// //   DialogHeader,
// //   DialogTitle,
// //   DialogTrigger,
// // } from "@/components/ui/dialog";
// // import {
// //   Form,
// //   FormControl,
// //   FormField,
// //   FormItem,
// //   FormLabel,
// //   FormMessage,
// // } from "@/components/ui/form";
// // import { Input } from "@/components/ui/input";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { useForm } from "react-hook-form";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import * as z from "zod";
// // import axiosInstance from "@/api/client";
// // import { useAuth } from "@/hooks/useAuth";
// // import { toast } from "@/components/ui/use-toast";

// // // Form schema for editing a project
// // const editProjectSchema = z.object({
// //   title: z.string().min(1, "Title is required"),
// //   description: z.string().optional(),
// //   deliveryDate: z.string().optional(),
// // });

// // const ProjectsListTable = () => {
// //   const { token } = useAuth();
// //   const queryClient = useQueryClient();
// //   const [selectedProject, setSelectedProject] = useState(null);
// //   const [showDetailsModal, setShowDetailsModal] = useState(false);
// //   const [showEditModal, setShowEditModal] = useState(false);

// //   // Fetch projects
// //   const fetchProjects = async () => {
// //     const response = await axiosInstance.get("/projects", {
// //       headers: { Authorization: `Bearer ${token}` },
// //     });
// //     return response.data;
// //   };

// //   const { data: projects, isLoading, error } = useQuery({
// //     queryKey: ["projects"],
// //     queryFn: fetchProjects,
// //     enabled: !!token,
// //   });

// //   // Form setup for editing
// //   const form = useForm({
// //     resolver: zodResolver(editProjectSchema),
// //     defaultValues: {
// //       title: "",
// //       description: "",
// //       deliveryDate: "",
// //     },
// //   });

// //   // Set form values when a project is selected for editing
// //   React.useEffect(() => {
// //     if (selectedProject && showEditModal) {
// //       form.reset({
// //         title: selectedProject.title,
// //         description: selectedProject.description || "",
// //         deliveryDate: selectedProject.deliveryDate
// //           ? new Date(selectedProject.deliveryDate).toISOString().split("T")[0]
// //           : "",
// //       });
// //     }
// //   }, [selectedProject, showEditModal, form]);

// //   // Edit project mutation
// //   const updateProjectMutation = useMutation({
// //     mutationFn: (data) =>
// //       axiosInstance.put(`/projects/${selectedProject._id}`, data, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       }),
// //     onSuccess: () => {
// //       queryClient.invalidateQueries(["projects"]);
// //       setShowEditModal(false);
// //       setSelectedProject(null);
// //       toast({ title: "Success", description: "Project updated successfully" });
// //     },
// //     onError: (error) => {
// //       toast({
// //         title: "Error",
// //         description: error.response?.data?.error || "Failed to update project",
// //         variant: "destructive",
// //       });
// //     },
// //   });

// //   // Delete project mutation
// //   const deleteProjectMutation = useMutation({
// //     mutationFn: (projectId) =>
// //       axiosInstance.delete(`/projects/${projectId}`, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       }),
// //     onSuccess: () => {
// //       queryClient.invalidateQueries(["projects"]);
// //       toast({ title: "Success", description: "Project deleted successfully" });
// //     },
// //     onError: (error) => {
// //       toast({
// //         title: "Error",
// //         description: error.response?.data?.error || "Failed to delete project",
// //         variant: "destructive",
// //       });
// //     },
// //   });

// //   // Handle view details
// //   const handleViewDetails = (project) => {
// //     setSelectedProject(project);
// //     setShowDetailsModal(true);
// //   };

// //   // Handle edit project
// //   const handleEditProject = (project) => {
// //     setSelectedProject(project);
// //     setShowEditModal(true);
// //   };

// //   // Handle form submission for edit
// //   const onEditSubmit = (data) => {
// //     updateProjectMutation.mutate(data);
// //   };

// //   // Status colors
// //   const statusColors = {
// //     AVAILABLE: "bg-blue-100 text-blue-700",
// //     IN_PRODUCTION: "bg-orange-100 text-orange-700",
// //     SHIPPED: "bg-teal-100 text-teal-700",
// //     DELIVERED: "bg-green-100 text-green-700",
// //     CANCELLED: "bg-red-100 text-red-700",
// //   };

// //   // Loading state
// //   if (isLoading) {
// //     return (
// //       <Card className="container mx-auto my-6 p-4">
// //         <CardHeader>
// //           <CardTitle>Project Management</CardTitle>
// //         </CardHeader>
// //         <CardContent>
// //           <Table>
// //             <TableHeader>
// //               <TableRow>
// //                 <TableHead>Title</TableHead>
// //                 <TableHead>Description</TableHead>
// //                 <TableHead>Status</TableHead>
// //                 <TableHead>Delivery Date</TableHead>
// //                 <TableHead>Actions</TableHead>
// //               </TableRow>
// //             </TableHeader>
// //             <TableBody>
// //               {Array.from({ length: 3 }).map((_, index) => (
// //                 <TableRow key={index}>
// //                   <TableCell><Skeleton className="w-32 h-6" /></TableCell>
// //                   <TableCell><Skeleton className="w-48 h-6" /></TableCell>
// //                   <TableCell><Skeleton className="w-24 h-6" /></TableCell>
// //                   <TableCell><Skeleton className="w-24 h-6" /></TableCell>
// //                   <TableCell><Skeleton className="w-24 h-6" /></TableCell>
// //                 </TableRow>
// //               ))}
// //             </TableBody>
// //           </Table>
// //         </CardContent>
// //       </Card>
// //     );
// //   }

// //   if (error) return <p className="text-red-500">Error: {error.message}</p>;

// //   // Project Details Modal
// //   const ProjectDetailsModal = ({ project, isOpen, onClose }) => {
// //     if (!project) return null;

// //     return (
// //       <Dialog open={isOpen} onOpenChange={onClose}>
// //         <DialogContent className="max-w-4xl">
// //           <DialogHeader>
// //             <DialogTitle className="text-2xl font-bold">
// //               Project Details: {project.title}
// //             </DialogTitle>
// //             <DialogDescription>
// //               View detailed information about this project.
// //             </DialogDescription>
// //           </DialogHeader>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
// //             {/* Basic Information */}
// //             <Card>
// //               <CardHeader>
// //                 <CardTitle>Basic Information</CardTitle>
// //               </CardHeader>
// //               <CardContent>
// //                 <div className="space-y-2">
// //                   <p>
// //                     <span className="font-semibold">Status:</span>{" "}
// //                     <Badge className={statusColors[project.status]}>{project.status}</Badge>
// //                   </p>
// //                   <p><span className="font-semibold">Description:</span> {project.description || "N/A"}</p>
// //                   <p>
// //                     <span className="font-semibold">Delivery Date:</span>{" "}
// //                     {project.deliveryDate ? new Date(project.deliveryDate).toLocaleDateString() : "N/A"}
// //                   </p>
// //                   <p><span className="font-semibold">Created At:</span> {new Date(project.createdAt).toLocaleString()}</p>
// //                   <p><span className="font-semibold">Updated At:</span> {new Date(project.updatedAt).toLocaleString()}</p>
// //                 </div>
// //               </CardContent>
// //             </Card>

// //             {/* Requirements */}
// //             <Card>
// //               <CardHeader>
// //                 <CardTitle>Requirements</CardTitle>
// //               </CardHeader>
// //               <CardContent>
// //                 <div className="space-y-2">
// //                   <p><span className="font-semibold">Material:</span> {project.requirements.material || "N/A"}</p>
// //                   <p><span className="font-semibold">Process:</span> {project.requirements.process || "N/A"}</p>
// //                   <p><span className="font-semibold">Quantity:</span> {project.requirements.quantity || "N/A"}</p>
// //                   <p><span className="font-semibold">Tolerance:</span> {project.requirements.tolerance || "N/A"}</p>
// //                   <p><span className="font-semibold">Finish:</span> {project.requirements.finish || "N/A"}</p>
// //                 </div>
// //               </CardContent>
// //             </Card>

// //             {/* Supplier Information */}
// //             <Card>
// //               <CardHeader>
// //                 <CardTitle>Supplier Information</CardTitle>
// //               </CardHeader>
// //               <CardContent>
// //                 <div className="space-y-2">
// //                   <p><span className="font-semibold">Company Name:</span> {project.supplier?.companyName || "N/A"}</p>
// //                   <p><span className="font-semibold">Address:</span> {project.supplier?.companyAddress || "N/A"}</p>
// //                   <p><span className="font-semibold">Tax ID:</span> {project.supplier?.taxId || "N/A"}</p>
// //                   <p>
// //                     <span className="font-semibold">Capabilities:</span>{" "}
// //                     {project.supplier?.manufacturingCapabilities?.join(", ") || "N/A"}
// //                   </p>
// //                   <p>
// //                     <span className="font-semibold">Certifications:</span>{" "}
// //                     {project.supplier?.certifications?.join(", ") || "N/A"}
// //                   </p>
// //                   <p><span className="font-semibold">Rating:</span> {project.supplier?.rating || "N/A"}</p>
// //                   <p><span className="font-semibold">Total Projects:</span> {project.supplier?.totalProjects || "N/A"}</p>
// //                   <p><span className="font-semibold">Active Projects:</span> {project.supplier?.activeProjects || "N/A"}</p>
// //                   <p><span className="font-semibold">Lead Time:</span> {project.supplier?.leadTime || "N/A"} days</p>
// //                   <p>
// //                     <span className="font-semibold">Minimum Order Value:</span>{" "}
// //                     ${project.supplier?.minimumOrderValue?.toLocaleString() || "N/A"}
// //                   </p>
// //                 </div>
// //               </CardContent>
// //             </Card>

// //             {/* Files */}
// //             {project.files && project.files.length > 0 && (
// //               <Card>
// //                 <CardHeader>
// //                   <CardTitle>Attachments</CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="space-y-2">
// //                     {project.files.map((file, index) => (
// //                       <div key={index} className="flex items-center gap-2">
// //                         <span>{file.name}</span>
// //                         <Button
// //                           variant="outline"
// //                           size="sm"
// //                           as="a"
// //                           href={file.downloadUrl}
// //                           target="_blank"
// //                           rel="noopener noreferrer"
// //                         >
// //                           <Download className="h-4 w-4" />
// //                         </Button>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             )}
// //           </div>
// //         </DialogContent>
// //       </Dialog>
// //     );
// //   };

// //   // Edit Project Modal
// //   const EditProjectModal = ({ project, isOpen, onClose }) => {
// //     if (!project) return null;

// //     return (
// //       <Dialog open={isOpen} onOpenChange={onClose}>
// //         <DialogContent className="sm:max-w-[425px]">
// //           <DialogHeader>
// //             <DialogTitle>Edit Project: {project.title}</DialogTitle>
// //             <DialogDescription>
// //               Modify the project details below.
// //             </DialogDescription>
// //           </DialogHeader>
// //           <Form {...form}>
// //             <form onSubmit={form.handleSubmit(onEditSubmit)} className="space-y-4">
// //               <FormField
// //                 control={form.control}
// //                 name="title"
// //                 render={({ field }) => (
// //                   <FormItem>
// //                     <FormLabel>Title</FormLabel>
// //                     <FormControl>
// //                       <Input placeholder="Enter project title" {...field} />
// //                     </FormControl>
// //                     <FormMessage />
// //                   </FormItem>
// //                 )}
// //               />
// //               <FormField
// //                 control={form.control}
// //                 name="description"
// //                 render={({ field }) => (
// //                   <FormItem>
// //                     <FormLabel>Description</FormLabel>
// //                     <FormControl>
// //                       <Input placeholder="Enter description" {...field} />
// //                     </FormControl>
// //                     <FormMessage />
// //                   </FormItem>
// //                 )}
// //               />
// //               <FormField
// //                 control={form.control}
// //                 name="deliveryDate"
// //                 render={({ field }) => (
// //                   <FormItem>
// //                     <FormLabel>Delivery Date</FormLabel>
// //                     <FormControl>
// //                       <Input type="date" {...field} />
// //                     </FormControl>
// //                     <FormMessage />
// //                   </FormItem>
// //                 )}
// //               />
// //               <Button type="submit" disabled={updateProjectMutation.isPending}>
// //                 {updateProjectMutation.isPending ? (
// //                   <Loader2 className="h-4 w-4 animate-spin" />
// //                 ) : (
// //                   "Save Changes"
// //                 )}
// //               </Button>
// //             </form>
// //           </Form>
// //         </DialogContent>
// //       </Dialog>
// //     );
// //   };

// //   return (
// //     <Card className="container mx-auto my-6 p-4">
// //       <CardHeader>
// //         <CardTitle>Project Management</CardTitle>
// //       </CardHeader>
// //       <CardContent>
// //         <Table>
// //           <TableHeader>
// //             <TableRow>
// //               <TableHead>Title</TableHead>
// //               <TableHead>Description</TableHead>
// //               <TableHead>Status</TableHead>
// //               <TableHead>Delivery Date</TableHead>
// //               <TableHead>Actions</TableHead>
// //             </TableRow>
// //           </TableHeader>
// //           <TableBody>
// //             {projects?.map((project) => (
// //               <TableRow key={project._id}>
// //                 <TableCell>{project.title}</TableCell>
// //                 <TableCell>
// //                   {project.description?.length > 50
// //                     ? `${project.description.substring(0, 50)}...`
// //                     : project.description || "N/A"}
// //                 </TableCell>
// //                 <TableCell>
// //                   <Badge className={statusColors[project.status]}>{project.status}</Badge>
// //                 </TableCell>
// //                 <TableCell>
// //                   {project.deliveryDate
// //                     ? new Date(project.deliveryDate).toLocaleDateString()
// //                     : "N/A"}
// //                 </TableCell>
// //                 <TableCell className="flex space-x-2">
// //                   <Button
// //                     variant="outline"
// //                     size="sm"
// //                     onClick={() => handleViewDetails(project)}
// //                   >
// //                     <Eye className="h-4 w-4" />
// //                   </Button>
// //                   <Button
// //                     variant="outline"
// //                     size="sm"
// //                     onClick={() => handleEditProject(project)}
// //                   >
// //                     <Pencil className="h-4 w-4" />
// //                   </Button>
// //                   <Button
// //                     variant="destructive"
// //                     size="sm"
// //                     onClick={() => deleteProjectMutation.mutate(project._id)}
// //                   >
// //                     <Trash2 className="h-4 w-4" />
// //                   </Button>
// //                 </TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //         <ProjectDetailsModal
// //           project={selectedProject}
// //           isOpen={showDetailsModal}
// //           onClose={() => {
// //             setShowDetailsModal(false);
// //             setSelectedProject(null);
// //           }}
// //         />
// //         <EditProjectModal
// //           project={selectedProject}
// //           isOpen={showEditModal}
// //           onClose={() => {
// //             setShowEditModal(false);
// //             setSelectedProject(null);
// //           }}
// //         />
// //       </CardContent>
// //     </Card>
// //   );
// // };

// // export default ProjectsListTable;

// //==============================================================
// import React, { useState, useCallback } from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";
// import { Skeleton } from "@/components/ui/skeleton";
// import { Button } from "@/components/ui/button";
// import { Eye, Trash2, Pencil, Download } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import axiosInstance from "@/api/client";
// import { useAuth } from "@/hooks/useAuth";
// import { toast } from "@/components/ui/use-toast";

// // Form schema for editing a project
// const editProjectSchema = z.object({
//   title: z.string().min(1, "Title is required"),
//   description: z.string().optional(),
//   deliveryDate: z.string().optional(),
// });

// const ProjectsListTable = () => {
//   const { token } = useAuth();
//   const queryClient = useQueryClient();
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [showDetailsModal, setShowDetailsModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
  

//   // Fetch projects
//   const fetchProjects = async () => {
//     const response = await axiosInstance.get("/projects", {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   };

//   const { data: projects, isLoading, error } = useQuery({
//     queryKey: ["projects"],
//     queryFn: fetchProjects,
//     enabled: !!token,
//   });

//   // Form setup for editing
//   const form = useForm({
//     resolver: zodResolver(editProjectSchema),
//     defaultValues: {
//       title: "",
//       description: "",
//       deliveryDate: "",
//     },
//   });

//   // Set form values when a project is selected for editing
//   React.useEffect(() => {
//     if (selectedProject && showEditModal) {
//       form.reset({
//         title: selectedProject.title,
//         description: selectedProject.description || "",
//         deliveryDate: selectedProject.deliveryDate
//           ? new Date(selectedProject.deliveryDate).toISOString().split("T")[0]
//           : "",
//       });
//     }
//   }, [selectedProject, showEditModal, form]);

//   // Edit project mutation
//   const updateProjectMutation = useMutation({
//     mutationFn: (data) =>
//       axiosInstance.put(`/projects/${selectedProject._id}`, data, {
//         headers: { Authorization: `Bearer ${token}` },
//       }),
//     onSuccess: () => {
//       queryClient.invalidateQueries(["projects"]);
//       setShowEditModal(false);
//       setSelectedProject(null);
//       toast({ title: "Success", description: "Project updated successfully" });
//     },
//     onError: (error) => {
//       toast({
//         title: "Error",
//         description: error.response?.data?.error || "Failed to update project",
//         variant: "destructive",
//       });
//     },
//   });

//   // Delete project mutation
//   const deleteProjectMutation = useMutation({
//     mutationFn: (projectId) =>
//       axiosInstance.delete(`/projects/${projectId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       }),
//     onSuccess: () => {
//       queryClient.invalidateQueries(["projects"]);
//       toast({ title: "Success", description: "Project deleted successfully" });
//     },
//     onError: (error) => {
//       toast({
//         title: "Error",
//         description: error.response?.data?.error || "Failed to delete project",
//         variant: "destructive",
//       });
//     },
//   });

//   // Memoized handlers to prevent re-rendering
//   const handleViewDetails = useCallback((project) => {
//     setSelectedProject(project);
//     setShowDetailsModal(true);
//   }, []);

//   const handleEditProject = useCallback((project) => {
//     setSelectedProject(project);
//     setShowEditModal(true);
//   }, []);

//   const handleCloseDetailsModal = useCallback(() => {
//     setShowDetailsModal(false);
//     setSelectedProject(null);
//   }, []);

//   const handleCloseEditModal = useCallback(() => {
//     setShowEditModal(false);
//     setSelectedProject(null);
//   }, []);

//   const onEditSubmit = useCallback((data) => {
//     updateProjectMutation.mutate(data);
//   }, [updateProjectMutation]);

//   // Status colors
//   const statusColors = {
//     AVAILABLE: "bg-blue-100 text-blue-700",
//     IN_PRODUCTION: "bg-orange-100 text-orange-700",
//     SHIPPED: "bg-teal-100 text-teal-700",
//     DELIVERED: "bg-green-100 text-green-700",
//     CANCELLED: "bg-red-100 text-red-700",
//   };

//   // Loading state
//   if (isLoading) {
//     return (
//       <Card className="container mx-auto my-6 p-4">
//         <CardHeader>
//           <CardTitle>Project Management</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Title</TableHead>
//                 <TableHead>Description</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead>Delivery Date</TableHead>
//                 <TableHead>Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {Array.from({ length: 3 }).map((_, index) => (
//                 <TableRow key={index}>
//                   <TableCell><Skeleton className="w-32 h-6" /></TableCell>
//                   <TableCell><Skeleton className="w-48 h-6" /></TableCell>
//                   <TableCell><Skeleton className="w-24 h-6" /></TableCell>
//                   <TableCell><Skeleton className="w-24 h-6" /></TableCell>
//                   <TableCell><Skeleton className="w-24 h-6" /></TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     );
//   }

//   if (error) return <p className="text-red-500">Error: {error.message}</p>;

//   // Project Details Modal
//   const ProjectDetailsModal = ({ project, isOpen, onClose }) => {
//     if (!project) return null;

//     return (
//       <Dialog open={isOpen} onOpenChange={onClose}>
//         <DialogContent className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
//           <DialogHeader>
//             <DialogTitle className="text-2xl font-bold">
//               Project Details: {project.title}
//             </DialogTitle>
//             <DialogDescription>
//               View detailed information about this project.
//             </DialogDescription>
//           </DialogHeader>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Basic Information</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-2">
//                   <p>
//                     <span className="font-semibold">Status:</span>{" "}
//                     <Badge className={statusColors[project.status]}>{project.status}</Badge>
//                   </p>
//                   <p><span className="font-semibold">Description:</span> {project.description || "N/A"}</p>
//                   <p>
//                     <span className="font-semibold">Delivery Date:</span>{" "}
//                     {project.deliveryDate ? new Date(project.deliveryDate).toLocaleDateString() : "N/A"}
//                   </p>
//                   <p><span className="font-semibold">Created At:</span> {new Date(project.createdAt).toLocaleString()}</p>
//                   <p><span className="font-semibold">Updated At:</span> {new Date(project.updatedAt).toLocaleString()}</p>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Requirements</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-2">
//                   <p><span className="font-semibold">Material:</span> {project.requirements.material || "N/A"}</p>
//                   <p><span className="font-semibold">Process:</span> {project.requirements.process || "N/A"}</p>
//                   <p><span className="font-semibold">Quantity:</span> {project.requirements.quantity || "N/A"}</p>
//                   <p><span className="font-semibold">Tolerance:</span> {project.requirements.tolerance || "N/A"}</p>
//                   <p><span className="font-semibold">Finish:</span> {project.requirements.finish || "N/A"}</p>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Supplier Information</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-2">
//                   <p><span className="font-semibold">Company Name:</span> {project.supplier?.companyName || "N/A"}</p>
//                   <p><span className="font-semibold">Address:</span> {project.supplier?.companyAddress || "N/A"}</p>
//                   <p><span className="font-semibold">Tax ID:</span> {project.supplier?.taxId || "N/A"}</p>
//                   <p>
//                     <span className="font-semibold">Capabilities:</span>{" "}
//                     {project.supplier?.manufacturingCapabilities?.join(", ") || "N/A"}
//                   </p>
//                   <p>
//                     <span className="font-semibold">Certifications:</span>{" "}
//                     {project.supplier?.certifications?.join(", ") || "N/A"}
//                   </p>
//                   <p><span className="font-semibold">Rating:</span> {project.supplier?.rating || "N/A"}</p>
//                   <p><span className="font-semibold">Total Projects:</span> {project.supplier?.totalProjects || "N/A"}</p>
//                   <p><span className="font-semibold">Active Projects:</span> {project.supplier?.activeProjects || "N/A"}</p>
//                   <p><span className="font-semibold">Lead Time:</span> {project.supplier?.leadTime || "N/A"} days</p>
//                   <p>
//                     <span className="font-semibold">Minimum Order Value:</span>{" "}
//                     ${project.supplier?.minimumOrderValue?.toLocaleString() || "N/A"}
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//             {project.files && project.files.length > 0 && (
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Attachments</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-2">
//                     {project.files.map((file, index) => (
//                       <div key={index} className="flex items-center gap-2">
//                         <span>{file.name}</span>
//                         <Button
//                           variant="outline"
//                           size="sm"
//                           as="a"
//                           href={file.downloadUrl}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <Download className="h-4 w-4" />
//                         </Button>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             )}
//           </div>
//         </DialogContent>
//       </Dialog>
//     );
//   };

//   // Edit Project Modal
//   const EditProjectModal = ({ project, isOpen, onClose }) => {
//     if (!project) return null;

//     return (
//       <Dialog open={isOpen} onOpenChange={onClose}>
//         <DialogContent className="sm:max-w-[425px]" onClick={(e) => e.stopPropagation()}>
//           <DialogHeader>
//             <DialogTitle>Edit Project: {project.title}</DialogTitle>
//             <DialogDescription>
//               Modify the project details below.
//             </DialogDescription>
//           </DialogHeader>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onEditSubmit)} className="space-y-4">
//               <FormField
//                 control={form.control}
//                 name="title"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Title</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Enter project title" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="description"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Description</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Enter description" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="deliveryDate"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Delivery Date</FormLabel>
//                     <FormControl>
//                       <Input type="date" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <Button type="submit" disabled={updateProjectMutation.isPending}>
//                 {updateProjectMutation.isPending ? (
//                   <Loader2 className="h-4 w-4 animate-spin" />
//                 ) : (
//                   "Save Changes"
//                 )}
//               </Button>
//             </form>
//           </Form>
//         </DialogContent>
//       </Dialog>
//     );
//   };

//   return (
//     <Card className="container mx-auto my-6 p-4">
//       <CardHeader>
//         <CardTitle>Project Management</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Title</TableHead>
//               <TableHead>Description</TableHead>
//               <TableHead>Status</TableHead>
//               <TableHead>Delivery Date</TableHead>
//               <TableHead>Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {projects?.map((project) => (
//               <TableRow key={project._id}>
//                 <TableCell>{project.title}</TableCell>
//                 <TableCell>
//                   {project.description?.length > 50
//                     ? `${project.description.substring(0, 50)}...`
//                     : project.description || "N/A"}
//                 </TableCell>
//                 <TableCell>
//                   <Badge className={statusColors[project.status]}>{project.status}</Badge>
//                 </TableCell>
//                 <TableCell>
//                   {project.deliveryDate
//                     ? new Date(project.deliveryDate).toLocaleDateString()
//                     : "N/A"}
//                 </TableCell>
//                 <TableCell className="flex space-x-2">
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     onClick={() => handleViewDetails(project)}
//                   >
//                     <Eye className="h-4 w-4" />
//                   </Button>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     onClick={() => handleEditProject(project)}
//                   >
//                     <Pencil className="h-4 w-4" />
//                   </Button>
//                   <Button
//                     variant="destructive"
//                     size="sm"
//                     onClick={() => deleteProjectMutation.mutate(project._id)}
//                   >
//                     <Trash2 className="h-4 w-4" />
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//         <ProjectDetailsModal
//           project={selectedProject}
//           isOpen={showDetailsModal}
//           onClose={handleCloseDetailsModal}
//         />
//         <EditProjectModal
//           project={selectedProject}
//           isOpen={showEditModal}
//           onClose={handleCloseEditModal}
//         />
//       </CardContent>
//     </Card>
//   );
// };

// export default ProjectsListTable;
//======================================================
import React, { useState, useCallback, memo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Eye, Trash2, Pencil, Download, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axiosInstance from "@/api/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/components/ui/use-toast";

// Form schema for editing a project
const editProjectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  deliveryDate: z.string().optional(),
});

// Status colors mapping
const statusColors = {
  AVAILABLE: "bg-blue-100 text-blue-700",
  IN_PRODUCTION: "bg-orange-100 text-orange-700",
  SHIPPED: "bg-teal-100 text-teal-700",
  DELIVERED: "bg-green-100 text-green-700",
  CANCELLED: "bg-red-100 text-red-700",
};

// Memoized Project Details Modal Component
// eslint-disable-next-line react/display-name
const ProjectDetailsModal = memo(({ project, isOpen, onClose }) => {
  if (!project) return null;

  const handleContentClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={onClose} modal={true}>
      <DialogContent className="max-w-4xl" onClick={handleContentClick}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Project Details: {project.title}
          </DialogTitle>
          <DialogDescription>
            View detailed information about this project.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Status:</span>{" "}
                  <Badge className={statusColors[project.status]}>{project.status}</Badge>
                </p>
                <p><span className="font-semibold">Description:</span> {project.description || "N/A"}</p>
                <p>
                  <span className="font-semibold">Delivery Date:</span>{" "}
                  {project.deliveryDate ? new Date(project.deliveryDate).toLocaleDateString() : "N/A"}
                </p>
                <p><span className="font-semibold">Created At:</span> {new Date(project.createdAt).toLocaleString()}</p>
                <p><span className="font-semibold">Updated At:</span> {new Date(project.updatedAt).toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><span className="font-semibold">Material:</span> {project.requirements?.material || "N/A"}</p>
                <p><span className="font-semibold">Process:</span> {project.requirements?.process || "N/A"}</p>
                <p><span className="font-semibold">Quantity:</span> {project.requirements?.quantity || "N/A"}</p>
                <p><span className="font-semibold">Tolerance:</span> {project.requirements?.tolerance || "N/A"}</p>
                <p><span className="font-semibold">Finish:</span> {project.requirements?.finish || "N/A"}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Supplier Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><span className="font-semibold">Company Name:</span> {project.supplier?.companyName || "N/A"}</p>
                <p><span className="font-semibold">Address:</span> {project.supplier?.companyAddress || "N/A"}</p>
                <p><span className="font-semibold">Tax ID:</span> {project.supplier?.taxId || "N/A"}</p>
                <p>
                  <span className="font-semibold">Capabilities:</span>{" "}
                  {project.supplier?.manufacturingCapabilities?.join(", ") || "N/A"}
                </p>
                <p>
                  <span className="font-semibold">Certifications:</span>{" "}
                  {project.supplier?.certifications?.join(", ") || "N/A"}
                </p>
              </div>
            </CardContent>
          </Card>
          {project.files && project.files.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Attachments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {project.files.map((file, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span>{file.name}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        as="a"
                        href={file.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
});

// Memoized Edit Project Modal Component
// eslint-disable-next-line react/display-name
const EditProjectModal = memo(({ project, isOpen, onClose, form, onEditSubmit, updateProjectMutation }) => {
  if (!project) return null;

  const handleContentClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={onClose} modal={true}>
      <DialogContent className="sm:max-w-[425px]" onClick={handleContentClick}>
        <DialogHeader>
          <DialogTitle>Edit Project: {project.title}</DialogTitle>
          <DialogDescription>
            Modify the project details below.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onEditSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter project title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deliveryDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={updateProjectMutation.isPending}>
              {updateProjectMutation.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Save Changes"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
});

// Main ProjectsListTable Component
const ProjectsListTable = () => {
  const { token } = useAuth();
  const queryClient = useQueryClient();
  const [modalState, setModalState] = useState({
    detailsOpen: false,
    editOpen: false,
    selectedProject: null
  });

  // Form setup
  const form = useForm({
    resolver: zodResolver(editProjectSchema),
    defaultValues: {
      title: "",
      description: "",
      deliveryDate: "",
    },
  });

  // Query and Mutations
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await axiosInstance.get("/projects", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
    enabled: !!token,
  });

  const updateProjectMutation = useMutation({
    mutationFn: (data) =>
      axiosInstance.put(`/projects/${modalState.selectedProject._id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
      setModalState(prev => ({ ...prev, editOpen: false, selectedProject: null }));
      toast({ title: "Success", description: "Project updated successfully" });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.response?.data?.error || "Failed to update project",
        variant: "destructive",
      });
    },
  });

  const deleteProjectMutation = useMutation({
    mutationFn: (projectId) =>
      axiosInstance.delete(`/projects/${projectId}`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
      toast({ title: "Success", description: "Project deleted successfully" });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.response?.data?.error || "Failed to delete project",
        variant: "destructive",
      });
    },
  });

  // Event Handlers
  const handleViewDetails = useCallback((project) => {
    setModalState(prev => ({
      ...prev,
      detailsOpen: true,
      selectedProject: project
    }));
  }, []);

  const handleEditProject = useCallback((project) => {
    setModalState(prev => ({
      ...prev,
      editOpen: true,
      selectedProject: project
    }));
    form.reset({
      title: project.title,
      description: project.description || "",
      deliveryDate: project.deliveryDate
        ? new Date(project.deliveryDate).toISOString().split("T")[0]
        : "",
    });
  }, [form]);

  const handleCloseDetailsModal = useCallback(() => {
    setModalState(prev => ({
      ...prev,
      detailsOpen: false,
      selectedProject: null
    }));
  }, []);

  const handleCloseEditModal = useCallback(() => {
    setModalState(prev => ({
      ...prev,
      editOpen: false,
      selectedProject: null
    }));
    form.reset();
  }, [form]);

  const onEditSubmit = useCallback((data) => {
    updateProjectMutation.mutate(data);
  }, [updateProjectMutation]);

  // Loading State
  if (isLoading) {
    return (
      <Card className="container mx-auto my-6 p-4">
        <CardHeader>
          <CardTitle>Project Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Delivery Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 3 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell><Skeleton className="w-32 h-6" /></TableCell>
                  <TableCell><Skeleton className="w-48 h-6" /></TableCell>
                  <TableCell><Skeleton className="w-24 h-6" /></TableCell>
                  <TableCell><Skeleton className="w-24 h-6" /></TableCell>
                  <TableCell><Skeleton className="w-24 h-6" /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  }

  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <Card className="container mx-auto my-6 p-4">
      <CardHeader>
        <CardTitle>Project Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Delivery Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects?.map((project) => (
              <TableRow key={project._id}>
                <TableCell>{project.title}</TableCell>
                <TableCell>
                  {project.description?.length > 50
                    ? `${project.description.substring(0, 50)}...`
                    : project.description || "N/A"}
                </TableCell>
                <TableCell>
                  <Badge className={statusColors[project.status]}>{project.status}</Badge>
                </TableCell>
                <TableCell>
                  {project.deliveryDate
                    ? new Date(project.deliveryDate).toLocaleDateString()
                    : "N/A"}
                </TableCell>
                <TableCell className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleViewDetails(project)}
                  >
                    <Eye className="h-4 w-4" />
                    </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditProject(project)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteProjectMutation.mutate(project._id)}
                    disabled={deleteProjectMutation.isPending}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <ProjectDetailsModal
          project={modalState.selectedProject}
          isOpen={modalState.detailsOpen}
          onClose={handleCloseDetailsModal}
        />

        <EditProjectModal
          project={modalState.selectedProject}
          isOpen={modalState.editOpen}
          onClose={handleCloseEditModal}
          form={form}
          onEditSubmit={onEditSubmit}
          updateProjectMutation={updateProjectMutation}
        />
      </CardContent>
    </Card>
  );
};

export default ProjectsListTable;