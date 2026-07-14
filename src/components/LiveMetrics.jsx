import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function LiveMetrics() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const formatter = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      setTime(formatter.format(now));
    };

    updateClock();

    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-28 lg:py-36 text-white">
      {/* Background Grid */}

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle,#ffffff 1px,transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="relative mx-auto max-w-[1700px] px-6 sm:px-10 lg:px-16">
        {/* Live */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-10 lg:mb-12 flex flex-wrap items-center gap-4 sm:gap-5"
        >
          <div className="flex items-center gap-3 bg-[#1b1018] px-4 py-2 rounded-full">
            <motion.div
              className="h-2.5 w-2.5 rounded-full bg-pink-400"
              animate={{
                opacity: [1, 0.25, 1],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
            />

            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-pink-300">
              LIVE
            </span>
          </div>

          <span className="font-mono text-base sm:text-lg lg:text-xl text-gray-500">
            {time} IST
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="leading-[0.88]"
        >
          <span className="block text-[52px] sm:text-[76px] md:text-[96px] lg:text-[110px] xl:text-[125px] font-light text-white leading-none">
            Real-time
          </span>

          <span className="block text-[52px] sm:text-[76px] md:text-[96px] lg:text-[110px] xl:text-[125px] font-light text-[#67615d] leading-none">
            agent
          </span>

          <span className="block text-[58px] sm:text-[84px] md:text-[104px] lg:text-[120px] xl:text-[135px] font-light text-[#67615d] leading-none">
            metrics.
          </span>
        </motion.h2>
      </div>
    </section>
  );
}

export default LiveMetrics;