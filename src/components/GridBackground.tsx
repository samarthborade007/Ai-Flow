const GridBackground = () => {
  return (
    <div
      className="absolute inset-0 -z-10"
      style={{
        backgroundColor: "#2b2b2b",
        backgroundImage:
          "radial-gradient(circle, #404040 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    />
  );
};

export default GridBackground;
