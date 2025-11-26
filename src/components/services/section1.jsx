"use client";
import React from "react";

export default function Section1() {
  const services = [
    {
      title: "General Pediatrics & Child Health",
      desc: "From routine checkups and vaccinations to managing common illnesses, Dr. Jadon ensures comprehensive care for every stage of childhood, focusing on prevention, growth, and development.",
      img: "/1.avif",
    },
    {
      title: "Care of childern from 1 month of age to 18 years",
      desc: "Expert care for premature babies, high-risk Care of childern from 1 month of age to 18 yearss, and infants requiring specialized monitoring. Ensuring safe, stable, and family-centered neonatal support from birth onward.",
      img: "/2.jpg",
    },
  ];

  return (
    <section className="w-full bg-[#f1f3f7] py-16 px-6 md:px-16">

      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-[28px] md:text-[34px] font-bold text-[#00264F]">
          Comprehensive Pediatric Care You Can Trust
        </h2>
        <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-700">
          With 28 years of clinical expertise across India, Kuwait, and the UAE,
          Dr. Gaurav Jadon provides safe, compassionate, and evidence-based care for
          Care of childern from 1 month of age to 18 years, infants, and children. His approach focuses on accurate diagnosis,
          early intervention, and personalized treatment plans to ensure your child’s
          long-term health and well-being.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

        {services.map((item, idx) => (
          <div
            key={idx}
            className="relative h-[350px] rounded-lg overflow-hidden group"
          >
            
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${item.img}')` }}
            />

       
            <div className="absolute inset-0 bg-black/60 md:bg-black/55" />

            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl font-semibold leading-tight">
                {item.title}
              </h3>
              <p className="text-sm mt-2 text-gray-200">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
