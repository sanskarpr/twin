
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCity } from '@/contexts/CityContext';

interface PythonEnvironmentProps {
  activeModel: string;
  models: Array<{ id: string; title: string }>;
}

const PythonEnvironment = ({ activeModel, models }: PythonEnvironmentProps) => {
  const { selectedCity } = useCity();

  const runBasicPythonCode = () => {
    console.log(`# ${selectedCity.city}, ${selectedCity.state} Model Analysis`);
    console.log("import numpy as np");
    console.log("import pandas as pd");
    console.log("from sklearn.linear_model import LinearRegression");
    console.log("");
    console.log(`# Processing data for ${selectedCity.city}`);
    console.log(`traffic_data = ${selectedCity.analytics.traffic}`);
    console.log(`air_quality = ${selectedCity.analytics.airQuality}`);
    console.log(`energy_consumption = ${selectedCity.analytics.energy}`);
    console.log("model = LinearRegression()");
    console.log("# Your model training code goes here...");
  };

  return (
    <Card className="bg-white shadow-2xl">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-800 flex items-center gap-2">
          Python Model Environment - {selectedCity.city}
          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
            Active: {models.find(m => m.id === activeModel)?.title}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-900 rounded-lg p-6 min-h-[400px]">
          <div className="text-green-400 font-mono text-sm space-y-1">
            <div># Python Model Environment Ready for {selectedCity.city}, {selectedCity.state}</div>
            <div>import numpy as np</div>
            <div>import pandas as pd</div>
            <div>from sklearn.ensemble import RandomForestClassifier</div>
            <div>from sklearn.model_selection import train_test_split</div>
            <div className="text-yellow-400"># City-specific model parameters loaded...</div>
            <div className="text-gray-500"># Traffic Level: {selectedCity.analytics.traffic}%</div>
            <div className="text-gray-500"># Air Quality: {selectedCity.analytics.airQuality}</div>
            <div className="text-gray-500"># Energy Consumption: {selectedCity.analytics.energy} kWh</div>
            <div className="text-gray-500"># Zone Count: {selectedCity.zones.length}</div>
          </div>
          
          <div className="mt-6 flex gap-4">
            <Button 
              onClick={runBasicPythonCode}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Run {selectedCity.city} Analysis
            </Button>
            <Button 
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Load Model
            </Button>
            <Button 
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Export Results
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PythonEnvironment;
