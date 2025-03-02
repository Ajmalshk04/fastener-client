// import React, { useState } from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
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
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Loader2 } from "lucide-react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import axiosInstance from "@/api/client";
// import { useAuth } from "@/hooks/useAuth";
// import { toast } from "@/components/ui/use-toast";

// const OrderStatus = ({ status }) => {
//   const colors = {
//     IN_PRODUCTION: "bg-blue-200 text-blue-700",
//     SHIPPED: "bg-yellow-200 text-yellow-700",
//     DELIVERED: "bg-green-200 text-green-700",
//     CANCELLED: "bg-red-200 text-red-700",
//   };
//   return <Badge className={colors[status] || "bg-gray-200 text-gray-700"}>{status}</Badge>;
// };

// // Form schema for validation
// const updateSchema = z.object({
//   status: z.enum(["PENDING", "IN_PROGRESS", "COMPLETED"]),
//   description: z.string().min(1, "Description is required"),
//   completionPercentage: z.number().min(0).max(100, "Must be between 0 and 100"),
// });

// const SupplierOrders = () => {
//   const { token, isAuthenticated } = useAuth();
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const queryClient = useQueryClient();

//   const { data: orders, isLoading } = useQuery({
//     queryKey: ["supplierOrders"],
//     queryFn: async () => {
//       const response = await axiosInstance.get("/suppliers/orders", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return response;
//     },
//     enabled: isAuthenticated && !!token,
//   });

//   const form = useForm({
//     resolver: zodResolver(updateSchema),
//     defaultValues: {
//       status: "IN_PROGRESS",
//       description: "",
//       completionPercentage: 0,
//     },
//   });

//   const updateStatusMutation = useMutation({
//     mutationFn: async (data) => {
//       const response = await axiosInstance.post(
//         "/suppliers/update-project",
//         { projectId: selectedOrder?.project?._id, ...data },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       return response.data;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(["supplierOrders"]);
//       setSelectedOrder(null); // Close modal
//       toast({
//         title: "Success",
//         description: "Project status updated successfully",
//       });
//     },
//     onError: (error) => {
//       toast({
//         title: "Error",
//         description: error.response?.data?.error || "Failed to update status",
//         variant: "destructive",
//       });
//     },
//   });

//   const onSubmit = (data) => {
//     updateStatusMutation.mutate({
//       status: data.status,
//       description: data.description,
//       completionPercentage: Number(data.completionPercentage),
//     });
//   };

//   if (isLoading) {
//     return (
//       <div className="flex justify-center p-4">
//         <Loader2 className="h-6 w-6 animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto py-6">
//       <Card>
//         <CardHeader>
//           <CardTitle>My Orders</CardTitle>
//           <CardDescription>View your accepted quotations and project statuses</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Project</TableHead>
//                 <TableHead>Total Price</TableHead>
//                 <TableHead>Lead Time</TableHead>
//                 <TableHead>Project Status</TableHead>
//                 <TableHead>Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {orders?.data?.map((order) => (
//                 <TableRow key={order._id}>
//                   <TableCell>{order.project?.title || "N/A"}</TableCell>
//                   <TableCell>${order.totalPrice?.toLocaleString() || "N/A"}</TableCell>
//                   <TableCell>{order.leadTime || "N/A"} days</TableCell>
//                   <TableCell>
//                     <OrderStatus status={order.project?.status} />
//                   </TableCell>
//                   <TableCell>
//                     <Dialog open={selectedOrder?._id === order._id} onOpenChange={(open) => !open && setSelectedOrder(null)}>
//                       <DialogTrigger asChild>
//                         <Button variant="outline" size="sm" onClick={() => setSelectedOrder(order)}>
//                           View Details
//                         </Button>
//                       </DialogTrigger>
//                       {selectedOrder && selectedOrder._id === order._id && (
//                         <DialogContent className="sm:max-w-5xl">
//                           <DialogHeader>
//                             <DialogTitle>{selectedOrder.project?.title} - Order Details</DialogTitle>
//                             <DialogDescription>
//                               View details and update the project status below.
//                             </DialogDescription>
//                           </DialogHeader>
                        
