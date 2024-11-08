import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

interface TeamCardProps {
  name: string;
  role: string;
  instagram: string;
  twitter: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, instagram, twitter }) => {
  return (
    <div className="text-center p-4">
      <div className="rounded-full w-32 h-32 mx-auto mb-4 bg-gray-300"></div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-400">{role}</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-lg text-white hover:text-purple-400" />
        </a>
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-lg text-white hover:text-purple-400" />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
