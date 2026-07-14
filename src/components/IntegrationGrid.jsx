import { motion } from "framer-motion";

const integrations = [
  { name: "OpenAI", tag: "LLM" },
  { name: "Anthropic", tag: "LLM" },
  { name: "Slack", tag: "Comms" },
  { name: "GitHub", tag: "Code" },

  { name: "Jira", tag: "PM" },
  { name: "AWS S3", tag: "Storage" },
  { name: "Google Drive", tag: "Docs" },
  { name: "Salesforce", tag: "CRM" },

  { name: "HubSpot", tag: "Marketing" },
  { name: "Zapier", tag: "Automation" },
  { name: "Snowflake", tag: "Data" },
  { name: "Stripe", tag: "Payments" },
];

function IntegrationGrid() {
  return (
    <section className="relative bg-black py-16 sm:py-20 lg:py-24 text-white">
      <div className="mx-auto max-w-[1700px] px-6 sm:px-10 lg:px-16">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">

          {integrations.map((item, index) => (
                        <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                h-[135px]
                sm:h-[150px]
                lg:h-[165px]
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#050505]
                px-4
                sm:px-5
                lg:px-7
                py-4
                sm:py-5
                lg:py-6
                transition-all
                duration-500
                hover:border-white/20
              "
            >
              {/* Hover Glow */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  bg-gradient-to-br
                  from-white/10
                  via-transparent
                  to-transparent
                "
              />

              {/* Tag */}

              <div
                className="
                  absolute
                  right-3
                  sm:right-4
                  lg:right-5
                  top-3
                  sm:top-4
                  lg:top-5
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-2
                  sm:px-2.5
                  lg:px-3
                  py-1
                  text-[8px]
                  sm:text-[9px]
                  uppercase
                  tracking-[0.18em]
                  font-mono
                  text-gray-500
                "
              >
                {item.tag}
              </div>

              {/* Logo Placeholder */}

              <div
                className="
                  flex
                  h-8
                  w-8
                  sm:h-9
                  sm:w-9
                  lg:h-10
                  lg:w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  text-sm
                  font-semibold
                  text-white/80
                "
              >
                {item.name.charAt(0)}
              </div>

              {/* Name */}

              <div className="absolute left-4 sm:left-5 lg:left-7 bottom-4 sm:bottom-5 lg:bottom-6">

                <h3
                  className="
                    text-[15px]
                    sm:text-[16px]
                    lg:text-[18px]
                    font-light
                    tracking-tight
                    text-white
                    transition-all
                    duration-300
                    group-hover:text-pink-300
                  "
                >
                  {item.name}
                </h3>

              </div>

              {/* Bottom Line */}

              <motion.div
                className="absolute bottom-0 left-0 h-[1px] bg-pink-400"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                }}
              />

            </motion.div>
          ))}

        </div>

{/* Bottom Stats */}

<div className="mt-12 sm:mt-16 lg:mt-20 border-t border-white/10 pt-8 sm:pt-10 lg:pt-12">

  <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-0 lg:justify-between">

    <div className="flex flex-wrap items-end gap-8 sm:gap-12 lg:gap-20">

      <div className="flex items-end gap-3">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-light text-white">100+</h2>
        <p className="mb-2 text-sm sm:text-base lg:text-[18px] text-[#7b746f]">
          Integrations
        </p>
      </div>

      <div className="flex items-end gap-3">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-light text-white">OAuth</h2>
        <p className="mb-2 text-sm sm:text-base lg:text-[18px] text-[#7b746f]">
          Auth built-in
        </p>
      </div>

      <div className="flex items-end gap-3">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-light text-white">
          Webhooks
        </h2>
        <p className="mb-2 text-sm sm:text-base lg:text-[18px] text-[#7b746f]">
          Real-time sync
        </p>
      </div>

    </div>

    <button
      className="
      self-start
      lg:self-auto
      font-mono
      text-sm
      sm:text-base
      lg:text-[18px]
      tracking-[0.15em]
      text-[#7b746f]
      transition
      hover:text-white
      "
    >
      View all integrations →
    </button>

  </div>

</div>

      </div>

    </section>
  );
}

export default IntegrationGrid;