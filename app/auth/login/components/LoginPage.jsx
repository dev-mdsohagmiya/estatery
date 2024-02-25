import Image from "next/image";
import LoginForm from "./LoginForm";
import logo from "@/public/logoblack.png";
import Link from "next/link";
import FormixPage from "./FormixPage";
function LoginPage() {
  return (
    <div className="h-[525px]">
      <FormixPage />
      <div>
        <div className=" w-[134px] h-[40px] ">
          <Link href={"/"}>
            {" "}
            <Image className="select-none" src={logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="pt-[15px] md:pt-[40px]">
        <div>
          <h2 className="font-bold text-[27px] md:text-[31px] text-primary ">
            Log in
          </h2>
        </div>
        <div>
          <h3 className="text-medium text-[14px] md:text-[16px] text-graylight py-2">
            Welcome back! Please enter your details.
          </h3>
        </div>
      </div>
      <div className="py-[10px] md:py-[16px] ">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
