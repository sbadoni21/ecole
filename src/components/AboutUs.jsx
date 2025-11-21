"use client"
import React, { useState } from "react";

export default function AboutUsPage() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About School" },
    { id: "vision", label: "Vision & Mission" },
    { id: "president", label: "President's Message" }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#EC3237] text-white py-12 md:py-16 px-8 md:px-[99px]">
        <h1 className="font-bold text-[36px] md:text-[48px] mb-4 mt-48">About Us</h1>
        <p className="text-[16px] md:text-[18px] max-w-3xl italic">
          "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
        </p>
        <p className="text-[14px] md:text-[16px] mt-2">– Malcolm X</p>
      </div>

      {/* Tabs Navigation */}
      <div className="sticky top-0 z-40 bg-white shadow-md">
        <div className="px-8 md:px-[99px]">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-[14px] md:text-[16px] font-semibold transition-all relative ${
                  activeTab === tab.id
                    ? "text-[#EC3237] border-b-4 border-[#EC3237]"
                    : "text-gray-600 hover:text-[#EC3237]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-12 md:py-16 px-8 md:px-[99px]">
        {/* About School Tab */}
        {activeTab === "about" && (
          <div className="animate-fadeIn">
            <h2 className="font-semibold text-[28px] md:text-[36px] text-[#EC3237] mb-8">
              About School
            </h2>
            <div className="space-y-6 text-[15px] md:text-[16px] text-gray-800 leading-relaxed max-w-5xl">
              <p>
                A great starting point about a child&apos;s education but we know important lessons in education go beyond the four walls of a classroom. We understand the importance of education both between the lines of a textbook and outside in extracurricular activities. These lessons will help turn our girls into well-rounded gracious citizens of tomorrow.
              </p>
              <p>
                To prepare for the future, a child needs to have the opportunity to learn the art of public speaking, engage in sports, learn multiple arts, develop a sense of confidence in self and most of all learn to contribute to communities. All of this and so much more is what we hope for the children enrolled in our institute to learn and absorb naturally through their time here.
              </p>
              
              <div className="bg-gray-50 p-6 md:p-8 rounded-lg border-l-4 border-[#EC3237] my-8">
                <p className="font-semibold text-[18px] text-[#EC3237] mb-4">
                  The Four Pillars of Our Foundation
                </p>
                <p>
                  The four pillars which form the foundation of our beliefs are – <span className="font-semibold text-[#EC3237]">Air, Earth, Water, and Fire</span>. A balance of these classical elements is important for existence. Each pillar has particular properties which distinguish them from one another yet is critically important for the balance. We hope to help students find their element and ensure they develop it to its fullest potential.
                </p>
              </div>

              <p>
                At Ecole Globale, we believe in equal opportunities for the girls to learn, grow and excel at whatever they choose to be it academics or extracurricular activities yet still insisting on all-round development. We understand how each tree of learning requires individual attention and dedicated patience, and our teachers help accomplish all of that efficiently. We create a conducive and fun learning environment with the added help of technology. To ensure equal attention is distributed amongst all the girls, we have a fixed teacher-student ratio at a stable <span className="font-semibold text-[#EC3237]">1:10</span>.
              </p>
              <p>
                Regularly, we also conduct a rich student exchange program which inculcates a sense of diversity, understanding, and appreciation of peers from other countries and cultural background amongst students. It is experiences like these that makes students of Ecole Globale, citizens of the world and leaders for tomorrow!
              </p>
              <p className="font-medium text-[17px] md:text-[18px] text-[#EC3237] mt-8">
                To be at Ecole Globale would be an enriching, educating and enlightening experience for your child and the lessons learned here will guide them through the future.
              </p>
            </div>
          </div>
        )}

        {/* Vision & Mission Tab */}
        {activeTab === "vision" && (
          <div className="animate-fadeIn">
            <h2 className="font-semibold text-[28px] md:text-[36px] text-[#EC3237] mb-12 text-center">
              Vision & Mission
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              {/* Vision */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#EC3237]">
                <h3 className="font-semibold text-[24px] md:text-[28px] text-[#EC3237] mb-4">Vision</h3>
                <p className="text-[15px] md:text-[16px] text-gray-800 leading-relaxed">
                  To empower girls to discover their intellectual, creative and physical potential to embrace the 21st century.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#EC3237]">
                <h3 className="font-semibold text-[24px] md:text-[28px] text-[#EC3237] mb-4">Mission</h3>
                <p className="text-[15px] md:text-[16px] text-gray-800 leading-relaxed">
                  To create an environment that is conducive for learning to develop skills and honing the innate talents of our students, by making innovative use of technological tools to support independent learning inside the classroom and beyond the bounds of the four walls.
                </p>
              </div>
            </div>

            {/* Mission Details */}
            <div className="space-y-6 text-[15px] md:text-[16px] text-gray-800 leading-relaxed max-w-5xl mx-auto">
              <p>
                The challenges of the 21st century are unique, and to keep abreast with a multitude of such situations, we at Ecole Globale have ensured to nurture the girls to conduct themselves with confidence, grace and equanimity. The courseware is tailored to suit the needs of every child and their personality, so that inclusion could be practiced in the most equitable manner.
              </p>
              <p>
                We aim at excellence, and the bandwidth of that goes beyond academics and extends to achieving holistic growth on the sports fields, in debate halls, educational conferences, community service, performing arts, appreciating the culture, and most importantly, at becoming individuals with a good conscience and a high emotional quotient (EQ). This is the age of EQ coupled with IQ, as artificial intelligence can also be programmed into a machine, but realistically, people skills and empathy are still the monopolistic territory of humans.
              </p>
              <p>
                One of the most sought-after abilities is creativity and that can truly be discovered by leaving mental blocks aside and giving the liberty to young minds to think out of the box. The School provides ample of opportunities to let the girls showcase their creativity and to stimulate their cognition. In order to let the creative juices flowing, an equal emphasis has always been given to performing arts, wherein the girls own the stage and the canvas in their own stride. The aim has always been to empower the girls to embrace hindrances with new-found wisdom, freedom, agility and strength.
              </p>
              <p>
                Developing physical potential goes hand-in-hand with the development of the mind and Ecole Globale constantly makes an attempt to let its students recognise the significance of physical well-being. This is not just through sports, but through the adoption of a healthy lifestyle adopted in the campus life.
              </p>
            </div>
          </div>
        )}

        {/* President's Message Tab */}
        {activeTab === "president" && (
          <div className="animate-fadeIn">
            <h2 className="font-semibold text-[28px] md:text-[36px] text-[#EC3237] mb-8">
              President's Message
            </h2>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-[#EC3237] to-[#d62a2f] text-white p-6 md:p-8 rounded-t-lg">
                <p className="text-[20px] md:text-[24px] font-semibold">Amarjeet Juneja</p>
                <p className="text-[14px] md:text-[16px] opacity-90">President, Ecole Globale International Girls&apos; School</p>
              </div>
              
              <div className="bg-gray-50 p-6 md:p-12 rounded-b-lg shadow-lg space-y-6 text-[15px] md:text-[16px] text-gray-800 leading-relaxed">
                <p>
                  As the President of Ecole Globale International Girls&apos; School, it gives me immense pleasure to interact with you through this platform. We have forever believed in our core ethos, which comprises of enthusiasm, vibrance and positivity and always attempt to incorporate them in every decision we take for the benefit of the girls here at Ecole. To be able to build honest, courageous, confident and responsible global citizens out of our students, Ecole remains committed to following a curriculum that is at par with international standards and principles.
                </p>
                <p>
                  The sacrifice that parents make for their children can never be quantified; however, it is my honour to extend my gratitude to you, dear parents, to entrust the responsibility of the overall development of your child onto us. The well-being of each and every girl at Ecole is paramount to us and we fully recognize the efforts you have made in the good upbringing of your children and by investing in their education. We aim to strike a balance between the financial realities of families connected to our School, with the operational needs of the Institute.
                </p>
                <p>
                  There is a thin line between knowing your potential and fully exploiting your potential. At Ecole Globale, we strive to make future leaders identify their strengths and work on their shortcomings with a determined and positive spirit. For the 360 degree growth of each child at the School, we take action to mould them into intellectually brilliant, emotionally mature, ethically sound and physically fit individuals.
                </p>
                <p>
                  Our carefully-crafted curriculum makes it convenient for students to build these traits gradually, as they get accustomed to the life and culture at Ecole. It is through reading, debates, discussions and pondering that students learn to appreciate the various tenets of the type of education they are receiving.
                </p>
                <p>
                  I am especially proud to have a dedicated and hardworking team of faculty members, who diligently work with the girls to lead them to success. It is a joint effort of parents, teachers and students that propels the students in the direction that is the most beneficial for their progress. I urge you to always stay connected with the School and continue supporting us in our endeavors to take the children to greater heights in the future!
                </p>
                <div className="border-t border-gray-300 pt-6 mt-8">
                  <p className="font-semibold text-[17px] md:text-[18px] text-[#EC3237]">
                    Best Wishes,
                  </p>
                  <p className="font-semibold text-[16px] md:text-[17px] text-gray-900 mt-2">
                    Amarjeet Juneja
                  </p>
                  <p className="text-[14px] text-gray-600">
                    President, Ecole Globale International Girls&apos; School
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
}