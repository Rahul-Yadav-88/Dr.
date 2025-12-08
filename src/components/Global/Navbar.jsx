"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <nav className="relative w-full py-3 md:py-4 px-3 md:px-6 flex justify-between items-center bg-white shadow-sm z-50">
      {/* Left Logo Section - Reduced text size for mobile */}
      <div className="flex flex-col">
        <h1 className="text-lg md:text-[22px] font-semibold text-[#5B8291]">
          Dr. Gaurav Jadon
        </h1>

        <div className="flex items-center gap-2 -mt-1">
          <div className="h-[2px] w-10 md:w-14 bg-[#5B8291]"></div>
          <span className="text-[10px] md:text-xs font-bold text-[#5B8291]">
            Consultant Pediatrician
          </span>
        </div>
      </div>

      {/* CENTER LOGO - Made smaller for mobile */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img 
          src="/drlogo.jpeg" 
          alt="Dr Gaurav Jadon Logo" 
          className="w-14 h-14 md:w-20 md:h-20 object-contain rounded-full p-1 md:p-2"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 lg:gap-10 text-[#5B8291]">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`${
                  isActive
                    ? "bg-[#2E424D] text-white px-3 py-2 rounded"
                    : "hover:text-slate-800"
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu Icon */}
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="absolute top-14 right-0 bg-white shadow-lg rounded p-4 flex flex-col gap-4 w-1/2 h-screen md:hidden text-slate-600 z-50">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`block ${
                    isActive
                      ? "bg-slate-700 text-white px-3 py-2 rounded"
                      : "hover:text-slate-800"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}