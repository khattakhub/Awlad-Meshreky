
import { Wrench, Droplet, Disc3, Snowflake, CircleDot, Sparkles, Calculator, Fuel, Car, ShieldCheck, Tag, Star } from "lucide-react";

export const services = [
  {
    icon: <Wrench className="h-8 w-8" />,
    slug: "engine-diagnostics",
    title: 'Engine Diagnostics & Repair',
    description: 'Advanced diagnostics to pinpoint issues and provide comprehensive engine repairs, from minor fixes to major overhauls.'
  },
  {
    icon: <Droplet className="h-8 w-8" />,
    slug: "oil-change",
    title: 'Lube & Oil Change',
    description: 'Keep your engine running smoothly with our premium oil change services, including filter replacement and fluid checks.'
  },
  {
    icon: <Disc3 className="h-8 w-8" />,
    slug: "brake-services",
    title: 'Brake System Services',
    description: 'Complete brake inspection, pad and rotor replacement, and fluid services to ensure your safety on the road.'
  },
  {
    icon: <Snowflake className="h-8 w-8" />,
    slug: "ac-repair",
    title: 'A/C Repair & Service',
    description: 'Stay cool with our expert A/C diagnostics, refrigerant recharging, and component repair for all vehicle types.'
  },
  {
    icon: <CircleDot className="h-8 w-8" />,
    slug: "tire-services",
    title: 'Tire Services & Alignment',
    description: 'We offer tire rotation, balancing, and precision wheel alignment to maximize tire life and vehicle performance.'
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    slug: "professional-detailing",
    title: 'Professional Detailing',
    description: 'Restore your vehicle\'s shine with our interior and exterior detailing packages, including polishing and deep cleaning.'
  }
];

export const tools = [
  {
    icon: <Calculator className="h-8 w-8" />,
    slug: "loan-calculator",
    title: "Car Loan Calculator",
    description: "Estimate your monthly payments for a new or used car loan."
  },
  {
    icon: <Fuel className="h-8 w-8" />,
    slug: "fuel-cost-estimator",
    title: "Fuel Cost Estimator",
    description: "Calculate the fuel cost for your next road trip or daily commute."
  },
  {
    icon: <Car className="h-8 w-8" />,
    slug: "resale-value-estimator",
    title: "Car Resale Value Estimator",
    description: "Get an estimated market value for your current vehicle."
  }
];

export const blogPosts = [
    {
      slug: '5-signs-your-brakes-need-checking',
      title: '5 Signs Your Brakes Need Checking',
      excerpt: 'Your brake system is crucial for safety. Learn to recognize the warning signs that indicate it\'s time for a professional inspection.',
      image: 'https://images.unsplash.com/photo-1599422588380-f3a2d5a35987?q=80&w=800&auto=format&fit=crop',
      author: 'John Doe',
      date: 'October 26, 2023',
      content: `
        <p>Your vehicle's braking system is arguably its most important safety feature. Recognizing the early warning signs of brake trouble can save you from costly repairs and, more importantly, prevent accidents. Here are five common signs that you should bring your car to Awlad Meshreky Garage for a brake inspection:</p>
        <h3 class="font-bold text-xl mt-4">1. Squealing or Grinding Noises</h3>
        <p>High-pitched squealing when you apply the brakes is often the first sign that your brake pads are wearing thin. This sound is caused by a small metal indicator built into the brake pad. If you hear a deep, metallic grinding sound, it could mean your brake pads are completely worn away, and the calipers are grinding against the rotors, which can cause significant damage.</p>
        <h3 class="font-bold text-xl mt-4">2. Spongy or Soft Brake Pedal</h3>
        <p>If your brake pedal feels softer than usual or sinks to the floor with little resistance, it could indicate a problem with the hydraulic system, such as air in the brake lines, a fluid leak, or a failing master cylinder. This is a serious safety concern and requires immediate attention.</p>
        `
    },
    {
      slug: 'why-regular-oil-changes-are-essential',
      title: 'Why Regular Oil Changes Are Essential',
      excerpt: 'Engine oil is the lifeblood of your vehicle. Discover why sticking to a regular oil change schedule is one of the best things you can do for your car.',
      image: 'https://images.unsplash.com/photo-1629091845391-6e6b41203a35?q=80&w=800&auto=format&fit=crop',
      author: 'Jane Smith',
      date: 'October 15, 2023',
      content: '<p>Regular oil changes are vital for your car\'s health. This post delves into the reasons why...</p>'
    },
    {
      slug: 'maximizing-your-cars-ac-performance',
      title: 'Maximizing Your Car\'s AC Performance',
      excerpt: 'Don\'t sweat it out in the Ajman heat. Follow these simple tips to ensure your car\'s air conditioning system is running at peak efficiency.',
      image: 'https://images.unsplash.com/photo-1543443258-c6a68380dc85?q=80&w=800&auto=format&fit=crop',
      author: 'Admin',
      date: 'September 28, 2023',
      content: '<p>A working AC is a must-have. Here is how to keep it in top shape...</p>'
    },
];

export const testimonials = [
  {
    name: "Ahmed Al-Mansoori",
    vehicle: "Toyota Land Cruiser",
    quote: "The team at Awlad Meshreky are true professionals. They diagnosed a complex engine issue that other garages missed and fixed it quickly. Highly recommended!"
  },
  {
    name: "Fatima Khan",
    vehicle: "Honda Civic",
    quote: "I always come here for my regular maintenance. The service is fast, the pricing is transparent, and the staff is incredibly friendly and helpful."
  },
  {
    name: "Michael Chen",
    vehicle: "Mercedes-Benz C-Class",
    quote: "Exceptional detailing service! My car looked newer than when I bought it. The attention to detail was amazing. I will definitely be back."
  }
];

export const pricingPlans = [
    {
        name: "Basic",
        price: 199,
        description: "Essential maintenance to keep your car running smoothly.",
        features: ["Standard Oil Change", "Tire Rotation", "Brake Inspection", "Fluid Top-Up"],
        recommended: false,
    },
    {
        name: "Premium",
        price: 349,
        description: "Comprehensive care for optimal performance and longevity.",
        features: ["Synthetic Oil Change", "Wheel Alignment Check", "Full System Diagnostic", "AC System Check", "Includes all Basic features"],
        recommended: true,
    },
    {
        name: "Ultimate",
        price: 499,
        description: "The complete package for the discerning car owner.",
        features: ["Full Detailing Service", "Engine Bay Cleaning", "Headlight Restoration", "Includes all Premium features"],
        recommended: false,
    }
];

export const features = [
    {
        icon: <Wrench />,
        title: "Expert Technicians",
        description: "Our certified mechanics have years of experience and are trained on the latest automotive technology."
    },
    {
        icon: <ShieldCheck />,
        title: "Quality Parts Guarantee",
        description: "We use only high-quality, OEM or equivalent parts to ensure durability and performance for every repair."
    },
    {
        icon: <Tag />,
        title: "Transparent Pricing",
        description: "Receive a detailed, upfront quote before any work begins. No hidden fees, just honest service."
    },
    {
        icon: <Star />,
        title: "Customer Satisfaction",
        description: "We are committed to providing an exceptional experience and ensuring you're fully satisfied with our work."
    }
];
