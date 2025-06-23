import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useTheme } from '@/contexts/ThemeContext';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

const ScenarioControls = () => {
  const { isDark } = useTheme();
  const [activeScenario, setActiveScenario] = useState('normal');
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  const [parameters, setParameters] = useState({
    population: 100,
    traffic: 80,
    weather: 70,
    events: 0
  });

  // Broadcast parameter changes to 3D model
  useEffect(() => {
    const event = new CustomEvent('simulationParamsUpdate', {
      detail: parameters
    });
    window.dispatchEvent(event);
  }, [parameters]);

  const scenarios = {
    normal: {
      title: "Normal Operations",
      description: "Standard city operations under normal conditions",
      icon: "🏙️",
      color: "bg-green-100 text-green-800"
    },
    rush_hour: {
      title: "Rush Hour Peak",
      description: "Heavy traffic during morning/evening commute",
      icon: "🚦",
      color: "bg-yellow-100 text-yellow-800"
    },
    emergency: {
      title: "Emergency Response",
      description: "Natural disaster or major incident simulation",
      icon: "🚨",
      color: "bg-red-100 text-red-800"
    },
    festival: {
      title: "City Festival",
      description: "Large public event with increased foot traffic",
      icon: "🎉",
      color: "bg-purple-100 text-purple-800"
    },
    blackout: {
      title: "Power Outage",
      description: "Grid failure affecting city infrastructure",
      icon: "⚡",
      color: "bg-gray-100 text-gray-800"
    }
  };

  const runScenario = (scenarioKey: string) => {
    setActiveScenario(scenarioKey);
    
    // Adjust parameters based on scenario
    switch (scenarioKey) {
      case 'rush_hour':
        setParameters({ population: 120, traffic: 150, weather: 70, events: 20 });
        break;
      case 'emergency':
        setParameters({ population: 80, traffic: 200, weather: 30, events: 90 });
        break;
      case 'festival':
        setParameters({ population: 180, traffic: 120, weather: 85, events: 60 });
        break;
      case 'blackout':
        setParameters({ population: 100, traffic: 60, weather: 70, events: 40 });
        break;
      default:
        setParameters({ population: 100, traffic: 80, weather: 70, events: 0 });
    }

    toast({
      title: "Scenario Updated",
      description: `Switched to ${scenarios[scenarioKey as keyof typeof scenarios].title} scenario - 3D model updated`,
    });
  };

  const handleRunSimulation = async () => {
    setIsSimulationRunning(true);
    
    toast({
      title: "Simulation Starting",
      description: "Running city simulation with current parameters...",
    });

    // Simulate the simulation running
    setTimeout(() => {
      setIsSimulationRunning(false);
      toast({
        title: "Simulation Complete",
        description: `Scenario: ${scenarios[activeScenario as keyof typeof scenarios].title} - Results generated successfully`,
      });
    }, 3000);
  };

  const handleExportResults = () => {
    const results = {
      scenario: activeScenario,
      parameters,
      timestamp: new Date().toISOString(),
      results: {
        efficiency: Math.random() * 100,
        sustainability: Math.random() * 100,
        citizenSatisfaction: Math.random() * 100
      }
    };

    // Create and download JSON file
    const dataStr = JSON.stringify(results, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `simulation-results-${Date.now()}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();

    toast({
      title: "Results Exported",
      description: "Simulation results downloaded successfully",
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className={`${
        isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/70 border-slate-200/50'
      } backdrop-blur-sm`}>
        <CardHeader>
          <CardTitle className={`${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
            Scenario Simulation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Object.entries(scenarios).map(([key, scenario]) => (
              <div
                key={key}
                className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  activeScenario === key
                    ? isDark ? 'border-blue-500 bg-blue-900/20' : 'border-blue-500 bg-blue-50'
                    : isDark ? 'border-slate-700 hover:border-slate-600' : 'border-slate-200 hover:border-slate-300'
                }`}
                onClick={() => runScenario(key)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{scenario.icon}</span>
                    <div>
                      <h4 className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        {scenario.title}
                      </h4>
                      <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {scenario.description}
                      </p>
                    </div>
                  </div>
                  {activeScenario === key && (
                    <Badge className={scenario.color}>
                      Active
                    </Badge>
                  )}
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
            Simulation Parameters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <label className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Population Density
                </label>
                <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {parameters.population}%
                </span>
              </div>
              <Slider
                value={[parameters.population]}
                onValueChange={(value) => setParameters(prev => ({ ...prev, population: value[0] }))}
                max={200}
                min={50}
                step={10}
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Traffic Load
                </label>
                <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {parameters.traffic}%
                </span>
              </div>
              <Slider
                value={[parameters.traffic]}
                onValueChange={(value) => setParameters(prev => ({ ...prev, traffic: value[0] }))}
                max={200}
                min={20}
                step={10}
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Weather Conditions
                </label>
                <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {parameters.weather}%
                </span>
              </div>
              <Slider
                value={[parameters.weather]}
                onValueChange={(value) => setParameters(prev => ({ ...prev, weather: value[0] }))}
                max={100}
                min={10}
                step={5}
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Special Events
                </label>
                <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {parameters.events}%
                </span>
              </div>
              <Slider
                value={[parameters.events]}
                onValueChange={(value) => setParameters(prev => ({ ...prev, events: value[0] }))}
                max={100}
                min={0}
                step={5}
                className="w-full"
              />
            </div>

            <div className="pt-4 border-t border-slate-300 dark:border-slate-600">
              <div className="flex gap-2">
                <Button 
                  className="flex-1" 
                  onClick={handleRunSimulation}
                  disabled={isSimulationRunning}
                >
                  {isSimulationRunning ? '🔄 Running...' : '▶️ Run Simulation'}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleExportResults}
                  disabled={isSimulationRunning}
                >
                  📊 Export Results
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScenarioControls;
