import { extendTheme } from "@chakra-ui/react";

const whiteAlpha = {
  100: "rgba(255, 255, 255, 0.04)",
  200: "rgba(255, 255, 255, 0.06)",
  300: "rgba(255, 255, 255, 0.08)",
  400: "rgba(255, 255, 255, 0.16)",
  500: "rgba(255, 255, 255, 0.24)",
  600: "rgba(255, 255, 255, 0.36)",
  700: "rgba(255, 255, 255, 0.48)",
  800: "rgba(255, 255, 255, 0.64)",
  900: "rgba(255, 255, 255, 0.80)",
  1000: "rgba(255, 255, 255, 0.92)",
};

const blackAlpha = {
  100: "rgba(0, 0, 0, 0.04)",
  200: "rgba(0, 0, 0, 0.06)",
  300: "rgba(0, 0, 0, 0.08)",
  400: "rgba(0, 0, 0, 0.16)",
  500: "rgba(0, 0, 0, 0.24)",
  600: "rgba(0, 0, 0, 0.36)",
  700: "rgba(0, 0, 0, 0.48)",
  800: "rgba(0, 0, 0, 0.64)",
  900: "rgba(0, 0, 0, 0.80)",
  1000: "rgba(0, 0, 0, 0.92)",
};

const theme = extendTheme({
  // ... other configurations like fonts and space

// Shadows 
 shadows: {
    xs: "0px 0px 0px 1px rgba(0, 0, 0, 0.05)",
    sm: "0px 1px 2px rgba(0, 0, 0, 0.05)",
    base: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0px 0px 0px 2px #D9B9F3",
    inner: "inset 0px 2px 4px rgba(0, 0, 0, 0.06)",
  },
  components: {
    Box: {
      baseStyle: {
        backgroundColor: "#FFFFFF",
      },
    },
  },

// Spacing 
  space: {
    "-2": "-2px",
    "0": "0px",
    "1": "1px",
    "2": "4px",
    "3": "8px",
    "4": "12px",
    "5": "16px",
    "6": "20px",
    "7": "24px",
    "8": "28px",
    "9": "32px",
    "10": "36px",
    "12": "48px",
    "14": "56px",
    "16": "64px",
    "20": "80px",
    "24": "96px",
    "28": "112px",
    "32": "128px",
    "36": "144px",
    "40": "160px",
    "44": "176px",
    "48": "192px",
    "52": "208px",
    "56": "224px",
    "60": "240px",
    "64": "256px",
    "72": "288px",
    "80": "320px",
    "96": "384px",
  },
  
  //Fonts 
  fonts: {
    body: '"Plus Jakarta Sans", sans-serif',
    heading: '"Plus Jakarta Sans", sans-serif',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
    heading: 800,
  },
  bodyStyles: {
    xs: {
      fontSize: "12px",
      lineHeight: "18px",
    },
    sm: {
      fontSize: "14px",
      lineHeight: "21px",
    },
    md: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    lg: {
      fontSize: "18px",
      lineHeight: "27px",
    },
    xl: {
      fontSize: "20px",
      lineHeight: "30px",
    },
    "2xl": {
      fontSize: "24px",
      lineHeight: "36px",
    },
    "3xl": {
      fontSize: "30px",
      lineHeight: "45px",
    },
    "4xl": {
      fontSize: "36px",
      lineHeight: "54px",
    },
    "5xl": {
      fontSize: "48px",
      lineHeight: "72px",
    },
    "6xl": {
      fontSize: "60px",
      lineHeight: "90px",
    },
  },
  headingStyles: {
    xs: {
      fontSize: "12px",
      lineHeight: "13.2px",
      letterSpacing: "-0.88px",
    },
    sm: {
      fontSize: "14px",
      lineHeight: "15.4px",
      letterSpacing: "-0.88px",
    },
    md: {
      fontSize: "16px",
      lineHeight: "17.6px",
      letterSpacing: "-0.88px",
    },
    lg: {
      fontSize: "18px",
      lineHeight: "19.8px",
      letterSpacing: "-0.88px",
    },
    xl: {
      fontSize: "20px",
      lineHeight: "22px",
      letterSpacing: "-0.88px",
    },
    "2xl": {
      fontSize: "24px",
      lineHeight: "26.4px",
      letterSpacing: "-0.88px",
    },
    "3xl": {
      fontSize: "30px",
      lineHeight: "33px",
      letterSpacing: "-0.88px",
    },
    "4xl": {
      fontSize: "36px",
      lineHeight: "39.6px",
      letterSpacing: "-0.88px",
    },
    "5xl": {
      fontSize: "48px",
      lineHeight: "52px",
      letterSpacing: "-0.88px",
    },
    "6xl": {
      fontSize: "60px",
      lineHeight: "66px",
      letterSpacing: "-0.88px",
    },
  },

// Colors 
  colors: {
    primary: {
      25: "#EEEFFD",
      50: "#FBFFF0",
      100: "#F6FEE1",
      200: "#EDFEC3",
      300: "#E5FDA4",
      400: "#DCFD86",
      500: "#D3FC68",
      600: "#A9CA53",
      700: "#7F973E",
      800: "#54652A",
      900: "#2A3215",
    },
    neutral: {
      25: "#FCFCFC",
      50: "#F9F9F9",
      100: "#F5F5F5",
      200: "#E5E5E5",
      300: "#D4D4D4",
      400: "#A3A3A3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#1F1F1F",
    },

    green: {
      50: "#F2FEF6",
      100: "#E6FEEE",
      200: "#CCFCDC",
      300: "#B3FBCB",
      400: "#99F9B9",
      500: "#80F8A8",
      600: "#66C686",
      700: "#4D9565",
      800: "#336343",
      900: "#1A3222",
    },
    red: {
      50: "#FFF1F2",
      100: "#FFE4E6",
      200: "#FECDD3",
      300: "#FDA4AF",
      400: "#FB7185",
      500: "#F43F5E",
      600: "#E11D48",
      700: "#BE123C",
      800: "#9F1239",
      900: "#881337",
    },
    yellow: {
      25: "#FFFBEB",
      50: "#FEF3C7",
      100: "#FDE68A",
      200: "#EDFEC3",
      300: "#FCD34D",
      400: "#FBBF24",
      500: "#F59E0B",
      600: "#D97706",
      700: "#B45309",
      800: "#92400E",
      900: "#78350F",
    },
    whiteAlpha,
    blackAlpha,
  },
});

export default theme;
