"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function CurriculumPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Curriculum Overview" },
    { id: "igcse", label: "Cambridge IGCSE" },
    { id: "alevel", label: "Cambridge A Level" }
  ];

 useEffect(() => {
  const handleHashChange = () => {
    const hash = window.location.hash.replace("#", "");
    if (hash && tabs.some(t => t.id === hash)) {
      setActiveTab(hash);
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  handleHashChange(); // run on initial load
  window.addEventListener("hashchange", handleHashChange);

  return () => window.removeEventListener("hashchange", handleHashChange);
}, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#b0191e] text-white py-12 md:py-16 px-8 md:px-[99px]">
        <h1 className="font-bold text-[36px] md:text-[48px] mb-4 mt-48">Curriculum</h1>
        <p className="text-[16px] md:text-[18px] max-w-3xl italic">
          "The function of education is to teach one to think intensively and to think critically. Intelligence plus character – that is the goal of true education."
        </p>
        <p className="text-[14px] md:text-[16px] mt-2">– Martin Luther King Jr.</p>
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
                    ? "text-[#b0191e] border-b-4 border-[#b0191e]"
                    : "text-gray-600 hover:text-[#b0191e]"
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
        {/* Curriculum Overview Tab */}
        {activeTab === "overview" && (
          <div  id="overview" className="animate-fadeIn">
            <h2 className="font-semibold text-[28px] md:text-[36px] text-[#b0191e] mb-8">
              Cambridge International Curriculum
            </h2>
            <div className="space-y-6 text-[15px] md:text-[16px] text-gray-800 leading-relaxed max-w-5xl">
       The Cambridge International curriculum is recognised worldwide for its academic quality and global relevance. It sets a strong international benchmark and is accepted by leading universities and employers across the world. Known for its flexibility and well-designed academic structure, the CI curriculum encourages students to think deeply, explore creatively, and approach learning with curiosity and confidence. Today, more than 10,000 schools across 160+ countries follow the Cambridge framework, making it one of the most trusted international education systems.
This curriculum is thoughtfully designed to help students master subjects in depth while also preparing them with essential skills for higher studies and future careers. The program emphasises strong conceptual understanding, enabling students to connect ideas and apply knowledge across different topics. Along with academic clarity, it focuses on building advanced thinking skills such as critical analysis, problem-solving, independent research, collaboration, and effective communication. These lifelong skills equip learners to adapt confidently to real-world challenges, making learning both meaningful and enjoyable.
Cambridge qualifications are well respected globally and open doors to universities and career opportunities in India and abroad. Over 1,400 universities worldwide recognise these certifications, including all universities in the UK, more than 600 in the United States (such as Ivy League institutions), and leading institutions in Canada, Australia, Singapore, South Africa, Germany, and the Netherlands. A Cambridge qualification carries long-term value and is highly regarded in both academic and professional fields.

            </div>
          </div>
        )}

        {/* Cambridge IGCSE Tab */}
        {activeTab === "igcse" && (
          <div id="igcse"  className="animate-fadeIn">
            <h2 className="font-semibold text-[28px] md:text-[36px] text-[#b0191e] mb-8">
              Cambridge IGCSE
            </h2>
            
            <div className="space-y-6 text-[15px] md:text-[16px] text-gray-800 leading-relaxed max-w-5xl">
              <div className="bg-gradient-to-r from-[#b0191e] to-[#d62a2f] text-white p-6 md:p-8 rounded-lg mb-8">
                <p className="text-[18px] md:text-[20px] font-semibold mb-2">
                  The World&apos;s Most Popular International Qualification
                </p>
                <p className="text-[14px] md:text-[15px] opacity-90">
The Cambridge IGCSE is the most widely chosen international qualification for students aged 14–16. At Ecole Globale, students can opt for either the CBSE or CI curriculum when entering Grade 9. The two-year IGCSE programme (Classes IX and X) at Ecole offers a balanced range of subjects designed to challenge students academically while nurturing diverse interests and abilities.
                </p>
              </div>


              <h3 className="font-semibold text-[22px] md:text-[26px] text-[#b0191e] mt-10 mb-6">
                Subject Groups at Ecole Globale
              </h3>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#b0191e]">
                  <p className="font-semibold text-[18px] text-[#b0191e] mb-3">Group 1: Languages</p>
                  <p className="text-gray-700">
                    <span className="font-medium">English</span> (Compulsory), <span className="font-medium">French</span>, <span className="font-medium">Spanish</span>, <span className="font-medium">Hindi</span>
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#b0191e]">
                  <p className="font-semibold text-[18px] text-[#b0191e] mb-3">Group 2: Humanities</p>
                  <p className="text-gray-700">
                    <span className="font-medium">History</span>, <span className="font-medium">Geography</span>, <span className="font-medium">Economics</span>
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#b0191e]">
                  <p className="font-semibold text-[18px] text-[#b0191e] mb-3">Group 3: Sciences</p>
                  <p className="text-gray-700">
                    <span className="font-medium">Physics</span>, <span className="font-medium">Chemistry</span>, <span className="font-medium">Biology</span>, <span className="font-medium">Environmental Management</span>
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#b0191e]">
                  <p className="font-semibold text-[18px] text-[#b0191e] mb-3">Group 4: Mathematics</p>
                  <p className="text-gray-700">
                    <span className="font-medium">Mathematics</span>
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#b0191e]">
                  <p className="font-semibold text-[18px] text-[#b0191e] mb-3">Group 5: Creative and Vocational</p>
                  <p className="text-gray-700">
                    <span className="font-medium">ICT</span>, <span className="font-medium">Art & Design</span>, <span className="font-medium">Business Studies</span>, <span className="font-medium">Accounts</span>
                  </p>
                </div>
              </div>

              <h3 className="font-semibold text-[22px] md:text-[26px] text-[#b0191e] mt-10 mb-6">
                Assessment Structure
              </h3>
              
              <div className="bg-gray-50 p-6 md:p-8 rounded-lg my-6">
                <p className="mb-4">
                  Assessments for IGCSE take place at the end of the course (March session every year). These may include written papers, oral exams, coursework, and practical evaluations. This multi-format assessment system allows students to showcase their understanding in different ways, especially helpful for learners whose first language may not be English. Students receive one of eight internationally recognised grades: A*, A, B, C, D, E, F, or G.
                </p>
          
              
              </div>
            </div>
          </div>
        )}

        {/* Cambridge A Level Tab */}
        {activeTab === "alevel" && (
          <div id="alevel" className="animate-fadeIn">
            <h2 className="font-semibold text-[28px] md:text-[36px] text-[#b0191e] mb-8">
              Cambridge AS and A Level
            </h2>
            
            <div className="space-y-6 text-[15px] md:text-[16px] text-gray-800 leading-relaxed max-w-5xl">
          

              

              <h3 className="font-semibold text-[22px] md:text-[26px] text-[#b0191e] mt-10 mb-6">
Why Choose Cambridge A Levels?
              </h3>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#b0191e]">

                  <p className="text-[14px] text-gray-700">In-depth and immersive subject study that encourages academic mastery.
</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#b0191e]">
                  <p className="text-[14px] text-gray-700">Exposure to global thinking models, analytical reasoning, and policy-oriented perspectives.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#b0191e]">
                  <p className="text-[14px] text-gray-700">Emphasis on practical learning and real-world application.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#b0191e]">
                  <p className="text-[14px] text-gray-700">Structured and logical frameworks that promote clear and independent thought.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#b0191e] md:col-span-2">
                  <p className="text-[14px] text-gray-700">Internationally benchmarked grading systems that highlight strengths and guide improvement.</p>
                </div>
              </div>

              <h3 className="font-semibold text-[22px] md:text-[26px] text-[#b0191e] mt-10 mb-6">
                Subject Selection at Ecole Globale
              </h3>

              <div className="bg-gray-50 p-6 md:p-8 rounded-lg border-l-4 border-[#b0191e] mb-8">
                <p className="mb-4">
                  <span className="font-semibold text-[#b0191e]">AS Level:</span> Students select 4-5 subjects
                </p>
                <p>
                  <span className="font-semibold text-[#b0191e]">A Level:</span> Students select 3-4 subjects
                </p>
              </div>

              <h3 className="font-semibold text-[20px] md:text-[22px] text-[#b0191e] mb-4">
                Available Subjects
              </h3>

              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["English", "Physics", "Chemistry", "Biology", "Economics", "Business", "Accounts", "History", "Psychology", "Information Technology", "Mathematics"].map((subject, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-[#b0191e] rounded-full mr-3"></div>
                      <span className="text-[14px] md:text-[15px] text-gray-800">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="font-semibold text-[22px] md:text-[26px] text-[#b0191e] mt-10 mb-6">
                Grading System
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#b0191e]">
                  <p className="font-semibold text-[17px] text-gray-900 mb-3">Cambridge International A Level</p>
                  <p className="text-[14px] text-gray-700 mb-2">Grade scale: <span className="font-semibold text-[#b0191e]">A* to E</span></p>
                  <p className="text-[13px] text-gray-600">A* being the highest and E being the minimum required performance</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#b0191e]">
                  <p className="font-semibold text-[17px] text-gray-900 mb-3">Cambridge International AS Level</p>
                  <p className="text-[14px] text-gray-700 mb-2">Grade scale: <span className="font-semibold text-[#b0191e]">A to E</span></p>
                  <p className="text-[13px] text-gray-600">No A* grade available for AS Level qualifications</p>
                </div>
              </div>

              <p className="font-medium text-[17px] md:text-[18px] text-[#b0191e] mt-8">
                The Cambridge A Level qualification opens doors to the world&apos;s top universities and prepares students for academic excellence and future career success.
              </p>
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