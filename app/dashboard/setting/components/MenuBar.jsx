import Image from "next/image";
import NavLink from "./NavLink";
import user from "@/public/dashboard/setting/user.png";
import upload from "@/public/dashboard/setting/upload.png";
import { Button } from "@/components/ui/button";
import FormProfile from "./FormProfile";

function MenuBar() {
  return (
    <div className="pt-4">
      <div className="flex gap-3">
        <div>
          <NavLink href={"/dashboard/setting"} text={"Profile"} />
        </div>
        <div>
          <NavLink href={"/dashboard/my_acount"} text={"My Acount"} />
        </div>
        <div>
          <h2></h2>
        </div>
      </div>
      <div className="w-full h-[1px] bg-grayline my-3"></div>
      <div className="grid grid-cols-12 gap-3 md:gap-5 lg:h-[594px] mt-4 md:mt-6">
        <div className="col-span-12 lg:col-span-5 xl:col-span-4 2xl:col-span-3 h-full ">
          <div className="rounded-[12px] bg-white border-[1px] border-grayline py-3 px-10  md:py-5 h-full">
            <div className="flex justify-center">
              <div className="h-[93px] w-[93px]">
                <Image
                  alt=""
                  src={user}
                  className="w-full h-full select-none"
                />
              </div>
            </div>
            <div className="py-4 lg:py-6">
              <div className="flex justify-center">
                <h2 className="text-[20px] md:text-[22px] font-bold text-primary">
                  Francis
                </h2>
              </div>
              <div className="flex justify-center">
                <h4 className="text-[13px] md:text-[14px] text-graylight font-normal">
                  Irater recommended
                </h4>
              </div>
            </div>
            <div className="flex justify-center lg:pt-3">
              <div>
                <h2 className="text-[13px] md:text-[14px] font-bold text-primary">
                  Uploaded Documents
                </h2>
              </div>
            </div>
            <div className="bg-grayline w-full h-[1px] my-1"></div>
            <div className="flex justify-center py-1">
              <h2 className="text-[12px] text-graylight font-normal">
                Not Found!
              </h2>
            </div>
            <div className="flex justify-center pt-3">
              <Button className="h-[44px] bg-primary flex gap-3 justify-center">
                <div className=" w-[20px] h-[20px]">
                  <Image src={upload} className="w-full h-full select-none " />
                </div>
                <div>
                  <h2 className="text-[13px] md:text-[14px] font-normal text-white">
                    Uploaded Documents
                  </h2>
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7 xl:8 2xl:col-span-9">
          <div className="w-ful h-full bg-white p-3 md:p-5 rounded-[12px] border-[1px] border-grayline">
            <div className=" ">
              <h2 className="text-[14px] md:text-[16px] font-[600] text-primary">
                Personal Information
              </h2>
            </div>
            <div>
              <FormProfile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
