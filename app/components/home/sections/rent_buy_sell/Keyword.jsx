import { Button } from "@/components/ui/button";
import plus from "@/public/images/rent_buy_sell/icon/plus.png";
import close from "@/public/images/rent_buy_sell/icon/close.png";
import Image from "next/image";
import { useState } from "react";

export function Keyword() {
  const [selectedIndex, setSelectedIndex] = useState([]);

  const keyData = [
    {
      id: 1,
      text: "Add More",
    },
    {
      id: 2,
      text: "For Sell By Agent",
    },
    {
      id: 3,
      text: "New Construction",
    },
    {
      id: 4,
      text: "Year Built 5 -15",
    },
    {
      id: 5,
      text: "Square Feet 750-2000 sq.ft",
    },
    {
      id: 6,
      text: "Bathrooms 2+",
    },
    {
      id: 7,
      text: "Bathrooms 2+",
    },
  ];

  const handleSelection = (item) => {
    if (selectedIndex.some((selectedItem) => selectedItem.id === item.id)) {
      setSelectedIndex((prev) =>
        prev.filter((selectedItem) => selectedItem.id !== item.id),
      );
    } else {
      setSelectedIndex((prev) => [...prev, item]);
    }
  };

  return (
    <div className="py-5">
      {keyData.map((item, index) => (
        <Button
          onClick={() => handleSelection(item)}
          key={item.id}
          className={`text-[14px] md:text-[16px] hover:bg-[#ebebed] font-medium text-primary  py-4 m-[5px] md:m-[6px] ${
            selectedIndex.some((selectedItem) => selectedItem.id === item.id)
              ? "bg-[#ebebed]"
              : ""
          }`}
          variant="outline"
        >
          <div className="flex justify-between">
            {item.text}
            <Image
              alt=""
              src={
                selectedIndex.some(
                  (selectedItem) => selectedItem.id === item.id,
                )
                  ? close
                  : plus
              }
              className={`ml-3 ${
                selectedIndex.some(
                  (selectedItem) => selectedItem.id === item.id,
                )
                  ? "h-[12px] translate-y-[7px]"
                  : "h-[15px] translate-y-[5px]"
              }`}
            />
          </div>
        </Button>
      ))}
    </div>
  );
}
