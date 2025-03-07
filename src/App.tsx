import React from 'react';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Venues } from './components/Venues';
import { Gallery } from './components/Gallery';
import { RSVPForm } from './components/RSVPForm';
import { weddingDetails } from './data/weddingDetails';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero weddingDetails={weddingDetails} />
      <Story story={weddingDetails.story} />
      <Venues venues={weddingDetails.venues} />
      <Gallery />
      <section id="rsvp" className="py-20 px-4">
        <RSVPForm />
      </section>
    </div>
  );
}

export default App;