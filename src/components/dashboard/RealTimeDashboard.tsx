
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import { useCity } from '@/contexts/CityContext';
import { Badge } from '@/components/ui/badge';

const RealTimeDashboard = () => {
  const { isDark } = useTheme();
  const { selectedCity } = useCity();
  const [liveData, setLiveData] = useState({
    timestamp: new Date(),
    activeAlerts: 3,
    systemStatus: 'optimal'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        ...prev,
        timestamp: new Date(),
        activeAlerts: Math.floor(Math.random() * 5) + 1
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const realTimeMetrics = [
    {
      title: "Traffic Flow",
      value: `${selectedCity.analytics.traffic}%`,
      status: selectedCity.analytics.traffic > 80 ? "critical" : "normal",
      trend: "+2.3%",
      icon: "🚦"
    },
    {
      title: "Energy Grid",
      value: `${selectedCity.analytics.energy} MW`,
      status: selectedCity.analytics.energy > 200 ? "high" : "normal",
      trend: "-1.2%",
      icon: "⚡"
    },
    {
      title: "Air Quality",
      value: `${selectedCity.analytics.airQuality} AQI`,
      status: selectedCity.analytics.airQuality < 70 ? "critical" : "good",
      trend: "+0.8%",
      icon: "🌬️"
    },
    {
      title: "Water Systems",
      value: `${selectedCity.extraMetrics.waterQuality}%`,
      status: "optimal",
      trend: "+0.5%",
      icon: "💧"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'high': case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'good': case 'optimal': case 'normal': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="mb-8">
      <div className={`flex items-center justify-between mb-6 p-4 rounded-lg ${
        isDark ? 'bg-slate-800/50' : 'bg-white/50'
      } backdrop-blur-sm`}>
        <div>
          <h2 className={`text-2xl font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
            Real-Time City Dashboard
          </h2>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Last updated: {liveData.timestamp.toLocaleTimeString()}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Live Data
            </span>
          </div>
          <Badge variant="outline" className="text-red-600">
            {liveData.activeAlerts} Active Alerts
          </Badge>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {realTimeMetrics.map((metric, index) => (
          <Card key={index} className={`${
            isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/70 border-slate-200/50'
          } backdrop-blur-sm hover:shadow-lg transition-all duration-300`}>
            <CardHeader className="pb-2">
              <CardTitle className={`text-sm flex items-center justify-between ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                <span className="flex items-center gap-2">
                  <span className="text-lg">{metric.icon}</span>
                  {metric.title}
                </span>
                <Badge className={getStatusColor(metric.status)}>
                  {metric.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className={`text-2xl font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                  {metric.value}
                </span>
                <span className={`text-sm ${
                  metric.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.trend}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RealTimeDashboard;
