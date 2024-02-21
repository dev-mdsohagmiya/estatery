"use client";
import searchi from "@/public/dashboard/header/searchi.png";
import { GrClose } from "react-icons/gr";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export function SearchBox() {
  const [isSearchBox, setIsSearchBox] = useState(false);
  const handleSearchBox = () => {
    if (isSearchBox) {
      setIsSearchBox(false);
    } else {
      setIsSearchBox(true);
    }
  };
  return (
    <div className="flex gap-2 ">
      <div>
        <Input
          type="Search"
          className={`placeholder:text[16px] h-[40px] ${isSearchBox ? "block" : "hidden"}`}
          placeholder="Search..."
        />
      </div>
      <div>
        <Button
          onClick={() => handleSearchBox()}
          className="shadow-none w-[40x] h-[40px] rounded bg-[#f7f7fd]"
          variant="outline"
        >
          {isSearchBox ? (
            <GrClose className="text-[25px] text-graylight" />
          ) : (
            <Image alt="" src={searchi} />
          )}
        </Button>
      </div>
    </div>
  );
}
