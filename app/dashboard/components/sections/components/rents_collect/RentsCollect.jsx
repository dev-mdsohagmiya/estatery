import img1 from "@/public/dashboard/rent_collect/img1.png";
import icon1 from "@/public/dashboard/rent_collect/icon1.png";
import icon2 from "@/public/dashboard/rent_collect/icon2.png";
import icon3 from "@/public/dashboard/rent_collect/icon3.png";
import icon4 from "@/public/dashboard/rent_collect/icon4.png";
import inimg from "@/public/dashboard/rent_collect/in.png";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { list } from "postcss";
function RentsCollect() {
  const listData = [
    {
      src: icon1,
      title: "House",
      number: "784",
      current: "+235",
    },
    {
      src: icon2,
      title: "Farms",
      number: "19,15",
      current: "+20",
    },
    {
      src: icon3,
      title: "Apartment",
      number: "12,15",
      current: "+20",
    },
    {
      src: icon4,
      title: "Office",
      number: "221",
      current: "+12",
    },
  ];
  return (
    <div className="grid grid-cols-12 xl:grid-cols-10 gap-3 md:gap-5 py-3 md:py-5">
      <div className="col-span-12 xl:col-span-6">
        <div className="h-[200px] md:h-[263px]">
          <Image className="w-full h-full" alt="" src={img1} />
        </div>
      </div>
      <div className="col-span-12 xl:col-span-4">
        <div className="grid grid-cols-12 gap-3 md:gap-5">
          {listData.map((item) => (
            <div className="col-span-12 md:col-span-6">
              <Card className="border-1 border-grayline rounded-md shadow-none p-3 md:p-5">
                <div className="">
                  <div className="flex gap-3 md:gap-5">
                    <div className="w-[41px] h-[41px]">
                      <Image className="w-full h-full" alt="" src={item.src} />
                    </div>
                    <div>
                      <h3 className="text-[18px] md:text-[20px] font-medium text-graylight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-3 md:gap-5 pt-2 ">
                    <div className="">
                      <h4 className="text-[18px] md:text-[20px] font-bold text-primary">
                        {item.number}
                      </h4>
                    </div>
                    <div className="flex items-end w-full justify-end">
                      <div className="w-[19px] h-[7.75px]">
                        <Image className="w-full h-full" alt="" src={inimg} />
                      </div>
                      <h4 className="text-[13px] md:text-[14px] font-bold text-[#23C55E]">
                        {item.current}
                      </h4>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RentsCollect;
