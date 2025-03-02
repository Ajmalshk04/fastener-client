import React, { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axiosInstance from "@/api/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/components/ui/use-toast";

// Status Badge Component
const UpdateStatus = ({ status }) => {
  const colors = {
    PENDING: "bg-yellow-200 text-yellow-700",
    IN_PROGRESS: "bg-blue-200 text-blue-700",
    COMPLETED: "bg-green-200 text-green-700",
  };
  return <Badge className={colors[status] || "bg-gray-200 text-gray-700"}>{status}</Badge>;
};

// Form schema
const updateSchema = z.object({
  projectId: z.string().min(1, "Project ID is required"),
  supplierId: z.string().min(1, "Supplier ID is required"),
  description: z.string().min(1, "Description is required"),
  status: z.enum(["PENDING", "IN_PROGRESS", "COMPLETED"]),
  completionPercentage: z.number().min(0).max(100, "Must be between 0 and 100"),
});

const editSchema = z.object({
  description: z.string().min(1, "Description is required"),
  status: z.enum(["PENDING", "IN_PROGRESS", "COMPLETED"]),
  completionPercentage: z.number().min(0).max(100, "Must be between 0 and 100"),
});

const AdminProjectUpdates = () => {
  const { token, isAuthenticated } = useAuth();
  const [selectedUpdate, setSelectedUpdate] = useState(null);
  const queryClient = useQueryClient();

  // Fetch all project updates
  const { data: projectUpdates, isLoading } = useQuery({
    queryKey: ["projectUpdates"],
    queryFn: async () => {
      const response = await axiosInstance.get("/admin/project-updates", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response;
    },
    enabled: isAuthenticated && !!token,
  });

  // Form setup for create
  const createForm = useForm({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      projectId: "",
      supplierId: "",
      description: "",
      status: "PENDING",
      completionPercentage: 0,
    },
  });

  // Form setup for edit
  const editForm = useForm({
    resolver: zodResolver(editSchema),
    defaultValues: {
      description: "",
      status: "PENDING",
      completionPercentage: 0,
    },
  });

  // Set form values when selectedUpdate changes
  useEffect(() => {
    if (selectedUpdate) {
      editForm.reset({
        description: selectedUpdate.description,
        status: selectedUpdate.status,
        completionPercentage: selectedUpdate.completionPercentage,
      });
    }
  }, [selectedUpdate, editForm]);

  // Create mutation
  const createMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.post("/admin/project-updates", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["projectUpdates"]);
      toast({ title: "Success", description: "Project update created" });
    },
    onError: (error) => {
      toast({ title: "Error", description: error.response?.data?.error, variant: "destructive" });
    },
  });

  // Update mutation
  const updateMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.put(`/admin/project-updates/${selectedUpdate._id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["projectUpdates"]);
      setSelectedUpdate(null);
      toast({ title: "Success", description: "Project update modified" });
    },
    onError: (error) => {
      toast({ title: "Error", description: error.response?.data?.error, variant: "destructive" });
    },
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const response = await axiosInstance.delete(`/admin/project-updates/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["projectUpdates"]);
      toast({ title: "Success", description: "Project update deleted" });
    },
    onError: (error) => {
      toast({ title: "Error", description: error.response?.data?.error, variant: "destructive" });
    },
  });

  const onCreateSubmit = (data) => {
    createMutation.mutate(data);
  };

  const onUpdateSubmit = (data) => {
    updateMutation.mutate(data);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center p-4">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>Project Updates Management</CardTitle>
          <CardDescription>Manage all project updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Create New Update</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Create Project Update</DialogTitle>
                  <DialogDescription>Fill in details to create a new project update.</DialogDescription>
                </DialogHeader>
                <Form {...createForm}>
                  <form onSubmit={createForm.handleSubmit(onCreateSubmit)} className="space-y-4">
                    <FormField
                      control={createForm.control}
                      name="projectId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project ID</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter project ID" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={createForm.control}
                      name="supplierId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Supplier ID</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter supplier ID" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={createForm.control}
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
                      control={createForm.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Status</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="PENDING">Pending</SelectItem>
                              <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                              <SelectItem value="COMPLETED">Completed</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={createForm.control}
                      name="completionPercentage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Completion Percentage</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min="0"
                              max="100"
                              placeholder="Enter percentage (0-100)"
                              {...field}
                              onChange={(e) => field.onChange(e.target.valueAsNumber)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={createMutation.isPending}>
                      {createMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Create"}
                    </Button>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Project</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Completion %</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projectUpdates?.data?.map((update) => (
                <TableRow key={update._id}>
                  <TableCell>{update.project?.title || "N/A"}</TableCell>
                  <TableCell>{update.supplier?.companyName || "N/A"}</TableCell>
                  <TableCell>
                    <UpdateStatus status={update.status} />
                  </TableCell>
                  <TableCell>{update.completionPercentage}%</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Dialog open={selectedUpdate?._id === update._id} onOpenChange={(open) => !open && setSelectedUpdate(null)}>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedUpdate(update)}>
                            Edit
                          </Button>
                        </DialogTrigger>
                        {selectedUpdate && selectedUpdate._id === update._id && (
                          <DialogContent className="sm:max-w-[600px]">
                            <DialogHeader>
                              <DialogTitle>Edit Project Update</DialogTitle>
                              <DialogDescription>Modify the project update details.</DialogDescription>
                            </DialogHeader>
                            <Form {...editForm}>
                              <form onSubmit={editForm.handleSubmit(onUpdateSubmit)} className="space-y-4">
                                <FormField
                                  control={editForm.control}
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
                                  control={editForm.control}
                                  name="status"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Status</FormLabel>
                                      <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                          <SelectTrigger>
                                            <SelectValue placeholder="Select status" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          <SelectItem value="PENDING">Pending</SelectItem>
                                          <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                                          <SelectItem value="COMPLETED">Completed</SelectItem>
                                        </SelectContent>
                                      </Select>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={editForm.control}
                                  name="completionPercentage"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Completion Percentage</FormLabel>
                                      <FormControl>
                                        <Input
                                          type="number"
                                          min="0"
                                          max="100"
                                          placeholder="Enter percentage (0-100)"
                                          {...field}
                                          onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <Button type="submit" disabled={updateMutation.isPending}>
                                  {updateMutation.isPending ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                  ) : (
                                    "Update"
                                  )}
                                </Button>
                              </form>
                            </Form>
                          </DialogContent>
                        )}
                      </Dialog>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteMutation.mutate(update._id)}
                        disabled={deleteMutation.isPending}
                      >
                        {deleteMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Delete"}
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminProjectUpdates;