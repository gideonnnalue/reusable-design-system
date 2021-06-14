export interface SelectProps {
  onChange: (key: string | number, item?: ItemInterface) => void;
  options: ItemInterface[] | ItemInterface[][];
  isExtendible?: boolean;
}

export interface OptionProps {
  key: string | number;
  index: string | number;
  value: string | number;
  isSelected: boolean;
  desc?: string;
  isExtendible: boolean;
  onItemClicked: (key: string | number, item: ItemInterface) => void;
}

export interface OptionExtendedProps extends OptionProps {
  desc: string;
}

export interface ItemInterface {
  key: string | number;
  value: string | number;
  desc?: string;
}

export interface SelectDropdownInterface {
  options: ItemInterface[] | ItemInterface[][];
  onItemClicked: (key: string | number, item: ItemInterface) => void;
  activeOption: string | number;
  selectOpen: boolean;
  isExtendible: boolean;
}
