import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import axiosInstance from '@/api/client';
import { useAuth } from '@/hooks/useAuth';

const QuotationStatus = ({ status }) => {
  const colors = {
    PENDING: "bg-yellow-200 text-yellow-700",
    ACCEPTED: "bg-green-200 text-green-700",
    REJECTED: "bg-red-200 text-red-700",
  };

  return (
    <Badge className={colors[status]}>
      {status}
    </Badge>
  );
};

const QuotationsList = () => {
  const { token, isAuthenticated } = useAuth();
  const queryClient = useQueryClient();
console.log("TOken",token);
console.log("isAth",isAuthenticated);

  const { data: quotations, isLoading } = useQuery({
    queryKey: ['quotations'],
    queryFn: async () => {
      const response = await axiosInstance.get('/quotations', {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response;
    },
    enabled: isAuthenticated && !!token,
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }) => {
      const response = await axiosInstance.put(
        `/quotations/${id}`, 
        { status },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['quotations']);
      toast({
        title: "Success",
        description: "Quotation status updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to update status",
        variant: "destructive",
      });
    },
  });

  if (isLoading) {
    return <div className="flex justify-center p-4"><Loader2 className="h-6 w-6 animate-spin" /></div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quotation Management</CardTitle>
        <CardDescription>Review and manage supplier quotations</CardDescription>
      </CardHeader>
      <CardContent>
      <Table>
  <TableHeader>
    <TableRow>
      <TableHead>Project</TableHead>
      <TableHead>Supplier</TableHead>
      <TableHead>Price</TableHead>
      <TableHead>Lead Time</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {quotations?.data?.map((quotation) => (
      <TableRow key={quotation._id}>
        <TableCell>{quotation.project?.title || "N/A"}</TableCell>
        <TableCell>{quotation.supplier?.companyName || "N/A"}</TableCell>
        <TableCell>${quotation.totalPrice?.toLocaleString() || "N/A"}</TableCell>
        <TableCell>{quotation.leadTime || "N/A"} days</TableCell>
        <TableCell>
          <QuotationStatus status={quotation.status} />
        </TableCell>
        <TableCell>
          <div className="flex space-x-2">
            <Button
              size="sm"
              onClick={() =>
                updateStatusMutation.mutate({
                  id: quotation._id,
                  status: "ACCEPTED",
                })
              }
              disabled={
                quotation.status !== "PENDING" || updateStatusMutation.isPending
              }
            >
              {updateStatusMutation.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Accept"
              )}
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={() =>
                updateStatusMutation.mutate({
                  id: quotation._id,
                  status: "REJECTED",
                })
              }
              disabled={
                quotation.status !== "PENDING" || updateStatusMutation.isPending
              }
            >
              {updateStatusMutation.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Reject"
              )}
            </Button>
          </div>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
      </CardContent>
    </Card>
  );
};

export default function AdminQuotationManagement() {

  return (
    <div className="container mx-auto py-6">
      <QuotationsList />
    </div>
  );
}