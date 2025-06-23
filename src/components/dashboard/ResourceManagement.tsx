
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import { useCity } from '@/contexts/CityContext';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const ResourceManagement = () => {
  const { isDark } = useTheme();
  const { selectedCity } = useCity();
  const [activeResource, setActiveResource] = useState('water');

  const resources = {
    water: {
      title: "Water Management",
      icon: "💧",
      usage: selectedCity.extraMetrics.waterQuality,
      capacity: 100,
      efficiency: 94,
      status: "optimal",
      alerts: [
        { type: "info", message: "Water quality excellent in all zones" },
        { type: "warning", message: "Pipe maintenance scheduled for Zone 3" }
      ],
      distribution: [
        { zone: "Central", usage: 85, capacity: 100 },
        { zone: "North", usage: 72, capacity: 100 },
        { zone: "South", usage: 91, capacity: 100 },
        { zone: "East", usage: 67, capacity: 100 }
      ]
    },
    energy: {
      title: "Energy Grid",
      icon: "⚡",
      usage: 78,
      capacity: 100,
      efficiency: 89,
      status: "high-demand",
      alerts: [
        { type: "warning", message: "Peak demand period active" },
        { type: "success", message: "Solar generation at 95% capacity" }
      ],
      distribution: [
        { zone: "Industrial", usage: 92, capacity: 100 },
        { zone: "Residential", usage: 68, capacity: 100 },
        { zone: "Commercial", usage: 84, capacity: 100 },
        { zone: "Public", usage: 55, capacity: 100 }
      ]
    },
    waste: {
      title: "Waste Management",
      icon: "♻️",
      usage: selectedCity.extraMetrics.wasteManagement,
      capacity: 100,
      efficiency: 87,
      status: "normal",
      alerts: [
        { type: "success", message: "Recycling targets exceeded this month" },
        { type: "info", message: "New composting facility operational" }
      ],
      distribution: [
        { zone: "Zone A", usage: 76, capacity: 100 },
        { zone: "Zone B", usage: 82, capacity: 100 },
        { zone: "Zone C", usage: 69, capacity: 100 },
        { zone: "Zone D", usage: 88, capacity: 100 }
      ]
    }
  };

  const currentResource = resources[activeResource as keyof typeof resources];

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-blue-600 bg-blue-100';
    }
  };

  return (
    <div className="mb-8">
      <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
        Resource Management System
      </h3>

      <div className="flex gap-2 mb-6">
        {Object.entries(resources).map(([key, resource]) => (
          <Button
            key={key}
            variant={activeResource === key ? "default" : "outline"}
            onClick={() => setActiveResource(key)}
            className="flex items-center gap-2"
          >
            <span>{resource.icon}</span>
            {resource.title}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className={`md:col-span-2 ${
          isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/70 border-slate-200/50'
        } backdrop-blur-sm`}>
          <CardHeader>
            <CardTitle className={`flex items-center gap-3 ${
              isDark ? 'text-slate-200' : 'text-slate-800'
            }`}>
              <span className="text-2xl">{currentResource.icon}</span>
              {currentResource.title} Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentResource.distribution.map((zone, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className={`font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {zone.zone}
                    </span>
                    <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {zone.usage}% / {zone.capacity}%
                    </span>
                  </div>
                  <Progress value={zone.usage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card className={`${
            isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/70 border-slate-200/50'
          } backdrop-blur-sm`}>
            <CardHeader>
              <CardTitle className={`text-lg ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Usage</span>
                  <span className={`font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                    {currentResource.usage}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Efficiency</span>
                  <span className={`font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                    {currentResource.efficiency}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Status</span>
                  <span className={`font-bold text-green-600`}>
                    {currentResource.status}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={`${
            isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/70 border-slate-200/50'
          } backdrop-blur-sm`}>
            <CardHeader>
              <CardTitle className={`text-lg ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                Alerts & Updates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {currentResource.alerts.map((alert, index) => (
                  <div key={index} className={`p-2 rounded text-xs ${getAlertColor(alert.type)}`}>
                    {alert.message}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResourceManagement;
