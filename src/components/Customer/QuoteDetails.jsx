import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";

const QuoteDetail = () => {
  const [orderNote, setOrderNote] = useState("");

  const handleOrderNoteChange = (e) => {
    setOrderNote(e.target.value);
  };

  const handleApplyPromoCode = () => {
    // Logic to apply promo code
    toast({
      title: "Promo code applied",
      description: "Your promo code has been successfully applied.",
    });
  };

  return (
    <div className="container mx-auto space-y-8 my-10">
      <h1 className="text-2xl font-bold">Quote E-1086574-1049765</h1>

      <div className="grid grid-cols-3 gap-4">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Add new parts to quote</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <Button variant="outline">Drag & Drop your designs</Button>
              <Button variant="outline">Select all</Button>
            </div>
            <Separator className="my-4" />
            <h2 className="text-xl font-semibold">3D Printing</h2>
            <div className="flex gap-6">
              <img
                src={`https://via.placeholder.com/300x300?text=Sheet+Metal+Stamping`}
                alt={"3D"}
                className="w-48 h-48 object-cover"
              />
              <div className="flex-1 flex-col space-y-2">
                <h3 className="font-medium">10. turbine.stl</h3>
                <p className="text-sm text-gray-500">
                  3D Printing FDM - Fused Deposition Modeling
                </p>
                <p className="text-sm text-gray-500">
                  Dimensions: 15.3mm × 8.8mm × 8.8mm
                </p>
                <p className="text-sm text-gray-500">Material: ABS</p>
                <p className="text-sm text-gray-500">
                  Layer thickness, µm: 200
                </p>
                <p className="text-sm text-gray-500">Finish: Standard</p>
                <p className="text-sm text-gray-500">
                  Threads and tapped holes: 0 locations
                </p>
                <p className="text-sm text-gray-500">Colour: White</p>
                <p className="text-sm text-gray-500">Grade: Standard</p>
                <p className="text-sm text-gray-500">
                  Infill: UltraLight (up to 20%)
                </p>
                <div className="flex space-x-2 items-center">
                  <Label>Qty:</Label>
                  <Input type="number" defaultValue={1} className="w-16" />
                </div>
                <Textarea
                  placeholder="Order Note"
                  value={orderNote}
                  onChange={handleOrderNoteChange}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-500">Lead time: 10 business days</p>
            <p className="text-sm text-gray-500">Certifications</p>
            <p className="text-sm text-gray-500">1 part (1 pc): 2,86 €</p>
            <p className="text-sm text-gray-500">
              Shipping cost (India): 71,20 €
            </p>

            <Separator className="my-4" />
            <p className="text-xl font-semibold">
              Order Value: 101,20 € excl. VAT
            </p>
            <p className="text-sm text-gray-500">You will earn 102 X-points</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuoteDetail;
