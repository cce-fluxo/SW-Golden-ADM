import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        amarelo: "#F2C94C",
        azul: "#366FD9",
        branco_azulado: "#F1F3F6",
        cinza: "#828282",
        cinza_azulado: "#1B2C45",
        cinza_azulado_2: "#516A90",
        cinza_azulado_claro: "#C7D2E9",
        verde: "#219653",
        vermelho: "#EB5757",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
