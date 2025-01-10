import React from 'react';
import { CarPart } from '../../../types';

interface DamageSelectorProps {
  selectedParts: CarPart[];
  onPartSelect: (part: CarPart) => void;
}

const carParts: CarPart[] = [
  { id: 'hood', name: 'Hood', basePrice: 150 },
  { id: 'front-bumper', name: 'Front Bumper', basePrice: 200 },
  { id: 'rear-bumper', name: 'Rear Bumper', basePrice: 200 },
  { id: 'left-door', name: 'Left Door', basePrice: 175 },
  { id: 'right-door', name: 'Right Door', basePrice: 175 },
  { id: 'left-fender', name: 'Left Fender', basePrice: 150 },
  { id: 'right-fender', name: 'Right Fender', basePrice: 150 },
  { id: 'roof', name: 'Roof', basePrice: 250 },
  { id: 'trunk', name: 'Trunk', basePrice: 150 },
];

export function DamageSelector({ selectedParts, onPartSelect }: DamageSelectorProps) {
  return (
    <div className="mt-6 bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4">Quick Part Selection</h3>
      <div className="grid grid-cols-3 gap-3">
        {carParts.map((part) => (
          <button
            key={part.id}
            onClick={() => onPartSelect(part)}
            className={`p-3 rounded-lg text-sm font-medium transition-colors ${
              selectedParts.some(p => p.id === part.id)
                ? 'bg-blue-100 text-blue-700 border-2 border-blue-500'
                : 'bg-gray-50 text-gray-700 border-2 border-transparent hover:bg-gray-100'
            }`}
          >
            {part.name}
          </button>
        ))}
      </div>
    </div>
  );
}