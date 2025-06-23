
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface EnergyGridProps {
  nodes: [number, number, number][];
  energyDemand: number;
}

const EnergyGrid = ({ nodes, energyDemand }: EnergyGridProps) => {
  const powerLineRefs = useRef<THREE.Mesh[]>([]);
  
  useFrame((state) => {
    powerLineRefs.current.forEach((line, index) => {
      if (line && line.material instanceof THREE.MeshStandardMaterial) {
        const pulseIntensity = Math.sin(state.clock.elapsedTime * 2 + index) * 0.3 + 0.7;
        const demandMultiplier = energyDemand / 100;
        line.material.emissiveIntensity = pulseIntensity * demandMultiplier;
      }
    });
  });

  return (
    <group>
      {/* Power stations */}
      {nodes.map((node, index) => (
        <group key={`power-station-${index}`} position={node}>
          <mesh>
            <cylinderGeometry args={[0.15, 0.15, 1.5]} />
            <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={0.5} />
          </mesh>
          
          {/* Power lines to next node */}
          {index < nodes.length - 1 && (
            <mesh
              ref={(el) => {
                if (el) powerLineRefs.current[index] = el;
              }}
              position={[
                (nodes[index + 1][0] - node[0]) / 2,
                (nodes[index + 1][1] - node[1]) / 2,
                (nodes[index + 1][2] - node[2]) / 2
              ]}
            >
              <cylinderGeometry args={[0.01, 0.01, 
                new THREE.Vector3(...node).distanceTo(new THREE.Vector3(...nodes[index + 1]))
              ]} />
              <meshStandardMaterial color="#FFFF00" emissive="#FFFF00" emissiveIntensity={0.3} />
            </mesh>
          )}
        </group>
      ))}
    </group>
  );
};

export default EnergyGrid;
