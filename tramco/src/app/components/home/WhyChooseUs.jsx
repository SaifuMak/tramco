import React from 'react'
import WhyChooseUsCard from './WhyChooseUsCard';
function WhyChooseUs() {


    const features = [
        {
            id: 1,
            title: "Reliable Sourcing",
            description:
                "Our robust sourcing network ensures a consistent and uninterrupted supply of materials, so you can always meet your business needs.",
            icon: '/icons/home/24-support.svg',
        },
        {
            id: 2,
            title: "One-Stop-Shop",
            description:
                "Our diverse portfolio of products and services provides you with a single, trusted partner for all your needs.",
            icon: '/icons/home/global-search.svg',
        },
        // {
        //     id: 3,
        //     title: "The Go-To Experts",
        //     description:
        //         "We go beyond a simple transaction, providing in-depth insights and specialized consulting to help you make informed decisions.",
        //     icon: '/icons/home/verified.svg',
        // },
        {
            id: 4,
            title: "Precision and Speed",
            description:
                "From start to finish, our expert-managed supply chain guarantees that your products arrive safely and on time, every time.",
            icon: '/icons/home/protection.svg',
        },
        {
            id: 5,
            title: "Eco-Conscious Operations",
            description:
                "We actively work to reduce carbon emissions by providing eco-friendly products and services, helping to create a healthier planet for all.",
            icon: '/icons/home/verified.svg',
        },
    ];

    return (
        <div className="  relative" >
            <div className="absolute top-0 left-0 w-full h-[70%] bg-white"></div>
            {/* Bottom 30% blue */}
            <div className="absolute bottom-0 left-0 w-full h-[30%]  bg-brand-blue"></div>

            <div className=" relative w-11/12  flex z-10 bg-[#001C4A]   mx-auto rounded-[50px]   " >
                <div
                    className="absolute w-full inset-0 h-full  bg-cover bg-no-repeat  bg-center opacity-10"
                    style={{ backgroundImage: "url('/image/home/ship.png')" }}
                >
                </div>

                <div className=" py-24  mx-auto w-11/12 full text-white  ">

                    <div className="  text-center space-y-6">
                        <h3 className=" text-2xl uppercase  text-[#00D48F]">
                            WHY CHOOSE US
                        </h3>
                        <h3 className=" 2xl:text-[50px]  xl:text-[40px] lg:text-[30px] text-2xl   font-semibold  ">Delivering Promises </h3>
                    </div>

                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-16 xl:mt-20">
                        {features.map((item, index) => (
                            <WhyChooseUsCard key={index} item={item} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WhyChooseUs