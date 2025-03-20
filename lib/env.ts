import { createEnv, preset } from '@ashgw/ts-env';

export const env = createEnv({
  vars: {
    NEXT_PUBLIC_WWW_GOOGLE_ANALYTICS_ID: 'cartharion',
    ...preset('vercel'),
  },
  skipValidation: typeof window === 'undefined', // skip validation on client side
});
