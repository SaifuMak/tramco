import React from "react";
import ContactGrid from "./ContactGrid";
import ContactForm from "./ContactForm";

function ContactSection() {
    return (

        <div className=" w-full  z-0 pt-16 bg-brand-blue ">
            <div className=" mx-auto text-center   ">
                <h2 className={`  z-30 2xl:text-[150px] leading-none xl:text-[110px] lg:text-[90px] md:text-[70px] text-5xl  text-[#DDE3EC] font-extrabold `}>
                    CONTACT US
                </h2>
            </div>
            <ContactGrid />
            <ContactForm/>

        </div>
    );
}

export default ContactSection;
