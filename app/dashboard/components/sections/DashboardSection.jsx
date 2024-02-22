import FirstCard from "./components/first_card/FirstCard";
import RentsCollect from "./components/rents_collect/RentsCollect";

function DashboardSection() {
  return (
    <div className="pl-5 pr-5 md:pr-8 py-5 bg-[#f7f7fd] h-[100vh] ">
      <div>
        <div>
          <FirstCard />
        </div>
        <div>
          <RentsCollect />
        </div>
      </div>
    </div>
  );
}

export default DashboardSection;
