import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate(latest) {
        setValue(latest);
      },
    });

    return () => controls.stop();
  }, [isInView, from, to, duration]);

  return (
    <motion.span ref={ref}>
      {prefix}
      {value.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </motion.span>
  );
}

export default AnimatedCounter;