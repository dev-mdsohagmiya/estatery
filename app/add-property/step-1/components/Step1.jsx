import leftarrow from "@/public/dashboard/property/step1/leftarrow.png";
import step1 from "@/public/dashboard/property/step1/step1.png";
import Image from "next/image";
import Link from "next/link";
import Step1Form from "./Step1Form";
function Step1() {
  return (
    <div className="w-full max-w-[1350px] mx-auto px-5 md:px-8 pt-[75px]">
      <div className="flex gap-3 items-center md:gap-5">
        <div>
          <div className="w-[44px] h-[44px]">
            <Link href={"#"}>
              <Image className="w-full h-full" alt="" src={leftarrow} />
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-primary text-[18px] md:text-[20px] font-medium ">
            Add New Property
          </h2>
        </div>
      </div>
      <div className=" mt-[50px]">
        <div className="grid gap-[16px] justify-center">
          <div>
            <h2 className="text-primary font-bold text-[28px] md:text-[32] text-center">
              Add New Property
            </h2>
          </div>
          <div>
            <h2 className="text-[14px] text-[16px] font-normal text-center">
              Make sure you have filled in all the necessary fields and have
              uploaded all the required files.{" "}
            </h2>
          </div>
          <div className="text-center flex justify-center">
            <div className="max-w-[354px] h-[84px] ">
              <Image alt="" className="h-full w-full select-none" src={step1} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Step1Form />
      </div>
    </div>
  );
}

export default Step1;
