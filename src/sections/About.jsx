import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Link } from "react-router-dom";

const About = () => {
  const grid2Container = useRef();
  const [hasInteracted, setHasInteracted] = useState(false);

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 - Unchanged */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/me.png"
            className="absolute object-cover w-full h-full scale-[1.2] -right-[2rem] -top-[1rem] md:scale-[1.5] md:right-0 md:top-0 lg:scale-[1.3]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Toh Rui Min</p>
            <p className="subtext">
              A student in Immersive Media with a passion for 3D art, UI/UX design and front-end development.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 - Skills (Draggable) */}
        <div 
          className="grid-default-color grid-2 relative overflow-hidden"
          onClick={() => setHasInteracted(true)}
        >
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full min-h-[400px]"
          >
            <p className="absolute text-5xl text-gray-500 opacity-30">SKILLS</p>

            {!hasInteracted && (
              <motion.div 
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm z-50"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                ✨ Drag these skills around ✨
              </motion.div>
            )}

            <SkillCard style={{ rotate: "75deg", top: "30%", left: "20%" }} text="3D" containerRef={grid2Container} />
            <SkillCard style={{ rotate: "90deg", top: "60%", left: "70%" }} text="Unity" containerRef={grid2Container} />
            <SkillCard style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="UI/UX" containerRef={grid2Container} />
            <SkillCard style={{ rotate: "20deg", top: "10%", left: "38%" }} text="Websites" containerRef={grid2Container} />
            <SkillCard style={{ rotate: "30deg", top: "70%", left: "70%" }} image="assets/logos/csharp-pink.png" containerRef={grid2Container} />
            <SkillCard style={{ rotate: "-45deg", top: "70%", left: "25%" }} image="assets/logos/dotnet-pink.png" containerRef={grid2Container} />
            <SkillCard style={{ rotate: "-15deg", top: "5%", left: "10%" }} image="assets/logos/css.svg" containerRef={grid2Container} />
            <SkillCard style={{ rotate: "15deg", top: "15%", left: "80%" }} image="assets/logos/javascript.svg" containerRef={grid2Container} />
            <SkillCard style={{ rotate: "-30deg", top: "30%", left: "65%" }} image="assets/logos/figma.svg" containerRef={grid2Container} />
            <SkillCard style={{ rotate: "45deg", top: "80%", left: "85%" }} image="assets/logos/firebase.svg" containerRef={grid2Container} />
            <SkillCard style={{ rotate: "-20deg", top: "40%", left: "45%" }} image="assets/logos/html5.svg" containerRef={grid2Container} />
          </div>
        </div>

        {/* Grid 3 - Unchanged */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Singapore, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 - Unchanged */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              I’m open to opportunities,
               send me an email!
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 - Art Portfolio with background thumbnail */}
        <div className="grid-default-color grid-5 flex flex-col justify-center items-center text-center relative overflow-hidden">
          <img
            src="assets/thumbnails/art.png"
            alt="Art background"
            className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
          />
          <div className="z-10">
            <p className="headtext">Art Portfolio</p>
            <p className="subtext mb-4">
              Dive into my collection of digital and traditional artworks.
            </p>
            <Link
              to="/art"
              className="px-6 py-2 text-white transition-all duration-300 bg-indigo-500 rounded-full hover:bg-indigo-700"
            >
              View My Artworks →
            </Link>
          </div>
        </div>

        {/* Grid 6 - 3D Portfolio with background thumbnail */}
        <div className="grid-default-color grid-6 md:col-span-6 flex flex-col justify-center items-center text-center relative overflow-hidden py-12">
          <img
            src="assets/thumbnails/3d.png"
            alt="3D background"
            className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
          />
          <div className="z-10">
            <p className="headtext text-3xl">3D Portfolio</p>
            <p className="subtext mb-4 max-w-2xl mx-auto">
              Explore my character models, animations, and props in 3D.
            </p>
            <Link
              to="/3d"
              className="px-8 py-3 text-lg text-white transition-all duration-300 bg-indigo-500 rounded-full hover:bg-indigo-700"
            >
              View My 3D Work →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

const SkillCard = ({ style, text, image, containerRef }) => {
  return image ? (
    <motion.div
      className="absolute w-15 cursor-grab active:cursor-grabbing z-20"
      style={style}
      whileHover={{ scale: 1.05, zIndex: 30 }}
      whileTap={{ scale: 1.03 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
      dragMomentum={false}
    >
      <img src={image} alt="" className="pointer-events-none w-full h-full" draggable={false} />
    </motion.div>
  ) : (
    <motion.div
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab active:cursor-grabbing z-20"
      style={style}
      whileHover={{ scale: 1.05, zIndex: 30 }}
      whileTap={{ scale: 1.03 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
      dragMomentum={false}
    >
      {text}
    </motion.div>
  );
};


export default About;