/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    screens: {
      "sm-max": { max: "374.98px" },
      md: "768px",
      lg: "1440px",
    },
    extend: {
      colors: {
        primaryBgColor: "var(--primary-bg)",
        secondaryBgColor: "var(--secondary-bg)",
        blackBgColor: "var(--black-bg)",
        darkBgColor: "var(--dark-bg)",

        mainTextColor: "var(--main-text)",
        secondaryTextColor: "var(--secondary-text)",
        whiteTextColor: "var(--white-text)",
        secondaryLightTextColor: "var(--secondary-light-text)",

        accentRedColor: "var(--accent-red)",
        accentYellowColor: "var(--accent-yellow)",
        accentOrangeColor: "var(--accent-orange)",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        ".container": {
          minWidth: "320px",
          maxWidth: "375px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "20px",
          paddingRight: "20px",
          "@screen md": {
            paddingLeft: "32px",
            paddingRight: "32px",
            maxWidth: "768px",
          },
          "@screen lg": {
            paddingLeft: "80px",
            paddingRight: "80px",
            maxWidth: "1440px",
          },
        },
      });
    },
  ],
};