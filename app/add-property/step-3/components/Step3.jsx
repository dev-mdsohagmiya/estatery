import leftarrow from "@/public/dashboard/property/step1/leftarrow.png";
import step3 from "@/public/dashboard/property/step3/step3.png";
import addresscard from "@/public/dashboard/property/step3/addresscard.png";
import Image from "next/image";
import Link from "next/link";


import Step3Form from "./Step3Form";
function Step3() {
  return (
    <div className="w-full max-w-[1350px] mx-auto px-5 md:px-8 py-[20px] md:py-[55px]">
   <Link href={"/dashboard/add-property"}>
   <div className="flex gap-3 items-center md:gap-5">
        <div>
          <div className="w-[35px] h-[35px] md:w-[44px] md:h-[44px]">
            <Link href={"#"}>
              <Image className="w-full h-full" alt="" src={leftarrow} />
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-primary text-[16px] md:text-[20px] font-medium ">
            Add New Property
          </h2>
        </div>
      </div></Link>
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
            <div className="max-w-[668px] ">
              <Image alt="" className="h-full w-full select-none"  src={step3} />
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-[668px] m-auto pt-5">
        <div className="bg-grayline h-[1px] w-full"></div>
      </div>
      <div className=" max-w-[710px] m-auto pt-5">
    <div className="w-full h-[120px]  md:h-auto">
<Image style={{height:"100%"}} alt="" className="select-none" classNamew="w-full h-full " src={addresscard}/>
    </div>
      </div>
      <div className=" max-w-[668px] m-auto pt-5">
        <div className="bg-grayline h-[1px] w-full"></div>
      </div>

      <div className=" max-w-[668px] m-auto pt-4 pb-3">
       <h2 className="text-primary font-bold text-[22px] md:text-[24px]">Personal Details</h2>
       <h4 className="text-graylight font-medium text-[14px] md:text-[16px] pt-1" >Please start your profile below by filling in your personal information </h4>
      </div>
   
      <div>
  <Step3Form/>
      </div>
    </div>
  );
}

export default Step3;
