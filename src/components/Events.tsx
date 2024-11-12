import React from "react";
import EventCard from "@/components/ui/event-card";

const Event = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 text-center">
      <EventCard
        eventName="GDG Got Latent - Pitch Your Web Development Project Idea! "
        eventDescription="Join us for an exciting event focused on Web Development! Participate in workshops, the Shark Tank Challenge, and much more."
        eventDate="November 14, 2024"
        eventTime="10:30 AM - 1:00 PM"
        eventLocation="Acharya Narendra Dev College, University of Delhi"
        signUpLink="https://docs.google.com/forms/u/1/d/e/1FAIpQLSevjbv_7vZ7y4Pp-vvP9ZTN6SYutkZ3CLYkp5_CxLK2uJp1Ww/viewform"
        // learnMoreLink="https://docs.google.com/forms/u/1/d/e/1FAIpQLSevjbv_7vZ7y4Pp-vvP9ZTN6SYutkZ3CLYkp5_CxLK2uJp1Ww/viewform"
      />
    </main>
  );
};
export default Event;
