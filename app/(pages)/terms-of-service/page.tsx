'use client';

import BackgroundEffect from '@/components/BackgroundEffect';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
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
            Terms of Service
          </h1>

          <div className="space-y-6 text-muted-foreground">
            <p>
              <strong>Effective Date: [Insert Date]</strong>
            </p>
            <p>
              Welcome to Cartharion LLC (&quot;Cartharion&quot;, &quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;). By accessing or using our
              software applications, websites, or any related services
              (collectively, the &quot;Services&quot;), you agree to these Terms
              of Service (&quot;Terms&quot;). Please read them carefully before
              using our Services.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
              Overview of Our Services
            </h2>
            <p>
              Cartharion LLC develops proprietary software applications and
              services primarily powered by artificial intelligence. We offer
              both business-focused (B2B SaaS) and consumer-oriented products
              designed to automate workflows, enhance productivity, and improve
              daily life.
            </p>
            <p>
              <strong>Important:</strong> Cartharion LLC is not a software
              development agency. We do <strong>not</strong> build custom
              software solutions on behalf of third-party clients. All products
              offered are proprietary and owned by Cartharion.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
              Acceptance of Terms
            </h2>
            <p>
              By using our Services, you acknowledge that you have read,
              understood, and agree to comply with these Terms. If you disagree
              with any part, please discontinue use immediately.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
              Use of Services
            </h2>
            <p>
              You agree to use our Services lawfully and responsibly, without
              violating any applicable laws or infringing the rights of others.
            </p>
            <p>Prohibited uses include, but are not limited to:</p>
            <ul className="list-disc pl-5">
              <li>Illegal activities or fraudulent conduct.</li>
              <li>Unauthorized use or exploitation of the Services.</li>
              <li>
                Attempts to reverse-engineer or copy our proprietary software.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
              Accounts and Registration
            </h2>
            <p>
              You may be required to create an account to access certain
              features. You agree to provide accurate and current information
              and to maintain the confidentiality of your account details. You
              are responsible for any activity that occurs under your account.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
              Payments and Billing
            </h2>
            <p>
              All payments are securely processed through reputable third-party
              payment providers (such as Stripe). By initiating payments, you
              agree to their terms of service and privacy policies.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
              Intellectual Property
            </h2>
            <p>
              All content, software, products, trademarks, and proprietary
              technologies provided by Cartharion LLC are exclusively owned by
              us. You are granted a limited, non-transferable, non-exclusive
              right to access and use the Services for your personal or internal
              business use.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
              Disclaimer of Warranties
            </h2>
            <p>
              Our Services are provided &quot;as is&quot; without warranties of
              any kind. We explicitly disclaim all warranties, whether express
              or implied, including warranties of merchantability, fitness for a
              particular purpose, or non-infringement.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
              Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Cartharion LLC shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly, or any loss of data, use, or
              goodwill arising from your access or use of the Services.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
              Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless Cartharion LLC, its
              affiliates, officers, directors, employees, and agents from and
              against any and all claims, liabilities, damages, losses, costs,
              and expenses arising from your use or misuse of our Services or
              your breach of these Terms.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
              Termination
            </h2>
            <p>
              We reserve the right to terminate or suspend your access to our
              Services immediately, without prior notice, for any reason,
              including breach of these Terms.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
              Governing Law
            </h2>
            <p>
              These Terms shall be governed by and interpreted according to the
              laws of the United States and the state in which Cartharion LLC is
              registered, without regard to conflict of law provisions.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
              Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. We will notify users
              of any significant changes by posting the updated Terms
              prominently. Continued use of the Services after changes
              constitutes your acceptance of the revised Terms.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground font-grotesk">
              Contact Information
            </h2>
            <p>
              If you have questions regarding these Terms, please contact us:
            </p>
            <p>
              <strong>Cartharion LLC</strong>
              <br />
              <strong>Email:</strong>{' '}
              <a
                href="mailto:legal@cartharion.com"
                className="text-primary hover:underline"
              >
                legal@cartharion.coms
              </a>
              <br />
              <strong>Address:</strong> 1388 Haight St, San Francisco, CA 94117
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 text-sm text-muted-foreground">
            <p>
              Effective Date:{' '}
              <a
                href="https://github.com/cartharion/www/blob/main/app/(pages)/terms-of-service/page.tsx"
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
