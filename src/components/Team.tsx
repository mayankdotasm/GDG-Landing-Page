
import React from "react";
import TeamCard from "@/components/ui/team-card"; 

// Data for GDG Lead and all Team Member
const gdgLead = [
  { name: "Latika Joshi", role: "GDG on campus-ANDC Lead", instagram: "#", twitter: "#" }
];

const teamMembers = [
  { name: "Madhav Gaba", role: "Chief Technical Officer", instagram: "#", twitter: "#" },
  { name: "Abhishek Kumar", role: "Cloud and Cybersecurity Head", instagram: "#", twitter: "#" },
  { name: "Harshit Raizada", role: "Web Development Head", instagram: "#", twitter: "#" },
  { name: "Ishitva Joshi", role: "Tech Head", instagram: "#", twitter: "#" },
  { name: "Swastika Tiwari", role: "PR Head", instagram: "#", twitter: "#" },
  { name: "Aditya Maurya", role: "Graphics Head", instagram: "#", twitter: "#" },
  { name: "Naman Thakur", role: "Marketing Head", instagram: "#", twitter: "#" },
  { name: "Dhiya Sreejithlal", role: "Social Media Head", instagram: "#", twitter: "#" },
  { name: "Adi Maqsood", role: "Cloud and Cybersecurity Team Member", instagram: "#", twitter: "#" },
  { name: "Himanshu Yadav", role: "Cloud and Cybersecurity Team Member", instagram: "#", twitter: "#" },
  { name: "Mayank Kumar", role: "Web Development Team Member", instagram: "#", twitter: "#" },
  { name: "Suhani Mishra", role: "Web Development Team Member", instagram: "#", twitter: "#" },
  { name: "Reene Bisht", role: "Editorial Co-Head", instagram: "#", twitter: "#" },
  { name: "Subham Tiwari", role: "Editorial Co-Head", instagram: "#", twitter: "#" },
  { name: "Udita Puri", role: "Executive Member", instagram: "#", twitter: "#" },
  { name: "Inshirah Amir", role: "Executive Member", instagram: "#", twitter: "#" },
  { name: "Simran Bartwal", role: "Executive Member", instagram: "#", twitter: "#" },
  { name: "Rishik Chaudhary", role: "Executive Member", instagram: "#", twitter: "#" },
  { name: "Ayush Kumar Singh", role: "Executive Member", instagram: "#", twitter: "#" }
];

const Team = () => {
  return (
    <div className="bg-[#0a0f1e] min-h-screen text-white py-12 custom-scrollbar overflow-y-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-purple-400 mb-2">GDG ANDC</h1>
        <h2 className="text-3xl font-semibold text-[#FFFDFD]">Meet the Team</h2>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        
        {/* GDG Lead Section */}
        <div className="text-center mb-12">
          {/* <h3 className="text-4xl font-bold text-white mb-6">GDG Lead</h3> */}
          <div className="flex justify-center mb-6">
            {gdgLead.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mb-12">
          {/* <h3 className="text-3xl font-bold text-white mb-6">Team</h3> */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
