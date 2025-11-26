import React from "react";
import Link from 'next/link'

export default function Section4() {
  return (
    <section className=" bg-white  mt-20">
      <div className="responsivewidth  flex flex-col md:flex-row items-start gap-10">

        {/* LEFT IMAGE */}
        <div className="w-full md:w-[30%] flex justify-center md:justify-start">
          <img
            src="/doc.png"
            alt="doctor"
            className="w-[260px] h-[260px] md:w-[330px] md:h-[330px] object-cover "
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-[70%]">
          <h3 className="text-[#5F869A] text-xl font-semibold mb-10 border-b border-[#5F869A] w-fit pb-1">
            Areas of Expertise
          </h3>

          <p className="text-[#5F869A] text-[22px] font-bold leading-relaxed md:pr-10">
            General Pediatrics (All children from 1 month to 18 years of age )
Special Interest-Pediatric emergency,Childhood Asthma ,Adolescent care  and Vaccinations       
              </p>

          <Link href="/about">
            <button className="mt-8 bg-[#29495E] text-white px-8 py-3 rounded-md text-sm tracking-widest hover:bg-[#1f3747] transition">
              READ MORE
            </button>
          </Link>


        </div>

      </div>
    </section>
  );
}
