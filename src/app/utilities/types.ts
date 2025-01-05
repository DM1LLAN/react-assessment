export interface Itinerary {
    id: string;
    legs: string[];
    price: string;
    agent: string;
    agent_rating: number;
  }
  
  export interface Leg {
    id: string;
    departure_airport: string;
    arrival_airport: string;
    departure_time: string;
    arrival_time: string;
    stops: number;
    airline_name: string;
    airline_id: string;
    duration_mins: number;
  } 