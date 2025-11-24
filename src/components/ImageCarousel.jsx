"use client";
import React, { useEffect, useRef, useState } from "react";

const MOBILE_IMAGES = [
  "https://www.ecoleglobale.com/assets/img/ec-mobile-1.jpg",
  "https://www.ecoleglobale.com/assets/img/ec-mobile-2.jpg",
  "https://www.ecoleglobale.com/assets/img/ec-mobile-3.jpg",
];

const DEFAULT_IMAGES = [
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
      <div className="md:hidden w-full overflow-hidden relative">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {MOBILE_IMAGES.map((src, i) => (
            <div key={i} className="min-w-full h-[77vh] relative mt-16">
              <img
                src={src}
                alt={`m-slide-${i}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {MOBILE_IMAGES.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ===================== DESKTOP CAROUSEL (YOUR ORIGINAL) ===================== */}
      <div className="hidden md:block">
        <DesktopCarousel images={DEFAULT_IMAGES} interval={interval} />
      </div>
    </>
  );
}

/* Desktop full-screen carousel (same as yours) */
function DesktopCarousel({ images, interval }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval, isPaused]);

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <div
        className="flex h-full transition-transform duration-700"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-full h-full object-cover"
            alt="slide"
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
