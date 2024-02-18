import { Avatar, Button, Badge } from "@nextui-org/react";
import Image from "next/image";
import Hero from "./components/home/sections/Hero";
import {
  AppDownload,
  BasedOnYourLocation,
  Footer,
  NewWay,
  NewsLetter,
  Questions,
  Reference,
  Tenants,
} from "./components";

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
