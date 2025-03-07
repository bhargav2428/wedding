import { WeddingDetails } from '../types';

export const weddingDetails: WeddingDetails = {
  coupleName: {
    partner1: "Lorah",
    partner2: "Antony"
  },
  date: "2025-09-21T16:00:00.000Z",
  venues: {
    ceremony: {
      name: "St. Mary's Cathedral",
      address: "1111 Cathedral Lane, San Francisco, CA 94108",
      time: "16:00",
      coordinates: {
        lat: 37.7912,
        lng: -122.4265
      }
    },
    reception: {
      name: "Golden Gate Club",
      address: "135 Fisher Loop, San Francisco, CA 94129",
      time: "18:00",
      coordinates: {
        lat: 37.8013,
        lng: -122.4572
      }
    }
  },
  story: {
    timeline: [
      {
        date: "2020-06-15",
        title: "First Meeting",
        description: "We met at a local coffee shop in San Francisco, both reaching for the same coffee cup by mistake.",
        imageUrl: "https://images.unsplash.com/photo-1514994667787-b48ca37155f0?auto=format&fit=crop&q=80&w=800"
      },
      {
        date: "2021-12-24",
        title: "The Proposal",
        description: "Michael proposed during our Christmas Eve dinner at the Top of the Mark, overlooking the city lights.",
        imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  rsvpDeadline: "2024-08-21T23:59:59.000Z",
  accommodations: [
    {
      name: "Fairmont San Francisco",
      address: "950 Mason St, San Francisco, CA 94108",
      phone: "+1 (415) 772-5000",
      website: "https://www.fairmont.com/san-francisco",
      priceRange: "$$$"
    },
    {
      name: "Hotel Nikko",
      address: "222 Mason St, San Francisco, CA 94102",
      phone: "+1 (415) 394-1111",
      website: "https://www.hotelnikkosf.com",
      priceRange: "$$"
    }
  ]
};
