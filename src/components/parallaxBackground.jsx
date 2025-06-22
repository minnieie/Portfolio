import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  const base = import.meta.env.BASE_URL;

  return (
    <div className="absolute top-0 left-0 w-screen h-screen m-0 p-0">
      {/* Background Sky */}
      <div
        className="absolute inset-0 w-full h-full m-0 p-0"
        style={{
          backgroundImage: `url(${base}assets/sky.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Mountain Layer 3 */}
      <motion.div
        className="absolute inset-0 w-full h-full m-0 p-0"
        style={{
          backgroundImage: `url(${base}assets/mountain-3.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          y: mountain3Y,
        }}
      />

      {/* Planets */}
      <motion.div
        className="absolute inset-0 w-full h-full m-0 p-0"
        style={{
          backgroundImage: `url(${base}assets/planets.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          x: planetsX,
        }}
      />

      {/* Mountain Layer 2 */}
      <motion.div
        className="absolute inset-0 w-full h-full m-0 p-0"
        style={{
          backgroundImage: `url(${base}assets/mountain-2.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          y: mountain2Y,
        }}
      />

      {/* Mountain Layer 1 */}
      <motion.div
        className="absolute inset-0 w-full h-full m-0 p-0"
        style={{
          backgroundImage: `url(${base}assets/mountain-1.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          y: mountain1Y,
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
