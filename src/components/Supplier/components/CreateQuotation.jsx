// import React, { useState } from "react";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter,
//   DialogClose,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import axiosInstance from "@/api/client";
// import { useAuth } from "@/hooks/useAuth";

// const CreateQuotation = ({ project, onClose }) => {
//   const [quotationData, setQuotationData] = useState({
//     unitPrice: '',
//     quantity: '',
//     taxes: '0',
//     shippingCost: '0',
//     leadTime: '',
//     validUntil: new Date().toISOString().split('T')[0],
//   });
//   const [error, setError] = useState('');
//   const { token } = useAuth();
//   const queryClient = useQueryClient();

//   const createQuotationMutation = useMutation({
//     mutationFn: async () => {
//       const { unitPrice, quantity, taxes, shippingCost, leadTime, validUntil } = quotationData;
//       const subtotal = unitPrice * quantity;
//       const totalPrice = subtotal + parseFloat(taxes) + parseFloat(shippingCost);

//       return axiosInstance.post(`/quotations/projects/${project._id}`, {
//         ...quotationData,
//         subtotal,
//         totalPrice,
//       }, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//     },
//     onSuccess: () => {
//       alert("Quotation created successfully.");
//       onClose();
//       queryClient.invalidateQueries(["projects", "supplierQuotations"]);
//     },
//     onError: (error) => {
//       if (error.response && error.response.data) {
//         setError(error.response.data.message);
//       } else {
//         setError("An error occurred while creating the quotation.");
//       }
//     },
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setQuotationData(prev => ({ ...prev, [name]: value }));
//     setError(''); // Clear any previous error on input change
//   };

//   const handleCreateQuotation = () => {
//     createQuotationMutation.mutate();
//   };

//   return (
//     <Dialog open={!!project} onOpenChange={onClose}>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Create Quotation for {project.title}</DialogTitle>
//           <DialogDescription>Please fill out the quotation details.</DialogDescription>
//         </DialogHeader>
//         <div className="space-y-4">
//           <div>
//           <Label htmlFor="unitPrice">Unit Price:</Label>
//             <Input 
//               type="number" 
//               id="unitPrice" 
//               name="unitPrice" 
//               value={quotationData.unitPrice} 
//               onChange={handleInputChange} 
//               placeholder="Enter unit price"
//               required
//             />
            
//           </div>
//           <div>
//             <Label htmlFor="quantity">Quantity:</Label>
//             <Input 
//               type="number" 
//               id="quantity" 
//               name="quantity" 
//               value={quotationData.quantity} 
//               onChange={handleInputChange} 
//               placeholder="Enter quantity"
//               required
//             />
//           </div>
//           <div>
//             <Label htmlFor="taxes">Taxes:</Label>
//             <Input 
//               type="number" 
//               id="taxes" 
//               name="taxes" 
//               value={quotationData.taxes} 
//               onChange={handleInputChange} 
//               placeholder="Enter taxes"
//             />
//           </div>
//           <div>
//             <Label htmlFor="shippingCost">Shipping Cost:</Label>
//             <Input 
//               type="number" 
//               id="shippingCost" 
//               name="shippingCost" 
//               value={quotationData.shippingCost} 
//               onChange={handleInputChange} 
//               placeholder="Enter shipping cost"
//             />
//           </div>
//           <div>
//             <Label htmlFor="leadTime">Lead Time (days):</Label>
//             <Input 
//               type="number" 
//               id="leadTime" 
//               name="leadTime" 
//               value={quotationData.leadTime} 
//               onChange={handleInputChange} 
//               placeholder="Enter lead time in days"
//               required
//             />
//           </div>
//           <div>
//             <Label htmlFor="validUntil">Valid Until:</Label>
//             <Input 
//               type="date" 
//               id="validUntil" 
//               name="validUntil" 
//               value={quotationData.validUntil} 
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           {error && <p className="text-red-500">{error}</p>}
//         </div>
//         <DialogFooter>
//           <DialogClose asChild>
//             <Button variant="secondary">Cancel</Button>
//           </DialogClose>
//           <Button 
//             onClick={handleCreateQuotation}
//             disabled={createQuotationMutation.isLoading}
//           >
//             {createQuotationMutation.isLoading ? "Creating..." : "Create Quotation"}
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default CreateQuotation;

//==============================================
// import React, { useState } from "react";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter,
//   DialogClose,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import axiosInstance from "@/api/client";
// import { useAuth } from "@/hooks/useAuth";

// const CreateQuotation = ({ project, onClose }) => {
//   const [quotationData, setQuotationData] = useState({
//     unitPrice: '',
//     quantity: '',
//     taxes: '0',
//     shippingCost: '0',
//     leadTime: '',
//     validUntil: new Date().toISOString().split('T')[0],
//   });
//   const { token } = useAuth();
//   const queryClient = useQueryClient();

//   const createQuotationMutation = useMutation({
//     mutationFn: async () => {
//       // Directly use the data from state without validation
//       const { unitPrice, quantity, taxes, shippingCost, leadTime, validUntil } = quotationData;
      
//       const subtotal = parseFloat(unitPrice) * parseInt(quantity);
//       const totalPrice = subtotal + parseFloat(taxes) + parseFloat(shippingCost);

