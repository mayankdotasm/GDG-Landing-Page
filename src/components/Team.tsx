"use client";
import React from "react";
import TeamCard from "@/components/ui/team-card";
import gdgLead from "../teamMembers.json";
import { useState, useEffect } from "react";

interface TeamMember {
  name: string;
  role: string;
  instagram?: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
  profileLink: string;
}

interface TeamData {
  gdgLead: TeamMember[];
  teamMembers: TeamMember[];
}

const Team = () => {
  const [teamData, setTeamData] = useState<TeamData>({
    gdgLead: [],
    teamMembers: [],
  });

  useEffect(() => {
    setTeamData(gdgLead);
  }, []);

  return (
    <div className="bg-[#0a0f1e] min-h-screen text-white py-12 custom-scrollbar overflow-y-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-purple-400 mb-2">GDG ANDC</h1>
        <h2 className="text-3xl font-semibold text-[#FFFDFD]">Meet the Team</h2>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* GDG Lead Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            {teamData.gdgLead.map((member, index) => (
              <TeamCard
                key={index}
                {...member}
                profileLink={member.profileLink}
              />
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamData.teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                {...member}
                profileLink={member.profileLink}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
