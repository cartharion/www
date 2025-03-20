import { createEnv, preset } from '@ashgw/ts-env';
import { z } from 'zod';

const isBrowser = typeof window !== undefined;

export const env = createEnv({
  vars: {
    CLOUDFLARE_ANALYTICS_TOKEN: z.string().min(20),
    GOOGLE_SITE_VERIFICATION: z.string().min(10),
    NODE_ENV: z.enum(['preview', 'production']).optional(),
    ...preset('vercel'),
  },
  disablePrefix: ['NODE_ENV'],
  prefix: 'NEXT_PUBLIC',
  skipValidation: isBrowser, // skip validation on client side
});
