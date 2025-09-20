import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection />
    <WelcomeSection/>
    </>
  );
}
