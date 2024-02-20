"use client";
import img1 from "@/public/images/property_details/frame/img1.png";
import img2 from "@/public/images/property_details/frame/img2.png";
import img3 from "@/public/images/property_details/frame/img3.png";
import img4 from "@/public/images/property_details/frame/img4.png";
import img5 from "@/public/images/property_details/frame/img5.png";
import link from "@/public/images/property_details/frame/link.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PhotoFrame() {
  const [headerImg, setHeaderImg] = useState(img1);

  const data = [
    { src: img2, id: 1 },
    { src: img3, id: 2 },
    { src: img4, id: 3 },
    { src: img5, id: 4 },
  ];
  const handleHeaderImg = (item) => {
    setHeaderImg(item.src);
  };
  return (
    <div>
      <div>
        <div>
          <Image
            alt=""
            className="w-full rounded h-[200px] md:h-[420px] lg:h-[560px]"
            src={headerImg}
          />
        </div>
        <div className="grid grid-cols-12 gap-3 md:gap-7 py-3 md:py-7">
          {data.map((item, index) => (
            <div key={index} className="col-span-3 relative">
              <button className="w-full" onClick={() => handleHeaderImg(item)}>
                <Image src={item.src} alt="" className="w-full z-10" />
              </button>
              {data.length - 1 === index && (
                <button className="absolute  top-[30%] left-[20%]  top-1 z-20">
                  <Image
                    alt=""
                    onClick={() => {
                      if (data.length - 1 === index) {
                        alert("No more photo!");
                      }
                    }}
                    src={link}
                  />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
