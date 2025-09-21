import { poppins } from '@/app/fonts'
import React from 'react'

function WhyChooseUsCard({item}) {
    return (
        <div
            key={item.id}
            className="bg-[#375079] z-10  shadow-lg text-white rounded-xl 2xl:px-8 px-4 2xl:py-12 py-8 flex flex-col items-center text-center hover:shadow-2xl transition"
        >
            <img src={item.icon} alt="" className=" size-9 object-contain" />
            <h3 className={`2xl:text-2xl text-xl  font-medium my-4  xl:my-5 ${poppins.className}`}>
                {item.title}
            </h3>
            <p className=" text-base 2xl:text-lg font-light leading-7 ">{item.description}</p>
        </div>
    )
}

export default WhyChooseUsCard