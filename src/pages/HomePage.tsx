import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Shield, Star } from 'lucide-react';

export function HomePage() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Professional Paintless Dent Removal
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Fast, affordable, and environmentally friendly dent repair
        </p>
        <Link
          to="/book"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Book Your Repair
        </Link>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="text-center">
            {feature.icon}
            <h3 className="text-lg font-semibold mt-4 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <img
            src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80&w=800"
            alt="PDR Professional at work"
            className="rounded-lg shadow-md"
          />
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Expert PDR Services</h3>
            <p className="text-gray-600">
              Our certified technicians use state-of-the-art techniques to restore your vehicle's appearance without affecting the original paint.
            </p>
            <ul className="space-y-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: <Clock className="h-8 w-8 text-blue-600 mx-auto" />,
    title: 'Quick Service',
    description: 'Most repairs completed same day',
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600 mx-auto" />,
    title: 'Guaranteed Work',
    description: '100% satisfaction guaranteed',
  },
  {
    icon: <Star className="h-8 w-8 text-blue-600 mx-auto" />,
    title: 'Expert Technicians',
    description: 'Certified and experienced staff',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-blue-600 mx-auto" />,
    title: 'Free Estimates',
    description: 'Transparent pricing, no hidden fees',
  },
];

const benefits = [
  'No Paint or Body Filler Required',
  'Maintains Original Factory Finish',
  'Environmentally Friendly Process',
  'Cost-Effective Solution',
  'Preserves Vehicle Value',
];