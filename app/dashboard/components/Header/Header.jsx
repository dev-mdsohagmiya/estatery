import { Button } from "@/components/ui/button";
import search from "@/public/dashboard/header/search.png";
import user from "@/public/dashboard/header/user.png";
import Image from "next/image";
import { UserButton } from "./UserButton";
import { Notification } from "./Notification";
import { SearchBox } from "./SearchBox";

function Header({ mobile }) {
  return (
    <div className="md:border-b-1 md:border-grayline md:py-5 pl-5 md:pl-5 md:px-8  ">
      <div className="flex  justify-between items-center">
        <div className={`${mobile ? "hidden" : ""}`}>
          <h2 className="font-bold text-[22px] md:[28px] text-primary">
            Dashboard
          </h2>
        </div>
        <div>
          <div className="flex gap-3 md:gap-5 items-center">
            <div className={`${mobile ? "hidden" : ""}`}>
              <SearchBox />
            </div>
            <div>
              <Notification />
            </div>
            <div className={`${mobile ? "hidden" : ""}`}>
              <div className={`h-[40px] w-[1px] bg-grayline `}></div>
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
