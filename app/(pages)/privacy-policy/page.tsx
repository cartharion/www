'use client';

import BackgroundEffect from '@/components/BackgroundEffect';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                1. Information We Collect
              </h2>
              <p>
                We collect information you provide directly to us, such as when
                you create an account, request customer support, or communicate
                with us. This may include your name, email address, and any
                other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                2. How We Use Your Information
              </h2>
              <p>
                We use the information we collect to provide, maintain, and
                improve our services, to communicate with you, to comply with
                applicable laws, and to protect our rights and the rights of our
                users.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                3. Information Sharing
              </h2>
              <p>
                We do not share your personal information with third parties
                except as described in this policy. We may share information
                with service providers who perform services on our behalf, as
                required by law, or in connection with a merger, acquisition, or
                sale of assets.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                4. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect the security of your personal information. However,
                no method of transmission over the Internet or electronic
                storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                5. Your Rights
              </h2>
              <p>
                Depending on your location, you may have certain rights
                regarding your personal information, such as the right to
                access, correct, or delete your data. To exercise these rights,
                please contact us using the information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                6. Children&apos;s Privacy
              </h2>
              <p>
                Our services are not directed to children under the age of 13,
                and we do not knowingly collect personal information from
                children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                7. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on our
                website and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                8. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at{' '}
                <a
                  href="mailto:privacy@cartharion.com"
                  className="text-primary hover:underline"
                >
                  privacy@cartharion.com
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
