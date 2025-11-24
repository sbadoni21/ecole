import React from "react";
import Form from "./Form";
import Link from "next/link";
export default function AboutSection() {
 
  return (
    <div className="h-auto md:h-[670px] flex flex-col-reverse md:flex-row justify-between bg-white p-8 md:p-[99px]  gap-8 text-[#EC3237]">
      <div className="flex flex-col w-full md:w-[567px]">
        <h3 className="font-medium text-[22px] md:text-[25px] mb-4">
          WELCOME TO
        </h3>
        <h1 className="font-semibold text-[32px] md:text-[40px] mb-2">
Ecole Globale International Girls&apos; School in Dehradun       </h1>
      
        <p className="text-[14px] md:text-[16px] font-normal mb-6 text-black">
In today&apos;s rapidly evolving educational landscape, learning extends far beyond traditional textbooks. Modern institutions now focus on nurturing every dimension of a child&apos;s development. Among the top girl boarding schools in Dehradun, Ecole Globale stands out for providing a truly holistic environment. Along with academics, students participate in sports, co-curricular activities, and community engagement programs that help them evolve into confident and capable future leaders.
 Our campus is equipped with advanced facilities and modern technology, thoughtfully designed to enrich every learner&apos;s journey. We take pride in empowering young girls and shaping them into strong, independent women with exceptional leadership qualities. With students joining us from across the country and abroad, Ecole fosters a vibrant, inclusive community built on intelligence, maturity, respect, and shared values. Our experienced faculty members are highly skilled in their respective fields and are committed to delivering meaningful learning beyond the classroom.

        </p>
        <Link href="https://www.ecoleglobal.in/about-us/">
        <button className="w-[120px] h-[40px] border rounded-full border-white hover:bg-white hover:text-[#ED3137] px-4 py-2 text-[14px] text-center font-semibold">
          Read more..
        </button>
        </Link>
      </div>

    <Form />
    </div>
  );
}
