"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Rent from "../body/Rent";
import Buy from "../body/Buy";
import Sell from "../body/Sell";
import { useEffect, useRef, useState } from "react";

export default function HeaderAndBody({ defaultTab }) {
  const [title, setTitle] = useState("");
  const TabsTriggerBuyRef = useRef(null);
  const TabsTriggerRentRef = useRef(null);
  const TabsTriggerSellRef = useRef(null);

  const GetActiveTabStatus = () => {
    if (TabsTriggerBuyRef.current) {
      const value = TabsTriggerBuyRef.current.getAttribute("data-state");
      if (value === "active") setTitle("Buy properties");
    }
    if (TabsTriggerRentRef.current) {
      const value = TabsTriggerRentRef.current.getAttribute("data-state");

      if (value === "active") setTitle("Search properties to rent");
    }
    if (TabsTriggerSellRef.current) {
      const value = TabsTriggerSellRef.current.getAttribute("data-state");
      if (value === "active") setTitle("Sell properties");
    }
  };
  useEffect(() => {
    GetActiveTabStatus();
  }, [TabsTriggerRentRef, TabsTriggerBuyRef, TabsTriggerSellRef]);

  return (
    <main>
      <h1 className="text-[30px] md:text-[40px] font-bold text-primary">
        {title}
      </h1>
      <div className="mt-[12px] md:mt-[16px]">
        <div>
          <Tabs defaultValue={defaultTab} className="">
            <TabsList className="grid bg-white w-full grid-cols-3 w-full md:w-[400px]">
              <TabsTrigger
                ref={TabsTriggerRentRef}
                className="TabsTrigger border-[1px] border-grayline rounded-[0px] py-[12px] rounded-tl-lg text-[16px]  md:text-[18px] font-bold"
                value="rent"
                onClick={() => GetActiveTabStatus()}
              >
                Rent
              </TabsTrigger>
              <TabsTrigger
                onClick={() => GetActiveTabStatus()}
                ref={TabsTriggerBuyRef}
                className="TabsTrigger  border-[1px] border-grayline rounded-[0px] py-[12px]  text-[16px] md:text-[18px] font-bold"
                value="buy"
              >
                Buy
              </TabsTrigger>
              <TabsTrigger
                onClick={() => GetActiveTabStatus()}
                ref={TabsTriggerSellRef}
                className="TabsTrigger  border-[1px] border-grayline rounded-[0px] py-[12px] text-[16px] rounded-tr-lg md:text-[18px] font-bold"
                value="sell"
              >
                Sell
              </TabsTrigger>
            </TabsList>
            <TabsContent
              className="mt-[17.5px] md:mt-[19.5px] w-full px-[5px] md:full rounded-tl-none rounded-tr-none "
              value="rent"
            >
              <Rent />
            </TabsContent>
            <TabsContent
              className="mt-[17.5px] md:mt-[19.5px] w-full px-[5px] md:full rounded-tl-none rounded-tr-none "
              value="buy"
            >
              <Buy />
            </TabsContent>
            <TabsContent
              className="mt-[17.5px] md:mt-[19.5px] w-full px-[5px] md:full rounded-tl-none rounded-tr-none "
              value="sell"
            >
              <Sell />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
