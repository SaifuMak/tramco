import React from 'react'
import { poppins } from '../fonts'

function WelcomeSection() {
    return (
        <div className="w-full relative min-h-screen  2xl:mt-10  ">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-no-repeat w-11/12 mx-auto bg-center opacity-5"
                style={{ backgroundImage: "url('/image/home/map.png')" }}
            ></div>

            {/* Content */}
            <div className="relative lg:w-10/12 w-11/12  max-lg:text-center  mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-x-20 md:gap-x-10 2xl:gap-x-44  xl:gap-x-32 lg:py-28  py-16  xl:py-32">


                <div className=' space-y-6 xl:space-y-10'>
                    <h2 className={`${poppins.className} text-4xl  lg:text-nowrap  md:text-[40px] xl:text-[50px] 2xl:text-[60px] font-semibold`}>
                        Welcome to TRAMCO
                    </h2>

                    <h2 className={` 2xl:text-[150px] xl:text-[110px] lg:text-[90px] md:text-[70px] text-5xl  text-light-ash font-extrabold `}>
                        TRAMCO
                    </h2>
                    <p className=" 2xl:text-2xl xl:text-xl md:text-lg mb-6 font-light leading-8 md:leading-9 xl:leading-10  2xl:leading-11  text-brand-black ">
                        Tramco is proud to stand at the forefront of excellence in trading, marine consultancy, and management services.
                        Founded by visionary entrepreneurs in the Middle East, the company is built on a foundation of integrity, innovation,
                        and an unwavering commitment to delivering sustainable value to clients, partners, and stakeholders alike.
                    </p>


                    <p className="2xl:text-2xl xl:text-xl md:text-lg mb-6 font-light leading-8 md:leading-9 xl:leading-10  2xl:leading-11 text-brand-black ">
                        Tramco was established to address the evolving needs of global commerce and maritime management.
                        Our shared values and pursuit of distinction ensure we remain steadfast in our commitment to excellence.
                        Our brand combines the essence of trade, marine expertise, and management solutions.
                    </p>
                </div>

                <div className='mt-5   w-full h-[80vh] xl:h-screen '>
                    <img
                        src="/image/home/car.png"
                        alt="Side visual"
                        className="  w-full h-full  object-cover rounded-4xl "
                    />
                </div>
            </div>
        </div>



    )
}

export default WelcomeSection