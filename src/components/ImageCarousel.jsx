"use client"
import React, { useEffect, useRef, useState } from "react";

const DEFAULT_IMAGES = [
  "https://www.ecoleglobale.com/wp-content/uploads/2024/03/discover-ecole-globale-international-girls-school.jpg",
  "https://www.ecoleglobale.com/wp-content/uploads/2024/03/horse-riding-in-girls-boarding-schools.jpg",
  "https://www.ecoleglobale.com/wp-content/uploads/2024/03/best-girls-boardingschool-in-dehradun.jpg",
];

export default function FullScreenCarousel({ images = DEFAULT_IMAGES, interval = 3000 }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images.length, interval, isPaused]);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);
  const goTo = (i) => setIndex(i % images.length);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    const dx = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (dx > threshold) next();
    else if (dx < -threshold) prev();
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-white">
   

      {/* Carousel */}
      <div
        className="relative w-full h-full"
        style={{ paddingTop: `${navHeight}px` }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {images.map((src, i) => (
            <div key={i} className="flex-shrink-0 w-full h-full relative">
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover block"
                loading="lazy"
                draggable={false}
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          ))}
        </div>


        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "opacity-100 scale-125 bg-white" : "opacity-60 bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}