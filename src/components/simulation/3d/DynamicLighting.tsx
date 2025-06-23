
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTheme } from '@/contexts/ThemeContext';
import * as THREE from 'three';

interface DynamicLightingProps {
  timeOfDay: number; // 0-24 hours
}

const DynamicLighting = ({ timeOfDay }: DynamicLightingProps) => {
  const { isDark } = useTheme();
  const sunRef = useRef<THREE.DirectionalLight>(null);
  const moonRef = useRef<THREE.DirectionalLight>(null);
  const sunMeshRef = useRef<THREE.Mesh>(null);
  const moonMeshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    const hour = timeOfDay % 24;
    const isDay = hour >= 6 && hour <= 18;
    const dayProgress = isDay ? (hour - 6) / 12 : 0;
    const nightProgress = !isDay ? ((hour > 18 ? hour - 18 : hour + 6) / 12) : 0;
    
    // Sun position and intensity
    if (sunRef.current && sunMeshRef.current) {
      const sunAngle = (dayProgress * Math.PI) - Math.PI/2;
      const sunX = Math.cos(sunAngle) * 10;
      const sunY = Math.sin(sunAngle) * 10;
      
      sunRef.current.position.set(sunX, Math.max(sunY, -2), 5);
      sunRef.current.intensity = isDay ? Math.max(0.1, Math.sin(dayProgress * Math.PI)) : 0;
      
      sunMeshRef.current.position.set(sunX, Math.max(sunY, -2), 5);
      sunMeshRef.current.visible = isDay && sunY > 0;
    }
    
    // Moon position and intensity
    if (moonRef.current && moonMeshRef.current) {
      const moonAngle = (nightProgress * Math.PI) - Math.PI/2;
      const moonX = Math.cos(moonAngle) * 10;
      const moonY = Math.sin(moonAngle) * 10;
      
      moonRef.current.position.set(moonX, Math.max(moonY, -2), 5);
      moonRef.current.intensity = !isDay ? Math.max(0.1, Math.sin(nightProgress * Math.PI)) * 0.3 : 0;
      
      moonMeshRef.current.position.set(moonX, Math.max(moonY, -2), 5);
      moonMeshRef.current.visible = !isDay && moonY > 0;
    }
  });

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={isDark ? 0.2 : 0.4} />
      
      {/* Sun */}
      <directionalLight 
        ref={sunRef}
        color="#FDB813"
        castShadow 
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <mesh ref={sunMeshRef}>
        <sphereGeometry args={[0.5]} />
        <meshBasicMaterial color="#FDB813" />
      </mesh>
      
      {/* Moon */}
      <directionalLight 
        ref={moonRef}
        color="#E6E6FA"
        castShadow 
      />
      <mesh ref={moonMeshRef}>
        <sphereGeometry args={[0.3]} />
        <meshBasicMaterial color="#E6E6FA" />
      </mesh>
    </>
  );
};

export default DynamicLighting;
