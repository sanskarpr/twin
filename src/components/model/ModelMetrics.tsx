
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCity } from '@/contexts/CityContext';

const ModelMetrics = () => {
  const { selectedCity } = useCity();

  // Dynamic training metrics based on city
  const getTrainingMetrics = () => {
    const baseAccuracy = selectedCity.analytics.traffic > 80 ? 95.2 : 92.1;
    const validationScore = selectedCity.analytics.airQuality > 85 ? 94.1 : 90.2;
    
    return {
      accuracy: `${baseAccuracy}%`,
      validation: `${validationScore}%`,
      epochs: selectedCity.analytics.energy > 200 ? '280/300' : '250/300'
    };
  };

  const metrics = getTrainingMetrics();

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Training Metrics - {selectedCity.city}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Training Accuracy</span>
              <span className="font-semibold">{metrics.accuracy}</span>
            </div>
            <div className="flex justify-between">
              <span>Validation Score</span>
              <span className="font-semibold">{metrics.validation}</span>
            </div>
            <div className="flex justify-between">
              <span>Epochs Completed</span>
              <span className="font-semibold">{metrics.epochs}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Model Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Inference Time</span>
              <span className="font-semibold">12ms</span>
            </div>
            <div className="flex justify-between">
              <span>Memory Usage</span>
              <span className="font-semibold">2.1GB</span>
            </div>
            <div className="flex justify-between">
              <span>Last Updated</span>
              <span className="font-semibold">2 hours ago</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ModelMetrics;
