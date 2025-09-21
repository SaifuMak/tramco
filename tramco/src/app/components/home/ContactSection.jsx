import React from "react";
import ContactGrid from "./ContactGrid";
import ContactForm from "./ContactForm";

function ContactSection() {
    return (

        <div className=" w-full   relative z-0 pt-16 2xl:pb-24 lg:pb-16 bg-brand-blue ">
            <div className=" mx-auto text-center   ">
                <h2 className={`  z-30 2xl:text-[150px] leading-none xl:text-[110px] lg:text-[90px] md:text-[70px] text-5xl  text-[#DDE3EC] font-extrabold `}>
                    CONTACT US
                </h2>
            </div>
            <ContactGrid />
            <ContactForm />
            <div className="absolute right-0 xl:right-3 2xl:right-16 bottom-0   rotate-180">
                <img src="/image/home/scoll-down.svg" alt="" className="  size-16 2xl:size-16 shrink-0 object-contain" />
            </div>
        </div>
    );
}

export default ContactSection;
