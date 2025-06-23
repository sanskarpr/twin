
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import { useCity } from '@/contexts/CityContext';

const AnalyticsCards = () => {
  const { isDark } = useTheme();
  const { selectedCity } = useCity();

  const analyticsData = [
    {
      title: "Traffic Congestion",
      value: `${selectedCity.analytics.traffic}%`,
      icon: "🚦",
      gradient: "from-rose-400 to-pink-600",
      trend: selectedCity.analytics.trend,
      description: "Peak hour congestion levels across main arteries"
    },
    {
      title: "Air Quality Index",
      value: `${selectedCity.analytics.airQuality} AQI`,
      icon: "🌬️",
      gradient: "from-sky-400 to-indigo-600",
      trend: selectedCity.analytics.trend,
      description: "Real-time air quality monitoring network"
    },
    {
      title: "Energy Consumption",
      value: `${selectedCity.analytics.energy} MW`,
      icon: "⚡",
      gradient: "from-emerald-400 to-teal-600",
      trend: selectedCity.analytics.trend,
      description: "Smart grid energy distribution efficiency"
    },
    {
      title: "Population",
      value: selectedCity.analytics.population,
      icon: "👥",
      gradient: "from-violet-400 to-purple-600",
      trend: "+2.1%",
      description: "Current metropolitan population count"
    },
    {
      title: "Smart City Index",
      value: `${selectedCity.analytics.smartIndex}/100`,
      icon: "🏙️",
      gradient: "from-amber-400 to-orange-600",
      trend: "+8.5%",
      description: "Overall smart city development score"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto mb-16">
      {analyticsData.map((item, index) => (
        <Card key={index} className={`group ${
          isDark 
            ? 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/60' 
            : 'bg-white/70 border-slate-200/50 hover:bg-white/90'
        } backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden`}>
          <CardContent className="p-0">
            <div 
              className={`h-32 bg-gradient-to-br ${item.gradient} relative`}
            >
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-4 left-4">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-lg">
                  {item.icon}
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-2xl font-bold mb-1">{item.value}</p>
                <p className={`text-xs font-medium ${
                  item.trend.startsWith('+') ? 'text-green-200' : 'text-red-200'
                }`}>
                  {item.trend} from last month
                </p>
              </div>
            </div>
            <div className="p-4">
              <h3 className={`text-lg font-semibold mb-2 ${
                isDark ? 'text-slate-200' : 'text-slate-800'
              }`}>{item.title}</h3>
              <p className={`text-sm ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {item.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AnalyticsCards;
