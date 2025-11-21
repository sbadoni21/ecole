"use client"
import React, { useState } from "react";

export default function CurriculumPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Curriculum Overview" },
    { id: "igcse", label: "Cambridge IGCSE" },
    { id: "alevel", label: "Cambridge A Level" }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#EC3237] text-white py-12 md:py-16 px-8 md:px-[99px]">
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
        {/* Curriculum Overview Tab */}
        {activeTab === "overview" && (
          <div className="animate-fadeIn">
            <h2 className="font-semibold text-[28px] md:text-[36px] text-[#EC3237] mb-8">
              Cambridge International Curriculum
            </h2>
            <div className="space-y-6 text-[15px] md:text-[16px] text-gray-800 leading-relaxed max-w-5xl">
              <p>
                The Cambridge International curriculum sets a global standard for education, and is recognised by universities and employers worldwide. The CI curriculum is flexible, challenging and inspiring, culturally sensitive yet international in approach. Cambridge students develop an informed curiosity and a lasting passion for learning. They also gain the essential skills they need for success at university and in their future careers.
              </p>
              <p>
                Over <span className="font-semibold text-[#EC3237]">10,000 schools</span> in over <span className="font-semibold text-[#EC3237]">160 countries</span> follow the Cambridge international curriculum, making it a truly global educational framework.
              </p>
              
              <div className="bg-gray-50 p-6 md:p-8 rounded-lg border-l-4 border-[#EC3237] my-8">
                <p className="font-semibold text-[18px] text-[#EC3237] mb-4">
                  Why Choose Cambridge?
                </p>
                <p>
                  Cambridge programmes combine an emphasis on mastering subjects in depth with the development of skills for study and work in the future. It values deep subject knowledge as well as the conceptual understanding that helps students make links between different aspects of a subject. It also encourages students to develop higher order thinking skills – problem solving, critical thinking, independent research, collaboration and presenting arguments. These are transferable skills that will last a lifetime, preparing students for their future lives.
                </p>
              </div>

              <h3 className="font-semibold text-[22px] md:text-[26px] text-[#EC3237] mt-10 mb-4">
                Global Recognition
              </h3>
              <p>
                Cambridge qualifications are globally recognised, accepted by universities and employers at home and around the world. A Cambridge qualification comes with an impressive reputation, and will retain its value for a lifetime of education and employment.
              </p>
              <p>
                Over <span className="font-semibold text-[#EC3237]">1,400 universities worldwide</span> recognise Cambridge qualifications. They are accepted by:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#EC3237]">
                  <p className="font-semibold text-[16px] text-gray-900 mb-2">United Kingdom</p>
                  <p className="text-[14px] text-gray-700">Every UK university</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#EC3237]">
                  <p className="font-semibold text-[16px] text-gray-900 mb-2">United States</p>
                  <p className="text-[14px] text-gray-700">600 universities (including all Ivy League)</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#EC3237]">
                  <p className="font-semibold text-[16px] text-gray-900 mb-2">Canada & Australia</p>
                  <p className="text-[14px] text-gray-700">Major universities nationwide</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#EC3237]">
                  <p className="font-semibold text-[16px] text-gray-900 mb-2">Global Destinations</p>
                  <p className="text-[14px] text-gray-700">Singapore, South Africa, Germany, Netherlands</p>
                </div>
              </div>

              <p className="font-medium text-[17px] md:text-[18px] text-[#EC3237] mt-8">
                At Ecole Globale, students can choose between CBSE and CI curriculum in Grade 9, offering flexibility to match their educational goals and aspirations.
              </p>
            </div>
          </div>
        )}

        {/* Cambridge IGCSE Tab */}
        {activeTab === "igcse" && (
          <div className="animate-fadeIn">
            <h2 className="font-semibold text-[28px] md:text-[36px] text-[#EC3237] mb-8">
              Cambridge IGCSE
            </h2>
            
            <div className="space-y-6 text-[15px] md:text-[16px] text-gray-800 leading-relaxed max-w-5xl">
              <div className="bg-gradient-to-r from-[#EC3237] to-[#d62a2f] text-white p-6 md:p-8 rounded-lg mb-8">
                <p className="text-[18px] md:text-[20px] font-semibold mb-2">
                  The World&apos;s Most Popular International Qualification
                </p>
                <p className="text-[14px] md:text-[15px] opacity-90">
                  For 14 to 16 year olds | Classes IX and X
                </p>
              </div>

              <p>
                Cambridge IGCSE (International General Certificate of Secondary Education) is the world&apos;s most popular international qualification for 14 to 16 year olds. At Ecole Globale, students can choose to decide between CBSE and CI curriculum in Grade 9.
              </p>
              <p>
                In the two-year IGCSE programme at Ecole, Classes IX and X students study a range of subjects that are exciting and challenging. The curriculum is designed to develop intellectual inquiry, problem-solving skills and creative expression.
              </p>

              <h3 className="font-semibold text-[22px] md:text-[26px] text-[#EC3237] mt-10 mb-6">
                Subject Groups at Ecole Globale
              </h3>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#EC3237]">
                  <p className="font-semibold text-[18px] text-[#EC3237] mb-3">Group 1: Languages</p>
                  <p className="text-gray-700">
                    <span className="font-medium">English</span> (Compulsory), <span className="font-medium">French</span>, <span className="font-medium">Spanish</span>, <span className="font-medium">Hindi</span>
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#EC3237]">
                  <p className="font-semibold text-[18px] text-[#EC3237] mb-3">Group 2: Humanities</p>
                  <p className="text-gray-700">
                    <span className="font-medium">History</span>, <span className="font-medium">Geography</span>, <span className="font-medium">Economics</span>
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#EC3237]">
                  <p className="font-semibold text-[18px] text-[#EC3237] mb-3">Group 3: Sciences</p>
                  <p className="text-gray-700">
                    <span className="font-medium">Physics</span>, <span className="font-medium">Chemistry</span>, <span className="font-medium">Biology</span>, <span className="font-medium">Environmental Management</span>
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#EC3237]">
                  <p className="font-semibold text-[18px] text-[#EC3237] mb-3">Group 4: Mathematics</p>
                  <p className="text-gray-700">
                    <span className="font-medium">Mathematics</span>
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#EC3237]">
                  <p className="font-semibold text-[18px] text-[#EC3237] mb-3">Group 5: Creative and Vocational</p>
                  <p className="text-gray-700">
                    <span className="font-medium">ICT</span>, <span className="font-medium">Art & Design</span>, <span className="font-medium">Business Studies</span>, <span className="font-medium">Accounts</span>
                  </p>
                </div>
              </div>

              <h3 className="font-semibold text-[22px] md:text-[26px] text-[#EC3237] mt-10 mb-6">
                Assessment Structure
              </h3>
              
              <div className="bg-gray-50 p-6 md:p-8 rounded-lg my-6">
                <p className="mb-4">
                  Cambridge IGCSE assessment takes place at the end of the course (every year during March) and can include written, oral, coursework and practical assessment. This broadens opportunities for students to demonstrate their learning, particularly when their first language is not English.
                </p>
                <p className="font-semibold text-[#EC3237] mb-2">Grading System:</p>
                <p className="text-gray-800">
                  Grades are benchmarked using eight internationally recognised grades: <span className="font-semibold">A*, A, B, C, D, E, F and G</span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Cambridge A Level Tab */}
        {activeTab === "alevel" && (
          <div className="animate-fadeIn">
            <h2 className="font-semibold text-[28px] md:text-[36px] text-[#EC3237] mb-8">
              Cambridge AS and A Level
            </h2>
            
            <div className="space-y-6 text-[15px] md:text-[16px] text-gray-800 leading-relaxed max-w-5xl">
              <div className="bg-gradient-to-r from-[#EC3237] to-[#d62a2f] text-white p-6 md:p-8 rounded-lg mb-8">
                <p className="text-[18px] md:text-[20px] font-semibold mb-2">
                  Advanced Level Qualifications
                </p>
                <p className="text-[14px] md:text-[15px] opacity-90">
                  Equivalent to Grades 11 and 12 in India
                </p>
              </div>

              <p>
                Cambridge AS and A Level is a continuation of the IGCSE examination that students take up in Grade 10. In India, it is equivalent to Grades 11 and 12. A Level stands for <span className="font-semibold text-[#EC3237]">Advanced Level</span> and AS Level stands for <span className="font-semibold text-[#EC3237]">Advanced Subsidiary Level</span>.
              </p>
              <p>
                An AS Level contains half the content of the corresponding A Level and is normally completed in one year. Learners take all the assessments for their full A Level at the end of the second year.
              </p>

              <h3 className="font-semibold text-[22px] md:text-[26px] text-[#EC3237] mt-10 mb-6">
                Advantages of Cambridge A Level
              </h3>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#EC3237]">
                  <h4 className="font-semibold text-[17px] text-gray-900 mb-3">Comprehensive Study</h4>
                  <p className="text-[14px] text-gray-700">Comprehensive and immersive study of subjects with depth and rigor.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#EC3237]">
                  <h4 className="font-semibold text-[17px] text-gray-900 mb-3">Global Exposure</h4>
                  <p className="text-[14px] text-gray-700">Exposure to international policy making, thinking and problem solving.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#EC3237]">
                  <h4 className="font-semibold text-[17px] text-gray-900 mb-3">Practical Learning</h4>
                  <p className="text-[14px] text-gray-700">Practical learning and knowledge application through hands-on experiences.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#EC3237]">
                  <h4 className="font-semibold text-[17px] text-gray-900 mb-3">Critical Thinking</h4>
                  <p className="text-[14px] text-gray-700">Logical and structured thinking models and rational discourses.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#EC3237] md:col-span-2">
                  <h4 className="font-semibold text-[17px] text-gray-900 mb-3">International Benchmarking</h4>
                  <p className="text-[14px] text-gray-700">Internationally benchmarked grading system that encourages strengths, identifies weakness and provides guidelines for standards of achievement.</p>
                </div>
              </div>

              <h3 className="font-semibold text-[22px] md:text-[26px] text-[#EC3237] mt-10 mb-6">
                Subject Selection at Ecole Globale
              </h3>

              <div className="bg-gray-50 p-6 md:p-8 rounded-lg border-l-4 border-[#EC3237] mb-8">
                <p className="mb-4">
                  <span className="font-semibold text-[#EC3237]">AS Level:</span> Students select 4-5 subjects
                </p>
                <p>
                  <span className="font-semibold text-[#EC3237]">A Level:</span> Students select 3-4 subjects
                </p>
              </div>

              <h3 className="font-semibold text-[20px] md:text-[22px] text-[#EC3237] mb-4">
                Available Subjects
              </h3>

              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["English", "Physics", "Chemistry", "Biology", "Economics", "Business", "Accounts", "History", "Psychology", "Information Technology", "Mathematics"].map((subject, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3"></div>
                      <span className="text-[14px] md:text-[15px] text-gray-800">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="font-semibold text-[22px] md:text-[26px] text-[#EC3237] mt-10 mb-6">
                Grading System
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#EC3237]">
                  <p className="font-semibold text-[17px] text-gray-900 mb-3">Cambridge International A Level</p>
                  <p className="text-[14px] text-gray-700 mb-2">Grade scale: <span className="font-semibold text-[#EC3237]">A* to E</span></p>
                  <p className="text-[13px] text-gray-600">A* being the highest and E being the minimum required performance</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#EC3237]">
                  <p className="font-semibold text-[17px] text-gray-900 mb-3">Cambridge International AS Level</p>
                  <p className="text-[14px] text-gray-700 mb-2">Grade scale: <span className="font-semibold text-[#EC3237]">A to E</span></p>
                  <p className="text-[13px] text-gray-600">No A* grade available for AS Level qualifications</p>
                </div>
              </div>

              <p className="font-medium text-[17px] md:text-[18px] text-[#EC3237] mt-8">
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