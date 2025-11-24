"use client";
import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// const Navbar = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileDropdown, setMobileDropdown] = useState(null);

//   const navItems = [
//     {
//       title: "HOME",
//       hasDropdown: false,
//       path: "https://www.laureateshimla.com/",
//     },
//     {
//       title: "ABOUT US",
//       hasDropdown: false,
//       path: "/about-us/",
     
//     },
//     {
//       title: "ACADEMICS",
//       hasDropdown: true,
//       path: "/curriculum",
//       options: [
//         {
//           title: "Curriculum",
//           path: "/curriculum",
//         },
//         {
//           title: "Academic Philosophy",
//           path: "https://www.laureateshimla.com/academic-philosophy",
//         },
//       ],
//     },
//     {
//       title: "GALLERY",
//       hasDropdown: true,
//       path: "#",
//       options: [
//         {
//           title: "Our Botanical Garden",
//           path: "https://www.laureateshimla.com/our-botanical-garden",
//         },
//         {
//           title: "Image Gallery",
//           path: "https://www.laureateshimla.com/campus-gallery",
//         },
//         { title: "Events", path: "#" },
//       ],
//     },
//     {
//       title: "CONTACT US",
//       hasDropdown: false,
//       path: "https://www.laureateshimla.com/contact-us/",
//     },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full backdrop-blur-md text-white bg-[#0000006d] z-50 shadow-md">
//       <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
//         <Image
//           src="/main-logo.png"
//           alt="Main Logo"
//           height={1000}
//           width={1000}
//           className="w-48 h-20"
//         />

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-5 py-3">
//           {navItems.map((item, index) => (
//             <div
//               key={index}
//               className="relative"
//               onMouseEnter={() => setActiveDropdown(index)}
//               onMouseLeave={() => setActiveDropdown(null)}
//             >
//               <div className="flex items-center cursor-pointer px-3 py-2">
//                 <Link
//                   href={item.path}
//                   className="flex items-center xl:text-[12px] text-[11px] rounded-md transition"
//                 >
//                   {item.title}
//                 </Link>

//                 {item.hasDropdown && (
//                   <ChevronDown className="ml-1 w-4 h-4" />
//                 )}
//               </div>

//               {item.hasDropdown && activeDropdown === index && (
//                 <div className="absolute left-0 mt-6 bg-white text-black px-3 py-2 shadow-lg rounded-md w-48">
//                   {item.options?.map((opt, i) => (
//                     <Link
//                       key={i}
//                       href={opt.path}
//                       className="block px-2 py-1 hover:bg-gray-100"
//                     >
//                       {opt.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           {mobileMenuOpen ? (
//             <X className="w-6 h-6" />
//           ) : (
//             <Menu className="w-6 h-6" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-[#b0191e] py-3 px-6 h-screen flex flex-col">
//           {navItems.map((item, index) => (
//             <div key={index} className="border-b border-blue-700">
//               <div
//                 className="flex justify-between items-center w-full py-3"
//                 onClick={() =>
//                   item.hasDropdown
//                     ? setMobileDropdown(mobileDropdown === index ? null : index)
//                     : setMobileMenuOpen(false)
//                 }
//               >
//                 <Link
//                   href={item.path}
//                   className="flex-grow text-left"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {item.title}
//                 </Link>

//                 {item.hasDropdown && (
//                   <ChevronDown className="w-5 h-5" />
//                 )}
//               </div>

//               {/* Mobile Dropdown Items */}
//               {item.hasDropdown && mobileDropdown === index && (
//                 <div className="pl-4 pb-2">
//                   {item.options?.map((opt, i) => (
//                     <Link
//                       key={i}
//                       href={opt.path}
//                       className="block py-1"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       {opt.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const navItems = [
    {
      title: "HOME",
      hasDropdown: false,
      path: "/",
    },
    {
      title: "ABOUT US",
      hasDropdown: false,
      path: "/about-us/",
     
    },
    {
      title: "CURRICULUM",
      hasDropdown: true,
      options: [
  { title: "Overview", path: "/curriculum#overview" },
  { title: "IGCSE", path: "/curriculum#igcse" },
  { title: "A Level", path: "/curriculum#alevel" },
],

    },
 
    {
      title: "CONTACT US",
      hasDropdown: false,
      path: "/contact-us/",
    },
        {
      title: "BLOGS",
      hasDropdown: false,
      path: "https://www.ecoleglobale.com/blogs",
    },
  ];

  return (
    <nav className=" relative top-0 left-0 w-full  backdrop-blur-md text-white bg-black/50 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
             <Image
          src="/main-logo.png"
          alt="Main Logo"
          height={1000}
          width={1000}
          className="w-40 h-[70px] md:w-64 md:h-28 object-contain"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-16 py-3">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="flex items-center cursor-pointer px-3 py-2">
                <a
                  href={item.path}
                  className="flex items-center xl:text-[12px] text-[11px] rounded-md transition"
                >
                  {item.title}
                </a>

                {item.hasDropdown && (
                  <ChevronDown className="ml-1 w-4 h-4" />
                )}
              </div>

              {item.hasDropdown && activeDropdown === index && (
<div className="absolute left-0 top-full bg-white text-black px-3 py-2 shadow-lg rounded-md w-48 z-[99999]">
                  {item.options?.map((opt, i) => (
                    <a
                      key={i}
                      href={opt.path}
                      className="block px-2 py-1 hover:bg-gray-100 rounded"
                    >
                      {opt.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#b0191e] py-3 px-6 h-screen flex flex-col">
          {navItems.map((item, index) => (
            <div key={index} className="border-b border-blue-700">
              <div
                className="flex justify-between items-center w-full py-3"
                onClick={() =>
                  item.hasDropdown
                    ? setMobileDropdown(mobileDropdown === index ? null : index)
                    : setMobileMenuOpen(false)
                }
              >
                <a
                  href={item.path}
                  className="flex-grow text-left"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </a>

                {item.hasDropdown && (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>

              {/* Mobile Dropdown Items */}
              {item.hasDropdown && mobileDropdown === index && (
                <div className="pl-4 pb-2">
                  {item.options?.map((opt, i) => (
                    <a
                      key={i}
                      href={opt.path}
                      className="block py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {opt.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
