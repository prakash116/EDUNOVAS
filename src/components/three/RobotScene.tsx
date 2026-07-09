"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import type { Group, Mesh } from "three";

function AICore() {
  const core = useRef<Mesh>(null);
  const ringA = useRef<Mesh>(null);
  const ringB = useRef<Mesh>(null);
  const orbits = useRef<Group>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (core.current) {
      core.current.rotation.y += delta * 0.35;
      core.current.rotation.x += delta * 0.15;
    }
    if (ringA.current) ringA.current.rotation.z += delta * 0.4;
    if (ringB.current) ringB.current.rotation.z -= delta * 0.3;
    if (orbits.current) orbits.current.rotation.y = t * 0.5;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.2}>
      <group>
        {/* Glowing AI core */}
        <mesh ref={core}>
          <icosahedronGeometry args={[1.15, 1]} />
          <meshStandardMaterial
            color="#7c3aed"
            emissive="#7c3aed"
            emissiveIntensity={0.6}
            wireframe
          />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.75, 2]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={1.4}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Gyroscopic rings */}
        <mesh ref={ringA} rotation={[Math.PI / 2.4, 0, 0]}>
          <torusGeometry args={[1.9, 0.035, 16, 100]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={1.2}
            metalness={0.9}
          />
        </mesh>
        <mesh ref={ringB} rotation={[Math.PI / 1.6, Math.PI / 4, 0]}>
          <torusGeometry args={[2.3, 0.025, 16, 100]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={1.1}
            metalness={0.9}
          />
        </mesh>

        {/* Orbiting data nodes */}
        <group ref={orbits}>
          {[0, 1, 2, 3].map((i) => {
            const angle = (i / 4) * Math.PI * 2;
            return (
              <mesh
                key={i}
                position={[Math.cos(angle) * 2.7, Math.sin(angle * 2) * 0.4, Math.sin(angle) * 2.7]}
              >
                <sphereGeometry args={[0.09, 16, 16]} />
                <meshStandardMaterial
                  color={i % 2 ? "#22d3ee" : "#ec4899"}
                  emissive={i % 2 ? "#22d3ee" : "#ec4899"}
                  emissiveIntensity={2.2}
                />
              </mesh>
            );
          })}
        </group>
      </group>
    </Float>
  );
}

export default function RobotScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 6.2], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[6, 6, 6]} intensity={60} color="#3b82f6" />
      <pointLight position={[-6, -4, -6]} intensity={45} color="#a855f7" />
      <AICore />
      <Sparkles count={90} scale={9} size={2.2} speed={0.35} color="#67e8f9" />
    </Canvas>
  );
}
