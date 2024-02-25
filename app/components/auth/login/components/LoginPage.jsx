import { Input } from "@/components/ui/input";

function LoginPage() {
  return (
    <div className="border-[1px] p-3 rounded-md shadow-md max-w-[668px] mx-auto md:p-5 border-grayline mt-4 md:mt-8">
      <div>
        <h2 className="text-primary text-[16px] md:text-[18px] font-[600] pb-2 md:pb-4">
          Personal Information
        </h2>
      </div>
      <div>
        <input
          className="h-[42px] w-full rounded px-2 bg-[#f7f7fd] placeholder:text-[14px] placeholder:text-[#525356] placeholder:font-normal border-[1px] shadow-none border-grayline focus:outline-none outline-none ring-0 focus:ring-0          "
          type="email"
          placeholder="David"
        />
      </div>
    </div>
  );
}

export default LoginPage;
