import React from "react";
import {CircularProgress, Card, CardBody, CardFooter, Chip} from "@nextui-org/react";
import ProgressPercent from "./ProgressPercent";

export default function Progress() {
  return (
   <div>

   <div className="flex justify-end">
   <div className="h-20 w-20  rounded-full border-5 border-primary flex justify-center items-center">
        <h1 className=" font-bold">lvl. 5</h1>
    </div>
 
   </div>
   <div className="flex justify-center">
   <ProgressPercent/>
   </div>
   </div>
  );
}
