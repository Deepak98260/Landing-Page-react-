import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, Eye, FileCheck2 } from "lucide-react";

import isolated from "../assets/images/isolated.jpg";
import encrypted from "../assets/images/encrypted.jpg";
import audit from "../assets/images/audit.jpg";
import permissions from "../assets/images/permissions.jpg";

const items = [
  {
    title: "Isolated execution",
    description: "Each agent runs in its own secure sandbox.",
    image: isolated,
    icon: Shield,
  },
  {
    title: "Encrypted memory",
    description: "Data encrypted at rest and in transit.",
    image: encrypted,
    icon: Lock,
  },
  {
    title: "Full audit trails",
    description: "Every action logged and inspectable.",
    image: audit,
    icon: Eye,
  },
  {
    title: "Permission boundaries",
    description: "Principle of least privilege by design.",
    image: permissions,
    icon: FileCheck2,
  },
];

const badges = ["SOC 2", "ISO 27001", "HIPAA", "GDPR"];

function SecurityShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-[1700px] px-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* LEFT PANEL */}
          <div className="flex flex-col rounded-[28px] border border-white/10 bg-[#050505] p-14">
            <div>
              <p className="font-mono text-xs text-white/40">
                Active protection
              </p>
              <p className="mt-4 text-[56px] font-light leading-none text-white">
                0
              </p>
              <p className="mt-3 text-sm text-white/40">
                Security incidents this year
              </p>
            </div>

            {/* IMAGE - centered in remaining space, aligned with text column */}
            <div className="flex flex-1 items-center justify-center py-8">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={items[active].image}
                  alt={items[active].title}
                  initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.1, filter: "blur(12px)" }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="max-h-[220px] max-w-[220px] object-contain"
                  draggable={false}
                />
              </AnimatePresence>
            </div>

            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-md border border-white/10 px-3 py-1.5 font-mono text-[11px] text-white/40"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="flex flex-col gap-4">
            {items.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === active;

              return (
                <motion.div
                  key={item.title}
                  onMouseEnter={() => setActive(index)}
                  animate={{
                    backgroundColor: isActive
                      ? "rgba(255,255,255,0.04)"
                      : "rgba(255,255,255,0)",
                    borderColor: isActive
                      ? "rgba(255,255,255,0.25)"
                      : "rgba(255,255,255,0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-1 cursor-pointer items-start gap-4 rounded-2xl border p-6"
                >
                  <motion.div
                    animate={{
                      backgroundColor: isActive
                        ? "rgba(255,255,255,1)"
                        : "rgba(255,255,255,0)",
                      borderColor: isActive
                        ? "rgba(255,255,255,1)"
                        : "rgba(255,255,255,0.2)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border"
                  >
                    <Icon
                      size={18}
                      className={isActive ? "text-black" : "text-white"}
                    />
                  </motion.div>

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/40">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecurityShowcase;