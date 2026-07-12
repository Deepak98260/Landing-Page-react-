import { motion } from "framer-motion";

function NetworkMap() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        viewBox="0 0 1500 700"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="network"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#ff82df" />
            <stop offset="100%" stopColor="#b96dff" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ===== Base Network ===== */}

<path
  id="line1"
  d="M80 90 H350 L500 160 H780 L980 90 H1420"
  stroke="url(#network)"
  strokeWidth="1.2"
  opacity="0.25"
  fill="none"
/>

<path
  id="line2"
  d="M80 210 H280 L470 300 H720 L980 210 H1420"
  stroke="url(#network)"
  strokeWidth="1.2"
  opacity="0.25"
  fill="none"
/>

<path
  id="line3"
  d="M80 420 H390 L620 520 H930 L1160 420 H1420"
  stroke="url(#network)"
  strokeWidth="1.2"
  opacity="0.25"
  fill="none"
/>

<path
  id="v1"
  d="M350 90 V210"
  stroke="url(#network)"
  strokeWidth="1.2"
  opacity="0.25"
  fill="none"
/>

<path
  id="v2"
  d="M780 90 V420"
  stroke="url(#network)"
  strokeWidth="1.2"
  opacity="0.25"
  fill="none"
/>

<path
  id="v3"
  d="M980 210 V520"
  stroke="url(#network)"
  strokeWidth="1.2"
  opacity="0.25"
  fill="none"
/>

<path
  id="d1"
  d="M500 160 L720 300"
  stroke="url(#network)"
  strokeWidth="1.2"
  opacity="0.25"
  fill="none"
/>

<path
  id="d2"
  d="M980 90 L1160 420"
  stroke="url(#network)"
  strokeWidth="1.2"
  opacity="0.25"
  fill="none"
/>

<path
  id="d3"
  d="M280 210 L620 520"
  stroke="url(#network)"
  strokeWidth="1.2"
  opacity="0.25"
  fill="none"
/>

{/* ===== Extra Connections ===== */}

<path
  id="d4"
  d="M780 160 L980 210"
  stroke="url(#network)"
  strokeWidth="1.2"
  opacity="0.25"
  fill="none"
/>

<path
  id="d5"
  d="M470 300 L620 520"
  stroke="url(#network)"
  strokeWidth="1.2"
  opacity="0.25"
  fill="none"
/>

<path
  id="d6"
  d="M980 90 L980 210"
  stroke="url(#network)"
  strokeWidth="1.2"
  opacity="0.25"
  fill="none"
/>

<path
  id="d7"
  d="M620 520 L930 520"
  stroke="url(#network)"
  strokeWidth="1.2"
  opacity="0.25"
  fill="none"
/>

<path
  id="d8"
  d="M350 90 L470 300"
  stroke="url(#network)"
  strokeWidth="1.2"
  opacity="0.25"
  fill="none"
/>

<path
  id="d9"
  d="M720 300 L1160 420"
  stroke="url(#network)"
  strokeWidth="1.2"
  opacity="0.25"
  fill="none"
/>

{/* ===== Animated Flow ===== */}

<motion.path
  d="M80 90 H350 L500 160 H780 L980 90 H1420"
  stroke="#ff8fe7"
  strokeWidth="3"
  strokeLinecap="round"
  fill="none"
  filter="url(#glow)"
  strokeDasharray="120 1400"
  animate={{
    strokeDashoffset: [-1520, 0],
  }}
  transition={{
    duration: 3.2,
    repeat: Infinity,
    ease: "linear",
  }}
/>

<motion.path
  d="M80 210 H280 L470 300 H720 L980 210 H1420"
  stroke="#ff8fe7"
  strokeWidth="3"
  strokeLinecap="round"
  fill="none"
  filter="url(#glow)"
  strokeDasharray="120 1400"
  animate={{
    strokeDashoffset: [-1520, 0],
  }}
  transition={{
    duration: 4,
    delay: 0.6,
    repeat: Infinity,
    ease: "linear",
  }}
