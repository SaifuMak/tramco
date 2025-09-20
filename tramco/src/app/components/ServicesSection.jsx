import React from 'react'
import ServiceCard from './home/ServiceCard';

function ServicesSection() {

   const services = [
  {
    title: "Trading",
    img: "/image/home/trading.png",
    description:
      "Providing trusted expertise in global trade of oil products, chemicals, and sustainable resources, helping businesses grow with confidence.",
  },
  {
    title: "Marine",
    img: "/image/home/marine.png",
    description:
      "Offering innovative marine solutions that ensure efficiency, safety, regulatory compliance, and sustainability across global waters worldwide.",
  },
  {
    title: "Consulting",
    img: "/image/home/consulting.png",
    description:
      "Delivering expert consulting services with tailored strategies, valuable insights, and sustainable practices to drive long-term business success.",
  },
];


    return (
        <div className="w-full h-full  bg-brand-blue relative " >
            <div
                className="absolute inset-0 min-h-[140vh] bg-cover bg-no-repeat mt-10 w-full mx-auto bg-center opacity-25"
                style={{ backgroundImage: "url('/image/home/service-pattern.png')" }}
            ></div>

            <div className="flex-col-center py-16 xl:py-28 ">
                <p className=" text-2xl  text-center text-dark-blue">SERVICES</p>
                <h3 className=" 2xl:text-[50px]   text-center xl:text-[40px] lg:text-[30px] text-2xl  mt-4 font-semibold text-brand-ash">All-in-One Solutions for Trade & Marine Services</h3>

                <div className="grid grid-cols-1 lg:grid-cols-3 mt-16 gap-12 w-11/12">
                    {services.map((item, index) => (
                     <ServiceCard key={index} item={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServicesSection