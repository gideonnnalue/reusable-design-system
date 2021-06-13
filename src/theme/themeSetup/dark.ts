import themeDefault from "./themeDefault";
import { ExtendedThemeInterface } from "./types";

const theme: ExtendedThemeInterface = {
  ...themeDefault,
  backgroundColor: themeDefault.colors.gray[500],
  textColor: themeDefault.colors.white,
  borderColor: themeDefault.colors.gray[400],
  hoverColor: themeDefault.colors.gray[400],
  subTextColor: themeDefault.colors.gray[300],
};

export default theme;
