// components/Footer.tsx
import { footerLinks } from "../data/footer";

export default function Footer() {
  return (
    <section className=" w-full xl:py-10 py-7 relative max-xl:text-sm  ">

      <div className="h-[50%] w-full bg-brand-blue absolute inset-0 z-0"></div>
      <div className="h-[50%] w-full  bottom-0 absolute left-0  z-0  bg-cover bg-no-repeat opacity-5 bg-center"
        style={{ backgroundImage: "url('/image/home/footer-pattern.png')" }}></div>


      <footer className="bg-[#001C4A] z-10 xl:px-10 px-10 xl:w-11/12 max-xl:mx-5  mx-auto text-white/90 py-12 xl:py-16 rounded-[50px] relative">
        <div className="xl:w-11/12 w-full mx-auto flex flex-col md:flex-row justify-between gap-10">

          <div className="md:w-1/3">
            <div className="flex items-center gap-2 mb-7">
              <img src="/image/home/footer.png" alt="Tramco" className="xl:h-16 h-12 object-cover" />
            </div>
            <p className="xl:leading-8 leading-7 font-light ">
              We specialize in providing reliable marine and trading solutions,
              backed by trusted expertise and a strong global network, ensuring
              that our clients receive high-quality products and services that
              meet the diverse needs of the shipping and international trade
              industry.
            </p>
          </div>

          <div>
            <h3 className="mb-4  text-xl xl:text-2xl">Quick Links</h3>
            <ul className="space-y-3 font-light">
              {footerLinks.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className={`hover:text-[#00D48F] transition `}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl xl:text-2xl">Services</h3>
            <div className="flex gap-10">
              {Object.entries(footerLinks.services).map(([section, links]) => (
                <div key={section}>
                  <h4 className="mb-4 text-lg xl:text-xl">{section}</h4>
                  <ul className="space-y-3 font-light">
                    {links.map((link, idx) => (
                      <li key={idx}>
                        <a
                          href={link.href}
                          className="hover:text-[#00D48F] transition "
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full xl:w-11/12 font-light  mx-auto mt-8 xl:mt-20 flex flex-col md:flex-row px-8 rounded-2xl py-3 justify-between items-center bg-white/25">
          <p>
            © Copyright 2025 All rights reserved. | Designed by{" "}
           <a href="https://maktalseo.com/" className="hover:underline"> <span className="text-white">Maktal</span></a>
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline ">
              Privacy Policy
            </a>
            <span>&</span>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
