"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ text, href, line, src }) {
  const path = usePathname();
  const isActive = href === path;
  return (
    <Link
      className={`text-[14px] md:text-[16px] ${isActive ? "text-primary" : "text-graylight"} font-medium`}
      href={href}
    >
      {text}
    </Link>
  );
}
