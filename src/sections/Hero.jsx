import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useEffect } from "react";
import { OrbitControls, useGLTF, Float } from "@react-three/drei";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { useMediaQuery } from "react-responsive";
import Loader from "../components/Loader";

const SkullPanda = ({ isMobile }) => {
  const gltf = useGLTF("/skullpanda.glb");
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <primitive 
        object={gltf.scene} 
        scale={isMobile ? 25 : 30}
        position={[0, -1.5, 0]}
      />
    </Float>
  );
};

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const controlsRef = useRef();

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;
    controls.enablePan = false;

    const disableAutoRotate = () => {
      controls.autoRotate = false;
    };
    const enableAutoRotate = () => {
      controls.autoRotate = true;
    };

    controls.addEventListener('start', disableAutoRotate);
    controls.addEventListener('end', enableAutoRotate);

    return () => {
      controls.removeEventListener('start', disableAutoRotate);
      controls.removeEventListener('end', enableAutoRotate);
    };
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e5e3ff15] via-[#ffc8ec20] to-[#ff007700]" />
        
        {/* Contained Parallax Background */}
        <div className="absolute inset-0 overflow-hidden">
          <ParallaxBackground />
        </div>
      </div>
      
      {/* Content container */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        {/* Text content */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center p-4 z-10">
          <HeroText />
        </div>

        {/* 3D Model */}
        <div className="w-full md:w-1/2 h-full relative">
          <Canvas
            camera={{
              position: isMobile ? [0, 0, 6] : [0, 0, 7],
              fov: 45,
            }}
          >
            <Suspense fallback={<Loader />}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <SkullPanda isMobile={isMobile} />
              <OrbitControls
                ref={controlsRef}
                makeDefault
                autoRotate
                autoRotateSpeed={1}
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI / 2}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;