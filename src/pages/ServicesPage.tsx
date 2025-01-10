import React from 'react';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../data/services';

export function ServicesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}