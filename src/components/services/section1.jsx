"use client";
import React from "react";

export default function Section1() {
  return (
    <section className="w-full bg-[#f1f3f7] py-16 px-6 md:px-16">
  
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-[28px] md:text-[34px] font-bold text-[#00264F]">
          Lorem Ipsum Has Been In
        </h2>

        <p className=" mt-3 text-sm md:text-base leading-relaxed">
          Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The
          1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To
          Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But
          Also The Leap Into Electronic Typesetting, Remaining Essentially
          Unchanged
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

   
        <div className="relative h-[350px] rounded-lg overflow-hidden bg-gray-300">
         
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />

          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h3 className="text-2xl font-semibold leading-tight">
              Lorem Ipsum <br /> Has Been
            </h3>
            <p className="text-sm mt-2 text-gray-200">
              Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since
              The 1500s, When An Unknown Printer Took A Galley Of Type And
              Scrambled It To Make A Type Specimen Book
            </p>
          </div>
        </div>

       
        <div className="relative h-[350px] rounded-lg overflow-hidden bg-gray-300">
       
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h3 className="text-2xl font-semibold leading-tight">
              Lorem Ipsum <br /> Has Been
            </h3>
            <p className="text-sm mt-2 text-gray-200">
              Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since
              The 1500s, When An Unknown Printer Took A Galley Of Type And
              Scrambled It To Make A Type Specimen Book
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
