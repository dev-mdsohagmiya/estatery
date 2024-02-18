import Link from "next/link";

import { Card ,CardBody} from "@nextui-org/react";
import SectionCard from "../SectionCard";

export default function Lesson(){
    return(
        <div className="">

<div className=" px-[0px] w-[170px] border-[1px] border-orange-600 text-center mb-4 shadow-md">
    <h1 className="px-4 font-bold  text-primary">LESSONS</h1>
    </div>
            <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3 hover:shadow-xl  transition duration-150 ease-out hover:ease-in">   <Link href={"#"}><SectionCard/> </Link></div>
          <div className="col-span-3 hover:shadow-xl  transition duration-150 ease-out hover:ease-in">   <Link href={"#"}><SectionCard/> </Link></div>
          <div className="col-span-3 hover:shadow-xl  transition duration-150 ease-out hover:ease-in">   <Link href={"#"}><SectionCard/> </Link></div>
          <div className="col-span-3 hover:shadow-xl  transition duration-150 ease-out hover:ease-in">   <Link href={"#"}><SectionCard/> </Link></div>
          <div className="col-span-3 hover:shadow-xl  transition duration-150 ease-out hover:ease-in">   <Link href={"#"}><SectionCard/> </Link></div>
          <div className="col-span-3 hover:shadow-xl  transition duration-150 ease-out hover:ease-in">   <Link href={"#"}><SectionCard/> </Link></div>
          <div className="col-span-3 hover:shadow-xl  transition duration-150 ease-out hover:ease-in">   <Link href={"#"}><SectionCard/> </Link></div>
          <div className="col-span-3 hover:shadow-xl  transition duration-150 ease-out hover:ease-in">   <Link href={"#"}><SectionCard/> </Link></div>
          <div className="col-span-3 hover:shadow-xl  transition duration-150 ease-out hover:ease-in">   <Link href={"#"}><SectionCard/> </Link></div>
          <div className="col-span-3 hover:shadow-xl  transition duration-150 ease-out hover:ease-in">   <Link href={"#"}><SectionCard/> </Link></div>
          <div className="col-span-3 hover:shadow-xl  transition duration-150 ease-out hover:ease-in">   <Link href={"#"}><SectionCard/> </Link></div>
          <div className="col-span-3 hover:shadow-xl  transition duration-150 ease-out hover:ease-in">   <Link href={"#"}><SectionCard/> </Link></div>
          <div className="col-span-3 hover:shadow-xl  transition duration-150 ease-out hover:ease-in">   <Link href={"#"}><SectionCard/> </Link></div>
          <div className="col-span-3 hover:shadow-xl  transition duration-150 ease-out hover:ease-in">   <Link href={"#"}><SectionCard/> </Link></div>
          <div className="col-span-3 hover:shadow-xl  transition duration-150 ease-out hover:ease-in">   <Link href={"#"}><SectionCard/> </Link></div>

             
            </div>
           
        </div>
    )
}