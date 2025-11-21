"use client";
import React from "react";


export default function SpecialtySection() {
  const specialties = [
    {
      title: "Dentistry",
      desc: "Get consultation form our Dentistry team",
      img:"/img1.png"
    },
    {
      title: "General Diagnosis",
      desc: "Get consultation form our General Diagnosis team",
     img:"/img2.png"
    },
    {
      title: "Neuro Surgery",
      desc: "Get consultation form our Neuro Surgery team",
      img:"/img3.png"
    },
    {
      title: "Cardiology",
      desc: "Get consultation form our Cardiology team",
      img:"/img4.png"
    },
    {
      title: "Pharmacy",
      desc: "Get consultation form our Pharmacy team",
     img:"/img5.png"
    },
    {
      title: "Trained Staff",
      desc: "Get consultation form our Trained staff team",
      img:"/img6.png"
    },
    {
      title: "DNA Mapping",
      desc: "Get consultation form our DNA Mapping team",
      img:"/img7.png"
    },
    {
      title: "Ophthalmology",
      desc: "Get consultation form our Ophthalmology team",
      img:"/img1.png"
    },
    {
      title: "Medical Aid",
      desc: "Get consultation form our Emergency Medical Aid Team",
    img:"/img8.png"
    },
  ];

  return (
    <section className="w-full bg-[#f3f8ff] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-[32px] md:text-[40px] font-bold text-[#234A6B]">
          Our Specialty
        </h2>
        <p className="text-center  mt-2 text-lg md:text-xl">
          We provide the world-class services with the best medical team!
        </p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {specialties.map((item, index) => (
            <div
              key={index}
              className="
                group rounded-2xl p-8 bg-white shadow-lg cursor-pointer 
                transition-all duration-300 text-center 
                hover:bg-[#2e8cff] hover:text-white hover:scale-[1.03] hover:shadow-xl
              "
            >
       
             <div className="flex justify-center items-center p-4 bg-[#F6F9FE] w-16 h-16 mx-auto rounded-xl transition-all duration-300">
  <img src={item.img} alt="" className="w-7" />
</div>


              <h3 className="mt-4 text-xl font-semibold text-[#1b3b5a] group-hover:text-white transition-all">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mt-1 group-hover:text-white/90 transition-all">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
