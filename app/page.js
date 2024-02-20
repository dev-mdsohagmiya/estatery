import Hero from "./components/home/sections/hero/Hero";
import { BasedOnYourLocation, NewWay, NewsLetter, Tenants } from "./components";

export default function Home() {
  return (
    <main>
      <Hero />
      <Tenants />
      <NewWay />
      <BasedOnYourLocation />
      <NewsLetter />
    </main>
  );
}
