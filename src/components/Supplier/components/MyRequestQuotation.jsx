import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MyRequestQuotation = ({ quotations }) => {
  return (
    <div>
      {quotations.map(quotation => (
        <Card key={quotation._id} className="mb-4">
          <CardHeader>
            <CardTitle>{quotation.project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Status:</strong> <Badge variant="outline">{quotation.status}</Badge></p>
            <p><strong>Lead Time:</strong> {quotation.leadTime} days</p>
            <p><strong>Valid Until:</strong> {new Date(quotation.validUntil).toLocaleDateString()}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MyRequestQuotation;