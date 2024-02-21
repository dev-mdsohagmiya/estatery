import { Button } from "@/components/ui/button";
import search from "@/public/dashboard/header/search.png";
import user from "@/public/dashboard/header/user.png";
import Image from "next/image";
import { UserButton } from "./UserButton";
import { Notification } from "./Notification";
import { SearchBox } from "./SearchBox";

function Header() {
  return (
    <div className="border-b-1 border-grayline py-5 px-5 md:px-8  ">
      <div className="flex  justify-between items-center">
        <div>
          <h2 className="font-bold text-[22px] md:[28px] text-primary">
            Dashboard
          </h2>
        </div>
        <div>
          <div className="flex gap-5 items-center">
            <div>
              <SearchBox />
            </div>
            <div>
              <Notification />
            </div>
            <div>
              <div className="h-[40px] w-[1px] bg-grayline"></div>
            </div>
            <div>
              <UserButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
