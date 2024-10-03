import { createTheme } from "@mui/material/styles";
import { Lato, Playfair_Display, Source_Code_Pro } from "next/font/google";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    onPrimary: string;
    surfaceTint: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
    onError: string;
    errorContainer: string;
    onErrorContainer: string;
    onBackground: string;
    surface: string;
    onSurface: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
    outline: string;
    outlineVariant: string;
    inverseSurface: string;
    inverseOnSurface: string;
    inversePrimary: string;
    primaryFixed: string;
    onPrimaryFixed: string;
    primaryFixedDim: string;
    onPrimaryFixedVariant: string;
    secondaryFixed: string;
    onSecondaryFixed: string;
    secondaryFixedDim: string;
    onSecondaryFixedVariant: string;
    tertiaryFixed: string;
    onTertiaryFixed: string;
    tertiaryFixedDim: string;
    onTertiaryFixedVariant: string;
    surfaceDim: string;
    surfaceBright: string;
    surfaceContainerLowest: string;
    surfaceContainerLow: string;
    surfaceContainer: string;
    surfaceContainerHigh: string;
    surfaceContainerHighest: string;
  }
  interface Palette {
    onPrimary: string;
    surfaceTint: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
    onError: string;
    errorContainer: string;
    onErrorContainer: string;
    onBackground: string;
    surface: string;
    onSurface: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
    outline: string;
    outlineVariant: string;
    inverseSurface: string;
    inverseOnSurface: string;
    inversePrimary: string;
    primaryFixed: string;
    onPrimaryFixed: string;
    primaryFixedDim: string;
    onPrimaryFixedVariant: string;
    secondaryFixed: string;
    onSecondaryFixed: string;
    secondaryFixedDim: string;
    onSecondaryFixedVariant: string;
    tertiaryFixed: string;
    onTertiaryFixed: string;
    tertiaryFixedDim: string;
    onTertiaryFixedVariant: string;
    surfaceDim: string;
    surfaceBright: string;
    surfaceContainerLowest: string;
    surfaceContainerLow: string;
    surfaceContainer: string;
    surfaceContainerHigh: string;
    surfaceContainerHighest: string;
  }
}

const source_code_pro = Source_Code_Pro({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

// `extendTheme` is a new API
const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: source_code_pro.style.fontFamily,
    body1: {
      lineHeight: 2, // Set your desired line height here
    },
    body2: {
      lineHeight: 1.6, // Set your desired line height here
    },
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#001824",
        },
        surfaceTint: "#90CEF3",
        onPrimary: "#00354A",
        primaryContainer: "#004C69",
        onPrimaryContainer: "#C4E7FF",
        secondary: {
          main: "#9A4F96",
        },
        onSecondary: "#4F2500",
        secondaryContainer: "#6D390A",
        onSecondaryContainer: "#FFDCC5",
        tertiary: "#CAC1E9",
        onTertiary: "#322C4C",
        tertiaryContainer: "#494264",
        onTertiaryContainer: "#E6DEFF",
        error: {
          main: "#FFB4AB",
        },
        onError: "#690005",
        errorContainer: "#93000A",
        onErrorContainer: "#FFDAD6",
        onBackground: "#DFE3E7",
        surface: "#0F1417",
        onSurface: "#DFE3E7",
        surfaceVariant: "#41484D",
        onSurfaceVariant: "#C0C7CD",
        outline: "#8B9297",
        outlineVariant: "#41484D",
        inverseSurface: "#DFE3E7",
        inverseOnSurface: "#2C3134",
        inversePrimary: "#1C6586",
        primaryFixed: "#C4E7FF",
        onPrimaryFixed: "#001E2C",
        primaryFixedDim: "#90CEF3",
        onPrimaryFixedVariant: "#004C69",
        secondaryFixed: "#FFDCC5",
        onSecondaryFixed: "#301400",
        secondaryFixedDim: "#FFB782",
        onSecondaryFixedVariant: "#6D390A",
        tertiaryFixed: "#E6DEFF",
        onTertiaryFixed: "#1D1736",
        tertiaryFixedDim: "#CAC1E9",
        onTertiaryFixedVariant: "#494264",
        surfaceDim: "#0F1417",
        surfaceBright: "#353A3D",
        surfaceContainerLowest: "#0A0F12",
        surfaceContainerLow: "#181C1F",
        surfaceContainer: "#1C2023",
        surfaceContainerHigh: "#262B2E",
        surfaceContainerHighest: "#313539",
      },
    },
  },
});
export default theme;
