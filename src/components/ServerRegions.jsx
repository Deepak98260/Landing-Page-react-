import { motion } from "framer-motion";

const regions = [
  {
    name: "North America",
    nodes: "12 nodes",
    active: false,
  },
  {
    name: "Europe",
    nodes: "8 nodes",
    active: false,
  },
  {
    name: "Asia Pacific",
    nodes: "6 nodes",
    active: true,
  },
  {
    name: "South America",
    nodes: "3 nodes",
    active: false,
  },
];

function ServerRegions() {
  return (
    <section className="bg-black pt-8 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 px-6 sm:px-10 lg:px-16">

        {regions.map((region, index) => (
          <motion.div
            key={region.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
              borderColor: "#ff83df",
            }}
            className="group relative overflow-hidden border border-white/10 bg-[#050505] p-5 sm:p-6 transition-colors"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,120,220,0.12),transparent_70%)]" />
            </div>

            <div className="relative z-10">
              <div className="mb-5 sm:mb-7 flex items-center gap-3">
                <div
                  className={`h-3 w-3 rounded-full ${
                    region.active ? "bg-pink-400" : "bg-gray-700"
                  }`}
                />

                <span className="font-mono text-xs uppercase tracking-[0.25em] text-gray-500">
                  Operational
                </span>
              </div>

              <h3 className="text-[26px] sm:text-[30px] lg:text-[38px] font-light text-white">
                {region.name}
              </h3>

              <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-[22px] text-gray-500">
                {region.nodes}
              </p>
            </div>

            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-pink-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: index * 0.2,
              }}
            />
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default ServerRegions;