import React from 'react'
import { poppins } from '../fonts'

function HeroSection() {
    return (
        <div className="w-full h-[88vh]   relative ">
            <div className="w-full h-[80%]  bg-brand-blue">

            </div>
            {/* banner */}
            <div className=" lg:w-11/12 h-full  bg-center transform -scale-x-100  bg-cover bg-no-repeat mx-auto lg:rounded-[100px]  absolute inset-0" style={{ backgroundImage: "url('/image/home/banner1.png')" }}></div>
            <div className=" lg:w-11/12   lg:rounded-[100px] flex-center max-sm:items-start  mx-auto h-full  absolute inset-0 z-10  bg-gradient-to-r from-[#001835] via-[#001835]/30 to-transparent">
                <div className="w-11/12 p-4 xl:p-10 md:p-5 h-full sm:h-9/12  flex flex-col sm:justify-between z-50">
                    <div className=" w-full flex justify-between items-center">
                        <img src="/image/home/scoll-down.svg" alt="" className=" max-md:size-10 max-xl:size-16 shrink-0 object-contain" />
                        <img src="/image/home/iso.svg" alt="" className="  size-10 lg:size-20 xl:size-28  2xl:size-36   shrink-0 object-contain" />
                    </div>
                    <div className="   max-sm:flex-center">
                        <h1 className={`${poppins.className} text-[40px] max-md:mt-44 max-sm:text-center sm:text-[80px]  md:text-[80px] lg:text-[100px] xl:text-[100px] 2xl:text-[130px] md:max-w-md leading-none font-semibold text-white`} >Sustainability for All</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection