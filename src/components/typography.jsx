import { cn } from "@/lib/utils";
export const Typography = ({
  variant = "body1",
  as: Component = "p",
  className,
  ...props
}) => {
  const variantClasses = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-bold",
    h3: "text-2xl font-bold",
    h4: "text-xl font-bold",
    h5: "text-lg font-bold",
    h6: "text-base font-bold",
    body1: "text-base",
    body2: "text-sm",
  };

  return (
    <Component className={cn(variantClasses[variant], className)} {...props} />
  );
};

// Remove or comment out the Grid component if it's not needed
// If you need the Grid component, move it to a separate file
