
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import { useCity } from '@/contexts/CityContext';

const ZoneAnalysis = () => {
  const { isDark } = useTheme();
  const { selectedCity } = useCity();

  return (
    <div>
      <h3 className={`text-3xl font-bold text-center mb-12 ${
        isDark ? 'text-slate-100' : 'text-slate-800'
      }`}>
        Zone Analysis - {selectedCity.city}
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {selectedCity.zones.map((zone, index) => (
          <Card key={index} className={`group ${
            isDark 
              ? 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/60' 
              : 'bg-white/70 border-slate-200/50 hover:bg-white/90'
          } backdrop-blur-sm transition-all duration-300 hover:scale-102 hover:shadow-xl`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className={`text-lg font-semibold ${
                  isDark ? 'text-slate-200' : 'text-slate-800'
                }`}>
                  {zone.name}
                </h4>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'
                }`}>
                  {zone.population}
                </span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className={`text-sm ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>Traffic Load</span>
                    <span className={`text-sm font-medium ${
                      isDark ? 'text-slate-200' : 'text-slate-800'
                    }`}>{zone.traffic}%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${
                    isDark ? 'bg-slate-700' : 'bg-slate-200'
                  }`}>
                    <div 
                      className="bg-gradient-to-r from-rose-500 to-pink-500 h-2 rounded-full transition-all duration-1000" 
                      style={{width: `${zone.traffic}%`}}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className={`text-sm ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>Air Quality</span>
                    <span className={`text-sm font-medium ${
                      isDark ? 'text-slate-200' : 'text-slate-800'
                    }`}>{zone.air}%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${
                    isDark ? 'bg-slate-700' : 'bg-slate-200'
                  }`}>
                    <div 
                      className="bg-gradient-to-r from-sky-500 to-indigo-500 h-2 rounded-full transition-all duration-1000" 
                      style={{width: `${zone.air}%`}}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className={`text-sm ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>Energy Efficiency</span>
                    <span className={`text-sm font-medium ${
                      isDark ? 'text-slate-200' : 'text-slate-800'
                    }`}>{zone.energy}%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${
                    isDark ? 'bg-slate-700' : 'bg-slate-200'
                  }`}>
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-1000" 
                      style={{width: `${zone.energy}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ZoneAnalysis;
