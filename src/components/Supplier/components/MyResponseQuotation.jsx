import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MyResponseQuotation = ({ quotations }) => {
  return (
    <div>
      {quotations.map(quotation => (
        <Card key={quotation._id} className="mb-4">
          <CardHeader>
            <CardTitle>{quotation.project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Status:</strong> <Badge variant="outline">{quotation.status}</Badge></p>
            <p><strong>Your Price:</strong> {quotation.unitPrice}</p>
            <p><strong>Lead Time:</strong> {quotation.leadTime} days</p>
            <p><strong>Total Price:</strong> {quotation.totalPrice}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MyResponseQuotation;