'use client';

import GeometricShapes from '@/components/GeometricShapes';
import TechBackground from '@/components/TechBackground';
import { ArrowDown, Mail } from 'lucide-react';
import { useRef } from 'react';

export default function Index() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
      {/* Add back the animated background */}
      <TechBackground />
      <GeometricShapes />
      {/* Background with noise texture */}
      <div className="fixed inset-0 -z-10 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/70" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center space-y-8 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-grotesk text-balance bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 animate-pulse-slow">
            Cartharion.
            <br /> Engineering the Future.
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-light max-w-2xl mx-auto text-balance">
            We&apos;re a tech company rapidly developing AI-powered software
            products for businesses and consumers alike.
          </p>
          <button
            onClick={scrollToContact}
            className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 group"
          >
            <span>Learn more</span>
            <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 relative z-10 section-fade-in">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="py-10 px-8 sm:px-12 rounded-2xl backdrop-blur-xl bg-black/10 border border-white/10 animate-glow">
            <p className="text-lg sm:text-xl leading-relaxed text-balance font-grotesk">
              We develop AI-driven software that automates workflows and boosts
              productivity for businesses and everyday users, freeing people to
              focus on what truly matters.
            </p>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm font-medium text-muted-foreground">
                Founded by{' '}
                <a
                  href="https://ashgw.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary highlight-underline"
                >
                  @ashgw
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="py-20 px-6 relative z-10 section-fade-in"
      >
        <div className="max-w-xl mx-auto text-center space-y-8">
          <h2 className="text-2xl sm:text-3xl font-semibold font-grotesk">
            Get in Touch.
          </h2>
          <a
            href="mailto:hi@carthurion.com"
            className="inline-flex items-center gap-2 text-xl sm:text-2xl hover:text-primary font-grotesk transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
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
            {new Date().getFullYear()} Cartharion LLC. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <a
              href="/privacy-policy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors highlight-underline"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors highlight-underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
