import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RentBody from "../../home/sections/hero/RentBody";
import Image from "next/image";
import HeaderFilter from "./HeaderFilter";
import GlobalCard from "./GlobalCard";

export default function RentHeader() {
  return (
    <main>
      <h1 className="text-[30px] md:text-[40px] font-bold text-primary">
        Search properties to rent
      </h1>
      <div className="mt-[12px] md:mt-[16px]">
        <div>
          <Tabs defaultValue="rent" className="">
            <TabsList className="grid bg-white w-full grid-cols-3 w-full md:w-[400px]">
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
            </TabsList>
            <TabsContent
              className="mt-[17.5px] md:mt-[19.5px] w-full px-[5px] md:full rounded-tl-none rounded-tr-none "
              value="rent"
            >
              <Card className="rounded-tl-none w-full rounded-tr-lg rounded-bl-lg rounded-tr-none md:rounded-tr-lg rounded-br-lg shadow-lg">
                <HeaderFilter />
              </Card>
            </TabsContent>
            <TabsContent
              className="mt-[19.5px] w-full lg:w-[800px] ml-[5px] rounded-tl-none"
              value="buy"
            >
              <Card className="rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-lg">
                <RentBody />
              </Card>
            </TabsContent>
            <TabsContent
              className="mt-[19.5px] w-full lg:w-[800px] ml-[5px] rounded-tl-none"
              value="sell"
            >
              <Card className="rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-lg">
                <RentBody />
              </Card>
            </TabsContent>
            <TabsContent
              className="mt-[19.5px] w-full lg:w-[800px] ml-[5px] rounded-tl-none"
              value="replace"
            >
              <Card className="rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-lg">
                <RentBody />
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-12 py-[35px]">
          <div className="col-span-4">
            <GlobalCard />
          </div>
        </div>
      </div>
    </main>
  );
}
