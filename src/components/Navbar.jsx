import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <motion.header
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    duration: 0.7,
    type: "spring",
    stiffness: 120,
    damping: 18,
  }}
  className="fixed top-0 left-0 z-50 flex w-full justify-center pt-5"
>
     <motion.div
  animate={{
  width: scrolled ? "78%" : "100%",
  y: scrolled ? 8 : 0,
  scale: scrolled ? 0.94 : 1,
}}
 transition={{
  type: "spring",
  stiffness: 120,
  damping: 20,
  mass: 0.8,
}}
  
className={`flex items-center justify-between transition-all duration-500 ease-in-out
${
  scrolled
    ? "h-14 w-[78%] max-w-[1250px] rounded-full border border-white/10 bg-black/60 px-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
    : "h-24 w-full max-w-[1720px] px-12"
}`}
>
        {/* Logo */}
        <div className="flex items-start gap-1">
          <h1
            className={`font-light tracking-tight text-white transition-all duration-500 ${
              scrolled ? "text-[20px]" : "text-[24px]"
            }`}
          >
            COMPUTE
          </h1>

          <span
            className={`text-gray-400 transition-all duration-500 ${
              scrolled ? "mt-0 text-[10px]" : "mt-1 text-[12px]"
            }`}
          >
            ™
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-16 text-[18px] font-light text-gray-300">
          <a href="#" className="transition hover:text-white">
            Capabilities
          </a>

          <a href="#" className="transition hover:text-white">
            Process
          </a>

          <a href="#" className="transition hover:text-white">
            Infra
          </a>

          <a href="#" className="transition hover:text-white">
            Integrations
          </a>

          <a href="#" className="transition hover:text-white">
            Security
          </a>
        </nav>
                {/* Right Side */}
        <div className="hidden lg:flex items-center gap-8">
          <button className="text-[18px] text-white transition hover:text-gray-300">
            Sign in
          </button>

          <button
            className={`rounded-full bg-white font-medium text-black transition-all duration-500 hover:scale-105 ${
              scrolled
                ? "px-6 py-2 text-[15px]"
                : "px-8 py-3 text-[18px]"
            }`}
          >
            Deploy agent
          </button>
        </div>

        {/* Mobile Menu */}
        <button className="text-white lg:hidden">
          <HiOutlineMenuAlt3
            size={scrolled ? 28 : 34}
            className="transition-all duration-500"
          />
        </button>
    </motion.div>
    </motion.header>
  );
}

export default Navbar;