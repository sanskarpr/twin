
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import { useCity } from '@/contexts/CityContext';

const SmartSolutions = () => {
  const { isDark } = useTheme();
  const { selectedCity } = useCity();

  const solutions = [
    {
      category: "Smart Mobility",
      icon: "🚗",
      color: "from-blue-500 to-cyan-500",
      implementations: [
        { name: "Intelligent Traffic Systems", status: "Active", coverage: "78%" },
        { name: "Electric Bus Fleet", status: "Expanding", coverage: "45%" },
        { name: "Bike Sharing Program", status: "Planning", coverage: "25%" },
        { name: "Smart Parking Solutions", status: "Active", coverage: "62%" }
      ]
    },
    {
      category: "Smart Energy",
      icon: "🔋",
      color: "from-green-500 to-emerald-500",
      implementations: [
        { name: "Smart Grid Network", status: "Active", coverage: "85%" },
        { name: "Solar Panel Integration", status: "Active", coverage: "42%" },
        { name: "Energy Storage Systems", status: "Testing", coverage: "18%" },
        { name: "LED Street Lighting", status: "Complete", coverage: "95%" }
      ]
    },
    {
      category: "Environmental Monitoring",
      icon: "🌱",
      color: "from-teal-500 to-green-600",
      implementations: [
        { name: "Air Quality Sensors", status: "Active", coverage: "92%" },
        { name: "Noise Pollution Monitoring", status: "Active", coverage: "67%" },
        { name: "Water Quality Testing", status: "Active", coverage: "74%" },
        { name: "Green Space Management", status: "Ongoing", coverage: "58%" }
      ]
    },
    {
      category: "Digital Governance",
      icon: "🏛️",
      color: "from-purple-500 to-indigo-600",
      implementations: [
        { name: "Online Service Portal", status: "Active", coverage: selectedCity.kpis.govServices },
        { name: "Digital Payment Systems", status: "Active", coverage: `${selectedCity.extraMetrics.digitalPayments}%` },
        { name: "Citizen Feedback App", status: "Active", coverage: "69%" },
        { name: "Emergency Response System", status: "Active", coverage: "88%" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': case 'Complete': return 'text-green-600 bg-green-100';
      case 'Expanding': case 'Ongoing': return 'text-blue-600 bg-blue-100';
      case 'Testing': return 'text-yellow-600 bg-yellow-100';
      case 'Planning': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="mb-16">
      <h3 className={`text-3xl font-bold text-center mb-12 ${
        isDark ? 'text-slate-100' : 'text-slate-800'
      }`}>
        Smart City Solutions Implementation
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {solutions.map((solution, index) => (
          <Card key={index} className={`${
            isDark 
              ? 'bg-slate-800/40 border-slate-700/50' 
              : 'bg-white/70 border-slate-200/50'
          } backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-102 overflow-hidden`}>
            <div className={`h-2 bg-gradient-to-r ${solution.color}`}></div>
            <CardHeader>
              <CardTitle className={`text-xl flex items-center gap-3 ${
                isDark ? 'text-slate-200' : 'text-slate-800'
              }`}>
                <span className="text-2xl">{solution.icon}</span>
                {solution.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {solution.implementations.map((impl, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-50/50 dark:bg-slate-700/30">
                    <div className="flex-1">
                      <h4 className={`font-medium ${
                        isDark ? 'text-slate-200' : 'text-slate-800'
                      }`}>
                        {impl.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(impl.status)}`}>
                          {impl.status}
                        </span>
                        <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                          Coverage: {impl.coverage}
                        </span>
                      </div>
                    </div>
                    <div className="w-16 h-16 rounded-full border-4 border-gray-200 dark:border-gray-600 flex items-center justify-center">
                      <span className={`text-xs font-bold ${
                        parseInt(impl.coverage) > 80 ? 'text-green-600' :
                        parseInt(impl.coverage) > 60 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {impl.coverage}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SmartSolutions;
