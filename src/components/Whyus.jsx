import Image from 'next/image';
import React from 'react'

export default function Whyus() {
    const cardData = [
        {
          id: 1,
          title: "Exceptional Results",
          desc: " Consistent excellence reflected in our continuous 100% board performance.",
          icon: "/Trophy.svg",
        },
        {
          id: 2,
          title: "Smart Classrooms",
          desc: "Modern classrooms equipped with complete digital learning facilities for teachers and students.\n",
          icon: "/School.svg",
        },
        {
          id: 3,
          title: "Advanced Learning Labs",
          desc: " Well-equipped laboratories with upgraded resources such as computers, digital labs, and more.",
          icon: "/Microscope2.svg",
        },
        {
          id: 4,
          title: "Academic Innovation",
          desc: " Subject experts ensure enhanced learning approaches that help students progress to the next level.",
          icon: "/Project Management.svg",
        },
      ];
  return (
      <div className="py-10 flex flex-col justify-start items-center bg-[#F6F7FC] md:px-20 px-8 w-full">
           <h3 className="text-gray-400 text-[14px] md:text-[16px] mb-3 capitalize">
             Why us?
           </h3>
           <h1 className="text-[#b0191e] md:text-[29px] text-[18px] font-bold">
What Sets Ecole Globale Apart
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
               fill="#b0191e"
             />
           </svg>
           <div className="text-gray-400 md:text-left  md:text-[18px] text-[14px] mt-8 text-justify">
Ecole Globale International Girls&apos; School is widely recognized as one of the leading institutions for young women. Among several girl boarding schools in Dehradun, it stands apart for offering safe, comfortable, and exceptionally well-managed residential facilities. The school is known for its strong security measures, dependable medical care, warm hospitality, and robust academic ecosystem.
 The dedication of our teachers is remarkable, and our alumni—now excelling in diverse professional fields—regularly share inspiring experiences from their years at Ecole Globale.
           </div>
           <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10">
             {cardData.map((card) => (
               <div
                 key={card.id}
                 className="lg:w-[20vw] md:w-[36vw] w-[70vw] h-[200px] md:h-[250px] shadow-xl shadow-[#CDDAEC] relative bg-white overflow-hidden"
               >
                 <div className="rounded-full w-[100px] h-[100px] absolute -top-4 -left-6 bg-gradient-to-r from-[#b0191e] to-[#b0191e] flex items-center justify-center text-white text-4xl">
                   <Image
                     className="w-[30px] h-[30px] object-fill"
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
