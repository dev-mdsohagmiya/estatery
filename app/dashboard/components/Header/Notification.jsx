"use client";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

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

export function Notification() {
  const [isSearchBox, setIsSearchBox] = useState(true);
  const handleNotification = () => {
    setIsSearchBox(false);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="DropdownMenuTrigger" asChild>
        <Button
          onClick={() => handleNotification()}
          className="shadow-none w-[40x] h-[46px] md:h-[40px] rounded-xl bg-[#f7f7fd] relative"
          variant="outline"
        >
          <RiNotification2Line className="text-graylight text-[25px]" />
          {isSearchBox ? (
            <div className="w-[6px] h-[6px] rounded-[50%] bg-[#FF6161] absolute top-3 left-[33px]"></div>
          ) : null}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Notification</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            {/* <User className="mr-2 h-4 w-4" /> */}
            <span>No notification found!</span>
            {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
