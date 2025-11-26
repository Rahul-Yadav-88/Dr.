"use client";
import React from "react";


export default function SpecialtySection() {
  const specialties = [
  {
    title: "General Pediatrics",
    desc: "Comprehensive care for infants, children, and adolescents.",
    img: "/img1.png",
  },
  // {
  //   title: "Neonatology",
  //   desc: "Specialized care for newborns, including premature and high-risk babies.",
  //   img: "/img2.png",
  // },

  // {
  //   title: "Pediatric Intensive Care",
  //   desc: "Advanced critical care for severe and life-threatening pediatric conditions.",
  //   img: "/img3.png",
  // },
  {
    title: "Care of childern from 1 month of age to 18 years",
    desc: "Routine Care of childern from 1 month of age to 18 years checkups, growth monitoring, and vaccinations.",
    img: "/img4.png",
  },
  {
    title: "Pediatric Emergency Care",
    desc: "Immediate care for acute illnesses, injuries, and medical emergencies.",
    img: "/img5.png",
  },
  {
    title: "Child Growth & Development",
    desc: "Monitoring height, weight, milestones, and early childhood development.",
    img: "/img6.png",
  },
  {
    title: "Vaccination & Immunization",
    desc: "All essential childhood vaccines with proper schedule guidance.",
    img: "/img7.png",
  },
  {
    title: "Nutrition & Diet Counseling",
    desc: "Nutritional guidance for healthy growth, picky eating, and deficiencies.",
    img: "/img1.png",
  },
  {
    title: "Chronic Disease Management",
    desc: "Long-term care for asthma, allergies, anemia, and other chronic illnesses.",
    img: "/img8.png",
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
