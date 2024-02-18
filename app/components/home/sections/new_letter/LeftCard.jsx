import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

export const LeftCard = () => (
  <div className="px-8 grid items-center mt-8">
    <div>
      <div>
        <h2 className="font-bold text-[30px] md:text-[35px] text-white">
          Are you a landlord?
        </h2>
        <p className="text-[14px] md:text-[16px] text-graylight">
          Discover ways to increase your home's <br /> value and get listed. No
          Spam.
        </p>
      </div>
      <div>
        <div className="relative mt-10 ">
          <Input
            className=" bg-white px-5 h-[56px] w-full md:w-[410px] rounded-[8px]"
            type="email"
            placeholder="Enter your email address"
          />
          <Button
            className="absolute top-[10px] right-[5%] md:right-[25%]"
            type="submit"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  </div>
);
