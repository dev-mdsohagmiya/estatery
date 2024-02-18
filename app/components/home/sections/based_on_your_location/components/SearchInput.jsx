import React from "react";

import { SearchIcon } from "./SearchIcon";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import search from "@/public/images/basedonyour/search.png";

export default function SearchInput() {
  return (
    <div className="relative">
      <Input
        type="email"
        className="pl-14 h-[64px] w-full placeholder:text-[16px]"
        placeholder="Search..."
      />
      <Image src={search} alt="" className="absolute top-5 left-4" />
    </div>
  );
}
