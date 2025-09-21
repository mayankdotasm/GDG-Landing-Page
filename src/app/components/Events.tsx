'use client';
import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight, ExternalLink, ChevronRight } from 'lucide-react';
import EventCard from './ui/event-card';

// Type definitions
interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
  signUpLink?: string;
  category: 'Workshop' | 'Bootcamp' | 'Seminar'|'Orientation';
  attendees: any;
}

interface EventCardProps {
  event: Event;
  isActive?: boolean;
  compact?: boolean;
}

// Sample events data - replace with your actual data
export const eventsData: { active: Event[]; past: Event[] } = {
  active: [
    {
      id: 1,
      name: "GDG ANDC Onboarding 2025–26",
      description: "Join us for the grand onboarding event of Google Developer Groups (GDG) On-Campus ANDC! Get to know the community, explore opportunities, and discover how you can learn, build, and grow with GDG.",
      date: "September 25, 2025",
      time: "2:00 PM",
      location: "Conference Room, Acharya Narendra Dev College, University of Delhi",
      signUpLink: "https://gdg-andc.vercel.app/",
      category: "Orientation",
      attendees: "All Students and Tech Enthusiasts Welcome"
    },
    {
      id: 2,
      name: "GDG Got Latent - Pitch Your Web Development Project Idea!",
      description: "Join us for an exciting event focused on Web Development! Participate in workshops, the Shark Tank Challenge, and much more.",
      date: "November 14, 2024",
      time: "10:30 AM - 1:00 PM",
      location: "Acharya Narendra Dev College, University of Delhi",
      signUpLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSevjbv_7vZ7y4Pp-vvP9ZTN6SYutkZ3CLYkp5_CxLK2uJp1Ww/viewform",
      category: "Workshop",
      attendees: 60,
    },
    {
      id: 3,
      name: "Cloud Computing Workshop",
      description: "Learn AWS, Azure, and GCP fundamentals with hands-on labs and real-world scenarios.",
      date: "December 12, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Innovation Center, Pune",
      signUpLink: "#",
      category: "Workshop",
      attendees: 95
    }
  ],
  past: [
    {
      id: 4,
      name: "React Native Workshop",
      description: "Build cross-platform mobile apps with React Native. Learn the fundamentals and best practices.",
      date: "October 15, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Innovation Center, Mumbai",
      category: "Workshop",
      attendees: 85
    },
    {
      id: 5,
      name: "DevOps Fundamentals",
      description: "Master CI/CD pipelines, containerization, and cloud deployment strategies.",
      date: "September 22, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Tech Park, Hyderabad",
      category: "Seminar",
      attendees: 150
    },
    {
      id: 6,
      name: "Flutter Development Bootcamp",
      description: "Complete Flutter development course covering widgets, state management, and deployment.",
      date: "August 30, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Tech Center, Chennai",
      category: "Bootcamp",
      attendees: 180
    }
  ]
};

// Event Card Component

// HOME PAGE: Single Featured Event Component
const HomeEventsSection: React.FC = () => {
  const featuredEvent = eventsData.active[0]; // Get the first active event

  if (!featuredEvent) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
          <p className="text-gray-600">No upcoming events at the moment. Check back soon!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-1 ">
      <div className="max-w-8xl mx-auto px-4">
        <div className="text-center mb-12">

          <p className="text-xl text-white max-w-3xl mx-auto">
            Don't miss our next exciting event! Join fellow developers and tech enthusiasts.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-8">
          <EventCard event={featuredEvent} isActive={true} />
        </div>


      </div>
    </section>
  );
};


export default HomeEventsSection;