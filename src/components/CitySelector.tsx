
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCity } from '@/contexts/CityContext';
import { useTheme } from '@/contexts/ThemeContext';

const CitySelector = () => {
  const { selectedCity, setSelectedCity, availableStates } = useCity();
  const { isDark } = useTheme();
  const [selectedState, setSelectedState] = useState(selectedCity.state);

  const handleStateChange = (state: string) => {
    setSelectedState(state);
    // Auto-select first city when state changes
    const firstCity = availableStates[state][0];
    setSelectedCity(state, firstCity);
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(selectedState, city);
  };

  return (
    <div className="flex gap-6 mb-8">
      <div className="flex flex-col gap-3 min-w-[200px]">
        <label className={`text-sm font-semibold ${
          isDark ? 'text-slate-300' : 'text-slate-700'
        }`}>
          Select State
        </label>
        <Select value={selectedState} onValueChange={handleStateChange}>
          <SelectTrigger className={`${
            isDark 
              ? 'bg-slate-800/50 border-slate-600 text-slate-200 hover:bg-slate-800/70' 
              : 'bg-white/80 border-slate-300 text-slate-700 hover:bg-white'
          } backdrop-blur-sm transition-all duration-300 hover:scale-102 shadow-lg`}>
            <SelectValue placeholder="Choose state" />
          </SelectTrigger>
          <SelectContent className={`${
            isDark ? 'bg-slate-800 border-slate-600' : 'bg-white border-slate-300'
          } shadow-xl backdrop-blur-sm z-50`}>
            {Object.keys(availableStates).sort().map((state) => (
              <SelectItem 
                key={state} 
                value={state} 
                className={`${
                  isDark ? 'hover:bg-slate-700 text-slate-200' : 'hover:bg-slate-100 text-slate-700'
                } transition-colors duration-200`}
              >
                {state}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-3 min-w-[200px]">
        <label className={`text-sm font-semibold ${
          isDark ? 'text-slate-300' : 'text-slate-700'
        }`}>
          Select City
        </label>
        <Select value={selectedCity.city} onValueChange={handleCityChange}>
          <SelectTrigger className={`${
            isDark 
              ? 'bg-slate-800/50 border-slate-600 text-slate-200 hover:bg-slate-800/70' 
              : 'bg-white/80 border-slate-300 text-slate-700 hover:bg-white'
          } backdrop-blur-sm transition-all duration-300 hover:scale-102 shadow-lg`}>
            <SelectValue placeholder="Choose city" />
          </SelectTrigger>
          <SelectContent className={`${
            isDark ? 'bg-slate-800 border-slate-600' : 'bg-white border-slate-300'
          } shadow-xl backdrop-blur-sm z-50`}>
            {availableStates[selectedState]?.sort().map((city) => (
              <SelectItem 
                key={city} 
                value={city} 
                className={`${
                  isDark ? 'hover:bg-slate-700 text-slate-200' : 'hover:bg-slate-100 text-slate-700'
                } transition-colors duration-200`}
              >
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CitySelector;
