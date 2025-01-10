import React, { useEffect, useRef } from 'react';
import { CarPart } from '../../../types';

interface CarViewerProps {
  selectedParts: CarPart[];
  onPartSelect: (part: CarPart) => void;
}

export function CarViewer({ selectedParts, onPartSelect }: CarViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Here you would initialize your 3D viewer
    // For now, we'll show a placeholder
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#f3f4f6';
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    
    ctx.font = '20px Arial';
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.fillText('3D Car Viewer Coming Soon', canvasRef.current.width / 2, canvasRef.current.height / 2);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Select Damaged Areas</h2>
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        className="w-full border rounded-lg"
      />
      <p className="text-sm text-gray-500 mt-2">
        Click on the car parts to select damaged areas
      </p>
    </div>
  );
}