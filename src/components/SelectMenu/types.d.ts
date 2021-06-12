export interface SelectProps {
  defaultValue?: string;
  onChange: Function;
  children: any;
}

export interface OptionProps {
  children: any;
  defaultValue?: string;
  value: string;
  index?: number;
  activeIndex?: number;
  currentValue?: string;
  onItemClicked?: any;
}
