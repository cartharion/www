'use client';

import Loading, { RGB } from 'loading-points';

export default function LoadingScreen() {
  const color = 'rgb(120, 130, 255)' as RGB;
  return (
    <div className="flex h-screen items-center justify-center">
      <Loading glowColor={color} />
    </div>
  );
}
