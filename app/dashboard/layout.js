import Manu from "./components/manu/Menu";

export default function RootLayout({ children }) {
  return (
    <div className="">
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Manu />
        </div>
        <div className="col-span-10">{children}</div>
      </div>
    </div>
  );
}
