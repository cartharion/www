import type { FC } from 'react';

const GeometricShapes: FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large circle */}
      <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full border border-primary/5 opacity-30 animate-rotate-slow"></div>

      {/* Floating elements */}
      <div className="absolute top-[15%] right-[10%] w-24 h-24 bg-gradient-to-br from-blue-400/10 to-blue-600/5 rounded-lg transform rotate-12 animate-float"></div>
      <div className="absolute bottom-[25%] left-[15%] w-32 h-32 border border-primary/10 rounded-full animate-pulse-glow"></div>

      {/* Geometric pyramid */}
      <div className="absolute bottom-[10%] right-[20%] w-40 h-40">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/5 transform rotate-45 animate-pulse-slow"></div>
          <div className="absolute inset-0 border border-primary/10 transform rotate-12"></div>
          <div className="absolute inset-0 border border-primary/5 transform -rotate-12"></div>
        </div>
      </div>

      {/* Small glowing dots */}
      <div className="absolute top-[30%] left-[30%] w-2 h-2 rounded-full bg-blue-400/50 animate-pulse-glow"></div>
      <div
        className="absolute top-[70%] left-[60%] w-3 h-3 rounded-full bg-purple-400/40 animate-pulse-glow"
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className="absolute top-[20%] left-[70%] w-2 h-2 rounded-full bg-blue-300/50 animate-pulse-glow"
        style={{ animationDelay: '2s' }}
      ></div>

      {/* Curved lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,100 Q400,150 800,100 T1600,100"
          fill="none"
          stroke="rgba(100, 120, 255, 0.2)"
          strokeWidth="1"
        />
        <path
          d="M0,200 Q400,250 800,200 T1600,200"
          fill="none"
          stroke="rgba(100, 120, 255, 0.1)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default GeometricShapes;
