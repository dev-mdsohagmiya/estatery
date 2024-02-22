import { Card } from "@/components/ui/card";
import icon1 from "@/public/dashboard/firstcard/icon1.png";
import icon2 from "@/public/dashboard/firstcard/icon2.png";
import icon3 from "@/public/dashboard/firstcard/icon3.png";
import icon4 from "@/public/dashboard/firstcard/icon4.png";
import icon5 from "@/public/dashboard/firstcard/icon5.png";
import Image from "next/image";

function FirstCard() {
  const data = [
    { src: icon1, subtitle: "Total Properties", title: "78" },

    { src: icon2, subtitle: "For Sale", title: "22" },
    { src: icon3, subtitle: "For Rent", title: "39" },
    { src: icon4, subtitle: "Unlisted", title: "15" },
    { src: icon5, subtitle: "Unavaiable", title: "2" },
  ];
  return (
    <div>
      <div>
        <div className="grid grid-cols-12  2xl:grid-cols-10 gap-3 md:gap-5">
          {data.map((item) => (
            <div className="col-span-12 md:col-span-6 lg:col-span-4  2xl:col-span-2">
              <Card className="w-full flex items-center gap-5 p-4 border-1 border-grayline shadow-none">
                <div className="w-[56px] h-[56px]">
                  <Image className="w-full h-full" alt="" src={item.src} />
                </div>
                <div>
                  <div>
                    <h4 className="text-[14px] md:text-[16px] font-medium text-graylight ">
                      {item.subtitle}
                    </h4>
                  </div>
                  <div>
                    <h3 className="text-[25px] md:text-[30px] font-[800] text-primary">
                      {item.title}
                    </h3>
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

export default FirstCard;
