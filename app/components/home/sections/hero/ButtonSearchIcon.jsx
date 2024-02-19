import Image from "next/image";
import searchIcon from "@/public/images/button_search.png";
export default function ButtonSearchIcon() {
  return (
    <div className="mr-1 translate-y-[1px]">
      <Image src={searchIcon} alt="" />
    </div>
  );
}
