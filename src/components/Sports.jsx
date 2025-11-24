import Image from 'next/image'
import React from 'react'

export default function Sports() {
  return (
       <section className=" bg-[#F3F3F3] py-10 md:px-20 px-8">
            <div className="flex flex-col items-center justify-center ">
              <h3 className="text-gray-400 mb-3 capitalize">Sports</h3>
              <h1 className="text-[#b0191e] md:text-[29px] text-[18px] font-bold">
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
                  fill="#b0191e"
                />
              </svg>
            </div>
            <div className="md:flex md:flex-row md:justify-between flex flex-col items-center">
              <div className="md:w-1/2">
                <p className="text-[#848484] font-poppins md:text-[18px] text-[14px] md:text-left text-center leading-relaxed mt-4">
                 At Ecole Globale, sports and physical education are essential elements of our curriculum. As one of the most respected girl boarding schools in Dehradun, we offer exceptional sports opportunities that support the physical, mental, and emotional development of our learners.
 We believe that sports foster confidence and resilience while shaping students physically, technically, and mentally. This approach strengthens crucial life skills such as teamwork, discipline, leadership, and decision-making—making sports an integral part of every student&apos;s experience at Ecole Globale
                </p>
              </div>
    
              <div className="w-1/2 flex justify-end items-end">
                <div className="md:block hidden w-[512px] h-[400px]">
                  <Image
                    src="/judo.svg"
                    alt="Judo"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
    
              <div className="">
                <div className="md:hidden flex justify-between w-full">
                  <div className="w-[48%]">
                    <Image
                      src="/chess.svg"
                      className="w-full h-auto object-cover "
                      width={1000}
                      height={1000}
                      alt="Chess"
                    />
                  </div>
                  <div className="w-[48%]">
                    <Image
                      src="/judo2.svg"
                      className="w-full h-auto object-cover"
                      width={1000}
                      height={1000}
                      alt="Judo"
                    />
                  </div>
                </div>
    
                <div className="md:hidden flex justify-center items-center mt-4">
                  <button className="text-center px-6 py-2 border border-[#b0191e] text-[#b0191e] rounded-xl text-[14px]">
                    Explore More..
                  </button>
                </div>
              </div>
            </div>
          </section>
  )
}
