import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbarr from "./components/home/sections/navbar/Navbarr";
import Hero from "./components/home/sections/hero/Hero";
import { Footer } from "./components";

const inter = Inter({ subsets: ["latin"] });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Estatery | Buy, rent, or sell your property easily.",
  description: "Estatery | Buy, rent, or sell your property easily.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className} bg-white`}>
        <Navbarr />

        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
