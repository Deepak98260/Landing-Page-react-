import { motion } from "framer-motion";

function FloatingOrb({ size, top, left, delay }) {
  return (
    <motion.div
      className="absolute rounded-full bg-white/40 blur-sm"
      style={{
        width: size,
        height: size,
        top,
        left,
      }}
      animate={{
        y: [-15, 20, -15],
        x: [-10, 15, -10],
        scale: [1, 1.4, 1],
        opacity: [0.2, 0.8, 0.2],
      }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default FloatingOrb;