const Section2 = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 px-6 md:px-20"
      style={{
        backgroundImage: `url('/about2.png')`,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">

        {/* left*/}
        <div className="w-full md:w-1/2">
          <h2 className="text-[#000000] font-bold text-3xl md:text-4xl leading-snug max-w-sm">
           Dr. 
            Gaurav Jadon <br />
            Diploma in European board of Pediatrics  <br />
            DNB Pediatrics, DCH, MBBS <br />

          </h2>
        </div>

        {/* right */}
        <div className="w-full md:w-1/2">
          <p className="text-[#000000] text-[18px] leading-relaxed opacity-90">
            Dr. Gaurav Jadon is an experienced Consultant Pediatrician with 28 years of clinical
            practice across India, Kuwait, and the UAE. He specializes in General Pediatrics(remove pediatric emergency care )providing safe compassionate and evidence based care of children from 1 month to 18 years of age .
            <br /><br />
            Over the years, he has managed a wide range of pediatric and neonatal conditions, pediatric emergencies and complex critical cases, pediatric emergencies, and complex critical cases.
            His calm approach, strong clinical judgment, and commitment to medical excellence have
            earned the trust of families and colleagues alike.
            <br /><br />
            Dr Gaurav is actively involved in Research, teaching, International medical conferences and clinical audits,contributing to advancement for pediatric health care. He has published various scientific clinical research paper in reputated pubmed journals and also presented scientific papers in various pediatric International conferences.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Section2;
