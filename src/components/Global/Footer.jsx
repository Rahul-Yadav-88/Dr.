"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1F1F1F] text-white pt-10 pb-6">

      {/* Top Info Boxes */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3">
        
        <div className="bg-[#617C8B] p-8  text-center text-[#98DAD9]">
          <h4 className="font-semibold">Find a clinic near you</h4>
          <p className="text-sm opacity-80">Find Us On Map</p>
        </div>

        <div className="bg-[#466774] p-8  text-center text-[#98DAD9]">
          <h4 className="font-semibold">Feel free to message us!</h4>
          <p className="text-sm opacity-80">Send an Email</p>
        </div>

        <div className="bg-[#30515E] p-8  text-center text-[#98DAD9]">
          <h4 className="font-semibold">To book an appointment, call us on</h4>
          <p className="text-sm font-medium mt-1">8001999</p>
        </div>
      </div>

      {/* Main Footer Content */}
    <div className="max-w-7xl mx-auto px-4 mt-10 grid md:grid-cols-3 gap-10 text-[#cbd5e1]">
  
  {/* About Section */}
  <div>
    <h3 className="text-2xl font-semibold mb-3 text-[#5B8291]">About us</h3>
    <p className="text-lg opacity-80 leading-relaxed text-[#5B8291]">
      Dr. Gaurav Jadon is an experienced Consultant Pediatrician with 28 years of clinical practice across India, Kuwait, and the UAE. He specializes in General Pediatrics and Pediatric Intensive Care, providing safe, compassionate, and evidence-based care for children from 1 month of age to 18 years and infants.
    </p>
  </div>

  {/* Get In Touch */}
  <div>
    <h3 className="text-2xl font-semibold mb-3 text-[#5B8291]">Get in Touch</h3>

    <div className="flex items-start gap-3 text-sm opacity-80 text-[#5B8291]">
      <MapPin className="w-5 h-5 mt-1" />
      <p className="text-lg">
        Mediclinic Welcare Hospital 
opp Gems 
      </p>
    </div>

    <div className="flex items-center gap-2 mt-4 text-sm opacity-80 text-[#5B8291]">
      <Mail className="w-5 h-5" />
      <a href="mailto:Gaurav.jadon@mediclinic.ae" className="underline text-lg">
        Gaurav.jadon@mediclinic.ae
      </a>
    </div>

    <div className="flex items-center gap-2 mt-3  opacity-80 text-[#5B8291] text-lg">
      <Phone className="w-5 h-5" />
      <span> 8001999 </span>
    </div>
     <div className="flex items-center gap-2 mt-3  opacity-80 text-[#5B8291] text-lg">
      <Phone className="w-5 h-5" />
      <span> 0505870574 </span>
    </div>
  </div>

  {/* Additional Links */}
  <div className="text-[#5B8291]">
    <h3 className="text-2xl font-semibold mb-3">Additional Link</h3>
    <ul className="space-y-2 text-lg opacity-90">
      {/* <li><Link href="#" className="hover:text-white">&gt; Core Clinic</Link></li> */}
      <li><Link href="/services" className="hover:text-white">&gt; Service</Link></li>
      <li><Link href="/about" className="hover:text-white">&gt; About</Link></li>
      <li><Link href="/contact" className="hover:text-white">&gt; Contact</Link></li>
    </ul>
  </div>

</div>

      {/* Appointment Form */}
<div className="max-w-3xl w-full mx-auto mt-10 p-4">
  {/* Heading */}
  <h3 className="text-3xl font-bold text-[#5B8291] mb-2">
    Scheduled An Appointment
  </h3>

  {/* Underline */}
  <div className="h-[2px] w-20 bg-[#9DB4C0] mb-6"></div>

  <form className="space-y-5">
    {/* First Row */}
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="First Name"
        className="bg-white w-full py-3 px-4 rounded-md text-black text-sm shadow-md focus:outline-none"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="bg-white w-full py-3 px-4 rounded-md text-black text-sm shadow-md focus:outline-none"
      />
    </div>

    {/* Second Row */}
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Phone Number"
        className="bg-white w-full py-3 px-4 rounded-md text-black text-sm shadow-md focus:outline-none"
      />
      <input
        type="email"
        placeholder="Email"
        className="bg-white w-full py-3 px-4 rounded-md text-black text-sm shadow-md focus:outline-none"
      />
    </div>

    {/* Submit Button */}
    <Link href="/contact">
  <button
    className="mx-auto bg-[#2E424D] px-10 py-3 rounded-md shadow-lg transition-all flex items-center justify-center gap-2 text-[#5B8291]"
  >
    Submit <span className="text-lg"><ArrowRight size={20} /></span>
  </button>
</Link>
  </form>
</div>


      {/* Bottom Footer */}
      <div className="border-t border-white/20 mt-10 pt-4 max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-xs opacity-70">
          © 2023 Dr. Gaurav Jadon. All rights reserved.
        </p>

        <div className="flex gap-6 text-xs opacity-80">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Sitemap</Link>
        </div>

        <div className="flex gap-4">
          <Instagram className="w-5 h-5 cursor-pointer hover:opacity-100 opacity-70" />
          <Facebook className="w-5 h-5 cursor-pointer hover:opacity-100 opacity-70" />
        </div>

      </div>

    </footer>
  );
}
