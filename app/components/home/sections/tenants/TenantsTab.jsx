import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ForTenantsBody } from "./ForTenantsBody"

export function TenantsTab() {
  return (
    <Tabs defaultValue="account" className="lg:w-[400px]">
      <TabsList className="grid w-full grid-cols-2 bg-[#EFEFFB] h-full" >
        <TabsTrigger className="font-medium text-[18px] text-graylight py-[10px] TabsTrigger_Tenants" value="account">For tenants</TabsTrigger>
        <TabsTrigger className="font-medium text-[18px] text-graylight py-[10px] TabsTrigger_Tenants" value="password">For landlords</TabsTrigger>
      </TabsList>
      <TabsContent className="mt-[20px]" value="account">
     <ForTenantsBody/>
      </TabsContent>
      <TabsContent className="mt-3 mt-[20px]" value="password">
      <ForTenantsBody/>
      </TabsContent>
    </Tabs>
  )
}
