
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const EmergencyResponse = () => {
  const { isDark } = useTheme();
  const [activeIncidents, setActiveIncidents] = useState([
    {
      id: 1,
      type: "Fire",
      severity: "High",
      location: "Industrial District, Block 7",
      time: "14:23",
      status: "Responding",
      unitsDeployed: 3,
      estimatedResolution: "45 min"
    },
    {
      id: 2,
      type: "Traffic Accident",
      severity: "Medium",
      location: "Highway 101, Mile 23",
      time: "13:45",
      status: "Contained",
      unitsDeployed: 2,
      estimatedResolution: "20 min"
    },
    {
      id: 3,
      type: "Power Outage",
      severity: "Low",
      location: "Residential Zone East",
      time: "12:15",
      status: "Investigating",
      unitsDeployed: 1,
      estimatedResolution: "60 min"
    }
  ]);

  const responseCapacity = {
    fire: { available: 8, total: 12, response: "2.3 min" },
    police: { available: 15, total: 20, response: "1.8 min" },
    medical: { available: 6, total: 10, response: "3.1 min" },
    utility: { available: 4, total: 6, response: "12.5 min" }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Responding': return 'bg-blue-100 text-blue-800';
      case 'Contained': return 'bg-green-100 text-green-800';
      case 'Investigating': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-2xl font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
          Emergency Response System
        </h3>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            {activeIncidents.length} Active Incidents
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <Card className={`md:col-span-2 ${
          isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/70 border-slate-200/50'
        } backdrop-blur-sm`}>
          <CardHeader>
            <CardTitle className={`${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              Active Incidents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeIncidents.map((incident) => (
                <div key={incident.id} className={`p-4 rounded-lg border ${
                  isDark ? 'border-slate-700 bg-slate-900/30' : 'border-slate-200 bg-slate-50'
                }`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">
                        {incident.type === 'Fire' ? '🔥' : 
                         incident.type === 'Traffic Accident' ? '🚗' : '⚡'}
                      </span>
                      <h4 className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        {incident.type}
                      </h4>
                      <Badge className={getSeverityColor(incident.severity)}>
                        {incident.severity}
                      </Badge>
                      <Badge className={getStatusColor(incident.status)}>
                        {incident.status}
                      </Badge>
                    </div>
                    <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {incident.time}
                    </span>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-2`}>
                    📍 {incident.location}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                      🚨 {incident.unitsDeployed} units deployed
                    </span>
                    <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                      ⏱️ ETA: {incident.estimatedResolution}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className={`${
          isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/70 border-slate-200/50'
        } backdrop-blur-sm`}>
          <CardHeader>
            <CardTitle className={`${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              Response Capacity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(responseCapacity).map(([service, data]) => (
                <div key={service}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-medium capitalize ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {service === 'fire' ? '🔥' : service === 'police' ? '🚔' : 
                       service === 'medical' ? '🚑' : '🔧'} {service}
                    </span>
                    <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {data.available}/{data.total}
                    </span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${isDark ? 'bg-slate-700' : 'bg-slate-200'} mb-1`}>
                    <div 
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                      style={{width: `${(data.available / data.total) * 100}%`}}
                    ></div>
                  </div>
                  <div className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                    Avg. response: {data.response}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className={`${
          isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/70 border-slate-200/50'
        } backdrop-blur-sm`}>
          <CardHeader>
            <CardTitle className={`${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              Emergency Protocols
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className={`p-3 rounded border-l-4 border-green-500 ${
                isDark ? 'bg-green-900/20' : 'bg-green-50'
              }`}>
                <h4 className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                  Evacuation Routes
                </h4>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  All evacuation routes clear and monitored
                </p>
              </div>
              <div className={`p-3 rounded border-l-4 border-blue-500 ${
                isDark ? 'bg-blue-900/20' : 'bg-blue-50'
              }`}>
                <h4 className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                  Communication Systems
                </h4>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Emergency broadcast network operational
                </p>
              </div>
              <div className={`p-3 rounded border-l-4 border-purple-500 ${
                isDark ? 'bg-purple-900/20' : 'bg-purple-50'
              }`}>
                <h4 className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                  Shelter Capacity
                </h4>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  15 shelters available, 12,500 person capacity
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={`${
          isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/70 border-slate-200/50'
        } backdrop-blur-sm`}>
          <CardHeader>
            <CardTitle className={`${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-auto p-3 flex flex-col items-center gap-2">
                <span className="text-2xl">📢</span>
                <span className="text-xs">Emergency Alert</span>
              </Button>
              <Button variant="outline" className="h-auto p-3 flex flex-col items-center gap-2">
                <span className="text-2xl">🚨</span>
                <span className="text-xs">Deploy Units</span>
              </Button>
              <Button variant="outline" className="h-auto p-3 flex flex-col items-center gap-2">
                <span className="text-2xl">📊</span>
                <span className="text-xs">Status Report</span>
              </Button>
              <Button variant="outline" className="h-auto p-3 flex flex-col items-center gap-2">
                <span className="text-2xl">🗺️</span>
                <span className="text-xs">Live Map</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmergencyResponse;
