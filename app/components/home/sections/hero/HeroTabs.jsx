import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RentBody from "./RentBody";

export function HeroTabs() {
  return (
    <Tabs defaultValue="rent" className="w-full md:w-[400px]">
      <TabsList className="grid bg-white w-full grid-cols-4">
        <TabsTrigger
          className="TabsTrigger border-[1px] border-grayline rounded-[0px] py-[12px] rounded-tl-lg text-[16px]  md:text-[18px] font-bold"
          value="rent"
        >
          Rent
        </TabsTrigger>
        <TabsTrigger
          className="TabsTrigger  border-[1px] border-grayline rounded-[0px] py-[12px]  text-[16px] md:text-[18px] font-bold"
          value="buy"
        >
          Buy
        </TabsTrigger>
        <TabsTrigger
          className="TabsTrigger  border-[1px] border-grayline rounded-[0px] py-[12px] text-[16px] md:text-[18px] font-bold"
          value="sell"
        >
          Sell
        </TabsTrigger>
        <TabsTrigger
          className="TabsTrigger  border-[1px] border-grayline rounded-[0px] py-[12px] rounded-tr-lg text-[16px] md:text-[18px] font-bold"
          value="replace"
        >
          Replace
        </TabsTrigger>
      </TabsList>
      <TabsContent
        className="mt-[17.5px] md:mt-[19.5px] w-full lg:w-[800px] px-[5px] md:full rounded-tl-none rounded-tr-none"
        value="rent"
      >
        <Card className="rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-tr-none md:rounded-tr-lg rounded-br-lg">
          <RentBody />
        </Card>
      </TabsContent>
      <TabsContent
        className="mt-[17.5px] md:mt-[19.5px] w-full lg:w-[800px] px-[5px] md:full rounded-tl-none rounded-tr-none"
        value="buy"
      >
        <Card className="rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-tr-none md:rounded-tr-lg rounded-br-lg">
          <RentBody />
        </Card>
      </TabsContent>
      <TabsContent
        className="mt-[17.5px] md:mt-[19.5px] w-full lg:w-[800px] px-[5px] md:full rounded-tl-none rounded-tr-none"
        value="sell"
      >
        <Card className="rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-tr-none md:rounded-tr-lg rounded-br-lg">
          <RentBody />
        </Card>
      </TabsContent>
      <TabsContent
        className="mt-[17.5px] md:mt-[19.5px] w-full lg:w-[800px] px-[5px] md:full rounded-tl-none rounded-tr-none"
        value="replace"
      >
        <Card className="rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-tr-none md:rounded-tr-lg rounded-br-lg">
          <RentBody />
        </Card>
      </TabsContent>
    </Tabs>
  );
}
