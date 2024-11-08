import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa"; // Icons for social media

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 text-center">
      <div className="flex justify-center mb-4">
        <img src="/gdg.png" alt="Logo" className="w-16 h-16" /> 
      </div>
      <p className="text-lg font-semibold">GOOGLE DEVELOPER GROUP</p>
      <p className="text-lg font-semibold mb-4">ACHARYA NARENDRA DEV COLLEGE</p>
      <div className="flex justify-center gap-4 mb-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-xl" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-xl" />
        </a>
      </div>
      <div className="flex justify-between px-8 text-sm">
        <p>All Rights Reserved</p>
        <p>Email: andc.gdg@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
