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
      In this era of progressive education, schools strive to provide holistic development for their students. Beyond delivering a curriculum that encompasses academics, activities, sports, and community service, significant effort is made to shape students' futures by preparing them to become the leaders of tomorrow.

Ecole Globale International Girls&apos; School is furnished with all the latest technologies and amenities. We strive to improve women&apos;s representation and mold young girls into strong ladies with excellent leadership qualities.

With girls from all over the country, we have made a diverse atmosphere where students are a part of the mature, smart, and intelligent community of women. The profoundly experienced faculty are the masters of their respective subjects and are always keen to provide knowledge (apart from educational lessons). 
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
