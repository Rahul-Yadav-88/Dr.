import React from "react";

export default function Section1() {
  return (
    <section className="bg-white mt-20">
      <div className="responsivewidth flex flex-col md:flex-row items-start gap-10">

       
        <div className="w-full md:w-[30%] flex justify-center md:justify-start">
          <img
            src="/doc.png"
            alt="doctor"
            className="w-[260px] h-[260px] md:w-[330px] md:h-[330px] object-cover rounded"
          />
        </div>

     
        <div className="w-full md:w-[70%]">
          <h3 className="text-[#5F869A] text-lg md:text-xl font-semibold mb-10 border-b border-[#5F869A] w-fit pb-1">
            Areas of Research
          </h3>

          <p className="text-[#5F869A] text-[18px] md:text-[23px] leading-relaxed font-medium">
            Exploring nutritional screening tools for hospitalized children: a narrative review <br />
            Pankaj Soni, MRCPCH1, Amit Agrawal, MD2, Gaurav Jadon, MD3 <br />

            <span className="">
              1Department of Neonatology, Thumbay University Hospital, and Clinical Lecturer,
              Department of Clinical Sciences (Pediatric Neonatology), College of Medicine, <br />
              Gulf Medical University, Ajman, UAE;
              2Department of Pediatrics, Gandhi Medical College, Bhopal, India;
              3NMC Specialty Hospital, Dubai, UAE
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
