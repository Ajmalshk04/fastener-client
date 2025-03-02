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
import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/api/client";
import { useAuth } from "@/hooks/useAuth";

const CreateQuotation = ({ project, onClose }) => {
  const [quotationData, setQuotationData] = useState({
    unitPrice: '',
    quantity: '',
    taxes: '0',
    shippingCost: '0',
    leadTime: '',
    validUntil: new Date().toISOString().split('T')[0],
  });
  const { token } = useAuth();
  const queryClient = useQueryClient();

  const createQuotationMutation = useMutation({
    mutationFn: async () => {
      // Directly use the data from state without validation
      const { unitPrice, quantity, taxes, shippingCost, leadTime, validUntil } = quotationData;
      
      const subtotal = parseFloat(unitPrice) * parseInt(quantity);
      const totalPrice = subtotal + parseFloat(taxes) + parseFloat(shippingCost);

      return axiosInstance.post(`/quotations/projects/${project._id}`, {
        unitPrice: parseFloat(unitPrice),
        quantity: parseInt(quantity),
        taxes: parseFloat(taxes),
        shippingCost: parseFloat(shippingCost),
        leadTime: parseInt(leadTime),
        validUntil,
        subtotal,
        totalPrice
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
    onSuccess: () => {
      alert("Quotation created successfully.");
      onClose();
      queryClient.invalidateQueries(["projects", "supplierQuotations"]);
    },
    onError: (error) => {
      alert("Failed to create quotation: " + (error.response?.data?.error || error.message));
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuotationData(prev => ({ ...prev, [name]: value }));
  };

  const handleCreateQuotation = () => {
    createQuotationMutation.mutate();
  };

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Quotation for {project.title}</DialogTitle>
          <DialogDescription>Fill out the quotation details.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {Object.entries(quotationData).map(([key, value]) => (
            <div key={key}>
              <Label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</Label>
              <Input 
                type={key === 'validUntil' ? 'date' : 'text'} 
                id={key} 
                name={key} 
                value={value} 
                onChange={handleInputChange} 
                placeholder={`Enter ${key}`}
                required
              />
            </div>
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <Button 
            onClick={handleCreateQuotation}
            disabled={createQuotationMutation.isLoading}
          >
            {createQuotationMutation.isLoading ? "Creating..." : "Create Quotation"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateQuotation;