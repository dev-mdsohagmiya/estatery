"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function RentDate() {
  const [date, setDate] = useState();

  return React.createElement(
    Popover,
    null,
    React.createElement(
      PopoverTrigger,
      { asChild: true },
      React.createElement(
        Button,
        {
          variant: "outline",
          className: cn(
            " justify-start text-left font-normal border-0 text-primary text-[16px] md:text-[18px] font-medium",
            !date &&
              "text-muted-foreground text-primary text-[16px] md:text-[18px] font-medium",
          ),
        },
        React.createElement(CalendarIcon, {
          className:
            "mr-2 h-4 w-4 text-primary text-[16px] md:text-[18px] font-medium",
        }),
        date
          ? format(date, "PPP")
          : React.createElement("span", null, "Select Move-in Date"),
      ),
    ),
    React.createElement(
      PopoverContent,
      { className: "w-auto p-0" },
      React.createElement(Calendar, {
        mode: "single",
        selected: date,
        onSelect: setDate,
        initialFocus: true,
      }),
    ),
  );
}
