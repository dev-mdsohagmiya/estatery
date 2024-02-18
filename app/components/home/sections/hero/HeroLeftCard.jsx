import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function HeroLeftCard() {
  return (
    <Card className="py-2">
     
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/hero/cardimg.png"
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <h4 className="font-bold text-[11.22px] font-bold text-primary">Beverly Springfield</h4>
       <div className="flex  translate-y-[1px]">
       <Image alt="" className="inline-block -translate-y-[7px] "  src="/images/hero/location.png" />
        <small className="text-default-500 text-[8.42px] text-graylight"> 2821 Lake Sevilla, Palm Harbor, TX</small>
       </div>
       <div className="flex -translate-y-2 ml-[1.3px]">
 <Image alt="" className="inline-block -translate-y-[7px] "  src="/images/hero/i1.png" />       <span className="text-[8.42px] text-graylight mr-2 ml-[2px]">4</span>
 <Image alt="" className="inline-block -translate-y-[7px] "  src="/images/hero/i2.png" />       <span className="text-[8.42px] text-graylight mr-2 ml-[2px]">2</span>
 <Image alt="" className="inline-block -translate-y-[7px] "  src="/images/hero/i3.png" />       <span className="text-[8.42px] text-graylight ml-[2px]">6x7.5 m<sup>2</sup></span>
 
       </div>
       <div className="flex -translate-y-2">
       <h2 className="text-primary text-[16.83px] font-bold">$2,700</h2><span className="text-graylight text-[9.82px] font-medium mt-[7px] ml-[1px]">/month</span>
       </div>
      </CardHeader>
    </Card>
  );
}
