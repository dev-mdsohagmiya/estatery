"use client";
import { useEffect, useState } from "react";
import { BsPlus, BsThreeDotsVertical } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import BathIcon from "@/public/dashboard/property/icons/bath.png";
import BetIcon from "@/public/dashboard/property/icons/bet.png";
import DabbleDasIcon from "@/public/dashboard/property/icons/dabble-das.png";
import DashIcon from "@/public/dashboard/property/icons/dash.png";
import SqRIcon from "@/public/dashboard/property/icons/squ-round.png";
import UpArr from "@/public/dashboard/property/icons/upArr.png";
import img1 from "@/public/dashboard/property/img1.png";
import img2 from "@/public/dashboard/property/img2.png";
import img3 from "@/public/dashboard/property/img3.png";
import img4 from "@/public/dashboard/property/img4.png";
import img5 from "@/public/dashboard/property/img5.png";
import img6 from "@/public/dashboard/property/img6.png";
import Image from "next/image";
import { PaginationSBR } from "@/app/components/home/sections/rent_buy_sell/Pagination";
import { FilterBtn } from "./FilterBtn";

const PropertyPage = () => {
  const properties = [
    {
      _id: "01",
      image: img1,
      title: "Palm Harbor",
      address: "2699 Green Valley, Highland Lake, FL",
      price: "2,095",
      beds: "3",
      bathrooms: "2",
      size: "5x7",
      status: "active",
      sqm: "128",
    },
    {
      _id: "02",
      image: img2,
      title: "Beverly Springfield",
      address: "2821 Lake Sevilla, Palm Hardor, TX",
      price: "2,700",
      beds: "4",
      bathrooms: "2",
      size: "6x7.5",
      status: "occupied",
      sqm: "112",
    },
    {
      _id: "03",
      image: img3,
      title: "Faulkner Ave",
      address: "909 Woodland St, Michigan, IN",
      price: "4,550",
      beds: "4",
      bathrooms: "3",
      size: "8x10",
      status: "maintenance",
      sqm: "132",
    },
    {
      _id: "04",
      image: img4,
      title: "St. Crystal",
      address: "210 US Highway, Highland Lake, FL",
      price: "2,400",
      beds: "4",
      bathrooms: "2",
      size: "6x8",
      status: "request",
      sqm: "128",
    },
    {
      _id: "05",
      image: img5,
      title: "Cove Red",
      address: "243 Curlew Road, Palm Harbor, TX",
      price: "1,500",
      beds: "2",
      bathrooms: "1",
      size: "5x7.5",
      status: "vacant",
      sqm: "128",
    },
    {
      _id: "06",
      image: img6,
      title: "The Old Steele",
      address: "103 Lake Shores, Michigan, IN",
      price: "1,600",
      beds: "3",
      bathrooms: "1",
      size: "5x7",
      status: "active",
      sqm: "128",
    },
  ];

  return (
    <div className="pl-5 pr-5 md:pr-8 py-5 bg-[#f7f7fd]  ">
      <div className="pb-3 block md:hidden">
        <h2 className="font-bold text-[22px] md:[28px] text-primary">
          Properties
        </h2>
      </div>
      <div className="">
        {/* filtering and add post */}
        <div className="md:flex justify-between">
          <div className=" text-center">
            <FilterBtn />
          </div>

          <div className="flex items-center gap-4 justify-between">
            <div className="flex justify-center items-center text-[20px] gap-2">
              <Image
                src={UpArr}
                width={36}
                height={36}
                className="bg-white p-[8px] text-[36px] border border-gray-300 rounded-[4px]"
                alt=""
              />
              <Image
                src={DashIcon}
                width={36}
                height={36}
                className="bg-white p-[6px] text-[36px] border border-gray-300 rounded-[4px]"
                alt=""
              />
              <Image
                src={DabbleDasIcon}
                width={36}
                height={36}
                className="bg-white p-[6px] text-[36px] border border-gray-300 rounded-[4px]"
                alt=""
              />
            </div>
            <div>
              <button className="bg-[#000929] text-white px-3 py-2 rounded-md flex items-center justify-center">
                <BsPlus className="text-[22px] inline" /> <span>Add New</span>
              </button>
            </div>
          </div>
        </div>

        {/* cards */}
        <div className="grid grid-cols-12 gap-6 py-10">
          {/* one */}
          {properties?.map((item) => (
            <div
              key={item._id}
              className="p-4 rounded-md border-[1px] border-grayline col-span-12 lg:col-span-6 xl:col-span-4 bg-white"
            >
              <div className="relative">
                <div className="">
                  <div className="h-[200px] sm:[h-[290px]] xl:h-[240px] w-full">
                    <Image
                      src={item.image}
                      className="rounded-md w-full h-full select-none"
                      alt=""
                    />
                  </div>
                </div>
                <div className="absolute top-6 right-6">
                  <BsThreeDotsVertical className="bg-transparent p-[6px] text-[36px] border-2 border-white text-white rounded-md" />
                </div>
                <div className="absolute bottom-6 right-6">
                  <button className="text-[#000929] text-[12px] font-semibold px-3 py-2 rounded-md flex items-center justify-center bg-white opacity-70 uppercase">
                    {item.status}
                  </button>
                </div>
              </div>

              <div className="">
                <p className="text-[12px] font-medium pt-4 text-[#888B92]">
                  <CiLocationOn className="inline" /> {item.address}
                </p>
                <div className="flex justify-between pb-3">
                  <h4 className="text-[18px] md:text-[20px] text-primary font-bold">
                    {item.title}
                  </h4>
                  <div>
                    <h4 className="text-[20px] font-extrabold">
                      ${item.price}
                      <span className="text-[12px] font-medium text-graylight">
                        /month
                      </span>
                    </h4>
                  </div>
                </div>

                <div className="text-[14px] font-medium text-[#8B8C93] flex justify-between py-[12px] border-t border-grayline">
                  <div className="flex justify-center items-center gap-2">
                    <Image src={BetIcon} alt="" />
                    <p>{item.beds} Beds</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Image src={BathIcon} alt="" />
                    <p>{item.bathrooms} Bathrooms</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Image src={SqRIcon} alt="" />
                    <p>{item.size} m²</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* pagination */}
        <div className="flex justify-center items-center pb-5">
          <PaginationSBR />
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#f7f7fd] py-10">
      <div className="max-w-[1240px] mx-auto">
        {/* filtering and add post */}
        <div className="md:flex justify-between">
          <div className="p-3 bg-white rounded-[4px] text-center">
            <select className="p-2 focus:outline-none text-[#000929] font-bold">
              <option disabled selected>
                Selecting All
              </option>
              <option>one</option>
              <option>Owo</option>
              <option>Three</option>
            </select>
          </div>

          <div className="flex items-center gap-4 justify-between">
            <div className="flex justify-center items-center text-[20px] gap-2">
              <Image
                src={UpArr}
                width={36}
                height={36}
                className="bg-white p-[8px] text-[36px] border border-gray-300 rounded-[4px]"
                alt=""
              />
              <Image
                src={DashIcon}
                width={36}
                height={36}
                className="bg-white p-[6px] text-[36px] border border-gray-300 rounded-[4px]"
                alt=""
              />
              <Image
                src={DabbleDasIcon}
                width={36}
                height={36}
                className="bg-white p-[6px] text-[36px] border border-gray-300 rounded-[4px]"
                alt=""
              />
            </div>
            <div>
              <button className="bg-[#000929] text-white px-3 py-2 rounded-md flex items-center justify-center">
                <BsPlus className="text-[22px] inline" /> <span>Add New</span>
              </button>
            </div>
          </div>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
          {/* one */}
          {properties?.map((item) => (
            <div
              key={item._id}
              className="p-4 rounded-md border border-gray-300 bg-white"
            >
              <div className="relative">
                <div className="">
                  <Image
                    src={item.image}
                    width={300} // Adjust width as per your design
                    height={200} // Adjust height as per your design
                    className="rounded-md"
                    alt=""
                  />
                </div>
                <div className="absolute top-6 right-6">
                  <BsThreeDotsVertical className="bg-transparent p-[6px] text-[36px] border-2 border-white text-white rounded-md" />
                </div>
                <div className="absolute bottom-6 right-6">
                  <button className="text-[#000929] text-[12px] font-semibold px-3 py-2 rounded-md flex items-center justify-center bg-white opacity-70 uppercase">
                    {item.status}
                  </button>
                </div>
              </div>

              <div className="">
                <p className="text-[12px] font-medium pt-4">
                  <CiLocationOn className="inline" /> {item.address}
                </p>
                <div className="flex justify-between pb-3">
                  <h4 className="text-[20px] font-bold">{item.title}</h4>
                  <div>
                    <h4 className="text-[20px] font-extrabold">
                      ${item.price}
                      <span className="text-[12px] font-medium text-[#8B8C93]">
                        /month
                      </span>
                    </h4>
                  </div>
                </div>

                <div className="text-[14px] font-medium text-[#8B8C93] flex justify-between py-[12px] border-t border-gray-300">
                  <div className="flex justify-center items-center gap-2">
                    <Image src={BetIcon} alt="" />
                    <p>{item.beds} Beds</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Image src={BathIcon} alt="" />
                    <p>{item.bathrooms} Bathrooms</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Image src={SqRIcon} alt="" />
                    <p>{item.size} m²</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* pagination */}
        <div className="flex justify-center items-center">
          <div className=" md:space-x-4">
            <button className="join-item btn bg-transparent hover:bg-transparent border-none p-2">
              <MdOutlineKeyboardArrowLeft />
            </button>
            <button className="join-item btn bg-white p-4 hover:bg-black text-[#8B8C93] hover:text-white text-[16px] rounded-full">
              1
            </button>
            <button className="join-item btn bg-white p-4 hover:bg-black text-[#8B8C93] hover:text-white text-[16px] rounded-full">
              2
            </button>
            <button className="join-item btn bg-white p-4 hover:bg-black text-[#8B8C93] hover:text-white text-[16px] rounded-full">
              3
            </button>
            <button className="join-item btn bg-transparent hover:bg-transparent border-none p-2">
              ...
            </button>
            <button className="join-item btn bg-white p-4 hover:bg-black text-[#8B8C93] hover:text-white text-[16px] rounded-full">
              10
            </button>
            <button className="join-item btn bg-transparent hover:bg-transparent border-none p-2">
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
