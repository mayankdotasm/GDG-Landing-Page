import React from "react";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import EventCard from "@/components/ui/event-card";

const Hero = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h1 className="text-5xl font-bold text-white mb-4 font-sans tracking-tight">
        GOOGLE DEVELOPER GROUP
      </h1>
      <h2 className="text-3xl font-semibold text-purple-400 mb-12 tracking-wide">
        ACHARYA NARENDRA DEV COLLEGE
      </h2>

      <TextGenerateEffect
        words="Welcome to GDG on Campus, ANDC, your hub for technology enthusiasts, aspiring developers, and innovators at Acharya Narendra Dev College, Delhi University. We are part of the global Google Developer Groups (GDGs), dedicated to fostering a thriving tech community on campus. Join us as we explore the latest technologies, collaborate on exciting projects, and empower each other to grow!"
        className="max-w-5xl mx-auto text-gray-300 mb-12 leading-relaxed font-bold"
      />

      <div className="flex justify-center gap-6 mb-8">
        <a
          href={process.env.NEXT_PUBLIC_GDG_COMMUNITY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white px-12 py-5 rounded-full font-extrabold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-purple-400">
            Join Us
          </Button>
        </a>
      </div>

    </main>
  );
};
export default Hero;
