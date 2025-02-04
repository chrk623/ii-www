import { Input } from "@/components/ui/input";
import type { ComponentPropsWithoutRef } from "react";
import React from "react";

const PercentageInput = React.forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<typeof Input>
>((props, ref) => {
  return (
    <div className="relative w-full">
      <Input ref={ref} {...props} className={`pr-6 ${props.className ?? ""}`} />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
        %
      </span>
    </div>
  );
});

PercentageInput.displayName = "PercentageInput";

export default PercentageInput;
