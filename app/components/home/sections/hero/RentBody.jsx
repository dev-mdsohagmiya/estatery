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
import ButtonSearchIcon from "./ButtonSearchIcon";

export default function RentBody() {
  return (
    <div className="grid  md:flex  gap-4  md:justify-between py-5 px-5 z-30">
      <div className="col-span-12 md:col-span-3 flex ">
        <div className="flex content-between	 inline-block">
          <div>
            {" "}
            <h1 className="text-[16px] text-graylight font-medium mb-[0px]">
              Location
            </h1>
            <Select className="border-none border-0 -translate-x-[15px]">
              <SelectTrigger
                className="border-0 SelectTrigger focus-none text-primary text-[16px] md:text-[18px] font-medium -translate-x-[12px]"
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
              When
            </h1>
            <div className="-translate-x-[17px]">
              <RentDate />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 hidden  md:block flex justify-center">
        <div className="w-[1px] h-[40px] bg-grayline translate-y-7 py-2 md:py-auto"></div>
      </div>
      <div className="col-span-12 md:col-span-3 flex justify-center items-center w-full">
        <Link
          href={"#"}
          className="w-full md:w-auto"
          style={{ cursor: "pointer" }}
        >
          <Button className="px-5 py-6 w-full md:w-auto cursor-pointer">
            <ButtonSearchIcon />
            <span className="text-[16px] font-bold">Browse Properties</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
