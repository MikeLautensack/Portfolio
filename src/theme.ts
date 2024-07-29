import { extendTheme } from "@mui/material/styles";
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
const theme = extendTheme({
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
          main: "#1C6586",
        },
        surfaceTint: "#1C6586",
        onPrimary: "#FFFFFF",
        primaryContainer: "#C4E7FF",
        onPrimaryContainer: "#001E2C",
        secondary: {
          main: "#0B6780",
        },
        onSecondary: "#FFFFFF",
        secondaryContainer: "#B9EAFF",
        onSecondaryContainer: "#001F29",
        tertiary: "#8A5021",
        onTertiary: "#FFFFFF",
        tertiaryContainer: "#FFDCC5",
        onTertiaryContainer: "#301400",
        error: {
          main: "#BA1A1A",
        },
        onError: "#FFFFFF",
        errorContainer: "#FFDAD6",
        onErrorContainer: "#410002",
        onBackground: "#181C1F",
        surface: "#F6FAFE",
        onSurface: "#181C1F",
        surfaceVariant: "#DCE3E9",
        onSurfaceVariant: "#41484D",
        outline: "#71787D",
        outlineVariant: "#C0C7CD",
        inverseSurface: "#2C3134",
        inverseOnSurface: "#EDF1F5",
        inversePrimary: "#90CEF3",
        primaryFixed: "#C4E7FF",
        onPrimaryFixed: "#001E2C",
        primaryFixedDim: "#90CEF3",
        onPrimaryFixedVariant: "#004C69",
        secondaryFixed: "#B9EAFF",
        onSecondaryFixed: "#001F29",
        secondaryFixedDim: "#89D0ED",
        onSecondaryFixedVariant: "#004D62",
        tertiaryFixed: "#FFDCC5",
        onTertiaryFixed: "#301400",
        tertiaryFixedDim: "#FFB782",
        onTertiaryFixedVariant: "#6D390A",
        surfaceDim: "#D6DADF",
        surfaceBright: "#F6FAFE",
        surfaceContainerLowest: "#FFFFFF",
        surfaceContainerLow: "#F0F4F8",
        surfaceContainer: "#EAEEF3",
        surfaceContainerHigh: "#E5E8ED",
        surfaceContainerHighest: "#DFE3E7",
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#90CEF3",
        },
        surfaceTint: "#90CEF3",
        onPrimary: "#00354A",
        primaryContainer: "#004C69",
        onPrimaryContainer: "#C4E7FF",
        secondary: {
          main: "#89D0ED",
        },
        onSecondary: "#003544",
        secondaryContainer: "#004D62",
        onSecondaryContainer: "#B9EAFF",
        tertiary: "#FFB782",
        onTertiary: "#4F2500",
        tertiaryContainer: "#6D390A",
        onTertiaryContainer: "#FFDCC5",
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
        secondaryFixed: "#B9EAFF",
        onSecondaryFixed: "#001F29",
        secondaryFixedDim: "#89D0ED",
        onSecondaryFixedVariant: "#004D62",
        tertiaryFixed: "#FFDCC5",
        onTertiaryFixed: "#301400",
        tertiaryFixedDim: "#FFB782",
        onTertiaryFixedVariant: "#6D390A",
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
