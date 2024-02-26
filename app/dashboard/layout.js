import Header from "./components/Header/Header";
import Manu from "./components/manu/Menu";
import MobileNavbar from "./components/mobile_navbar/MobileNavbar";

export default function RootLayout({ children }) {
  return (
    <div className="">
      <div className="hidden md:grid md:grid-cols-12 lg:grid-cols-9 xl:grid-cols-12">
        <div className="md:col-span-3 lg:col-span-2 xl:col-span-2 relative">
          <div className="fixed  w-[28%] lg:w-[25.5%] xl:w-[18.5%] pr-10">
            <Manu />
          </div>
        </div>
        <div className="md:col-span-9 lg:col-span-7 xl:col-span-10 relative">
          <div className="">
            <div className="">
              <Header />
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
      <div className="block md:hidden">
        <div>
          <MobileNavbar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
