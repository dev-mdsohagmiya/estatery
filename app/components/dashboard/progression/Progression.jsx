
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Progress from "./Progress"

export default function Progression() {
  return (
   <div>
    <div className="bg-gray px-4 py-4 rounded-[15px] relative">
      <div className="absolute top-8"><span>PROGRESSION</span></div>
      <div className="mb-8">
        <Progress/>
      </div>
      <div>
      <Tabs defaultValue="account" className="">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2">Password</TabsTrigger>
        <TabsTrigger value="tab3">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
      <h1>tab 1</h1>
      </TabsContent>
      <TabsContent value="tab2">
        <h1>tab 2</h1>
      </TabsContent>
      <TabsContent value="tab3">
        <h1>tab 3</h1>
      </TabsContent>
    </Tabs>
      </div>
    </div>
   </div>
  )
}
