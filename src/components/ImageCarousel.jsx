"use client";
import React, { useEffect, useRef, useState } from "react";

const MOBILE_IMAGES = [
  "https://www.ecoleglobale.com/assets/img/ec-mobile-1.jpg",
  "https://www.ecoleglobale.com/assets/img/ec-mobile-2.jpg",
  "https://www.ecoleglobale.com/assets/img/ec-mobile-3.jpg",
];

const DESKTOP_IMAGES = [
  "https://www.ecoleglobale.com/wp-content/uploads/2024/03/discover-ecole-globale-international-girls-school.jpg",
  "https://www.ecoleglobale.com/wp-content/uploads/2024/03/horse-riding-in-girls-boarding-schools.jpg",
  "https://www.ecoleglobale.com/wp-content/uploads/2024/03/best-girls-boardingschool-in-dehradun.jpg",
];

export default function FullScreenCarousel({ interval = 3000 }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  /* Auto-slide */
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % MOBILE_IMAGES.length);
    }, interval);
    return () => clearInterval(id);
  }, [interval, isPaused]);

  /* Swipe functions */
  const prev = () =>
    setIndex((i) => (i - 1 + MOBILE_IMAGES.length) % MOBILE_IMAGES.length);
  const next = () => setIndex((i) => (i + 1) % MOBILE_IMAGES.length);

  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);

  const onTouchEnd = () => {
    const dx = touchStartX.current - touchEndX.current;
    if (dx > 50) next();
    else if (dx < -50) prev();
  };

  return (
    <>
      {/* ===================== MOBILE CAROUSEL ===================== */}
      <div className="md:hidden w-full h-[60vh] overflow-hidden relative">
        <div
          className="flex h-full transition-transform duration-700"
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {MOBILE_IMAGES.map((src, i) => (
            <div key={i} className="min-w-full h-full relative">
              <img
                src={src}
                alt={`m-slide-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {MOBILE_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === index ? "bg-white scale-110" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ===================== DESKTOP CAROUSEL ===================== */}
      <div className="hidden md:block">
        <DesktopCarousel images={DESKTOP_IMAGES} interval={interval} />
      </div>
    </>
  );
}

function DesktopCarousel({ interval = 3000 }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % DESKTOP_IMAGES.length);
    }, interval);
  }, [interval, isPaused]);

  return (
    <div className="w-full h-screen overflow-hidden relative">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-[900ms] ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {DESKTOP_IMAGES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {DESKTOP_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-white scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}