
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CarProps {
  route: [number, number, number][];
  speed: number;
  color: string;
  trafficLoad: number;
}

const Car = ({ route, speed, color, trafficLoad }: CarProps) => {
  const carRef = useRef<THREE.Group>(null);
  const progressRef = useRef(0);
  
  const adjustedSpeed = useMemo(() => {
    // Slow down cars based on traffic load
    const trafficMultiplier = Math.max(0.3, 1 - (trafficLoad / 200));
    return speed * trafficMultiplier;
  }, [speed, trafficLoad]);
  
  useFrame((state, delta) => {
    if (!carRef.current || route.length < 2) return;
    
    progressRef.current += adjustedSpeed * delta;
    
    // Reset when reaching end of route
    if (progressRef.current >= route.length - 1) {
      progressRef.current = 0;
    }
    
    const currentIndex = Math.floor(progressRef.current);
    const nextIndex = (currentIndex + 1) % route.length;
    const t = progressRef.current - currentIndex;
    
    const currentPoint = route[currentIndex];
    const nextPoint = route[nextIndex];
    
    // Interpolate position
    const x = THREE.MathUtils.lerp(currentPoint[0], nextPoint[0], t);
    const y = currentPoint[1];
    const z = THREE.MathUtils.lerp(currentPoint[2], nextPoint[2], t);
    
    carRef.current.position.set(x, y, z);
    
    // Calculate rotation to face movement direction
    const direction = new THREE.Vector3(
      nextPoint[0] - currentPoint[0],
      0,
      nextPoint[2] - currentPoint[2]
    ).normalize();
    
    if (direction.length() > 0) {
      carRef.current.lookAt(
        carRef.current.position.x + direction.x,
        carRef.current.position.y,
        carRef.current.position.z + direction.z
      );
    }
  });

  return (
    <group ref={carRef}>
      {/* Car body */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[0.2, 0.08, 0.4]} />
        <meshStandardMaterial color={color} />
      </mesh>
      
      {/* Car wheels */}
      <mesh position={[0.08, 0.02, 0.15]}>
        <cylinderGeometry args={[0.03, 0.03, 0.02]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      <mesh position={[-0.08, 0.02, 0.15]}>
        <cylinderGeometry args={[0.03, 0.03, 0.02]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      <mesh position={[0.08, 0.02, -0.15]}>
        <cylinderGeometry args={[0.03, 0.03, 0.02]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      <mesh position={[-0.08, 0.02, -0.15]}>
        <cylinderGeometry args={[0.03, 0.03, 0.02]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      
      {/* Headlights */}
      <mesh position={[0.05, 0.06, 0.2]}>
        <sphereGeometry args={[0.015]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
      <mesh position={[-0.05, 0.06, 0.2]}>
        <sphereGeometry args={[0.015]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
    </group>
  );
};

export default Car;
