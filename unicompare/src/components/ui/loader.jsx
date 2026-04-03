import React from 'react';
import { cn } from "@/lib/utils"

const Loader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("w-8 h-8 border-2 border-solid rounded-[50%] border-transparent animate-spin border-l-white", className)}
    {...props}
  ></div>
));

Loader.displayName = "Loader";

export default Loader;
