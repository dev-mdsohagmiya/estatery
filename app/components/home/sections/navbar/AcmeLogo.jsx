import Image from "next/image";
import React from "react";
export const AcmeLogo = ({ className }) => (
  <>
    <Image
      src={"/logo.svg"}
      className={`select-none inline-block ${className}`}
      alt=""
      height={32}
      width={118}
    />
  </>
);
