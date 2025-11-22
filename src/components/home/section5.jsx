import React from "react";
import Link from 'next/link'

const Section5 = () => {
  return (
    <div className="w-full bg-[#D9D9D9] py-10 mt-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        
     
        <p className="text-sm text-[#5B8291]">
          In case of <span className="font-semibold">EMERGENCY</span>, call 8001999
        </p>

        
        <Link href="/contact">
  <button className="mt-8 bg-[#29495E] text-white px-8 py-3 rounded-md text-sm tracking-widest hover:bg-[#1f3747] transition">
    READ MORE
  </button>
</Link>

      </div>
    </div>
  );
};

export default Section5;
