import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-10 border-b border-gray-800 bg-[#0a0f1e]">
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
              { name: "HOME", path: "/" },
              // { name: "BLOGS", path: "/blogs" },
              // { name: "PROJECTS", path: "/projects" },
              { name: "TEAM", path: "/team" },
              { name: "ABOUT US", path: "/about-us" },
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
