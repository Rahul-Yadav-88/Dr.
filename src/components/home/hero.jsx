import Image from "next/image";
import React from "react";

const HeroSection = () => {
    const data =[
        {
            
        }
    ]
  return (
    <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/hero.png"        // make sure hero.png is inside /public folder
        alt="hero"
        fill
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* TEXT CONTENT */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 max-w-xl">

        <h2 className="text-[28px] md:text-[40px] font-bold leading-tight text-[#98DAD9]">
          A decade of <br /> experience as <br />
          <span className="text-[#98DAD9] font-bold"> Pediatrician.</span>
        </h2>

        <p className="text-white text-lg md:text-xl mt-4">
          Experience best-in-class consultation <br /> & treatment plans
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
