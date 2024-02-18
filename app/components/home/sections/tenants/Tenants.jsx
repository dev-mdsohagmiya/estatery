import Image from "next/image";
import React from "react";
import bgphoto from "@/public/images/tenants/bg.png";
import { TenantsTab } from "./TenantsTab";
export const Tenants = () => (
  <div className="mt-[90px] bg-[#F4F6FA] py-20">
    <div className="w-full max-w-[1280px] mx-auto px-2 md:px-8 ">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6">
          <div className="translate-x-6">
            <div className="bg-[url('/images/tenants/front.png')]   bg-no-repeat">
              <Image src={bgphoto} className="-translate-x-6" alt="" />
            </div>
          </div>
        </div>
        <div className="col-span-12 mt-10  md:mt-0 md:col-span-6 grid items-center">
          <div className="md:px-10">
            <TenantsTab />
          </div>
        </div>
      </div>
    </div>
  </div>
);
