// components/ContactSection.tsx
"use client";

import { poppins } from "@/app/fonts";
import { useState } from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <div className="w-full flex justify-center items-center  bg-brand-blue">
            <div className="w-11/12 2xl:w-10/12 p-6 bg-white rounded-3xl shadow-sm flex flex-col md:flex-row overflow-hidden"
            >

                {/* Left Image Section */}
                <div className="w-full md:w-1/3 relative overflow-hidden "
                >

                    <div className=" absolute inset-0 w-full h-full bg-cover bg-no-repeat mx-auto bg-center rounded-[28px] "
                        style={{ backgroundImage: "url('/image/home/reception.png')" }}></div>

                    <div className="absolute bottom-0 left-0 right-0 border bg-gradient-to-t from-[#001C4A]  rounded-3xl  to-transparent text-white  h-full flex items-end ">
                        <div className=" p-7">
                            <h2 className="2xl:text-5xl xl:text-4xl  text-3xl font-bold mb-2">Reach Out</h2>
                            <p className=" text-lg  xl:text-xl font-light leading-relaxed mt-3 xl:mt-5">
                                Have a question or need our services? Get in touch with us today.
                                Our team is ready to assist you anytime.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Form Section */}
                <div className={`w-full md:w-2/3 p-6 md:p-10 ${poppins.className}`}>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        {/* Name and Email */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full md:w-1/2 border border-border placeholder:text-black outline-none rounded-md px-4 py-2 xl:py-4 "
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full md:w-1/2 border border-border placeholder:text-black outline-none rounded-md px-4 py-2 xl:py-4"
                                required
                            />
                        </div>

                        {/* Message */}
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows={9}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border border-border placeholder:text-black outline-none rounded-lg px-4 py-5"
                            required
                        />

                        <div className=" flex justify-between items-center">

                            <button
                                type="submit"
                                className="2xl:w-62 xl:w-52 w-48 bg-[#0240A3] text-white 2xl:py-3 py-2  text-lg  mt-4 rounded-md  hover:bg-[#002766] transition"
                                disabled={status === "loading"}
                            >
                                {status === "loading" ? "Sending..." : "SUBMIT"}
                            </button>
                            <div className="flex gap-4 mt-6 text-[#00D084] text-xl">
                                <a href="#"><img src="/icons/home/insta.svg" alt="instagram" className=" size-7 object-contain" /></a>
                                <a href="#"><img src="/icons/home/fb.svg" alt="facebook" className=" size-7 object-contain" /></a>
                                <a href="#"><img src="/icons/home/whatsapp.svg" alt="whatsapp" className=" size-7 object-contain" /></a>
                                <a href="#"><img src="/icons/home/youtube.svg" alt="youtube" className=" size-7 object-contain" /></a>

                                

                             
                            </div>

                        </div>


                    </form>


                    {/* Social Icons */}

                </div>
            </div>
        </div>
    );
}
