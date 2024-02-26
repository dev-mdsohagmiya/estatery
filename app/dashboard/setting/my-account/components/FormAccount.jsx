"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function FormAccount() {
  return (
    <div>
      <div className="pt-4">
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          <div className="col-span-12">
            <div className="relative">
              <span className="text-[13px] md:text-[14px] text-primary font-medium ">
                Full Name
              </span>
              <input
                className={`h-[42px] placeholder:text-[14px] placeholder:flex placeholder:items-center flex items-center  w-full rounded-[4px] mt-[2px] pb-1 px-2 bg-[#f7f7fd]  placeholder:text-[#525356] placeholder:font-normal border-[1px] shadow-none border-grayline focus:outline-none outline-none ring-0 focus:ring-0    ${
                  false && false && "border-warning border-1"
                }`}
                type="email"
                name="email"
                placeholder="hi@example.com"
              />
              <div className="absolute top-9 right-3">
                <h2 className="text-[13px] md:text-[14px] font-bold text-primary cursor-pointer">
                  Verify
                </h2>
              </div>
              <div>
                {false && (
                  <small className="text-[12px] font-normal text-warning">
                    {/* {formik.errors.email} */}
                  </small>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div>
              <span className="text-[13px] md:text-[14px] text-primary font-medium ">
                Password
              </span>
              <input
                className={`h-[42px] placeholder:text-[14px] placeholder:flex placeholder:items-center flex items-center  w-full rounded-[4px] mt-[2px] pb-1 px-2 bg-[#f7f7fd]  placeholder:text-[#525356] placeholder:font-normal border-[1px] shadow-none border-grayline focus:outline-none outline-none ring-0 focus:ring-0    ${
                  false && false && "border-warning border-1"
                }`}
                type="email"
                name="email"
                placeholder="Change Password"
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

        <div className="w-full h-[1px] bg-grayline my-6"></div>
        <div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-[14px] md:text-[16px] font-bold text-primary">
                Delete Account
              </h2>
              <h4 className="text-[12px] md:text-[12px] font-medium text-graylight pr-2">
                Delete your account and all the data
              </h4>
            </div>
            <div>
              <Button
                className="border-[2px] border-[#FCE3E3] h-[44px] text-[13px] md:text-[14px] font-medium text-[#F06565] flex justify-center items-center"
                variant="outline"
              >
                Delete Account
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <div className="flex gap-4">
            <div>
              <Button
                variant="outline"
                className="text-[14px] rounded-[8px] h-[44px] md:text-[16px] text-primary font-medium flex items-center justify-center px-10"
              >
                Cancel
              </Button>
            </div>
            <div>
              <Button className="text-[14px] rounded-[8px] h-[44px] md:text-[16px] text-white font-medium flex items-center justify-center">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormAccount;