//                           <div className="grid grid-cols-2 gap-4 py-4">
//                             <div className="grid grid-cols-2 items-center gap-4">
//                               <span className="font-semibold">Order ID:</span>
//                               <span>{selectedOrder._id}</span>
//                             </div>
//                             <div className="grid grid-cols-2 items-center gap-4">
//                               <span className="font-semibold">
//                                 Project Description:
//                               </span>
//                               <span>
//                                 {selectedOrder.project?.description || "N/A"}
//                               </span>
//                             </div>
//                             <div className="grid grid-cols-2 items-center gap-4">
//                               <span className="font-semibold">Unit Price:</span>
//                               <span>
//                                 $
//                                 {selectedOrder.unitPrice?.toLocaleString() ||
//                                   "N/A"}
//                               </span>
//                             </div>
//                             <div className="grid grid-cols-2 items-center gap-4">
//                               <span className="font-semibold">Quantity:</span>
//                               <span>{selectedOrder.quantity || "N/A"}</span>
//                             </div>
//                             <div className="grid grid-cols-2 items-center gap-4">
//                               <span className="font-semibold">Subtotal:</span>
//                               <span>
//                                 $
//                                 {selectedOrder.subtotal?.toLocaleString() ||
//                                   "N/A"}
//                               </span>
//                             </div>
//                             <div className="grid grid-cols-2 items-center gap-4">
//                               <span className="font-semibold">Taxes:</span>
//                               <span>
//                                 $
//                                 {selectedOrder.taxes?.toLocaleString() || "N/A"}
//                               </span>
//                             </div>
//                             <div className="grid grid-cols-2 items-center gap-4">
//                               <span className="font-semibold">
//                                 Shipping Cost:
//                               </span>
//                               <span>
//                                 $
//                                 {selectedOrder.shippingCost?.toLocaleString() ||
//                                   "N/A"}
//                               </span>
//                             </div>
//                             <div className="grid grid-cols-2 items-center gap-4">
//                               <span className="font-semibold">
//                                 Total Price:
//                               </span>
//                               <span>
//                                 $
//                                 {selectedOrder.totalPrice?.toLocaleString() ||
//                                   "N/A"}
//                               </span>
//                             </div>
//                             <div className="grid grid-cols-2 items-center gap-4">
//                               <span className="font-semibold">Currency:</span>
//                               <span>{selectedOrder.currency || "N/A"}</span>
//                             </div>
//                             <div className="grid grid-cols-2 items-center gap-4">
//                               <span className="font-semibold">Lead Time:</span>
//                               <span>
//                                 {selectedOrder.leadTime || "N/A"} days
//                               </span>
//                             </div>
//                             <div className="grid grid-cols-2 items-center gap-4">
//                               <span className="font-semibold">
//                                 Valid Until:
//                               </span>
//                               <span>
//                                 {new Date(
//                                   selectedOrder.validUntil
//                                 ).toLocaleDateString() || "N/A"}
//                               </span>
//                             </div>
//                             <div className="grid grid-cols-2 items-center gap-4">
//                               <span className="font-semibold">Created At:</span>
//                               <span>
//                                 {new Date(
//                                   selectedOrder.createdAt
//                                 ).toLocaleString() || "N/A"}
//                               </span>
//                             </div>
//                             <div className="grid grid-cols-2 items-center gap-4">
//                               <span className="font-semibold">Updated At:</span>
//                               <span>
//                                 {new Date(
//                                   selectedOrder.updatedAt
//                                 ).toLocaleString() || "N/A"}
//                               </span>
//                             </div>
//                             <div className="grid grid-cols-2 items-center gap-4">
//                               <span className="font-semibold">
//                                 Project Status:
//                               </span>
//                               <OrderStatus
//                                 status={selectedOrder.project?.status}
//                               />
//                             </div>
//                           </div>
                         
