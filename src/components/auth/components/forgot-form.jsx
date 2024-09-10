// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Button } from "@/components/custom/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { cn } from "@/lib/utils";

// const formSchema = z.object({
//   email: z
//     .string()
//     .min(1, { message: "Please enter your email" })
//     .email({ message: "Invalid email address" }),
// });

// export function ForgotForm({ className, ...props }) {
//   const [isLoading, setIsLoading] = useState(false);

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: { email: "" },
//   });

//   function onSubmit(data) {
//     setIsLoading(true);
//     console.log(data);

//     setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//   }

//   return (
//     <div className={cn("grid gap-6", className)} {...props}>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)}>
//           <div className="grid gap-2">
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem className="space-y-1">
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input placeholder="name@example.com" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button className="mt-2 text-white" loading={isLoading}>
//               Send Link
//             </Button>
//           </div>
//         </form>
//       </Form>
//     </div>
//   );
// }
//=====================================================
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/custom/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast"; // Import useToast
import axiosInstance from "@/api/client";

// Zod schema for form validation
const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter your email" })
    .email({ message: "Invalid email address" }),
});

export function ForgotForm({ className, ...props }) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  async function onSubmit(data) {
    setIsLoading(true);
    try {
      // Make API call to request password reset
      const response = await axiosInstance.post("/users/forgot-password", {
        email: data.email,
      });

      if (response.success) {
        toast({
          title: "Success",
          description: "Password reset link sent to your email.",
          variant: "success",
        });

        // Clear the form fields
        form.reset();
      } else {
        toast({
          title: "Error",
          description: "Failed to send password reset link. Please try again.",
          variant: "error",
        });
      }
    } catch (error) {
      console.error("Error sending reset link:", error);
      toast({
        title: "Error",
        description: "An error occurred while sending the password reset link.",
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="name@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="mt-2 text-white" loading={isLoading}>
              Send Link
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
