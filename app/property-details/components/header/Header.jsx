import Image from "next/image";
import btn1 from "@/public/images/property_details/icons/btn1.png";
import btn2 from "@/public/images/property_details/icons/btn2.png";
import btn3 from "@/public/images/property_details/icons/btn3.png";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-8 grid gap-[2px] sm:gap-2">
          <div>
            <h2 className="font-bold text-primary text-[30px] md:text-[40px]">
              Beverly Springfield
            </h2>
          </div>
          <div>
            <h4 className="text-[14px] sm:text-[16px] font-normal text-graylight">
              2821 Lake Sevilla, Palm Harbor, TX
            </h4>
          </div>
        </div>
        <div className="col-span-12 py-2 sm:py-0 md:col-span-4 flex md:items-end justify-end">
          <div className="flex gap-[8px]">
            <div>
              <Link href={"#"}>
                <Image alt="" src={btn1} />
              </Link>
            </div>
            <div>
              <Link href={"#"}>
                <Image alt="" src={btn2} />
              </Link>
            </div>
            <div>
              <Link href={"#"}>
                <Image alt="" src={btn3} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
