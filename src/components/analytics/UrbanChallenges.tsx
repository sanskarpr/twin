
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import { useCity } from '@/contexts/CityContext';

const UrbanChallenges = () => {
  const { isDark } = useTheme();
  const { selectedCity } = useCity();

  const challenges = [
    {
      title: "Traffic Congestion",
      icon: "🚦",
      description: "Peak hour traffic management and flow optimization",
      current: `${selectedCity.analytics.traffic}%`,
      target: "65%",
      status: selectedCity.analytics.traffic > 75 ? "critical" : selectedCity.analytics.traffic > 65 ? "warning" : "good",
      solutions: [
        "Smart traffic signal optimization",
        "Real-time route suggestions",
        "Congestion pricing implementation"
      ]
    },
    {
      title: "Energy Efficiency",
      icon: "⚡",
      description: "Smart grid optimization and renewable energy integration",
      current: `${selectedCity.analytics.energy} MW`,
      target: "150 MW",
      status: selectedCity.analytics.energy > 180 ? "critical" : selectedCity.analytics.energy > 150 ? "warning" : "good",
      solutions: [
        "Smart meter deployment",
        "Solar panel integration",
        "Energy consumption monitoring"
      ]
    },
    {
      title: "Air Quality Management",
      icon: "🌬️",
      description: "Environmental monitoring and pollution control",
      current: `${selectedCity.analytics.airQuality} AQI`,
      target: "85 AQI",
      status: selectedCity.analytics.airQuality < 70 ? "critical" : selectedCity.analytics.airQuality < 80 ? "warning" : "good",
      solutions: [
        "Real-time air quality monitoring",
        "Green transportation promotion",
        "Industrial emission controls"
      ]
    },
    {
      title: "Resource Management",
      icon: "💧",
      description: "Water and waste management optimization",
      current: `${selectedCity.extraMetrics.wasteManagement}%`,
      target: "90%",
      status: selectedCity.extraMetrics.wasteManagement < 70 ? "critical" : selectedCity.extraMetrics.wasteManagement < 80 ? "warning" : "good",
      solutions: [
        "Smart waste collection routes",
        "Water leak detection systems",
        "Recycling program expansion"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'text-red-500 bg-red-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'good': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="mb-16">
      <h3 className={`text-3xl font-bold text-center mb-12 ${
        isDark ? 'text-slate-100' : 'text-slate-800'
      }`}>
        Urban Challenge Solutions - {selectedCity.city}
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {challenges.map((challenge, index) => (
          <Card key={index} className={`${
            isDark 
              ? 'bg-slate-800/40 border-slate-700/50' 
              : 'bg-white/70 border-slate-200/50'
          } backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-102`}>
            <CardHeader>
              <CardTitle className={`text-xl flex items-center gap-3 ${
                isDark ? 'text-slate-200' : 'text-slate-800'
              }`}>
                <span className="text-3xl">{challenge.icon}</span>
                {challenge.title}
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(challenge.status)}`}>
                  {challenge.status.toUpperCase()}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-sm mb-4 ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {challenge.description}
              </p>
              
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Current:</span>
                  <span className={`ml-2 font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                    {challenge.current}
                  </span>
                </div>
                <div>
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Target:</span>
                  <span className={`ml-2 font-bold text-green-600`}>
                    {challenge.target}
                  </span>
                </div>
              </div>

              <div>
                <h4 className={`text-sm font-semibold mb-2 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>Smart Solutions:</h4>
                <ul className="space-y-1">
                  {challenge.solutions.map((solution, idx) => (
                    <li key={idx} className={`text-xs flex items-center gap-2 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      <span className="text-green-500">•</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UrbanChallenges;
