import React, { useCallback, useEffect, useState, useRef, FC } from "react";

import SelectDropdown from "./SelectDropdown";
import chevronImg from "../../images/chevron-down.svg";

import { SelectMenuInput } from "../../theme/components";
import { SelectProps, ItemInterface } from "./types";

const {
  SelectMenu: { SelectMenuWrapper, SelectMenuContainer },
} = SelectMenuInput;

const Select: FC<SelectProps> = ({
  options,
  onChange,
  isExtendible = false,
}): JSX.Element => {
  const node = useRef<HTMLDivElement | null>(null);
  const [activeText, setActiveText] = useState<string | number>("");
  const [activeOption, setActiveOption] = useState<string | number>("");
  const [selectOpen, setSelectOpen] = useState<boolean>(false);
  const onItemClicked = useCallback(
    (key: string | number, item: ItemInterface) => {
      setActiveOption(key);
      setActiveText(item.value);
      onChange(key, item);
    },
    [onChange]
  );

  const openSelect = () => {
    setSelectOpen(true);
  };
  const closeSelect = () => {
    setSelectOpen(false);
  };

  const handleClickOutside = useCallback((e: any) => {
    if (node?.current?.contains(e.target)) {
      return;
    }
    closeSelect();
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const isDoubledArray = useCallback(
    (optionItems: ItemInterface[] | ItemInterface[][]): boolean => {
      if (options.length > 0) {
        if (
          (optionItems as ItemInterface[][]).every(
            (items) => items.constructor === Array
          )
        ) {
          return true;
        }
      }
      return false;
    },
    [options.length]
  );

  useEffect(() => {
    if (isDoubledArray(options)) {
      setActiveOption((options as ItemInterface[][])[0][0].key);
      setActiveText((options as ItemInterface[][])[0][0].value);
    } else {
      setActiveOption((options as ItemInterface[])[0].key);
      setActiveText((options as ItemInterface[])[0].value);
    }
  }, [isDoubledArray, options]);

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
      <SelectDropdown
        selectOpen={selectOpen}
        activeOption={activeOption}
        onItemClicked={onItemClicked}
        options={options}
        isExtendible={isExtendible}
      />
    </SelectMenuWrapper>
  );
};

export default Select;
