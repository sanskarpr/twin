
import React from 'react';
import Layout from '@/components/Layout';
import CitySelector from '@/components/CitySelector';
import AnalyticsHeader from '@/components/analytics/AnalyticsHeader';
import RealTimeDashboard from '@/components/dashboard/RealTimeDashboard';
import AnalyticsCards from '@/components/analytics/AnalyticsCards';
import ResourceManagement from '@/components/dashboard/ResourceManagement';
import SustainabilityMetrics from '@/components/dashboard/SustainabilityMetrics';
import CitizenEngagement from '@/components/dashboard/CitizenEngagement';
import EmergencyResponse from '@/components/dashboard/EmergencyResponse';
import UrbanChallenges from '@/components/analytics/UrbanChallenges';
import SmartSolutions from '@/components/analytics/SmartSolutions';
import KPIMetrics from '@/components/analytics/KPIMetrics';
import EnhancedMetrics from '@/components/analytics/EnhancedMetrics';
import ZoneAnalysis from '@/components/analytics/ZoneAnalysis';
import { useTheme } from '@/contexts/ThemeContext';

const Analytics = () => {
  const { isDark } = useTheme();

  return (
    <Layout>
      <div className={`min-h-screen overflow-x-hidden transition-all duration-500 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'
      }`}>
        <div className="w-full max-w-full px-2 sm:px-4 lg:px-6 xl:px-8 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto">
            <AnalyticsHeader />
            
            {/* City Selector */}
            <div className="flex justify-center mb-8 lg:mb-16">
              <CitySelector />
            </div>

            {/* Real-Time Dashboard */}
            <div className="mb-6 lg:mb-8">
              <RealTimeDashboard />
            </div>

            {/* Emergency Response System */}
            <div className="mb-6 lg:mb-8">
              <EmergencyResponse />
            </div>
            
            {/* Main Analytics Cards */}
            <div className="mb-6 lg:mb-8">
              <AnalyticsCards />
            </div>

            {/* Resource Management */}
            <div className="mb-6 lg:mb-8">
              <ResourceManagement />
            </div>

            {/* Sustainability Metrics */}
            <div className="mb-6 lg:mb-8">
              <SustainabilityMetrics />
            </div>

            {/* Citizen Engagement Portal */}
            <div className="mb-6 lg:mb-8">
              <CitizenEngagement />
            </div>

            {/* Urban Challenge Solutions */}
            <div className="mb-6 lg:mb-8">
              <UrbanChallenges />
            </div>

            {/* Smart City Solutions Implementation */}
            <div className="mb-6 lg:mb-8">
              <SmartSolutions />
            </div>

            {/* Detailed Metrics Grid */}
            <div className="mb-6 lg:mb-8">
              <KPIMetrics />
            </div>

            {/* Enhanced Quality of Life Metrics */}
            <div className="mb-6 lg:mb-8">
              <EnhancedMetrics />
            </div>

            {/* City Zones Analysis */}
            <div className="mb-6">
              <ZoneAnalysis />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
