import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

import image1 from "@/public/images/basedonyour/img1.png";
import pricebg from "@/public/images/basedonyour/pricebg.png";
import icon1 from "@/public/images/basedonyour/icon1.png";
import icon2 from "@/public/images/basedonyour/icon2.png";
import icon3 from "@/public/images/basedonyour/icon3.png";
import fav from "@/public/images/basedonyour/fav.png";
import favs from "@/public/images/basedonyour/fav.png";
import Image from "next/image";
export default function CardBOUL({ selected, src }) {
  return (
    <Card
      className={`py-[4px] overflow-auto overflow-visible hover:shadow-xl transition duration-150 ease-out hover:ease-in`}
    >
      <CardBody className="overflow-visible rounded-0 py-0 px-[7px] relative  my-[4px]">
        <Image className="rounded-0 w-full" src={src} alt="" />
        <button>
          <Image
            className=" absolute top-3 right-4"
            src={selected ? favs : fav}
            alt=""
          />
        </button>
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-[2px] flex-col items-start relative  w-full">
        <div className="w-[145px]  h-[45px] absolute -top-7 -left-[10px] bg-no-repeat bg-[url('/images/basedonyour/pricebg.png')]  ">
          <div>
            <h2 className="font-bold text-[18px] md:text-[20px] text-white ml-8 mt-[2px]">
              $1,600
            </h2>
          </div>
        </div>
        <div className="px-[25px] py-2 w-full">
          <div>
            <h4 className="font-bold text-[22px] md:text-[24px] text-primary">
              Tarpon Bay
            </h4>
            <p className=" font-medium text-[14px] md:text-[16px] text-graylight mt-[2px]">
              103 Lake Shores, Michigan, IN
            </p>
          </div>
          <div className="px-1 py-[16px]">
            <div className="w-full h-[1px] bg-grayline "></div>
          </div>
          <div>
            <div className="flex justify-between pb-[5px]">
              <div className="col-span-2">
                <div className="flex">
                  <Image src={icon1} alt="" />
                  <h4 className="text-[#000929] text-[14px] font-medium mt-[5px] ml-[5px]">
                    2
                  </h4>
                </div>
              </div>
              <div className="w-[1px] h-[30px] bg-grayline mt-[2px] "></div>
              <div className="col-span-2 flex justify-center"></div>
              <div className="col-span-2">
                <div className="flex">
                  <Image src={icon2} alt="" />
                  <h4 className="text-[#000929] text-[14px] font-medium mt-[5px] ml-[5px]">
                    3
                  </h4>
                </div>
              </div>
              <div className="col-span-2">
                <div className="w-[1px] h-[30px] bg-grayline mt-[2px]"></div>
              </div>
              <div className="col-span-2">
                <div className="flex">
                  <Image src={icon3} alt="" />
                  <h4 className="text-[#000929] text-[14px] font-medium mt-[5px] ml-[5px]">
                    5x7.5 m²
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
