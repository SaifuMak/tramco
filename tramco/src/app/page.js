import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import ServicesSection from "./components/ServicesSection";
export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection />
    <WelcomeSection/>
    <ServicesSection/>
    </>
  );
}
