
import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Globe() {
  const group = useRef();

  const points = useMemo(() => {
    const positions = [];
    const count = 280;
    const radius = 1.65;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;

      positions.push(
        Math.cos(theta) * r * radius,
        y * radius,
        Math.sin(theta) * r * radius
      );
    }

    return new Float32Array(positions);
  }, []);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
    }
  });

  return (
    <group ref={group}>
      {/* Main globe */}
      <mesh>
        <sphereGeometry args={[1.65, 48, 48]} />
        <meshBasicMaterial
          color="#2563eb"
          wireframe
          transparent
          opacity={0.28}
        />
      </mesh>

      {/* Network nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[points, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#38bdf8"
          size={0.035}
          transparent
          opacity={0.95}
          sizeAttenuation
        />
      </points>

      {/* Outer orbital rings */}
      <mesh rotation={[0.8, 0.3, 0.4]}>
        <torusGeometry args={[2.05, 0.008, 8, 120]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.7} />
      </mesh>

      <mesh rotation={[1.2, 0.6, -0.3]}>
        <torusGeometry args={[2.2, 0.006, 8, 120]} />
        <meshBasicMaterial color="#2563eb" transparent opacity={0.6} />
      </mesh>

      {/* Center glow */}
      <mesh>
        <sphereGeometry args={[1.58, 32, 32]} />
        <meshBasicMaterial
          color="#0c4a6e"
          transparent
          opacity={0.08}
        />
      </mesh>
    </group>
  );
}

export default function NetworkGlobe() {
  return (
    <div className="relative h-[300px] w-full max-w-[550px] min-w-0 sm:h-[450px] lg:h-[550px]">
      <div className="absolute inset-[15%] rounded-full bg-blue-500/20 blur-[90px]" />

      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <Globe />
      </Canvas>

      <div className="absolute left-[12%] top-[20%] h-2 w-2 animate-pulse rounded-full bg-sky-400 shadow-[0_0_20px_#38bdf8]" />
      <div className="absolute bottom-[20%] right-[12%] h-2 w-2 animate-pulse rounded-full bg-blue-400 shadow-[0_0_20px_#2563eb]" />
    </div>
  );
}
