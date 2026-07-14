import islandImage from "../assets/images/Upscaled Image (12)-ng3RrNnsPMJ5CrtOjcPTmhHg01W11q.png";
import FloatingOrb from "./FloatingOrb";
function Features() {
  return (
    <>
    <section className="bg-black py-20 sm:py-28 md:py-32 lg:py-40 text-white">
      <div className="mx-auto max-w-[1700px] px-6 sm:px-8 md:px-10 lg:px-16">

        {/* Top Badge */}
        <div className="mb-8 sm:mb-12 lg:mb-16 flex items-center gap-3 sm:gap-4">
          <div className="h-px w-8 sm:w-10 lg:w-12 bg-gray-500"></div>

          <p className="font-mono text-sm sm:text-base lg:text-lg text-gray-500">
            Capabilities
          </p>
        </div>

        {/* Heading + Description */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-0">

          {/* Left */}
          <div>
            <h2 className="text-[44px] sm:text-[64px] md:text-[80px] lg:text-[110px] xl:text-[125px] font-light leading-[0.95] sm:leading-[0.9] lg:leading-[0.88] tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-4px]">

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
          <div className="mt-0 lg:mt-20 max-w-[520px]">

            <p className="text-base sm:text-lg md:text-xl lg:text-[24px] leading-[1.5] text-gray-500">
              Deploy autonomous AI agents that execute
              complex tasks across distributed
              infrastructure. No supervision required.
            </p>

          </div>

        </div>

      </div>
    </section>

    <section className="bg-black px-6 sm:px-8 md:px-10 lg:px-16 pb-16 sm:pb-24 lg:pb-32">
  <div className="mx-auto flex flex-col lg:flex-row h-auto lg:h-[650px] max-w-[1700px] overflow-hidden border border-white/10">

    {/* Left */}
    <div className="flex w-full lg:w-1/2 flex-col justify-center px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-0">

      <p className="mb-6 sm:mb-8 lg:mb-10 text-sm sm:text-base lg:text-lg text-gray-500">
        01
      </p>

      <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-light text-white">
        Autonomous Execution
      </h2>

      <p className="mt-4 sm:mt-6 lg:mt-8 max-w-[500px] text-sm sm:text-base lg:text-[18px] leading-[1.7] sm:leading-[1.8] text-gray-500">
        Deploy AI agents that work independently.
        They analyze, decide, and execute complex
        multi-step tasks without human intervention.
      </p>

      <div className="mt-10 sm:mt-14 lg:mt-20">
        <h1 className="text-[40px] sm:text-[52px] md:text-[60px] lg:text-[70px] font-light text-white">
          99.7%
        </h1>

        <p className="mt-2 font-mono text-base sm:text-lg lg:text-xl text-gray-500">
          task completion
        </p>
      </div>

    </div>

   {/* Right */}
<div className="relative w-full h-[280px] sm:h-[360px] md:h-[440px] lg:h-auto lg:w-1/2 overflow-hidden">

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