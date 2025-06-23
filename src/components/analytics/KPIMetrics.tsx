
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import { useCity } from '@/contexts/CityContext';

const KPIMetrics = () => {
  const { isDark } = useTheme();
  const { selectedCity } = useCity();

  const detailedMetrics = [
    { label: "IoT Sensors", value: selectedCity.kpis.sensors, icon: "📡", color: "from-blue-500 to-cyan-500" },
    { label: "Data Points/Hour", value: selectedCity.kpis.dataPoints, icon: "📊", color: "from-green-500 to-emerald-500" },
    { label: "Response Time", value: selectedCity.kpis.responseTime, icon: "🚨", color: "from-red-500 to-pink-500" },
    { label: "Citizen Reports", value: selectedCity.kpis.reports, icon: "📱", color: "from-purple-500 to-violet-500" },
    { label: "Cost Savings", value: selectedCity.kpis.savings, icon: "💰", color: "from-yellow-500 to-amber-500" },
    { label: "CO₂ Reduction", value: selectedCity.kpis.co2Reduction, icon: "🌱", color: "from-green-600 to-teal-600" },
    { label: "Digital Infrastructure", value: selectedCity.kpis.digitalInfra, icon: "🏗️", color: "from-indigo-500 to-blue-600" },
    { label: "Gov Services Online", value: selectedCity.kpis.govServices, icon: "🏛️", color: "from-orange-500 to-red-500" }
  ];

  return (
    <div className="mb-16">
      <h3 className={`text-3xl font-bold text-center mb-12 ${
        isDark ? 'text-slate-100' : 'text-slate-800'
      }`}>
        Key Performance Indicators
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {detailedMetrics.map((metric, index) => (
          <Card key={index} className={`group ${
            isDark 
              ? 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50' 
              : 'bg-white/60 border-slate-200/50 hover:bg-white/80'
          } backdrop-blur-sm text-center transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden`}>
            <CardContent className="p-4 relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <div className="text-2xl mb-2">{metric.icon}</div>
                <div className={`text-xl font-bold mb-1 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                  {metric.value}
                </div>
                <p className={`text-xs leading-tight ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {metric.label}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default KPIMetrics;
