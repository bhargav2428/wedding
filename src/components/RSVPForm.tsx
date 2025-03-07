import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import type { RSVPFormData } from '../types';

export function RSVPForm() {
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    email: '',
    attending: true,
    guestCount: 1,
    mealPreference: 'regular',
    dietaryRestrictions: '',
    songRequest: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-serif text-center mb-8">RSVP</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-300"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-300"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Will you be attending?
          </label>
          <select
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-300"
            value={formData.attending.toString()}
            onChange={(e) => setFormData({ ...formData, attending: e.target.value === 'true' })}
          >
            <option value="true">Yes, I will attend</option>
            <option value="false">No, I cannot attend</option>
          </select>
        </div>

        {formData.attending && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Guests
              </label>
              <input
                type="number"
                min="1"
                max="2"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-300"
                value={formData.guestCount}
                onChange={(e) => setFormData({ ...formData, guestCount: parseInt(e.target.value) })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Meal Preference
              </label>
              <select
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-300"
                value={formData.mealPreference}
                onChange={(e) => setFormData({ ...formData, mealPreference: e.target.value as 'vegetarian' | 'vegan' | 'regular' })}
              >
                <option value="regular">Regular</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dietary Restrictions
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-300"
                rows={3}
                value={formData.dietaryRestrictions}
                onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Song Request
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-300"
                value={formData.songRequest}
                onChange={(e) => setFormData({ ...formData, songRequest: e.target.value })}
              />
            </div>
          </>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message for the Couple
          </label>
          <textarea
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-300"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-3 px-6 rounded-md hover:bg-pink-600 transition-colors flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Send RSVP
        </button>
      </form>
    </motion.div>
  );
}