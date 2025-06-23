
import React from 'react';
import * as THREE from 'three';

interface StreetProps {
  start: [number, number, number];
  end: [number, number, number];
  width: number;
}

const Street = ({ start, end, width }: StreetProps) => {
  const length = new THREE.Vector3(...start).distanceTo(new THREE.Vector3(...end));
  const midpoint = [
    (start[0] + end[0]) / 2,
    start[1],
    (start[2] + end[2]) / 2
  ] as [number, number, number];
  
  const angle = Math.atan2(end[2] - start[2], end[0] - start[0]);

  return (
    <group position={midpoint} rotation={[0, angle, 0]}>
      <mesh>
        <boxGeometry args={[length, 0.01, width]} />
        <meshStandardMaterial color="#444444" />
      </mesh>
      
      {/* Street markings */}
      <mesh position={[0, 0.005, 0]}>
        <boxGeometry args={[length, 0.001, 0.05]} />
        <meshStandardMaterial color="#FFFF00" />
      </mesh>
    </group>
  );
};

export default Street;
