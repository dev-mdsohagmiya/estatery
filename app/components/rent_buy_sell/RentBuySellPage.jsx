import HeaderAndBody from "./components/HeaderAndBody";

export default function RentBuySellPage({ defaultTab }) {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8 py-[25px] md:py-[35px]">
      <div>
        <HeaderAndBody defaultTab={defaultTab} />
      </div>
    </div>
  );
}
