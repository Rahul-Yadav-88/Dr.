import React from "react";

export default function Section2() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* LEFT NAME + DEGREE */}
        <div>
  <h2 className="text-[#5B8291] text-2xl md:text-3xl font-bold leading-snug">
    Dr. <br />
    Gaurav Jadon <br />
    European Board of Pediatrics <br />
    DNB Pediatrics, DCH, MBBS <br />
    Care of children from 1 month of age to 18 years <br />
    Pediatric emergency care
  </h2>
</div>


        {/* RIGHT PARAGRAPHS */}
        <div className="text-[#5B8291] text-[20px] leading-relaxed">
          <p>
            Dr. Gaurav Jadon is a highly experienced Consultant Pediatrician with 
            28 years of clinical expertise across India, Kuwait, and the UAE. 
            He specializes in General Pediatrics and Pediatric Intensive 
            Care, offering compassionate and evidence-based care for newborns, 
            infants, and children.
          </p>

          <p className="mt-6">
            He currently serves at NMC Specialty Hospital, Dubai, and is recognized for 
            his commitment to child health, medical education, and international research.
          </p>
        </div>

      </div>
    </section>
  );
}
