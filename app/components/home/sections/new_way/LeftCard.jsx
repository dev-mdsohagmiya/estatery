import Image from "next/image";
import React from "react";
import icon1 from "@/public/icons/newway/icon.png";
import icon2 from "@/public/icons/newway/icon-1.png";
import icon3 from "@/public/icons/newway/icon-2.png";
export const LeftCard = () => (
  <div>
    <div className="grid gap-[20px] md:gap-[25px]">
      <div>
        <h2 className="leading-[52px] font-bold text-[30px] md:text-[35px] text-dark">
          The new way to
        </h2>
        <h2 className="leading-[52px] font-bold text-[30px] md:text-[35px] text-dark">
          find your new home
        </h2>
      </div>
      <div>
        {" "}
        <p className="text-[14px] md:text-[16px] text-graylight">
          Find your dream place to live in with more than 10k+ properties
          listed.
        </p>
      </div>
      <div className="flex gap-5">
        <div>
          <Image alt="" src={icon2} />
        </div>

        <div>
          <div>
            <h4 className="font-bold text-[21px] md:text-[24px]">7.4%</h4>
          </div>
          <div>
            <p className="text-graylight text-[12px] font-medium">
              Property Return Rate
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        {" "}
        <div>
          <Image alt="" src={icon2} />
        </div>
        <div>
          <div>
            <h4 className="font-bold text-[21px] md:text-[24px]">3,856</h4>
          </div>
          <div>
            <p className="text-graylight text-[12px] font-medium">
              Property in Sell & Rent
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <Image alt="" src={icon3} />
        </div>
        <div className="">
          <div>
            <h4 className="font-bold text-[21px] md:text-[24px]">2,540</h4>
          </div>
          <div>
            <p className="text-graylight text-[12px] font-medium">
              Daily Completed Transactions
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
