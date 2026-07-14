import { motion } from "framer-motion";
import worldImage from "../assets/images/world-3i68QNWJwmO7W19ztZWbevAwJQHzYL.png";

function GlobalInfrastructure() {
  return (
    <section className="relative overflow-hidden bg-black py-14 sm:py-16 lg:py-20">

      <div className="mx-auto flex max-w-[1700px] flex-col lg:flex-row items-center justify-between gap-12 sm:gap-16 lg:gap-24 px-6 sm:px-10 lg:px-16">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
         className="relative z-10 w-[240px] sm:w-[320px] lg:w-[420px] mx-auto"
        >

          <div className="absolute inset-0 rounded-full bg-pink-500/10 blur-[80px] sm:blur-[110px] lg:blur-[140px]" />

          <motion.img
            src={worldImage}
            alt="World"
            className="relative z-10 w-full"
            animate={{
              y: [-10, 10, -10],
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 1,
          }}
          className="max-w-[760px] text-center lg:text-left"
        >

          <div className="mb-8 sm:mb-10 lg:mb-12 flex items-center justify-center lg:justify-start gap-4 sm:gap-5">

            <div className="h-px w-10 sm:w-12 lg:w-16 bg-gray-700"></div>

            <span className="font-mono text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase text-gray-400">
              Global infrastructure
            </span>

          </div>

          <h2 className="text-[48px] sm:text-[70px] md:text-[88px] lg:text-[110px] font-light leading-[0.95] lg:leading-[0.9] text-white">

            Global by

            <br />

            <span className="text-[#5d5955]">
              default.
            </span>

          </h2>

          <p className="mt-6 sm:mt-8 lg:mt-12 max-w-[720px] mx-auto lg:mx-0 text-base sm:text-lg lg:text-[22px] leading-[1.6] lg:leading-[1.7] text-gray-500">
            Your agents run on distributed infrastructure
            across 29 regions. Sub-50ms latency to 99% of
            the world.
          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default GlobalInfrastructure;