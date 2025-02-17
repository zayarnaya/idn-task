import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PPNeue', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        border: 'hsl(var(--border))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        card: 'hsl(var(--card))',
      },
      fontSize: {
        sm: ['0.875rem', '1.5rem'],
        '2lg': ['1.25rem', '1.5rem'],
        xl: ['1.5rem', '1.75rem'],
        '2xl': ['1.625rem', '1.925rem'],
        '4xl': ['2rem', '2.25rem'],
        '5xl': ['2.5rem', '2.75rem'],
      },
      spacing: {
        '2px': '2px',
        '3px': '3px',
      },
      padding: {
        '4m': '.75rem',
      },
      height: {
        '16': '3.625rem',
      },
      minHeight: {
        '52m': '13.25rem',
      },
      keyframes: {
        openMenu: {
          '0%': {
            opacity: '.5',
            transform: 'scale(.5, .5)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1, 1)',
          },
        },
      },
      animation: {
        openMenu: 'openMenu .3s ease-in-out forwards',
        closeMenu: 'openMenu .3s ease-in-out reverse forwards',
      },
      boxShadow: {
        slideshadow: '0 4px 4px 0 rgba(0,0,0,.25)',
      },
    },
  },
  plugins: [],
} satisfies Config;
