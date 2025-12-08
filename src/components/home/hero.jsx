import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
      <Image
        src="/P.png"   // CHANGED FROM /oo.png TO /P.jpg
        alt="hero"
        fill 
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center px-4 md:px-20 max-w-xl">
        <h2 className="text-[24px] md:text-[40px] font-bold leading-tight text-[#98DAD9]">
          A decade of <br /> experience as <br />
          <span className="text-[#98DAD9] font-bold"> Pediatrician.</span>
        </h2>

        <p className="text-white md:p-0 pl-6 text-base md:text-xl mt-4">
          Experience best-in-class consultation <br /> & treatment plans
        </p>
      </div>
    </div>
  );
};

export default HeroSection;