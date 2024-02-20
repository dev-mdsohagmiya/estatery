import { Card } from "@/components/ui/card";
import Image from "next/image";
import icon1 from "@/public/images/property_details/icons/details/icon1.png";
import icon2 from "@/public/images/property_details/icons/details/icon2.png";
import icon3 from "@/public/images/property_details/icons/details/icon3.png";
import icon4 from "@/public/images/property_details/icons/details/icon4.png";
import icon5 from "@/public/images/property_details/icons/details/icon5.png";
import icon6 from "@/public/images/property_details/icons/details/icon6.png";
import arrow from "@/public/images/property_details/icons/details/arrow.png";
import { Button } from "@/components/ui/button";
export default function DetailsOne() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-7">
        <div className="lg:col-span-9 xl:col-span-8 ">
          <Card className="p-5">
            <div className="w-full flex justify-between grid-cols-10">
              <div className="grid gap-4 col-span-2">
                <div>
                  <h4 className="text-[14px] md:text-[16px] text-graylight">
                    Bedrooms
                  </h4>
                </div>
                <div className="flex gap-2">
                  <Image src={icon1} alt="" />
                  <h4 className="font-bold text-primary text-[16px] md:text-[18px]">
                    3
                  </h4>
                </div>
              </div>
              <div className="grid gap-4 col-span-2">
                <div>
                  <h4 className="text-[14px] md:text-[16px] text-graylight">
                    Bedrooms
                  </h4>
                </div>
                <div className="flex gap-2">
                  <Image src={icon2} alt="" />
                  <h4 className="font-bold text-primary text-[16px] md:text-[18px]">
                    3
                  </h4>
                </div>
              </div>
              <div className="grid gap-4 col-span-2">
                <div>
                  <h4 className="text-[14px] md:text-[16px] text-graylight">
                    Bathrooms
                  </h4>
                </div>
                <div className="flex gap-2">
                  <Image src={icon3} alt="" />
                  <h4 className="font-bold text-primary text-[16px] md:text-[18px]">
                    2
                  </h4>
                </div>
              </div>
              <div className="grid gap-4 col-span-2">
                <div>
                  <h4 className="text-[14px] md:text-[16px] text-graylight">
                    Square Area
                  </h4>
                </div>
                <div className="flex gap-2">
                  <Image src={icon4} alt="" />
                  <h4 className="font-bold text-primary text-[16px] md:text-[18px]">
                    5x7 m²
                  </h4>
                </div>
              </div>
              <div className="grid gap-4 col-span-2">
                <div>
                  <h4 className="text-[14px] md:text-[16px] text-graylight">
                    Repair Quality
                  </h4>
                </div>
                <div className="flex gap-2">
                  <Image src={icon4} alt="" />
                  <h4 className="font-bold text-primary text-[16px] md:text-[18px]">
                    Modern Loft
                  </h4>
                </div>
              </div>
              <div className="grid gap-4 col-span-2">
                <div>
                  <h4 className="text-[14px] md:text-[16px] text-graylight">
                    Status
                  </h4>
                </div>
                <div className="flex gap-2">
                  <Image src={icon5} alt="" />
                  <h4 className="font-bold text-primary text-[16px] md:text-[18px]">
                    Active
                  </h4>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="lg:col-span-3 xl:col-span-4">
          <Card className="w-full p-6">
            <div className="flex gap-6">
              <div>
                <Image src={icon6} alt="" />
              </div>
              <div>
                <div className="text-graylight font-medium ">Price</div>
                <div className="text-primary font-[800] text-[20px] md:text-[24px]">
                  $582,87.00
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button className="h-[56px] w-full px-1 rounded-8px ">
                <span className="text-white font-bold text-[14px] md:text-[16px] text-white">
                  Buy
                </span>{" "}
                <Image className="ml-2" src={arrow} alt="" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
