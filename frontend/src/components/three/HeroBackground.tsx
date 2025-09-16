'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 1000 }) {
  const mesh = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const xFactor = (-50 + Math.random() * 100);
      const yFactor = (-50 + Math.random() * 100);
      const zFactor = (-50 + Math.random() * 100);
      
      temp.set([
        xFactor,
        yFactor,
        zFactor
      ], i * 3);
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.1;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={mesh} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={2}
          sizeAttenuation={true}
          depthWrite={false}
          vertexColors={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

function FloatingShape({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <Float speed={speed * 2} rotationIntensity={1} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <Octahedron args={[0.5, 0]}>
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.7}
            metalness={0.1}
            roughness={0.2}
            emissive={color}
            emissiveIntensity={0.1}
          />
        </Octahedron>
      </mesh>
    </Float>
  );
}

function Scene() {
  
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.5} />
      
      <Particles count={800} />
      
      {/* Floating geometric shapes */}
      <FloatingShape position={[-4, 2, -5]} color="#3b82f6" speed={0.5} />
      <FloatingShape position={[4, -1, -3]} color="#8b5cf6" speed={0.3} />
      <FloatingShape position={[-2, -2, -4]} color="#06b6d4" speed={0.4} />
      <FloatingShape position={[3, 3, -6]} color="#3b82f6" speed={0.6} />
      <FloatingShape position={[0, 1, -8]} color="#8b5cf6" speed={0.2} />
    </>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
