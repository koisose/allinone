const { fontFamily } = require("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui"),require("tailwindcss-animate")],
  darkMode: ["class", '[data-theme="dark"]'],
  daisyui: {
    styled: true,
    themes: [
      {
        dark: {
          primary: "#171717",
          secondary: "#30aadd",
          accent: "#00ffc6",
          neutral: "#171717",
          info: "#93c5fd",
          success: "#BBF7D0",
          warning: "#fdba74",
          error: "#DC2626",
          "base-content": "#FAFAFA", // Base text content color
          "base-100": "#171717", // Base background color
          "--rounded-box": "16px",
          "--rounded-btn": "4px",
          "--rounded-badge": "2px",
          "--tab-radius": "2px",
          "--btn-text-case": "normal-case",
          "--navbar-padding": "16px",
        },
        light: {
          primary: "#FAFAFA",
          secondary: "#30aadd",
          accent: "#00ffc6",
          neutral: "#171717",
          info: "#bfdbfe",
          success: "#BBF7D0",
          warning: "#fed7aa",
          error: "#DC2626",
          "base-content": "#171717", // Base text content color
          "base-100": "#FAFAFA", // Base background color
          "--rounded-box": "16px",
          "--rounded-btn": "4px",
          "--rounded-badge": "2px",
          "--tab-radius": "2px",
          "--btn-text-case": "normal-case",
          "--navbar-padding": "16px",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: "dark",
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 20s linear infinite",
      },
      aspectRatio: {
        "22/23": "22 / 23",
      },
      boxShadow: {
        orange: "0px 4px 0px rgba(243, 110, 101, 0.35)",
      },
      colors: {
        blue: {
          100: "#DBEAFE",
          600: "#2563EB",
          900: "#1E3A8A",
        },
        green: {
          300: "#86EFAC",
          500: "#22C55E",
          700: "#15803D",
        },
        neutral: {
          50: "#FAFAFA",
          200: "#E5E5E5",
          500: "#737373",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        orange: {
          50: "#FFF7ED",
          200: "#FDBA74",
          300: "#F26D64",
          500: "#F36E65",
          600: "#EED082",
          700: "#C2410C",
        },
        red: {
          400: "#F87171",
          600: "#DC2626",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
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
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["UncutSans","var(--font-sans)", ...fontFamily.sans],
      },
      fontSize: {
        mobileNav: ["24px", { lineHeight: "24px" }],
        deviceCode: ["30px", { lineHeight: "36px" }],
        xxs: ["12px", { lineHeight: "16px" }],
        xs: ["13px", { lineHeight: "24px", letterSpacing: "0.1em" }],
        sm: ["16px", { lineHeight: "24px" }],
        base: ["20px", { lineHeight: "28px" }],
        lg: ["24px", { lineHeight: "32px" }],
        xl: ["38px", { lineHeight: "48px" }],
        "2xl": ["50px", { lineHeight: "62px" }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        marquee: {
          "0%": { transform: "translateX(102%)" },
          "100%": { transform: "translateX(-100vw)" },
        },
      },
      width: {
        narrowModal: "327px",
        wideModal: "471px",
      },
      zIndex: {
        max: "1000", // High enough to appear above the modal(999)
      },
    },
  },
  purge: {
    options: {
      safelist: ["alert-success", "alert-error", "alert-info", "alert-warning"],
    },
  },
};
