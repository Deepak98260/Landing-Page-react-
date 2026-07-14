import { motion } from "framer-motion";
import graphImage from "../assets/images/real-time-graph-INFmn3u0MlUwvNPynoIhwxtPaPjxM5.png";
import AnimatedCounter from "./AnimatedCounter";

function MetricsDashboard() {
  return (
    <section className="relative bg-black py-16 sm:py-20 lg:py-24">

      {/* Background Dots */}

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle,#ffffff 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto max-w-[1700px] px-6 sm:px-10 lg:px-16">

        {/* ================= GRAPH ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="overflow-hidden rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] border border-white/10"
        >
          <img
            src={graphImage}
            alt="Realtime Graph"
            className="w-full object-cover"
            draggable={false}
          />
        </motion.div>

        {/* ================= METRIC CARDS ================= */}

        <div className="mt-6 sm:mt-7 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">

          {/* Card 1 */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
            className="border border-white/10 bg-[#060606] p-5 sm:p-6 lg:p-7"
          >
            <p className="font-mono text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase text-gray-500">
              Tasks completed
            </p>

            {/* Animated Wave */}

<svg
  className="mt-6 sm:mt-8 lg:mt-10 w-full"
  viewBox="0 0 420 70"
  fill="none"
>
  <motion.path
    d="M0 35
       C40 20 80 20 120 35
       C160 50 200 50 240 35
       C280 20 320 20 360 35
       C390 45 405 40 420 35"
    stroke="#8f6b8b"
    strokeWidth="3"
    strokeLinecap="round"
    strokeDasharray="1 12"
    initial={{
      pathLength: 0,
    }}
    whileInView={{
      pathLength: 1,
    }}
    viewport={{ once: true }}
    transition={{
      duration: 1.6,
    }}
  />
</svg>

            <h2 className="mt-4 sm:mt-5 lg:mt-6 text-[30px] sm:text-[36px] lg:text-[42px] font-light text-white">
             <AnimatedCounter
  from={0}
  to={12847392}
  duration={2.5}
/>
            </h2>

            <p className="mt-6 sm:mt-7 lg:mt-8 text-xl sm:text-2xl lg:text-3xl text-white">
              Tasks completed today
            </p>

            <p className="mt-4 sm:mt-5 font-mono text-base sm:text-lg lg:text-xl text-gray-500">
              by 23,847 active agents
            </p>
          </motion.div>

          {/* Card 2 */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: .15,
              duration: .6,
            }}
            className="border border-white/10 bg-[#060606] p-6 sm:p-8 lg:p-10"
          >
            <p className="font-mono text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase text-gray-500">
              Across all regions
            </p>

            <h3 className="mt-6 sm:mt-7 lg:mt-8 text-xl sm:text-2xl lg:text-3xl text-white">
              Availability
            </h3>

            <svg
  className="mt-6 sm:mt-7 lg:mt-8 w-full"
  viewBox="0 0 420 60"
  fill="none"
>
  <motion.path
    d="M0 30
       C60 45 120 15 180 30
       C240 45 300 15 360 30
       C390 40 405 35 420 30"
    stroke="#b67db4"
    strokeWidth="3"
    strokeLinecap="round"
    strokeDasharray="1 12"
    initial={{ pathLength: 0 }}
    whileInView={{ pathLength: 1 }}
    viewport={{ once: true }}
    transition={{
      delay: .2,
      duration: 1.6,
    }}
  />
</svg>

            <h2 className="mt-16 sm:mt-24 lg:mt-32 text-[30px] sm:text-[36px] lg:text-[42px] font-light text-white">
            <AnimatedCounter
  from={0}
  to={99.99}
  decimals={2}
  duration={2}
  suffix="%"
/>
            </h2>
          </motion.div>

          {/* Card 3 */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: .3,
              duration: .6,
            }}
            className="border border-white/10 bg-[#060606] p-6 sm:p-8 lg:p-10"
          >
            <p className="font-mono text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase text-gray-500">
              P99 Latency
            </p>

            <h3 className="mt-6 sm:mt-7 lg:mt-8 text-xl sm:text-2xl lg:text-3xl text-white">
              Average execution
            </h3>

            <svg
  className="mt-6 sm:mt-7 lg:mt-8 w-full"
  viewBox="0 0 420 60"
  fill="none"
>
  <motion.path
    d="M0 25
       C70 15 140 40 210 25
       C280 15 350 40 420 25"
    stroke="#9b9b9b"
    strokeWidth="3"
    strokeLinecap="round"
    strokeDasharray="1 12"
    initial={{ pathLength: 0 }}
    whileInView={{ pathLength: 1 }}
    viewport={{ once: true }}
    transition={{
      delay: .4,
      duration: 1.6,
    }}
  />
</svg>

            <h2 className="mt-16 sm:mt-24 lg:mt-32 text-[30px] sm:text-[36px] lg:text-[42px] font-light text-white">
             <>
  &lt;
  <AnimatedCounter
    from={0}
    to={340}
    duration={2}
  />
  ms
</>
            </h2>
          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default MetricsDashboard;