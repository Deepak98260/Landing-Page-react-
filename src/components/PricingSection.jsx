import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

import whale from "../assets/images/whale.png";

const plans = [
  {
    number: "01",
    name: "Explorer",
    description: "For tinkering and small automations",
    price: "$0",
    period: "/month",
    billed: null,
    features: [
      "3 concurrent agents",
      "1,000 tasks/month",
      "Community support",
      "Basic logging",
      "Public integrations",
    ],
    cta: "Start free",
    highlighted: false,
  },
  {
    number: "02",
    name: "Builder",
    description: "For teams shipping with agents",
    price: "$65",
    period: "/month",
    billed: "billed annually",
    features: [
      "25 concurrent agents",
      "50,000 tasks/month",
      "Priority support",
      "Full audit trails",
      "Private integrations",
      "Team workspaces",
      "Custom agent roles",
    ],
    cta: "Start trial",
    highlighted: true,
  },
  {
    number: "03",
    name: "Scale",
    description: "For agent-first organizations",
    price: "Custom",
    period: null,
    billed: null,
    features: [
      "Unlimited agents",
      "Unlimited tasks",
      "24/7 dedicated support",
      "On-premise deployment",
      "SLA guarantee",
      "Custom LLM routing",
      "Advanced security",
      "Dedicated compute",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1700px] px-6 sm:px-10 lg:px-16">
        {/* HERO */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-white/30" />
              <span className="font-mono text-xs tracking-wide text-white/40">
                Pricing
              </span>
            </div>

            <h2 className="mt-6 sm:mt-7 lg:mt-8 text-[44px] sm:text-[58px] md:text-[74px] lg:text-[96px] font-light leading-[0.95]">
              <span className="text-white">Pay for</span>
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.85)" }}
              >
                results.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <motion.img
              src={whale}
              alt="Whale"
              animate={{ y: [0, -16, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[520px] object-contain"
              draggable={false}
            />
          </motion.div>
        </div>

        {/* PRICING CARDS */}
        <div className="mt-16 sm:mt-24 lg:mt-32 grid grid-cols-1 gap-6 sm:gap-7 lg:gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col ${
                plan.highlighted
                  ? "rounded-2xl border border-white/25 bg-white/[0.02] px-6 sm:px-8 lg:px-10 py-10 sm:py-11 lg:py-12 lg:-mt-6"
                  : "border-t border-white/10 px-6 sm:px-8 lg:px-10 py-10 sm:py-11 lg:py-12"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-md bg-[#ece9e2] px-4 py-2 text-xs font-semibold tracking-wide text-black">
                  ⚡ MOST POPULAR
                </span>
              )}

              <p className="font-mono text-xs text-white/30">{plan.number}</p>
              <h3 className="mt-3 text-2xl sm:text-3xl font-medium text-white">
                {plan.name}
              </h3>
              <p className="mt-2 text-white/40">{plan.description}</p>

              <div className="mt-6 sm:mt-7 lg:mt-8 border-t border-white/10 pt-6 sm:pt-7 lg:pt-8">
                <div className="flex items-end gap-2">
                  <span className="text-4xl sm:text-5xl font-medium text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="pb-1 text-white/40">{plan.period}</span>
                  )}
                </div>
                {plan.billed && (
                  <p className="mt-2 font-mono text-xs text-white/30">
                    {plan.billed}
                  </p>
                )}
              </div>

              <ul className="mt-6 sm:mt-7 lg:mt-8 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check
                      size={16}
                      className="flex-shrink-0 text-pink-500"
                    />
                    <span className="text-white/50">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 sm:mt-9 lg:mt-10 flex items-center justify-center gap-2 rounded-lg border py-3.5 sm:py-4 font-medium transition-colors ${
                  plan.highlighted
                    ? "border-transparent bg-[#ece9e2] text-black hover:bg-white"
                    : "border-white/15 text-white hover:bg-white/5"
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;