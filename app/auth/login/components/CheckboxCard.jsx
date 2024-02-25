"use client";

import { Checkbox } from "@/components/ui/checkbox";

export function CheckboxCard() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-13 md:text-[13px] font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Remember Me
      </label>
    </div>
  );
}
