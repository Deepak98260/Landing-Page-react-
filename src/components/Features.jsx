import islandImage from "../assets/images/Upscaled Image (12)-ng3RrNnsPMJ5CrtOjcPTmhHg01W11q.png";
import FloatingOrb from "./FloatingOrb";
function Features() {
  return (
    <>
    <section className="bg-black py-40 text-white">
      <div className="mx-auto max-w-[1700px] px-16">

        {/* Top Badge */}
        <div className="mb-16 flex items-center gap-4">
          <div className="h-px w-12 bg-gray-500"></div>

          <p className="font-mono text-lg text-gray-500">
            Capabilities
          </p>
        </div>

        {/* Heading + Description */}
        <div className="flex items-start justify-between">

          {/* Left */}
          <div>
            <h2 className="text-[110px] xl:text-[125px] font-light leading-[0.88] tracking-[-4px]">

              <span className="text-white">
                Intelligent
              </span>

              <br />

              <span className="text-[#5e5954]">
                workers.
              </span>

            </h2>
          </div>

          {/* Right */}
          <div className="mt-20 max-w-[520px]">

            <p className="text-[24px] leading-[1.5] text-gray-500">
              Deploy autonomous AI agents that execute
              complex tasks across distributed
              infrastructure. No supervision required.
            </p>

          </div>

        </div>

      </div>
    </section>

    <section className="bg-black px-16 pb-32">
  <div className="mx-auto flex h-[650px] max-w-[1700px] overflow-hidden border border-white/10">

    {/* Left */}
    <div className="flex w-1/2 flex-col justify-center px-16">

      <p className="mb-10 text-lg text-gray-500">
        01
      </p>

      <h2 className="text-[52px] font-light text-white">
        Autonomous Execution
      </h2>

      <p className="mt-8 max-w-[500px] text-[18px] leading-[1.8] text-gray-500">
        Deploy AI agents that work independently.
        They analyze, decide, and execute complex
        multi-step tasks without human intervention.
      </p>

      <div className="mt-20">
        <h1 className="text-[70px] font-light text-white">
          99.7%
        </h1>

        <p className="mt-2 font-mono text-xl text-gray-500">
          task completion
        </p>
      </div>

    </div>

   {/* Right */}
<div className="relative w-1/2 overflow-hidden">

  <img
    src={islandImage}
    alt=""
    className="h-full w-full object-cover"
  />

  <div className="absolute inset-0 z-20 pointer-events-none">
    <FloatingOrb size={12} top="12%" left="15%" delay={0} />
    <FloatingOrb size={18} top="35%" left="60%" delay={1} />
    <FloatingOrb size={10} top="70%" left="40%" delay={2} />
    <FloatingOrb size={22} top="25%" left="80%" delay={3} />
    <FloatingOrb size={14} top="82%" left="72%" delay={4} />
    <FloatingOrb size={8} top="48%" left="22%" delay={5} />
    <FloatingOrb size={16} top="60%" left="88%" delay={6} />
  </div>

</div>

  </div>
</section>
</>
  );
  
}

export default Features;