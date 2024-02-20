import React from "react";
import arrow from "@/public/images/property_details/icons/arrow.png";
import Image from "next/image";
export default function BreadcrumbSec() {
  return (
    <div>
      <div className="flex gap-[1px] sm:gap-1">
        <div>
          <h4 className="text-[16px] sm:text-[18px] md:[20px] text-graylight font-medium">
            Home
          </h4>
        </div>
        <div>
          <Image
            className="translate-y-[3px] sm:translate-y-[6px]"
            src={arrow}
            alt=""
          />
        </div>
        <div>
          <h4 className="text-[16px] sm:text-[18px] md:[20px] text-graylight font-medium">
            Property List
          </h4>
        </div>
        <div>
          <Image
            className="translate-y-[3px] sm:translate-y-[6px]"
            src={arrow}
            alt=""
          />
        </div>
        <div>
          <h4 className="text-[16px] sm:text-[18px] md:[20px] text-primary font-medium">
            Property Details
          </h4>
        </div>
        {/* <div>
          <Image className="translate-y-[6px]" src={arrow} alt="" />
        </div> */}
      </div>
    </div>
  );
}
