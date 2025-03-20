'use client';

import BackgroundEffect from '@/components/BackgroundEffect';
import { COMPANY_ADDRESS } from '@/lib/consts';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
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
              {/* <p className="italic mb-4">Effective Date: March 20th, 2025</p> */}
              <p>
                Welcome to Cartharion LLC (&quot;Cartharion&quot;,
                &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). Your
                privacy is important to us, and this Privacy Policy explains how
                we handle your personal information when you interact with our
                websites and software applications (&quot;Services&quot;),
                available primarily on the web and iOS platforms. Please read
                this Privacy Policy carefully.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                Information We Collect
              </h2>
              <h3 className="text-lg font-medium mb-2 text-foreground">
                Information You Provide
              </h3>
              <ul className="list-disc pl-5 mb-2">
                <li>
                  <strong>Account Data:</strong> When creating an account or
                  making a purchase, you may provide your name, email, contact
                  information, payment details, and other necessary account
                  details.
                </li>
                <li>
                  <strong>Communication Data:</strong> If you contact us (e.g.,
                  via email at privacy@cartharion.com), we store the content of
                  your communications.
                </li>
              </ul>
              <h3 className="text-lg font-medium mb-2 text-foreground">
                Information We Automatically Collect
              </h3>
              <ul className="list-disc pl-5">
                <li>
                  <strong>Device and Usage Information:</strong> IP address,
                  device type, operating system, browser type, pages visited,
                  interaction with content, and other diagnostic data.
                </li>
                <li>
                  <strong>Cookies and Tracking Technologies:</strong> We use
                  cookies and similar tracking technologies to track activity
                  and improve our Services. Cookies are small data files stored
                  on your device.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                How We Use Your Information
              </h2>
              <p>We primarily use the information collected to:</p>
              <ul className="list-disc pl-5">
                <li>
                  Provide, maintain, and improve our proprietary software
                  applications and Services.
                </li>
                <li>
                  Process payments securely through trusted third-party payment
                  processors.
                </li>
                <li>
                  Understand and analyze usage patterns to improve user
                  experiences.
                </li>
                <li>
                  Communicate directly with you for account verification,
                  customer support, and notifications.
                </li>
                <li>Comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                Sharing Your Information
              </h2>
              <p>
                We do <strong>not</strong> sell or trade your personal data.
                However, we may share your information with:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <strong>Service Providers:</strong> Third-party vendors
                  providing payment processing, hosting services, analytics
                  providers, and AI model providers.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> If required by law or if
                  we reasonably believe disclosure is necessary for protecting
                  our rights or the safety of users.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger,
                  acquisition, or sale of assets, your data may be transferred.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                International Data Transfers
              </h2>
              <p>
                Our Services are hosted primarily in the United States. If
                you&apos;re accessing our Services from outside the United
                States, your data may be transferred, processed, and stored in
                the U.S., where privacy laws may differ from your jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                Cookies and Tracking
              </h2>
              <p>
                We use cookies to improve user experience, analyze usage, and
                enhance functionality. You can manage your cookie preferences
                through your browser settings, but note that some Services might
                not function correctly without cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                Data Security
              </h2>
              <p>
                We employ reasonable administrative, technical, and physical
                safeguards to protect your personal information. However, no
                method of data transmission or storage is completely secure, and
                we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                User Rights
              </h2>
              <p>
                Depending on your location, you may have certain rights
                regarding your data:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <strong>Access:</strong> Request a copy of your personal data.
                </li>
                <li>
                  <strong>Correction:</strong> Correct inaccurate or incomplete
                  information.
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  data.
                </li>
                <li>
                  <strong>Restriction:</strong> Request restriction of
                  processing.
                </li>
              </ul>
              <p>
                You can exercise these rights by contacting us directly at{' '}
                <a
                  href="mailto:privacy@cartharion.com"
                  className="text-primary hover:underline"
                >
                  privacy@cartharion.com
                </a>
                . We&apos;ll verify your identity before processing requests.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                Children&apos;s Privacy
              </h2>
              <p>
                Our Services are intended for users aged 18 and over. We do not
                knowingly collect personal information from children under 13.
                If we become aware of such collection, we will promptly delete
                the data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                Third-Party Services
              </h2>
              <p>
                Our Services may integrate or link to third-party platforms and
                services (e.g., payment gateways, AI providers). Please note
                their privacy practices are not under our control, and we
                recommend reviewing their privacy policies directly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                Updates to This Policy
              </h2>
              <p>
                We may periodically update this Privacy Policy. Changes will be
                posted prominently with an updated &quot;Effective Date.&quot;
                Continued use of our Services indicates acceptance of the
                updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
                Contact Us
              </h2>
              <p>
                For any questions or requests concerning your privacy, please
                contact us at:
              </p>
              <p className="pl-5">
                <strong>Cartharion LLC</strong>
                <br />
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:privacy@cartharion.com"
                  className="text-primary hover:underline"
                >
                  privacy@cartharion.com
                </a>
                <br />
                <strong>Address:</strong> {COMPANY_ADDRESS}
              </p>
            </section>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 text-sm text-muted-foreground">
            <p>
              Effective Date:{' '}
              <a
                href="https://github.com/cartharion/www/blob/main/app/(pages)/privacy-policy/page.tsx"
                className="text-primary hover:underline"
              >
                March 20th, 2025
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
