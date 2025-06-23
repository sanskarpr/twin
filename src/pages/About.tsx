
import React from 'react';
import Layout from '@/components/Layout';
import { useTheme } from '@/contexts/ThemeContext';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const { isDark } = useTheme();

  const problems = [
    {
      title: "Traffic Congestion",
      description: "Urban areas face severe traffic bottlenecks, increasing commute times and pollution levels",
      icon: "🚗",
      solution: "AI-powered traffic management systems that optimize signal timing and route planning"
    },
    {
      title: "Energy Waste",
      description: "Inefficient energy consumption in buildings and street lighting systems",
      icon: "⚡",
      solution: "Smart grid technology with real-time monitoring and automated energy optimization"
    },
    {
      title: "Air Pollution",
      description: "Poor air quality affecting public health and environmental sustainability",
      icon: "🌫️",
      solution: "IoT sensor networks for real-time air quality monitoring and automated response systems"
    },
    {
      title: "Waste Management",
      description: "Inefficient waste collection routes and overflowing bins in urban areas",
      icon: "🗑️",
      solution: "Smart bins with sensors and optimized collection routes using machine learning"
    }
  ];

  const technologies = [
    {
      title: "Internet of Things (IoT)",
      description: "Connected sensors and devices creating a network of intelligent city infrastructure",
      icon: "📡",
      benefits: ["Real-time data collection", "Automated monitoring", "Predictive maintenance"]
    },
    {
      title: "Artificial Intelligence",
      description: "Machine learning algorithms analyzing city data to optimize urban operations",
      icon: "🧠",
      benefits: ["Pattern recognition", "Predictive analytics", "Automated decision making"]
    },
    {
      title: "Digital Twin Technology",
      description: "Virtual replicas of city infrastructure for simulation and testing",
      icon: "🏙️",
      benefits: ["Risk-free testing", "Scenario planning", "Performance optimization"]
    }
  ];

  const statistics = [
    { metric: "30%", label: "Reduction in Traffic Congestion", icon: "🚦" },
    { metric: "25%", label: "Improvement in Air Quality", icon: "🌱" },
    { metric: "40%", label: "Energy Efficiency Gains", icon: "💡" },
    { metric: "50%", label: "Faster Emergency Response", icon: "🚑" }
  ];

  return (
    <Layout>
      <div className={`min-h-screen ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100'
      }`}>
        <div className="container mx-auto px-4 py-20">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className={`text-5xl font-bold mb-4 ${
              isDark 
                ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
            }`}>
              Smart Cities: Problems & Solutions 🌍
            </h1>
            <div className={`w-32 h-1 mx-auto mb-6 ${
              isDark 
                ? 'bg-gradient-to-r from-blue-400 to-purple-400'
                : 'bg-gradient-to-r from-blue-500 to-purple-500'
            }`}></div>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Transforming urban challenges into opportunities through innovative technology solutions
            </p>
          </div>
          
          {/* Video Section */}
          <div className="mb-20 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <div className={`aspect-video ${isDark ? 'bg-gray-800' : 'bg-gray-200'} flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎥</div>
                    <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Smart City Technology Overview
                    </p>
                    <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      Interactive video content coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Problems and Solutions Grid */}
          <div className="mb-20">
            <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-gray-800'} animate-fade-in`}>
              Urban Challenges & Smart Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {problems.map((problem, index) => (
                <Card key={index} className={`${
                  isDark 
                    ? 'bg-gray-800/50 border-gray-700' 
                    : 'bg-white/80 border-gray-200'
                } backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in hover-scale`} 
                style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4">{problem.icon}</div>
                      <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                        {problem.title}
                      </h3>
                    </div>
                    <div className="mb-6">
                      <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                        The Problem:
                      </h4>
                      <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                        {problem.description}
                      </p>
                    </div>
                    <div>
                      <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                        Our Solution:
                      </h4>
                      <p className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {problem.solution}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-20">
            <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-gray-800'} animate-fade-in`}>
              Core Technologies
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <Card key={index} className={`${
                  isDark 
                    ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-700/50' 
                    : 'bg-gradient-to-br from-blue-100 to-purple-100 border-blue-300'
                } backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 0.3}s` }}>
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl mb-4">{tech.icon}</div>
                    <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                      {tech.title}
                    </h3>
                    <p className={`text-base mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {tech.description}
                    </p>
                    <div className="space-y-2">
                      {tech.benefits.map((benefit, idx) => (
                        <div key={idx} className={`text-sm ${isDark ? 'text-blue-300' : 'text-blue-600'} flex items-center justify-center`}>
                          <span className="mr-2">✓</span>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Statistics Section */}
          <div className="text-center">
            <h2 className={`text-4xl font-bold mb-16 ${isDark ? 'text-white' : 'text-gray-800'} animate-fade-in`}>
              Proven Impact & Results
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div key={index} className={`p-8 rounded-xl ${
                  isDark 
                    ? 'bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border border-cyan-700/30' 
                    : 'bg-gradient-to-br from-cyan-100 to-blue-100 border border-cyan-300'
                } backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className={`text-5xl font-bold mb-4 ${
                    isDark 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'
                      : 'bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent'
                  }`}>
                    {stat.metric}
                  </div>
                  <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center animate-fade-in">
            <div className={`p-12 rounded-2xl ${
              isDark 
                ? 'bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-700/30' 
                : 'bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-300'
            } backdrop-blur-sm`}>
              <h3 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                Ready to Transform Your City?
              </h3>
              <p className={`text-lg mb-8 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Join the smart city revolution and discover how technology can solve urban challenges while creating sustainable, efficient, and livable communities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className={`px-6 py-3 rounded-full ${isDark ? 'bg-blue-600/20 text-blue-300' : 'bg-blue-600/20 text-blue-700'} border ${isDark ? 'border-blue-500/30' : 'border-blue-500/30'}`}>
                  🚀 Innovation
                </div>
                <div className={`px-6 py-3 rounded-full ${isDark ? 'bg-green-600/20 text-green-300' : 'bg-green-600/20 text-green-700'} border ${isDark ? 'border-green-500/30' : 'border-green-500/30'}`}>
                  🌱 Sustainability
                </div>
                <div className={`px-6 py-3 rounded-full ${isDark ? 'bg-purple-600/20 text-purple-300' : 'bg-purple-600/20 text-purple-700'} border ${isDark ? 'border-purple-500/30' : 'border-purple-500/30'}`}>
                  🤝 Community
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
