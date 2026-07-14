import { motion } from "framer-motion";

function SecuritySection() {
  return (
    <section className="bg-black py-20 sm:py-28 lg:py-40 text-white">

      <div className="mx-auto max-w-[1700px] px-6 sm:px-10 lg:px-16">

        {/* Top Label */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 lg:mb-14 flex items-center gap-3 sm:gap-4 lg:gap-5"
        >

          <div className="h-px w-10 sm:w-12 lg:w-16 bg-white/20" />

          <span className="font-mono text-sm sm:text-base lg:text-[18px] tracking-[0.18em] text-[#7c736d]">
            Security
          </span>

        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="leading-[0.95] sm:leading-[0.92] lg:leading-[0.9]"
        >

          <span className="block text-[44px] sm:text-[68px] md:text-[88px] lg:text-[115px] font-light text-white">
            Autonomous,
          </span>

          <span className="block text-[44px] sm:text-[68px] md:text-[88px] lg:text-[115px] font-light text-[#716b66]">
            not uncontrolled.
          </span>

        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-10 sm:mt-14 lg:mt-20 max-w-[820px] text-base sm:text-lg lg:text-[24px] leading-[1.6] lg:leading-[1.7] text-[#7b746f]"
        >
          Your agents are powerful but constrained.
          Enterprise-grade security ensures they only
          do what you allow.
        </motion.p>

      </div>

    </section>
  );
}

export default SecuritySection;