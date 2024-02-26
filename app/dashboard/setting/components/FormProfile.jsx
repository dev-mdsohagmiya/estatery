"use client";
import { Button } from "@/components/ui/button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function FormProfile() {
  return (
    <div>
      <div className="pt-4">
        <div className="grid grid-cols-12 gap-3 md:gap-5">
          <div className="col-span-6">
            <div>
              <span className="text-[13px] md:text-[14px] text-primary font-medium ">
                Full Name
              </span>
              <input
                className={`h-[42px] placeholder:text-[14px] placeholder:flex placeholder:items-center flex items-center  w-full rounded-[4px] mt-[2px] pb-1 px-2 bg-[#f7f7fd]  placeholder:text-[#525356] placeholder:font-normal border-[1px] shadow-none border-grayline focus:outline-none outline-none ring-0 focus:ring-0    ${
                  false && false && "border-warning border-1"
                }`}
                type="email"
                name="email"
                placeholder="Francis"
              />

              <div>
                {false && (
                  <small className="text-[12px] font-normal text-warning">
                    {/* {formik.errors.email} */}
                  </small>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div>
              <span className="text-[13px] md:text-[14px] text-primary font-medium ">
                Email
              </span>
              <input
                className={`h-[42px] placeholder:text-[14px] placeholder:flex placeholder:items-center flex items-center  w-full rounded-[4px] mt-[2px] pb-1 px-2 bg-[#f7f7fd]  placeholder:text-[#525356] placeholder:font-normal border-[1px] shadow-none border-grayline focus:outline-none outline-none ring-0 focus:ring-0    ${
                  false && false && "border-warning border-1"
                }`}
                type="email"
                name="email"
                placeholder="hi@example.com"
              />

              <div>
                {false && (
                  <small className="text-[12px] font-normal text-warning">
                    {/* {formik.errors.email} */}
                  </small>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className=" pt-1 md:pt-3">
          <div>
            <span className="text-[13px] md:text-[14px] text-primary font-medium ">
              Phone
            </span>
            <input
              className={`h-[42px] placeholder:text-[14px] placeholder:flex placeholder:items-center flex items-center  w-full rounded-[4px] mt-[2px] pb-1 px-2 bg-[#f7f7fd]  placeholder:text-[#525356] placeholder:font-normal border-[1px] shadow-none border-grayline focus:outline-none outline-none ring-0 focus:ring-0    ${
                false && false && "border-warning border-1"
              }`}
              type="email"
              name="email"
              placeholder="+1438493744"
            />

            <div>
              {false && (
                <small className="text-[12px] font-normal text-warning">
                  {/* {formik.errors.email} */}
                </small>
              )}
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-grayline my-6"></div>
        <div className="flex justify-end pt-4">
          <div className="flex gap-4">
            <div>
              <Button
                variant="outline"
                className="text-[14px] rounded-[8px] h-[44px] md:text-[16px] text-primary font-medium flex items-center justify-center px-10"
              >
                Reset
              </Button>
            </div>
            <div>
              <Button className="text-[14px] rounded-[8px] h-[44px] md:text-[16px] text-white font-medium flex items-center justify-center">
                Save Change
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormProfile;
