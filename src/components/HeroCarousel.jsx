// HeroCarousel.jsx
import { useState, useEffect } from "react";
import marx from "/assets/marx01.png";
import rayana from "/assets/rayana.png";
import leo from "/assets/leo.png";

const images = [marx, rayana, leo];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000); // troca a cada 3 segundos
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-80 h-96 overflow-hidden rounded-xl shadow-lg">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Foto ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
