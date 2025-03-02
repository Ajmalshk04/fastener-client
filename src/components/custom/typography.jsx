import { cn } from "@/lib/utils"; // Assuming you have this utility from Shadcn for className merging
import PropTypes from "prop-types";

const variantStyles = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-semibold",
  h3: "text-2xl font-medium",
  h4: "text-xl font-medium",
  p: "text-base",
  lead: "text-lg font-normal",
  small: "text-sm",
};

function Typography({ variant = "p", className, children, as: Component = variant === "p" ? "p" : variant, ...props }) {
  const baseStyles = variantStyles[variant] || variantStyles.p;

  return (
    <Component className={cn(baseStyles, className)} {...props}>
      {children}
    </Component>
  );
}

Typography.propTypes = {
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "p", "lead", "small"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  as: PropTypes.elementType,
};

export default Typography;