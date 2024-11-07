import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  return (
    <nav className="border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-bold text-xl"
          >
            <div className="flex items-center">
              <Image
                src="/gdg.png"
                alt="GDG Logo"
                width={90}
                height={107}
                className="object-contain"
              />
            </div>
            GDG ANDC
          </Link>
          <div className="flex gap-8">
            {[
              { name: "HOME", path: "/" },               // Home page
              { name: "BLOGS", path: "/blogs" },         // Blogs page
              { name: "PROJECTS", path: "/projects" },   // Projects page
              { name: "TEAM", path: "/team" },           // Team page
              { name: "ABOUT US", path: "/about-us" },   // About Us page
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-white hover:text-purple-400 transition-colors font-medium tracking-wide"
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
