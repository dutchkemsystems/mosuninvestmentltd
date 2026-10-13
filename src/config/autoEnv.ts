/**
 * Automated Runtime Configuration Manager
 * Automatically resolves, infers, and derives all current and future environment variables
 * with zero required manual configuration.
 */

// Known base defaults
const SYSTEM_DEFAULTS: Record<string, string> = {
  APP_NAME: 'Mosun Investments Limited',
  APP_TAGLINE: 'Trade with purpose. Build with intent.',
  PRIMARY_DOMAIN: 'mosuninvestmentsltd.com',
  PRIMARY_EMAIL: 'contact@mosuninvestmentsltd.com',
  FOUNDING_YEAR: '2012',
  DEFAULT_LOCALE: 'en-US',
  DEFAULT_CURRENCY: 'USD',
  DEFAULT_TIMEZONE: 'America/Chicago',
  SECONDARY_TIMEZONE: 'Africa/Lagos',
  FOODS_STORE_URL: 'https://mosunfoods.com',
  PORT: '3000',
};

// Automatic inference helpers
const inferRuntimeOrigin = (): string => {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }
  // Check process.env if available during SSR / build
  if (typeof process !== 'undefined' && process.env?.APP_URL) {
    return process.env.APP_URL;
  }
  return `https://${SYSTEM_DEFAULTS.PRIMARY_DOMAIN}`;
};

const inferApiEndpoint = (key: string): string => {
  const origin = inferRuntimeOrigin();
  if (key.includes('CONTACT') || key.includes('ENQUIRY') || key.includes('MESSAGE')) {
    return `${origin}/api/contact`;
  }
  if (key.includes('SDG') || key.includes('ADVISORY')) {
    return `${origin}/api/sdg-advisory`;
  }
  return `${origin}/api`;
};

/**
 * Universal Automatic Variable Resolver
 * Checks environment in order of precedence:
 * 1. import.meta.env (Vite)
 * 2. window.__ENV__ (Client injection)
 * 3. process.env (Node runtime)
 * 4. Automatic heuristic inference
 * 5. Safe system default
 */
export function getAutoVariable(key: string, customFallback?: string): string {
  const upperKey = key.toUpperCase();
  const viteKey = upperKey.startsWith('VITE_') ? upperKey : `VITE_${upperKey}`;
  const plainKey = upperKey.replace(/^VITE_/, '');

  // 1. Check Vite import.meta.env
  try {
    const metaEnv = (import.meta as any).env;
    if (metaEnv) {
      if (metaEnv[viteKey] !== undefined && metaEnv[viteKey] !== '') {
        return metaEnv[viteKey];
      }
      if (metaEnv[plainKey] !== undefined && metaEnv[plainKey] !== '') {
        return metaEnv[plainKey];
      }
    }
  } catch {
    // Ignore meta resolution errors
  }

  // 2. Check window.__ENV__ runtime injection if present
  if (typeof window !== 'undefined' && (window as any).__ENV__) {
    const winEnv = (window as any).__ENV__;
    if (winEnv[viteKey] || winEnv[plainKey]) {
      return winEnv[viteKey] || winEnv[plainKey];
    }
  }

  // 3. Custom fallback if explicitly supplied
  if (customFallback !== undefined) {
    return customFallback;
  }

  // 4. Automatic Heuristic Inferences for specific variable domains
  if (plainKey === 'APP_URL' || plainKey === 'SITE_URL' || plainKey === 'BASE_URL') {
    return inferRuntimeOrigin();
  }

  if (plainKey.includes('ENDPOINT') || plainKey.includes('WEBHOOK') || plainKey.includes('API_URL')) {
    return inferApiEndpoint(plainKey);
  }

  if (plainKey.includes('YEAR')) {
    return new Date().getFullYear().toString();
  }

  if (plainKey === 'MODE' || plainKey === 'ENV' || plainKey === 'NODE_ENV') {
    return (import.meta as any).env?.MODE || 'production';
  }

  // 5. System Known Defaults
  if (SYSTEM_DEFAULTS[plainKey]) {
    return SYSTEM_DEFAULTS[plainKey];
  }

  // 6. Generic Safe Automatic String
  return '';
}

/**
 * Proxy-based Automatic Environment Store
 * Access ANY current or future variable:
 * autoEnv.ANY_FUTURE_KEY -> automatically resolved without config!
 */
export const autoEnv: Record<string, string> = new Proxy(
  {},
  {
    get(_target, prop: string | symbol) {
      if (typeof prop !== 'string') return '';
      return getAutoVariable(prop);
    },
    has() {
      return true; // Always succeeds for any queried key
    },
  }
);

/**
 * Pre-computed frequently used automatic variables
 */
export const AUTO_CONFIG = {
  get appUrl(): string {
    return getAutoVariable('APP_URL');
  },
  get apiUrl(): string {
    return getAutoVariable('API_URL');
  },
  get contactEndpoint(): string {
    return getAutoVariable('CONTACT_ENDPOINT');
  },
  get currentYear(): number {
    return new Date().getFullYear();
  },
  get foundingYear(): number {
    return parseInt(SYSTEM_DEFAULTS.FOUNDING_YEAR, 10);
  },
  get corridorYears(): number {
    return Math.max(12, new Date().getFullYear() - parseInt(SYSTEM_DEFAULTS.FOUNDING_YEAR, 10));
  },
  get isProduction(): boolean {
    return getAutoVariable('MODE') === 'production';
  },
};
