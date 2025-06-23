import { useState, useEffect, useRef } from "react";
import Project from "../components/Project";
import { myProjects, myIntegratedProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Projects = () => {
  const [preview, setPreview] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const previewRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 853);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (preview && isMobile) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        // Restore scroll position when preview closes
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [preview, isMobile]);

  const handleMouseMove = (e) => {
    if (!isMobile) {
      x.set(e.clientX + 20);
      y.set(e.clientY + 20);
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}

      <h2 className="text-heading mt-24">My Integrated Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myIntegratedProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}

      {/* Preview Image */}
      {preview && (
        isMobile ? (
          <div 
            ref={previewRef}
            className="fixed inset-0 z-40 bg-black/70 flex items-center justify-center p-4"
            onClick={(e) => {
              // Close when clicking outside image
              if (e.target === previewRef.current) {
                setPreview(null);
              }
            }}
          >
            <div className="relative w-full max-w-md">
              <img
                className="object-contain w-full h-auto max-h-[70vh] rounded-lg shadow-xl border-2 border-white/30"
                src={preview}
              />
              <button 
                onClick={() => setPreview(null)}
                className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shadow-lg active:scale-95"
              >
                ×
              </button>
            </div>
          </div>
        ) : (
          <motion.img
            className="fixed top-0 left-0 z-50 object-cover h-56 w-80 rounded-lg shadow-lg pointer-events-none border-2 border-white/50"
            src={preview}
            style={{ x: springX, y: springY }}
          />
        )
      )}
    </section>
  );
};

export default Projects;