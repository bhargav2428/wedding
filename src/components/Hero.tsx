import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { WeddingDetails } from '../types';

interface HeroProps {
  weddingDetails: WeddingDetails;
}

export function Hero({ weddingDetails }: HeroProps) {
  const { coupleName, date } = weddingDetails;

  return (
    <div 
      className="min-h-screen relative flex items-center justify-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2000)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heart className="w-12 h-12 mx-auto mb-6 text-pink-300" />
          <h1 className="text-5xl md:text-7xl font-serif mb-4">
            {coupleName.partner1} & {coupleName.partner2}
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            {new Date(date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          
          <div className="mt-12">
            <CountdownTimer targetDate={date} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}