import Image from 'next/image'
import React from 'react'

export default function Life() {
    const features = [
        {
          id: 1,
          image: "/Calendar.svg",
          title: "Well Planned",
          subtitle: "Boarding Schedule",
        },
        {
          id: 2,
          image: "/Graduate.svg",
          title: "Life Skills &",
          subtitle: "Personality Development",
        },
        {
          id: 3,
          image: "/Microscope.svg",
          title: "Modern Labs &",
          subtitle: "Classroom",
        },
        {
          id: 4,
          image: "/Protect.svg",
          title: "Safety & Security",
          subtitle: "",
        },
      ];
    
  return (
    <div className="px-8 md:px-20 py-10">
    <div className="flex flex-col items-center text-center">
      <h3 className="text-gray-400 mb-3 uppercase tracking-wide">Life</h3>
      <h1 className="text-[#EC3237] text-[29px] font-bold">LIFE @ Ecole Globale International Girls School in Dehradun </h1>
      <svg
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        className="w-[300px] h-2"
      >
        <path
          d="M0,10 C25,8 50,6 100,10 C50,14 25,12 0,10 Z"
          fill="#EC3237"
        />
      </svg>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-2 py-10 gap-6 md:flex md:flex-row justify-between md:px-6 text-[#EC3237] my-1">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="flex flex-col justify-center items-center space-y-4 md:space-x-4 md:space-y-0 md:flex-row"
        >
          <div className="flex-shrink-0">
            <Image
              src={feature.image}
              alt={feature.title}
              className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] object-contain"
              width={1000}
              height={1000}
            />
          </div>
          <div className="font-semibold text-center md:text-left text-[12px] md:text-[16px]">
            <p>{feature.title}</p>
            {feature.subtitle && <p>{feature.subtitle}</p>}
          </div>
        </div>
      ))}
    </div>

    <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
      <div className="md:block hidden w-full md:w-1/2">
        <Image
          src="https://www.ecoleglobale.com//wp-content//uploads//2024//03//discover-ecole-globale-international-girls-school.jpg"
          height={1000}
          width={1000}
          alt="life"
          className="w-full"
        />
      </div>

      <div className="w-full md:w-1/2">
        <p className="text-[#848484] text-[18px] leading-relaxed">
          Laureate Shimla is a hub of diverse cultures, religions, and
          nationalities, offering a unique and enriching boarding school
          experience in Shimla. Studying and growing in this institution is
          a memorable journey for every student. Computer-based classroom
          learning, sports, cultural events, and excursions prepare students
          with the skills needed to confidently face life's challenges.
          <br />
          <br />
          The school hostel reflects the essence of home - care, values,
          discipline, and sacrifice. Sports have always been a key focus at
          Laureate, with an emphasis on supporting and nurturing students
          through excellent opportunities in the sports field. Become a part
          of Ecole Global International Girls School, a renowned name among boarding schools
          in Shimla and Himachal Pradesh, for an educational journey that
          combines academic excellence with holistic growth in a supportive
          and dynamic environment.
        </p>
      </div>
    </div>
  </div>
  )
}
