import NetworkMap from "./NetworkMap";

function Infrastructure() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto grid max-w-[1700px] grid-cols-[2.2fr_1.08fr] gap-8 px-16">

        {/* LEFT CARD */}
        <div className="relative overflow-hidden border border-white/10 bg-[#050505]">

          <div className="relative z-10 p-14">

            <h2 className="text-[130px] font-light leading-none text-white">
              29
            </h2>

            <span className="-mt-4 block text-[54px] font-light text-gray-500">
              regions
            </span>

            <p className="mt-10 max-w-[520px] text-[21px] leading-[1.7] text-gray-500">
              Compute nodes distributed globally for
              maximum redundancy and minimum latency.
            </p>

          </div>

          {/* Animated Network */}
          <NetworkMap />

        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-8">

          <div className="border border-white/10 bg-[#050505] p-12">

            <h3 className="text-[52px] font-light leading-none text-white">
              99.99%
            </h3>

            <p className="mt-5 text-[22px] text-gray-500">
              Uptime SLA
            </p>

          </div>

          <div className="border border-white/10 bg-[#050505] p-12">

            <h3 className="text-[52px] font-light leading-none text-white">
              &lt;50ms
            </h3>

            <p className="mt-5 text-[22px] text-gray-500">
              Global latency
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Infrastructure;