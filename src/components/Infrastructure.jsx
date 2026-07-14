import NetworkMap from "./NetworkMap";

function Infrastructure() {
  return (
    <section className="bg-black py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 lg:grid-cols-[2.2fr_1.08fr] gap-6 sm:gap-7 lg:gap-8 px-6 sm:px-10 lg:px-16">

        {/* LEFT CARD */}
        <div className="relative overflow-hidden border border-white/10 bg-[#050505]">

          <div className="relative z-10 p-6 sm:p-10 lg:p-14">

            <h2 className="text-[64px] sm:text-[92px] md:text-[110px] lg:text-[130px] font-light leading-none text-white">
              29
            </h2>

            <span className="-mt-2 sm:-mt-3 lg:-mt-4 block text-[28px] sm:text-[40px] lg:text-[54px] font-light text-gray-500">
              regions
            </span>

            <p className="mt-6 sm:mt-8 lg:mt-10 max-w-[520px] text-sm sm:text-base lg:text-[21px] leading-[1.6] lg:leading-[1.7] text-gray-500">
              Compute nodes distributed globally for
              maximum redundancy and minimum latency.
            </p>

          </div>

          {/* Animated Network */}
          <NetworkMap />

        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8">

          <div className="border border-white/10 bg-[#050505] p-6 sm:p-8 lg:p-12">

            <h3 className="text-[32px] sm:text-[42px] lg:text-[52px] font-light leading-none text-white">
              99.99%
            </h3>

            <p className="mt-3 sm:mt-4 lg:mt-5 text-base sm:text-lg lg:text-[22px] text-gray-500">
              Uptime SLA
            </p>

          </div>

          <div className="border border-white/10 bg-[#050505] p-6 sm:p-8 lg:p-12">

            <h3 className="text-[32px] sm:text-[42px] lg:text-[52px] font-light leading-none text-white">
              &lt;50ms
            </h3>

            <p className="mt-3 sm:mt-4 lg:mt-5 text-base sm:text-lg lg:text-[22px] text-gray-500">
              Global latency
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Infrastructure;