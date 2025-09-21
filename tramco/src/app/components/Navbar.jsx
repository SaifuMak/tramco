// components/Navbar.js
'use client'

import Link from 'next/link';
import { useState } from 'react';
import { MdArrowDropUp } from "react-icons/md";

export default function Navbar() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const services = {
    Trading: ["Oil Products", "Chemicals", "Recycling", "LPG/LNG"],
    Marine: ["Marine Services", "Mr.Ahmed to Fill"],
    Consulting: ["Environmental", "Sustainability & ESG", "Regulatory Compliance"],
  };

  return (
    <nav className=" bg-brand-blue  py-6 px-8">
      <div className="  w-full mx-auto px-6 flex items-center  justify-between h-20">
        <div className="flex  mr-8 shrink-0">
          <img src="/image/home/logo-main.svg" alt="TRAMCO" className="xl:h-16 h-10 object-contain xl:object-cover " />
        </div>
        <ul className="flex px-10 max-2xl:text-sm 2xl:space-x-16 space-x-7 justify-center text-black-24 flex-1">
          <li><Link href="/" className=" hover:text-[#0240A3] font-medium ">HOME</Link></li>
          <li><Link href="/" className="hover:text-[#0240A3] font-medium">MESSAGE FROM THE CEO</Link></li>
          <li><Link href="/" className="hover:text-[#0240A3] font-medium">ABOUT</Link></li>
          <li
            className="relative"
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            <button className={` cursor-pointer  font-medium hover:text-[#0240A3] `}>OUR SERVICES</button>
            {showMegaMenu && (
              <div className="absolute left-1/2 -translate-x-1/2 overflow-hidden bg-transparen z-50  text-sm">

                <div className="w-[550px] relative mt-4 bg-white rounded-2xl p-8 flex space-x-12">

                  <span className=" text-white absolute text-3xl -top-4.5  left-1/2  -translate-x-1/2"><MdArrowDropUp /></span>

                  {Object.entries(services).map(([category, items]) => (
                    <div key={category}>
                      <div className="font-semibold text-[#0240A3] mb-2">{category}</div>
                      <div className="space-y-2 text-gray-700 cursor-pointer">
                        {items.map((item, idx) => (
                          <div
                            key={idx}
                            className="hover:text-[#0240A3] transition-colors duration-200"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            )}

          </li>
          <li><Link href="/" className="hover:text-[#0240A3] font-medium">CAREERS</Link></li>
          <li><Link href="/" className="hover:text-[#0240A3] font-medium">LOCATION</Link></li>
          <li><Link href="/" className="hover:text-[#0240A3] font-medium">SUSTAINABILITY</Link></li>
        </ul>
        <div>
          <button className="border-2 cursor-pointer text-nowrap  max-2xl:text-sm border-[#0240A3] font-semibold text-[#0240A3] px-5 py-2 rounded  transition">CONTACT US</button>
        </div>
      </div>
    </nav>
  );
}
