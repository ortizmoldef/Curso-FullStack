"use client";
import { useState, useEffect, useRef } from "react";

const images = [
  "https://content.skyscnr.com/m/2dcd7d0e6f086057/original/GettyImages-186142785.jpg?resize=1224%3Aauto",
  "https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewdvz0HQg1CNrO1U2TTbBfyzw5d9CIINWpw&s",
];

const CustomSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0); // Para el deslizamiento táctil
  const mouseStartX = useRef(0); // Para el deslizamiento con mouse
  const isSwiping = useRef(false); // Para saber si está en medio de un deslizamiento

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const startAutoplay = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(nextSlide, 3000);
    }
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleButtonClick = (action) => {
    stopAutoplay();
    action();
    setTimeout(startAutoplay, 3000);
  };

  const handleMouseDown = (e) => {
    isSwiping.current = true;
    mouseStartX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isSwiping.current) return;
    const diff = e.clientX - mouseStartX.current;
    if (diff > 50) {
      prevSlide();
      isSwiping.current = false;
    } else if (diff < -50) {
      nextSlide();
      isSwiping.current = false;
    }
  };

  const handleMouseUp = () => {
    isSwiping.current = false;
  };

  const handleTouchStart = (e) => {
    isSwiping.current = true;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isSwiping.current) return;
    const diff = e.touches[0].clientX - touchStartX.current;
    if (diff > 50) {
      prevSlide();
      isSwiping.current = false;
    } else if (diff < -50) {
      nextSlide();
      isSwiping.current = false;
    }
  };

  const handleTouchEnd = () => {
    isSwiping.current = false;
  };

  return (
    <div
      className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>

      <button
        onClick={() => handleButtonClick(prevSlide)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full"
      >
        ❮
      </button>

      <button
        onClick={() => handleButtonClick(nextSlide)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full"
      >
        ❯
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomSlide;
