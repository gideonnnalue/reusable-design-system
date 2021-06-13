import themeDefault from "./themeDefault";
import { ExtendedThemeInterface } from "./types";

const theme: ExtendedThemeInterface = {
  ...themeDefault,
  backgroundColor: themeDefault.colors.white,
  textColor: themeDefault.colors.gray,
  borderColor: themeDefault.colors.gray[300],
  hoverColor: themeDefault.colors.gray[200],
  subTextColor: themeDefault.colors.gray[400],
};

export default theme;
