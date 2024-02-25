import LoginPage from "@/app/components/auth/login/components/LoginPage";
import HeroLeftCard from "@/app/components/home/sections/hero/HeroLeftCard";

export default function Login() {
  return (
    <div className=" w-full max-w-[1280px] mx-auto px-5 md:px-8  h-[100vh] ">
      <div className="grid grid-cols-12 h-[100%] ">
        <div className="col-span-12 md:col-span-6 lg:col-span-5 md:border-r-1 md:border-grayline px-10 h-[100%] grid items-center justify-center">
          <div className=" max-w-[333px] pb-[50px] md:pb-0">
            <LoginPage />
          </div>
        </div>
        <div className="hidden md:col-span-6 lg:col-span-7 md:grid items-center">
          <div className="grid items-center ">
            <div className="relative col-span-12 lg:col-span-5  xl:col-span-7  grid justify-center bg-no-repeat bg-[url('/images/hero/heroright.png')] w-full	md:h-[580px]">
              <div className="w-full md:w-[180px] mt-[80px] lg:mt-[110px] z-10">
                <HeroLeftCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
