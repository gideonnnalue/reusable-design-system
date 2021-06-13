import React, { useEffect, FC } from "react";
import checkImg from "../../images/check-light.svg";

import { SelectMenuInput } from "../../theme/components";

import { OptionExtendedProps } from "./types";

const {
  SelectMenuItem: { MenuItemWrapper, MenuItemDescription },
} = SelectMenuInput;

const OptionExtended: FC<OptionExtendedProps> = ({
  children,
  defaultValue,
  value,
  desc,
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
    >
      <img src={checkImg} alt="check" />
      <span>
        {children}
        <MenuItemDescription
          selected={currentValue === value && index === activeIndex}
        >
          {desc}
        </MenuItemDescription>
      </span>
    </MenuItemWrapper>
  );
};

export default React.memo(OptionExtended);
