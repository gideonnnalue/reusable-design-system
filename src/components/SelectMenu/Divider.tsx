import { FC } from "react";
import { SelectMenuInput } from "../../theme/components";

const {
  SelectMenuItem: { MenuItemDivider },
} = SelectMenuInput;

const Divider: FC = (): JSX.Element => {
  return <MenuItemDivider />;
};

export default Divider;
