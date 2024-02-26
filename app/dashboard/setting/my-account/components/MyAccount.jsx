import FormAccount from "./FormAccount";

function MyAccountPage() {
  return (
    <div className="mt-8">
      <div className="bg-white p-3 md:p-5 border-[1px] border-grayline rounded-[12px] max-w-[629px]">
        <h2 className="text-[16px] md:text-[18px] font-bold text-primary">
          My Account
        </h2>
        <FormAccount />
      </div>
    </div>
  );
}

export default MyAccountPage;