/>

<motion.path
  d="M80 420 H390 L620 520 H930 L1160 420 H1420"
  stroke="#ff8fe7"
  strokeWidth="3"
  strokeLinecap="round"
  fill="none"
  filter="url(#glow)"
  strokeDasharray="120 1400"
  animate={{
    strokeDashoffset: [-1520, 0],
  }}
  transition={{
    duration: 3.5,
    delay: 1.2,
    repeat: Infinity,
    ease: "linear",
  }}
/>

{/* ===== Moving Packets ===== */}

<circle r="5" fill="#ff9bf0" filter="url(#glow)">
  <animateMotion
    dur="3.2s"
    repeatCount="indefinite"
    rotate="auto"
  >
    <mpath href="#line1" />
  </animateMotion>
</circle>

<circle r="5" fill="#ff9bf0" filter="url(#glow)">
  <animateMotion
    dur="4s"
    begin="1s"
    repeatCount="indefinite"
    rotate="auto"
  >
    <mpath href="#line2" />
  </animateMotion>
</circle>

<circle r="5" fill="#ff9bf0" filter="url(#glow)">
  <animateMotion
    dur="3.5s"
    begin="2s"
    repeatCount="indefinite"
    rotate="auto"
  >
    <mpath href="#line3" />
  </animateMotion>
</circle>

<circle r="4" fill="#d97cff" filter="url(#glow)">
  <animateMotion
    dur="2.5s"
    repeatCount="indefinite"
  >
    <mpath href="#v1" />
  </animateMotion>
</circle>

<circle r="4" fill="#d97cff" filter="url(#glow)">
  <animateMotion
    dur="3s"
    begin="0.8s"
    repeatCount="indefinite"
  >
    <mpath href="#v2" />
  </animateMotion>
</circle>

<circle r="4" fill="#d97cff" filter="url(#glow)">
  <animateMotion
    dur="3.2s"
    begin="1.6s"
    repeatCount="indefinite"
  >
    <mpath href="#v3" />
  </animateMotion>
</circle>

<circle r="4" fill="#ffb3ff" filter="url(#glow)">
  <animateMotion
    dur="2.8s"
    repeatCount="indefinite"
  >
    <mpath href="#d1" />
  </animateMotion>
</circle>

<circle r="4" fill="#ffb3ff" filter="url(#glow)">
  <animateMotion
    dur="3.4s"
    begin="1.2s"
    repeatCount="indefinite"
  >
    <mpath href="#d2" />
  </animateMotion>
</circle>

<circle r="4" fill="#ffb3ff" filter="url(#glow)">
  <animateMotion
    dur="3.1s"
    begin="0.5s"
    repeatCount="indefinite"
  >
    <mpath href="#d3" />
  </animateMotion>
</circle>

{/* ===== Pulsing Nodes ===== */}

{[
  [80,90],
  [350,90],
  [500,160],
  [780,160],
  [980,90],
  [1420,90],

  [80,210],
  [280,210],
  [470,300],
  [720,300],
  [980,210],
  [1420,210],

  [80,420],
  [390,420],
  [620,520],
  [930,520],
  [1160,420],
  [1420,420],
].map(([x,y],i)=>(
  <g key={i}>
    <motion.circle
      cx={x}
      cy={y}
      r="3"
      fill="#ff8be9"
      filter="url(#glow)"
    />

    <motion.circle
      cx={x}
      cy={y}
      r="3"
      stroke="#ff8be9"
      strokeWidth="1"
      fill="none"
      animate={{
        r:[3,10,3],
        opacity:[0.8,0,0.8]
      }}
      transition={{
        duration:2.5,
        repeat:Infinity,
        delay:i*0.15
      }}
    />
  </g>
))}

      </svg>
    </div>
  );
}

export default NetworkMap;