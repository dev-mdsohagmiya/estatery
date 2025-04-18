import leftarrow from "@/public/dashboard/property/step1/leftarrow.png";
import step1 from "@/public/dashboard/property/step1/step1.png";
import Image from "next/image";
import Link from "next/link";
import Step1Form from "./Step1Form";
function Step1() {
  return (
    <div className="w-full max-w-[1350px] mx-auto px-5 md:px-8 py-[20px] md:py-[55px]">

<Link href={"/dashboard/property"}>

<div className="flex gap-3 items-center md:gap-5">
        <div>
          <div className="w-[35px] h-[35px] md:w-[44px] md:h-[44px]">
            <Link href={"/dashboard/property"}>
              <Image className="w-full h-full" alt="" src={leftarrow} />
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-primary text-[16px] md:text-[20px] font-medium ">
            Add New Property
          </h2>
        </div>
      </div>
</Link>
      <div className=" pt-[8px] md:pt-[20px]">
        <div className="grid gap-[10px] md:gap-[16px] justify-center">
          <div>
            <h2 className="text-primary font-bold text-[28px] md:text-[32] text-center">
              Add New Property
            </h2>
          </div>
          <div>
            <h2 className="text-[14px] text-[16px] font-normal text-center">
              Make sure you have filled in all the necessary fields and have
              uploaded all the required files.
            </h2>
          </div>
          <div className="text-center flex justify-center">
            <div className="max-w-[354px]  ">
              <Image alt="" className="h-full w-full select-none" src={step1} />
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-[668px] m-auto pt-5">
        <div className="bg-grayline h-[1px] w-full"></div>
      </div>
      <div>
        <Step1Form />
      </div>
    </div>
  );
}

export default Step1;
