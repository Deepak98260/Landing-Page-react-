import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import bridge from "../assets/images/bridge.png";

function DelegateCTASection() {
  return (
    <section className="bg-black px-4 sm:px-6 lg:px-8 py-6 sm:py-7 lg:py-8">
      <div className="relative mx-auto max-w-[1700px] overflow-hidden rounded-2xl border border-white/15">
        {/* decorative corner accent */}
        <div className="absolute right-6 sm:right-8 lg:right-10 top-0 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 border border-white/15" />

        <div className="grid grid-cols-1 items-end lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="px-6 sm:px-10 lg:px-16 py-14 sm:py-18 lg:py-24"
          >
            <h2 className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[64px] font-light leading-[1.1] sm:leading-[1.05] text-white">
              Ready to delegate
              <br />
              to AI agents?
            </h2>

            <p className="mt-6 sm:mt-7 lg:mt-8 max-w-[480px] text-base sm:text-lg leading-relaxed text-white/40">
              Join teams automating complex workflows with COMPUTE agents.
              Deploy your first agent in minutes.
            </p>

            <div className="mt-8 sm:mt-9 lg:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-full bg-[#ece9e2] px-5 sm:px-6 lg:px-7 py-3 sm:py-3.5 lg:py-4 font-medium text-black transition-colors hover:bg-white"
              >
                Deploy your first agent
                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full border border-white/25 px-5 sm:px-6 lg:px-7 py-3 sm:py-3.5 lg:py-4 font-medium text-white transition-colors hover:bg-white/5"
              >
                Book a demo
              </motion.button>
            </div>

            <p className="mt-8 sm:mt-9 lg:mt-10 font-mono text-xs text-white/30">
              1,000 free tasks with COMPUTE
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <motion.img
              src={bridge}
              alt="AI agent bridge"
              animate={{ opacity: [0.9, 1, 0.9] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[620px] object-contain object-bottom"
              draggable={false}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default DelegateCTASection;