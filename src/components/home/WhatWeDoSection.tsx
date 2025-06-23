
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';

const WhatWeDoSection = () => {
  const { isDark } = useTheme();

  return (
    <section className={`py-20 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-800'}`}>
            What We Do
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className={`${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'}`}>
                <CardHeader>
                  <CardTitle className={`text-center ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                    🚀 Smart Infrastructure Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    Design and implement IoT networks, smart grids, intelligent transportation systems, and automated waste management solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'}`}>
                <CardHeader>
                  <CardTitle className={`text-center ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                    🧠 AI & Data Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    Develop machine learning algorithms for predictive maintenance, traffic optimization, energy management, and citizen service enhancement.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'}`}>
                <CardHeader>
                  <CardTitle className={`text-center ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                    🌱 Sustainability Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    Create carbon-neutral urban ecosystems through renewable energy integration, smart buildings, and environmental monitoring systems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
