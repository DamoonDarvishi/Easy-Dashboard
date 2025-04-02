import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        neutral: 'var(--color-neutral1)',
        neutral2: 'var(--color-neutral2)',
        neutral3: 'var(--color-neutral3)',
        neutral4: 'var(--color-neutral4)',
        neutral5: 'var(--color-neutral5)',
        neutral6: 'var(--color-neutral6)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
        info: 'var(--color-info)',
        lightSuccess: 'var(--color-light-success)',
        lightWarning: 'var(--color-light-warning)',
        lightDanger: 'var(--color-light-danger)',
        lightInfo: 'var(--color-light-info)',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      // spacing: {
      //   "1": "4px",
      //   "2": "8px",
      //   "3": "16px",
      //   "4": "24px",
      //   "5": "32px",
      //   "6": "40px",
      //   "7": "64px",
      //   "8": "80px",
      //   "9": "96px",
      // },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
};
export default config;
