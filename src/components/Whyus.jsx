import Image from 'next/image';
import React from 'react'

export default function Whyus() {
    const cardData = [
        {
          id: 1,
          title: "100% Result",
          desc: "Continuous success with 100% board results.",
          icon: "/Trophy.svg",
        },
        {
          id: 2,
          title: "Modern Class Room",
          desc: "Advanced classrooms with full facilities for teachers and students.",
          icon: "/School.svg",
        },
        {
          id: 3,
          title: "Well Equipped Lab",
          desc: "We possess technological resources like computers, labs, internet, etc.",
          icon: "/Microscope2.svg",
        },
        {
          id: 4,
          title: "Innovation",
          desc: "We have subject experts who elevate the learning to the next level.",
          icon: "/Project Management.svg",
        },
      ];
  return (
      <div className="py-10 flex flex-col justify-start items-center bg-[#F6F7FC] md:px-20 px-8 w-full">
           <h3 className="text-gray-400 text-[14px] md:text-[16px] mb-3 capitalize">
             Why us?
           </h3>
           <h1 className="text-[#EC3237] md:text-[29px] text-[18px] font-bold">
             Why Choose Ecole Globale
           </h1>
           <svg
             viewBox="0 0 100 20"
             preserveAspectRatio="none"
             className="w-[329px] h-2"
           >
             <path
               d="M0,10
              C25,8 50,6 100,10
              C50,14 25,12 0,10 Z"
               fill="#EC3237"
             />
           </svg>
           <div className="text-gray-400 md:text-left text-center md:text-[18px] text-[14px] mt-8">
            Ecole Globale International Girls School is one of the premier Institutes for girls. Girls residential schools in Dehradun often take the onus of providing the best accommodation to students. Ecole Globale deserves accolades for the kind of security, medical facilities, hospitality, and education it provides to the girls.The sheer dedication with which teachers deliver their work is truly commendable. The alumni who prove to be overachievers have all good things to say about this school.

           </div>
           <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10">
             {cardData.map((card) => (
               <div
                 key={card.id}
                 className="lg:w-[20vw] md:w-[36vw] w-[70vw] h-[250px] shadow-xl shadow-[#CDDAEC] relative bg-white overflow-hidden"
               >
                 <div className="rounded-full w-[130px] h-[130px] absolute -top-4 -left-6 bg-gradient-to-r from-[#EC3237] to-[#EC3237] flex items-center justify-center text-white text-4xl">
                   <Image
                     className="w-[50px] h-[50px]"
                     src={card.icon}
                     alt={card.icon}
                     height={1000}
                     width={1000}
                   />
                 </div>
                 <div className="absolute top-0 right-4 font-bold text-gray-300 xl:text-[70px] text-[48px]">
                   {String(card.id).padStart(2, "0")}
                 </div>
                 <div className="absolute bottom-8 left-6 right-6">
                   <div className="xl:text-[20px] font-bold text-[#5A5E62]">
                     {card.title}
                   </div>
                   <div className="xl:text-[16px] md:text-[12px] text-[10px] font-semibold text-[#848484]">
                     {card.desc}
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
  )
}
