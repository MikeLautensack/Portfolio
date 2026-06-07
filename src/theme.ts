import { createTheme } from "@mui/material/styles";

// Single intentional dark theme — "refined dark + blue".
// Kept under the "light" colorScheme key because the app's InitColorSchemeScript
// defaults to that scheme; the values below are our dark palette.
const theme = createTheme({
  cssVariables: true,
  colorSchemes: {
    light: {
      palette: {
        mode: "dark",
        primary: { main: "#31B0E9", contrastText: "#04121A" },
        secondary: { main: "#E7ECF2", contrastText: "#0A0E12" },
        error: { main: "#FF6F61" },
        background: { default: "#0A0E12", paper: "#0A0E12" },
        text: { primary: "#E7ECF2", secondary: "#9BA8B5" },
        divider: "rgba(255,255,255,0.10)",
      },
    },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: "var(--font-sans), system-ui, sans-serif",
    h1: { fontWeight: 800, lineHeight: 1.04, letterSpacing: "-0.02em" },
    h2: { fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.02em" },
    h3: { fontWeight: 700, lineHeight: 1.14, letterSpacing: "-0.015em" },
    h4: { fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.01em" },
    h5: { fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.01em" },
    h6: { fontWeight: 600, lineHeight: 1.4 },
    body1: { lineHeight: 1.7 },
    body2: { lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 600, letterSpacing: 0 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 9999, paddingInline: "1.4rem", paddingBlock: "0.55rem" },
      },
    },
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: "none" } },
    },
  },
});

export default theme;
