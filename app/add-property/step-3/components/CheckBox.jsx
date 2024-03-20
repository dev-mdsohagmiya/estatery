"use client";

import { Checkbox } from "@/components/ui/checkbox";

export function CheckBox() {
  return (
    <div className="flex items-center">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-14 ml-2 md:text-[15px] font-normal text-primary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
      Tick here if a vehicle will be on the premises
      </label>
    </div>
  );
}
