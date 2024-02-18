import React from "react";
import {Progress} from "@nextui-org/react";

export default function ExerciseProgress() {
  return (
   <div>
     <div className="w-full ">

<Progress size="md" aria-label="Loading..." value={50} />
</div> 
   </div>
  );
}
