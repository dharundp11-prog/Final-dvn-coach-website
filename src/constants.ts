import { BusModel, InfrastructureItem, Testimonial } from './types';

export const BUS_MODELS: BusModel[] = [
  {
    id: 'town-bus',
    name: 'Town Bus',
    type: 'Town',
    description: 'Built for the city’s non-stop pace,and reinforced chassis for maximum durability on high-traffic routes.',
    specifications: {
      seating: '40+1 Semi-Deluxe',
      chassis: 'AL / TATA / Eicher Compatible',
      structure: 'GI Tubular / Anti-Corrosive Coated',
      compliance: 'AIS-052 Type I'
    },
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mofussil-bus',
    name: 'Mofussil Bus',
    type: 'Mofussil',
    description: 'Built for rugged rural terrains with heavy-duty suspension reinforcement and dust-sealed cabin.',
    specifications: {
      seating: '55+1 Standard',
      chassis: 'Heavy Duty 12M Chassis',
      structure: 'All-Steel Welded Frame',
      compliance: 'AIS-052 Type II'
    },
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'college-bus',
    name: 'College Bus',
    type: 'College',
    description: 'High-capacity transit solution for educational institutions with robust interior finishes.',
    specifications: {
      seating: '60+1 High Back',
      chassis: '12M Standard Chassis',
      structure: 'GI Tubular Frame',
      compliance: 'AIS-052 Type II'
    },
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'staff-bus',
    name: 'Staff Bus',
    type: 'Staff',
    description: 'Built for reliable daily commutes, and focuses on passenger safety and comfortable seating for long transit hours. Designed for easy movement and durability, providing a dependable transport solution for corporate teams.',
    specifications: {
      seating: '50 Seats',
      chassis: 'Medium Duty Chassis',
      structure: 'Roll-over Protected Cage',
      compliance: 'AIS-153 Approved'
    },
    imageUrl: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=800'
  }
];

export const INFRASTRUCTURE: InfrastructureItem[] = [
  {
    title: 'R&D Center',
    description: 'Advanced CAD/CAM design facility for structural analysis and aerodynamic optimization.',
    icon: 'Microscope'
  },
  {
    title: 'Fabrication Wing',
    description: 'Integrated layout with precision jigs and fixtures ensuring millimeter-perfect alignment.',
    icon: 'Factory'
  },
  {
    title: 'Quality Control',
    description: 'Comprehensive testing including leak tests, structural stress tests, and finish inspection.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Paint Studio',
    description: 'Dust-free spray painting booths with specialized curing systems for industrial-grade finish.',
    icon: 'Paintbrush'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'SRM COLLEGE',
    role: 'INSTITUTIONAL PARTNER',
    content: 'The precision in their body building for our institutional fleet has been exceptional. Safety and durability are clearly their top priorities in every coach they deliver.',
    rating: 5,
    images: [
      'https://res.cloudinary.com/dxufff4iw/image/upload/v1776240069/1_-_Back_shot_ejqucz.jpg',
      'https://res.cloudinary.com/dxufff4iw/image/upload/v1776240077/1_-_corss_back_shot_oo6v7y.jpg',
      'https://res.cloudinary.com/dxufff4iw/image/upload/v1776240069/1_-_Front_cross_shot_maxsum.jpg',
      'https://res.cloudinary.com/dxufff4iw/image/upload/v1776240062/1_-_Side_shot_bbk37v.jpg'
    ]
  },
  {
    name: 'AshokKumar S',
    role: 'FLEET OPERATOR',
    content: 'For a very long time, they have been doing a good job. Consistent quality and reliable engineering. Their attention to detail in structural integrity is unmatched.',
    rating: 5,
    images: [
      'https://res.cloudinary.com/dxufff4iw/image/upload/v1776240808/2_-_front_shot_mcxq5k.jpg',
      'https://res.cloudinary.com/dxufff4iw/image/upload/v1776240807/2_-_back_cross_shot_hr9dfv.jpg',
      'https://res.cloudinary.com/dxufff4iw/image/upload/v1776240809/2-_fornt_cross_shot_mk76sz.jpg',
      'https://res.cloudinary.com/dxufff4iw/image/upload/v1776240808/2_-_side_shot_whu5ys.jpg'
    ]
  },
  {
    name: 'Kheshore J R',
    role: 'TRANSPORT PROFESSIONAL',
    content: 'The best bus body builder dynasty in Karur. Their reputation for excellence is well-deserved and reflected in every vehicle that leaves their facility.',
    rating: 5,
    images: [
      'https://res.cloudinary.com/dxufff4iw/image/upload/v1776241220/baby_bus_back_shot_ejdbj2.jpg',
      'https://res.cloudinary.com/dxufff4iw/image/upload/v1776241220/baby_bus_front_cross_shot_qtqcji.jpg',
      'https://res.cloudinary.com/dxufff4iw/image/upload/v1776241220/baby_bus_-_back_cross_shot_ynqsrj.jpg',
      'https://res.cloudinary.com/dxufff4iw/image/upload/v1776241219/baby_bus_-_side_shot_qbq8et.jpg'
    ]
  },
  {
    name: 'Sri Periya Sakthi',
    role: 'FLEET OWNER',
    content: 'The companies that build new bus bodies are doing a great job, and DVN stands out among them with their innovative designs and robust construction.',
    rating: 5,
    images: [
      'https://res.cloudinary.com/dxufff4iw/image/upload/v1776241493/4_-_front_shot_num3bz.jpg',
      'https://res.cloudinary.com/dxufff4iw/image/upload/v1776241491/4_-_BACK_CROSS_SHOT_pob6rr.jpg',
      'https://res.cloudinary.com/dxufff4iw/image/upload/v1776241492/4_-_front_cross_shot_jrfrxi.jpg',
      'https://res.cloudinary.com/dxufff4iw/image/upload/v1776241492/4-_side_shot_i1vbhm.jpg'
    ]
  }
];

export const CONTACT_PHONE = '09566596666';
export const WHATSAPP_LINK = `https://wa.me/919566596666`;
export const FORMSPREE_URL = 'https://formspree.io/f/xreywywa';
