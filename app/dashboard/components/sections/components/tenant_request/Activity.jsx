import arrow from "@/public/dashboard/tenant_request/arrow.png";
import img1 from "@/public/dashboard/tenant_request/activity/img1.png";
import img2 from "@/public/dashboard/tenant_request/activity/img2.png";
import img3 from "@/public/dashboard/tenant_request/activity/img3.png";
import img4 from "@/public/dashboard/tenant_request/activity/img4.png";
import img5 from "@/public/dashboard/tenant_request/activity/img5.png";
import menuIcon from "@/public/dashboard/tenant_request/activity/menu.png";

import Image from "next/image";
import { DatePicker } from "./DatePicker";
import { Button } from "@/components/ui/button";
function Activity() {
  const personleftData = [
    {
      src: img1,
      name: "James Bond",
      subName: "Renter",
      date: "Dec 7, 2021",
      timeTitle: "Rent Charge - ES683",
      title: "10:00 AM",
    },
    {
      src: img1,
      name: "Leila Skye",
      subName: "Renter",
      date: "Dec 7, 2021",
      timeTitle: "AC Maintenance",
      title: "10:00 AM",
    },
    {
      src: img3,
      name: "Leila Skye",
      subName: "Renter",
      date: "Dec 7, 2021",
      timeTitle: "Tenancy End -ES9",
      title: "09:00 AM",
    },
    {
      src: img4,
      name: "Ralf Harmann",
      subName: "Renter",
      date: "Dec 7, 2021",
      timeTitle: "Rent Charge - ES683",
      title: "09:00 AM",
    },
    {
      src: img5,
      name: "William Borg",
      subName: "Renter",
      date: "Dec 7, 2021",
      timeTitle: "Tenancy End -ES9",
      title: "10:00 AM",
    },
  ];
  return (
    <div className="grid grid-cols-12  gap-3 md:gap-5">
      <div className="col-span-12 flex justify-between py-2">
        <div className="flex gap-3">
          <div>
            <h2 className="font-[800] text-[18px] md:text-[20px] text-primary">
              Activity
            </h2>
          </div>
          <div>
            <h2 className="font-medium text-[14px] md:text-[14px] text-graylight">
              December 7, 2021
            </h2>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <DatePicker />
          </div>
          <div className="w-[19px] h-[24px]">
            <button className="w-full h-full">
              <Image className="w-full h-full" alt="" src={menuIcon} />
            </button>
          </div>
        </div>
      </div>
      {personleftData.map((item, index) => (
        <div key={index} className="col-span-12">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 md:gap-5">
              <div>
                <div className="h-[40px] w-[40px]">
                  <Image className="w-full h-full" alt="" src={item.src} />
                </div>
              </div>
              <div className="grid gap-[4px]">
                <div>
                  <h2 className="font-bold text-[14px] md:text-[16px] text-[#4d5369]">
                    {item.name}
                  </h2>
                </div>
                <div className="flex items-center">
                  <div>
                    <h2 className="font-medium text-[14px] md:text-[16px] text-graylight">
                      {item.subName}
                    </h2>
                  </div>
                  {/* <div className="px-3">
                    <div className="w-[4px] h-[4px] bg-graylight rounded-[50%]"></div>
                  </div>
                  <div>
                    <h2 className="font-normal text-[14px] md:text-[16px] text-graylight">
                      {item.date}
                    </h2>
                  </div> */}
                </div>
              </div>
              <div></div>
            </div>
            <div>
              <div className="grid gap-[4px]">
                <div>
                  <h2 className="font-bold text-[14px] md:text-[16px] text-[#4d5369]">
                    {item.timeTitle}
                  </h2>
                </div>
                <div className="flex items-center">
                  <div>
                    <h2 className="font-normal text-[14px] md:text-[16px] text-graylight">
                      {item.title}
                    </h2>
                  </div>
                  {/* <div className="px-3">
                    <div className="w-[4px] h-[4px] bg-graylight rounded-[50%]"></div>
                  </div>
                  <div>
                    <h2 className="font-normal text-[14px] md:text-[16px] text-graylight">
                      {item.date}
                    </h2>
                  </div> */}
                </div>
              </div>
            </div>
            <div>
              <div className="">
                <div
                  variant="outline"
                  className={`w-[108px] h-[36px] rounded-[24px] flex items-center justify-center  hover:bg-none  rounded-2xl text-[14px] md:text-[16px] font-medium border-none  disabled ${index === 1 ? "bg-[#e9f9ef] text-[#23C55E]" : ""} ${index === 3 ? "bg-[#e9f9ef] text-[#23C55E]" : ""} ${index === 2 ? "text-[#6565F0] bg-[#E9E9F9]" : ""} ${index === 0 ? "text-[#FF6161] bg-[#F9E9E9]" : ""} ${index === 4 ? "text-[#FF6161] bg-[#F9E9E9]" : ""}`}
                >
                  Recurring
                </div>
              </div>
            </div>
          </div>
          {personleftData.length - 1 !== index ? (
            <div className=" pt-3 md:pt-5">
              <div className="w-full h-[1px] bg-grayline"></div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default Activity;
