"use client";
import Image from "next/image";
import React from "react";
import reference from "@/public/images/reference.png";
import sslImg from "@/public/images/ssl.png";
import { usePathname } from "next/navigation";
import logo from "@/public/logowhite.png";
import whatsapp from "@/public/icons/media/whatsapp.png";
import instagram from "@/public/icons/media/instagram.png";
import Link from "next/link";
export const Footer = () => {
  const usepath = usePathname();
  console.log(usepath);
  if (
    usepath.includes("dashboard") ||
    usepath.includes("add-property") ||
    usepath.includes("auth")
  ) {
    return null;
  } else
    return (
      <div className="flex justify-center bg-primary py-20">
        <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8    ">
          <div className="grid grid-cols-12">
            <div className="col-span-6 md:col-span-3">
              <div>
                <Image src={logo} alt="" />
              </div>
              <div className="flex gap-3 mt-5">
                <Link href={"#"}>
                  <Image src={whatsapp} alt="" />
                </Link>
                <Link href={"#"}>
                  {" "}
                  <Image src={instagram} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3">
              <div>
                <h4 className="text[16px] font-bold text-white">SELL A HOME</h4>
              </div>
              <div className="mt-6">
                <Link
                  className="font-thin mt-[15px] text-[16px] block text-[#FFFFFF]"
                  href={"#"}
                >
                  Request an offer
                </Link>
                <Link
                  className="font-thin mt-[15px] text-[16px] block text-[#FFFFFF]"
                  href={"#"}
                >
                  Pricing
                </Link>
                <Link
                  className="font-thin mt-[15px] text-[16px] block text-[#FFFFFF]"
                  href={"#"}
                >
                  Reviews
                </Link>
                <Link
                  className="font-thin mt-[15px] text-[16px] block text-[#FFFFFF]"
                  href={"#"}
                >
                  Stories
                </Link>
              </div>
            </div>
            <div className="mt-10 md:mt-0 col-span-6 md:col-span-3">
              <div>
                <h4 className="text[16px] font-bold text-white">
                  BUY, RENT AND SELL
                </h4>
              </div>
              <div className="mt-6">
                <Link
                  className="font-thin mt-[15px] text-[16px] block text-[#FFFFFF]"
                  href={"#"}
                >
                  Buy and sell properties
                </Link>
                <Link
                  className="font-thin mt-[15px] text-[16px] block text-[#FFFFFF]"
                  href={"#"}
                >
                  Rent home
                </Link>
                <Link
                  className="font-thin mt-[15px] text-[16px] block text-[#FFFFFF]"
                  href={"#"}
                >
                  Builder trade-up
                </Link>
              </div>
            </div>
            <div className="mt-10 md:mt-0 col-span-6 md:col-span-3">
              <div>
                <h4 className="text[16px] font-bold text-white">ABOUT</h4>
              </div>
              <div className="mt-6">
                <Link
                  className="font-thin mt-[15px] text-[16px] block text-[#FFFFFF]"
                  href={"#"}
                >
                  Company
                </Link>
                <Link
                  className="font-thin mt-[15px] text-[16px] block text-[#FFFFFF]"
                  href={"#"}
                >
                  How it works
                </Link>
                <Link
                  className="font-thin mt-[15px] text-[16px] block text-[#FFFFFF]"
                  href={"#"}
                >
                  Contact
                </Link>
                <Link
                  className="font-thin mt-[15px] text-[16px] block text-[#FFFFFF]"
                  href={"#"}
                >
                  Investors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
