import Image from "next/image";
import React from "react";
import img from "@/public/images/newletter/right.png";
export const RightCard = () => (
  <div className=" ">
    <div>
      <Image className=" md:translate-x-10" alt="" src={img} />
    </div>
  </div>
);
