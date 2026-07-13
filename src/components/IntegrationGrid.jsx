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
    <section className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-[1700px] px-16">

        <div className="grid grid-cols-4 gap-5">

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
                h-[165px]
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#050505]
                px-7
                py-6
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
                  right-5
                  top-5
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-3
                  py-1
                  text-[9px]
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
                  h-10
                  w-10
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

              <div className="absolute left-7 bottom-6">

                <h3
                  className="
                    text-[18px]
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

<div className="mt-20 border-t border-white/10 pt-12">

  <div className="flex items-center justify-between">

    <div className="flex items-center gap-20">

      <div className="flex items-end gap-3">
        <h2 className="text-[48px] font-light text-white">100+</h2>
        <p className="mb-2 text-[18px] text-[#7b746f]">
          Integrations
        </p>
      </div>

      <div className="flex items-end gap-3">
        <h2 className="text-[48px] font-light text-white">OAuth</h2>
        <p className="mb-2 text-[18px] text-[#7b746f]">
          Auth built-in
        </p>
      </div>

      <div className="flex items-end gap-3">
        <h2 className="text-[48px] font-light text-white">
          Webhooks
        </h2>
        <p className="mb-2 text-[18px] text-[#7b746f]">
          Real-time sync
        </p>
      </div>

    </div>

    <button
      className="
      font-mono
      text-[18px]
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