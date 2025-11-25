
import React from "react";
import { CiGlobe, CiLocationOn, CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import Form from "./Form";

const Footer = () => {
  return (
    <div className="bg-[#0F4976] text-white bg-cover bg-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 px-4 sm:px-6 md:px-14 py-10">

        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
          <h2 className="text-lg md:text-2xl font-bold">
           Ecole Globale International Girls&apos; School
          </h2>
      

          <div className="space-y-3 md:space-y-4 pt-4">
            <p className="text-base md:text-lg font-bold">Get in Touch</p>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <CiLocationOn className="text-lg" />
              <p>Village Horawalla, Near Sahaspur Dehradun - 248197, Uttarakhand, India</p>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <CiMail className="text-lg" />
              <a href="mailto:ecoleglobale@gmail.com " className="hover:underline">
ecoleglobale@gmail.com              </a>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <CiGlobe className="text-lg" />
              <a href="https://www.ecoleglobale.in/" target="_blank" className="hover:underline">
 www.ecoleglobale.in
              </a>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
            <a href="tel:6230031111" className="flex items-center gap-2">
              <FiPhone className="text-lg" />
              <p>+91-9557291888</p>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Enquiry Form */}
       <Form />
      </div>

      {/* Footer Bottom */}
      <p className="text-center pb-6 text-sm md:text-base">
        Copyright © 2025
      </p>
    </div>
  );
};

export default Footer;
