import GlobalCard from "../components/GlobalCard";
// ffdfdf
export default function SellBody() {
  return (
    <div>
      <div className="grid grid-cols-12 py-[35px] gap-8">
        <div className=" col-span-12 md:col-span6-6 lg:col-span-4">
          <GlobalCard />
        </div>
        <div className=" col-span-12 md:col-span6-6 lg:col-span-4">
          <GlobalCard />
        </div>
        <div className=" col-span-12 md:col-span6-6 lg:col-span-4">
          <GlobalCard />
        </div>
        <div className=" col-span-12 md:col-span6-6 lg:col-span-4">
          <GlobalCard />
        </div>
        <div className=" col-span-12 md:col-span6-6 lg:col-span-4">
          <GlobalCard />
        </div>
        <div className=" col-span-12 md:col-span6-6 lg:col-span-4">
          <GlobalCard />
        </div>
      </div>
    </div>
  );
}
