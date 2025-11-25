"use client";
import Link from "next/link";
import React from "react";

const newsData = [
  {
    id: 1,
    category: "Category name",
    title: "Key Factors Affecting Mental Health: What You Need to Know!",
    description:
      "Understanding the factors affecting mental health is crucial for maintaining overall well-being and...",
    date: "August 10,2024",
    image: "/news.svg",
  },
  {
    id: 2,
    category: "Category name",
    title: "Key Factors Affecting Mental Health: What You Need to Know!",
    description:
      "Understanding the factors affecting mental health is crucial for maintaining overall well-being and...",
    date: "August 10,2024",
    image: "/news.svg",
  },
  {
    id: 3,
    category: "Category name",
    title: "Key Factors Affecting Mental Health: What You Need to Know!",
    description:
      "Understanding the factors affecting mental health is crucial for maintaining overall well-being and...",
    date: "August 10,2024",
    image: "/news.svg",
  },
];

const NewsData = () => {
  return (
    <div className="w-full py-12 px-6 md:px-20 bg-[#F6F7FC]">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <p className="text-[#848484] text-[14px] md:mb-2">
          TO KEEP YOU UP TO DATE WITH US..
        </p>
        <h2 className="text-[26px] font-bold text-[#0F4976]">NEWS & UPDATES</h2>
      </div>

      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-[0px_0px_20px_0px_#5C7FB1]  transition-shadow duration-300 flex"
            >
              <div className="w-[380px] h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-4 text-[#FFFFFF] text[12px] px-3.5 py-1 rounded-r-[50px] bg-gradient-to-r from-[#193A65]  to-[#0F4976]">
                  {item.category}
                </div>
              </div>

              <div className="px-4 pt-4">
                <h3 className="text-[14px] font-semibold text-[#0F4976] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#848484] text-[12px] mb-4">
                  {item.description}
                </p>

                <div className=" flex justify-end items-end">
                  <p className="text-[#5A5E62] text-[12px] ">
                    <span className="mr-2">📅</span>
                    {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8 text-[14px]">
        <Link href="https://www.ecoleglobal.com/new-blogs/">
        <button className="inline-block px-6 py-2 border-2 border-[#0F4976] text-[#0F4976] rounded-md hover:bg-[#0F4976] hover:text-white transition-colors duration-300">
          View All Updates
        </button>
        </Link>
      </div>
    </div>
  );
};

export default NewsData;
