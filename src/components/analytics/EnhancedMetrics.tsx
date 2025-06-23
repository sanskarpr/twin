
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import { useCity } from '@/contexts/CityContext';

const EnhancedMetrics = () => {
  const { isDark } = useTheme();
  const { selectedCity } = useCity();

  const enhancedMetrics = [
    { 
      title: "Water Quality", 
      value: selectedCity.extraMetrics.waterQuality, 
      icon: "💧", 
      color: "text-blue-500",
      description: "Drinking water purity index"
    },
    { 
      title: "Waste Management", 
      value: selectedCity.extraMetrics.wasteManagement, 
      icon: "♻️", 
      color: "text-green-500",
      description: "Recycling and disposal efficiency"
    },
    { 
      title: "Public Transport", 
      value: selectedCity.extraMetrics.publicTransport, 
      icon: "🚇", 
      color: "text-purple-500",
      description: "Metro, bus connectivity score"
    },
    { 
      title: "Digital Payments", 
      value: selectedCity.extraMetrics.digitalPayments, 
      icon: "💳", 
      color: "text-indigo-500",
      description: "UPI and digital transaction adoption"
    },
    { 
      title: "Healthcare Access", 
      value: selectedCity.extraMetrics.healthcare, 
      icon: "🏥", 
      color: "text-red-500",
      description: "Hospital beds per 1000 citizens"
    },
    { 
      title: "Education Index", 
      value: selectedCity.extraMetrics.education, 
      icon: "🎓", 
      color: "text-amber-500",
      description: "Literacy rate and school quality"
    }
  ];

  return (
    <div className="mb-16">
      <h3 className={`text-3xl font-bold text-center mb-12 ${
        isDark ? 'text-slate-100' : 'text-slate-800'
      }`}>
        Quality of Life Metrics
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enhancedMetrics.map((metric, index) => (
          <Card key={index} className={`${
            isDark 
              ? 'bg-slate-800/40 border-slate-700/50' 
              : 'bg-white/70 border-slate-200/50'
          } backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-102`}>
            <CardHeader className="pb-3">
              <CardTitle className={`text-lg flex items-center gap-3 ${
                isDark ? 'text-slate-200' : 'text-slate-800'
              }`}>
                <span className="text-2xl">{metric.icon}</span>
                {metric.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-3">
                <span className={`text-3xl font-bold ${metric.color}`}>
                  {metric.value}%
                </span>
                <div className={`w-16 h-16 rounded-full border-4 ${
                  metric.value >= 80 ? 'border-green-500' : 
                  metric.value >= 60 ? 'border-yellow-500' : 'border-red-500'
                } flex items-center justify-center`}>
                  <span className={`text-sm font-medium ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {metric.value >= 80 ? '🟢' : metric.value >= 60 ? '🟡' : '🔴'}
                  </span>
                </div>
              </div>
              <div className={`w-full rounded-full h-2 ${
                isDark ? 'bg-slate-700' : 'bg-slate-200'
              } mb-2`}>
                <div 
                  className={`h-2 rounded-full transition-all duration-1000 ${
                    metric.value >= 80 ? 'bg-green-500' : 
                    metric.value >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{width: `${metric.value}%`}}
                ></div>
              </div>
              <p className={`text-sm ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {metric.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EnhancedMetrics;
