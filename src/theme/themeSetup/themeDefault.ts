import { ThemeInterface } from "./types";

const theme: ThemeInterface = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    green: {
      100: "#00A3BE",
      200: "#05778F",
    },
    gray: {
      100: "#F9FAFC",
      200: "#ECEEF4",
      300: "#CDD0E0",
      400: "#6E7492",
      500: "#191D2F",
    },
  },
  fontSizes: [12, 16],
  space: {
    "s-5": 4,
    "s-10": 8,
    "s-15": 12,
    "s-20": 16,
    "s-25": 20,
    "s-30": 24,
    "s-40": 32,
    "s-50": 40,
    "s-60": 48,
    "s-70": 56,
  },
  borders: {
    thin: "1px solid",
    thick: "2px solid",
  },
  borderRadius: {},
  transition: {},
  boxShadow: "",
};

theme.borderRadius = {
  small: theme.space["s-5"],
  medium: theme.space["s-10"],
  large: theme.space["s-15"],
};

theme.transition = {
  dropdown:
    "all 284ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 189ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  simple: "all 0.2s ease-in",
};

theme.boxShadow = `0px 2px 8px 0px ${theme.colors.gray[400]}26`;

export default theme;
