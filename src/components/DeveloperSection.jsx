import devSdkImage from "../assets/images/Upscaled Image (13)-OQ2DiR3ElVsUg8kTvTL1kC5A3Q6maM.png";

const features = [
  {
    title: "TypeScript native",
    description: "Full type safety for agent configs and responses.",
  },
  {
    title: "Streaming results",
    description: "Watch your agents think and act in real-time.",
  },
  {
    title: "Multi-model support",
    description: "OpenAI, Anthropic, Mistral, or bring your own.",
  },
  {
    title: "Local debugging",
    description: "Test agents locally before deploying to cloud.",
  },
];

function  DeveloperSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-32">
      {/* BACKGROUND IMAGE - full bleed right side, fading into black */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[60%]"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 25%, black 45%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 25%, black 45%)",
        }}
      >
        <img
          src={devSdkImage}
          alt="Developer SDK"
          className="h-full w-full object-cover object-left"
          draggable={false}
        />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto max-w-[1700px] px-6 sm:px-10 lg:px-16">
        <div className="max-w-[900px]">
          {/* LABEL */}
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-white/30" />
            <span className="font-mono text-xs tracking-wide text-white/40">
              Developer SDK
            </span>
          </div>

          {/* HEADING */}
          <h2 className="mt-6 sm:mt-7 lg:mt-8 text-[36px] font-light leading-[0.95] tracking-tight text-white sm:text-[52px] md:text-[64px] lg:text-[80px] xl:text-[96px]">
            Code your agents.
            <br />
            <span className="text-white/30">Or let them code.</span>
          </h2>

          {/* SUBTEXT */}
          <p className="mt-6 sm:mt-8 lg:mt-10 max-w-[560px] text-base sm:text-lg leading-relaxed text-white/40">
            A powerful SDK for building, deploying, and orchestrating AI
            agents. Define behaviors in code or natural language.
          </p>

          {/* FEATURE GRID */}
          <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 gap-x-10 sm:gap-x-16 gap-y-8 sm:gap-y-10 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title}>
                <h3 className="text-base font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-white/40">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeveloperSection;