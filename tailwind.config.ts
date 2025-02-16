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
        '2lg': ['1.25rem', '1.5rem'],
        xl: ['1.5rem', '1.75rem'],
        '2xl': ['1.625rem', '1.925rem'],
        '4xl': ['2rem', '2.25rem'],
      },
      spacing: {
        '2px': '2px',
        '3px': '3px',
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
    },
  },
  plugins: [],
} satisfies Config;
