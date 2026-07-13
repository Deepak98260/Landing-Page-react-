import { motion } from "framer-motion";

import footerImage from "../assets/images/Upscaled Image (10)-UnDKstODkIENp5xqTYUEpt0Sm8tNOw.png";

const footerLinks = {
  Product: ["Agent capabilities", "How it works", "Pricing", "Integrations"],
  Developers: ["Documentation", "Agent SDK", "API Reference", "Status"],
  Company: [
    { label: "About" },
    { label: "Blog" },
    { label: "Careers", badge: "Hiring" },
    { label: "Contact" },
  ],
  Legal: ["Privacy", "Terms", "Security"],
};

const socials = ["Twitter", "GitHub", "LinkedIn"];

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black">
      {/* TOP IMAGE - fades into black */}
      <div
        className="relative h-[300px] w-full"
        style={{
          maskImage:
            "linear-gradient(to bottom, black 40%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      >
        <img
          src={footerImage}
          alt="Footer landscape"
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div className="mx-auto max-w-[1700px] px-16 pb-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-white">
                COMPUTE
              </span>
              <span className="text-xs text-white/40">TM</span>
            </div>

            <p className="mt-6 max-w-[280px] text-white/40">
              Autonomous AI agents for distributed computing. Delegate
              complex tasks to intelligent workers.
            </p>

            <div className="mt-8 flex items-center gap-6">
              {socials.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-white/40 transition-colors hover:text-white"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>

          {/* LINK COLUMNS */}
          {Object.entries(footerLinks).map(([title, links], colIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: colIndex * 0.1 }}
            >
              <h4 className="font-semibold text-white">{title}</h4>
              <ul className="mt-6 space-y-4">
                {links.map((link) => {
                  const label = typeof link === "string" ? link : link.label;
                  const badge = typeof link === "string" ? null : link.badge;
                  return (
                    <li key={label}>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-white/40 transition-colors hover:text-white"
                      >
                        {label}
                        {badge && (
                          <span className="rounded-full bg-[#ece9e2] px-2.5 py-0.5 text-xs font-medium text-black">
                            {badge}
                          </span>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/30">
            © 2026 COMPUTE. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-2 w-2 rounded-full bg-pink-500"
            />
            <span className="text-sm text-white/40">
              All agents operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;