import NavLink from "./components/NavLink";

export default function SettingLayout({ children }) {
  return (
    <div>
      <div className="pl-5 pr-5 md:pr-8 py-5 bg-[#f7f7fd] h-[100vh]">
        <div className="flex gap-3">
          <div>
            <NavLink href={"/dashboard/setting"} text={"Profile"} />
          </div>
          <div>
            <NavLink
              href={"/dashboard/setting/my-account"}
              text={"My Acount"}
            />
          </div>
          <div>
            <h2></h2>
          </div>
        </div>
        <div className="w-full h-[1px] bg-grayline my-3"></div>
        {children}
      </div>
    </div>
  );
}
