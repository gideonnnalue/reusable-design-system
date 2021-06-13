import { ReactNode } from "react";

export interface SelectProps {
  defaultValue?: string | number;
  onChange: Function;
  children: ReactNode | any;
}

export interface OptionProps {
  children: ReactNode;
  defaultValue?: string;
  value: string;
  index?: number;
  activeIndex?: number;
  currentValue?: string;
  onItemClicked?: Function | any;
}

export interface OptionExtendedProps extends OptionProps {
  desc: string;
}
