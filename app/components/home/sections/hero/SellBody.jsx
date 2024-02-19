import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RentDate } from "./RentDate";
import Link from "next/link";
import { HeaderFilterDrop } from "@/app/components/rent_buy_sell/components/HeaderFilterDrop";
import ButtonSearchIcon from "./ButtonSearchIcon";

export default function SellBody() {
  return (
    <div className="grid  md:flex  gap-4  md:justify-between py-5 px-5">
      <div className="col-span-12 md:col-span-3 flex ">
        <div className="flex content-between	 inline-block">
          <div>
            {" "}
            <h1 className="text-[16px] text-graylight font-medium mb-[0px]">
              Location
            </h1>
            <Select className="border-none border-0 -translate-x-[15px]">
              <SelectTrigger
                className="SelectTrigger border-0 focus-none text-primary text-[16px] md:text-[18px] font-medium -translate-x-[12px]"
                variant="outline"
              >
                <SelectValue className="" placeholder="Barcelona, Spain" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>

                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="col-span-1 hidden  md:block">
        <div className="w-[1px] h-[40px] bg-grayline translate-y-7"></div>
      </div>
      <div className="col-span-12 md:col-span-3 flex ">
        <div className="flex justify-start	  inline-block ">
          <div>
            {" "}
            <h1 className="text-[16px] text-graylight  font-medium mb-[0px]">
              Price
            </h1>
            <div className="-translate-x-[17px]">
              <HeaderFilterDrop type={"$250 - $2500"} />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden  md:block w-[1px] h-[40px] bg-grayline translate-y-7"></div>

      <div className="grid gap-3">
        <div className="">
          <h1 className="text-[16px] text-graylight  font-medium mb-[0px]">
            Property Type
          </h1>
          <div className="-translate-x-[17px]">
            <HeaderFilterDrop type={"Office"} />
          </div>
        </div>
        {/* <div>
              {" "}
              <h1 className="text-[16px] text-graylight  font-medium mb-[0px]">
                Farm Appartment
              </h1>
              <div className="-translate-x-[17px]">
                <HeaderFilterDrop />
              </div>
            </div> */}
      </div>
      <div className="col-span-1 hidden  md:block flex justify-center">
        <div className="w-[1px] h-[40px] bg-grayline translate-y-7 py-2 md:py-auto"></div>
      </div>
      <div className="col-span-12 md:col-span-3 flex justify-center items-center">
        <Link className="w-full md:w-auto" href={"#"}>
          <Button className="px-5 py-6 w-full md:w-auto cursor-pointer	w-full">
            <ButtonSearchIcon />{" "}
            <span className="text-[16px] font-bold">Browse Properties</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
