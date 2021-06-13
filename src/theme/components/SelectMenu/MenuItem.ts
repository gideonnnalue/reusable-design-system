import styled from "@emotion/styled";
import css from "@styled-system/css";

import { MenuItemProps } from "./types";
import { ThemeInterface } from "../../types";

const MenuItemWrapper = styled.li(({ selected }: MenuItemProps) =>
  css(({ space, colors, fontSizes }: ThemeInterface) => {
    return {
      paddingX: 0,
      paddingY: 2,
      backgroundColor: selected ? colors.green[100] : colors.white,
      marginY: 2,
      paddingRight: space["s-20"],
      color: selected ? colors.white : colors.gray[500],
      fontSize: fontSizes[1],
      cursor: "pointer",
      overflowWrap: "break-word",
      wordWrap: "break-word",
      hyphens: "auto",
      display: "flex",
      alignItems: "flex-start",
      "&:hover": {
        backgroundColor: selected ? colors.green[100] : colors.gray[200],
      },
      "& img": {
        paddingX: space["s-15"],
        opacity: selected ? 1 : 0,
        visibility: selected ? "visible" : "hidden",
      },
    };
  })
);

const MenuItemDivider = styled.div(
  css(({ colors }) => ({
    height: 1,
    width: "100%",
    backgroundColor: colors.gray[300],
  }))
);

const MenuItemDescription = styled.p(({ selected }: MenuItemProps) =>
  css(({ colors, fontSizes }) => {
    return {
      fontSize: fontSizes[0],
      color: selected ? colors.white : colors.gray[400],
      margin: 0,
      // minWidth: "100%",
      // display: "flex",
      width: 228,
      whiteSpace: "pre-wrap",
    };
  })
);

export { MenuItemWrapper, MenuItemDescription, MenuItemDivider };
