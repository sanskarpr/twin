
import React, { useMemo } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Building from './Building';
import Car from './Car';
import EnergyGrid from './EnergyGrid';
import EnvironmentalParticle from './EnvironmentalParticle';
import Street from './Street';
import DynamicLighting from './DynamicLighting';

interface CitySceneProps {
  viewType: string;
  simulationParams?: {
    population: number;
    traffic: number;
    weather: number;
    events: number;
  };
}

const CityScene = ({ viewType, simulationParams = { population: 100, traffic: 80, weather: 70, events: 0 } }: CitySceneProps) => {
  const { isDark } = useTheme();
  
  // Calculate time of day based on simulation
  const timeOfDay = useMemo(() => {
    const baseTime = 12; // noon
    const weatherOffset = (simulationParams.weather - 70) / 10; // weather affects apparent time
    return (baseTime + weatherOffset) % 24;
  }, [simulationParams.weather]);
  
  const buildings = useMemo(() => {
    const buildingCount = Math.floor(15 + (simulationParams.population / 100) * 10);
    const buildingData = [];
    for (let i = 0; i < buildingCount; i++) {
      buildingData.push({
        position: [
          (Math.random() - 0.5) * 10,
          Math.random() * 3 + 0.5,
          (Math.random() - 0.5) * 10
        ] as [number, number, number],
        height: Math.random() * 3 + 1,
        color: viewType === 'buildings' ? '#4f46e5' : isDark ? '#64748b' : '#94a3b8'
      });
    }
    return buildingData;
  }, [viewType, isDark, simulationParams.population]);

  const streets = useMemo(() => [
    { start: [-5, 0.01, -5] as [number, number, number], end: [5, 0.01, -5] as [number, number, number], width: 0.8 },
    { start: [-5, 0.01, 0] as [number, number, number], end: [5, 0.01, 0] as [number, number, number], width: 0.8 },
    { start: [-5, 0.01, 5] as [number, number, number], end: [5, 0.01, 5] as [number, number, number], width: 0.8 },
    { start: [-5, 0.01, -5] as [number, number, number], end: [-5, 0.01, 5] as [number, number, number], width: 0.8 },
    { start: [0, 0.01, -5] as [number, number, number], end: [0, 0.01, 5] as [number, number, number], width: 0.8 },
    { start: [5, 0.01, -5] as [number, number, number], end: [5, 0.01, 5] as [number, number, number], width: 0.8 },
  ], []);

  const carRoutes = useMemo(() => [
    [[-5, 0.15, -5], [5, 0.15, -5]],
    [[5, 0.15, -5], [5, 0.15, 5]],
    [[5, 0.15, 5], [-5, 0.15, 5]],
    [[-5, 0.15, 5], [-5, 0.15, -5]],
    [[-5, 0.15, 0], [5, 0.15, 0]],
    [[0, 0.15, -5], [0, 0.15, 5]],
  ] as [number, number, number][][], []);

  const cars = useMemo(() => {
    const carCount = Math.floor((simulationParams.traffic / 100) * 12);
    const carData = [];
    for (let i = 0; i < carCount; i++) {
      const routeIndex = i % carRoutes.length;
      carData.push({
        route: carRoutes[routeIndex],
        speed: 1 + Math.random(),
        color: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'][i % 5],
        trafficLoad: simulationParams.traffic
      });
    }
    return carData;
  }, [simulationParams.traffic, carRoutes]);

  const energyNodes = useMemo(() => {
    const baseNodes = [
      [-4, 2, -4],
      [4, 2, -4],
      [4, 2, 4],
      [-4, 2, 4],
      [0, 2, 0],
    ] as [number, number, number][];
    
    return baseNodes;
  }, []);

  const environmentalParticles = useMemo(() => {
    const particleCount = Math.floor(20 + (simulationParams.weather / 100) * 20);
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        position: [
          (Math.random() - 0.5) * 12,
          Math.random() * 4 + 1,
          (Math.random() - 0.5) * 12
        ] as [number, number, number]
      });
    }
    return particles;
  }, [simulationParams.weather]);

  return (
    <>
      {/* Dynamic lighting system */}
      <DynamicLighting timeOfDay={timeOfDay} />

      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color={isDark ? '#1e293b' : '#e2e8f0'} />
      </mesh>

      {/* Streets - always visible */}
      {streets.map((street, index) => (
        <Street
          key={`street-${index}`}
          start={street.start}
          end={street.end}
          width={street.width}
        />
      ))}

      {/* Buildings - always visible */}
      {buildings.map((building, index) => (
        <Building
          key={`building-${index}`}
          position={building.position}
          height={building.height}
          color={building.color}
        />
      ))}

      {/* Traffic view specific elements */}
      {(viewType === 'traffic' || viewType === 'buildings') && cars.map((car, index) => (
        <Car
          key={`car-${index}`}
          route={car.route}
          speed={car.speed}
          color={car.color}
          trafficLoad={car.trafficLoad}
        />
      ))}

      {/* Energy view specific elements */}
      {viewType === 'energy' && (
        <EnergyGrid 
          nodes={energyNodes} 
          energyDemand={simulationParams.population + simulationParams.events}
        />
      )}

      {/* Environmental view specific elements */}
      {viewType === 'environmental' && environmentalParticles.map((particle, index) => (
        <EnvironmentalParticle
          key={`env-${index}`}
          position={particle.position}
        />
      ))}
    </>
  );
};

export default CityScene;
