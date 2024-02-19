import { Keyword } from "../Keyword";
import HeaderFilter from "../components/HeaderFilter";
import RentBody from "./RentBody";
import { Card } from "@/components/ui/card";

export default function Rent() {
  return (
    <div>
      <Card className="rounded-tl-none w-full rounded-tr-lg rounded-bl-lg rounded-tr-none md:rounded-tr-lg rounded-br-lg shadow-lg">
        <HeaderFilter />
      </Card>

      <div className="mt-2">
        <RentBody />
      </div>
    </div>
  );
}
