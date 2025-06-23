import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 w-full max-w-4xl px-4 text-center md:mt-40 md:text-left">
      {/* Desktop View - unchanged */}
      <div className="hidden md:flex flex-col space-y-4">
        <motion.h1
          className="text-4xl font-medium text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Toh Rui Min
        </motion.h1>

        <motion.p
          className="text-5xl font-medium text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          A Developer <br /> Dedicated to Crafting
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
          <FlipWords
            words={words}
            className="font-black text-white text-7xl"
          />
        </motion.div>

        <motion.p
          className="text-4xl font-medium text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          Web Solutions
        </motion.p>
      </div>

      {/* Mobile View - updated */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="flex flex-col"
        >
          <span className="text-4xl font-medium text-white">Hi,</span>
          <span className="text-4xl font-medium text-white">I'm Toh Rui Min</span>
        </motion.div>

        <motion.p
          className="text-4xl font-medium text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          Building
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
          <FlipWords
            words={words}
            className="font-bold text-white text-6xl"
          />
        </motion.div>

        <motion.p
          className="text-3xl font-medium text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          Web Applications
        </motion.p>
      </div>
    </div>
  );
};

export default HeroText;