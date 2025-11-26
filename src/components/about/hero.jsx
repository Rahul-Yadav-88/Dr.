import Image from "next/image";
   import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#0f1828] py-20 px-6">
      <div className="
        max-w-7xl mx-auto 
        grid grid-cols-1 md:grid-cols-2 
        gap-10 
        items-center 
        text-center md:text-left
      ">
        
        {/* left */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-[#98DAD9] text-sm mb-3">Hello, Welcome</p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            I m Dr. Gaurav Jadon
          </h1>

          <p className="text-gray-300 text-sm leading-relaxed max-w-md mb-8">
           Expert in General Pediatrics (1month -18 year age )-
Committed to safe and evidence based child healthcare
          </p>

       

<Link href="/contact">
  <button className="bg-[#98DAD9] text-black px-6 py-2 rounded-md text-sm font-medium hover:bg-[#7ee7ff] transition">
    Contact
  </button>
</Link>

        </div>

        {/* right */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/about1.png"
            width={450}
            height={550}
            alt="Dr. Gaurav Jadon"
            className="rounded-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}
