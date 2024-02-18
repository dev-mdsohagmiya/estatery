import Image from "next/image";
import React from "react";
import { LeftCard } from "./LeftCard";
import img from "@/public/images/newway/newwayright.png";
export const RightCard = () => (
  <div>
    <div>
      <Image src={img} alt="" />
    </div>
  </div>
);
