import styled from "@emotion/styled";
import css from "@styled-system/css";

import { CheckBoxProps } from "./SelectMenu/types";
import { ThemeInterface } from "../themeSetup/types";

const CheckBox = styled.div(({ checked }: CheckBoxProps) =>
  css(({ colors }: ThemeInterface) => {
    return {
      "& > input": {
        height: 0,
        width: 0,
        visibility: "hidden",
      },
      "& > label": {
        cursor: "pointer",
        textIndent: -9999,
        width: 60,
        height: 30,
        background: checked ? colors.green[100] : colors.gray[400],
        display: "block",
        borderRadius: 100,
        position: "relative",
      },
      "& > label:after": {
        content: '""',
        position: "absolute",
        top: 3,
        left: checked ? "calc(100% - 3px)" : 3,
        transform: checked ? "translateX(-100%)" : "translateX(1)",
        width: 25,
        height: 25,
        background: colors.white,
        borderRadius: 90,
        transition: "0.3s",
      },
      "& label:active:after": {
        width: 60,
      },
    };
  })
);

export default CheckBox;
