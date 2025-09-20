import { poppins } from '@/app/fonts'
import React from 'react'

function ServiceCard({ item }) {
    return (
        <div
            className="p-10 group bg-white relative z-10 2xl:h-[480px] xl:h-[440px] lg:h-[400px] h-[400px] overflow-hidden rounded-3xl bg-cover bg-no-repeat bg-center  transition"
            style={{ backgroundImage: `url(${item.img})` }}
        >

            <div className=" lg:w-10/12 w-11/12  min-h-4/12 cursor-pointer group-hover:translate-y-0 delay-75 transition-all duration-1000 ease-in-out  group-hover:lg:bg-[#0240A380] max-lg:bg-[#0240A380]/50   2xl:translate-y-[130px] xl:translate-y-[160px] lg:translate-y-[200px] rounded-t-3xl max-lg:backdrop-blur-md group-hover:lg:backdrop-blur-xl absolute bottom-0 lg:-left-4 -left-3 lg:px-10 px-8  py-5  flex  flex-col justify-end  ">
                <div className=" text-white flex-col flex   ">
                    <h2 className={`text-xl  mb-3 ${poppins.className}`}>{item.title}</h2>
                    <p className="  font-extralight text-sm md:leading-7 xl:leading-8  lg:opacity-0 group-hover:opacity-100  transition-all duration-700 ">{item.description}</p></div>
                <div className="flex justify-end  ">
                    <img src="/image/home/right-icon.svg" alt="" className=" size-6 object-contain" />
                </div>
            </div>
        </div>
    )
}

export default ServiceCard