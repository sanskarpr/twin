
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCity } from '@/contexts/CityContext';
import { useTheme } from '@/contexts/ThemeContext';

interface ModelGridProps {
  activeModel: string;
  onModelSelect: (modelId: string) => void;
}

const ModelGrid = ({ activeModel, onModelSelect }: ModelGridProps) => {
  const { selectedCity } = useCity();
  const { isDark } = useTheme();

  const models = [
    {
      id: 'traffic',
      title: "Traffic Flow Model",
      description: `AI-powered traffic optimization for ${selectedCity.city} reducing congestion by 30%`,
      status: "Active",
      accuracy: "94.2%"
    },
    {
      id: 'energy',
      title: "Energy Consumption Model",
      description: `Predictive model for ${selectedCity.city}'s smart grid energy distribution`,
      status: "Training",
      accuracy: "87.8%"
    },
    {
      id: 'air',
      title: "Air Quality Prediction",
      description: `Environmental monitoring model for ${selectedCity.city} pollution forecasting`,
      status: "Active",
      accuracy: "91.5%"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {models.map((model, index) => (
        <Card 
          key={index} 
          className={`shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
            activeModel === model.id 
              ? isDark 
                ? 'ring-2 ring-blue-400 bg-slate-800/60 border-slate-600' 
                : 'ring-2 ring-blue-500 bg-white border-blue-200'
              : isDark 
                ? 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/60' 
                : 'bg-white border-slate-200 hover:bg-blue-50'
          } backdrop-blur-sm`}
          onClick={() => onModelSelect(model.id)}
        >
          <CardHeader>
            <CardTitle className={`text-xl ${
              isDark ? 'text-slate-200' : 'text-gray-800'
            }`}>{model.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className={`mb-4 ${
              isDark ? 'text-slate-300' : 'text-gray-600'
            }`}>{model.description}</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className={`text-sm ${
                  isDark ? 'text-slate-400' : 'text-gray-500'
                }`}>Status:</span>
                <span className={`text-sm font-semibold ${
                  model.status === 'Active' 
                    ? 'text-green-600' 
                    : isDark ? 'text-yellow-400' : 'text-yellow-600'
                }`}>
                  {model.status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className={`text-sm ${
                  isDark ? 'text-slate-400' : 'text-gray-500'
                }`}>Accuracy:</span>
                <span className={`text-sm font-semibold ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>{model.accuracy}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ModelGrid;
