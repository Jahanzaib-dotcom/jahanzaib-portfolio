"use client";

import {
  Points,
  PointMaterial,
  type PointsInstancesProps,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useState, useRef, Suspense } from "react";
import type { Points as PointsType } from "three";

function randomInSphere(arr: Float32Array, radius: number = 1.2) {
  for (let i = 0; i < arr.length; i += 3) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = radius * Math.cbrt(Math.random());
    arr[i] = r * Math.sin(phi) * Math.cos(theta);
    arr[i + 1] = r * Math.sin(phi) * Math.sin(theta);
    arr[i + 2] = r * Math.cos(phi);
  }
  return arr;
}

export const StarBackground = (props: PointsInstancesProps) => {
  const ref = useRef<PointsType | null>(null);
  const [sphere] = useState(() =>
    randomInSphere(new Float32Array(6000), 1.2)
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={new Float32Array(sphere)}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);
