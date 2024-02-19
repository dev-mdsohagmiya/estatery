"use client";
import React from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import { HeartIcon } from "./HeartIcon";
import { PauseCircleIcon } from "./PauseCircleIcon";
import { NextIcon } from "./NextIcon";
import { PreviousIcon } from "./PreviousIcon";
import { RepeatOneIcon } from "./RepeatOneIcon";
import { ShuffleIcon } from "./ShuffleIcon";
import LanguageAvater from "./LanguageAvater";

import left1 from "@/public/images/hero/heroleft1.png";
import { HeroTabs } from "./hero/HeroTabs";
import HeroLeftCard from "./hero/HeroLeftCard";

export default function Hero() {
  const [liked, setLiked] = React.useState(false);

  return (
    <div className="d-flex justify-center mt-[30px] md:mt-[85px] ">
      <div className="w-full max-w-[1280px] mx-auto px-2 md:px-8  ">
        <div>
          <div className="grid grid-cols-12">
            <div className="relative col-span-12 md:col-span-6  lg:col-span-5 ">
              <h1 className="text-[35px] md:text[40px] lg:text-[64px] text-primary font-extrabold leading-[45px] md:leading-[70px]">
                Buy, rent, or sell your property
              </h1>
              <div className="flex mt-[25px] md:mt-[27px] items-start">
                <Image
                  className="inline-block w-[67px] md:h-[40px] md:h-auto md:w-auto -translate-y-[12px] sm:translate-y-0"
                  src={"/images/hero/heroleft1.png"}
                  alt=""
                />
                <h1 className="text-[35px] md:text[40px] lg:text-[64px]  -translate-y-7 ml-3 text-primary font-extrabold inline-block">
                  easily
                </h1>
              </div>
              <div>
                <div className="-translate-y-4">
                  <span className="text-[20px] text-graylight">
                    A great platform to buy, sell, or even rent your properties
                    without any commisions.
                  </span>
                </div>
              </div>
              <div className="md:mt-[40px]">
                <div className="flex gap-[32px]">
                  <div>
                    <h1 className="text-[30px] md:text-[40px] font-bold	inline-block">
                      50k+
                    </h1>
                    <span className="text-[16px] text-graylight inline-block -translate-y-3 font-normal ml-[5px]">
                      Renters
                    </span>
                  </div>
                  <div>
                    <div className="w-[1px] h-[40px] bg-[#DADAE3] translate-y-2 md:translate-y-5"></div>
                  </div>
                  <div>
                    <h1 className="text-[30px] md:text-[40px]  font-bold inline-block">
                      10k+
                    </h1>
                    <span className="text-[16px] text-graylight inline-block -translate-y-3 font-normal ml-[5px]">
                      Properties
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-[10px] md:mt-[37px]">
                <HeroTabs />
              </div>
            </div>
            <div className="relative col-span-12 md:col-span-6  lg:col-span-7  grid justify-center bg-no-repeat bg-[url('/images/hero/heroright.png')] 	md:h-[80%]">
              <div className="w-full md:w-[220px] mt-[110px] z-10">
                <HeroLeftCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
