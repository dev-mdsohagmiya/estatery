import Manu from "./components/manu/Menu";
import MobileNavbar from "./components/mobile_navbar/MobileNavbar";

export default function RootLayout({ children }) {
  return (
    <div className="">
      <div className="hidden md:grid md:grid-cols-12 lg:grid-cols-9 xl:grid-cols-12">
        <div className="md:col-span-3 lg:col-span-2 xl:col-span-2">
          <Manu />
        </div>
        <div className="md:col-span-9 lg:col-span-7 xl:col-span-10">
          {children}
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
