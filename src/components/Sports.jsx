import Image from 'next/image'
import React from 'react'

export default function Sports() {
  return (
       <section className=" bg-[#F3F3F3] py-10 md:px-20 px-8">
            <div className="flex flex-col items-center justify-center ">
              <h3 className="text-gray-400 mb-3 capitalize">Sports</h3>
              <h1 className="text-[#EC3237] md:text-[29px] text-[18px] font-bold">
                SPORTS AT ECOLE
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
            </div>
            <div className="md:flex md:flex-row md:justify-between flex flex-col items-center">
              <div className="md:w-1/2">
                <p className="text-[#848484] font-poppins md:text-[18px] text-[14px] md:text-left text-center leading-relaxed mt-4">
                  In Ecole Globale, sports and physical education are essential
                  parts of our curriculum. We offer excellent opportunities in
                  sports, emphasizing the growth and development of our learners. We
                  strongly believe in sports ability to boost students confidence
                  and resilience, providing paths for physical, technical, and
                  mental development. This method promotes teamwork and leadership
                  skills, which are vital elements of student life at our school.
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
                  <button className="text-center px-6 py-2 border border-[#EC3237] text-[#EC3237] rounded-xl text-[14px]">
                    Explore More..
                  </button>
                </div>
              </div>
            </div>
          </section>
  )
}
