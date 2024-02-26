"use client";

import * as React from "react";
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

import dropdownIcon from "@/public/dashboard/reports/dropdownIcon.png";
import Image from "next/image";

export function DatePicker({ text }) {
  const [date, setDate] = React.useState();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "justify-start text-left font-normal",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-graylight" />
          {date ? (
            format(date, "PPP")
          ) : (
            <span className="text-graylight text-[14px] font-medium flex gap-1 items-center">
              {text}{" "}
              <div className="w-[16px] h-[16px]">
                <Image
                  alt=""
                  src={dropdownIcon}
                  className="h-full w-full select-none"
                />
              </div>
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
