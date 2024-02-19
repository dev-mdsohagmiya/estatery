import CardBOUL from "./Card";
import img1 from "@/public/images/basedonyour/img1.png";
import img2 from "@/public/images/basedonyour/img2.png";
import img3 from "@/public/images/basedonyour/img3.png";
import img4 from "@/public/images/basedonyour/img4.png";
import img5 from "@/public/images/basedonyour/img5.png";
import img6 from "@/public/images/basedonyour/img6.png";

export default function RentBody() {
  const rentData = [
    {
      src: img1,
      body: {
        price: "",
        title: "",
      },
    },
    {
      src: img2,
      body: {
        price: "",
        title: "",
      },
    },
    {
      src: img3,
      body: {
        price: "",
        title: "",
      },
    },
    {
      src: img4,
      body: {
        price: "",
        title: "",
      },
    },
    {
      src: img5,
      body: {
        price: "",
        title: "",
      },
    },
    {
      src: img6,
      body: {
        price: "",
        title: "",
      },
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-12 gap-5">
        {rentData.map((item) => (
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <CardBOUL src={item.src} />
          </div>
        ))}
      </div>
    </div>
  );
}
