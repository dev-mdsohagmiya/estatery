import logoback from "@/public/logoblack.png";
import icon1 from "@/public/dashboard/manu/icon1.png";
import icon2 from "@/public/dashboard/manu/icon2.png";
import icon3 from "@/public/dashboard/manu/icon3.png";
import icon4 from "@/public/dashboard/manu/icon4.png";
import icon5 from "@/public/dashboard/manu/icon5.png";
import logout from "@/public/dashboard/manu/logout.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Manu() {
  return (
    <div className="border-r-1 grid items-baseline  border-grayline h-[100vh] px-5 md:px-8  py-5">
      <div className="grid">
        <div>
          <Link href={"/dashboard"}>
            <Image src={logoback} alt="" />
          </Link>
        </div>
        <div className="pt-6">
          <Button
            className="border-none h-[52px] w-full text-start flex justify-start shadow-none"
            variant="outline"
          >
            <div className="flex gap-2 items-center justify-start">
              <div>
                <Image src={icon1} alt="" />
              </div>
              <div>
                <span className="text-graylight text-[14px] md:text-[16px]">
                  Dashboard
                </span>
              </div>
            </div>
          </Button>
        </div>
        <div>
          <Button
            className="border-none h-[52px] w-full text-start flex justify-start shadow-none"
            variant="outline"
          >
            <div className="flex gap-2 items-center justify-start">
              <div>
                <Image src={icon2} alt="" />
              </div>
              <div>
                <span className="text-graylight text-[14px] md:text-[16px]">
                  Customer
                </span>
              </div>
            </div>
          </Button>
        </div>
        <div>
          <Button
            className="border-none h-[52px] w-full text-start flex justify-start shadow-none"
            variant="outline"
          >
            <div className="flex gap-2 items-center justify-start">
              <div>
                <Image src={icon3} alt="" />
              </div>
              <div>
                <span className="text-graylight text-[14px] md:text-[16px]">
                  Property
                </span>
              </div>
            </div>
          </Button>
        </div>
        <div>
          <Button
            className="border-none h-[52px] w-full text-start flex justify-start shadow-none"
            variant="outline"
          >
            <div className="flex gap-2 items-center justify-start">
              <div>
                <Image src={icon4} alt="" />
              </div>
              <div>
                <span className="text-graylight text-[14px] md:text-[16px]">
                  Reports
                </span>
              </div>
            </div>
          </Button>
        </div>
        <div>
          <Button
            className="border-none h-[52px] w-full text-start flex justify-start shadow-none"
            variant="outline"
          >
            <div className="flex gap-2 items-center justify-start">
              <div>
                <Image src={icon5} alt="" />
              </div>
              <div>
                <span className="text-graylight text-[14px] md:text-[16px]">
                  Settings
                </span>
              </div>
            </div>
          </Button>
        </div>
      </div>
      <div className="h-[100%] grid items-end">
        <div className="">
          <Button
            className="border-none h-[52px] w-full text-start shadow-none flex justify-start"
            variant="outline"
          >
            <div className="flex gap-2 items-center justify-start">
              <div>
                <Image src={logout} alt="" />
              </div>
              <div>
                <span className="text-graylight text-[14px] md:text-[16px]">
                  Logout
                </span>
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Manu;
