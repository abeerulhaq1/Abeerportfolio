export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      brown: "#2d2d2d", // Dark mode-friendly brown
      lightBrown: "#3e3e3e", // Softer dark brown
      darkBrown: "#1a1a1a", // Darker brown
      black: "#121212", // Deep black
      white: "#f5f5f5", // Off-white
      cyan: "#00e5ff", // Bright cyan
      lightCyan: "#80d8ff", // Soft cyan
      darkCyan: "#0091ea", // Deep cyan
      orange: "#007bff", // Updated to blue
      lightOrange: "#339cff", // Light blue
      darkOrange: "#0056b3", // Dark blue
      grey: "#757575", // Neutral grey
      lightGrey: "#cfcfcf", // Light grey
      darkGrey: "#424242", // Dark grey
      purple: "#7c4dff", // Bright purple
      lightPurple: "#b388ff", // Soft lavender
      darkPurple: "#6200ea", // Deep purple
      teal: "#1de9b6", // Vibrant teal
      lightTeal: "#64ffda", // Light teal
      darkTeal: "#00bfa5", // Deep teal
    },
    extend: {
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(0, 229, 255, 0.5)", // Bright cyan glow
        cyanBigShadow: "10px 10px 1000px 500px rgba(0, 229, 255, 0.3)", // Cyan glow
        cyanMediumShadow: "10px 10px 200px 150px rgba(0, 229, 255, 0.5)", // Medium cyan glow
        orangeBigShadow: "10px 10px 10000px 500px rgba(0, 123, 255, 0.3)", // Blue glow
        orangeMediumShadow: "10px 10px 2000px 150px rgba(0, 123, 255, 0.5)", // Medium blue glow
      },
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
    },
  },
  plugins: [],
};