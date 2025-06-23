
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const CallToActionSection = () => {
  const { isDark } = useTheme();

  return (
    <section className={`py-20 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-4 text-center">
        <div className={`max-w-4xl mx-auto p-12 rounded-2xl ${isDark ? 'bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-700/30' : 'bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-300'} backdrop-blur-sm`}>
          <h3 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-800'}`}>
            Ready to Transform Your City?
          </h3>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Join the smart city revolution and discover how our technology can solve urban challenges while creating sustainable, efficient, and livable communities for millions of people worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className={`px-6 py-3 rounded-full ${isDark ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30' : 'bg-blue-600/20 text-blue-700 border border-blue-500/30'}`}>
              🚀 Innovation
            </div>
            <div className={`px-6 py-3 rounded-full ${isDark ? 'bg-green-600/20 text-green-300 border border-green-500/30' : 'bg-green-600/20 text-green-700 border border-green-500/30'}`}>
              🌱 Sustainability
            </div>
            <div className={`px-6 py-3 rounded-full ${isDark ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30' : 'bg-purple-600/20 text-purple-700 border border-purple-500/30'}`}>
              🤝 Community
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
