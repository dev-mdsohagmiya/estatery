import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import workphoto from "@/public/howwork.jpg"
export default function SectionCard() {
  return (
    <Card className="pb-4 rounded-[0px]">
          <CardBody className="overflow-visible mx-0 px-0 py-0 my-0 ">
        <Image
          alt="Card background"
          className="object-cover rounded-[0px]"
          src={"/howwork.jpg"}
       
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col text-center items-start">
   
      <h4 className="font-bold text-md text-center">Frontend Radio</h4>
       
       <small className="text-white bg-orange-600 px-2 py-[1px] text-[12px] rounded">Commencer la leçon</small>
  
       
      </CardHeader>
    
    </Card>
  );
}
