"use client";

import { Button } from "@/components/ui/button";
import { RiNotification2Line } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import notification from "@/public/dashboard/header/notification.png";
import Image from "next/image";
import { useState } from "react";
import arrow from "@/public/dashboard/property/arrow.png";

export function FilterBtn() {
  const [isSearchBox, setIsSearchBox] = useState(true);
  const handleNotification = () => {
    setIsSearchBox(false);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="DropdownMenuTrigger" asChild>
        <Button
          onClick={() => handleNotification()}
          className="shadow-none w-[40x] h-[46px] md:h-[40px] rounded-none mb-2 md:mb-0  bg-white relative flex gap-3"
          variant="outline"
        >
          <div>
            <h2 className="text-[13px] md:text-[14px] text-primary font-bold">
              Showing all
            </h2>
          </div>
          <div className="w-[16px] h-[16px]">
            <Image alt="" src={arrow} className="w-full h-full select-none" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            {/* <User className="mr-2 h-4 w-4" /> */}
            <span> filter1</span>
            {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
          </DropdownMenuItem>
          <DropdownMenuItem>
            {/* <User className="mr-2 h-4 w-4" /> */}
            <span> filter1</span>
            {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
          </DropdownMenuItem>
          <DropdownMenuItem>
            {/* <User className="mr-2 h-4 w-4" /> */}
            <span> filter1</span>
            {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
