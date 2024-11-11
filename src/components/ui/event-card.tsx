import React from "react";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  eventName: string;
  eventDescription: string;
  eventDate: string;
  eventLocation?: string;
  signUpLink?: string;
  learnMoreLink?: string;
}

const EventCard = ({
  eventName,
  eventDescription,
  eventDate,
  eventLocation,
  signUpLink,
  learnMoreLink,
}: EventCardProps) => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-3xl shadow-xl max-w-2xl mx-auto hover:shadow-2xl transition-shadow duration-500 transform hover:-translate-y-2">
      <h3 className="text-4xl font-bold text-white mb-5 tracking-tight leading-snug font-['Roboto']">
        {eventName}
      </h3>

      <p className="text-gray-100 mb-6 text-lg leading-relaxed opacity-90">
        {eventDescription}
      </p>

      <div className="space-y-3 mb-6">
        {eventDate && (
          <p className="text-md font-medium text-gray-200">
            <strong>Date:</strong> {eventDate}
          </p>
        )}
        {eventLocation && (
          <p className="text-md font-medium text-gray-200">
            <strong>Location:</strong> {eventLocation}
          </p>
        )}
      </div>

      <div
        className={`flex gap-4 mt-8 ${!signUpLink || !learnMoreLink ? "justify-center" : ""}`}
      >
        {signUpLink && (
          <a href={signUpLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-indigo-600 hover:text-white focus:ring-2 focus:ring-indigo-300 shadow-lg">
              Sign Up Now
            </Button>
          </a>
        )}

        {learnMoreLink && (
          <a href={learnMoreLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-indigo-600 hover:text-white focus:ring-2 focus:ring-indigo-300 shadow-lg">
              Learn More
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default EventCard;
