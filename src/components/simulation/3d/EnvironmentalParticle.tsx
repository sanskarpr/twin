
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface EnvironmentalParticleProps {
  position: [number, number, number];
}

const EnvironmentalParticle = ({ position }: EnvironmentalParticleProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.05]} />
      <meshStandardMaterial color="#00ff00" transparent opacity={0.6} />
    </mesh>
  );
};

export default EnvironmentalParticle;
