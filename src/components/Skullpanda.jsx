import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useMotionValue, useSpring } from "motion/react";
import { useFrame } from "@react-three/fiber";

export function SkullPanda(props) {
  const group = useRef();

  // This will automatically be "/Portfolio/" in production (based on Vite config)
  const base = import.meta.env.BASE_URL;

  // Load the GLB model using the correct path
  const { scene } = useGLTF(`${base}skullpanda.glb`);

  // Animated bounce using motion
  const yPosition = useMotionValue(5);
  const ySpring = useSpring(yPosition, { damping: 30 });

  useEffect(() => {
    ySpring.set(-1);
  }, [ySpring]);

  useFrame(() => {
    if (group.current) {
      group.current.position.y = ySpring.get();
    }
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[-Math.PI / 2, 0, 0.5]}
      scale={props.scale || 0.25}
      position={props.position || [0, -1, 0]}
    >
      <primitive object={scene} />
    </group>
  );
}

// Preload the model (for performance)
useGLTF.preload(`${import.meta.env.BASE_URL}skullpanda.glb`);
