"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import details from "@/public/dashboard/property/step2/details.png";
import dollar from "@/public/dashboard/property/step2/dollar.png";
import plus from "@/public/dashboard/property/step2/plus.png";
import hdline from "@/public/dashboard/property/step3/Headline.png";

import React, { useState } from "react";
import * as yup from "yup"
import { useFormik } from "formik";

import Image from "next/image";

import { DatePicker } from "@/app/dashboard/reports/components/DatePicker";


import { useRouter } from "next/navigation";
import { TextArea } from "../../step-2/components/TextArea";
import { SelectBox } from "../../components/SelectBox";
import { DatePiker } from "../../step-2/components/DatePiker";
import { CheckBox } from "./CheckBox";
import Link from "next/link";
function Step3Form() {
    
const router = useRouter()
    const keyword = ["A/C","Deck","Pet Friendly","Free Parking Spots","Pool","Yard","Free Wi-Fi","Gym","Handword Floor"]
  const formik = useFormik({
    initialValues:{
        name:"",
        phone:"",
        country:"",
        city:""

    },
    validationSchema:yup.object({
        name:yup.string().min(2,"name just have atleast 2 characters").required(),
        phone:yup.number().min(9,"please enter your valid phone number").required(),
        country:yup.string().min(3,"please enter your country name  to proceed").required(),
        city:yup.string().min(3,"please enter your city name  to proceed").required(),

    }),
    onSubmit:(value)=>{
        console.log(value)
    },
    
  
})

  return (
    <div className="border-[1px] p-3 rounded-md shadow-md max-w-[668px] mx-auto md:p-5 border-grayline mt-4 md:mt-4">
    
      <div>
        <h2 className="text-primary text-[16px] md:text-[18px] font-[600] pb-2 md:pb-4">
          Personal Information
        </h2>
      </div>
  <div className="grid gap-[15px]">

   
      <div className="grid grid-cols-12 gap-4  ">
    
       <div className="col-span-6 md:col-span-6 grid gap-[5px] ">
       <div>
       <label htmlFor="input" className="text-[13px] md:text-[14px]  text-primary">
       Title
        </label>
       </div>
      <div>
      <SelectBox placeholder={"Select Title"}/>

      </div>

       </div>
    
       <div className="col-span-6 md:col-span-6 grid gap-[5px]">
       <div className="">
       <label htmlFor="input" className="text-[13px] md:text-[14px]  text-primary">
      Name
        </label>
       </div>
      <div>
      <input
      name="phone"
        //  value={formik.values.phone}
        //  onChange={(e) => {
        //    formik.handleChange(e);
        //    formik.setTouched({ phone: true });
        //  }}
          className={`
          h-[42px] w-full rounded px-2 bg-[#f7f7fd] placeholder:text-[14px] placeholder:text-graylight placeholder:font-normal border-[1px] shadow-none border-grayline focus:outline-none outline-none ring-0 focus:ring-0       pb-1  
          ${
            formik.touched.phone &&
            formik.errors?.phone &&
            "border-warning border-1"
          }
          `}
          type="text"
          placeholder="st ft"
        />
      </div>
       </div>
   
      </div>
      <div className="grid grid-cols-12 gap-4  ">
    
    <div className="col-span-6 md:col-span-6 grid gap-[5px] ">
    <div>
    <label htmlFor="input" className="text-[13px] md:text-[14px]  text-primary">
    Email Address
     </label>
    </div>
   <div>
   <SelectBox placeholder={"How many baths"}/>

   </div>

    </div>
 
    <div className="col-span-6 md:col-span-6 grid gap-[5px]">
    <div className="">
    <label htmlFor="input" className="text-[13px] md:text-[14px]  text-primary">
   Phone
     </label>
    </div>
   <div>
   <input
   name="phone"
     //  value={formik.values.phone}
     //  onChange={(e) => {
     //    formik.handleChange(e);
     //    formik.setTouched({ phone: true });
     //  }}
       className={`
       h-[42px] w-full rounded px-2 bg-[#f7f7fd] placeholder:text-[14px] placeholder:text-graylight placeholder:font-normal border-[1px] shadow-none border-grayline focus:outline-none outline-none ring-0 focus:ring-0       pb-1  
       ${
         formik.touched.phone &&
         formik.errors?.phone &&
         "border-warning border-1"
       }
       `}
       type="text"
       placeholder="st ft"
     />
   </div>
    </div>

   </div>
   
 <div>
<Image alt="" src={hdline} className="select-none"/>
<div className="pt-2">
<CheckBox/>
</div>
<div>

</div>
 </div>
      <div className="flex justify-end pt-[10px] md:pt-[15px]">
      <Button variant="outline" onClick={()=>router.back()} className="w-[92px] h-[44px] text-[14px] md:text-[16px] text-graylight font-normal  px-4 mr-2 mr-5">
      Cancel
        </Button>
       <Link href={"/add-property"}>
       <Button onClick={(e)=>{
        formik.handleSubmit(e)
        router.push("/dashboard/property")
       }} className="w-[92px] h-[44px] text-[14px] md:text-[16px] text-white font-normal px-4">
          Continue
        </Button></Link>
      </div>
  </div>
    </div>
  );
}

export default Step3Form;
