import Image from "next/image";
import React from "react";
import bgphoto from "@/public/images/tenants/bg.png";
import CardBOUL from "./components/Card";
import { HeaderAndBodySection } from "./components/HeaderAndBodySection";

export const BasedOnYourLocation = () => (
  <div className="  py-[80px]  md:py-[100px] border-t-[1px] border-grayline">
    <div className="w-full max-w-[1280px] mx-auto px-2 md:px-8 ">
      <div className="grid grid-cols-12">
        <div className="col-span-12 pb-10">
          <HeaderAndBodySection />
        </div>
      </div>
    </div>
  </div>
);
