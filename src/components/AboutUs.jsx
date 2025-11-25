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
      <div className="bg-[#0F4976] text-white py-12 md:py-16 px-8 md:px-[99px]">
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
                    ? "text-[#0F4976] border-b-4 border-[#0F4976]"
                    : "text-gray-600 hover:text-[#0F4976]"
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
            <h2 className="font-semibold text-[28px] md:text-[36px] text-[#0F4976] mb-8">
              About School
            </h2>
            <div className="space-y-6 text-[15px] md:text-[16px] text-gray-800 leading-relaxed max-w-5xl">
              <p>
While formal education begins inside the classroom, Ecole Globale believes that meaningful learning extends far beyond textbooks. We value both academic excellence and co-curricular exposure—ensuring that every girl develops into a confident, thoughtful, and well-rounded individual prepared for the challenges of tomorrow.
              </p>
              <p>
             For future success, students need opportunities to strengthen communication skills, participate in sports, explore creative arts, develop self-belief, and understand the importance of community engagement. At Ecole, these experiences are integrated seamlessly into everyday learning so that each student grows with confidence and clarity.
              </p>
              
              <div className="bg-gray-50 p-6 md:p-8 rounded-lg border-l-4 border-[#0F4976] my-8">
                <p className="font-semibold text-[18px] text-[#0F4976] mb-4">
                  The Four Pillars of Our Foundation
                </p>
                <p>
                  The four pillars which form the foundation of our beliefs are – <span className="font-semibold text-[#0F4976]">Air, Earth, Water, and Fire</span>each representing qualities essential for balance and growth. We guide our students in discovering their individual strengths and encourage them to cultivate these qualities with purpose.

                </p>
              </div>

              <p>
                 Every girl at Ecole Globale receives equal opportunity to learn, grow, and excel—whether in academics, sports, arts, or other pursuits—while keeping holistic development at the core. Recognizing that each learner needs care and attention, we maintain a nurturing environment supported by advanced learning tools and a consistent 1:10 teacher-student ratio.<span className="font-semibold text-[#0F4976]">1:10</span>.
              </p>
              <p>
We also offer a dynamic student exchange program that expands global understanding and fosters appreciation for diverse cultures. These experiences help shape confident global citizens and strong future leaders. 
              </p>
              <p className="font-medium text-[17px] md:text-[18px] text-[#0F4976] mt-8">
Being at Ecole Globale is a transformative journey—an experience that enriches, educates, and empowers every girl for life beyond school.
              </p>
            </div>
          </div>
        )}

        {/* Vision & Mission Tab */}
        {activeTab === "vision" && (
          <div className="animate-fadeIn">
            <h2 className="font-semibold text-[28px] md:text-[36px] text-[#0F4976] mb-12 text-center">
              Vision & Mission
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              {/* Vision */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#0F4976]">
                <h3 className="font-semibold text-[24px] md:text-[28px] text-[#0F4976] mb-4">Vision</h3>
                <p className="text-[15px] md:text-[16px] text-gray-800 leading-relaxed">
To help every girl discover her strengths, think independently, and grow into a confident individual who is ready for the opportunities and challenges of the future.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#0F4976]">
                <h3 className="font-semibold text-[24px] md:text-[28px] text-[#0F4976] mb-4">Mission</h3>
                <p className="text-[15px] md:text-[16px] text-gray-800 leading-relaxed">
Our mission is to create a learning environment where curiosity is encouraged, skills are strengthened, and every student feels motivated to do her best. We use modern teaching methods and supportive technology so that learning continues both inside and outside the classroom.                </p>
              </div>
            </div>

            {/* Mission Details */}
            <div className="space-y-6 text-[15px] md:text-[16px] text-gray-800 leading-relaxed max-w-5xl mx-auto">
              <p>
        Education today demands much more than textbook knowledge. At Ecole Globale, we focus on preparing girls to adapt, communicate, and think critically in a fast-changing world. Each student is unique, and our curriculum is designed to support different learning styles, personalities, and interests.
We believe true education balances academics with life skills. That is why our girls participate in sports, creative activities, community work, public speaking, cultural programs, and leadership opportunities. Emotional intelligence is given equal importance so students learn to handle challenges with maturity and kindness.
Creativity is a key skill of the modern era, and we encourage students to express their ideas freely. Through art, drama, music, and other performing arts, they build confidence and develop sharper imagination. Every platform—from stage performances to exhibitions—helps them grow into expressive and innovative young individuals.
Physical fitness is also a core part of our philosophy. We promote healthy habits, active participation in sports, and overall well-being as essential components of a balanced life.
 </p>
            </div>
          </div>
        )}

        {/* President's Message Tab */}
        {activeTab === "president" && (
          <div className="animate-fadeIn">
            <h2 className="font-semibold text-[28px] md:text-[36px] text-[#0F4976] mb-8">
              President's Message
            </h2>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-[#0F4976] to-[#d62a2f] text-white p-6 md:p-8 rounded-t-lg">
                <p className="text-[20px] md:text-[24px] font-semibold">Amarjeet Juneja</p>
                <p className="text-[14px] md:text-[16px] opacity-90">President, Ecole Globale International Girls&apos; School</p>
              </div>
              
              <div className="bg-gray-50 p-6 md:p-12 rounded-b-lg shadow-lg space-y-6 text-[15px] md:text-[16px] text-gray-800 leading-relaxed">
                <p>
               As the President of Ecole Globale International Girls&apos; School, I feel a deep sense of pride each time I speak about our institution and the young girls who make it so special. Ecole has always stood for positivity, enthusiasm, and a vibrant spirit of learning, and these values guide every decision we take for our students. My vision has always been to help our girls grow into confident, responsible, and globally aware individuals, and our curriculum has been carefully shaped to support this belief.
I want to take a moment to speak directly to you, dear parents. I understand the sacrifices you make, the hopes you carry, and the dreams you nurture for your daughters. Entrusting your child to a school is one of the biggest decisions you make, and I am sincerely grateful that you have chosen Ecole. Please know that the well-being, safety, and development of every girl here is our highest priority. We value the upbringing you have given them, and we aim to build upon that foundation with care and responsibility.
At Ecole, we firmly believe that every child has immense potential—sometimes more than what they themselves realize. Our role is to help them discover their abilities, refine their strengths, and overcome their challenges with courage and determination. We work towards their all-round growth, ensuring that they evolve intellectually, emotionally, ethically, and physically. Through meaningful discussions, debates, reading, and reflective thinking, we encourage them to understand the true depth of the education they are receiving.
I am fortunate to have a team of dedicated and passionate educators who work tirelessly to guide our girls. Their commitment, combined with the support of parents and the efforts of students, creates a powerful partnership that leads to success. I encourage you to stay connected with the school, remain involved, and continue supporting us as we move forward with the shared goal of shaping bright, independent, and compassionate young women.
  </p>
                <div className="border-t border-gray-300 pt-6 mt-8">
                  <p className="font-semibold text-[17px] md:text-[18px] text-[#0F4976]">
With warm regards,                  </p>
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