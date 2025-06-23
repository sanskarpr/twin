
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import { useCity } from '@/contexts/CityContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const CitizenEngagement = () => {
  const { isDark } = useTheme();
  const { selectedCity } = useCity();
  const [activeTab, setActiveTab] = useState('reports');

  const citizenReports = [
    {
      id: 1,
      type: "Infrastructure",
      title: "Pothole on Main Street",
      location: "Main St & 5th Ave",
      status: "In Progress",
      priority: "Medium",
      date: "2024-06-20",
      votes: 23
    },
    {
      id: 2,
      type: "Environment",
      title: "Illegal dumping in park",
      location: "Central Park East",
      status: "Resolved",
      priority: "High",
      date: "2024-06-19",
      votes: 45
    },
    {
      id: 3,
      type: "Traffic",
      title: "Traffic light malfunction",
      location: "Broadway & 2nd St",
      status: "New",
      priority: "High",
      date: "2024-06-21",
      votes: 67
    }
  ];

  const publicProjects = [
    {
      title: "New Community Center",
      description: "Construction of modern community facility with sports complex",
      budget: "$2.5M",
      completion: 75,
      timeline: "Q4 2024"
    },
    {
      title: "Smart Bus Stops",
      description: "Installation of digital displays and real-time tracking",
      budget: "$800K",
      completion: 45,
      timeline: "Q2 2025"
    },
    {
      title: "Solar Panel Initiative",
      description: "Rooftop solar installation program for public buildings",
      budget: "$1.2M",
      completion: 90,
      timeline: "Q3 2024"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'New': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="mb-8">
      <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
        Citizen Engagement Portal
      </h3>

      <div className="flex gap-2 mb-6">
        <Button
          variant={activeTab === 'reports' ? "default" : "outline"}
          onClick={() => setActiveTab('reports')}
        >
          📱 Citizen Reports
        </Button>
        <Button
          variant={activeTab === 'projects' ? "default" : "outline"}
          onClick={() => setActiveTab('projects')}
        >
          🏗️ Public Projects
        </Button>
        <Button
          variant={activeTab === 'feedback' ? "default" : "outline"}
          onClick={() => setActiveTab('feedback')}
        >
          💬 Community Feedback
        </Button>
      </div>

      {activeTab === 'reports' && (
        <div className="grid gap-4">
          {citizenReports.map((report) => (
            <Card key={report.id} className={`${
              isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/70 border-slate-200/50'
            } backdrop-blur-sm hover:shadow-lg transition-all duration-300`}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {report.type}
                      </Badge>
                      <Badge className={getStatusColor(report.status)}>
                        {report.status}
                      </Badge>
                      <Badge className={getPriorityColor(report.priority)}>
                        {report.priority}
                      </Badge>
                    </div>
                    <h4 className={`font-semibold mb-1 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      {report.title}
                    </h4>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      📍 {report.location}
                    </p>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                      Reported on {report.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      👍 {report.votes}
                    </div>
                    <div className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                      community votes
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === 'projects' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publicProjects.map((project, index) => (
            <Card key={index} className={`${
              isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/70 border-slate-200/50'
            } backdrop-blur-sm hover:shadow-lg transition-all duration-300`}>
              <CardHeader>
                <CardTitle className={`text-lg ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {project.description}
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Budget:</span>
                    <span className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      {project.budget}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Timeline:</span>
                    <span className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      {project.timeline}
                    </span>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Progress:</span>
                      <span className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        {project.completion}%
                      </span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}>
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{width: `${project.completion}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === 'feedback' && (
        <Card className={`${
          isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/70 border-slate-200/50'
        } backdrop-blur-sm`}>
          <CardHeader>
            <CardTitle className={`${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              Community Satisfaction Survey
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Public Transport</span>
                    <span className="font-semibold">{selectedCity.extraMetrics.publicTransport}%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}>
                    <div 
                      className="bg-blue-500 h-2 rounded-full"
                      style={{width: `${selectedCity.extraMetrics.publicTransport}%`}}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Healthcare Access</span>
                    <span className="font-semibold">{selectedCity.extraMetrics.healthcare}%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}>
                    <div 
                      className="bg-green-500 h-2 rounded-full"
                      style={{width: `${selectedCity.extraMetrics.healthcare}%`}}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Education Quality</span>
                    <span className="font-semibold">{selectedCity.extraMetrics.education}%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}>
                    <div 
                      className="bg-purple-500 h-2 rounded-full"
                      style={{width: `${selectedCity.extraMetrics.education}%`}}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-100'}`}>
                  <h4 className={`font-semibold mb-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                    Recent Feedback
                  </h4>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    "The new bike lanes have made commuting much safer and more convenient. Great initiative!"
                  </p>
                  <p className={`text-xs mt-2 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                    - Anonymous Citizen, 2 days ago
                  </p>
                </div>
                <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-100'}`}>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    "Air quality improvements are noticeable. Keep up the environmental initiatives!"
                  </p>
                  <p className={`text-xs mt-2 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                    - Anonymous Citizen, 1 week ago
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CitizenEngagement;
