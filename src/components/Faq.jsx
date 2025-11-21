"use client";
import Image from "next/image";
import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question:
      "What sets Ecole Global International Girls School apart as a top boarding school in Shimla?",
    answer:
      "Recognized as a leading coed day boarding school in Shimla, Himachal Pradesh, Ecole Global International Girls School combines a robust CBSE curriculum with a supportive boarding environment. Our focus on holistic development, complemented by Shimla's picturesque surroundings, makes us a top choice for boarding education.",
  },
  {
    id: 2,
    question:
      "Does Ecole Global International Girls School accommodate both day scholars and boarders?",
    answer:
      "Yes, we proudly serve the needs of both day scholars and boarders. As a leading boarding school in Himachal Pradesh, we offer an inclusive setting that promotes academic success and personal development for every student.",
  },
  {
    id: 3,
    question: "Which curriculum is followed by Ecole Global International Girls School?",
    answer:
      "We adhere to the CBSE (Central Board of Secondary Education) curriculum, offering a well-rounded and balanced learning approach, establishing us as a renowned boarding school in Himachal Pradesh.",
  },
  {
    id: 4,
    question:
      "How are the boarding facilities at Ecole Global International Girls School in Shimla?",
    answer:
      "Our boarding facilities are crafted to provide a safe, comfortable, and nurturing environment. We aim to create a 'home away from home' atmosphere, with committed staff supporting the well-being and growth of each boarder.",
  },
  {
    id: 5,
    question:
      "In what ways does Ecole Global International Girls School promote the holistic development of its students?",
    answer:
      "As a top boarding school in Shimla, we focus on both academic success and the holistic growth of our students. This involves sports, cultural events, extracurricular activities, and excursions, all essential to our educational philosophy.",
  },
  {
    id: 6,
    question:
      "Are there particular admission requirements for the boarding program at Ecole Global International Girls School?",
    answer:
      "Enrollment in our boarding program depends on academic performance, an entrance test, and a personal interview. We seek students eager to learn and thrive in our vibrant boarding schools in Shimla.",
  },
  {
    id: 7,
    question:
      "What makes Ecole Global International Girls School unique compared to other boarding schools in Himachal Pradesh?",
    answer:
      "Our distinct location in Shimla, along with a robust academic curriculum, superior boarding facilities, and a focus on personal growth, makes us a leading choice among boarding schools in Himachal Pradesh.",
  },
  {
    id: 8,
    question:
      "Are international students eligible to enroll at Ecole Global International Girls School?",
    answer:
      "Definitely. We value diversity and accept students from various cultural backgrounds, creating a cosmopolitan and inclusive boarding school environment in Shimla.",
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
          <h1 className="text-[24px] md:text-[26px] font-bold text-[#EC3237]">
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