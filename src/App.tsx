import { FC, useState, useCallback } from "react";
import { ThemeProvider } from "@emotion/react";
import "./App.css";

import { Select, Checkbox } from "./components";
import { BackgroundWrapper } from "./theme/components";
import theme from "./theme";

import { ItemInterface } from "./components/SelectMenu/types";

import { items } from "./constants";

const { lightTheme, darkTheme } = theme;

const App: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const switchTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const onInputChange = useCallback(
    (key: string | number, item?: ItemInterface) => {
      console.log(key, item);
    },
    []
  );
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <BackgroundWrapper>
        <div className="checkbox-container">
          <Checkbox checked={isDarkMode} onChange={switchTheme} />
        </div>
        <div className="select-wrapper">
          <div style={{ marginLeft: 50 }}>
            <Select
              onChange={onInputChange}
              options={items}
              isExtendible={false}
            />
          </div>
        </div>
      </BackgroundWrapper>
    </ThemeProvider>
  );
};

export default App;
