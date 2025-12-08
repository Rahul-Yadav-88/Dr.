import React from "react";

const Section2 = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-12 md:py-16 px-4 md:pl-0 pl-6 md:px-6 lg:px-20"
      style={{
        backgroundImage: `url('/about2.png')`,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">

        {/* Left Section */}
        <div className="w-full md:w-1/2 px-2 md:px-0">
          <h2 className="text-[#000000] font-bold text-xl md:text-2xl lg:text-4xl leading-snug text-center md:text-left">
            Dr. Gaurav Jadon <br />
            Diploma in European board of Pediatrics <br />
            DNB Pediatrics, DCH, MBBS
          </h2>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 md:pl-0 pl-6 px-2 md:px-0">
          <p className="text-[#000000] text-base md:text-lg leading-relaxed opacity-90 text-center md:text-left">
            Dr. Gaurav Jadon is an experienced Consultant Pediatrician with 28 years of clinical
            practice across India, Kuwait, and the UAE. He specializes in General Pediatrics providing safe compassionate and evidence based care of children from 1 month to 18 years of age.
            <br /><br />
            Over the years, he has managed a wide range of pediatric and complex critical cases, pediatric emergencies, and complex critical cases.
            His calm approach, strong clinical judgment, and commitment to medical excellence have
            earned the trust of families and colleagues alike.
            <br /><br />
            Dr Gaurav is actively involved in Research, teaching, International medical conferences and clinical audits, contributing to advancement for pediatric health care. He has published various scientific clinical research paper in reputated pubmed journals and also presented scientific papers in various pediatric International conferences.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Section2;