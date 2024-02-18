import { Button } from "@/components/ui/button";
import Image from "next/image";
import rightIcon from "@/public/icons/rightarrow.png";
export const ForTenantsBody = () => (
  <div className="mt-[35px]">
    <div className="grid gap-[15px] md:gap-[24px] ">
      <div>
        <h4 className="text-[30px] md:text-[35px]  font-bold text-primary leading-[56px]">
          We make it easy for tenants and landlords.
        </h4>
      </div>
      <div>
        <p className="font-medium text-[14px]  md:text-[16px] text-graylight">
          Whether it’s selling your current home, getting financing, or buying a
          new home, we make it easy and efficient. The best part? you’ll save a
          bunch of money and time with our services.
        </p>
      </div>
      <div>
        <Button className="rounded-[8px] text-white px-[30px] font-bold py-[22px]">
          See More{" "}
          <Image
            className="translate-y-[1.1px]  md:translate-y-[3px] ml-[8px] "
            src={rightIcon}
          />
        </Button>
      </div>
    </div>
  </div>
);
