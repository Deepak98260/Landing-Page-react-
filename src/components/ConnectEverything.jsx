import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import connectionImage from "../assets/images/connection-KeJwWPQvn6l0a7C48tCARYtNEdC92H.png";

function ConnectEverything() {
    const sectionRef = useRef(null);

const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "end start"],
});

const imageY = useTransform(scrollYProgress, [0, 1], [120, -30]);

const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  return (
    <section
  ref={sectionRef}
  className="relative overflow-hidden bg-black text-white pt-28"
>

      <div className="mx-auto max-w-[1700px] px-16">

        {/* Top Label */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex items-center justify-center gap-6"
        >
          <div className="h-px w-16 bg-white/20" />

          <span className="font-mono text-sm uppercase tracking-[0.25em] text-gray-500">
            Integrations
          </span>

          <div className="h-px w-16 bg-white/20" />
        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center leading-[0.88]"
        >
          <span className="block text-[110px] xl:text-[145px] font-light text-white">
            Connect
          </span>

          <span className="block text-[110px] xl:text-[145px] font-light text-[#6d6662]">
            everything.
          </span>
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mx-auto mt-10 max-w-[850px] text-center text-[24px] leading-relaxed text-[#7a736d]"
        >
          Your agents connect to 100+ tools and services.
          They read, write, and act autonomously across your
          entire stack.
        </motion.p>

      </div>

      {/* IMAGE */}

     <motion.div
  style={{
    y: imageY,
    scale: imageScale,
  }}
  className="relative mt-20 w-full"
>
  {/* Pink Glow */}

  <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[170px]" />

  <img
    src={connectionImage}
    alt="Connection"
    draggable={false}
    className="relative z-10 w-full select-none object-cover"
  />
</motion.div>

    </section>
  );
}

export default ConnectEverything;