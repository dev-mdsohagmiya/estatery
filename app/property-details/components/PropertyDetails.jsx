import SimilarListing from "./SimilarListing";
import BreadcrumbSec from "./breadcrumbs/BreadcrumbSec";
import DetailsOne from "./details_one/DetailsOne";
import DetailsTwo from "./details_two/DetailsTwo";
import Header from "./header/Header";
import PhotoFrame from "./photo-frame/PhotoFrame";

export default function PropertyDetails() {
  return (
    <div className="py-6 md:py-8">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8 ">
        <div className="grid gap-3 md:gap-7">
          <div>
            <BreadcrumbSec />
          </div>
          <div>
            <Header />
          </div>
          <div>
            <PhotoFrame />
          </div>
          <div>
            <DetailsOne />
          </div>
          <div></div>
        </div>
      </div>
      <div className="bg-[#f8f8ff] py-5 mt-5 md:mt-20 md:py-20">
        <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8 ">
          <div>
            <h2 className="text-primary text-[23px] md:text-[25px] font-bold mb-5 md:mb-14">
              Similar listings
            </h2>
          </div>
          <SimilarListing />
        </div>
      </div>
    </div>
  );
}
