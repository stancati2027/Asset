import React from 'react';
import { CarViewer } from './components/CarViewer';
import { DamageSelector } from './components/DamageSelector';
import { EstimateCalculator } from './components/EstimateCalculator';
import { useEstimate } from './hooks/useEstimate';

export function EstimatePage() {
  const { selectedParts, totalEstimate, onPartSelect } = useEstimate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Get an Instant Estimate</h1>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <CarViewer selectedParts={selectedParts} onPartSelect={onPartSelect} />
          <DamageSelector selectedParts={selectedParts} onPartSelect={onPartSelect} />
        </div>
        
        <EstimateCalculator selectedParts={selectedParts} totalEstimate={totalEstimate} />
      </div>
    </div>
  );
}