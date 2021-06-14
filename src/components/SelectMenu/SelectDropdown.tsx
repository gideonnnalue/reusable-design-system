import React from "react";
import Option from "./Option";
import Divider from "./Divider";

import { SelectMenuInput } from "../../theme/components";

import { ItemInterface, OptionProps, SelectDropdownInterface } from "./types";

const {
  SelectMenu: { SelectMenuDropdownWrapper, SelectMenuDropdown },
} = SelectMenuInput;

const SelectDropdown = ({
  options,
  onItemClicked,
  activeOption,
  selectOpen,
  isExtendible,
}: SelectDropdownInterface) => {
  const renderItems = (optionItems: ItemInterface[]): React.ReactElement[] => {
    return optionItems.map((item) => {
      return (
        <Option
          key={item.key}
          index={item.key}
          onItemClicked={onItemClicked}
          value={item.value}
          desc={item.desc}
          isSelected={item.key === activeOption}
          isExtendible={isExtendible}
        />
      );
    });
  };

  const renderDividedItems = (
    optionItems: ItemInterface[][]
  ): React.ReactElement[] => {
    const allOptions: React.ReactElement<OptionProps>[] = [];
    optionItems.forEach((items: ItemInterface[], index: number) => {
      items.forEach((item: ItemInterface) => {
        allOptions.push(
          <Option
            key={item.key}
            index={item.key}
            onItemClicked={onItemClicked}
            value={item.value}
            desc={item.desc}
            isSelected={item.key === activeOption}
            isExtendible={isExtendible}
          />
        );
      });
      allOptions.push(<Divider key={index} />);
    });
    return allOptions;
  };

  const renderOptions = (
    optionItems: ItemInterface[] | ItemInterface[][]
  ): React.ReactElement[] | null => {
    if (options.length > 0) {
      if (
        (optionItems as ItemInterface[][]).every(
          (items) => items.constructor === Array
        )
      ) {
        return renderDividedItems(optionItems as ItemInterface[][]);
      }
      return renderItems(optionItems as ItemInterface[]);
    }
    return null;
  };
  return (
    <SelectMenuDropdownWrapper open={selectOpen}>
      <SelectMenuDropdown role="listbox">
        {renderOptions(options)}
      </SelectMenuDropdown>
    </SelectMenuDropdownWrapper>
  );
};

export default SelectDropdown;
