import React from "react";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  eventName: string;
  eventDescription: string;
  eventDate?: string;
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
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-2xl shadow-xl max-w-md mx-auto hover:shadow-2xl transition-shadow duration-500 transform hover:scale-105">
      <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight leading-tight">
        {eventName}
      </h3>
      <p className="text-gray-200 mb-4 text-lg leading-relaxed opacity-90">
        {eventDescription}
      </p>
      <div className="flex flex-col space-y-2 mb-6">
        {eventDate && (
          <p className="text-lg font-medium text-gray-100">
            <strong>Date:</strong> {eventDate}
          </p>
        )}
        {eventLocation && (
          <p className="text-lg font-medium text-gray-100">
            <strong>Location:</strong> {eventLocation}
          </p>
        )}
      </div>

      
      <div className={`flex gap-4 mt-6 ${!signUpLink || !learnMoreLink ? "justify-center" : ""}`}>
        {signUpLink && (
          <a href={signUpLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-purple-600 hover:text-white focus:ring-2 focus:ring-purple-300">
              Sign Up Now
            </Button>
          </a>
        )}

        {learnMoreLink && (
          <a href={learnMoreLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-purple-600 hover:text-white focus:ring-2 focus:ring-purple-300">
              Learn More
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default EventCard;
