"use client";
import { Button } from "@/components/ui/button";
import Header from "../../components/Header/Header";
import addIcon from "@/public/dashboard/customar/add.png";
import img1 from "@/public/dashboard/customar/img1.png";
import img2 from "@/public/dashboard/customar/img2.png";
import img3 from "@/public/dashboard/customar/img3.png";
import img4 from "@/public/dashboard/customar/img4.png";
import img5 from "@/public/dashboard/customar/img5.png";
import img6 from "@/public/dashboard/customar/img6.png";
import img7 from "@/public/dashboard/customar/img7.png";
import img8 from "@/public/dashboard/customar/img8.png";
import male from "@/public/dashboard/customar/male.png";
import Image from "next/image";
import { CheckBoxCom } from "./CheckBoxCom";

import SmallCard from "./SmallCard";
import { PaginationSBR } from "@/app/components/home/sections/rent_buy_sell/Pagination";

function CustomarPage() {
  const data = [
    {
      name: "Darlene Robertson",
      type: "Buyer",
      phone_number: "(629) 555-0129",
      property_details: {
        src: img1,
        name: "Beverly Springfield",
        beds: "4",
        bathroom: "1",
        size: "6x5m²",
      },
    },
    {
      name: "Albert Flores",
      type: "Buyer",
      phone_number: "(229) 555-0109",
      property_details: {
        src: img2,
        name: "Palm Harbor",
        beds: "2",
        bathroom: "1",
        size: "6x5m²",
      },
    },
    {
      name: "Eleanor Pena",
      type: "Seller",
      phone_number: "(229) 555-0109",
      property_details: {
        src: img3,
        name: "(702) 555-0122",
        beds: "2",
        bathroom: "1",
        size: "5x5m²",
      },
    },
    {
      name: "Annette Black",
      type: "Seller",
      phone_number: "(229) 555-0109",
      property_details: {
        src: img4,
        name: "(702) 555-0122",
        beds: "1",
        bathroom: "1",
        size: "5x5m²",
      },
    },
    {
      name: "Annette Black",
      type: "Buyer",
      phone_number: "(229) 555-0109",
      property_details: {
        src: img5,
        name: "(702) 555-0122",
        beds: "1",
        bathroom: "1",
        size: "5x5m²",
      },
    },
    {
      name: "Annette Black",
      type: "Seller",
      phone_number: "(229) 555-0109",
      property_details: {
        src: img6,
        name: "(702) 555-0122",
        beds: "1",
        bathroom: "1",
        size: "5x5m²",
      },
    },
    {
      name: "Annette Black",
      type: "Buyer",
      phone_number: "(229) 555-0109",
      property_details: {
        src: img7,
        name: "(702) 555-0122",
        beds: "1",
        bathroom: "1",
        size: "5x5m²",
      },
    },
    {
      name: "Annette Black",
      type: "Seller",
      phone_number: "(229) 555-0109",
      property_details: {
        src: img8,
        name: "(702) 555-0122",
        beds: "1",
        bathroom: "1",
        size: "5x5m²",
      },
    },
  ];

  const handleCard = () => {
    console.log("hello world");
  };
  return (
    <div>
      <div className="pl-5 pr-5 md:pr-8 py-5 bg-[#f7f7fd]">
        <div className="pb-3 block md:hidden">
          <h2 className="font-bold text-[22px] md:[28px] text-primary">
            Customar
          </h2>
        </div>
        <div className="border-1 border-grayline bg-white py-5 rounded-[8px]">
          <div>
            <div className="flex justify-between px-3 md:px-5">
              <div>
                <h2 className="text-[18px] md:text-[20px] font-bold text-primary">
                  Customers
                </h2>
              </div>
              <div>
                <Button className="rounded-[8px] h-[44px] text-[14px] md:text-[16px] font-normal text-white flex justify-center items-center">
                  <div className="h-[20px] w-[20px]">
                    <Image
                      alt=""
                      className="w-full h-full select-none"
                      src={addIcon}
                    />
                  </div>
                  <span> Add New</span>
                </Button>
              </div>
            </div>
            <div className="py-2 md:py-4">
              <div className="w-full h-[2px] bg-grayline"></div>
            </div>
          </div>

          <div className="overflow-x-auto ">
            <div className="w-[1100px] xl:w-full">
              {/* header */}
              <div className="grid grid-cols-12 px-3 md:px-5 py-2">
                <div className="col-span-4">
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-1">
                      <CheckBoxCom />
                    </div>
                    <div className="col-span-8">
                      <h2 className="text-[14px] md:text-[16px] font-medium text-[#525356]">
                        Name
                      </h2>
                    </div>
                    <div className="col-span-3">
                      <h2 className="text-[14px] md:text-[16px] font-medium text-[#525356] text-center">
                        Type
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-span-8">
                  <div className="grid grid-cols-12">
                    <div className="col-span-5 justify-center flex">
                      <h2 className="text-[14px] md:text-[16px] font-medium text-[#525356] text-center">
                        Number
                      </h2>
                    </div>
                    <div className="col-span-7">
                      <h2 className="text-[14px] md:text-[16px] font-medium text-[#525356] text-start">
                        Property Details
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 pt-3 md:pt-5">
                  <div className="w-full h-[1px] bg-grayline "></div>
                </div>
              </div>
              <div className="">
                {data.map((item) => (
                  <div
                    id="card-box"
                    className="grid grid-cols-12 xl:items-center pt-3 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  cursor-pointer px-3 md:px-5"
                    onClick={() => handleCard(item)}
                  >
                    <div className="col-span-4">
                      <div className="grid grid-cols-12 items-center">
                        <div className="col-span-1">
                          <CheckBoxCom />
                        </div>
                        <div className="col-span-8 flex gap-2 items-center">
                          <div className="w-[40px] h-[40px] rounded-[50%]">
                            <Image
                              alt=""
                              src={male}
                              className="select-none w-full h-full"
                            />
                          </div>
                          <h2 className="text-[14px] md:text-[16px] font-medium text-[#7F8287]">
                            {item.name}
                          </h2>
                        </div>
                        <div className="col-span-3">
                          <h2 className="text-[14px] md:text-[16px] font-medium text-[#7F8287] text-center">
                            {item.type}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-8">
                      <div className="grid grid-cols-12">
                        <div className="col-span-5 justify-center flex items-center">
                          <h2 className="text-[14px] md:text-[16px] font-medium text-[#7F8287] text-center">
                            {item.phone_number}
                          </h2>
                        </div>
                        <div className="col-span-7 ">
                          <SmallCard details={item.property_details} />
                        </div>
                      </div>
                    </div>

                    <div className="col-span-12 pt-3">
                      <div>
                        <div className="w-full h-[1px] bg-grayline  "></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 md:py-6">
        <PaginationSBR />
      </div>
    </div>
  );
}

export default CustomarPage;
