import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useMotionValue, useSpring } from "motion/react";
import { useFrame } from "@react-three/fiber";

export function SkullPanda(props) {
  const group = useRef();
  const { scene } = useGLTF("/models/skullpanda.glb");

  const yPosition = useMotionValue(5);
  const ySpring = useSpring(yPosition, { damping: 30 });

  useEffect(() => {
    ySpring.set(-1);
  }, [ySpring]);

  useFrame(() => {
    group.current.position.y = ySpring.get();
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

useGLTF.preload("/models/skullpanda.glb");
