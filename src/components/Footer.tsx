import React from "react";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#";
  const twitterUrl = process.env.NEXT_PUBLIC_TWITTER_URL || "#";
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || "#";
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAI;

  return (
    <footer className="bg-black text-white py-8 text-center">
      <div className="flex justify-center mb-4">
        <Image
          src="/gdg.png"
          alt="GDG Logo"
          width={64}
          height={64}
          className="object-contain"
        />
      </div>

      <p className="text-lg font-semibold">GOOGLE DEVELOPER GROUP</p>
      <p className="text-lg font-semibold mb-4">ACHARYA NARENDRA DEV COLLEGE</p>

      <div className="flex justify-center gap-6 mb-6">
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-2xl hover:text-pink-500 hover:scale-110 transition-all duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-2xl hover:text-blue-500 hover:scale-110 transition-all duration-300"
        >
          <FaTwitter />
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-2xl hover:text-gray-400 hover:scale-110 transition-all duration-300"
        >
          <FaGithub />
        </a>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center px-8 text-sm">
        <p>© {new Date().getFullYear()} GDG-ANDC. All Rights Reserved</p>
        <a href={`mailto:${email}`} className="hover:underline mt-2 md:mt-0">
          {email}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
