import { ReactNode } from "react";

export interface SelectProps {
  defaultValue?: string;
  onChange: Function;
  children: any;
}

export interface OptionProps {
  children: ReactNode;
  defaultValue?: string;
  value: string;
  index?: number;
  activeIndex?: number;
  currentValue?: string;
  onItemClicked?: any;
}

export interface OptionExtendedProps extends OptionProps {
  desc: string;
}
