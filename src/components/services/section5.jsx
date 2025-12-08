"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    { quote: "Amazing team and amazing treatment from the best doctor in the world", name: "Michael", role: "Patient" },
    { quote: "Very friendly staff and excellent service, highly recommended!", name: "Sophia", role: "Patient" },
    { quote: "The doctor treated me like family, truly grateful!", name: "David", role: "Patient" },
    { quote: "World-class facilities and warm-hearted team!", name: "Emma", role: "Patient" },
    { quote: "Amazing team and amazing treatment from the best doctor in the world", name: "Michael", role: "Patient" },
    { quote: "Very friendly staff and excellent service, highly recommended!", name: "Sophia", role: "Patient" },
  ];

  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(100); 

  
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth >= 1024) setCardWidth(25);   
      else if (window.innerWidth >= 768) setCardWidth(33.33); 
      else if (window.innerWidth >= 500) setCardWidth(50); 
      else setCardWidth(100);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const maxIndex = Math.ceil(testimonials.length * (cardWidth / 100)) - 1;

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  const nextSlide = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  return (
    <section className="w-full bg-[#ECF6FF] py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">

 
        <h2 className="md:pl-0 pl-6 text-[32px] md:text-[40px] font-bold text-[#1b3b5a] leading-snug">
          Read feedback about our <br />
          <span>Services and wonderful team!</span>
        </h2>

        <p className="md:pl-0 pl-6 text-[#6b7b8c] max-w-xl mt-4 text-sm md:text-base">
          We take care of our patients just like a family member. Read the
          testimonials from our patients.
        </p>

      
       <div
  className="
    flex items-center gap-4 mt-6 md:pl-0 pl-6
    md:mt-2 md:absolute md:right-0 md:top-0
  "
>

          <button
            onClick={prevSlide}
            disabled={index === 0}
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow 
              ${index === 0 ? "bg-gray-300" : "bg-[#0d8aff] text-white"}
            `}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={nextSlide}
            disabled={index >= maxIndex}
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow 
             ${index >= maxIndex ? "bg-gray-300" : "bg-[#0d8aff] text-white"}
            `}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * cardWidth}%)` }}
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                style={{ minWidth: `${cardWidth}%` }}
                className="p-4 md:p-6"
              >
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 h-full">
                  {/* <span className="text-[#0d8aff] text-4xl font-bold">''</span> */}
                   <img src="/qoute.png" alt="" className="mb-5"/>
                  <p className="text-[#6b7b8c] text-sm mt-2 leading-relaxed">
                    {item.quote}
                  </p>

                  <div className="mt-6">
                    <p className="font-semibold text-[#1b3b5a] text-sm">{item.name}</p>
                    <p className="text-gray-400 text-xs">{item.role}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
