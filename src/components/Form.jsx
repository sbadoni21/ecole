"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";

export default function Form() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    // Validate phone number length (must be 10 digits)
    if (!/^\d{10}$/.test(formData.number)) {
      setError("Phone number must be exactly 10 digits.");
      setLoading(false);
      return;
    }

    emailjs
      .send(
        "service_x2sj7qn",
        "template_qakti49",
        formData,
        "SUpCFFw0RKpXrSrMZ"
      )
      .then(() => {
        setMessage("Your enquiry has been sent successfully!");
        setFormData({ name: "", email: "", number: "" });

        setTimeout(() => {
          router.push("/thankyou");
        }, 100);
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Failed to send enquiry. Please try again later.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-white px-6 md:pb-6 md:pt-3 py-8 rounded-lg w-full md:w-[600px] text-black">
      <div className="text-center">
        <p className="text-[20px] font-bold md:text-[30px] pt-2 text-[#193A65]">
          Enquire Now
        </p>
        <p className="text-[12px] md:text-[18px] text-gray-600 pt-4 pb-4">
          Submit the form with your details to let us help you...
        </p>
      </div>
      <form onSubmit={sendEmail}>
        <div className="flex flex-col gap-4">
          <div>
            <label className="md:text-[16px] text-[12px]">Name</label>
            <input
              className="px-4 w-full md:h-12 h-[30px] md:text-[16px] text-[12px] border border-[#E7E7E7] rounded-lg"
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
              className="px-4 w-full md:h-12 h-[30px] md:text-[16px] text-[12px] border rounded-lg"
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
              className="px-4 w-full md:h-12 h-[30px] md:text-[16px] text-[12px] border rounded-lg"
              type="number"
              name="number"
              placeholder="Enter your Phone number*"
              value={formData.number}
              onChange={handleChange}
              required
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <div className="my-4">
            <button
              type="submit"
              className="w-full md:h-12 border h-[30px] md:text-[16px] text-[12px] rounded-lg text-center text-[#b0191e] bg-white to-transparent border-[#b0191e] hover:bg-[#b0191e] hover:text-white font-semibold"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
      {message && <p className="text-center text-sm text-green-600">{message}</p>}
    </div>
  );
}
