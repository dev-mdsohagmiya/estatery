import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ text, href, line }) {
  const path = usePathname();
  const isActive = href === path;
  return (
    <Link
      className={`text-[16px] font-normal relative  ${isActive ? "text-primary" : "text-graylight"}`}
      href={href}
    >
      {text}

      {isActive && !line && (
        <div className="w-full h-[1px] bg-primary absolute top-[42px]"></div>
      )}
    </Link>
  );
}
