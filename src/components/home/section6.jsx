import React from "react";
import Link from 'next/link'


const Section6 = () => {
    // cardsData.js
const cardsData = [
  {
    title: "Children care",
    image: "/card1.png",
    description:
      "Comprehensive care for Care of childern from 1 month of age to 18 years and management of high-risk Care of childern from 1 month of age to 18 years conditions.",
  },
  {
    title: "General Pediatrics",
    image: "/card2.png",
    description:
      "Complete medical care for infants, children, and adolescents—covering infections, allergies, nutrition, growth, development, vaccinations, and long-term pediatric health.",
  },
  // {
  //   title: "Pediatric Intensive Care",
  //   image: "/card3.png",
  //   description:
  //     "Advanced management of critically ill children, including respiratory failure, sepsis, trauma, and emergencies. Skilled in ventilation, Prdiatric Emergency Care protocols, and multidisciplinary critical care.",
  // },
];

  return (
    <div className="w-full bg-[#F7F8F9] py-20 px-6">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#5B8291] mb-6">
        Why Choose Dr. Gaurav Jadon
      </h2>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-center text-[#5B8291] space-y-5 leading-relaxed">
        <p>
          Dr. Gaurav Jadon brings 28 years of pediatric expertise across India,
          Kuwait, and the UAE. His practice blends clinical excellence,
          compassion, and evidence-based care, making him a trusted pediatrician
          for families across the region.
        </p>

        <p>
          With strong expertise in General Pediatrics and
          Pediatric Intensive Care, he has managed a wide range of complex infants and
          children from 1 month of age to 18 years and childhood conditions. Dr. Jadon has cared for premature
          babies, critically ill children, and acute emergencies while guiding
          routine pediatric care, growth monitoring, and preventive health.
        </p>

        <p>
          In addition to his clinical work, he has played an active role in
          training medical residents, leading clinical audits, and contributing
          to international research. His commitment to quality improvement
          reflects his dedication to raising pediatric care standards.
        </p>

        <p>
          He offers expert care across a broad spectrum of pediatric and
          providing comprehensive support from infancy
          through adolescence.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-16">

        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-[#E8E8E8] rounded-xl shadow-sm hover:shadow-md transition p-5"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h3 className="font-bold text-xl mb-2">{card.title}</h3>

            <p className="text-[#5B8291] text-lg leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}

      </div>

      {/* View more button */}
      <div className="flex justify-center mt-10">
        <Link href="/services">
  <button className="mt-8 bg-[#29495E] text-white px-8 py-3 rounded-md text-sm tracking-widest hover:bg-[#1f3747] transition">
    READ MORE
  </button>
</Link>
      </div>
    </div>
  );
};

export default Section6;
