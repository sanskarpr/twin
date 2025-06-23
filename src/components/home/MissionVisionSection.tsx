
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';

const MissionVisionSection = () => {
  const { isDark } = useTheme();

  return (
    <section className={`py-20 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-800'}`}>
            Our Mission & Vision
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className={`${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'} backdrop-blur-sm`}>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                      🎯 Our Mission
                    </h3>
                    <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      To revolutionize urban living by implementing intelligent, sustainable, and citizen-centric smart city solutions that improve quality of life, reduce environmental impact, and create more efficient, connected communities worldwide.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                      🔮 Our Vision
                    </h3>
                    <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      To become the global leader in smart city transformation, creating a world where every city operates as an intelligent ecosystem that seamlessly integrates technology, sustainability, and human-centered design by 2030.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
