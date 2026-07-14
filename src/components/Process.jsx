import treeImage from "../assets/images/tree-uAia6REvB137CQyHFCf0za3O6h2zKO.png";
function Process() {
  return (
    <section className="bg-black py-16 sm:py-20 text-white">
      <div className="mx-auto flex max-w-[1700px] flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0 px-6 sm:px-10 lg:px-16">

        {/* Left */}
        <div>

          {/* Badge */}
          <div className="mb-8 sm:mb-10 lg:mb-14 flex items-center gap-3 sm:gap-4">
            <div className="h-px w-8 sm:w-10 lg:w-12 bg-gray-600"></div>

            <p className="font-mono text-sm sm:text-base lg:text-lg text-gray-500">
              Process
            </p>
          </div>

          {/* Heading */}
          <h2 className="leading-[0.9] tracking-[-2px] sm:tracking-[-3px] lg:tracking-[-5px]">

            <span className="block text-[56px] sm:text-[80px] md:text-[104px] lg:text-[130px] font-light text-white">
              Define.
            </span>

            <span className="block text-[56px] sm:text-[80px] md:text-[104px] lg:text-[130px] font-light text-[#353535]">
              Deploy.
            </span>

            <span className="block text-[56px] sm:text-[80px] md:text-[104px] lg:text-[130px] font-light text-[#222]">
              Scale.
            </span>

          </h2>

        </div>

      {/* Right Image */}
<div className="w-[220px] sm:w-[320px] md:w-[450px] lg:w-[700px]">
  <img
    src={treeImage}
    alt="Tree"
    className="w-full object-contain"
  />
</div>

      </div>
    </section>
  );
}

export default Process;