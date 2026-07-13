import { motion } from "framer-motion";
import worldImage from "../assets/images/world-3i68QNWJwmO7W19ztZWbevAwJQHzYL.png";

function GlobalInfrastructure() {
  return (
    <section className="relative overflow-hidden bg-black py-20">

      <div className="mx-auto flex max-w-[1700px] items-center justify-between gap-24 px-16">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
         className="relative z-10 w-[420px] mx-auto"
        >

          <div className="absolute inset-0 rounded-full bg-pink-500/10 blur-[140px]" />

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
          className="max-w-[760px]"
        >

          <div className="mb-12 flex items-center gap-5">

            <div className="h-px w-16 bg-gray-700"></div>

            <span className="font-mono text-sm tracking-[0.25em] uppercase text-gray-400">
              Global infrastructure
            </span>

          </div>

          <h2 className="text-[110px] font-light leading-[0.9] text-white">

            Global by

            <br />

            <span className="text-[#5d5955]">
              default.
            </span>

          </h2>

          <p className="mt-12 max-w-[720px] text-[22px] leading-[1.7] text-gray-500">
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