'use client';

import GeometricShapes from '@/components/GeometricShapes';
import TechBackground from '@/components/TechBackground';
import { cn } from '@/lib/utils';
import { ArrowDown, Mail } from 'lucide-react';
import { useEffect, useRef } from 'react';

import './styles/index.css';

export default function Index() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Preload fonts to prevent layout shift
    document.documentElement.classList.add('font-sans');
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
      <TechBackground />
      <GeometricShapes />
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8 section-fade-in z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-grotesk text-balance bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 dark:from-white dark:to-white/80">
            Cartharion.
            <br /> Engineering the Future.
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-light max-w-2xl mx-auto text-balance">
            We&apos;re a software company driving the next wave of AI innovation
            and SaaS development.
          </p>
          <button
            onClick={scrollToContact}
            className={cn(
              'mt-8 inline-flex items-center gap-2 text-sm',
              'text-muted-foreground hover:text-foreground',
              'transition-all duration-300 group'
            )}
          >
            <span>Learn more</span>
            <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div
            className={cn(
              'py-10 px-8 sm:px-12 rounded-2xl',
              'backdrop-blur-xl bg-white/5 dark:bg-black/10 border border-white/10',
              'animate-glow border-glow'
            )}
          >
            <p className="text-lg sm:text-xl leading-relaxed text-balance font-grotesk">
              Our mission is to develop intelligent AI powered software
              solutions that transform complex workflows into intuitive
              experiences, thus making life easier for businesses or individuals
              alike.
            </p>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm font-medium text-muted-foreground">
                Founded by{' '}
                <a
                  href="https://ashgw.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @ashgw
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center space-y-8 section-fade-in">
          <h2 className="text-2xl sm:text-3xl font-semibold font-grotesk">
            Get in Touch.
          </h2>
          <a
            href="mailto:hi@carthurion.com"
            className={cn(
              'inline-flex items-center gap-2 text-xl sm:text-2xl',
              'highlight-underline hover:text-primary font-grotesk',
              'transition-all duration-300'
            )}
          >
            <Mail className="h-5 w-5" />
            <span>hi@cartharion.com</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Cartharion LLC. All rights reserved. | 1388 Haight St, San
            Francisco, CA 94117
          </p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <a
              href="/privacy-policy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