//                           <Form {...form}>
//                             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//                               <FormField
//                                 control={form.control}
//                                 name="status"
//                                 render={({ field }) => (
//                                   <FormItem>
//                                     <FormLabel>Status</FormLabel>
//                                     <Select onValueChange={field.onChange} defaultValue={field.value}>
//                                       <FormControl>
//                                         <SelectTrigger>
//                                           <SelectValue placeholder="Select status" />
//                                         </SelectTrigger>
//                                       </FormControl>
//                                       <SelectContent>
//                                         <SelectItem value="PENDING">Pending</SelectItem>
//                                         <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
//                                         <SelectItem value="COMPLETED">Completed</SelectItem>
//                                       </SelectContent>
//                                     </Select>
//                                     <FormMessage />
//                                   </FormItem>
//                                 )}
//                               />
//                               <FormField
//                                 control={form.control}
//                                 name="description"
//                                 render={({ field }) => (
//                                   <FormItem>
//                                     <FormLabel>Description</FormLabel>
//                                     <FormControl>
//                                       <Input placeholder="Enter update description" {...field} />
//                                     </FormControl>
//                                     <FormMessage />
//                                   </FormItem>
//                                 )}
//                               />
//                               <FormField
//                                 control={form.control}
//                                 name="completionPercentage"
//                                 render={({ field }) => (
//                                   <FormItem>
//                                     <FormLabel>Completion Percentage</FormLabel>
//                                     <FormControl>
//                                       <Input
//                                         type="number"
//                                         min="0"
//                                         max="100"
//                                         placeholder="Enter percentage (0-100)"
//                                         {...field}
//                                         onChange={(e) => field.onChange(e.target.valueAsNumber)}
//                                       />
//                                     </FormControl>
//                                     <FormMessage />
//                                   </FormItem>
//                                 )}
//                               />
//                               <Button type="submit" disabled={updateStatusMutation.isPending}>
//                                 {updateStatusMutation.isPending ? (
//                                   <Loader2 className="h-4 w-4 animate-spin" />
//                                 ) : (
//                                   "Update Status"
//                                 )}
//                               </Button>
//                             </form>
//                           </Form>
//                         </DialogContent>
//                       )}
//                     </Dialog>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default SupplierOrders;
//======================================================
import React from "react";
import { useQuery } from "@tanstack/react-query";
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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import axiosInstance from "@/api/client";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const OrderStatus = ({ status }) => {
  const colors = {
    IN_PRODUCTION: "bg-blue-200 text-blue-700",
    SHIPPED: "bg-yellow-200 text-yellow-700",
    DELIVERED: "bg-green-200 text-green-700",
    CANCELLED: "bg-red-200 text-red-700",
  };
  return (
    <Badge className={colors[status] || "bg-gray-200 text-gray-700"}>
      {status}
    </Badge>
  );
};

const SupplierOrders = () => {
  const { token, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const { data: orders, isLoading } = useQuery({
    queryKey: ["supplierOrders"],
    queryFn: async () => {
      const response = await axiosInstance.get("/suppliers/orders", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response;
    },
    enabled: isAuthenticated && !!token,
  });

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
          <CardTitle>My Orders</CardTitle>
          <CardDescription>
            View your accepted quotations and project statuses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Project</TableHead>
                <TableHead>Total Price</TableHead>
                <TableHead>Lead Time</TableHead>
                <TableHead>Project Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders?.data?.map((order) => (
                <TableRow key={order._id}>
                  <TableCell>{order.project?.title || "N/A"}</TableCell>
                  <TableCell>
                    ${order.totalPrice?.toLocaleString() || "N/A"}
                  </TableCell>
                  <TableCell>{order.leadTime || "N/A"} days</TableCell>
                  <TableCell>
                    <OrderStatus status={order.project?.status} />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate(`/supplier/dashboard/my-orders/${order._id}`)}
                    >
                      View Details
                    </Button>
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

export default SupplierOrders;