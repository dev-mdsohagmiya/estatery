import Image from "next/image";
import img1 from "@/public/images/rent/img1.png";
import fav from "@/public/images/rent/icons/fav.png";
import popular from "@/public/images/rent/icons/popular.png";
import { Card } from "@/components/ui/card";
import icon1 from "@/public/images/rent/icons/Icon.png";
import icon2 from "@/public/images/rent/icons/Icon-1.png";
import icon3 from "@/public/images/rent/icons/Icon-2.png";
import leftarrow from "@/public/images/rent/icons/leftarrow.png";
export default function GlobalCard() {
  return (
    <div className="w-full">
      <div className="relative">
        <Image src={img1} alt="" className="w-full" />
        <button className="absolute  top-4 right-[4%]">
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
              <div className="grid grid-cols-12">
                <div className="col-span-8">
                  <h4 className="text-[14px] md:text-[16px] font-[600] text-primary">
                    Palm Harbor
                  </h4>
                </div>
                <div className="col-span-4 flex justify-end ">
                  <button className="translate-y-5">
                    <Image alt="" src={leftarrow} />
                  </button>
                </div>
              </div>
              <div className="mt-[6px]">
                <p className="text-[13px] text-graylight">
                  2699 Green Valley, Highland Lake, FL
                </p>
              </div>
            </div>
            <div className="h-[2px] mt-[7px] bg-[#E4E3F3] w-full"></div>
            <div className="flex justify-between mt-[7px]">
              <div className="flex gap-1">
                <Image src={icon1} alt="" />
                <span className="text-[13px] font-medium text-graylight mt-[2px]">
                  4 bed
                </span>
              </div>
              <div className="flex gap-1">
                <Image src={icon2} alt="" />
                <span className="text-[13px] font-medium text-graylight mt-[2px]">
                  1 Bathrooms
                </span>
              </div>
              <div className="flex gap-1">
                <Image src={icon3} alt="" />
                <span className="text-[13px] font-medium text-graylight mt-[2px]">
                  5x7 m²
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
