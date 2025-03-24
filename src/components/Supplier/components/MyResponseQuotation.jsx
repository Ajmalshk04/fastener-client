import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const MyResponseQuotation = ({ quotations }) => {
  if (!quotations || quotations.length === 0) {
    return (
      <div className="text-center py-10 text-muted-foreground">
        No quotation responses found.
      </div>
    );
  }

  const getStatusVariant = (status) => {
    switch (status.toLowerCase()) {
      case "accepted":
        return "bg-green-500/10 text-green-700";
      case "rejected":
        return "bg-red-500/10 text-red-700";
      case "pending":
        return "bg-yellow-500/10 text-yellow-700";
      default:
        return "bg-gray-500/10 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      {quotations.map((quotation) => (
        <Card
          key={quotation._id}
          className="shadow-sm border-0 hover:shadow-md transition-shadow"
        >
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">
                {quotation.project.title}
              </CardTitle>
              <Badge className={getStatusVariant(quotation.status)}>
                {quotation.status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Response #{quotation._id.slice(-6)}
            </p>
          </CardHeader>
          <CardContent className="pb-4 text-sm space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <span className="font-medium text-muted-foreground">
                  Your Unit Price:
                </span>{" "}
                ${quotation.unitPrice?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || "N/A"}
              </div>
              <div>
                <span className="font-medium text-muted-foreground">
                  Quantity:
                </span>{" "}
                {quotation.quantity || "N/A"}
              </div>
              <div>
                <span className="font-medium text-muted-foreground">
                  Taxes:
                </span>{" "}
                ${quotation.taxes?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || "0.00"}
              </div>
              <div>
                <span className="font-medium text-muted-foreground">
                  Shipping Cost:
                </span>{" "}
                ${quotation.shippingCost?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || "0.00"}
              </div>
            </div>
            <Separator />
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <span className="font-medium text-muted-foreground">
                  Lead Time:
                </span>{" "}
                {quotation.leadTime} days
              </div>
              <div>
                <span className="font-medium text-muted-foreground">
                  Total Price:
                </span>{" "}
                ${quotation.totalPrice?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || "N/A"}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MyResponseQuotation;