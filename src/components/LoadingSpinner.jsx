import React from "react";
import { Loader, LoaderPinwheel } from "lucide-react";

const LoadingSpinner = ({ size = "large", color = "currentColor" }) => {
  const sizeMap = {
    small: "w-6 h-6",
    medium: "w-12 h-12",
    large: "w-24 h-24",
  };

  return (
    <div className="flex items-center justify-center h-screen opacity-75">
      <LoaderPinwheel
        className={`animate-spin ${sizeMap[size]}`}
        color={color}
      />
    </div>
  );
};

export default LoadingSpinner;
