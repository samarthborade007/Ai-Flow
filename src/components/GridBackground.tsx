const GridBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-slate-950">
      {/* Main animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-10 animate-gradient"
        style={{
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
        }}
      />

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0">
        {/* Vertical lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-indigo-500/10"
            style={{ left: `${(i + 1) * 5}%` }}
          />
        ))}

        {/* Horizontal lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-indigo-500/10"
            style={{ top: `${(i + 1) * 5}%` }}
          />
        ))}

        {/* Animated circuit lines */}
        <div className="absolute inset-0">
          {/* Top left to bottom right */}
          <div className="absolute top-0 left-[10%] w-[1px] h-[30%] bg-gradient-to-b from-indigo-500/30 to-transparent animate-pulse" />
          <div className="absolute top-[30%] left-[10%] w-[20%] h-[1px] bg-gradient-to-r from-indigo-500/30 to-transparent animate-pulse delay-150" />

          {/* Top right to bottom left */}
          <div className="absolute top-0 right-[20%] w-[1px] h-[40%] bg-gradient-to-b from-purple-500/30 to-transparent animate-pulse delay-300" />
          <div className="absolute top-[40%] right-[20%] w-[15%] h-[1px] bg-gradient-to-l from-purple-500/30 to-transparent animate-pulse delay-450" />

          {/* Bottom circuit paths */}
          <div className="absolute bottom-[20%] left-[30%] w-[1px] h-[30%] bg-gradient-to-t from-indigo-500/30 to-transparent animate-pulse delay-600" />
          <div className="absolute bottom-[20%] left-[30%] w-[25%] h-[1px] bg-gradient-to-r from-indigo-500/30 to-transparent animate-pulse delay-750" />
        </div>

        {/* Glowing dots at intersections */}
        <div className="absolute top-[30%] left-[10%] w-2 h-2 rounded-full bg-indigo-500/30 animate-ping" />
        <div className="absolute top-[40%] right-[20%] w-2 h-2 rounded-full bg-purple-500/30 animate-ping delay-300" />
        <div className="absolute bottom-[20%] left-[30%] w-2 h-2 rounded-full bg-indigo-500/30 animate-ping delay-600" />
      </div>

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          transform: "translate3d(0, 0, 0)",
        }}
      />
    </div>
  );
};

export default GridBackground;
