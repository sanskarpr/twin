
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useTheme } from '@/contexts/ThemeContext';
import CityScene from './3d/CityScene';

interface CityVisualization3DProps {
  viewType: 'traffic' | 'environmental' | 'energy' | 'buildings';
  simulationParams?: {
    population: number;
    traffic: number;
    weather: number;
    events: number;
  };
}

const CityVisualization3D = ({ viewType, simulationParams }: CityVisualization3DProps) => {
  const { isDark } = useTheme();

  return (
    <div className="w-full h-96 rounded-xl overflow-hidden">
      <Canvas
        camera={{ position: [8, 6, 8], fov: 60 }}
        shadows
        style={{ 
          background: isDark 
            ? 'linear-gradient(to bottom, #0f172a, #1e293b)' 
            : 'linear-gradient(to bottom, #dbeafe, #bfdbfe)' 
        }}
      >
        <OrbitControls 
          enablePan={true} 
          enableZoom={true} 
          enableRotate={true}
          maxDistance={15}
          minDistance={3}
        />
        <CityScene viewType={viewType} simulationParams={simulationParams} />
      </Canvas>
    </div>
  );
};

export default CityVisualization3D;
