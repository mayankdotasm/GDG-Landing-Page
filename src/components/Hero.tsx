import React from "react";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "./ui/text-generate-effect";

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

      <div className="flex justify-center gap-6">
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-full font-extrabold">
          Join us
        </Button>
        <Button
          variant="outline"
          className="border-gray-600 text-white bg-grey-800 hover:bg-gray-400 px-8 py-2 rounded-full font-extrabold"
        >
          Contact us
        </Button>
      </div>
    </main>
  );
};
export default Hero;
