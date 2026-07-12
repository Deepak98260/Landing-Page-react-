import treeImage from "../assets/images/tree-uAia6REvB137CQyHFCf0za3O6h2zKO.png";
function Process() {
  return (
    <section className="bg-black py-40 text-white">
      <div className="mx-auto flex max-w-[1700px] items-center justify-between px-16">

        {/* Left */}
        <div>

          {/* Badge */}
          <div className="mb-14 flex items-center gap-4">
            <div className="h-px w-12 bg-gray-600"></div>

            <p className="font-mono text-lg text-gray-500">
              Process
            </p>
          </div>

          {/* Heading */}
          <h2 className="leading-[0.9] tracking-[-5px]">

            <span className="block text-[130px] font-light text-white">
              Define.
            </span>

            <span className="block text-[130px] font-light text-[#353535]">
              Deploy.
            </span>

            <span className="block text-[130px] font-light text-[#222]">
              Scale.
            </span>

          </h2>

        </div>

      {/* Right Image */}
<div className="w-[700px]">
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