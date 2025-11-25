"use client";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { IoClose } from "react-icons/io5";

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
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 20000);

    return () => clearTimeout(timer);
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="relative w-full max-w-[900px] bg-white rounded-lg overflow-hidden shadow-2xl flex flex-col md:flex-row">
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white md:bg-black/30 rounded-full p-1.5 hover:bg-gray-100 md:hover:bg-black/50 transition-colors"
            >
              <IoClose size={24} className="text-black md:text-white" />
            </button>

            {/* Left Side - Image (Desktop Only) */}
            <div className="hidden md:block md:w-1/2">
              <img
                src="https://www.ecoleglobale.com/wp-content/uploads/2019/10/ecole-globale-art-and-culture.jpg"
                alt="Ecole Globale"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Form */}
            <div className="w-full md:w-1/2 p-6 md:p-8">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0F4976]">
                  Enquire Now
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Fill out the form below and we'll get back to you
                </p>
              </div>

              <form onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    name="name"
                    type="text"
                    placeholder="Enter your name*"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    type="email"
                    name="email"
                    placeholder="Enter your email*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    type="tel"
                    name="number"
                    placeholder="Enter your phone number*"
                    value={formData.number}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Classes (Optional)
                  </label>
                  <input
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    type="text"
                    name="classes"
                    placeholder="Enter class (Optional)"
                    value={formData.classes}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 mt-2 rounded-lg text-white font-semibold bg-[#0F4976] hover:from-red-700 hover:to-red-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}