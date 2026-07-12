import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ConnectionLines from "./ConnectionLines";

function ProcessSteps() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const card1 = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0.85]);
  const card2 = useTransform(scrollYProgress, [0.25, 0.5, 0.65], [0.85, 1, 0.85]);
  const card3 = useTransform(scrollYProgress, [0.6, 0.85, 1], [0.85, 1, 1]);

  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 0.45]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.5, 0.7], [0.45, 1, 0.45]);
  const opacity3 = useTransform(scrollYProgress, [0.65, 0.9, 1], [0.45, 1, 1]);

  

  return (
    <section
      ref={ref}
    className="relative -mt-10 bg-black pb-32"
    >
     <div className="relative mx-auto flex max-w-[1700px] gap-8 px-16">

  <ConnectionLines />

  {/* Card 1 */}

  {/* Card 2 */}

  {/* Card 3 */}


        {/* Card 1 */}
       <motion.div
  style={{
    scale: card1,
    opacity: opacity1,
  }}
          whileHover={{ y: -8 }}
          className="group relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-[#080808] p-10"
        >
          <div className="mb-10 flex items-center justify-between">

            <span className="font-mono text-pink-400">
              01
            </span>

            <div className="h-px w-44 bg-pink-500"></div>

          </div>

          <h3 className="text-5xl font-light text-white">
            Define
            <br />
            your agent
          </h3>

          <p className="mt-8 text-lg leading-8 text-gray-500">
            Configure the behaviour, tools,
            permissions and objectives of
            your autonomous worker.
          </p>

          <div className="absolute bottom-0 left-0 h-1 w-full bg-pink-500"></div>

        </motion.div>

        {/* Card 2 */}
        <motion.div
  style={{
    scale: card2,
    opacity: opacity2,
  }}          whileHover={{ y: -8 }}
          className="group relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-[#080808] p-10"
        >
          <div className="mb-10 flex items-center justify-between">

            <span className="font-mono text-gray-600">
              02
            </span>

            <div className="h-px w-44 bg-white/10"></div>

          </div>

          <h3 className="text-5xl font-light text-gray-500">
            Deploy
            <br />
            instantly
          </h3>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Launch agents across your
            distributed infrastructure with
            one click.
          </p>

        </motion.div>

        {/* Card 3 */}
        <motion.div
  style={{
    scale: card3,
    opacity: opacity3,
  }}
          whileHover={{ y: -8 }}
          className="group relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-[#080808] p-10"
        >
          <div className="mb-10 flex items-center justify-between">

            <span className="font-mono text-gray-600">
              03
            </span>

            <div className="h-px w-44 bg-white/10"></div>

          </div>

          <h3 className="text-5xl font-light text-gray-500">
            Scale
            <br />
            automatically
          </h3>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Monitor performance and scale
            agents automatically based on
            workload.
          </p>

        </motion.div>
</div>
      
    </section>
    
  );
}

export default ProcessSteps;