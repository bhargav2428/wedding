'use client';

import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import { WeddingDetails } from '../types';

interface VenuesProps {
  venues: WeddingDetails['venues'];
}

export function Venues({ venues }: VenuesProps) {
  const venuesList = [
    { title: 'Ceremony', ...venues.ceremony },
    { title: 'Reception', ...venues.reception },
  ];

  useEffect(() => {
    venuesList.forEach((venue, index) => {
      const mapId = `map-${index}`;
      setTimeout(() => {
        const map = L.map(mapId).setView([venue.coordinates.lat, venue.coordinates.lng], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);
        L.marker([venue.coordinates.lat, venue.coordinates.lng]).addTo(map)
          .bindPopup(`<b>${venue.title}</b><br>${venue.address}`).openPopup();
      }, 300);
    });
  }, [venuesList]);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12">Venues</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {venuesList.map((venue, index) => (
            <motion.div
              key={venue.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* OpenStreetMap Container */}
              <div className="h-64 relative">
                <div id={`map-${index}`} className="h-full w-full" />
              </div>
              
              {/* Venue Details */}
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-4">{venue.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-pink-500" />
                    <p className="text-gray-700">{venue.address}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-pink-500" />
                    <p className="text-gray-700">{venue.time}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
