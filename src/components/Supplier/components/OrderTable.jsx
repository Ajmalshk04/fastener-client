import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const MyOrdersTable = () => {
  const orders = [
    {
      orderNumber: "O-1070458-164388",
      parts: "5 Parts / 10 Pieces",
      price: "500,00 €",
      leadTime: "20.08.2024",
      stage: "In Production",
      samplesState: "Approved",
    },
    {
      orderNumber: "O-1070458-164389",
      parts: "2 Parts / 5 Pieces",
      price: "250,00 €",
      leadTime: "22.08.2024",
      stage: "Pending",
      samplesState: "Not Submitted",
    },
  ];

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-xl font-bold mt-16 mb-6">My Orders</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order / Your own number</TableHead>
            <TableHead>Parts / Pieces</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Lead time</TableHead>
            <TableHead>Stage</TableHead>
            <TableHead>Samples State</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.orderNumber}>
              <TableCell>{order.orderNumber}</TableCell>
              <TableCell>{order.parts}</TableCell>
              <TableCell>{order.price}</TableCell>
              <TableCell>{order.leadTime}</TableCell>
              <TableCell>{order.stage}</TableCell>
              <TableCell>{order.samplesState}</TableCell>
              <TableCell>
                <Button className="text-blue-600" variant="outline">
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyOrdersTable;
