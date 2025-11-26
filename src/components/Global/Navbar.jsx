"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  // { name: "Research", href: "/research" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // 🔒 Disable scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // stop scrolling
    } else {
      document.body.style.overflow = "auto"; // allow scrolling again
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [open]);

  return (
    <nav className="relative w-full py-4 px-6 flex justify-between items-center bg-white shadow-sm z-50">
      
      {/* Left Logo Section */}
      <div className="flex flex-col">
        <h1 className="text-[22px] font-semibold text-[#5B8291]">
          Dr. Gaurav Jadon
        </h1>

        <div className="flex items-center gap-2 -mt-1">
          <div className="h-[2px] w-14 bg-[#5B8291]"></div>
          <span className="text-xs font-bold text-[#5B8291]">
            Consultant Pediatrician
          </span>
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-[#5B8291]">
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
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="absolute top-16 right-0 bg-white shadow-lg rounded p-4 flex flex-col gap-4 w-1/2 h-screen md:hidden text-slate-600 z-50">
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
