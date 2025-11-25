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
           <meta charset="utf-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <title>Best Girls Boarding School in Dehradun | Admissions 2026-27</title>

    <meta name="description"
        content="Ecole Globale is one of the leading girls’ boarding schools in Dehradun, offering world-class education, holistic development, and a safe, empowering environment for young learners." />

    <meta name="keywords"
        content="Ecole Globale, Girls Boarding School Dehradun, Best Girls School Dehradun, Top Residential Schools India, CBSE Girls Boarding, International Girls School, Dehradun Boarding Schools, School Admissions Dehradun, Girls Education India" />

    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Ecole Globale International Girls’ School | Best Girls Boarding School in Dehradun" />
    <meta property="og:description"
        content="Ecole Globale is one of the leading girls’ boarding schools in Dehradun, offering world-class education, holistic development, and a safe environment." />
    <meta property="og:url" content="https://www.ecoleglobale.in/" />
    <meta property="og:site_name" content="Ecole Globale International Girls’ School" />
    <meta property="og:image"
        content="https://www.ecoleglobale.com/wp-content/uploads/2024/03/discover-ecole-globale-international-girls-school.jpg" />

        
      
      
   

      </head>
      <body className="w-screen">
        
        <Navbar />
        <Popup />
        {children}
        <Footer />
      </body>
    </html>
  );
}
