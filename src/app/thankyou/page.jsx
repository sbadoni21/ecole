import VideoSection from '@/components/ImageCarousel';
import Link from 'next/link';
import React from 'react';
import Script from 'next/script';

function generateMeta() {
  return {
    title: "Thank You | Ecole Global International Girls School",
    description: "Thank you for reaching out! Our team will contact you soon.",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://schools.edu123.in/thank-you",
      siteName: "Ecole Global International Girls School",
      title: "Thank You | Ecole Global International Girls School",
      description: "Thank you for reaching out! Our team will contact you soon.",
      images: [
        {
          url: "https://schools.edu123.in/thank-you-image.jpg",
          width: 1200,
          height: 630,
          alt: "Thank You",
        },
      ],
    },
    scripts: [
      {
        id: 'google-ads-conversion',
        content: `
          gtag('event', 'conversion', {
            'send_to': 'AW-11477693865/ygYMCOzViJ4aEKnr_uAq',
            'value': 1.0,
            'currency': 'INR'
          });
        `,
      },
      {
        id: 'tawk-to',
        src: 'https://embed.tawk.to/67937529825083258e0aa029/1iic03aq3',
        async: true,
        type: 'text/javascript',
      },
    ],
  };
}

export const metadata = generateMeta();

export default function ThankYouPage() {
  return (
    <>
    
      
      <VideoSection />
      <div className="flex flex-col items-center justify-center py-10 bg-gradient-to-b from-blue-50 to-white text-black px-6">
        <div className="rounded-lg p-8 md:p-12 flex flex-col space-y-6 text-center">
          <h1 className="text-3xl md:text-8xl font-bold text-[#EC3237]">Thank You!</h1>
          <p className="text-lg md:text-3xl text-gray-700 leading-relaxed">
            Thank You for your query. Our team will contact you soon.
          </p>

          <Link href="/">
            <button className="md:mt-8 px-6 py-3 md:px-16 text-xl md:py-4 bg-[#EC3237] hover:bg-[#024f72] text-white font-medium rounded-lg transition duration-300 shadow-md">
              Back To Home
            </button>
          </Link>
        </div>
      </div>

      <Script
        id="google-ads-conversion"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
              'send_to': 'AW-11477693865/ygYMCOzViJ4aEKnr_uAq',
              'value': 1.0,
              'currency': 'INR'
            });
          `,
        }}
      />
      
    </>
  );
}
