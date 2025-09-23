'use client';
import EventCard from '@/app/components/ui/event-card';
import { eventsData } from '@/app/components/Events';
import { Calendar } from 'lucide-react';

import React, { useState } from 'react';

const EventsListPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('active');

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Page Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Events & Workshops
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Join our community of developers, attend workshops, and stay updated with the latest in tech.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Tab Navigation */}
                <div className="flex justify-center mb-10">
                    <div className="bg-white rounded-full p-1 shadow-sm border border-gray-200">
                        <button
                            onClick={() => setActiveTab('active')}
                            className={`px-8 py-3 rounded-full font-medium transition-all duration-200 ${activeTab === 'active'
                                    ? 'bg-blue-600 text-white shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Upcoming Events ({eventsData.active.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('past')}
                            className={`px-8 py-3 rounded-full font-medium transition-all duration-200 ${activeTab === 'past'
                                    ? 'bg-blue-600 text-white shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Past Events ({eventsData.past.length})
                        </button>
                    </div>
                </div>

                {/* Events List */}
                <div className="space-y-4">
                    {activeTab === 'active'
                        ? eventsData.active.map((event) => (
                            <EventCard key={event.id} event={event} isActive={true} compact={true} />
                        ))
                        : eventsData.past.map((event) => (
                            <EventCard key={event.id} event={event} isActive={false} compact={true} />
                        ))
                    }
                </div>

                {/* Empty State */}
                {((activeTab === 'active' && eventsData.active.length === 0) ||
                    (activeTab === 'past' && eventsData.past.length === 0)) && (
                        <div className="text-center py-16">
                            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-2xl font-medium text-gray-900 mb-4">
                                No {activeTab} events
                            </h3>
                            <p className="text-gray-600 text-lg">
                                {activeTab === 'active'
                                    ? 'Check back soon for upcoming events!'
                                    : 'Past events will appear here.'}
                            </p>
                        </div>
                    )}

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                            {eventsData.active.length + eventsData.past.length}
                        </div>
                        <div className="text-gray-600">Total Events</div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                      
                        <div className="text-gray-600">Total Attendees</div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                        <div className="text-3xl font-bold text-purple-600 mb-2">
                            {eventsData.active.length}
                        </div>
                        <div className="text-gray-600">Upcoming Events</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsListPage;