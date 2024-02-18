import Image from "next/image";
import img1 from "@/public/images/rent/img1.png";
import fav from "@/public/images/rent/icons/fav.png";
import popular from "@/public/images/rent/icons/popular.png";
import { Card } from "@/components/ui/card";
export default function GlobalCard() {
  return (
    <div className="w-full">
      <div className="relative">
        <Image src={img1} alt="" className="w-full" />
        <button className="absolute  top-4 right-[18%]">
          {" "}
          <Image src={fav} className="" alt="" />
        </button>
        <div className="w-[109px] rounded-lg h-[32px] backdrop-blur-sm top-4 left-6 absolute border-[1px] border-[#E4E3F3]">
          <div className="flex justify-center items-center gap-1 mt-[6px]">
            <Image src={popular} className="" alt="" />
            <span className="font-medium text-white text-[12px]">POPULAR</span>
          </div>
        </div>
      </div>
      <div className="px-[7%] -translate-y-[85px]">
        <Card className="p-5 shadow-lg">
          <div>
            <div className="flex">
              <h2 className="font-bold text-[18px] md:text-[20px] text-primary">
                $2,095
              </h2>{" "}
              <span className="text-graylight text-[14px] mt-[6px] ml-[5px]">
                /month
              </span>
            </div>
            <div className="mt-[10px]">
              <div>
                <h4 className="text-[14px] md:text-[16px] font-[600] text-primary">
                  Palm Harbor
                </h4>
              </div>
              <div className="mt-[6px]">
                <p className="text-[13px] text-graylight">
                  2699 Green Valley, Highland Lake, FL
                </p>
              </div>
            </div>
            <div className="h-[2px] mt-[5px] bg-[#E4E3F3] w-full"></div>
          </div>
        </Card>
      </div>
    </div>
  );
}
