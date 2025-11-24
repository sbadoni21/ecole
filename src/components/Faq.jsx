"use client";
import Image from "next/image";
import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question:
      "What makes Ecole Globale one of the top girl boarding schools in Dehradun?",
    answer:
      "Ecole Globale is known for its strong academics, structured boarding life, modern infrastructure, and emphasis on holistic development. The campus helps girls grow academically, physically, socially, and emotionally within a secure environment.",
  },
  {
    id: 2,
    question: "What curriculum does Ecole Globale follow?",
    answer:
      "The school follows both the CBSE and Cambridge (CAIE) curriculums, allowing students to choose an academic pathway that aligns with their long-term goals.",
  },
  {
    id: 3,
    question: "What classes are offered at Ecole Globale?",
    answer:
      "The school offers education from Class 4 to Class 12, ensuring a seamless and stable learning experience through middle and senior grades.",
  },
  {
    id: 4,
    question: "What kind of boarding facilities are available for students?",
    answer:
      "Ecole Globale offers a fully residential setup with supervised dormitories, nutritious meals, medical care, and a structured daily routine that balances academics and personal development.",
  },
  {
    id: 5,
    question: "How does the school ensure the safety of boarders?",
    answer:
      "Safety is ensured through 24/7 security, CCTV surveillance, controlled access points, trained wardens, and a highly disciplined campus atmosphere.",
  },
  {
    id: 6,
    question: "What sports and physical activities are offered?",
    answer:
      "Students can participate in basketball, swimming, athletics, equestrian activities, football, and more. Sports are a core part of the curriculum to promote confidence, fitness, discipline, and leadership.",
  },
  {
    id: 7,
    question: "What life skills do students learn at Ecole Globale?",
    answer:
      "Girls develop key life skills such as time management, communication, leadership, teamwork, emotional resilience, self-discipline, cultural sensitivity, and independent decision-making.",
  },
  {
    id: 8,
    question: "How can parents contact the school for admissions?",
    answer:
      "Parents can get in touch through phone, email, or the inquiry form on the official website. The campus is located at Village Horawalla, Near Sahaspur, Dehradun – 248197, Uttarakhand, India.",
  },
];

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleToggle = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="md:flex md:justify-center md:items-center pb-10 bg-white">
      <div className="flex flex-col justify-center pt-6 h-auto w-full">
        <div className="flex justify-center items-center">
          <h1 className="text-[#848484] text-[14px]">FAQs</h1>
        </div>
        <div className="mt-3 text-center">
          <h1 className="text-[24px] md:text-[26px] font-bold text-[#b0191e]">
            Have Questions?
          </h1>
        </div>
        <div className="mt-3 flex justify-center items-center">
          <div className="px-5 py-5 flex flex-col gap-5">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="w-[81vw] md:w-[90vw] flex flex-col bg-white sm:p-4 p-3 rounded-xl border border-[#075D70] transition-all duration-300 ease-in-out"
              >
                <div
                  className="w-full flex justify-between items-center cursor-pointer group"
                  onClick={() => handleToggle(item.id)}
                >
                  <p className="text-[1rem] font-semibold text-[#000000] transition-colors duration-200">
                    {item.question}
                  </p>
                  <div className="transform transition-transform duration-300 ease-in-out">
                    <Image
                      src={
                        activeQuestion === item.id
                          ? "/plus.svg"
                          : "/plus.svg"
                      }
                      alt="icon"
                      width={1000}
                      height={1000}
                      className={`transform transition-transform w-[50px] duration-300 ${
                        activeQuestion === item.id ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </div>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    activeQuestion === item.id
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[14px] text-[#000000] pt-2">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;