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
          <h2 className="text-[#5B8291] font-bold text-3xl md:text-4xl leading-snug max-w-sm">
            DR.<br />
            Gaurav Jadon<br />
            MBBS, DCH, DNB<br />
            Pediatrics, EBP<br />
            (Europe)
          </h2>
        </div>

        {/* right */}
        <div className="w-full md:w-1/2">
          <p className="text-[#5B8291] text-[18px] leading-relaxed opacity-90">
            Dr. Gaurav Jadon is an experienced Consultant Pediatrician with 28 years of clinical
            practice across India, Kuwait, and the UAE. He specializes in General Pediatrics and Pediatric Intensive Care, providing safe, compassionate, and
            evidence-based care for newborns, infants, and children.
            <br /><br />
            Over the years, he has managed a wide range of pediatric and neonatal conditions,
            including premature Care of childern from 1 month of age to 18 years, pediatric emergencies, and complex critical cases.
            His calm approach, strong clinical judgment, and commitment to medical excellence have
            earned the trust of families and colleagues alike.
            <br /><br />
            Dr. Jadon is also actively involved in teaching, clinical audits, and international
            medical conferences, contributing to the advancement of pediatric healthcare. He
            currently serves at NMC Specialty Hospital, Dubai, where he continues to deliver
            high-quality child healthcare with a family-centered and empathetic approach.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Section2;
