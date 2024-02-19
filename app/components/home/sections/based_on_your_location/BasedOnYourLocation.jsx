import Image from "next/image";
import React from "react";
import bgphoto from "@/public/images/tenants/bg.png";
import CardBOUL from "./components/Card";
import { HeaderAndBodySection } from "./components/HeaderAndBodySection";

export const BasedOnYourLocation = () => (
  <div className="  py-[80px]  md:py-[100px] border-t-[1px] border-grayline">
    <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 ">
      <div className="grid grid-cols-12">
        <div className="col-span-12 pb-10">
          <div className="grid gap-[5px] md:gap-[24px]  pb-[45px] md:pb-[75px]">
            <div>
              <h2 className="font-bold text-primary text-[30px] md:text-[40px] text-center">
                Based on your location
              </h2>
            </div>
            <div className="font-normal text-[14px] md:text-[16px] text-graylight text-center">
              Some of our picked properties near you location.
            </div>
          </div>
          <HeaderAndBodySection />
        </div>
      </div>
    </div>
  </div>
);
