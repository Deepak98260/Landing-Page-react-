import heroVideo from "../assets/video/bg-hero.mp4";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Purple Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[180px]"></div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1720px] flex-col justify-center px-12">
        
        {/* Badge */}
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px w-10 bg-gray-500"></div>

          <p className="font-mono text-[18px] tracking-wide text-gray-400">
            Autonomous AI agents for distributed computing
          </p>
        </div>

        {/* Heading */}
       
<h1 className="max-w-[980px] text-[96px] font-light leading-[0.95] tracking-[-4px] text-white">
  Distributed compute,
  <br />
  agents that{" "}
  <span className="bg-gradient-to-r from-pink-400 via-sky-400 to-yellow-300 bg-clip-text text-transparent">
    <TypeAnimation
      sequence={[
        "execute",
        1800,
        "scale",
        1800,
        "automate",
        1800,
        "delegate",
        1800,
      ]}
      speed={40}
      repeat={Infinity}
      cursor={false}
    />
  </span>
</h1>

        {/* Bottom Stats */}
        <div className="mt-24 flex gap-24">

          <div>
            <h2 className="text-6xl font-light text-white">3500+</h2>
            <p className="mt-2 text-gray-400">
              autonomous agents active
            </p>
          </div>

          <div>
            <h2 className="text-6xl font-light text-white">99.7%</h2>
            <p className="mt-2 text-gray-400">
              distributed uptime
            </p>
          </div>

          <div>
            <h2 className="text-6xl font-light text-white">&lt;50ms</h2>
            <p className="mt-2 text-gray-400">
              execution latency
            </p>
          </div>

        </div>

      </div>



    </section>
  );
}

export default Hero;