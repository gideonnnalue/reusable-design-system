import React, { FC } from "react";
import checkImg from "../../images/check-light.svg";

import { SelectMenuInput } from "../../theme/components";

import { OptionProps } from "./types";

const {
  SelectMenuItem: { MenuItemWrapper, MenuItemDescription },
} = SelectMenuInput;

const Option: FC<OptionProps> = ({
  index,
  value,
  onItemClicked,
  isSelected,
  desc,
  isExtendible,
}): JSX.Element => {
  return (
    <MenuItemWrapper
      selected={isSelected}
      role="option"
      aria-selected={isSelected}
      aria-disabled={false}
      data-value={index}
      tabIndex={isSelected ? 0 : -1}
      onClick={() => onItemClicked(index, { key: index, value, desc })}
      data-testid={index}
    >
      <img src={checkImg} alt="check" />
      <span>
        {value}
        {isExtendible && desc && (
          <MenuItemDescription selected={isSelected}>
            {desc}
          </MenuItemDescription>
        )}
      </span>
    </MenuItemWrapper>
  );
};

export default React.memo(Option);
