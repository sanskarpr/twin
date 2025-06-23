
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface TrafficFlowProps {
  position: [number, number, number];
}

const TrafficFlow = ({ position }: TrafficFlowProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 2) * 2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.1]} />
      <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={0.3} />
    </mesh>
  );
};

export default TrafficFlow;
