export interface ThemeInterface {
  colors: {
    [key: string]:
      | string
      | {
          [key: number]: string;
        };
  };
  fontSizes: int[];
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
