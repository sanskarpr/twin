
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';
import LoginModal from '@/components/LoginModal';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const { isDark } = useTheme();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  // Listen for authentication changes
  useEffect(() => {
    const handleAuthChange = () => {
      setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
    };

    window.addEventListener('authChange', handleAuthChange);
    return () => window.removeEventListener('authChange', handleAuthChange);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'Simulation', path: '/simulation' },
    { name: 'Model', path: '/model' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogin = () => {
    setIsLoginModalOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    window.dispatchEvent(new Event('authChange'));
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <nav className="bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 fixed w-full top-0 z-50 shadow-2xl shadow-slate-900/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              Smart_City.
            </Link>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative text-slate-300 hover:text-white transition-all duration-300 px-3 py-2 rounded-lg hover:bg-slate-800/50 group ${
                    isActive(item.path) ? 'text-cyan-400 bg-slate-800/70' : ''
                  }`}
                >
                  {item.name}
                  <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transform transition-transform duration-300 ${
                    isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              {isAuthenticated ? (
                <Button 
                  onClick={handleLogout}
                  variant="outline" 
                  className="text-slate-300 border-slate-600 hover:bg-slate-800 bg-slate-800/50 backdrop-blur-sm hover:border-slate-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Logout
                </Button>
              ) : (
                <Button 
                  onClick={handleLogin}
                  variant="outline" 
                  className="text-slate-300 border-slate-600 hover:bg-slate-800 bg-slate-800/50 backdrop-blur-sm hover:border-slate-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>
      
      <main className="pt-16">
        {children}
      </main>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  );
};

export default Layout;
