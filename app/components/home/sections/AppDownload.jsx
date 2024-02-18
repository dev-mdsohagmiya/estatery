"use client"
import React from "react";
import {Card, CardBody, Image, Button, Slider} from "@nextui-org/react";
import {HeartIcon} from "./HeartIcon";
import {PauseCircleIcon} from "./PauseCircleIcon";
import {NextIcon} from "./NextIcon";
import {PreviousIcon} from "./PreviousIcon";
import {RepeatOneIcon} from "./RepeatOneIcon";
import {ShuffleIcon} from "./ShuffleIcon";


export default function AppDownload() {
  const [liked, setLiked] = React.useState(false);

  return (
   <div className="d-flex justify-center py-10 bg-[url('/images/appbg1.png')]" >

    
    <div className="w-full max-w-[1280px] mx-auto  px-8">
     <Card
      isBlurred
      className="border-none bg-gradient-to-r from-yellow-600 to-red-600 "
      shadow="sm"
      fullWidth="100%"      
    >
      <CardBody>
        <div className="grid grid-cols-6  md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
        <div className="relative col-span-6 md:col-span-4 ">
            <Image
              alt="Album cover"
              
              className="object-cover"
       
              
              src="/images/mobile_login.png"
            
            />
          </div>
        <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
              <h1 className="text-[35px] font-medium mt-2">Apprendre une langue
africaine en ligne</h1>
                <p className="text-small text-foreground/80">Appendre une langue africaine partout et à tout moment avec des leçons courtes, interactives et complètes conçues par des professionnels qualifiés pour répondre à tes besoins de la vie quotidienne.</p>
              <div className="my-4 flex gap-2">
              <div>
            
      <Button color="white" variant="ghost">
        Ghost
      </Button>  
              </div>
  <div>
  <Button color="primary" variant="ghost">
        Ghost
      </Button>  
  </div>
              </div>
              </div>
          
            </div>

         
          </div>
       

          
        </div>
      </CardBody>
    </Card>
   </div>
   </div>
  );
}
