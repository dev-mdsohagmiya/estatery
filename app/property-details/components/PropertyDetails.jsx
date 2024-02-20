import BreadcrumbSec from "./breadcrumbs/BreadcrumbSec";
import Header from "./header/Header";

export default function PropertyDetails() {
  return (
    <div className="py-6 md:py-8">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8 ">
        <div className="grid gap-4">
          <div>
            <BreadcrumbSec />
          </div>
          <div>
            <Header />
          </div>
        </div>
      </div>
    </div>
  );
}
