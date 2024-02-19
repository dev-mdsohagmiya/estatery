import HeaderAndBody from "./components/HeaderAndBody";

export default function RentBuySellPage({ defaultTab }) {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-2 md:px-8 py-[65px]">
      <div>
        <HeaderAndBody defaultTab={defaultTab} />
      </div>
    </div>
  );
}
