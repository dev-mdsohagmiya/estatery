import Image from "next/image";
import Header from "./Header/Header";
import Menu from "./manu/Menu";
import MobileNavbar from "./mobile_navbar/MobileNavbar";

export default function DashbaordPage() {
  return (
    <div>
      <div className="hidden md:block">
        <div>
          <Header />
        </div>
      </div>
    </div>
  );
}
