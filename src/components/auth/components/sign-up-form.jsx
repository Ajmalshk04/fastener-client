import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/custom/button";
import { PasswordInput } from "@/components/custom/password-input";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { setEmail } from "@/store/features/auth/authSlice";
import { useDispatch } from "react-redux";

const formSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Please enter your email" })
      .email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(1, { message: "Please enter your password" })
      .min(7, { message: "Password must be at least 7 characters long" }),
    confirmPassword: z.string(),
    firstName: z.string().min(1, { message: "Please enter your first name" }),
    lastName: z.string().min(1, { message: "Please enter your last name" }),
    mobile: z.string().min(1, { message: "Please enter your mobile number" }),
    company: z.string().optional(),
    role: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["confirmPassword"],
  })
  .refine(
    (data) => {
      const location = window.location;
      const isSupplier = location.pathname.includes("/supplier/sign-up");
      return !isSupplier || (isSupplier && data.company);
    },
    {
      message: "Company is required for suppliers",
      path: ["company"],
    }
  );

export function SignUpForm({ className, ...props }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const isSupplier = location.pathname.includes("/supplier/sign-up");
  const { handleSignUp, isSigningUp, signUpError } = useAuth();
  console.log("LOADING", isSigningUp);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      mobile: "",
      company: "",
      role: isSupplier ? "supplier" : "customer",
    },
  });

  useEffect(() => {
    form.reset({
      ...form.getValues(),
      role: isSupplier ? "supplier" : "customer",
      company: isSupplier ? form.getValues().company : "",
    });
  }, [isSupplier, form]);

  function onSubmit(data) {
    console.log("Submitted data:", data);
    handleSignUp({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.mobile,
      company: data.company,
      role: data.role,
    });
    dispatch(setEmail(data.email));
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="flex justify-between gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="space-y-2 flex-1">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="space-y-2 flex-1">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Mobile</FormLabel>
                  <FormControl>
                    <Input placeholder="+1234567890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="name@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {isSupplier && (
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input placeholder="Company Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <Button className="mt-2" loading={isSigningUp}>
              Create Account
            </Button>
            {signUpError && (
              <p className="text-red-500 mt-2">{signUpError.message}</p>
            )}
            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-600" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full ">
                  Or continue with
                </span>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
