const GridBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-slate-950">
      {/* Main animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 animate-gradient"
        style={{
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
        }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-4 w-[500px] h-[500px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob" />
      <div className="absolute top-[20%] -right-4 w-[400px] h-[400px] bg-purple-500 rounded-full mix-blend-multiply filter blur-[96px] opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-[20%] w-[600px] h-[600px] bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-4000" />
      <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-pink-500 rounded-full mix-blend-multiply filter blur-[96px] opacity-30 animate-blob animation-delay-6000" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)),
            linear-gradient(rgba(15, 23, 42, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 40px 40px, 40px 40px",
          backgroundPosition: "0 0, -1px -1px, -1px -1px",
        }}
      />

      {/* Vignette effect */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAOh0lEQVR4nO1dbVczNw69JCEvBJInEEIgEIb//6/6fbu73e77tt0P1o2vZQ3QPgRCmHsOJ8mMx5ZlWZJljQEynlBia58ncx6TPnuGy3n4nD6p/4fP/D+hPh/+/t+3t2+/8a/dj82z/dj7u/7H+v9xNvt/KfnxvvwRz1IE4G6RrzKcvX19Xkf+QX7U8SzNjR/yK+4T+7N8vcd7r/+P9d+tM//f+l/8/X7t0/xY/fgTgKxEyF0/j5/5//IK+7n/f+v/3/V/u/PfJ+jz81n/X8j/P8Kz8Nk+z/V3L+cj/f+1/i/E1/Oz+nf+jPo/z5d6B3/W//eROH4hPvt58A7+rP8PxJv4PecxPzaf+3f+/2P9f8P4/L3+Lzaf+3f+/Vn/t+9GHv/A3/r/7e//8a+vfZ7/LHcJ2P8vn89/1v/9d+v/n+QHnofP+Xf+/1n/D/Hs5/p/JZ7/LP/zZ2f9r+tf8/8n6v/FGI/v8P/n5xDR3/Ns/f/+3/r/6/r/6/o/39f1/6GEz/Zz/f9p/f/65HHI3/X/p/X/oYTPn4n/eR7/P9b/b+qV/Fj/fzDR3/P/j/X/m01l5/+fSvj8mfif5/H/c/3/sZv8Wv+/D//z/I/1/2bz/efz/6cSPn8m/gf+/1z/fwny+Rz/Xv8/rf9v6uN5/f9Ww/9t/f9p/f8h1v+n9f/b+v/r8/91/f8G/P+5/v8I8ed5/Kz//0L8/1z/b+v/T+v/D7H+P63/39b/X5//r+v/N+D/z/X/R4g/z+Nn/f8X4v/P9f+2/v+0/v8Q6//T+v9t/f/1+f+6/n8D/v9c/3+E+PM8ftb/fyH+/1z/b+v/T+v/D7H+P63/39b/X5//r+v/N+D/z/X/R4g/z+Nn/f8X4v/P9f+2/v+0/v8Q6//T+v9t/f/1+f+6/n8D/v9c/3+E+PM8ftb/fyH+/1z/b+v/T+v/D7H+P63/39b/X5//r+v/N+D/z/X/R4g/z+Nn/f8X4v/P9f+2/v+0/v8Q6//T+v9t/f/1+f+6/n8D/v9c/3+E+PM8ftb/fyH+/1z/b+v/T+v/D7H+P63/39b/X5//r+v/N+D/z/X/R4g/z+Nn/f8X4v/P9f+2/v+0/v8Q6//T+v9t/f/1+f+6/n8D/v9c/3+E+PM8ftb/fyH+/1z/b+v/T+v/D7H+P63/39b/X5//r+v/N+D/z/X/R4g/z+Nn/f8X4v/P9f+2/v+0/v8Q6//T+v9t/f/1+f+6/n8D/v9c/3+E+PM8ftb/fyH+/1z/b+v/T+v/D7H+P63/39b/X5//r+v/N+D/z/X/R4g/z+Nn/f8X4v/P9f+2/v+0/v8Q6//T+v9t/f/1+f+6/n8D/v9c/3+E+PM8ftb/fyH+/1z/b+v/T+v/D7H+P63/39b/X5//r+v/N+D/z/X/R4g/z+Nn/f8X4v/P9f+2/v+0/v8Q6//T+v9t/f/1+f+6/n8D/v9c/3+E+PM8ftb/fyH+/1z/b+v/T+v/D7H+P63/39b/X5//r+v/N+D/z/X/R4g/z+Nn/f8X4v/P9f+2/v+0/v8Q6//T+v9t/f/1+f+6/n8D/v9c/3+E+PM8ftb/fyH+/1z/b+v/T+v/D7H+P63/39b/X5//r+v/N+D/z/X/R4g/z+Nn/f8X4v/P9f+2/v+0/v8Q6//T+v9t/f/1+f+6/n8D/v9c/3+E+PM8ftb/fyH+/1z/b+v/T+v/D7H+P63/39b/X5//r+v/N+D/z/X/R4g/z+Nn/f8X4v/P9f+2/v+0/v8Q6//T+v9t/f/1+f+6/n8D/v9c/3+E+PM8ftb/fyH+/1z/b+v/T+v/D7H+P63/39b/X5//r+v/N+D/z/X/R4g/z+Nn/f8X4v/P9f+2/v+0/v8Q6//T+v9t/f/1+f+6/n8D/v9c/3+E+PM8ftb/fyH+/1z/b+v/T+v/D7H+P63/39b/X5//r+v/N+D/z/X/R4g/z+Nn/f8X4v/P9f+2/v+0/v8Q6//T+v9t/f/1+f+6/n8D/v9c/3+E+PM8ftb/fyH+/1z/b+v/T+v/D7H+P63/39b/X5//r+v/N+D/z/X/R4g/z+Nn/f8X4v/P9f+2/v+0/v8Q6//T+v9t/f/1+f+6/n8D/v9c/3+E+PM8ftb/fyH+/1z/b+v/T+v/D7H+P63/39b/X5//r+v/N+D/z/X/R4g/z+Nn/f8X4v/P9f+2/v+0/v8Q6//T+v9t/f/1+f+6/n8D/v9c/3+E+PM8ftb/fyH+/1z/b+v/T+v/D7H+P63/39b/X5//r+v/N+D/z/X/R4g/z+Nn/f8X4v/P9f+2/v+0/v8Q6//T+v9t/f/1+f+6/n8D/v9c/3+E+PM8ftb/fyH+/1z/b+v/T+v/D7H+P63/39b/X5//r+v/N+D/z/X/R4g/z+Nn/f8X4v/P9f+2/v+0/v8Q6//T+v9t/f/1+f+6/n8D/v9c/3+E+PM8ftb/fyH+/1z/b+v/T+v/D7H+P63/39b/X5//r+v/N+D/z/X/R4g/z+Nn/f8X4v/P9f+2/v+0/v8Q6//T+v9t/f/1+f+6/n8D/v9c/3+E+PM8ftb/fyH+/1z/b+v/T+v/D7H+P63/39b/X5//r+v/N+D/z/X/R4g/z+Nn/f8X4v/P9f+2/v+0/v8Q6//T+v9t/f/1+f+6/n8D/v9c/3+E+PM8ftb/fyH+/1z/b+v/T+v/D7H+P63/39b/X5//r+v/N+D/z/X/R4g/z+Nn/f8X4v/P9f+2/v+0/v8Q6//T+v9t/f/1+f+6/n8D/v/8/zsluXz+5w6HPZP9s7ZmXvv7jZ8PzwF/97+3v+/n/2H8/Z7+v//35v+P/P8nwfN5v3/k8z9JxP+Wz/88yfz/c/3/tv7/tP7/EOv/0/r/bf3/9fn/uv5/A/7/XP9/hPjzPH7W/38h/v9c/2/r/0/r/w+x/j+t/9/W/1+f/6/r/zfg/8/1/0eIP8/jZ/3/F+L/z/X/tv7/tP7/EOv/0/r/bf3/9fn/uv5/A/7/XP9/hPjzPH7W/38h/v9c/2/r/0/r/w+x/j+t/9/W/1+f/6/r/zfg/8/1/0eIP8/jZ/3/F+L/z/X/tv7/tP7/EOv/0/r/bf3/9fn/uv5/A/7/XP9/hPjzPH7W/38h/v9c/2/r/0/r/w+x/j+t/9/W/1+f/6/r/zfg/8/1/0eIP8/jZ/3/F+L/z/X/tv7/tP7/EOv/0/r/bf3/9fn/uv5/A/7/XP9/hPjzPH7W/38h/v9c/2/r/0/r/w+x/j+t/9/W/1+f/6/r/zfg/8/1/0eIP8/jZ/3/F+L/z/X/tv7/tP7/EOv/0/r/bf3/9fn/uv5/A/7/XP9/hPjzPH7W/38h/v9c/2/r/0/r/w+x/j+t/9/W/1+f/6/r/zfg/8/1/0eIP8/jZ/3/F+L/z/X/tv7/tP7/EOv/0/r/bf3/9fn/uv5/A/7/XP9/hPjzPH7W/38h/v9c/2/r/0/r/w+x/j+t/9/W/1+f/6/r/zfg/8/1/0eIP8/jZ/3/F+L/z/X/tv7/tP7/EOv/0/r/bf3/9fn/uv5/A/7/XP9/hPjzPH7W/38h/v9c/2/r/0/r/w+x/j+t/9/W/1+f/6/r/zfg/8/1/0eIP8/jZ/3/F+L/z/X/tv7/tP7/EOv/0/r/bf3/9fn/uv5/A/7/XP9/hPjzPH7W/38h/v9c/2/r/0/r/w+x/j+t/9/W/1+f/6/r/zfg/8/1/0eIP8/jZ/3/F+L/z/X/tv7/tP7/EOv/0/r/bf3/9fn/uv5/A/7/XP9/hPjzPH7W/38h/v9c/2/r/0/r/w+x/j+t/9/W/1+f/6/r/zfg/8/1/0eIP8/jZ/3/F+L/z/X/tv7/tP7/EOv/0/r/bf3/9fn/uv5/A/7/XP9/hPjzPH7W/38h/v9c/2/r/0/r/w+x/j+t/9/W/1+f/6/r/zfg/8/1/0eIP8/jZ/3/F+L/z/X/tv7/tP7/EOv/0/r/bf3/9fn/uv5/A/7/XP9/hPjzPH7W/38h/v9c/2/r/0/r/w+x/j+t/9/W/1+f/6/r/zfg/8/1/0eIP8/jZ/3/F+L/z/X/tv7/tP7/EOv/0/r/bf3/9fn/uv5/A/7/XP9/hPjzPH7W/38h/v9c/2/r/0/r/w+x/j+t/9/W/1+f/6/r/zfg/8/1/0eIP8/jZ/3/F+L/z/X/tv7/tP7/EOv/0/r/bf3/9fn/uv5/A/7/XP9/hPjzPH7W/38h/v9c/2/r/0/r/w+x/j+t/9/W/1+f/6/r/zfg/8/1/0eIP8/jZ/3/F+L/z/X/tv7/tP7/EOv/0/r/bf3/9fn/uv5/A/7/XP9/hPjzPH7W/38h/v/8/P8HVGQc8g==)",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
};

export default GridBackground;
