/** @type {import('next').NextConfig} */

// @see https://github.com/ashgw/security-headers-middlewares
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; media-src 'self'; frame-src 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;`
  },
  {
    key: 'Referrer-Policy',
    value: 'no-referrer, strict-origin-when-cross-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'X-Powered-By',
    value: 'SIKE v1.0.69',
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'same-origin',
  },
];

const nextConfig = {
  output: 'standalone',
  experimental: {
    ppr: true,
    optimizeCss: true,
    serverComponentsExternalPackages: [],
  },
  headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  productionBrowserSourceMaps: true,
  pageExtensions: ['js', 'ts', 'jsx', 'tsx', 'mdx'],
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
    ],
  },
};

module.exports = nextConfig;
