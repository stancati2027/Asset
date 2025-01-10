import React from 'react';
import { Check, AlertCircle } from 'lucide-react';
import { CarPart } from '../../../types';
import { Link } from 'react-router-dom';

interface EstimateCalculatorProps {
  selectedParts: CarPart[];
  totalEstimate: number;
}

export function EstimateCalculator({ selectedParts, totalEstimate }: EstimateCalculatorProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Estimate Summary</h2>
      
      {selectedParts.length === 0 ? (
        <div className="flex items-center space-x-2 text-gray-500 mb-6">
          <AlertCircle className="w-5 h-5" />
          <p>Select damaged areas to get an estimate</p>
        </div>
      ) : (
        <div className="space-y-4 mb-6">
          {selectedParts.map((part) => (
            <div key={part.id} className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>{part.name}</span>
              </div>
              <span className="font-medium">${part.basePrice}</span>
            </div>
          ))}
          
          <div className="border-t pt-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total Estimate</span>
              <span className="text-2xl font-bold text-blue-600">
                ${totalEstimate}
              </span>
            </div>
          </div>
        </div>
      )}
      
      <div className="space-y-4">
        <Link
          to="/book"
          className={`w-full block text-center py-3 rounded-lg font-medium transition-colors ${
            selectedParts.length === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Book Repair
        </Link>
        
        <div className="text-sm text-gray-500">
          <p className="mb-2">This is an initial estimate. Final pricing may vary based on:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Actual dent size and severity</li>
            <li>Paint damage assessment</li>
            <li>Additional damage found during inspection</li>
          </ul>
        </div>
      </div>
    </div>
  );
}