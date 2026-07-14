import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Our agents handle 80% of our customer support tickets autonomously. The ROI was immediate.",
    name: "Sarah Chen",
    role: "VP Engineering, Meridian Labs",
    initial: "S",
    statValue: "80%",
    statLabel: "Faster deployment",
    company: "Meridian Labs",
  },
  {
    quote:
      "We deployed research agents that work 24/7. They surface insights we'd never find manually.",
    name: "Marcus Webb",
    role: "Head of Research, Flux Systems",
    initial: "M",
    statValue: "10x",
    statLabel: "Research output",
    company: "Flux Systems",
  },
  {
    quote:
      "The multi-agent orchestration is incredible. Complex workflows that took weeks now run in hours.",
    name: "Priya Nair",
    role: "Director of Support, Beacon AI",
    initial: "P",
    statValue: "40X",
    statLabel: "Tickets automated",
    company: "Beacon AI",
  },
  {
    quote:
      "Security was our biggest concern. The sandboxing and audit trails gave us full confidence.",
    name: "Daniel Ortiz",
    role: "Data Lead, Prism Analytics",
    initial: "D",
    statValue: "0",
    statLabel: "Pipeline throughput",
    company: "Prism Analytics",
  },
];

function TestimonialsSection() {
  const [active, setActive] = useState(1);

  const current = testimonials[active];

  const goPrev = () =>
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const goNext = () =>
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="bg-[#ece9e2] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1700px] px-6 sm:px-10 lg:px-16">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 sm:gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-black/30" />
              <span className="font-mono text-xs tracking-wide text-black/40">
                Testimonials
              </span>
            </div>
            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl font-medium text-black">
              Trusted by teams{" "}
              <span className="text-black/35">worldwide.</span>
            </h2>
          </div>

          {/* ARROWS */}
          <div className="flex gap-3">
            <button
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-md border border-black/15 text-black transition-colors hover:bg-black/5"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={goNext}
              aria-label="Next testimonial"
              className="flex h-11 w-11 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-md border border-black/15 text-black transition-colors hover:bg-black/5"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* BODY */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 gap-10 sm:gap-12 lg:gap-16 lg:grid-cols-[1.4fr_1fr]">
          {/* LEFT: QUOTE */}
          <div>
            <span className="font-serif text-6xl sm:text-7xl lg:text-8xl leading-none text-black/10">
              "
            </span>
            <p className="-mt-6 sm:-mt-8 lg:-mt-10 text-2xl sm:text-3xl lg:text-4xl leading-tight text-black">
              {current.quote}
            </p>

            <div className="mt-8 sm:mt-10 flex items-center gap-4">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black/10 text-lg font-medium text-black/60">
                {current.initial}
              </div>
              <div>
                <p className="font-semibold text-black">{current.name}</p>
                <p className="text-sm text-black/45">{current.role}</p>
              </div>
            </div>
          </div>

          {/* RIGHT: STAT + COMPANIES */}
          <div>
            <div className="flex h-[200px] sm:h-[240px] lg:h-[280px] flex-col justify-center rounded-lg border border-black/10 bg-[#dedad2] px-6 sm:px-8 lg:px-10">
              <p className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-black">
                {current.statValue}
              </p>
              <p className="mt-3 text-black/45">{current.statLabel}</p>
            </div>

            {/* PROGRESS BAR */}
            <div className="mt-6 flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`h-[3px] flex-1 rounded-full transition-colors ${
                    index === active ? "bg-black" : "bg-black/15"
                  }`}
                />
              ))}
            </div>

            <div className="mt-8 border-t border-black/10" />

            {/* FEATURED COMPANIES */}
            <p className="mt-8 font-mono text-xs tracking-wide text-black/35">
              FEATURED COMPANIES
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {testimonials.map((t, index) => {
                const isActive = index === active;
                return (
                  <button
                    key={t.company}
                    onClick={() => setActive(index)}
                    className={`rounded-md border px-4 sm:px-5 py-2.5 sm:py-3 text-sm transition-colors ${
                      isActive
                        ? "border-black text-black"
                        : "border-black/15 text-black/35 hover:border-black/30"
                    }`}
                  >
                    {t.company}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;