import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import WorkStrip from "@/components/WorkStrip";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="absolute top-0 w-full z-10">
        <Navbar />
      </header>
      <main className="w-full min-h-screen">
        <Hero/>
        <Portfolio/>
      </main>
      <footer></footer>
    </>
  );
}
