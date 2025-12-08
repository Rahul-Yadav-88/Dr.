import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#0f1828] py-12 md:py-20 px-4 md:px-6">
      <div className="
        max-w-7xl mx-auto 
        grid grid-cols-1 md:grid-cols-2 
        gap-8 md:gap-10 
        items-center 
        text-center md:text-left
      ">
        
        {/* Left Section - Shifted right for better mobile alignment */}
        <div className="flex flex-col items-center md:items-start px-2 md:px-0 ml-0 md:ml-4 lg:ml-8">
          <p className="text-[#98DAD9] text-sm md:text-base mb-3">Hello, Welcome</p>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-5 text-center md:text-left">
            I'm Dr. Gaurav Jadon
          </h1>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md mb-6 md:mb-8 text-center md:text-left">
            Expert in General Pediatrics (1 month - 18 year age) - 
            Committed to safe and evidence based child healthcare
          </p>

          <Link href="/contact">
            <button className="bg-[#98DAD9] text-black px-5 md:px-6 py-2 md:py-3 rounded-md text-sm md:text-base font-medium hover:bg-[#7ee7ff] transition w-full md:w-auto">
              Contact
            </button>
          </Link>
        </div>

        {/* Right - Image Section */}
        <div className="flex justify-center md:justify-end px-2 md:px-0">
          <Image
            src="/about1.png"
            width={400}
            height={500}
            alt="Dr. Gaurav Jadon"
            className="rounded-2xl object-cover w-full max-w-sm md:max-w-none"
          />
        </div>

      </div>
    </section>
  );
}