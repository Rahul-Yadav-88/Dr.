import React from "react";
import { FaStethoscope, FaUsers, FaGlobeAsia } from "react-icons/fa";

const Section3 = () => {
  return (
    <div
       className="relative w-full min-h-[500px] md:h-[600px] bg-cover bg-center flex items-center justify-center py-4"
      style={{
        backgroundImage: "url('/home3.png')", 
      }}
    >
     
      <div className="absolute inset-0 bg-black/40" />

    
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center text-white gap-10 px-6">

    
        <div className="flex flex-col items-center gap-3">
          <FaStethoscope className="text-white" size={70} />
          <h2 className="text-2xl font-semibold">28+ Years</h2>
          <p className="text-sm opacity-90">Clinical Experience</p>
        </div>

    
        <div className="flex flex-col items-center gap-3">
          <FaUsers className="text-white" size={70} />
          <h2 className="text-2xl font-semibold">50,000+</h2>
          <p className="text-sm opacity-90">Pediatric Patients Treated</p>
        </div>

       
        <div className="flex flex-col items-center gap-3">
          <FaGlobeAsia className="text-white" size={70} />
          <h2 className="text-2xl font-semibold">3 Countries</h2>
          <p className="text-sm opacity-90">India • Kuwait • UAE</p>
        </div>

      </div>
    </div>
  );
};

export default Section3;
