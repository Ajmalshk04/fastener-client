import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import axiosInstance from "@/api/client";

const SupplierListTable = () => {
  const { token } = useAuth();

  const fetchSuppliers = async () => {
    const response = await axiosInstance.get("/admin/suppliers", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  };

  const {
    data: suppliers,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["suppliers"],
    queryFn: fetchSuppliers,
  });

  const statusColors = {
    active: "text-green-600 bg-green-50 border border-green-600",
    inactive: "text-white bg-gray-500",
    pending: "text-black bg-yellow-400",
  };

  if (isLoading) {
    return (
      <div className="container mx-auto my-6 p-4">
        <Skeleton className="h-8 w-40 mb-4" />
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="py-3 px-4 text-left">Name</TableHead>
              <TableHead className="py-3 px-4 text-left">
                Contact Person
              </TableHead>
              <TableHead className="py-3 px-4 text-left">Phone</TableHead>
              <TableHead className="py-3 px-4 text-left">Email</TableHead>
              <TableHead className="py-3 px-4 text-left">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 4 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell className="py-3 px-4">
                  <Skeleton className="h-6 w-32" />
                </TableCell>
                <TableCell className="py-3 px-4">
                  <Skeleton className="h-6 w-32" />
                </TableCell>
                <TableCell className="py-3 px-4">
                  <Skeleton className="h-6 w-32" />
                </TableCell>
                <TableCell className="py-3 px-4">
                  <Skeleton className="h-6 w-32" />
                </TableCell>
                <TableCell className="py-3 px-4">
                  <Skeleton className="h-6 w-20" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto my-6 p-4">
      <h1 className="text-2xl font-semibold mb-4">Supplier List</h1>
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="py-3 px-4 text-left">Name</TableHead>
            <TableHead className="py-3 px-4 text-left">
              Contact Person
            </TableHead>
            <TableHead className="py-3 px-4 text-left">Phone</TableHead>
            <TableHead className="py-3 px-4 text-left">Email</TableHead>
            <TableHead className="py-3 px-4 text-left">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {suppliers.map((supplier) => (
            <TableRow key={supplier._id}>
              <TableCell className="py-3 px-4">{supplier.company}</TableCell>
              <TableCell className="py-3 px-4">
                {supplier.firstName} {supplier.lastName}
              </TableCell>
              <TableCell className="py-3 px-4">
                {supplier.phoneNumber}
              </TableCell>
              <TableCell className="py-3 px-4">{supplier.email}</TableCell>
              <TableCell className="py-3 px-4">
                <Badge
                  className={
                    supplier.isVerified
                      ? statusColors["active"]
                      : statusColors["pending"]
                  }
                >
                  {supplier.isVerified ? "Verified" : "Pending"}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SupplierListTable;
