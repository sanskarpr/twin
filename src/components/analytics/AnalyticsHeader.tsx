
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useCity } from '@/contexts/CityContext';

const AnalyticsHeader = () => {
  const { isDark } = useTheme();
  const { selectedCity } = useCity();

  return (
    <div className="text-center mb-16">
      <div className="relative">
        <h1 className={`text-6xl font-bold mb-6 bg-gradient-to-r ${
          isDark 
            ? 'from-slate-200 via-cyan-300 to-blue-400' 
            : 'from-slate-700 via-indigo-600 to-purple-600'
        } bg-clip-text text-transparent animate-fade-in`}>
          Smart City Analytics
        </h1>
        <div className={`absolute -top-2 -right-8 w-16 h-16 rounded-full ${
          isDark ? 'bg-cyan-400/20' : 'bg-indigo-400/20'
        } blur-xl animate-pulse`}></div>
      </div>
      
      <div className={`flex items-center justify-center gap-4 mb-6`}>
        <div className={`w-20 h-1 rounded-full bg-gradient-to-r ${
          isDark ? 'from-cyan-400 to-blue-500' : 'from-indigo-500 to-purple-600'
        }`}></div>
        <span className="text-2xl">🏙️</span>
        <div className={`w-20 h-1 rounded-full bg-gradient-to-l ${
          isDark ? 'from-cyan-400 to-blue-500' : 'from-indigo-500 to-purple-600'
        }`}></div>
      </div>
      
      <p className={`text-xl mb-2 ${
        isDark ? 'text-slate-300' : 'text-slate-600'
      }`}>
        Real-time Intelligence for {selectedCity.city}, {selectedCity.state}
      </p>
      
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
        isDark ? 'bg-slate-800/50 text-cyan-300' : 'bg-indigo-100 text-indigo-700'
      } backdrop-blur-sm`}>
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        <span className="text-sm font-medium">Live Data Streaming</span>
      </div>
    </div>
  );
};

export default AnalyticsHeader;
