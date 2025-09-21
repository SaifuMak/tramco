import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import ServicesSection from "./components/ServicesSection";
import ProductsSection from "./components/home/ProductsSection";
import SustainabilitySection from "./components/home/SustainabilitySection";
export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection />
    <WelcomeSection/>
    <ServicesSection/>
    <ProductsSection/>
    <SustainabilitySection/>
    
    </>
  );
}
