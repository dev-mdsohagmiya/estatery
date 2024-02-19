import Image from "next/image";
import React from "react";
import { LeftCard } from "./LeftCard";
import { RightCard } from "./RightCard";

export const NewsLetter = () => (
  <div className="  py-[80px]  md:py-[100px]  border-t-[1px] border-grayline">
    <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 ">
      <div className="grid grid-cols-12 bg-primary rounded-lg md:rounded-xl md:mx-6">
        <div className="col-span-12 md:col-span-6">
          <LeftCard />
        </div>
        <div className="col-span-12 mt-10  md:mt-0 md:col-span-6 grid items-center ">
          <div>
            <RightCard />
          </div>
        </div>
      </div>
    </div>
  </div>
);
