import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import buy from "@/public/images/basedonyour/buy.png";
import sell from "@/public/images/basedonyour/sell.png";
import rent from "@/public/images/basedonyour/rent.png";
import SearchInput from "./SearchInput";
import CardBOUL from "./Card";
import RentBody from "./RentBody";

export const HeaderAndBodySection = () => (
  <div>
    <div className="">
      <div className="">
        <Tabs defaultValue="rent" className="">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <TabsList className="grid bg-white  border-[1px] border-grayline h-full w-full grid-cols-3 w-full px-3">
                <TabsTrigger
                  className="TabsTrigger  border-grayline rounded-[0px] py-[8px] rounded text-[16px] md:text-[18px] font-bold mx-1 my-2"
                  value="rent"
                >
                  <Image src={rent} className="mr-1" alt="" />
                  <span className="-translate-y-[2px]"> Rent</span>
                </TabsTrigger>
                <TabsTrigger
                  className="TabsTrigger   border-grayline rounded-[0px] py-[8px] ml-1 rounded text-[16px] md:text-[18px] font-bold"
                  value="buy"
                >
                  <Image src={buy} className="mr-1" alt="" />
                  <span className="-translate-y-[2px]"> Buy</span>
                </TabsTrigger>
                <TabsTrigger
                  className="TabsTrigger   border-grayline rounded-[0px] py-[8px] ml-1 rounded text-[16px] md:text-[18px] font-bold"
                  value="sell"
                >
                  <Image src={sell} className="mr-1" alt="" />
                  <span className="-translate-y-[2px]"> Sell</span>
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-8 flex md:justify-end mt-3 md:mt-0">
              <div className="w-full md:w-[352px]">
                <SearchInput />
              </div>
            </div>
          </div>
          <div className="col-span-12 ">
            <TabsContent
              className="mt-[40.5px]  ml-[5px] rounded-tl-none border-none"
              value="rent"
            >
              <RentBody />
            </TabsContent>
          </div>
          <div className="col-span-12 ">
            <TabsContent
              className="mt-[40.5px]  ml-[5px] rounded-tl-none border-none"
              value="buuy"
            ></TabsContent>
          </div>
          <div className="col-span-12 ">
            <TabsContent
              className="mt-[40.5px]  ml-[5px] rounded-tl-none border-none"
              value="sell"
            ></TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  </div>
);
