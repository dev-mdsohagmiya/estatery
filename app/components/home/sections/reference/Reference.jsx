import Image from "next/image";
import React from "react";
import reference from "@/public/images/reference.png"
export const Reference = () => (
<div className="flex justify-center">
   <div>

   </div>
    <div className="w-full max-w-[1280px]  px-8 ">
       
       <div className="px-20  pb-10 rounded-[20px]  ... shadow-md bg-gradient-to-r from-slate-50 from-10% via-red-50 via-30% to-stone-50 to-95%">
       <div className="py-4">
        <h2 className="text-[35px] font-medium mt-2 text-center">Apprendre une <span>langue
africaine</span> en ligne</h2>
<p className="text-small text-foreground/80">Vous voulez apprendre une langue d'Afrique et vous souhaitez trouver des réponses à vos questions, voici celles qu'on nous pose le plus souvent !

</p>

        </div>
       <Image src={reference} className="select-none  pointer-events-none" alt="image" />
       </div>
    </div>
</div>
);