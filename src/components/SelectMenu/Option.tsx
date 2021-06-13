import { useEffect, FC } from "react";
import checkImg from "../../images/check-light.svg";

import { SelectMenuInput } from "../../theme/components";

import { OptionProps } from "./types";

const {
  SelectMenuItem: { MenuItemWrapper },
} = SelectMenuInput;

const Option: FC<OptionProps> = ({
  children,
  defaultValue,
  value,
  index,
  activeIndex,
  currentValue,
  onItemClicked,
}): JSX.Element => {
  useEffect(() => {
    if (defaultValue && defaultValue === value) {
      onItemClicked(value, index, children);
    }
  }, []);
  return (
    <MenuItemWrapper
      selected={currentValue === value && index === activeIndex}
      role="option"
      aria-selected={currentValue === value && index === activeIndex}
      aria-disabled={false}
      data-value={value}
      tabIndex={currentValue === value && index === activeIndex ? 0 : -1}
      onClick={() => onItemClicked(value, index, children)}
      data-testid={value}
    >
      <img src={checkImg} alt="check" />
      <span>{children}</span>
    </MenuItemWrapper>
  );
};

export default Option;
