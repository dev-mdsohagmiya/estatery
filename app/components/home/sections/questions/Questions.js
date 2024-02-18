import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Questions() {
  return (
   <div>
    <div className="w-full max-w-[1280px] mx-auto px-8 " >

     <div className="px-20  rounded-[20px] bg-slate-50 shadow-sm pb-10" >
      <div className="py-4 text-center">
      <h1 className="text-[35px] font-medium mt-2">Apprendre une langue
africaine en ligne</h1>
                <p className="text-small text-foreground/80">Appendre une langue africaine partout et à tout moment avec des leçons courtes, interactives et complètes conçues par des professionnels qualifiés pour répondre à tes besoins de la vie quotidienne.</p>
           
      </div>
     <Accordion style={{
      gap:"20px"
     }}   collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger><span className="text-[20px] font-blod py-2">01.
Quels types de cours proposez-vous ?</span></AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    

      <AccordionItem value="item-2">
        <AccordionTrigger><span className="text-[20px] font-blod py-2">02.
Quelles langues africaines enseignez-vous ? </span></AccordionTrigger>
        <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
  
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger><span className="text-[20px] font-blod py-2">03.
Que faire si je ne vois pas ma langue ?
 </span></AccordionTrigger>
        <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
  
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger><span className="text-[20px] font-blod py-2"> 04.
En combien de temps puis-je apprendre une langue ? </span></AccordionTrigger>
        <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
  
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger><span className="text-[20px] font-blod py-2"> 05.
Quel est le profil de vos enseignants ?</span></AccordionTrigger>
        <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger><span className="text-[20px] font-blod py-2"> 05.
Quel est le profil de vos enseignants ?</span></AccordionTrigger>
        <AccordionContent>
        06.
Les cours d’Afrilangues sont-ils payants ?

        </AccordionContent>
      </AccordionItem>
   
    </Accordion>
     </div>
   </div>
   </div>
  )
}
