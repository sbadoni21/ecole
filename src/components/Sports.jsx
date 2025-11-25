import Image from 'next/image'
import React from 'react'

export default function Sports() {
  return (
       <section className=" bg-[#F3F3F3] py-10 md:px-20 px-8">
            <div className="flex flex-col items-center justify-center ">
              <h3 className="text-gray-400 mb-3 capitalize">Sports</h3>
              <h1 className="text-[#0F4976] md:text-[29px] text-[18px] font-bold">
A Core Part of Ecole Life
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
                  fill="#0F4976"
                />
              </svg>
            </div>
            <div className="md:flex md:flex-row md:justify-between flex flex-col items-center">
              <div className="md:w-1/2">
                <p className="text-[#848484] font-poppins md:text-[18px] text-[14px] md:text-left  leading-relaxed mt-4 text-justify">
                 At Ecole Globale, sports and physical education are essential elements of our curriculum. As one of the most respected girl boarding schools in Dehradun, we offer exceptional sports opportunities that support the physical, mental, and emotional development of our learners.
 We believe that sports foster confidence and resilience while shaping students physically, technically, and mentally. This approach strengthens crucial life skills such as teamwork, discipline, leadership, and decision-making—making sports an integral part of every student&apos;s experience at Ecole Globale
                </p>
              </div>
    
              <div className="w-1/2 flex justify-end items-end">
                <div className="md:block hidden w-[512px] h-[400px]">
                  <Image
                      src="https://www.ecoleglobale.com/wp-content/uploads/2019/10/ecole-globale-trips-and-expedition.jpg"
                    alt="Judo"
                    width={1000}
                    height={1000}
                    className="w-full h-[37vh] object-cover"
                  />
                </div>
              </div>
    
        
            </div>
          </section>
  )
}
