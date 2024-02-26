import { Button } from "@/components/ui/button";
import { DatePicker } from "./DatePicker";
import downloadIcon from "@/public/dashboard/reports/download.png";
import chart1 from "@/public/dashboard/reports/chart1.png";
import chart2 from "@/public/dashboard/reports/chart2.png";
import threedot from "@/public/dashboard/reports/threedot.png";
import Image from "next/image";
import { RadioGroupCT } from "./RadioGroupCT";
import { OverViewRadio } from "./OverViewRadio";
function ReportsPage() {
  return (
    <div className="pl-5 pr-5 md:pr-8 py-5 bg-[#f7f7fd] ">
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
          <div className="col-span-12 xl:col-span-5 2xl:col-span-4 bg-white p-5">
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
        </div>
      </div>
    </div>
  );
}

export default ReportsPage;
