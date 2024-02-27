import FirstCard from "./components/first_card/FirstCard";
import RentsCollect from "./components/rents_collect/RentsCollect";
import TenantRequest from "./components/tenant_request/TenantRequest";

function DashboardSection() {
  return (
    <div className="pl-5 pr-5 md:pr-8 py-5 bg-[#f7f7fd]">
      <div className="pb-3 block md:hidden">
        <h2 className="font-bold text-[22px] md:[28px] text-primary">
          Dashboard
        </h2>
      </div>
      <div>
        <div>
          <FirstCard />
        </div>
        <div>
          <RentsCollect />
        </div>
        <TenantRequest />
      </div>
    </div>
  );
}

export default DashboardSection;
