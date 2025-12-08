"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, ArrowRight, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Social Media Sidebar - Hidden on mobile, shown on tablet+ */}
      <div className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-0 shadow-lg">
        <a
          href="https://www.facebook.com/share/17mokYiMp5/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1877F2] p-3 hover:pl-5 transition-all duration-300 group"
          aria-label="Facebook"
        >
          <Facebook className="w-6 h-6 text-white" />
        </a>
        
        <a
          href="https://www.instagram.com/seemagauravansh?igsh=MWg4dDRpOHNid2ZuNQ%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F56040] p-3 hover:pl-5 transition-all duration-300 group"
          aria-label="Instagram"
        >
          <Instagram className="w-6 h-6 text-white" />
        </a>
        
        <a
          href="http://linkedin.com/in/gauravjadon"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0A66C2] p-3 hover:pl-5 transition-all duration-300 group"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-6 h-6 text-white" />
        </a>
      </div>

      {/* Mobile Social Media - Horizontal at top of footer */}
      <div className="md:hidden flex justify-center gap-0 bg-gray-800 py-2">
        <a
          href="https://www.facebook.com/share/17mokYiMp5/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1877F2] p-3 flex-1 text-center"
          aria-label="Facebook"
        >
          <Facebook className="w-5 h-5 text-white mx-auto" />
        </a>
        
        <a
          href="https://www.instagram.com/seemagauravansh?igsh=MWg4dDRpOHNid2ZuNQ%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F56040] p-3 flex-1 text-center"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5 text-white mx-auto" />
        </a>
        
        <a
          href="http://linkedin.com/in/gauravjadon"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0A66C2] p-3 flex-1 text-center"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-white mx-auto" />
        </a>
      </div>

      <footer className="w-full bg-[#1F1F1F] text-white pt-8 pb-6">
        {/* Top Info Boxes */}
        <div className="max-w-7xl mx-auto px-3 md:px-4 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-0">
          <div className="bg-[#617C8B] p-4 md:p-8 text-center text-[#98DAD9]">
            <h4 className="font-semibold text-sm md:text-base">Find a clinic near you</h4>
            <p className="text-xs md:text-sm opacity-80">Find Us On Map</p>
          </div>

          <div className="bg-[#466774] p-4 md:p-8 text-center text-[#98DAD9]">
            <h4 className="font-semibold text-sm md:text-base">Feel free to message us!</h4>
            <p className="text-xs md:text-sm opacity-80">Send an Email</p>
          </div>

          <div className="bg-[#30515E] p-4 md:p-8 text-center text-[#98DAD9]">
            <h4 className="font-semibold text-sm md:text-base">To book an appointment, call us on</h4>
            <p className="text-sm md:text-base font-medium mt-1">8001999</p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-3 md:px-4 mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 text-[#cbd5e1]">
          {/* About Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#5B8291]">About us</h3>
            <p className="text-sm md:text-lg opacity-80 leading-relaxed text-[#5B8291]">
              Dr. Gaurav Jadon is an experienced Consultant Pediatrician with 28 years of clinical practice across India, Kuwait, and the UAE. He specializes in General Pediatrics and Pediatric emergency, providing safe, compassionate, and evidence-based care for children from 1 month of age to 18 years and infants.
            </p>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#5B8291]">Get in Touch</h3>

            <div className="flex items-start gap-3 text-sm opacity-80 text-[#5B8291]">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 mt-1" />
              <p className="text-sm md:text-lg">
                Mediclinic Welcare Hospital opp Gems
              </p>
            </div>

            <div className="flex items-center gap-2 mt-3 md:mt-4 text-sm opacity-80 text-[#5B8291]">
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
              <a href="mailto:Gaurav.jadon@mediclinic.ae" className="underline text-sm md:text-lg">
                Gaurav.jadon@mediclinic.ae
              </a>
            </div>

            <div className="flex items-center gap-2 mt-3 opacity-80 text-[#5B8291] text-sm md:text-lg">
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span>8001999</span>
            </div>
            <div className="flex items-center gap-2 mt-3 opacity-80 text-[#5B8291] text-sm md:text-lg">
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span>0505870574</span>
            </div>
          </div>

          {/* Additional Links */}
          <div className="text-[#5B8291]">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Additional Link</h3>
            <ul className="space-y-2 text-sm md:text-lg opacity-90">
              <li><Link href="/services" className="hover:text-white">&gt; Service</Link></li>
              <li><Link href="/about" className="hover:text-white">&gt; About</Link></li>
              <li><Link href="/contact" className="hover:text-white">&gt; Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Appointment Form */}
        <div className="max-w-3xl w-full mx-auto mt-8 md:mt-10 p-3 md:p-4">
          <h3 className="text-2xl md:text-3xl font-bold text-[#5B8291] mb-2 text-center md:text-left">
            Schedule An Appointment
          </h3>

          <div className="h-[2px] w-16 md:w-20 bg-[#9DB4C0] mb-6 mx-auto md:mx-0"></div>

          <form className="space-y-4 md:space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-white w-full py-2 md:py-3 px-3 md:px-4 rounded-md text-black text-sm shadow-md focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-white w-full py-2 md:py-3 px-3 md:px-4 rounded-md text-black text-sm shadow-md focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="bg-white w-full py-2 md:py-3 px-3 md:px-4 rounded-md text-black text-sm shadow-md focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-white w-full py-2 md:py-3 px-3 md:px-4 rounded-md text-black text-sm shadow-md focus:outline-none"
              />
            </div>

            <Link href="/contact">
              <button
                className="w-full md:w-auto mx-auto bg-[#2E424D] px-6 md:px-10 py-2 md:py-3 rounded-md shadow-lg transition-all flex items-center justify-center gap-2 text-[#5B8291]"
              >
                Submit <ArrowRight size={18} />
              </button>
            </Link>
          </form>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 mt-8 md:mt-10 pt-4 max-w-7xl mx-auto px-3 md:px-4 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-xs opacity-70 text-center md:text-left">
            © 2023 Dr. Gaurav Jadon. All rights reserved.
          </p>

          <div className="flex gap-4 md:gap-6 text-xs opacity-80">
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
            <Link href="#" className="hover:text-white">Sitemap</Link>
          </div>

          <div className="flex gap-4">
            <Instagram className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:opacity-100 opacity-70" />
            <Facebook className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:opacity-100 opacity-70" />
          </div>
        </div>
      </footer>
    </>
  );
}