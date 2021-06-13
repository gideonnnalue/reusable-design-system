import styled from "@emotion/styled";
import css from "@styled-system/css";

import { MenuDropdownProps } from "./types";
import { ThemeInterface, ExtendedThemeInterface } from "../../themeSetup/types";

const SelectMenuWrapper = styled.div(
  css(({ space }: ThemeInterface) => {
    return {
      margin: space["s-5"],
      position: "relative",
      display: "inline-block",
    };
  })
);

const SelectMenuContainer = styled.div(
  css(
    ({
      borders,
      borderRadius,
      space,
      fontSizes,
      textColor,
      borderColor,
      backgroundColor,
      hoverColor,
      transition,
    }: ExtendedThemeInterface) => {
      return {
        border: borders.thin,
        borderColor: borderColor,
        borderRadius: borderRadius.small,
        display: "flex",
        backgroundColor: backgroundColor,
        width: "fit-content",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        transition: transition.simple,
        "& span": {
          display: "block",
          paddingX: space["s-15"],
          paddingY: space["s-10"],
          fontSize: fontSizes[1],
          minWidth: 100,
          maxWidth: 250,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          color: textColor,
          transition: transition.simple,
        },
        "&::after": {
          position: "absolute",
          content: '""',
          bottom: 0,
          left: 0,
          width: "100%",
          height: 1,
          backgroundColor: hoverColor,
          transition: transition.simple,
        },
        "& img": {
          paddingRight: space["s-10"],
        },
      };
    }
  )
);

const SelectMenuDropdownWrapper = styled.div(({ open }: MenuDropdownProps) =>
  css(({ transition }: ThemeInterface) => ({
    position: "absolute",
    visibility: open ? "visible" : "hidden",
    whiteSpace: "nowrap",
    opacity: open ? 1 : 0,
    left: 0,
    top: 39,
    transform: open ? "scale(1)" : "scale(0)",
    transition: transition.dropdown,
    transformOrigin: "0px 0px",
    zIndex: 1,
  }))
);

const SelectMenuDropdown = styled.ul(
  css(
    ({
      borders,
      borderRadius,
      boxShadow,
      backgroundColor,
      borderColor,
      transition,
    }: ExtendedThemeInterface) => ({
      backgroundColor: backgroundColor,
      listStyle: "none",
      margin: 0,
      padding: 0,
      border: borders.thin,
      borderColor: borderColor,
      borderRadius: borderRadius.small,
      minWidth: 100,
      // maxWidth: 250,
      boxShadow: boxShadow,
      transition: transition.simple,
    })
  )
);

export {
  SelectMenuWrapper,
  SelectMenuContainer,
  SelectMenuDropdownWrapper,
  SelectMenuDropdown,
};
