
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import LoginModal from '@/components/LoginModal';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    return (
      <div className="relative min-h-screen">
        {/* Blurred background content */}
        <div className="absolute inset-0 blur-sm pointer-events-none">
          {children}
        </div>
        
        {/* Overlay with sign-in prompt */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-md rounded-lg p-8 shadow-2xl max-w-md mx-4 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Sign In Required
            </h2>
            <p className="text-gray-600 mb-6">
              Please sign in to access this section of our smart city platform.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => setShowLoginModal(true)}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Sign In Now
              </button>
              <button
                onClick={() => navigate(-1)}
                className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                <ArrowLeft size={18} />
                Go Back
              </button>
            </div>
          </div>
        </div>
        
        {/* Login Modal */}
        <LoginModal 
          isOpen={showLoginModal} 
          onClose={() => setShowLoginModal(false)} 
        />
      </div>
    );
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;
