export interface ThemeInterface {
  colors: {
    [key: string]:
      | string
      | {
          [key: number]: string;
        };
  };
  fontSizes: number[];
  space: DynamicKeyStringValueNumber;
  borders: DynamicKeyValueString;
  borderRadius: DynamicKeyStringValueNumber;
  transition: DynamicKeyValueString;
  boxShadow: string;
}

export type DynamicKeyValueString = {
  [key: string]: string;
};

export type DynamicKeyStringValueNumber = {
  [key: string]: number;
};

export type DynamicKeyNumberValueString = {
  [key: string]: number;
};

export interface ExtendedThemeInterface extends ThemeInterface {
  backgroundColor: string | { [key: number]: string };
  textColor: string | { [key: number]: string };
  borderColor: string | { [key: number]: string };
  hoverColor: string | { [key: number]: string };
  subTextColor: string | { [key: number]: string };
}
