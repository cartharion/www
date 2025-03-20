import React from 'react';

const TechBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-50">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/70" />
      <div className="h-full w-full overflow-hidden">
        <div className="grid-background h-full w-full opacity-[0.2]"></div>
      </div>
    </div>
  );
};

export default TechBackground;
