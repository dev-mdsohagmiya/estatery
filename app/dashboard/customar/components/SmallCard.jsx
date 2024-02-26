import img1 from "@/public/dashboard/customar/img1.png";
import icon1 from "@/public/dashboard/customar/icon/icon1.png";
import icon2 from "@/public/dashboard/customar/icon/icon2.png";
import icon3 from "@/public/dashboard/customar/icon/icon3.png";
import Image from "next/image";
function SmallCard({ details }) {
  console.log(details);
  return (
    <div className="flex  gap-3 grid-cols-12">
      <div className="col-span-3">
        <div className="w-[80px] h-[53px]">
          <Image
            alt=""
            src={details.src}
            className="w-full h-full select-none"
          />
        </div>
      </div>
      <div className="col-span-9 ">
        <div className="">
          <div>
            <h1 className="font-bold text-[14px] md:text-[16px] text-[#8B8C93]">
              {details.name}
            </h1>
          </div>

          <div className="flex gap-4 items-end pt-1">
            <div className="flex gap-1">
              <div className="h-[24px] w-[24px]">
                <Image
                  className="w-full h-full select-none"
                  alt=""
                  src={icon1}
                />
              </div>
              <div>
                <h3 className="font-medium text-[13px] md:text-[14px] text-[#8B8C93]">
                  {details.beds} Beds
                </h3>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="h-[24px] w-[24px]">
                <Image
                  className="w-full h-full select-none"
                  alt=""
                  src={icon2}
                />
              </div>
              <div>
                <h3 className="font-medium text-[13px] md:text-[14px] text-[#8B8C93]">
                  {details.bathroom} Bathrooms
                </h3>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="h-[24px] w-[24px]">
                <Image
                  className="w-full h-full select-none"
                  alt=""
                  src={icon3}
                />
              </div>
              <div>
                <h3 className="font-medium text-[13px] md:text-[14px] text-[#8B8C93]">
                  {details.size}
                </h3>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
