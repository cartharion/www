'use client';

import { env } from '@/lib/env';
import Script from 'next/script';
import React, { ReactNode } from 'react';

const cloudflareBeaconUrl: string =
  'https://static.cloudflareinsights.com/beacon.min.js';

export default function CloudflareWebAnalyticsProvider(props: {
  token: string;
  /**
   * Set this to true to disable measuring SPA's as described in
   * https://developers.cloudflare.com/analytics/web-analytics/getting-started/web-analytics-spa/
   */
  spaIsDisabled?: boolean;
  /**
   * Use this to explicitly decide whether to render script. If not passed the script will only be
   * rendered in production environments.
   */
  enabled?: boolean;
  children?: ReactNode | ReactNode[];
}) {
  const {
    enabled = env.NODE_ENV === 'production' &&
      (!env.NEXT_PUBLIC_VERCEL_ENV ||
        env.NEXT_PUBLIC_VERCEL_ENV === 'production'),
  } = props;

  return (
    <>
      {enabled && (
        <Script
          src={`${cloudflareBeaconUrl}?${[
            `token=${props.token}`,
            props.spaIsDisabled ? 'spa=false' : null,
          ]
            .filter(Boolean)
            .join('&')}`}
        />
      )}
      {props.children}
    </>
  );
}