//       return axiosInstance.post(`/quotations/projects/${project._id}`, {
//         unitPrice: parseFloat(unitPrice),
//         quantity: parseInt(quantity),
//         taxes: parseFloat(taxes),
//         shippingCost: parseFloat(shippingCost),
//         leadTime: parseInt(leadTime),
//         validUntil,
//         subtotal,
//         totalPrice
//       }, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//     },
//     onSuccess: () => {
//       alert("Quotation created successfully.");
//       onClose();
//       queryClient.invalidateQueries(["projects", "supplierQuotations"]);
//     },
//     onError: (error) => {
//       alert("Failed to create quotation: " + (error.response?.data?.error || error.message));
//     },
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setQuotationData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleCreateQuotation = () => {
//     createQuotationMutation.mutate();
//   };

//   return (
//     <Dialog open={!!project} onOpenChange={onClose}>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Create Quotation for {project.title}</DialogTitle>
//           <DialogDescription>Fill out the quotation details.</DialogDescription>
//         </DialogHeader>
//         <div className="space-y-4">
//           {Object.entries(quotationData).map(([key, value]) => (
//             <div key={key}>
//               <Label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</Label>
//               <Input 
//                 type={key === 'validUntil' ? 'date' : 'text'} 
//                 id={key} 
//                 name={key} 
//                 value={value} 
//                 onChange={handleInputChange} 
//                 placeholder={`Enter ${key}`}
//                 required
//               />
//             </div>
//           ))}
//         </div>
//         <DialogFooter>
//           <DialogClose asChild>
//             <Button variant="secondary">Cancel</Button>
//           </DialogClose>
//           <Button 
//             onClick={handleCreateQuotation}
//             disabled={createQuotationMutation.isLoading}
//           >
//             {createQuotationMutation.isLoading ? "Creating..." : "Create Quotation"}
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default CreateQuotation;

//================================================
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axiosInstance from "@/api/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/components/ui/use-toast";

const quotationSchema = z.object({
  unitPrice: z.string().min(1, "Unit price is required").transform(val => parseFloat(val) || 0),
  quantity: z.string().min(1, "Quantity is required").transform(val => parseInt(val) || 0),
  taxes: z.string().transform(val => parseFloat(val) || 0),
  shippingCost: z.string().transform(val => parseFloat(val) || 0),
  leadTime: z.string().min(1, "Lead time is required").transform(val => parseInt(val) || 0),
  validUntil: z.string().min(1, "Valid until date is required"),
});

const CreateQuotation = ({ project, onClose }) => {
  const { token } = useAuth();
  const queryClient = useQueryClient();

  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: zodResolver(quotationSchema),
    defaultValues: {
      unitPrice: "",
      quantity: "",
      taxes: "0",
      shippingCost: "0",
      leadTime: "",
      validUntil: new Date().toISOString().split("T")[0],
    },
  });

  const watchFields = watch();

  const createQuotationMutation = useMutation({
    mutationFn: async (data) => {
      const subtotal = data.unitPrice * data.quantity;
      const totalPrice = subtotal + data.taxes + data.shippingCost;

      const response = await axiosInstance.post(
        `/quotations/projects/${project._id}`,
        {
          ...data,
          subtotal,
          totalPrice,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Quotation created successfully",
      });
      onClose();
      queryClient.invalidateQueries(["projects"]);
      queryClient.invalidateQueries(["quotations"]);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.response?.data?.error || "Failed to create quotation",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data) => {
    createQuotationMutation.mutate(data);
  };

  // Ensure numbers are valid before calculations
  const unitPrice = parseFloat(watchFields.unitPrice) || 0;
  const quantity = parseInt(watchFields.quantity) || 0;
  const taxes = parseFloat(watchFields.taxes) || 0;
  const shippingCost = parseFloat(watchFields.shippingCost) || 0;

  const subtotal = unitPrice * quantity;
  const totalPrice = subtotal + taxes + shippingCost;

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create Quotation</DialogTitle>
          <DialogDescription>
            For project: <span className="font-medium">{project.title}</span>
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="unitPrice">Unit Price ($)</Label>
              <Input
                id="unitPrice"
                type="number"
                step="0.01"
                placeholder="0.00"
                {...register("unitPrice")}
              />
              {errors.unitPrice && (
                <p className="text-sm text-red-500">{errors.unitPrice.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                type="number"
                placeholder="0"
                {...register("quantity")}
              />
              {errors.quantity && (
                <p className="text-sm text-red-500">{errors.quantity.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="taxes">Taxes ($)</Label>
              <Input
                id="taxes"
                type="number"
                step="0.01"
                placeholder="0.00"
                {...register("taxes")}
              />
              {errors.taxes && (
                <p className="text-sm text-red-500">{errors.taxes.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="shippingCost">Shipping Cost ($)</Label>
              <Input
                id="shippingCost"
                type="number"
                step="0.01"
                placeholder="0.00"
                {...register("shippingCost")}
              />
              {errors.shippingCost && (
                <p className="text-sm text-red-500">{errors.shippingCost.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="leadTime">Lead Time (days)</Label>
              <Input
                id="leadTime"
                type="number"
                placeholder="0"
                {...register("leadTime")}
              />
              {errors.leadTime && (
                <p className="text-sm text-red-500">{errors.leadTime.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="validUntil">Valid Until</Label>
              <Input
                id="validUntil"
                type="date"
                {...register("validUntil")}
              />
              {errors.validUntil && (
                <p className="text-sm text-red-500">{errors.validUntil.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2 bg-muted p-4 rounded-lg">
            <div className="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span>${isNaN(subtotal) ? "0.00" : subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm font-medium">
              <span>Total Price:</span>
              <span>${isNaN(totalPrice) ? "0.00" : totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={createQuotationMutation.isPending}
            >
              {createQuotationMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Quotation"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateQuotation;