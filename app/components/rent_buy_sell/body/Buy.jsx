import { Keyword } from "../Keyword";
import { PaginationSBR } from "../Pagination";
import HeaderFilter from "../components/HeaderFilter";
import BuyBody from "./BuyBody";
import RentBody from "./RentBody";
import { Card } from "@/components/ui/card";

export default function Buy() {
  return (
    <div>
      <Card className="rounded-tl-none w-full rounded-tr-lg rounded-bl-lg rounded-tr-none md:rounded-tr-lg rounded-br-lg shadow-lg">
        <HeaderFilter hideDate={true} />
      </Card>
      <div>
        <Keyword />
      </div>
      <div className="mt-2">
        <BuyBody />
      </div>
      <div className="pb-[100px]">
        <PaginationSBR />
      </div>
    </div>
  );
}
