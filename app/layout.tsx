// import CookieBanner from '@/components/CookieBanner';
import CloudflareWebAnalyticsProvider from '@/components/providers/CloudflareAnalytics';
import { env } from '@/lib/env';
import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

import './styles/globals.css';

export const metadata: Metadata = {
  title: 'Cartharion – Engineering the Future with AI',
  description:
    'Cartharion is a tech company rapidly developing AI-powered software products that automate workflows and boost productivity for businesses and everyday users.',
  keywords: [
    'Cartharion',
    'AI',
    'AI software',
    'Automation',
    'Artificial Intelligence',
    'Workflow automation',
    'Productivity software',
  ],
  openGraph: {
    title: 'Cartharion – Engineering the Future with AI',
    description:
      'We develop AI-driven software products that automate workflows and boost productivity, empowering businesses and individuals.',
    url: 'https://cartharion.com',
    siteName: 'Cartharion',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cartharion – Engineering the Future with AI',
    description:
      'AI-driven software that automates workflows, increases productivity, and empowers businesses and everyday users.',
  },
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* <CookieBanner /> */}
      <CloudflareWebAnalyticsProvider
        token={env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN}
      />
    </html>
  );
}
