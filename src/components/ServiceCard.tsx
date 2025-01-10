import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
      <p className="mt-2 text-gray-600">{service.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <div>
          <p className="text-2xl font-bold text-blue-600">${service.price}</p>
          <p className="text-sm text-gray-500">Est. {service.estimatedTime} minutes</p>
        </div>
        <Link
          to={`/book?service=${service.id}`}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
        >
          <span>Book Now</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}