
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CityModel3D from '@/components/simulation/CityModel3D';
import ScenarioControls from '@/components/simulation/ScenarioControls';
import { useTheme } from '@/contexts/ThemeContext';
import { useCity } from '@/contexts/CityContext';

const Simulation = () => {
  const { isDark } = useTheme();
  const { selectedCity } = useCity();

  return (
    <Layout>
      <div className={`min-h-screen transition-all duration-500 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-cyan-100 to-teal-200'
      }`}>
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className={`text-5xl font-bold mb-8 ${
              isDark ? 'text-slate-100' : 'text-gray-800'
            }`}>
              Smart City Digital Twin Simulation
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-slate-300' : 'text-gray-600'
            }`}>
              Real-time 3D simulation of {selectedCity.city} with advanced scenario modeling, 
              predictive analytics, and interactive visualization of urban systems.
            </p>
            <div className={`w-48 h-1 ${
              isDark ? 'bg-slate-600' : 'bg-gray-600'
            } mx-auto mt-6`}></div>
          </div>
          
          <div className="max-w-7xl mx-auto space-y-8">
            {/* 3D City Model */}
            <CityModel3D />

            {/* Scenario Controls */}
            <ScenarioControls />

            {/* Real-time Monitoring Dashboard */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className={`${
                isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/70 border-slate-200/50'
              } backdrop-blur-sm`}>
                <CardHeader>
                  <CardTitle className={`text-lg ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                    Traffic Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Flow Rate</span>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                          Optimal
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Congestion</span>
                      <span className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        {selectedCity.analytics.traffic}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Avg Speed</span>
                      <span className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        45 km/h
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
                    Environmental Systems
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Air Quality</span>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          selectedCity.analytics.airQuality > 80 ? 'bg-green-500' : 'bg-yellow-500'
                        }`}></div>
                        <span className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                          {selectedCity.analytics.airQuality} AQI
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Temperature</span>
                      <span className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        22°C
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Humidity</span>
                      <span className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        65%
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
                    Energy Infrastructure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Grid Status</span>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                          Stable
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Consumption</span>
                      <span className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        {selectedCity.analytics.energy} MW
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Efficiency</span>
                      <span className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        94%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Predictive Analytics */}
            <Card className={`${
              isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/70 border-slate-200/50'
            } backdrop-blur-sm`}>
              <CardHeader>
                <CardTitle className={`${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                  Predictive Analytics & Forecasting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-100'}`}>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      Traffic Prediction
                    </h4>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Next hour: +15% congestion expected
                    </p>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                      Rush hour approaching
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-100'}`}>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      Energy Demand
                    </h4>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Peak load in 3 hours: 280 MW
                    </p>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                      Evening consumption spike
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-100'}`}>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      Weather Impact
                    </h4>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Rain expected: -20% air quality impact
                    </p>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                      Natural air purification
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-100'}`}>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      Resource Usage
                    </h4>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Water demand stable at 85%
                    </p>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                      Optimal distribution
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Simulation;
