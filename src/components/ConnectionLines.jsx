import { motion } from "framer-motion";

function ConnectionLines() {
  return (
    <svg
      className="pointer-events-none absolute left-0 top-0 h-full w-full"
      viewBox="0 0 1700 700"
      fill="none"
    >
      <defs>
        <linearGradient id="pinkLine" x1="0" x2="1">
          <stop offset="0%" stopColor="#ff5fcf" />
          <stop offset="100%" stopColor="#ff8ce3" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.path
        d="M280 180 C520 180 520 180 760 180
           C1000 180 1000 180 1240 180"
        stroke="url(#pinkLine)"
        strokeWidth="3"
        strokeLinecap="round"
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 2.2,
          ease: "easeInOut",
        }}
      />

      <motion.circle
        r="6"
        fill="#ff6fd8"
        filter="url(#glow)"
      >
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path="M280 180 C520 180 520 180 760 180 C1000 180 1000 180 1240 180"
        />
      </motion.circle>
    </svg>
  );
}

export default ConnectionLines;