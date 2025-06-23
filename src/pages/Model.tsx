
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import ModelHeader from '@/components/model/ModelHeader';
import ModelGrid from '@/components/model/ModelGrid';
import PythonEnvironment from '@/components/model/PythonEnvironment';
import ModelMetrics from '@/components/model/ModelMetrics';
import { useCity } from '@/contexts/CityContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const Model = () => {
  const [activeModel, setActiveModel] = useState('traffic');
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
    <Layout>
      <div className={`min-h-screen transition-all duration-500 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-purple-100 to-blue-100'
      }`}>
        <div className="container mx-auto px-4 py-20">
          <ModelHeader />
          
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Model Selection Grid */}
            <ModelGrid 
              activeModel={activeModel} 
              onModelSelect={setActiveModel} 
            />

            {/* Model Training Progress */}
            <Card className={`${
              isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/70 border-slate-200/50'
            } backdrop-blur-sm shadow-2xl`}>
              <CardHeader>
                <CardTitle className={`text-2xl ${isDark ? 'text-slate-200' : 'text-gray-800'}`}>
                  Model Training Progress - {selectedCity.city}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-100'}`}>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      Data Processing
                    </h4>
                    <Progress value={85} className="mb-2" />
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      85% - Processing {selectedCity.city} traffic data
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-100'}`}>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      Model Training
                    </h4>
                    <Progress value={92} className="mb-2" />
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      92% - Neural network optimization
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-100'}`}>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      Validation
                    </h4>
                    <Progress value={78} className="mb-2" />
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      78% - Cross-validation testing
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Python Code Execution Environment */}
            <PythonEnvironment 
              activeModel={activeModel} 
              models={models} 
            />

            {/* Reserved Space for Graphs */}
            <Card className={`${
              isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/70 border-slate-200/50'
            } backdrop-blur-sm shadow-2xl`}>
              <CardHeader>
                <CardTitle className={`text-2xl ${isDark ? 'text-slate-200' : 'text-gray-800'}`}>
                  Model Performance Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`min-h-[400px] rounded-lg border-2 border-dashed flex items-center justify-center ${
                  isDark 
                    ? 'border-slate-600 bg-slate-700/20' 
                    : 'border-gray-300 bg-gray-50'
                }`}>
                  <div className="text-center space-y-4">
                    <div className={`text-6xl ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>
                      📊
                    </div>
                    <h3 className={`text-xl font-semibold ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                      Graph Space Reserved
                    </h3>
                    <p className={`${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                      Interactive charts and performance metrics will be displayed here
                    </p>
                    <Button className={`${
                      isDark 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-blue-500 hover:bg-blue-600'
                    } text-white`}>
                      Load Analytics Dashboard
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Model Statistics */}
            <ModelMetrics />

            {/* Advanced Model Configuration */}
            <Card className={`${
              isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/70 border-slate-200/50'
            } backdrop-blur-sm shadow-2xl`}>
              <CardHeader>
                <CardTitle className={`text-2xl ${isDark ? 'text-slate-200' : 'text-gray-800'}`}>
                  Advanced Model Configuration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-100'}`}>
                    <h4 className={`font-semibold mb-3 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      Hyperparameters
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Learning Rate:</span>
                        <span className={`font-mono ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>0.001</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Batch Size:</span>
                        <span className={`font-mono ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>32</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Hidden Layers:</span>
                        <span className={`font-mono ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>4</span>
                      </div>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-100'}`}>
                    <h4 className={`font-semibold mb-3 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      Model Architecture
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Input Features:</span>
                        <span className={`font-mono ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>128</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Output Classes:</span>
                        <span className={`font-mono ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Parameters:</span>
                        <span className={`font-mono ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>2.4M</span>
                      </div>
                    </div>
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

export default Model;
