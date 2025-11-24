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
        
        <Navbar />
        <Popup />
        {children}
        <Footer />
      </body>
    </html>
  );
}
