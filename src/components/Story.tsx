import { motion } from 'framer-motion';
import { WeddingDetails } from '../types';

interface StoryProps {
  story: WeddingDetails['story'];
}

export function Story({ story }: StoryProps) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12">Our Story</h2>
        <div className="space-y-16">
          {story.timeline.map((event, index) => (
            <motion.div
              key={event.date}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="w-full md:w-1/2">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-serif">{event.title}</h3>
                <p className="text-gray-600">
                  {new Date(event.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p className="text-gray-700 leading-relaxed">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}