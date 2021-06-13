import React, { Fragment, useEffect, useState, useRef, FC } from "react";

import chevronImg from "../../images/chevron-down.svg";

import { SelectMenuInput } from "../../theme/components";
import { SelectProps } from "./types";

const {
  SelectMenu: {
    SelectMenuWrapper,
    SelectMenuContainer,
    SelectMenuDropdownWrapper,
    SelectMenuDropdown,
  },
} = SelectMenuInput;

const Select: FC<SelectProps> = ({
  children,
  defaultValue,
  onChange,
}): JSX.Element => {
  const node: any = useRef();
  const [currentValue, setCurrentValue] = useState(defaultValue);
  const [activeText, setActiveText] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectOpen, setSelectOpen] = useState(false);
  const onItemClicked = (value: string, index: number, text: string) => {
    setCurrentValue(value);
    setActiveIndex(index);
    setActiveText(text);
    onChange(value, index);
  };

  const childrenModified = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      onItemClicked,
      index,
      currentValue,
      activeIndex,
      defaultValue,
    });
  });

  const openSelect = () => {
    setSelectOpen(true);
  };
  const closeSelect = () => {
    setSelectOpen(false);
  };

  const handleClickOutside = (e: any) => {
    if (node.current.contains(e.target)) {
      return;
    }
    closeSelect();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <SelectMenuWrapper data-testid="select-wrapper" ref={node}>
      <SelectMenuContainer
        data-testid="select-button"
        role="button"
        tabIndex={0}
        onClick={openSelect}
      >
        <span data-testid="selected-text">
          {activeText || "Select an Item"}
        </span>
        <img src={chevronImg} alt="arrow" />
      </SelectMenuContainer>
      <SelectMenuDropdownWrapper open={selectOpen}>
        <SelectMenuDropdown role="listbox">
          <Fragment>{childrenModified}</Fragment>
        </SelectMenuDropdown>
      </SelectMenuDropdownWrapper>
    </SelectMenuWrapper>
  );
};

export default Select;
