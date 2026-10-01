"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import {
  FloatingCube,
  FloatingSphere,
  FloatingTorus,
  FloatingOctahedron,
} from "./FloatingShapes";
import { ParticleField } from "./ParticleField";

export default function Scene() {
  return (
    <Canvas
      className="w-full h-full"
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={60} />

      {/* Ambient lighting */}
      <ambientLight intensity={0.4} />

      {/* Directional lights */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#10b981" />

      {/* Floating geometric shapes */}
      <FloatingCube position={[-3, 1, -2]} color="#3b82f6" />
      <FloatingSphere position={[3, -1, -3]} color="#10b981" />
      <FloatingTorus position={[-2, -2, 1]} color="#f59e0b" />
      <FloatingOctahedron position={[2.5, 2, 0]} color="#8b5cf6" />

      {/* Additional shapes for depth */}
      <FloatingCube position={[4, 0, -5]} color="#3b82f6" />
      <FloatingSphere position={[-4, 1, -4]} color="#10b981" />

      {/* Particle field background */}
      <ParticleField count={800} />

      {/* Controls - limited for subtle interaction */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        rotateSpeed={0.3}
      />
    </Canvas>
  );
}
