import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Billboard, Float, Html } from '@react-three/drei';
import { FaCloud, FaDatabase, FaJs, FaNodeJs, FaReact, FaShieldAlt } from 'react-icons/fa';

const stackItems = [
  { Icon: FaCloud, color: '#58b8ff', position: [0, 1.2, 0.22] },
  { Icon: FaJs, color: '#6bc1ff', position: [1.02, 0.58, 0.26] },
  { Icon: FaNodeJs, color: '#79c8ff', position: [1.04, -0.58, 0.24] },
  { Icon: FaDatabase, color: '#4eaef7', position: [0, -1.22, 0.25] },
  { Icon: FaShieldAlt, color: '#8ed5ff', position: [-1.04, -0.58, 0.24] },
  { Icon: FaReact, color: '#63beff', position: [-1.02, 0.58, 0.26] }
];

const DevStackCluster = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.0022;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.08;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.26}>
      <group ref={groupRef} scale={0.62} position={[0, -0.05, 0]}>
        <mesh rotation={[0.5, 0.35, 0]}>
          <icosahedronGeometry args={[0.72, 1]} />
          <meshStandardMaterial
            color="#57b6f4"
            emissive="#1f6c98"
            emissiveIntensity={0.12}
            roughness={0.42}
            metalness={0.18}
            wireframe
          />
        </mesh>

        {stackItems.map((item, idx) => (
          <Billboard key={idx} position={item.position} follow lockX={false} lockY={false} lockZ={false}>
            <Html center transform sprite position={[0, 0, 0.01]} distanceFactor={8.5}>
              <div className="stack-icon-modern" style={{ color: item.color }}>
                <item.Icon />
              </div>
            </Html>
          </Billboard>
        ))}
      </group>
    </Float>
  );
};

const HeroAccent3D = () => {
  return (
    <div className="hero-accent3d-wrap" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 4], fov: 36 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        onCreated={({ gl, scene }) => {
          gl.setClearColor(0x000000, 0);
          scene.background = null;
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[2.5, 2, 2]} intensity={0.68} color="#c8efff" />
          <pointLight position={[-2, -1.8, 1.2]} intensity={0.3} color="#69c2ff" />
          <DevStackCluster />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroAccent3D;
