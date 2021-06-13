import { FC, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import "./App.css";

import { SelectMenu } from "./components";
import theme from "./theme";

const { lightTheme, darkTheme } = theme;

const { Select, Option, OptionExtended, Divider } = SelectMenu;

const App: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div
        style={{
          backgroundColor: isDarkMode
            ? darkTheme.colors.black
            : lightTheme.backgroundColor,
          height: "100vh",
        }}
      >
        <Select defaultValue="" onChange={() => {}}>
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

        <div>
          <Select defaultValue="" onChange={() => {}}>
            <Option value="hopper">Hopper</Option>
            <Option value="holberton">Holberton</Option>
            <Divider />
            <Option value="antonelli">Antonelli</Option>
            <Option value="bartik">Bartik</Option>
            <Option value="teitelbaum">Teitelbaum</Option>
          </Select>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
