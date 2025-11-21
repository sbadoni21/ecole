"use client"
import React from "react";

export default function SyllabusPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#EC3237] text-white py-12 md:py-16 px-8 md:px-[99px]">
        <h1 className="font-bold text-[36px] md:text-[48px] mb-4 mt-48">Syllabus</h1>
        <p className="text-[16px] md:text-[18px] max-w-3xl italic">
          "Education is not the learning of facts, but the training of the mind to think."
        </p>
        <p className="text-[14px] md:text-[16px] mt-2">– Albert Einstein</p>
      </div>

      {/* Main Content */}
      <div className="py-12 md:py-16 px-8 md:px-[99px]">
        
        {/* CBSE Program Section */}
        <div className="mb-16">
          <h2 className="font-semibold text-[28px] md:text-[36px] text-[#EC3237] mb-8">
            About CBSE Program
          </h2>
          
          <div className="space-y-6 text-[15px] md:text-[16px] text-gray-800 leading-relaxed max-w-5xl">
            <p>
              The CBSE Program offered by the School is monitored by the Central Board of Secondary Education and is offered from Class IV through Class XII. Initially, when a student enrolls into the School, they get to only choose the CBSE Curriculum, as it is one of the most popular and widely accepted boards in the country. An individual may continue to study as a CBSE student until the end of their school tenure. However, they are offered a choice to shift to the CIE (Cambridge) Curriculum before the beginning of Class IX.
            </p>
            
            <p>
              The evaluations and assessment models are carefully crafted in accordance with latest CBSE Rules and Regulations and a close check on them is observed by the dedicated CBSE Teacher Coordinator.
            </p>

            <div className="bg-gray-50 p-6 md:p-8 rounded-lg border-l-4 border-[#EC3237] my-8">
              <p className="font-semibold text-[18px] text-[#EC3237] mb-4">
                Core Philosophy of CBSE
              </p>
              <p>
                The courseware of CBSE is meant to develop an analytical and reasoning-based thinking. As it is widely accepted across the country, it takes into account the diverse cultural backgrounds of the population of students. Therefore, it is a highly recommended program for an Ecolier, since the students at Ecole represent a variety of geographical and cultural diversity, coming from different backgrounds. This curriculum caters to every student and holds something different to offer to each individual. The material is comprehensive, easy to understand and grasp.
              </p>
            </div>

            <h3 className="font-semibold text-[22px] md:text-[26px] text-[#EC3237] mt-10 mb-4">
              Advantage for National Entrance Exams
            </h3>
            <p>
              CBSE students also have an edge when it comes to writing national level entrance tests after Class XII, which are taken for the purpose of Undergrad admissions. The courseware studied over the years develops a sound base of knowledge, which students can directly apply at the time of such entrance exams.
            </p>

            <h3 className="font-semibold text-[22px] md:text-[26px] text-[#EC3237] mt-10 mb-4">
              Experienced Faculty
            </h3>
            <p>
              The School provides highly skilled instructors, who have experience of numerous years in teaching the CBSE Curriculum. These teachers understand the ins and outs of CBSE learning methods, assessments, paper patterns and provide opportunities to students to do ample of practice for the same. Some of the teachers for the CBSE Curriculum have had past experience of teaching at some of the most respectable schools, for over 15 years and they continue to lend their expertise for the benefit of the students.
            </p>
          </div>
        </div>

        {/* Grade-wise Syllabus Section */}
        <div className="mb-16">
          <h2 className="font-semibold text-[28px] md:text-[36px] text-[#EC3237] mb-8">
            Grade-wise Syllabus Structure
          </h2>

          <div className="space-y-8 max-w-5xl">
            {/* Primary Classes */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#EC3237]">
              <div className="bg-gradient-to-r from-[#EC3237] to-[#d62a2f] text-white p-6">
                <h3 className="font-semibold text-[22px] md:text-[24px]">Primary Classes (IV - V)</h3>
                <p className="text-[14px] opacity-90 mt-2">Building Strong Foundations</p>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[15px] md:text-[16px] text-gray-800 leading-relaxed mb-6">
                  The primary years focus on developing foundational skills in literacy, numeracy, and general awareness. Students are introduced to core subjects through engaging and age-appropriate methodologies.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold text-[15px] text-gray-900">English</p>
                      <p className="text-[14px] text-gray-600">Language and Literature</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold text-[15px] text-gray-900">Mathematics</p>
                      <p className="text-[14px] text-gray-600">Numerical Skills & Problem Solving</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold text-[15px] text-gray-900">Science</p>
                      <p className="text-[14px] text-gray-600">Environmental Studies</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold text-[15px] text-gray-900">Social Science</p>
                      <p className="text-[14px] text-gray-600">History, Geography & Civics</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold text-[15px] text-gray-900">Hindi</p>
                      <p className="text-[14px] text-gray-600">Second Language</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold text-[15px] text-gray-900">Computer Science</p>
                      <p className="text-[14px] text-gray-600">Basic IT Skills</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Classes */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#EC3237]">
              <div className="bg-gradient-to-r from-[#EC3237] to-[#d62a2f] text-white p-6">
                <h3 className="font-semibold text-[22px] md:text-[24px]">Middle Classes (VI - VIII)</h3>
                <p className="text-[14px] opacity-90 mt-2">Expanding Knowledge & Skills</p>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[15px] md:text-[16px] text-gray-800 leading-relaxed mb-6">
                  Middle school curriculum builds upon primary foundations with increased depth and complexity. Students develop critical thinking, analytical reasoning, and subject-specific expertise.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold text-[15px] text-gray-900">English</p>
                      <p className="text-[14px] text-gray-600">Advanced Language & Literature</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold text-[15px] text-gray-900">Mathematics</p>
                      <p className="text-[14px] text-gray-600">Algebra, Geometry & Statistics</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold text-[15px] text-gray-900">Science</p>
                      <p className="text-[14px] text-gray-600">Physics, Chemistry & Biology</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold text-[15px] text-gray-900">Social Science</p>
                      <p className="text-[14px] text-gray-600">History, Geography, Civics & Economics</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold text-[15px] text-gray-900">Hindi/Sanskrit</p>
                      <p className="text-[14px] text-gray-600">Second Language</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold text-[15px] text-gray-900">Computer Science</p>
                      <p className="text-[14px] text-gray-600">Programming & Applications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Classes (IX - X) */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#EC3237]">
              <div className="bg-gradient-to-r from-[#EC3237] to-[#d62a2f] text-white p-6">
                <h3 className="font-semibold text-[22px] md:text-[24px]">Secondary Classes (IX - X)</h3>
                <p className="text-[14px] opacity-90 mt-2">Board Examination Preparation</p>
              </div>
              <div className="p-6 md:p-8">
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                  <p className="text-[14px] text-yellow-800 font-semibold">
                    Note: Students have the option to switch to Cambridge IGCSE curriculum before Class IX
                  </p>
                </div>
                <p className="text-[15px] md:text-[16px] text-gray-800 leading-relaxed mb-6">
                  Secondary education prepares students for the CBSE Board Examinations in Class X. The curriculum emphasizes conceptual clarity, practical applications, and exam preparation strategies.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold text-[15px] text-gray-900">English Language & Literature</p>
                      <p className="text-[14px] text-gray-600">Compulsory</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold text-[15px] text-gray-900">Mathematics (Standard/Basic)</p>
                      <p className="text-[14px] text-gray-600">Compulsory</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold text-[15px] text-gray-900">Science</p>
                      <p className="text-[14px] text-gray-600">Physics, Chemistry, Biology</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold text-[15px] text-gray-900">Social Science</p>
                      <p className="text-[14px] text-gray-600">History, Geography, Civics, Economics</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold text-[15px] text-gray-900">Hindi/Sanskrit</p>
                      <p className="text-[14px] text-gray-600">Second Language</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold text-[15px] text-gray-900">Additional Subject</p>
                      <p className="text-[14px] text-gray-600">Computer Applications/IT/Others</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Senior Secondary Classes (XI - XII) */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#EC3237]">
              <div className="bg-gradient-to-r from-[#EC3237] to-[#d62a2f] text-white p-6">
                <h3 className="font-semibold text-[22px] md:text-[24px]">Senior Secondary Classes (XI - XII)</h3>
                <p className="text-[14px] opacity-90 mt-2">Stream Specialization & Board Exams</p>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[15px] md:text-[16px] text-gray-800 leading-relaxed mb-6">
                  Senior secondary education offers stream-based specialization to prepare students for higher education and competitive examinations. Students choose from Science, Commerce, or Humanities streams.
                </p>
                
                {/* Science Stream */}
                <div className="mb-6 p-5 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-[18px] text-[#EC3237] mb-4">Science Stream</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3"></div>
                      <p className="text-[14px] text-gray-800">Physics</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3"></div>
                      <p className="text-[14px] text-gray-800">Chemistry</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3"></div>
                      <p className="text-[14px] text-gray-800">Mathematics/Biology</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3"></div>
                      <p className="text-[14px] text-gray-800">English</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3"></div>
                      <p className="text-[14px] text-gray-800">Computer Science/Physical Education</p>
                    </div>
                  </div>
                </div>

                {/* Commerce Stream */}
                <div className="mb-6 p-5 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-[18px] text-[#EC3237] mb-4">Commerce Stream</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3"></div>
                      <p className="text-[14px] text-gray-800">Accountancy</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3"></div>
                      <p className="text-[14px] text-gray-800">Business Studies</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3"></div>
                      <p className="text-[14px] text-gray-800">Economics</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3"></div>
                      <p className="text-[14px] text-gray-800">English</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3"></div>
                      <p className="text-[14px] text-gray-800">Mathematics/Informatics Practices</p>
                    </div>
                  </div>
                </div>

                {/* Humanities Stream */}
                <div className="p-5 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-[18px] text-[#EC3237] mb-4">Humanities Stream</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3"></div>
                      <p className="text-[14px] text-gray-800">History</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3"></div>
                      <p className="text-[14px] text-gray-800">Political Science</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3"></div>
                      <p className="text-[14px] text-gray-800">Economics/Geography</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3"></div>
                      <p className="text-[14px] text-gray-800">English</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#EC3237] rounded-full mr-3"></div>
                      <p className="text-[14px] text-gray-800">Psychology/Sociology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-[#EC3237] to-[#d62a2f] text-white p-8 md:p-10 rounded-lg max-w-5xl">
          <h3 className="font-semibold text-[22px] md:text-[26px] mb-4">
            Need More Information?
          </h3>
          <p className="text-[15px] md:text-[16px] mb-6 opacity-95">
            The Admission Counsellors can be contacted for more information about the CBSE Program offered by the School, including detailed syllabus breakdowns, assessment patterns, and subject combinations.
          </p>
          <p className="font-medium text-[17px]">
            Connect with our Admission Team to learn more about how CBSE curriculum at Ecole Globale can benefit your child's educational journey.
          </p>
        </div>

      </div>
    </div>
  );
}