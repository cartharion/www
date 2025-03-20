'use client';

import BackgroundEffect from '@/components/BackgroundEffect';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
      {/* Background */}
      <BackgroundEffect />

      <div className="fixed inset-0 -z-10 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/70" />
        <div className="noise"></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground transition-colors highlight-underline"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="py-6 px-8 sm:p-10 rounded-2xl backdrop-blur-xl bg-black/10 border border-white/10 animate-glow section-fade-in">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 font-grotesk">
            Terms of Service
          </h1>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using Cartharion&apos;s services, you agree to
                be bound by these Terms of Service. If you do not agree to these
                terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                2. Description of Services
              </h2>
              <p>
                Cartharion provides AI innovation and SaaS development services.
                We reserve the right to modify, suspend, or discontinue any part
                of our services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                3. User Responsibilities
              </h2>
              <p>
                You agree to use our services for lawful purposes only and in
                accordance with these terms. You are responsible for maintaining
                the confidentiality of your account information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                4. Intellectual Property
              </h2>
              <p>
                All content, features, and functionality of our services are
                owned by Cartharion and are protected by international
                copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                5. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Cartharion shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages resulting from your use or inability to use our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                6. Governing Law
              </h2>
              <p>
                These terms shall be governed by and construed in accordance
                with the laws of the State of California, without regard to its
                conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                7. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. We will
                provide notice of significant changes by posting the new Terms
                of Service on our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                8. Contact Information
              </h2>
              <p>
                For questions about these Terms of Service, please contact us at{' '}
                <a
                  href="mailto:legal@cartharion.com"
                  className="text-primary hover:underline"
                >
                  legal@cartharion.com
                </a>
                .
              </p>
            </section>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 text-sm text-muted-foreground">
            <p>Last updated: June 1, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
