"use client";
import { Button } from "@/components/ui/button";
import { DatePicker } from "./DatePicker";
import downloadIcon from "@/public/dashboard/reports/download.png";
import chart1 from "@/public/dashboard/reports/chart1.png";
import chart2 from "@/public/dashboard/reports/chart2.png";
import threedot from "@/public/dashboard/reports/threedot.png";
import Image from "next/image";
import { RadioGroupCT } from "./RadioGroupCT";
import { OverViewRadio } from "./OverViewRadio";
import male from "@/public/dashboard/customar/male.png";
import start from "@/public/dashboard/reports/start.png";
import img1 from "@/public/dashboard/reports/img1.png";
import img2 from "@/public/dashboard/reports/img2.png";
import img3 from "@/public/dashboard/reports/img3.png";
import img4 from "@/public/dashboard/reports/img4.png";
import img5 from "@/public/dashboard/reports/img5.png";
import { CheckBoxCom } from "../../customar/components/CheckBoxCom";

function ReportsPage() {
  const data = [
    {
      src: img1,
      name: "Robert Fox",
      property_name: "757 Realty",
      amount: "$6300.44",
      rating: "4.9",
    },
    {
      src: img2,

      name: "Jerome Bell",
      property_name: "All Pros Real Estate",
      amount: "$9403.65",
      rating: "4.3",
    },
    {
      src: img3,

      name: "Guy Hawkins",
      property_name: "Beverly Springfield",
      amount: "$1690.43",
      rating: "5.0",
    },
    {
      src: img4,

      name: "Ralph Edwards",
      property_name: "COVA Home Realty",
      amount: "$6001.13",
      rating: "3.9",
    },
    {
      src: img5,

      name: "Ralph Edwards",
      property_name: "COVA Home Realty",
      amount: "$6001.13",
      rating: "4.7",
    },
  ];
  return (
    <div className="pl-5 pr-5 md:pr-8 py-5 bg-[#f7f7fd] lg:h-[100vh]">
      <div className="pb-3 block md:hidden">
        <h2 className="font-bold text-[22px] md:[28px] text-primary">
          Reports
        </h2>
      </div>
      <div>
        <div className="grid gap-2 md:gap-0 md:flex justify-between">
          <div>
            <DatePicker text={"Dec 20, 2023 - Dec 27, 2023"} />
          </div>
          <div>
            <Button className="h-[42px] flex gap-2">
              <div>
                <h4 className="text-[13px] md:text-[14px] text-white font-normal">
                  Download
                </h4>
              </div>
              <div className="h-[14px] w-[14px]">
                <Image
                  alt=""
                  src={downloadIcon}
                  className="select-none w-full h-full "
                />
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-12 mt-4 gap-5">
          <div className="col-span-12 xl:col-span-7 2xl:col-span-8">
            <div className="grid grid-cols-12 bg-white p-5 ">
              <div className="col-span-12 md:col-span-4">
                <h2 className="text-[18px] md:text-[20px] text-primary font-bold">
                  Property Revenue
                </h2>
              </div>
              <div className="col-span-12 md:col-span-8 flex items-center md:justify-end w-full">
                <div className="flex gap-2 items-center ">
                  <div>
                    <RadioGroupCT />
                  </div>
                  <div>
                    <DatePicker text={"Weekly"} />
                  </div>
                </div>
              </div>
              <div className="col-span-12">
                <div>
                  <Image className="w-full select-none " src={chart1} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-5 2xl:col-span-4 bg-white p-3 md:p-5 pb-5">
            <div>
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-[18px] md:text-[20px] text-primary font-bold">
                    Property Overview
                  </h2>
                </div>
                <div>
                  <div className="w-[37px] h-[37px] cursor-pointer">
                    <Image
                      src={threedot}
                      className="w-full h-full select-none"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="md:h-[293.98px] md:w-[325.98px]">
                  <Image
                    src={chart2}
                    className="md:w-full md:h-full select-none"
                  />
                </div>
              </div>
              <div className="px-2 md:px-10">
                <OverViewRadio />
              </div>
            </div>
          </div>
          <div className="col-span-12 p-3 md:p-5  bg-white overflow-x-auto ">
            <div className="w-[800px]   lg:w-auto">
              <div className="grid grid-cols-12 px-3 md:px-5 pt-2">
                <div className="col-span-6">
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-1">
                      <CheckBoxCom />
                    </div>
                    <div className="col-span-6">
                      <h2 className="text-[14px] md:text-[16px] font-[600] text-graylight">
                        Customers
                      </h2>
                    </div>
                    <div className="col-span-5">
                      <h2 className="text-[14px] md:text-[16px] font-[600] text-graylight text-start">
                        Properties
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="grid grid-cols-12">
                    <div className="col-span-5 justify-start flex">
                      <h2 className="text-[14px] md:text-[16px]  font-[600] text-graylight text-start">
                        Amout
                      </h2>
                    </div>
                    <div className="col-span-4">
                      <h2 className="text-[14px] md:text-[16px] font-[600] text-graylight text-center">
                        Status
                      </h2>
                    </div>
                    <div className="col-span-3 justify-end flex">
                      <h2 className="text-[14px] md:text-[16px] font-[600] text-graylight text-start">
                        Rating
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 pt-3 md:pt-5">
                  <div className="w-full h-[1px] bg-grayline "></div>
                </div>
              </div>
              {data.map((item) => (
                <div className="">
                  <div
                    id="card-box"
                    className="grid grid-cols-12 xl:items-center pt-2 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  cursor-pointer px-3 md:px-5"
                  >
                    <div className="col-span-6">
                      <div className="grid grid-cols-12 items-center">
                        <div className="col-span-1">
                          <CheckBoxCom />
                        </div>
                        <div className="col-span-6 flex gap-2 items-center">
                          <div className="w-[40px] h-[40px] rounded-[50%]">
                            <Image
                              alt=""
                              src={item.src}
                              className="select-none w-full h-full"
                            />
                          </div>
                          <h2 className="text-[14px] md:text-[16px] font-medium text-primary">
                            {item.name}
                          </h2>
                        </div>
                        <div className="col-span-5">
                          <h2 className="text-[14px] md:text-[16px] font-medium text-primary text-start">
                            {item.property_name}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6">
                      <div className="grid grid-cols-12">
                        <div className="col-span-5 justify-start flex items-center">
                          <h2 className="text-[14px] md:text-[16px] font-medium text-primary text-start">
                            {item.amount}
                          </h2>
                        </div>
                        <div className="col-span-4 flex justify-center">
                          {/* fdfdf details */}
                          <div className="w-[107px] rounded-[24px] h-[31px] text-[#27AE60] font-[600]  flex justify-center items-center text-[12px] bg-[#E6F9EE]">
                            OCCUPIED
                          </div>
                        </div>
                        <div className="col-span-3 flex justify-end items-center">
                          <div className="flex gap-1 items-center">
                            <div className="h-[16px] w-[16px]">
                              <Image
                                alt=""
                                src={start}
                                className="select-none w-full h-full"
                              />
                            </div>
                            <div>
                              <h2 className="text-[14px] md:text-[16px] text-primary font-[600]">
                                {item.rating}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-12 pt-3">
                      <div>
                        <div className="w-full h-[1px] bg-grayline  "></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportsPage;
