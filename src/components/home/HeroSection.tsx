
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5760&q=80')`,
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-cyan-900/70 animate-pulse" style={{ animationDuration: '8s' }} />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-70 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen text-white">
        <div className="text-center max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white animate-scale-in hover:scale-105 transition-transform duration-500 cursor-default">
            Welcome to
          </h1>
          <h2 className="text-7xl md:text-9xl font-bold mb-8 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-fade-in hover:from-cyan-200 hover:via-blue-200 hover:to-purple-200 transition-all duration-700 cursor-default">
            Smart City
          </h2>
          <p className="text-xl md:text-2xl mb-4 animate-fade-in hover:text-cyan-300 transition-colors duration-300 cursor-default" style={{ animationDelay: '0.3s' }}>
            Pioneering the <span className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-300">Future of Urban Living</span>
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-slate-200 animate-fade-in hover:text-white transition-colors duration-300 cursor-default" style={{ animationDelay: '0.6s' }}>
            Transforming cities worldwide through AI-powered infrastructure, sustainable technology, and intelligent urban planning solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
