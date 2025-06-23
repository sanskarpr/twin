import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useCity } from '@/contexts/CityContext';
import CityVisualization3D from './CityVisualization3D';
import { toast } from '@/hooks/use-toast';

interface SimulationParams {
  population: number;
  traffic: number;
  weather: number;
  events: number;
}

const CityModel3D = () => {
  const { isDark } = useTheme();
  const { selectedCity } = useCity();
  const [currentView, setCurrentView] = useState<'traffic' | 'environmental' | 'energy' | 'buildings'>('buildings');
  const [simulationParams, setSimulationParams] = useState<SimulationParams>({
    population: 100,
    traffic: 80,
    weather: 70,
    events: 0
  });

  // Listen for simulation parameter changes from ScenarioControls
  useEffect(() => {
    const handleParamsUpdate = (event: CustomEvent<SimulationParams>) => {
      setSimulationParams(event.detail);
    };

    window.addEventListener('simulationParamsUpdate' as any, handleParamsUpdate);
    return () => {
      window.removeEventListener('simulationParamsUpdate' as any, handleParamsUpdate);
    };
  }, []);

  const handleScreenshot = () => {
    console.log('Taking enhanced screenshot of 3D model...');
    toast({
      title: "Screenshot Captured",
      description: `3D model screenshot saved for ${selectedCity.city} - ${currentView} view`,
    });
  };

  const handleViewChange = (view: 'traffic' | 'environmental' | 'energy' | 'buildings') => {
    setCurrentView(view);
    toast({
      title: "View Updated",
      description: `Switched to ${view} visualization`,
    });
  };

  const handleResetView = () => {
    setCurrentView('buildings');
    toast({
      title: "View Reset",
      description: "Camera and view reset to default position",
    });
  };

  return (
    <Card className={`${
      isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/70 border-slate-200/50'
    } backdrop-blur-sm shadow-2xl`}>
      <CardHeader>
        <CardTitle className={`text-2xl ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
          Interactive 3D City Model - {selectedCity.city}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Enhanced 3D Model Container */}
        <div className="relative group overflow-hidden rounded-xl shadow-2xl transition-all duration-300 hover:shadow-3xl">
          {/* Current view indicator */}
          <div className="absolute top-4 left-4 z-10">
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${
              isDark 
                ? 'bg-slate-700/90 text-slate-200 border border-slate-600' 
                : 'bg-white/90 text-slate-800 border border-slate-300'
            } backdrop-blur-sm`}>
              {currentView.charAt(0).toUpperCase() + currentView.slice(1)} View
            </div>
          </div>

          {/* Simulation status indicator */}
          <div className="absolute top-4 right-4 z-10">
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              isDark 
                ? 'bg-green-700/90 text-green-200 border border-green-600' 
                : 'bg-green-100/90 text-green-800 border border-green-300'
            } backdrop-blur-sm flex items-center gap-2`}>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Live Simulation
            </div>
          </div>

          {/* 3D Visualization with simulation parameters */}
          <CityVisualization3D viewType={currentView} simulationParams={simulationParams} />

          {/* Control overlay */}
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <Button 
              onClick={handleScreenshot}
              size="sm"
              className={`${
                isDark 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
              } text-white shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              📸
            </Button>
            <Button 
              onClick={handleResetView}
              size="sm"
              variant="outline"
              className={`${
                isDark 
                  ? 'border-slate-500 text-slate-300 hover:bg-slate-700 bg-slate-800/80' 
                  : 'border-slate-400 text-slate-700 hover:bg-slate-100 bg-white/80'
              } shadow-lg transition-all duration-300 backdrop-blur-sm`}
            >
              🔄
            </Button>
          </div>
        </div>
        
        {/* Enhanced controls */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button 
            variant={currentView === 'traffic' ? 'default' : 'outline'}
            onClick={() => handleViewChange('traffic')}
            className={`transition-all duration-300 ${
              currentView === 'traffic'
                ? isDark
                  ? 'bg-yellow-600 hover:bg-yellow-700 text-white'
                  : 'bg-yellow-500 hover:bg-yellow-600 text-white'
                : isDark 
                  ? 'border-slate-500 text-slate-300 hover:bg-slate-700' 
                  : 'border-slate-400 text-slate-700 hover:bg-slate-100'
            }`}
          >
            🚗 Traffic View
          </Button>
          <Button 
            variant={currentView === 'environmental' ? 'default' : 'outline'}
            onClick={() => handleViewChange('environmental')}
            className={`transition-all duration-300 ${
              currentView === 'environmental'
                ? isDark
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white'
                : isDark 
                  ? 'border-slate-500 text-slate-300 hover:bg-slate-700' 
                  : 'border-slate-400 text-slate-700 hover:bg-slate-100'
            }`}
          >
            🌱 Environmental
          </Button>
          <Button 
            variant={currentView === 'energy' ? 'default' : 'outline'}
            onClick={() => handleViewChange('energy')}
            className={`transition-all duration-300 ${
              currentView === 'energy'
                ? isDark
                  ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                  : 'bg-cyan-500 hover:bg-cyan-600 text-white'
                : isDark 
                  ? 'border-slate-500 text-slate-300 hover:bg-slate-700' 
                  : 'border-slate-400 text-slate-700 hover:bg-slate-100'
            }`}
          >
            ⚡ Energy Grid
          </Button>
          <Button 
            variant={currentView === 'buildings' ? 'default' : 'outline'}
            onClick={() => handleViewChange('buildings')}
            className={`transition-all duration-300 ${
              currentView === 'buildings'
                ? isDark
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
                : isDark 
                  ? 'border-slate-500 text-slate-300 hover:bg-slate-700' 
                  : 'border-slate-400 text-slate-700 hover:bg-slate-100'
            }`}
          >
            🏢 Buildings
          </Button>
        </div>

        {/* Enhanced view description */}
        <div className={`mt-4 p-4 rounded-lg ${
          isDark ? 'bg-slate-700/50' : 'bg-slate-100'
        }`}>
          <h4 className={`font-semibold mb-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
            {currentView === 'traffic' && 'Dynamic Traffic Simulation'}
            {currentView === 'environmental' && 'Environmental Monitoring'}
            {currentView === 'energy' && 'Energy Grid Network'}
            {currentView === 'buildings' && 'Urban Infrastructure'}
          </h4>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {currentView === 'traffic' && 'Real-time traffic simulation with dynamic car movement, responsive to traffic load parameters and scenario conditions.'}
            {currentView === 'environmental' && 'Air quality particles that react to weather conditions and environmental parameters from the simulation.'}
            {currentView === 'energy' && 'Interactive power grid showing energy distribution with pulsing connections based on consumption demand.'}
            {currentView === 'buildings' && 'Complete urban landscape with dynamic lighting (sun/moon), traffic flow, and responsive building density.'}
          </p>
          
          {/* Current simulation parameters display */}
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className={`px-2 py-1 rounded ${isDark ? 'bg-slate-600 text-slate-300' : 'bg-slate-200 text-slate-700'}`}>
              Population: {simulationParams.population}%
            </span>
            <span className={`px-2 py-1 rounded ${isDark ? 'bg-slate-600 text-slate-300' : 'bg-slate-200 text-slate-700'}`}>
              Traffic: {simulationParams.traffic}%
            </span>
            <span className={`px-2 py-1 rounded ${isDark ? 'bg-slate-600 text-slate-300' : 'bg-slate-200 text-slate-700'}`}>
              Weather: {simulationParams.weather}%
            </span>
            <span className={`px-2 py-1 rounded ${isDark ? 'bg-slate-600 text-slate-300' : 'bg-slate-200 text-slate-700'}`}>
              Events: {simulationParams.events}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CityModel3D;
