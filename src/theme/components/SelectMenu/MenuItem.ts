import styled from "@emotion/styled";
import css from "@styled-system/css";

import { MenuItemProps } from "./types";
import { ExtendedThemeInterface } from "../../themeSetup/types";

const MenuItemWrapper = styled.li(({ selected }: MenuItemProps) =>
  css(
    ({
      space,
      colors,
      fontSizes,
      backgroundColor,
      textColor,
      hoverColor,
      transition,
    }: ExtendedThemeInterface) => {
      return {
        paddingX: 0,
        paddingY: 2,
        backgroundColor: selected ? colors.green[100] : backgroundColor,
        marginY: 2,
        paddingRight: space["s-20"],
        color: selected ? colors.white : textColor,
        fontSize: fontSizes[1],
        cursor: "pointer",
        overflowWrap: "break-word",
        wordWrap: "break-word",
        hyphens: "auto",
        display: "flex",
        alignItems: "flex-start",
        transition: transition.simple,
        "&:hover": {
          backgroundColor: selected ? colors.green[100] : hoverColor,
          transition: transition.simple,
        },
        "& img": {
          paddingX: space["s-15"],
          opacity: selected ? 1 : 0,
          visibility: selected ? "visible" : "hidden",
        },
      };
    }
  )
);

const MenuItemDivider = styled.div(
  css(({ borderColor, transition }: ExtendedThemeInterface) => ({
    height: 1,
    width: "100%",
    backgroundColor: borderColor,
    transition: transition.simple,
  }))
);

const MenuItemDescription = styled.p(({ selected }: MenuItemProps) =>
  css(
    ({
      colors,
      fontSizes,
      subTextColor,
      transition,
    }: ExtendedThemeInterface) => {
      return {
        fontSize: fontSizes[0],
        color: selected ? colors.white : subTextColor,
        margin: 0,
        width: 228,
        whiteSpace: "pre-wrap",
        transition: transition.simple,
      };
    }
  )
);

export { MenuItemWrapper, MenuItemDescription, MenuItemDivider };
