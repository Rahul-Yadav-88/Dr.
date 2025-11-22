import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Section8 = () => {
  return (
    <div className="relative w-full h-screen mt-10">
      {/* BG Image */}
      <img
        src="/section8.png"
        alt=""
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">

        {/* TEXT WRAPPER - FIXES ALL OVERFLOW */}
        <div className="max-w-[90%] md:max-w-3xl overflow-visible text-center leading-2">

          <p className="text-sm sm:text-md md:text-2xl mb-8">
            Dr. Gaurav Jadon is a Consultant Pediatrician with over 28 years of
            post-specialization experience across India, Kuwait, and the UAE. He
            specializes in General Pediatrics and Pediatric
            Intensive Care, combining clinical expertise with academic leadership.
            Certified by the European Board of Pediatrics, Dr. Jadon serves at
            NMC Specialty Hospital, Dubai. He actively contributes to teaching,
            clinical audits, and international research forums. Passionate about
            pediatric education and evidence-based practice, he continues to
            advance child health standards in the GCC region through compassionate
            care and lifelong learning.
          </p>

          {/* line */}
          <div className="h-[1px] w-[20%] bg-white/70 mx-auto mb-3"></div>

          <p className="text-lg  tracking-wide">
            Harsh Vardhan
          </p>
        </div>

   
        {/* <div className="flex items-center gap-6 absolute bottom-10">
          <FaChevronLeft className="text-white text-xl cursor-pointer opacity-80 hover:opacity-100" />
          <FaChevronRight className="text-white text-xl cursor-pointer opacity-80 hover:opacity-100" />
        </div> */}
      </div>
    </div>
  );
};

export default Section8;
