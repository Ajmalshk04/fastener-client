import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { useParams, useNavigate } from "react-router-dom";

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

const updateSchema = z.object({
  status: z.enum(["PENDING", "IN_PROGRESS", "COMPLETED"]),
  description: z.string().min(1, "Description is required"),
  completionPercentage: z.number().min(0).max(100, "Must be between 0 and 100"),
});

const MyOrderDetail = () => {
  const { token, isAuthenticated } = useAuth();
  const { orderId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: order, isLoading } = useQuery({
    queryKey: ["order", orderId],
    queryFn: async () => {
      const response = await axiosInstance.get(`/suppliers/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
    enabled: isAuthenticated && !!token && !!orderId,
  });

  const form = useForm({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      status: "IN_PROGRESS",
      description: "",
      completionPercentage: 0,
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.post(
        "/suppliers/update-project",
        { projectId: order?.project?._id, ...data },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["supplierOrders"]);
      queryClient.invalidateQueries(["order", orderId]);
      toast({
        title: "Success",
        description: "Project status updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.response?.data?.error || "Failed to update status",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data) => {
    updateStatusMutation.mutate({
      status: data.status,
      description: data.description,
      completionPercentage: Number(data.completionPercentage),
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center p-4">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  if (!order) {
    return <div className="container mx-auto py-6">Order not found</div>;
  }

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>{order.project?.title} - Order Details</CardTitle>
              <CardDescription>View and update order details</CardDescription>
            </div>
            <Button variant="outline" onClick={() => navigate("/supplier/dashboard/my-orders")}>
              Back to Orders
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-col gap-4">
              <span className="font-semibold">Order ID:</span>
              <span>{order._id}</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-semibold">Project Description:</span>
              <span>{order.project?.description || "N/A"}</span>
            </div>
            <div className="grid grid-cols-3">
            <div className="flex flex-col gap-4">
              <span className="font-semibold">Unit Price:</span>
              <span>${order.unitPrice?.toLocaleString() || "N/A"}</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-semibold">Quantity:</span>
              <span>{order.quantity || "N/A"}</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-semibold">Subtotal:</span>
              <span>${order.subtotal?.toLocaleString() || "N/A"}</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-semibold">Taxes:</span>
              <span>${order.taxes?.toLocaleString() || "N/A"}</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-semibold">Shipping Cost:</span>
              <span>${order.shippingCost?.toLocaleString() || "N/A"}</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-semibold">Total Price:</span>
              <span>${order.totalPrice?.toLocaleString() || "N/A"}</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-semibold">Currency:</span>
              <span>{order.currency || "N/A"}</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-semibold">Lead Time:</span>
              <span>{order.leadTime || "N/A"} days</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-semibold">Valid Until:</span>
              <span>
                {new Date(order.validUntil).toLocaleDateString() || "N/A"}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-semibold">Created At:</span>
              <span>{new Date(order.createdAt).toLocaleString() || "N/A"}</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-semibold">Updated At:</span>
              <span>{new Date(order.updatedAt).toLocaleString() || "N/A"}</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-semibold">Project Status:</span>
              <OrderStatus status={order.project?.status} />
            </div>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="PENDING">Pending</SelectItem>
                        <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                        {/* <SelectItem value="COMPLETED">Completed</SelectItem> */}
                      </SelectContent>
                    </Select>
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
                      <Input
                        placeholder="Enter update description"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
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
              <Button type="submit" disabled={updateStatusMutation.isPending}>
                {updateStatusMutation.isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Update Status"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyOrderDetail;