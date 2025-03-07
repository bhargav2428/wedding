export interface WeddingDetails {
  coupleName: {
    partner1: string;
    partner2: string;
  };
  date: string;
  venues: {
    ceremony: {
      name: string;
      address: string;
      time: string;
      coordinates: {
        lat: number;
        lng: number;
      };
    };
    reception: {
      name: string;
      address: string;
      time: string;
      coordinates: {
        lat: number;
        lng: number;
      };
    };
  };
  story: {
    timeline: Array<{
      date: string;
      title: string;
      description: string;
      imageUrl?: string;
    }>;
  };
  rsvpDeadline: string;
  accommodations: Array<{
    name: string;
    address: string;
    phone: string;
    website: string;
    priceRange: string;
  }>;
}

export interface RSVPFormData {
  name: string;
  email: string;
  attending: boolean;
  guestCount: number;
  mealPreference: 'vegetarian' | 'vegan' | 'regular';
  dietaryRestrictions: string;
  songRequest?: string;
  message?: string;
}