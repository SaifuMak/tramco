"use client";
import { useState } from "react";
import { FaOilCan, FaFlask, FaRecycle, FaGasPump } from "react-icons/fa";

const products = [
    {
        id: "oil",
        title: "Oil Derivatives",
        icon: '/icons/home/oil.svg',
        description:
            "Your dedicated source for all your fuel and energy requirements, providing a seamless supply chain with products meticulously sourced from the world's most reputable refineries",
        img: "/image/home/oil.jpg",
    },
    {
        id: "chemicals",
        title: "Chemicals",
        icon: '/icons/home/chemical.svg',
        description:
            "Our expertise spans the entire value chain, providing comprehensive products for a wide range of applications, from basic chemicals, solvents, to the highly specialized feedstock for various industries",
        img: "/image/home/chemicals.jpg",
    },
    {
        id: "recycling",
        title: "Recycling",
        icon: '/icons/home/recycle.svg',
        description:
            "As part of our dedication to a greener future, we provide a variety of recycled and eco-friendly products—from recycled plastics and green fuels to re-refined engine oil—enabling our clients to achieve their own environmental goals.",
        img: "/image/home/recycling.jpg",
    },
    {
        id: "lpg",
        title: "LPG/LNG",
        icon: '/icons/home/ship.svg',
        description:
            "We specialize in the strategic supply of Liquefied Petroleum Gas (LPG) and Liquefied Natural Gas (LNG), serving a wide variety of essential applications in heating, cooking, power generation, and transportation as a cleaner, more efficient fuel source.",
        img: "/image/home/lpg.jpg",
    },
];

export default function ProductsSection() {
    const [activeTab, setActiveTab] = useState(0);


    return (

        <section className=" w-full 2xl:h-[130vh]     lg:h-[130vh] relative  z-20">

            <div className=" h-[80%]  w-full  bg-brand-blue"></div>

            <div className="w-11/12 h-full   absolute  inset-0 bg-[#001C4A] rounded-[49px] text-white py-20 xl:py-24 2xl:py-28 mx-auto ">

                <div className="w-full mx-auto text-center xl:px-10">
                    <h3 className="text-green-500 text-2xl uppercase ">
                        Products
                    </h3>
                    <h3 className=" 2xl:text-[50px]   text-center xl:text-[40px] lg:text-[30px] text-2xl  mt-4 font-semibold text-white"> Fueling your growth with our expertise in global trade.</h3>


                    <div className=" w-11/12 lg:mt-16  xl:mt-20   relative overflow-hidden   rounded-[50px] min-h-[90vh]  bg-cover bg-no-repeat mx-auto bg-center" style={{ backgroundImage: "url('/image/home/products-banner.png')" }}>


                        <div className=" absolute inset-0 w-full h-full  ">

                            <div className="grid grid-cols-2 md:grid-cols-4 h-full   ">
                                {products.map((product, index) => (
                                    <div key={product.id}  className=" ">
                                        <div onClick={() => setActiveTab(index)}  className={` ${index !== 0 ? 'border-l' : 'border-l'} ${index === 3 && 'border-r' }  border-t border-white/20  cursor-pointer bg-[#001C4A]  py-9`}>
                                            <div className="flex-center space-x-2 2xl:space-x-3 ">
                                                <img src={product.icon} alt="" className=" size-8 2xl:size-10 shrink-0 object-contain" />
                                                <h3 className=" font-light text-xl 2xl:text-2xl">{product.title}</h3>
                                            </div>

                                        </div>
                                        <div className={` transition-all ${activeTab === index ? 'opacity-100' : 'opacity-0'} duration-700 ease-in-out  h-[90%] bg-[#0240A380]/70 pb-12 px-5  2xl:px-7 flex items-end  backdrop-blur-xl`}  >
                                            <div className=" 2xl:min-h-52 lg:min-h-64  ">
                                                <p className=" font-light text-base 2xl:leading-8 xl:leading-7  text-start">{product.description}</p>
                                            </div>
                                        </div>

                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>




                </div>

            </div>

        </section>
    );
}
