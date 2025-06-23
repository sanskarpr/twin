
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';

const NewsSection = () => {
  const { isDark } = useTheme();

  const newsArticles = [
    {
      title: "Smart Cities Market to Reach $2.5 Trillion by 2025",
      source: "TechCrunch",
      date: "Dec 15, 2024",
      excerpt: "Global smart cities market continues rapid expansion with AI and IoT integration driving urban transformation worldwide.",
      link: "https://techcrunch.com/smart-cities-market-growth",
      category: "Market Analysis"
    },
    {
      title: "Singapore Leads Global Smart City Rankings",
      source: "Smart Cities World",
      date: "Dec 10, 2024",
      excerpt: "Singapore tops the latest smart city index with advanced digital infrastructure and citizen-centric services.",
      link: "https://smartcitiesworld.net/singapore-rankings",
      category: "Global Rankings"
    },
    {
      title: "AI-Powered Traffic Management Reduces Congestion by 30%",
      source: "IEEE Spectrum",
      date: "Dec 8, 2024",
      excerpt: "New study shows machine learning algorithms can significantly improve urban traffic flow and reduce emissions.",
      link: "https://spectrum.ieee.org/ai-traffic-management",
      category: "Technology"
    },
    {
      title: "Digital Twin Cities: The Future of Urban Planning",
      source: "MIT Technology Review",
      date: "Dec 5, 2024",
      excerpt: "Cities worldwide adopt digital twin technology for better planning, simulation, and real-time monitoring.",
      link: "https://technologyreview.com/digital-twin-cities",
      category: "Innovation"
    }
  ];

  return (
    <section className={`py-20 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-slate-800'}`}>
          Latest News & Industry Insights
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {newsArticles.map((article, index) => (
            <Card key={index} className={`${isDark ? 'bg-slate-700/50 border-slate-600 hover:bg-slate-700/70' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'} transition-all duration-300 hover:scale-105`}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${isDark ? 'bg-cyan-400/20 text-cyan-300' : 'bg-cyan-100 text-cyan-700'}`}>
                    {article.category}
                  </span>
                  <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {article.date}
                  </span>
                </div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                  {article.title}
                </h3>
                <p className={`text-sm mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {article.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {article.source}
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className={`${isDark ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900' : 'border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white'}`}
                    onClick={() => window.open(article.link, '_blank')}
                  >
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className={`${isDark ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-slate-300 text-slate-700 hover:bg-slate-100'}`}
            onClick={() => window.open('https://smartcitiesworld.net/', '_blank')}
          >
            View More Industry News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
