"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ text, href, line, src }) {
  const path = usePathname();
  const isActive = href === path;
  return (
    <Link href={href}>
      <Button
        className={`border-none h-[52px]  w-full  text-start flex justify-start shadow-none ${isActive ? "bg-[#f2f3f4] hover:bg-[#f2f3f4]" : ""}`}
        variant="outline"
      >
        <div className="flex gap-2 items-center justify-start">
          <div className="w-[24px] h-[24px]">
            <Image className="w-[100%] h-[100%]" src={src} alt="" />
          </div>
          <div>
            <span
              className={` text-[14px] md:text-[16px] ${isActive ? "text-primary" : "text-graylight"}`}
            >
              {text}
            </span>
          </div>
        </div>
      </Button>
    </Link>
  );
}
