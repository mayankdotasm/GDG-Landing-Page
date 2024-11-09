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
    pathname === path ? "text-purple-600" : "text-white hover:text-purple-500";

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0f1e] bg-opacity-60 shadow-lg">
      <div className="flex items-center justify-between h-16 px-4 backdrop-blur-md">
        {/* Logo and Title */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white font-bold text-xl"
        >
          <Image
            src="/gdg.png"
            alt="GDG Logo"
            width={90}
            height={107}
            className="object-contain"
          />
          GDG ANDC
        </Link>

        {/* Hamburger Button for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Navigation">
            {isMenuOpen ? (
              <FaTimes size={30} color="white" />
            ) : (
              <FaBars size={30} color="white" />
            )}
          </button>
        </div>
      </div>

      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 opacity-60 shadow-xl" />

      
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0  bg-[#0a0f1e] bg-opacity-0"
          onClick={toggleMenu}
        >
          <div
            className="absolute top-16 right-0 w-full h-1/3 bg-[#0a0f1e] text-white p-8 overflow-y-auto bg-opacity-80 backdrop-blur-md"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="flex justify-end">
              {/* The only X button here to close the menu */}
              {/* <FaTimes size={30} color="white" onClick={toggleMenu} /> */}
            </div>
            <div className="mt-10 font-bold">
              {[
                { name: "HOME", path: "/" },
                { name: "TEAM", path: "/team" },
                { name: "ABOUT US", path: "/about-us" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block py-3 text-center font-medium ${isActive(
                    item.path
                  )} transition-colors`}
                  onClick={toggleMenu} 
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
