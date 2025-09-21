import { poppins } from '@/app/fonts'
import React from 'react'


function SustainabilitySection() {
    return (
        <div className=" w-full h-auto relative overflow-hidden  bg-brand-blue xl:my-28 lg:my-16 justify-end  flex "  >

            <div
                className="absolute inset-0 h-full  bg-cover bg-no-repeat mt-10 w-6/12 bg-center opacity-5"
                style={{ backgroundImage: "url('/image/home/sustainable-pattern.png')" }}
            ></div>
            <div className=" w-11/12 grid grid-cols-12 2xl:gap-24 xl:gap-16 gap-10 ">
                <div className=" pt-16  2xl:pt-24 2xl:pb-32 pb-24 space-y-8 flex  flex-col col-span-6 2xl:col-span-5">
                    <h3 className="text-[#0240A3] text-2xl uppercase ">
                        Sustainability
                    </h3>
                    <h3 className=" 2xl:text-[50px]  xl:text-[40px] lg:text-[30px] text-2xl   font-semibold  text-brand-ash">Pioneering a Greener Tomorrow</h3>
                    <p className=" text-brand-black font-light leading-9 2xl:leading-11  text-lg  xl:text-xl 2xl:text-2xl">At Tramco, we are dedicated to a sustainable planet.
                        We provide world-class ESG & Marine services and expert consulting, helping businesses minimize their environmental impact.
                        By actively trading recycled materials and waste products, we close the loop on waste, turning today's refuse into tomorrow's resources.
                        We are not just a company; we are a commitment to a healthier, greener world.</p>
                </div>

                <div
                    className="w-full h-full  p-2 shrink-0 z-0 relative bg-cover bg-no-repeat bg-center col-span-6 2xl:col-span-7"
                    style={{ backgroundImage: "url('/image/home/island.png')" }}
                >
                    <div className="absolute bottom-0 flex justify-center left-0 backdrop-blur-xl w-full h-20 xl:h-24 z-10 bg-[#0240A380]">
                        <h2 className={`text-white ${poppins.className} lg:text-[50px] xl:text-[70px] 2xl:text-[90px] leading-none -mt-7 xl:-mt-10  2xl:-mt-12  font-bold`}>SUSTAINABILITY</h2>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SustainabilitySection