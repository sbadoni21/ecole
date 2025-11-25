import Image from 'next/image'
import React from 'react'

export default function Life() {
    const features = [
        {
          id: 1,
          image: "/Calendar.svg",
          title: "Structured",
          subtitle: "Boarding Life",
        },
        {
          id: 2,
          image: "/Graduate.svg",
          title: "Skill Building &",
          subtitle: "Character Development",
        },
        {
          id: 3,
          image: "/Microscope.svg",
          title: "Advanced Labs &",
          subtitle: "Interactive Classrooms",
        },
        {
          id: 4,
          image: "/Protect.svg",
          title: "Secure  &",
          subtitle: "Protected Campus",
        },
      ];
    
  return (
    <div className="px-8 md:px-20 py-10">
    <div className="flex flex-col items-center text-center">
      <h3 className="text-gray-400 mb-3 uppercase tracking-wide">Life</h3>
      <h1 className="text-[#0F4976] text-[29px] font-bold">LIFE @ Ecole Globale International Girls School </h1>
      <svg
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        className="w-[300px] h-2"
      >
        <path
          d="M0,10 C25,8 50,6 100,10 C50,14 25,12 0,10 Z"
          fill="#0F4976"
        />
      </svg>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-2 py-10 gap-6 md:flex md:flex-row justify-between md:px-6 text-[#0F4976] my-1">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="flex flex-col justify-center items-center space-y-4 md:space-x-4 md:space-y-0 md:flex-row"
        >
         
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
        <p className="text-[#848484] text-[14px]  md:text-[18px]  text-justify">
Ecole Globale brings together students from diverse cultures and regions, creating a dynamic learning environment that enhances the overall boarding school experience. For every girl studying here, life at Ecole becomes a memorable journey filled with strong academics, supportive friendships, and meaningful opportunities.         <br /> Smart classrooms, sports, cultural events, and educational excursions equip learners with essential skills and confidence to navigate future challenges.

  
          <br />
 Our boarding facility reflects the comfort and warmth of home, where discipline, care, values, and emotional support work hand in hand. Sports remain a major priority at Ecole Globale, offering ample opportunities for students to explore, grow, and excel.         <br />As one of the finest girl boarding schools in Dehradun, Ecole Globale offers the perfect balance of academic excellence and holistic development, ensuring every student thrives in a secure, nurturing, and inspiring atmosphere.
        </p>
      </div>
    </div>
  </div>
  )
}
