// import { useState } from "react";
// import { cn } from "@/lib/utils";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/custom/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { PinInput, PinInputField } from "@/components/custom/pin-input";
// import { Separator } from "@/components/ui/separator";

// const formSchema = z.object({
//   otp: z.string().min(1, { message: "Please enter your OTP code." }),
// });

// export default function OtpForm({ className, ...props }) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [disabledBtn, setDisabledBtn] = useState(true);

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: { otp: "" },
//   });

//   function onSubmit(data) {
//     setIsLoading(true);
//     console.log({ data });

//     setTimeout(() => {
//       form.reset();
//       setIsLoading(false);
//     }, 2000);
//   }

//   return (
//     <div className={cn("grid gap-6 mt-6", className)} {...props}>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)}>
//           <div className="flex flex-col items-center gap-4">
//             <FormField
//               control={form.control}
//               name="otp"
//               render={({ field }) => (
//                 <FormItem className="space-y-2">
//                   <FormControl>
//                     <PinInput
//                       {...field}
//                       className="flex h-10 justify-center gap-2"
//                       onComplete={() => setDisabledBtn(false)}
//                       onIncomplete={() => setDisabledBtn(true)}
//                     >
//                       {Array.from({ length: 6 }, (_, i) => (
//                         <PinInputField
//                           key={i}
//                           component={Input}
//                           className={`text-center w-10 h-10 ${
//                             form.getFieldState("otp").invalid
//                               ? "border-red-500"
//                               : ""
//                           }`}
//                         />
//                       ))}
//                     </PinInput>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button
//               className="mt-4 w-full"
//               disabled={disabledBtn}
//               loading={isLoading}
//             >
//               Verify
//             </Button>
//           </div>
//         </form>
//       </Form>
//     </div>
//   );
// }
//=======================================
import { useState } from "react";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/custom/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PinInput, PinInputField } from "@/components/custom/pin-input";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  otp: z.string().min(1, { message: "Please enter your OTP code." }),
});

export default function OtpForm({ className, ...props }) {
  const [isLoading, setIsLoading] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(true);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { otp: "" },
  });

  function onSubmit(data) {
    setIsLoading(true);
    console.log({ data });

    setTimeout(() => {
      form.reset();
      setIsLoading(false);
    }, 2000);
  }

  return (
    <div className={cn("grid gap-6 mt-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center gap-4">
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormControl>
                    <PinInput
                      {...field}
                      className="flex h-10 justify-center gap-2"
                      onComplete={() => setDisabledBtn(false)}
                      onIncomplete={() => setDisabledBtn(true)}
                    >
                      {Array.from({ length: 7 }, (_, i) => {
                        if (i === 3)
                          return (
                            <Separator
                              key={i}
                              orientation="vertical"
                              className="h-10 mx-2"
                            />
                          );
                        return (
                          <PinInputField
                            key={i}
                            component={Input}
                            className={`text-center w-10 h-10 ${
                              form.getFieldState("otp").invalid
                                ? "border-red-500"
                                : ""
                            }`}
                          />
                        );
                      })}
                    </PinInput>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="mt-4 w-full"
              disabled={disabledBtn}
              loading={isLoading}
            >
              Verify
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
