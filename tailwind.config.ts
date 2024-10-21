import type { Config } from "tailwindcss";
const pxToRem = (pxSize: number) => {
  const baseSize = 16;
  return (pxSize / baseSize).toFixed(4);
};
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "0",
    },
    screens: {
      sm: '360px',
      md: '656px',
      lg: '1024px',
      xl: '1340px',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-gotham)']
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        transparent: 'transparent',
        primary: '#AE0E16',        
        secondary: '#C31008',   
        black: '#000000',
        white: '#FFFFFF',
        borderGray: '#B0B0B0',
        halfGray: '#D1D1D1',
        whiteTint: 'rgba(255, 255, 255, 0.8)',
        danger: '#CC0000',
        dangerHover: '#EA0E00',
        success: '#2D9F48',
        successTint: 'rgba(45, 159, 72, 0.2)',
        orangeTint: '#FFECD1',
        orangeTintDeep: '#FCF3EC',
        redTint: 'rgba(234, 14, 0, 0.1)',
        lightOrange: '#FFF8EE',   
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontSize: {
        8: `${pxToRem(8)}rem`,
        10: `${pxToRem(10)}rem`,
        12: `${pxToRem(12)}rem`,
        14: `${pxToRem(14)}rem`,
        16: `${pxToRem(16)}rem`,
        18: `${pxToRem(18)}rem`,
        20: `${pxToRem(20)}rem`,
        21: `${pxToRem(21)}rem`,
        24: `${pxToRem(24)}rem`,
        28: `${pxToRem(28)}rem`,
        32: `${pxToRem(32)}rem`,
        38: `${pxToRem(38)}rem`,
        40: `${pxToRem(40)}rem`,
        42: `${pxToRem(42)}rem`,
        48: `${pxToRem(48)}rem`,
        51: `${pxToRem(51)}rem`,
        67: `${pxToRem(67)}rem`,
        88: `${pxToRem(88)}rem`,
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['IDEC', 'APEM'],
      textColor: ['IDEC', 'APEM']
    },
  },
  plugins: [require("tailwindcss-animate"), require('postcss-nesting')],
} satisfies Config;

export default config;
