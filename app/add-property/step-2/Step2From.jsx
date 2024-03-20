"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import details from "@/public/dashboard/property/step2/details.png";
import dollar from "@/public/dashboard/property/step2/dollar.png";
import plus from "@/public/dashboard/property/step2/plus.png";

import React, { useState } from "react";
import * as yup from "yup"
import { useFormik } from "formik";
import { SelectBox } from "../components/SelectBox";
import Image from "next/image";
import { TextArea } from "./components/TextArea";
import { DatePicker } from "@/app/dashboard/reports/components/DatePicker";
import { DatePiker } from "./components/DatePiker";
import { useRouter } from "next/navigation";
import Link from "next/link";
function Step2Form() {
    
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
  <div className="grid gap-[5px]">
       <div>
       <label htmlFor="input" className="text-[13px] md:text-[14px]  text-primary">
       Property Type
        </label>
       </div>
      <div>
      <SelectBox placeholder={"Select type"}/>
          <div>
            {formik.touched.name && (
              <small className="text-[12px] font-normal text-warning">
                {formik.errors.name}
              </small>
            )}
          </div>
      </div>
      </div>
   
      <div className="grid grid-cols-12  ">
       <div className="col-span-12 md:col-span-12 grid gap-[5px] ">
       <div>
       <label htmlFor="input" className="text-[13px] md:text-[14px]  text-primary">
       Bedroom*
        </label>
       </div>
      <div className={`
       
      `}>
           <SelectBox placeholder={"How many bets"}/>

        
      </div>
     
       </div>
     
   
      </div>
      <div className="grid grid-cols-12 gap-4  ">
    
       <div className="col-span-6 md:col-span-6 grid gap-[5px] ">
       <div>
       <label htmlFor="input" className="text-[13px] md:text-[14px]  text-primary">
       Bath*
        </label>
       </div>
      <div>
      <SelectBox placeholder={"How many baths"}/>

      </div>

       </div>
    
       <div className="col-span-6 md:col-span-6 grid gap-[5px]">
       <div className="">
       <label htmlFor="input" className="text-[13px] md:text-[14px]  text-primary">
       Square Feet
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
   
      <div className="grid grid-cols-12  gap-4">
    
    <div className="col-span-6 md:col-span-6 grid gap-[5px] ">
    <div>
    <label htmlFor="input" className="text-[13px] md:text-[14px]  text-primary">
    Monthly Rent*
     </label>
    </div>
    <div className={`
       relative
      `}>
         <input
      name="phone"
        //  value={formik.values.phone}
        //  onChange={(e) => {
        //    formik.handleChange(e);
        //    formik.setTouched({ phone: true });
        //  }}
          className={`
          h-[42px] w-full rounded px-8 md:px-10 bg-[#f7f7fd] placeholder:text-[14px] placeholder:text-graylight placeholder:font-normal border-[1px] shadow-none border-grayline focus:outline-none outline-none ring-0 focus:ring-0       pb-1  
          ${
            formik.touched.phone &&
            formik.errors?.phone &&
            "border-warning border-1"
          }
          `}
          type="number"
          placeholder="Amount"
        />

<div className="absolute top-[12px] left-2 md:left-3">
    <Image src={dollar} alt=""/>
</div>
        
      </div>

    </div>
 
    <div className="col-span-6 md:col-span-6 grid gap-[5px]">
    <div className="">
    <label htmlFor="input" className="text-[13px] md:text-[14px]  text-primary flex items-center pt-1">
    Security Deposit<div className=" ml-1"> <Image alt="" src={details}/></div>
     </label>
    </div>
    <div className={`
       relative
      `}>
         <input
      name="phone"
        //  value={formik.values.phone}
        //  onChange={(e) => {
        //    formik.handleChange(e);
        //    formik.setTouched({ phone: true });
        //  }}
          className={`
          h-[42px] w-full rounded px-8 md:px-10 bg-[#f7f7fd] placeholder:text-[14px] placeholder:text-graylight placeholder:font-normal border-[1px] shadow-none border-grayline focus:outline-none outline-none ring-0 focus:ring-0       pb-1  
          ${
            formik.touched.phone &&
            formik.errors?.phone &&
            "border-warning border-1"
          }
          `}
          type="number"
          placeholder="Amount"
        />

<div className="absolute top-[12px] left-2 md:left-3">
    <Image src={dollar} alt=""/>
</div>
        
      </div>
    </div>

   </div>
      <div className="grid gap-[5px]">
       <div>
       <label htmlFor="input" className="text-[13px] md:text-[14px]  text-primary">
       Select Amenitites
        </label>
       </div>
      <div>
<div className="">
    {
        keyword.map((item,index)=>(
            <div key={index} className="inline-block p-1 pb-[2px]">
                  <Button className="h-[40px] rounded-[8px]" variant="outline">
    {item}
  </Button>
            </div>
        ))
    }
</div>
<div className="mt-2">
<Button className="h-[40px] rounded-[8px] flex items-center" variant="outline" >

  <div className="h-[16px] w-[22px]">
  <Image alt="" src={plus} className="pr-2 w-full h-full"/>
  </div>
<h4 className="font-medium text-[14px] md:text-[16px] text-primary">Add Amenity</h4>
  </Button> 
</div>
      </div>
      </div>
      <div className="grid grid-cols-12 gap-4  ">
    
    <div className="col-span-12 md:col-span-6 grid gap-[5px] ">
    <div>
    <label htmlFor="input" className="text-[13px] md:text-[14px]  text-primary">
    Date Available
     </label>
    </div>
   <div>
<DatePiker/>

   </div>

    </div>
 
    <div className="col-span-12 md:col-span-6 grid gap-[5px] ">
    <div>
    <label htmlFor="input" className="text-[13px] md:text-[14px]  text-primary">
    Duration
     </label>
    </div>
   <div>
   <SelectBox placeholder={"How many baths"}/>
   

   </div>

    </div>

   </div>
   
   <div className="grid grid-cols-12  ">
       <div className="col-span-12 md:col-span-12 grid gap-[5px] ">
       <div>
       <label htmlFor="input" className="text-[13px] md:text-[14px]  text-primary">
       Description
        </label>
       </div>
      <div className={`
       
      `}>
           <TextArea/>

        
      </div>
     
       </div>
     
   
      </div>
      <div className="flex justify-end pt-[10px] md:pt-[15px]">
      <Button variant="outline" onClick={()=>router.back()} className="w-[92px] h-[44px] text-[14px] md:text-[16px] text-graylight font-normal  px-4 mr-2 mr-5">
      Previous
        </Button>
       <Link href={"/add-property/step-3"}>
       <Button onClick={(e)=>{
        router.push("/add-property/step-3")
        formik.handleSubmit(e)
       }} className="w-[92px] h-[44px] text-[14px] md:text-[16px] text-white font-normal px-4">
          Next
        </Button>
       </Link>
      </div>
  </div>
    </div>
  );
}

export default Step2Form;
