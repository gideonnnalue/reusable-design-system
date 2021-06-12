import styled from "@emotion/styled";
import css from "@styled-system/css";

import { MenuDropdownProps } from "./types";
import { ThemeInterface } from "../../types";

const SelectMenuWrapper = styled.div(
  css(({ space }: ThemeInterface) => {
    return {
      margin: space["s-25"],
      position: "relative",
      display: "inline-block",
    };
  })
);

const SelectMenuContainer = styled.div(
  css(({ borders, colors, borderRadius, space, fontSizes }: ThemeInterface) => {
    return {
      border: borders.thin,
      borderColor: colors.gray[300],
      borderRadius: borderRadius.small,
      display: "flex",
      minWidth: 100,
      width: "fit-content",
      overflow: "hidden",
      position: "relative",
      cursor: "pointer",
      "& span": {
        display: "block",
        paddingX: space["s-15"],
        paddingY: space["s-10"],
        fontSize: fontSizes[1],
      },
      "&::after": {
        position: "absolute",
        content: '""',
        bottom: 0,
        left: 0,
        width: "100%",
        height: 1,
        backgroundColor: colors.gray[200],
      },
      "& img": {
        paddingRight: space["s-10"],
      },
    };
  })
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
  css(({ colors, borders, borderRadius, boxShadow }: ThemeInterface) => ({
    backgroundColor: colors[100],
    listStyle: "none",
    margin: 0,
    padding: 0,
    border: borders.thin,
    borderColor: colors.gray[300],
    borderRadius: borderRadius.small,
    minWidth: 100,
    boxShadow: boxShadow,
  }))
);

export {
  SelectMenuWrapper,
  SelectMenuContainer,
  SelectMenuDropdownWrapper,
  SelectMenuDropdown,
};
