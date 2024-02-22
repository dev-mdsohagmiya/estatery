import arrow from "@/public/dashboard/tenant_request/arrow.png";
import img1 from "@/public/dashboard/tenant_request/img1.png";
import img2 from "@/public/dashboard/tenant_request/img2.png";
import img3 from "@/public/dashboard/tenant_request/img3.png";
import img4 from "@/public/dashboard/tenant_request/img4.png";
import img5 from "@/public/dashboard/tenant_request/img5.png";

import Image from "next/image";
import Activity from "./Activity";
function TenantRequest() {
  const personleftData = [
    {
      src: img1,
      name: "Valentino Parker",
      subName: "Palm Harbor",
      date: "Dec 7, 2021",
    },
    {
      src: img1,
      name: "Sofia Clear",
      subName: "Beverly Springfield",
      date: "Dec 7, 2021",
    },
    {
      src: img3,
      name: "Chris Justice",
      subName: "Cove Red",
      date: "Dec 7, 2021",
    },
    {
      src: img4,
      name: "Edin Kaolo",
      subName: "Kelapa Bafing",
      date: "Dec 7, 2021",
    },
    {
      src: img5,
      name: "Sofia Clear",
      subName: "Kelapa Bafing",
      date: "Dec 7, 2021",
    },
  ];
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-3 md:gap-5 ">
        <div className="col-span-12 xl:col-span-6  border-1 border-grayline rounded-md bg-white p-5">
          <div className="grid grid-cols-12  gap-3 md:gap-5">
            <div className="col-span-12 flex justify-between py-2">
              <div>
                <h2 className="font-[800] text-[18px] md:text-[20px] text-primary">
                  Tenant Request
                </h2>
              </div>
              <div>
                <h4 className="text-[14px] md:text-[16px] text-graylight">
                  View All
                </h4>
              </div>
            </div>
            {personleftData.map((item, index) => (
              <div key={index} className="col-span-12">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 md:gap-5">
                    <div>
                      <div className="h-[56px] w-[56px]">
                        <Image
                          className="w-full h-full"
                          alt=""
                          src={item.src}
                        />
                      </div>
                    </div>
                    <div className="grid gap-[4px]">
                      <div>
                        <h2 className="font-medium text-[16px] md:text-[18px] text-primary">
                          {item.name}
                        </h2>
                      </div>
                      <div className="flex items-center">
                        <div>
                          <h2 className="font-normal text-[14px] md:text-[16px] text-graylight">
                            {item.subName}
                          </h2>
                        </div>
                        <div className="px-3">
                          <div className="w-[4px] h-[4px] bg-graylight rounded-[50%]"></div>
                        </div>
                        <div>
                          <h2 className="font-normal text-[14px] md:text-[16px] text-graylight">
                            {item.date}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div>
                    <div className="h-[20px] w-[20px]">
                      <button>
                        <Image className="w-full h-full" alt="" src={arrow} />
                      </button>
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
        </div>
        <div className="col-span-12 xl:col-span-6  border-1 border-grayline rounded-md bg-white p-5">
          <Activity />
        </div>
      </div>
    </div>
  );
}

export default TenantRequest;
