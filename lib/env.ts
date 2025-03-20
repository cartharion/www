import { createEnv, preset } from '@ashgw/ts-env';
import { z } from 'zod';

export const env = createEnv({
  vars: {
    CLOUDFLARE_ANALYTICS_TOKEN: z.string().min(20),
    NODE_ENV: z.enum(['preview', 'production']).optional(),
    ...preset('vercel'),
  },
  disablePrefix: ['NODE_ENV'],
  prefix: 'NEXT_PUBLIC',
  skipValidation: typeof window === undefined, // skip validation on client side
});
