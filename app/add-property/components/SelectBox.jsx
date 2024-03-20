"use client"
import * as React from "react"


import arrow from "@/public/dashboard/property/arrow.png";
import Image from "next/image";

import {Select, SelectItem} from "@nextui-org/react";
import {animals} from "./data";
export function SelectBox({placeholder}) {
  const placements = [
    "inside",
    "outside",
    "outside-left",
  ];
  return (
<div className="rounded bg-[#f7f7fd] h-[44px] px-2 border-1 border-grayline">
<div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
<Select
classNames={"px-0"}
              labelPlacement={"outside-left"}
              onSelectionChange={(value)=>console.log("hello world",value)}
         
              placeholder={placeholder}
              className=" hover:bg-none rounded-[0px] text-[13px] md:text-[14px] text-graylight placeholder:text-graylight placeholder:text-[14px] font-normal placeholder:font-normal"
              style={{borderRadius:"0px",background:"unset",boxShadow:"unset",padding:"0px"}}
            >
              {animals.map((animal) => (
                <SelectItem key={animal.value} value={animal.value}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>
        </div>
</div>
  )
}
