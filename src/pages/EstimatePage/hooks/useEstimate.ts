import { useState, useCallback, useMemo } from 'react';
import { CarPart } from '../../../types';

export function useEstimate() {
  const [selectedParts, setSelectedParts] = useState<CarPart[]>([]);

  const onPartSelect = useCallback((part: CarPart) => {
    setSelectedParts(prev => {
      const exists = prev.some(p => p.id === part.id);
      if (exists) {
        return prev.filter(p => p.id !== part.id);
      }
      return [...prev, part];
    });
  }, []);

  const totalEstimate = useMemo(() => {
    return selectedParts.reduce((total, part) => total + part.basePrice, 0);
  }, [selectedParts]);

  return {
    selectedParts,
    totalEstimate,
    onPartSelect,
  };
}