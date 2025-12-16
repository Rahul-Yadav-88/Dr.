import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
   <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
  <Image
    src="/pp.jpeg"
    alt="hero"
    fill
    className="object-center object-fill"
  />

  <div className="absolute inset-0 flex flex-col 
      items-center md:items-start 
      justify-end md:justify-center 
      px-12 md:px-14 
      pb-6 md:pb-0
      max-w-xl">

    <div className="bg-black/60 p-2 md:p-4 rounded-md">
      <h2 className="text-[16px] md:text-[33px] font-bold leading-tight text-[#98DAD9]">
        DR GAURAV JADON
        <span className="block text-[#98DAD9] font-semibold">
          Consultant Pediatrician.
        </span>
      </h2>

      <p className="text-white text-base md:text-xl mt-2">
        3 decades of experience
      </p>
    </div>
  </div>
</div>

  );
};

export default HeroSection;