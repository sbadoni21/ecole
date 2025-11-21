"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

export default function Popup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    classes: "",
  });

  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen(true);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      to_name: "Ecole",
      name: formData.name,
      email: formData.email,
      number: formData.number,
      classes: formData.classes,
    };
  
    emailjs
      .send(
        "service_x2sj7qn",
        "template_46xdevr",
        templateParams, 
        "SUpCFFw0RKpXrSrMZ"
      )
      .then(() => {
        setFormData({ name: "", email: "", number: "", classes: "" });
        setIsOpen(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => setLoading(false));
  };
  

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="md:relative w-[90%] md:w-[600px] lg:w-[900px] xl:w-[1000px] h-auto  rounded-lg overflow-hidden flex">
            <div className="w-full hidden md:block">
              <Image
                src="popupbgimage.svg"
                alt="popup image"
                width={1000}
                height={1000}
                className="w-full object-left"
              />
            </div>

            <div className="md:absolute md:right-0 w-[465px] md:bg-transparent bg-white md:top-0 px-6 text-black md:text-white">
              <div className="flex flex-row justify-between">
                <div className="text-center">
                  <p className="text-[20px] font-bold md:text-[22px] pt-2">
                    Enquire Now
                  </p>
                  <p className="text-[12px] md:text-[16px] pt-4 pb-4">
                    Submit the form with your details to let us help you...
                  </p>
                </div>
                <button className=" -mt-10" onClick={() => setIsOpen(false)}>
                  <IoClose size={24} />
                </button>
              </div>

              <form onSubmit={sendEmail}>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="md:text-[16px] text-[12px]">Name</label>
                    <input
                      className="px-4 w-full md:h-12 h-[30px] md:text-[16px] text-[12px] border border-[#E7E7E7] rounded-lg text-black"
                      name="name"
                      type="text"
                      placeholder="Enter your name*"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="md:text-[16px] text-[12px]">Email</label>
                    <input
                      className="px-4 text-black w-full md:h-12 h-[30px] md:text-[16px] text-[12px] border rounded-lg"
                      type="email"
                      name="email"
                      placeholder="Enter your email*"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="md:text-[16px] text-[12px]">Phone</label>
                    <input
                      className="px-4 text-black w-full md:h-12 h-[30px] md:text-[16px] text-[12px] border rounded-lg"
                      type="number"
                      name="number"
                      placeholder="Enter your Phone number*"
                      value={formData.number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="md:text-[16px] text-[12px]">
                      Classes (Optional)
                    </label>
                    <input
                      className="px-4 text-black w-full md:h-12 h-[30px] md:text-[16px] text-[12px] border rounded-lg"
                      type="text"
                      name="classes"
                      placeholder="Enter class (Optional)"
                      value={formData.classes}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="my-4">
                    <button
                      type="submit"
                      className="w-full md:h-12 border h-[30px] md:text-[16px] text-[12px] rounded-lg text-center text-white bg-gradient-to-l from-[#EC3237] to-transparent"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Submit"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
