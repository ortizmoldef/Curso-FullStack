"use client"
import { useState } from "react";

const images = [
    "https://content.skyscnr.com/m/2dcd7d0e6f086057/original/GettyImages-186142785.jpg?resize=1224%3Aauto",
    "https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewdvz0HQg1CNrO1U2TTbBfyzw5d9CIINWpw&s",
  ];

const visibleSlides = 3;

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const maxIndex = images.length - visibleSlides

    const nextSlide = () => {
        if(currentIndex < maxIndex){
            setCurrentIndex(currentIndex + 1)
        }
    };

    const prevSlide = () => {
        if(currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    };

    return(
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
            <div 
                className="flex gap-4 transition-transform duration-500 ease-in-out"
                style={{transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
            >
                {images.map((img,index) =>(
                   <img 
                        key={index}
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="w-[calc(100%/3)] h-[200px] object-cover"
                    />
                ))}
            </div>

            <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 disabled:opacity-50"
            >
                 ❮
            </button>

            <button
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 disabled:opacity-50"
            >
                ❯
            </button>
        </div>
    );
}

