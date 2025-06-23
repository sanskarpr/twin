
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import { useCity } from '@/contexts/CityContext';
import { Progress } from '@/components/ui/progress';

const SustainabilityMetrics = () => {
  const { isDark } = useTheme();
  const { selectedCity } = useCity();

  const sustainabilityData = [
    {
      category: "Carbon Footprint",
      icon: "🌱",
      current: 2.1,
      target: 1.5,
      unit: "tons CO₂/person",
      progress: 75,
      trend: "-12%",
      color: "from-green-500 to-emerald-600"
    },
    {
      category: "Renewable Energy",
      icon: "☀️",
      current: 68,
      target: 85,
      unit: "% of total energy",
      progress: 80,
      trend: "+8%",
      color: "from-yellow-500 to-orange-500"
    },
    {
      category: "Green Spaces",
      icon: "🌳",
      current: 42,
      target: 50,
      unit: "% city coverage",
      progress: 84,
      trend: "+3%",
      color: "from-green-400 to-teal-500"
    },
    {
      category: "Water Conservation",
      icon: "💧",
      current: selectedCity.extraMetrics.waterQuality,
      target: 95,
      unit: "% efficiency",
      progress: 87,
      trend: "+5%",
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Waste Recycling",
      icon: "♻️",
      current: selectedCity.extraMetrics.wasteManagement,
      target: 90,
      unit: "% recycled",
      progress: selectedCity.extraMetrics.wasteManagement,
      trend: "+7%",
      color: "from-purple-500 to-indigo-500"
    },
    {
      category: "Air Quality Index",
      icon: "🌬️",
      current: selectedCity.analytics.airQuality,
      target: 90,
      unit: "AQI score",
      progress: selectedCity.analytics.airQuality,
      trend: "+2%",
      color: "from-sky-500 to-blue-600"
    }
  ];

  return (
    <div className="mb-8">
      <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
        Sustainability & Environmental Impact
      </h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sustainabilityData.map((metric, index) => (
          <Card key={index} className={`${
            isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/70 border-slate-200/50'
          } backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-102 overflow-hidden`}>
            <div className={`h-2 bg-gradient-to-r ${metric.color}`}></div>
            <CardHeader>
              <CardTitle className={`text-lg flex items-center gap-3 ${
                isDark ? 'text-slate-200' : 'text-slate-800'
              }`}>
                <span className="text-2xl">{metric.icon}</span>
                <div className="flex-1">
                  <div>{metric.category}</div>
                  <div className={`text-sm font-normal ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {metric.unit}
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                      {metric.current}
                    </div>
                    <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Target: {metric.target}
                    </div>
                  </div>
                  <div className={`text-right ${
                    metric.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <div className="text-lg font-bold">{metric.trend}</div>
                    <div className="text-xs">vs last month</div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Progress to Target</span>
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{metric.progress}%</span>
                  </div>
                  <Progress value={metric.progress} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SustainabilityMetrics;
