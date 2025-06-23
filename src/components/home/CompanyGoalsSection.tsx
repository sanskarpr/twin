
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';

const CompanyGoalsSection = () => {
  const { isDark } = useTheme();

  const companyGoals = [
    {
      icon: "🌐",
      title: "Global Urban Transformation",
      description: "Transform 100+ cities worldwide by 2030 through intelligent technology integration and sustainable development practices."
    },
    {
      icon: "🔬",
      title: "Research & Innovation",
      description: "Continuously develop cutting-edge AI algorithms, IoT solutions, and data analytics to solve complex urban challenges."
    },
    {
      icon: "🤝",
      title: "Public-Private Partnerships",
      description: "Collaborate with governments, municipalities, and private sector to create scalable smart city solutions."
    },
    {
      icon: "🎯",
      title: "Measurable Impact",
      description: "Achieve 40% reduction in energy consumption, 50% improvement in traffic efficiency, and 60% better citizen satisfaction."
    }
  ];

  return (
    <section className={`py-20 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-slate-800'}`}>
          How We Will Achieve Our Goals
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyGoals.map((goal, index) => (
            <Card key={index} className={`${isDark ? 'bg-slate-700/50 border-slate-600' : 'bg-slate-50 border-slate-200'} hover:scale-105 transition-transform duration-300`}>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{goal.icon}</div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                  {goal.title}
                </h3>
                <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {goal.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyGoalsSection;
