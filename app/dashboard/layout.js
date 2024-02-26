import Header from "./components/Header/Header";
import Manu from "./components/manu/Menu";
import MobileNavbar from "./components/mobile_navbar/MobileNavbar";

export default function RootLayout({ children }) {
  return (
    <div className="">
      <div className="w-full max-w-[1630px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] border-grayline mx-auto  ">
        <div className="hidden md:grid md:grid-cols-12 lg:grid-cols-9 xl:grid-cols-12">
          <div className="md:col-span-3 lg:col-span-2 xl:col-span-2 ">
            <div className="relative">
              <div className="fixed  w-[28%] lg:w-[25.5%] xl:w-[16.5%] pr-10">
                <Manu />
              </div>
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
    </div>
  );
}
