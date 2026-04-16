export interface BusModel {
  id: string;
  name: string;
  type: 'Town' | 'Mofussil' | 'College' | 'Staff';
  description: string;
  specifications: {
    seating: string;
    chassis: string;
    structure: string;
    compliance: string;
  };
  imageUrl: string;
}

export interface InfrastructureItem {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  images: string[];
}
