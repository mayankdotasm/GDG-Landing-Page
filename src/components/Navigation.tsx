"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Toggle the menu visibility
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  // Check if the link is active
  const isActive = (path: string) =>
    pathname === path ? "text-purple-600" : "text-white hover:text-purple-400";

  return (
    <nav className="fixed top-0 w-full z-40 bg-[#0a0f1e] bg-opacity-60 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 backdrop-blur-md z-50">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl z-0">
          <Image
            src="/gdg.png"
            alt="GDG Logo"
            width={90}
            height={107}
            className="object-contain"
          />
          GDG ANDC
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 font-medium">
          {[
            { name: "HOME", path: "/" },
            { name: "TEAM", path: "/team" },
            { name: "ABOUT US", path: "/about-us" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`tracking-wide transition-colors ${isActive(item.path)}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Navigation">
            {isMenuOpen ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
          </button>
        </div>
      </div>

     
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 opacity-100 shadow-xl z-50" />

      {/* Mobile Menu (Visible when toggled) */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#0a0f1e] bg-opacity-0 transition-transform duration-300 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } z-auto`}
        onClick={toggleMenu}
        
      >
        <div
          className="absolute top-16 w-full h-2/7 bg-[#0a0f1e] text-white pr-4 pl-4 overflow-y-auto bg-opacity-50 backdrop-blur-md transition-opacity duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mt-2 font-bold">
            {[
              { name: "HOME", path: "/" },
              { name: "TEAM", path: "/team" },
              { name: "ABOUT US", path: "/about-us" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block py-3 text-center ${isActive(item.path)} transition-colors`}
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
