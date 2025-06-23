
import React from 'react';
import { useCity } from '@/contexts/CityContext';

const ModelHeader = () => {
  const { selectedCity } = useCity();

  return (
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold text-gray-800 mb-8">
        AI Models - {selectedCity.city}
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Advanced machine learning models for {selectedCity.city}, {selectedCity.state}
      </p>
    </div>
  );
};

export default ModelHeader;
