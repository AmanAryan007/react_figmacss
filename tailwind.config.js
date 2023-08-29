/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "rgba(29, 29, 29, 0.5)",
        "text-light": "rgba(29, 29, 29, 0.7)",
        whitesmoke: "#f1f1f1",
        light: "#fff9ea",
        silver: "#c4c4c4",
        primary: "#ffcb45",
        black: "#1d1d1d",
      },
      fontFamily: {
        headline: "'Readex Pro'",
        inter: "Inter",
      },
      borderRadius: {
        "12xl": "31px",
        "31xl": "50px",
        "3xs": "10px",
        "10xl-5": "29.5px",
      },
    },
    fontSize: {
      "5xl": "24px",
      xl: "20px",
      lg: "18px",
      sm: "14px",
      "13xl": "32px",
      "3xl": "22px",
      "9xl": "28px",
      "29xl": "48px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
