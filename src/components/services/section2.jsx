"use client";
import React from "react";

export default function Section2() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

  
        <div className="w-full h-[350px] md:h-[500px] bg-[#CFCFCF] rounded-md"></div>

   
        <div>
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#0b2a4a] leading-tight">
            Lorem Ipsum Has
          </h2>

          <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed max-w-lg">
            Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The
            1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It
            To Make A Type Specimen Book. It Has Survived Not Only Five Centuries.
          </p>
        </div>

      </div>
    </section>
  );
}
