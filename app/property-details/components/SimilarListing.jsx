import GlobalCard from "@/app/components/home/sections/rent_buy_sell/components/GlobalCard";

import img1 from "@/public/images/property_details/img1.png";
import img2 from "@/public/images/property_details/img2.png";
import img3 from "@/public/images/property_details/img3.png";

function SimilarListing() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <GlobalCard src={img1} />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <GlobalCard src={img2} />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <GlobalCard src={img3} />
        </div>
      </div>
    </div>
  );
}

export default SimilarListing;
