import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import Popup from "@/components/Popup";

function generateMeta() {
  return {
    title: "Ranked No.1 Boarding School in Shimla | Admissions 2025-26",
    description:
      "Enroll now at Ecole Global International Girls School, Shimla's top-ranked boarding school for academic session 2025-26. Exceptional education, holistic development.",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://schools.edu123.in/",
      siteName: "Ecole Global International Girls School",
      title: "Ranked No.1 Boarding School in Shimla | Admissions 2025-26",
      description:
        "Enroll now at Ecole Global International Girls School, Shimla's top-ranked boarding school for academic session 2025-26. Exceptional education, holistic development.",
      images: [
        {
          url: "https://schools.edu123.in/life.svg",
          width: 1200,
          height: 630,
          alt: "Ecole Global International Girls School",
        },
      ],
    },
  };
}

export const metadata = generateMeta();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="favicon.ico" />
        
        
      
      
   

      </head>
      <body>
        <a href="tel:6230031111" className="flex items-center gap-2">
          <div className="fixed bottom-4 z-50 left-6 w-16 h-16 rounded-full bg-green-600 flex justify-center items-center">
            <div className="relative flex items-center justify-center w-[60px] h-[60px]">
              <div className="absolute inset-0 rounded-full bg-green-400 animate-ripple"></div>
              <FaPhoneAlt className="text-white text-2xl" />
            </div>
          </div>
        </a>
        <Navbar />
        <Popup />
        {children}
        <Footer />
      </body>
    </html>
  );
}
