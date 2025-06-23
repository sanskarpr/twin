
import React from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { Lightbulb } from 'lucide-react';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      className="bg-slate-800/50 border-slate-600 hover:bg-slate-700 text-slate-300 hover:text-white transition-all duration-300 hover:scale-105 hover:border-slate-500"
    >
      <Lightbulb 
        className={`h-4 w-4 transition-all duration-300 ${
          isDark 
            ? 'text-slate-400' 
            : 'text-yellow-400 drop-shadow-lg filter brightness-125'
        }`} 
      />
    </Button>
  );
};

export default ThemeToggle;
