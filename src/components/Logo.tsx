import React from 'react';
import { Wrench, Car } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-1">
      <div className="relative">
        <Car className="h-8 w-8 text-blue-600" />
        <Wrench className="h-4 w-4 text-blue-500 absolute -bottom-1 -right-1 transform rotate-45" />
      </div>
      <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
        GoDentGo - PDR
      </span>
    </div>
  );
}