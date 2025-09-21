import React from 'react'
import ServiceCard from './home/ServiceCard';

function ServicesSection() {

    const services = [
        {
            title: "Trading",
            img: "/image/home/trading.png",
            description:
                "Your trusted and reliable source navigating the global trade of oil products, chemicals, and sustainable resources, driving your business forward.",
        },
        {
            title: "Marine Services",
            img: "/image/home/marine.png",
            description:
                "Providing expert guidance on marine operations, regulatory compliance, and efficient logistics, powered by deep industry insight.",
        },
        {
            title: "Management Consultancies",
            img: "/image/home/consulting.png",
            description:
                "Delivering strategic business solutions, operational optimization, and comprehensive project management tailored to our client’s success.",
        },
    ];


    return ( 
        <div className="w-full h-full   bg-brand-blue relative " >
            <div
                className="absolute inset-0 min-h-[140vh] bg-cover bg-no-repeat mt-10 w-full mx-auto bg-center opacity-25"
                style={{ backgroundImage: "url('/image/home/service-pattern.png')" }}
            ></div>

            <div className="flex-col-center py-16 xl:py-28 ">
                <p className=" text-2xl  text-center text-dark-blue">SERVICES</p>
                <h3 className=" 2xl:text-[50px]   text-center xl:text-[40px] lg:text-[30px] text-2xl  mt-4 font-semibold text-brand-ash">All-in-One Solutions for Trade & Marine Services</h3>

                <div className="grid grid-cols-1 lg:grid-cols-3 mt-16 gap-12 w-11/12">
                    {services.map((item, index) => (
                        <ServiceCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServicesSection