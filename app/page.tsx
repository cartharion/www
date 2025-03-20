import GeometricShapes from '@/components/GeometricShapes';
import Index from '@/components/Index';
import TechBackground from '@/components/TechBackground';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Cartharion',
};

export default function Page() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
      <TechBackground />
      <GeometricShapes />
      <Index />
    </div>
  );
}
