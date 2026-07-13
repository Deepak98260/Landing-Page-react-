import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import bridge from "../assets/images/bridge.png";

function DelegateCTASection() {
  return (
    <section className="bg-black px-8 py-8">
      <div className="relative mx-auto max-w-[1700px] overflow-hidden rounded-2xl border border-white/15">
        {/* decorative corner accent */}
        <div className="absolute right-10 top-0 h-24 w-24 border border-white/15" />

        <div className="grid grid-cols-1 items-end lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="px-16 py-24"
          >
            <h2 className="text-[56px] font-light leading-[1.05] text-white sm:text-[64px]">
              Ready to delegate
              <br />
              to AI agents?
            </h2>

            <p className="mt-8 max-w-[480px] text-lg leading-relaxed text-white/40">
              Join teams automating complex workflows with COMPUTE agents.
              Deploy your first agent in minutes.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-full bg-[#ece9e2] px-7 py-4 font-medium text-black transition-colors hover:bg-white"
              >
                Deploy your first agent
                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full border border-white/25 px-7 py-4 font-medium text-white transition-colors hover:bg-white/5"
              >
                Book a demo
              </motion.button>
            </div>

            <p className="mt-10 font-mono text-xs text-white/30">
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
              className="w-full max-w-[620px] object-contain object-bottom"
              draggable={false}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default DelegateCTASection;