import { poppins } from "@/app/fonts";
import React from "react";

function ContactSection() {
    return (

        <div className=" w-full  z-0 pt-16 bg-brand-blue ">
            <div className=" mx-auto text-center   ">
                <h2 className={`  z-30 2xl:text-[150px] leading-none xl:text-[110px] lg:text-[90px] md:text-[70px] text-5xl  text-[#DDE3EC] font-extrabold `}>
                    CONTACT US
                </h2>
            </div>

            <div className="w-full  bg-brand-blue relative xl:py-12 py-7 -mt-3">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-no-repeat w-full mx-auto bg-center opacity-5"
                    style={{ backgroundImage: "url('/image/home/map.png')" }}
                ></div>

                <div className="2xl:w-10/12 w-11/12 mx-auto h-full text-white  ">
                    <div className="flex w-full h-full gap-4  min-h-[60vh]">
                        {/* Left column - 30% width */}

                        <div className="w-[30%]   flex flex-col gap-3 z-10">
                            <div className=" w-full h-full rounded-3xl bg-dark-ash flex items-center  px-8">
                                <img src="/icons/home/email.svg" alt="email" className=" size-8 xl:size-10  object-contain" />
                                <div className="ml-5 space-y-2">
                                    <h6 className={` ${poppins.className}  text-xl xl:text-2xl font-medium`}>Email:</h6>
                                    <p className=" max-xl:text-sm font-light">info@tramcome.com</p>
                                </div>
                            </div>

                            <div className=" w-full h-full rounded-3xl flex items-center  bg-dark-ash px-8">
                                <img src="/icons/home/call.svg" alt="call" className=" size-8 xl:size-10  object-contain" />
                                <div className="ml-5 space-y-2  text-nowrap">
                                    <h6 className={` ${poppins.className} text-xl xl:text-2xl font-medium`}>Phone:</h6>
                                    <p className=" font-light px-6 max-xl:text-sm py-1 rounded-full bg-white/25">971-55 146 6409</p>
                                    <p className=" font-light px-6 max-xl:text-sm  py-1 rounded-full bg-white/25">966-55 200 8990</p>

                                </div>  
                            </div>

                            <div className=" w-full h-full  rounded-3xl flex items-center bg-dark-ash px-8">
                                <img src="/icons/home/map.svg" alt="map" className=" size-8 xl:size-10  object-contain" />
                                <div className="ml-5 space-y-2">
                                    <h6 className={` ${poppins.className} text-xl xl:text-2xl font-medium`}>Email:</h6>
                                    <p className=" font-light max-xl:text-sm">A2, IFZA, Dubai Digital Park, Silicon Oasis, Dubai, UAE</p>
                                </div>
                            </div>

                        </div>


                        {/* Middle column - 40% width */}
                        <div className="w-[40%]  z-10 rounded-3xl overflow-hidden   bg-cover bg-no-repeat  bg-center  p-4 shadow flex items-center justify-center"
                            style={{ backgroundImage: "url('/image/home/map-demo.png')" }}>
                        </div>

                        {/* Right column - 30% width */}
                        <div className="w-[30%]   flex flex-col gap-3 z-10">
                            <div className=" w-full h-full rounded-3xl bg-cover bg-no-repeat  overflow-hidden bg-center relative "
                                style={{ backgroundImage: "url('/image/home/island.png')" }}>
                                <div className=" absolute inset-0 w-full  bg-gradient-to-t flex items-end from-[#001C4A] to-[#001C4A]/10 ">
                                    <div className=" space-y-2 p-6 ">
                                        <h6 className={` ${poppins.className}  text-xl xl:text-2xl font-medium`}>Quick Support:</h6>
                                        <div className="  font-light flex text-lg max-xl:text-sm">
                                            <p className="">Emergency Helpline:</p>
                                            <div className="ml-1">
                                                <p className="  "> 971-55 146 6409
                                                </p>
                                                <p className=""> 966 - 55 200 8990</p>
                                            </div>
                                        </div>
                                    </div></div>
                            </div>

                            <div className=" w-full h-full rounded-3xl bg-cover bg-no-repeat  overflow-hidden bg-center relative "
                                style={{ backgroundImage: "url('/image/home/island.png')" }}>
                                <div className=" absolute inset-0 w-full  bg-gradient-to-t flex items-end from-[#001C4A] to-[#001C4A]/10 ">
                                    <div className=" space-y-2 p-6 ">
                                        <h6 className={` ${poppins.className}  text-xl xl:text-2xl font-medium`}>Business Hours:</h6>
                                        <div className="  font-light flex text-lg max-xl:text-sm">
                                            <p className="">Mon–Sat, 9:00 AM – 7:00 PM</p>
                                        </div>
                                    </div></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;
