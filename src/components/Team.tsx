import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const teamMembers = [
  { name: "NAME", role: "Chief Technical Officer", instagram: "#", twitter: "#" },
  { name: "NAME", role: "Technical Lead", instagram: "#", twitter: "#" },
  { name: "NAME", role: "Tech Team Member", instagram: "#", twitter: "#" },
  { name: "NAME", role: "Tech Team Member", instagram: "#", twitter: "#" },
  { name: "NAME", role: "Web Development Lead", instagram: "#", twitter: "#" },
  { name: "NAME", role: "Web Team Member", instagram: "#", twitter: "#" },
  { name: "NAME", role: "Web Team Member", instagram: "#", twitter: "#" },
  { name: "NAME", role: "Web Team Member", instagram: "#", twitter: "#" },
];

const Team = () => {
    return (
      <div className="bg-[#0a0f1e] min-h-screen text-white py-12 custom-scrollbar overflow-y-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-purple-400 mb-2">GDG ANDC</h1>
          <h2 className="text-3xl font-semibold text-[#FFFDFD]">Meet the Team</h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-400 rounded-full w-32 h-32 mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
              <div className="flex justify-center gap-4 mt-2">
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-lg text-white hover:text-purple-400" />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-lg text-white hover:text-purple-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Team;
