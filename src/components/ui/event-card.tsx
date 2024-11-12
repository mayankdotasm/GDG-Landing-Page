import React from "react";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  eventName: string;
  eventDescription: string;
  eventDate: string;
  eventTime?: string; 
  eventLocation?: string;
  signUpLink?: string;
  learnMoreLink?: string;
}

const EventCard = ({
  eventName,
  eventDescription,
  eventDate,
  eventTime,
  eventLocation,
  signUpLink,
  learnMoreLink,
}: EventCardProps) => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-3xl max-w-2xl mx-auto shadow-lg transition-shadow duration-500 animate-revolving-shadow">
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
        {eventTime && (
          <p className="text-md font-medium text-gray-200">
            <strong>Time:</strong> {eventTime}
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
            <Button className="bg-white text-indigo-600 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:bg-indigo-600 hover:text-white focus:ring-2 focus:ring-indigo-300">
              Sign Up Now
            </Button>
          </a>
        )}

        {learnMoreLink && (
          <a href={learnMoreLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-indigo-600 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:bg-indigo-600 hover:text-white focus:ring-2 focus:ring-indigo-300">
              Learn More
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default EventCard;
