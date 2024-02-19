import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BsChevronDown } from "react-icons/bs";
export function HeaderFilterDrop() {
  return (
    <Select>
      <SelectTrigger className="border-0 SelectTrigger  font-medium text-[14px] md:text-[16px] text-[#000929] ml-1">
        <SelectValue
          className=" font-medium text-[14px] md:text-[16px] text-[#000929]"
          placeholder={
            <div className="place flex">
              <span className=" font-medium text-[14px] md:text-[16px] text-[#000929]">
                $250 - $2500
              </span>{" "}
              <BsChevronDown className="mt-[3px] ml-[5px]" />
            </div>
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
