import GlobalCard from "../components/GlobalCard";
import img1 from "@/public/images/rent/img1.png";
import img2 from "@/public/images/rent/img2.png";
import img3 from "@/public/images/rent/img3.png";
import img4 from "@/public/images/rent/img4.png";
import img5 from "@/public/images/rent/img5.png";
import img6 from "@/public/images/rent/img6.png";
import img7 from "@/public/images/rent/img7.png";
import img8 from "@/public/images/rent/img8.png";
import img9 from "@/public/images/rent/img9.png";
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
    {
      src: img7,
      body: {
        price: "",
        title: "",
      },
    },
    {
      src: img8,
      body: {
        price: "",
        title: "",
      },
    },
    {
      src: img9,
      body: {
        price: "",
        title: "",
      },
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-12 py-[35px] gap-8">
        {rentData.map((item) => (
          <div className=" col-span-12 md:col-span6-6 lg:col-span-4">
            <GlobalCard src={item.src} />
          </div>
        ))}
      </div>
    </div>
  );
}
