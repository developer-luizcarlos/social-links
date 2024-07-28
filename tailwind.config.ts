import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'my-green': 'hsl(75, 94%, 57%)',
        'my-white': 'hsl(0, 0%, 100%)',
        'my-grey-700': 'hsl(0, 0%, 20%)',
        'my-grey-800': 'hsl(0, 0%, 12%)',
        'my-grey-900': ' hsl(0, 0%, 8%)'
      },
      FontFamily: {
        "inter": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
