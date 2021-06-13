import { FC, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import "./App.css";

import { SelectMenu, Checkbox } from "./components";
import theme from "./theme";

const { lightTheme, darkTheme } = theme;

const { Select, Option, OptionExtended, Divider } = SelectMenu;

const App: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const switchTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const onInputChange = (value: string) => {
    console.log(value);
  };
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div
        style={{
          backgroundColor: isDarkMode
            ? darkTheme.colors.black
            : lightTheme.backgroundColor,
          height: "100vh",
          transition: "all 0.2s",
        }}
      >
        <div className="checkbox-container">
          <Checkbox checked={isDarkMode} onChange={switchTheme} />
        </div>
        <div className="select-wrapper">
          <Select defaultValue="" onChange={onInputChange}>
            <OptionExtended
              value="hopper"
              desc="Grace Hopper was an American computer scientist and US navy rear admiral"
            >
              Hopper
            </OptionExtended>
            <OptionExtended
              value="holderton"
              desc="Frances Elizabeth Holberton was one of the programmers of the first computer"
            >
              Holberton
            </OptionExtended>
            <Divider />
            <OptionExtended
              value="teitelbaum"
              desc="Ruth Teitelbaum Hopper was one of the first computer programmers of the world"
            >
              Teitelbaum
            </OptionExtended>
          </Select>

          <div style={{ marginLeft: 50 }}>
            <Select defaultValue="" onChange={onInputChange}>
              <Option value="hopper">Hopper</Option>
              <Option value="holberton">Holberton</Option>
              <Divider />
              <Option value="antonelli">Antonelli</Option>
              <Option value="bartik">Bartik</Option>
              <Option value="teitelbaum">Teitelbaum</Option>
            </Select>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
