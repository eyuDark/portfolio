"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface FloatingCubeProps {
  position: [number, number, number];
  color?: string;
}

export function FloatingCube({ position, color = "#3b82f6" }: FloatingCubeProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.007;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
}

export function FloatingSphere({ position, color = "#10b981" }: FloatingCubeProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.z += 0.005;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + 1) * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.7, 32, 32]} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
}

export function FloatingTorus({ position, color = "#f59e0b" }: FloatingCubeProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y += 0.004;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + 2) * 0.25;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.6, 0.2, 16, 32]} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
}

export function FloatingOctahedron({ position, color = "#8b5cf6" }: FloatingCubeProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.006;
      meshRef.current.rotation.z += 0.008;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + 3) * 0.35;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.8]} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
}
