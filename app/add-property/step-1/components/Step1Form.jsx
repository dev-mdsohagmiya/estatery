"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectBox } from "../../components/SelectBox";
import React, { useState } from "react";
import * as yup from "yup"
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Step1Form() {
  const router = useRouter()
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
    <div className="border-[1px] p-3 rounded-md shadow-md max-w-[668px] mx-auto md:p-5 border-grayline mt-4 md:mt-8">
    
      <div>
        <h2 className="text-primary text-[16px] md:text-[18px] font-[600] pb-2 md:pb-4">
          Personal Information
        </h2>
      </div>
  <div className="grid gap-[15px]">
  <div className="grid gap-[5px]">
       <div>
       <label htmlFor="input" className="text-[13px] md:text-[14px]  text-primary">
          Owner Name
        </label>
       </div>
      <div>
      <input
      name="name"
    value={formik.values.name}
    onChange={(e) => {
      formik.handleChange(e);
      formik.setTouched({ name: true });
    }}
          className={`
          h-[42px] w-full rounded px-2 bg-[#f7f7fd] placeholder:text-[14px] placeholder:text-graylight placeholder:font-normal border-[1px] shadow-none border-grayline focus:outline-none outline-none ring-0 focus:ring-0       pb-1 
          ${
            formik.touched.name &&
            formik.errors?.name &&
            "border-warning border-1"
          }
          `}
          type="email"
          placeholder="David"
        />
          <div>
            {formik.touched.name && (
              <small className="text-[12px] font-normal text-warning">
                {formik.errors.name}
              </small>
            )}
          </div>
      </div>
      </div>
      <div className="grid gap-[5px]">
       <div>
       <label htmlFor="input" className="text-[13px] md:text-[14px]  text-primary">
          Phone
        </label>
       </div>
      <div>
      <input
      name="phone"
         value={formik.values.phone}
         onChange={(e) => {
           formik.handleChange(e);
           formik.setTouched({ phone: true });
         }}
          className={`
          h-[42px] w-full rounded px-2 bg-[#f7f7fd] placeholder:text-[14px] placeholder:text-graylight placeholder:font-normal border-[1px] shadow-none border-grayline focus:outline-none outline-none ring-0 focus:ring-0       pb-1  
          ${
            formik.touched.phone &&
            formik.errors?.phone &&
            "border-warning border-1"
          }
          `}
          type="email"
          placeholder="1-888-452-1505"
        />
          <div>
            {formik.touched.phone && (
              <small className="text-[12px] font-normal text-warning">
                {formik.errors.phone}
              </small>
            )}
          </div>
      </div>
      </div>
      <div className="grid grid-cols-12  ">
       <div className="col-span-12 md:col-span-4 grid gap-[5px] md:pr-4">
       <div>
       <label htmlFor="input" className="text-[13px] md:text-[14px]  text-primary">
          Country*
        </label>
       </div>
      <div className={`
       
      `}>
      <input
      name="country"
         value={formik.values.country}
         onChange={(e) => {
           formik.handleChange(e);
           formik.setTouched({ country: true });
         }}
          className={`
          h-[42px] w-full rounded px-2 bg-[#f7f7fd] placeholder:text-[14px] placeholder:text-graylight placeholder:font-normal border-[1px] shadow-none border-grayline focus:outline-none outline-none ring-0 focus:ring-0       pb-1   

          ${
            formik.touched.country &&
            formik.errors?.country &&
            "border-warning border-1 "
          }
          `}
          type="email"
          placeholder="Country Name"
        />
        
      </div>
     
       </div>
       <div className="col-span-6 md:col-span-4 grid gap-[5px] pr-4">
       <div>
       <label htmlFor="input" className="text-[13px] md:text-[14px]  text-primary">
       City*
        </label>
       </div>
      <div>
      <input
         value={formik.values.city}
         onChange={(e) => {
           formik.handleChange(e);
           formik.setTouched({ city: true });
         }}
          className={`
          h-[42px] w-full rounded px-2 bg-[#f7f7fd] placeholder:text-[14px] placeholder:text-graylight placeholder:font-normal border-[1px] shadow-none border-grayline focus:outline-none outline-none ring-0 focus:ring-0       pb-1   
          ${
            formik.touched.city &&
            formik.errors?.city &&
            "border-warning border-1"
          }
          `}
          type="email"
          placeholder="City Name"
        />
      </div>
       </div>
       <div className="col-span-6 md:col-span-4 grid gap-[5px]">
       <div className="">
       <label htmlFor="input" className="text-[13px] md:text-[14px]  text-primary">
          Area*
        </label>
       </div>
      <div>
     <SelectBox placeholder={"Select  Aria"}/>
      </div>
       </div>
       <div className="col-span-12 md:col-span-4 gap-[0px]">
       <div>
            {formik.touched.country && (
              <small className="text-[12px] font-normal text-warning">
                {formik.errors.country}
              </small>
            )}
          </div>
       </div>
       <div className="col-6 md:col-span-4 gap-[0px]">
       <div>
            {formik.touched.city && (
              <small className="text-[12px] font-normal text-warning">
                {formik.errors.city}
              </small>
            )}
          </div>
       </div>
      </div>

      <div className="flex justify-end pt-[10px] md:pt-[15px]">

  
    <Button onClick={(e)=>{
      
      formik.handleSubmit(e)
      router.push("/add-property/step-2")
    }} className="w-[92px] h-[44px] text-[14px] md:text-[16px] text-white font-normal">
          Next
        </Button>
      </div>
  </div>
    </div>
  );
}

export default Step1Form;
